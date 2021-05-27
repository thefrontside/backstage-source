/*
 * Copyright 2021 Spotify AB
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
const path = require('path');

import convert from '@openapi-contrib/json-schema-to-openapi-schema';

const schemasPath = path.resolve(__dirname, '../../catalog-model/src');

type CatalogApiParams = {
  Entity: Record<string | number, any>;
};

async function catalogOpenApiSpecification({ Entity }: CatalogApiParams) {
  const entity = await convert(Entity);

  return {
    openapi: '3.0.0',
    info: {
      title: 'Catalog RESTAPI Specification',
      version: '0.0.1',
    },
    paths: {
      '/entries': {
        get: {
          responses: {
            '200': {
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Entity',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Entity: entity,
      },
    },
  };
}

catalogOpenApiSpecification({
  Entity: require(path.join(schemasPath, 'schema', 'Entity.schema.json')),
});
