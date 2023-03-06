/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable func-names */

import { describe, beforeAll, it } from '@effection/jest';
import { TaskScheduler } from '@backstage/backend-tasks';
import { ServerPermissionClient } from '@backstage/plugin-permission-node';
import { CatalogClient, GetEntitiesResponse } from '@backstage/catalog-client';
import { ConfigReader } from '@backstage/config';
import { backstageConfig } from './config';
import { DatabaseManager, ServerTokenManager, SingleHostDiscovery, UrlReaders } from '@backstage/backend-common';
import { ClientFactory, useCatalog, useIncrementalBuilder, useLogger } from './setupTests';
import { PluginEnvironment } from '../types';
import { Operation } from 'effection';

describe('incrementally ingest entities', () => {
  const factory = new ClientFactory();
  let catalog: CatalogClient;
  let stop: () => Promise<void>;
  let rebuild: () => Operation<void>;

  beforeAll(function* () {
    const logger = yield useLogger()
    const config = new ConfigReader(backstageConfig);
    const reader = UrlReaders.default({ logger, config });
    const databaseManager = DatabaseManager.fromConfig(config);
    const discovery = SingleHostDiscovery.fromConfig(config);
    const tokenManager = ServerTokenManager.noop();
    const permissions = ServerPermissionClient.fromConfig(config, { discovery, tokenManager });
    const scheduler = TaskScheduler.fromConfig(config).forPlugin('catalog');
    const env: PluginEnvironment = {
      logger,
      database: databaseManager.forPlugin('catalog'),
      config,
      reader,
      permissions,
      scheduler
    };
    const { builder, incrementalBuilder } = yield useIncrementalBuilder({ ...env, factory })
    ;({ stop, rebuild } = yield useCatalog({ ...env, builder, incrementalBuilder, discovery }));
    catalog = new CatalogClient({ discoveryApi: discovery });
  });


  beforeEach(function* () {
    yield stop();
    yield rebuild();
  })

  // TODO example of scenario
  // get 5 entities => get an error => start again => get 4 entities instead of 5

  describe('successfully ingest data', function* () {
    beforeAll(function* () {
      yield factory.createClient([
        { type: 'data', dataId: 1, page: ['a', 'b', 'c', 'd', 'e'], totalPages: 1 },
      ]);
    })

    it.eventually('test', function* () {
      const { items }: GetEntitiesResponse = yield catalog.getEntities()

      expect(items).toHaveLength(5)
    })
  });

  jest.setTimeout(15000);
  it('successfuly ingest data', function* () {
    yield factory.createClient([
      { dataId: 1, data: ['a', 'b', 'c', 'd', 'e'], delay: 10 },
    ]);
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.dir(yield catalog.getEntities(), { depth: 10 });
  })
  it('successfuly ingest data 2', function* () {
    yield factory.createClient([
      { dataId: 1, data: ['1', '2', '3', '4', '5'], delay: 10 },
    ]);
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.dir(yield catalog.getEntities(), { depth: 10 });
  })
})
