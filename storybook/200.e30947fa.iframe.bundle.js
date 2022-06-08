(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{"../plugins/home/src/homePageComponents/WelcomeTitle/WelcomeTitle.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return WelcomeTitle}));var _backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../packages/core-plugin-api/src/index.ts"),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@material-ui/core/esm/Tooltip/Tooltip.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/react-use/lib/useAsync.js"),react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3__),_timeUtil__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../plugins/home/src/homePageComponents/WelcomeTitle/timeUtil.ts");const _jsxFileName="/home/runner/work/backstage-source/backstage-source/plugins/home/src/homePageComponents/WelcomeTitle/WelcomeTitle.tsx";var enterModule;function _optionalChain(ops){let lastAccessLHS,value=ops[0],i=1;for(;i<ops.length;){const op=ops[i],fn=ops[i+1];if(i+=2,("optionalAccess"===op||"optionalCall"===op)&&null==value)return;"access"===op||"optionalAccess"===op?(lastAccessLHS=value,value=fn(value)):"call"!==op&&"optionalCall"!==op||(value=fn(((...args)=>value.call(lastAccessLHS,...args))),lastAccessLHS=void 0)}return value}(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const WelcomeTitle=()=>{const identityApi=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.useApi)(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.identityApiRef),alertApi=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.useApi)(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_0__.alertApiRef),greeting=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>Object(_timeUtil__WEBPACK_IMPORTED_MODULE_4__.a)()),[]),{value:profile,error:error}=react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3___default()((()=>identityApi.getProfileInfo()));return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{error&&alertApi.post({message:`Failed to load user identity: ${error}`,severity:"error"})}),[error,alertApi]),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a,{title:greeting.language,__self:void 0,__source:{fileName:_jsxFileName,lineNumber:45}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{__self:void 0,__source:{fileName:_jsxFileName,lineNumber:46}},`${greeting.greeting}${_optionalChain([profile,"optionalAccess",_=>_.displayName])?`, ${_optionalChain([profile,"optionalAccess",_2=>_2.displayName])}`:""}!`))};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(WelcomeTitle,"WelcomeTitle","/home/runner/work/backstage-source/backstage-source/plugins/home/src/homePageComponents/WelcomeTitle/WelcomeTitle.tsx"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/WelcomeTitle/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule,reactHotLoader,leaveModule,_WelcomeTitle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/home/src/homePageComponents/WelcomeTitle/WelcomeTitle.tsx");__webpack_require__.d(__webpack_exports__,"WelcomeTitle",(function(){return _WelcomeTitle__WEBPACK_IMPORTED_MODULE_0__.a})),(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module),reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&leaveModule(module)}.call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodAfternoon.locales.json":function(module){module.exports=JSON.parse('{"English":"Good afternoon","Abkhaz":"Уа, мшы бзиа","Adyghe":"Уимафэ шІу","Afrikaans":"Goeie middag","Albanian":"Mirëdita","Aleut":"Angaliichxizax̂","Aklan":"Mayad nga hapon","Alsatian":"Güete Nàchmittag","Arabic":"مساء الخير","Armenian":"Բարի կէսօր:","Assamese":"শুভ আবেলি","Asturian":"Bones tardes","Australian":"G\'day","Azerbaijani":"Günortanız xeyir","Bashkir":"хәйерле көн","Basque":"Arratsalde on","Bavarian":"Guadn åmd","Bengali":"শুভ বিকাল","Bhojpuri":"राम राम","Bosnian":"Dobar dan","Breton":"Demat","Bulgarian":"Добър ден","Cebuano":"Maayong Hapon","Chamorro":"Buenas tåtdes","Chinese":"午安","Cornish":"Dohajydh da","Corsican":"Bonghjornu","Croatian":"Dobar dan","Cuyonon":"Mayad nga apon","Czech":"Dobré odpoledne","Danish":"God eftermiddag","Dutch":"Goedemiddag","Estonian":"Tere päevast","Ewe":"Ŋdɔ","Faroese":"Góðan dagin","Fijian":"Bula","Finnish":"Hyvää päivää","Flemish":"Ghoeie middagh","French":"Bon après-midi","Frisian (North)":"Moin","Frisian (West)":"Goeie middei","Friulian":"Bundì","Galician":"Boa tarde","Georgian":"დილა მშვიდობისა","German":"Guten Tag","Greek":"Καλό απόγευμα","Greenlandic":"Inuugujaq","Haitian Creole":"Bon apre-midi","Hausa":"Barka da yamma","Hawaiian":"Aloha ʻauinalā","Hebrew":"אחר צהריים טובים","Hindi":"नमस्कार","Icelandic":"Góðan dag","Iloko":"Naimbag a malem","Indonesian":"Selamat sore","Iñupiaq":"Unnusatkun","Gaelic":"Tráthnóna maith duit","Italian":"Buongiorno","Japanese":"こんにちは","Javanese":"Sugeng siang","Jèrriais":"Bouônjour","Kannada":"ಶುಭ ಮಧ್ಯಾಹ್ನ","Kazakh":"Kayırlı kun","Khmer":"ទិវាសួស្ដី","Korean":"안녕하세요","Kurdish":"Rojbash","Kyrgyz":"Кутмандуу күнүңүз менен","Latvian":"Labdien","Limburgish":"Gojemiddig","Lithuanian":"Laba diena","Low German":"Moin","Lozi":"Ki musihali","Lule Sámi":"Buorre biejvve","Luxembourgish":"Gudde Mëtteg","Macedonian":"Добар ден","Malagasy":"Manao ahoana e","Maltese":"Wara nofsinhar it-tajjeb","Mam":"Qa’lte","Manx":"Fastyr mie","Māori":"Kia ora","Middle Egyptian Hieroglyphs":"𓄤  𓅓𓈙𓂋𓅱𓇰","Nepali":"नमस्कार","Newari":"भिं न्हि","Northern Sámi":"Buorre beaivvi","Northern Sotho":"Dumêlang","Norwegian":"God ettermiddag","Occitan":"Bon vèspre","Odia":"ସୁଭ ଖରା ବେଳ","Papiamento":"Bon tardi","Pashto":"ورځ مو په خير","Polish":"Dzień dobry","Portuguese":"Boa tarde","Romanian":"Bună ziua","Russian":"Добрый день","Sakha":"Үтүө күнүнэн","Sardinian":"Bona sera","Scottish Gaelic":"Feasgar math","Scots":"Guid efternuin","Serbian":"Добар дан","Shona":"Masikati","Sicilian":"Bon jornu","Sinhala":"සුභ දවාලක්","Slovenian":"Dober dan","Somali":"Galab wanaagsan","Southern Sámi":"Buerie biejjie","Sumerian":"𒄭𒌓𒁀","Swahili":"Habari ya mchana","Swedish":"God eftermiddag","Swiss German":"Gueten Abig","Tagalog":"Magandang hapon po","Tamil":"மதிய வணக்கம்","Tatar":"Xäyerle kön","Telugu":"శుభ మద్యాహ్నం","Tetum":"Botarde","Thai":"สวัสดีครับ","Tibetan":"ཉིན་གུང་བདེ་ལེགས།","Tok Pisin":"Apinum","Tongan":"Mālō tau ma‘u e ho‘ata ni","Tsonga":"Indzengha","Tswana":"Thupama e e monate","Turkish":"Tünaydın","Ukrainian":"Доброго дня","Urdu":"روز بخير","Uzbek":"Xayrli kun","Venetian":"Bondì","Vietnamese":"Xin chào","Võro":"Hüvvä lõunaaigo","Welsh":"P\'nawn da","Xhosa":"Uben\' emva kwemini entle","Yapese":"Fal\'e misii","Yiddish":"א גוט אָוונט","Yucatec Maya":"Ma\'lob chi\'inil K\'iin","Zazaki":"Perocê şıma xeyr bo","Zulu":"Sawubona"}')},"../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodEvening.locales.json":function(module){module.exports=JSON.parse('{"Afrikaans":"Goeienaand","Aklanon":"Mayad nga gabi-i","Albanian":"Mirëmbrëma","Anglo-Saxon":"God æfen","Arabic":"Masaa al-khair","Aragonese":"Buena nuei","Armenian":"Pari yerego","Aromunian":"Bunã seara","Asante":"Maadwó","Asturian":"Bona nuechi","Ateso":"Akwar najokan","Australian":"G\'day","Aymara":"Winas tartis","Azerbaijani":"Axşamınız xeyir","Basque":"Arratsalde on","Belorussian":"Dobry viechar","Bemba":"Cungulopo mukwai","Bengali":"Shuvo shandhya","Bilen":"Aja kunduKw’ma?","Breton":"Noz vat","Bulgarian":"Dobar vecher","Cantonese":"Maan ngon","Cassubian":"Dobri wieczór","Catalan":"Bona tarda","Chamorro":"Pupuengin maolek","Chechen":"Sürea dika yoila","Comoran":"Bariza massihou","Cornish":"Gorthugher da","Croatian":"Dobra večer","Czech":"Dobrý večer","Danish":"God aften","Dutch":"Goedenavond","Edo":"Ób’ótà","English":"Good evening","Esperanto":"Bonan vesperon","Estonian":"Tere õhtust","Faroese":"Gott kvøld","Farsi":"Shab beh\'khayr","Fijian":"Ni sa bogi","Finnish":"Hyvää iltaa","French":"Bonsoir","Galician":"Boas noites","Georgian":"Saghamo mshvidobisa","German":"Guten Abend","Greek":"Kalinichta","Guarani":"Mba’éichapa ndepyhare","Hebrew":"Erev tov","Hungarian":"Jó estét","Icelandic":"Gott kvöld","Indonesian":"Selamat malam","Irish Gaelic":"Tráthnóna","Italian":"Buona sera","Japanese":"こんばんは","Japanese (Romanji)":"Konban wa","Kazakh":"Kayırlı keş","Kurdish":"Evarbash","Latvian":"Labvakar","Lithuanian":"Labas vakaras","Low German":"Moin","Luganda":"Osiibye otya nno","Luo":"Oimore","Luxembourgish":"Gudden Owend","Macedonian":"Dobra vecher","Malay":"Selamat malam","Maltese":"Il-lejla t-tajba","Mandarin":"Wan shang hao","Maori":"Kia orana ‘i teia a’ia’i","Marshallese":"Yokwe in jota","Mawe":"Awãe aiko","Middle Egyptian Hieroglyphs":"𓄤  𓅱𓃉𓇰","Mongolian":"Odoin mend","Norwegian [Bokmaal]":"God kveld","Odia":"ସୁଭସନ୍ଧ୍ୟା","Polish":"Dobry wieczór","Portuguese":"Boa noite","Quiché":"Xe q’ij","Romani [Sinte]":"Lashi rachi","Romanian":"Bunã seara","Russian":"Добрый вечер","Scottish Gaelic":"Feasgar mhath","Scots":"Guid eenin","Sesotho":"Fonane","Serbian":"Добро вече","Slovak":"Dober vecher","Slovenian":"Dober vecher","Somali":"Habeen wanaagsan","Spanish":"Buenas tardes","Sumerian":"𒄭𒈪","Swedish":"God afton","Tagalog":"Magandang gabi","Tatar":"Xäyerle kiç","Telugu":"శుభ సాయంత్రం","Thai":"Sawat-dii torn khum","Turkish":"İyi akşamlar","Ukrainian":"Добрий вечiр","Uzbek":"Xayrli kech","Welsh":"Noswaith dda","Yiddish":"Ah gutn ovnt","Chinese":"晚安","Valyrian":"sȳz bantis"}')},"../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodMorning.locales.json":function(module){module.exports=JSON.parse('{"English":"Good morning","Afrikaans":"Goeiemôre, Môre","Albanian":"Mirëmëngjes","Arabic":"صباح الخير","Armenian":"Paree looys","Australian":"G\'day","Azerbaijani":"Sabahınız xeyir","Bengali":"shuprobhat","Bulgarian":"Dobro utro","Catalan":"Bon dia","Chinese":"早安","Croatian":"Dobro jutro","Czech":"Dobré ráno","Danish":"God morgen","Dutch":"Goedemorgen","Esperanto":"Bonan matenon","Estonian":"Tere hommikust","Finnish":"Hyvää huomenta","French":"Bonjour","German":"Guten Morgen","Greek":"Kaliméra","Kalaallisut":"Iterluarit","Hawaiian":"Aloha kakahiaka","Hebrew":"boker tov","Hindi":"Namaste","Hungarian":"Jó reggelt","Indonesian":"Selamat pagi","Irish":"Dia dhuit","Italian":"Buongiorno","Japanese":"おはよう","Korean":"안녕하세요","Kazakh":"Kayırlı tan","Kurdish":"Beyanî baş","Lithuanian":"Labas rytas","Low German":"Moin","Macedonian":"Добро утро","Malay":"Selamat pagi","Maltese":"Bonġu","Middle Egyptian Hieroglyphs":"𓄤 𓃀 𓂓 𓇳𓐅","Nepali":"subha prabhat","Norwegian":"God morgen","Odia":"ସୁପ୍ରଭାତ","Polish":"Dzień dobry","Portuguese":"Bom dia","Romanian":"Bună dimineaţa","Russian":"Доброе утро","Serbian":"Добро јутро","Spanish":"Buenos días","Sumerian":"𒄭𒌓","Swahili":"Habari ya asubuhi","Swedish":"God morgon","Tagalog":"Magandang umaga po","Taiwanese":"爻早","Tatar":"Xäyerle irtä","Telugu":"శుభోదయం","Thai":"สวัสดีครับ","Turkish":"Günaydın","Ukrainian":"Доброго ранку","Urdu":"صبح بخير","Uzbek":"Xayrli tong","Vietnamese":"Chào buổi sáng","Welsh":"Bore da","Latvian":"Labrīt","Valyrian":"Sȳz ñāqes"}')},"../plugins/home/src/homePageComponents/WelcomeTitle/timeUtil.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return getTimeBasedGreeting}));var enterModule,_locales_goodMorning_locales_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodMorning.locales.json"),_locales_goodAfternoon_locales_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodAfternoon.locales.json"),_locales_goodEvening_locales_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../plugins/home/src/homePageComponents/WelcomeTitle/locales/goodEvening.locales.json");(enterModule=__webpack_require__("../node_modules/react-hot-loader/index.js").enterModule)&&enterModule(module);const greetingRandomSeed=Math.floor(1e6*Math.random());function getTimeBasedGreeting(){const currentHour=new Date(Date.now()).getHours();if(currentHour>=23)return{language:"Seriously",greeting:"Get some rest"};const greetings=(hour=currentHour)<12?_locales_goodMorning_locales_json__WEBPACK_IMPORTED_MODULE_0__:hour<17?_locales_goodAfternoon_locales_json__WEBPACK_IMPORTED_MODULE_1__:_locales_goodEvening_locales_json__WEBPACK_IMPORTED_MODULE_2__;var hour;const greetingsKey=(array=Object.keys(greetings))[greetingRandomSeed%array.length];var array;return{language:greetingsKey,greeting:greetings[greetingsKey]}}var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__("../node_modules/react-hot-loader/index.js").default,leaveModule=__webpack_require__("../node_modules/react-hot-loader/index.js").leaveModule,reactHotLoader&&(reactHotLoader.register(greetingRandomSeed,"greetingRandomSeed","/home/runner/work/backstage-source/backstage-source/plugins/home/src/homePageComponents/WelcomeTitle/timeUtil.ts"),reactHotLoader.register(getTimeBasedGreeting,"getTimeBasedGreeting","/home/runner/work/backstage-source/backstage-source/plugins/home/src/homePageComponents/WelcomeTitle/timeUtil.ts"),leaveModule(module))}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))}}]);