'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d5c63e87471128af03b4fdd24f38e7e",
"version.json": "07e12126516517b226069bce791e2486",
"index.html": "8977efe11cb18044e271805a2af20e30",
"/": "8977efe11cb18044e271805a2af20e30",
"main.dart.js": "41d1d2fb99a1b6346db35576aba23fa6",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "aa78c79c2e5541ef1809f2a1fd342c9e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e3cb2b7fe69e04223b9a1c3af08e6a23",
"main.dart.wasm": "61eab07b1a38b73b644304c19550a1f3",
"assets/NOTICES": "20377077796347b2350328f7b43707ef",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "aaea18e434ac5920f06dbf0c85606ac4",
"assets/packages/flutter_monaco/pubspec.yaml": "7c08d4bc508400166710042aa6ac4c7a",
"assets/packages/flutter_monaco/assets/github.svg": "26acaeb7ed061a2114c2160f2c2dce3c",
"assets/packages/flutter_monaco/assets/monaco/min/vs/scss-C1cmLt9V.js": "6f41d0d81b4b891b1d869ab166d4dfb1",
"assets/packages/flutter_monaco/assets/monaco/min/vs/solidity-MZ6ExpPy.js": "5180b5a74ceb56406d0f56dbe1d993fc",
"assets/packages/flutter_monaco/assets/monaco/min/vs/clojure-Y2auQMzK.js": "e2a0e81d3729d65be4f926922393c39e",
"assets/packages/flutter_monaco/assets/monaco/min/vs/scheme-CHdMtr7p.js": "a615146d3a307c1c7cbc2fe644629f02",
"assets/packages/flutter_monaco/assets/monaco/min/vs/fsharp-BOMdg4U1.js": "5939ef6b8abd9ecb25bd9fbd93df0526",
"assets/packages/flutter_monaco/assets/monaco/min/vs/hcl-DTaboeZW.js": "345055c236dacd254ba976f3df3dfa46",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages-loader.js": "9e21a09be57ff852b21389497e60c914",
"assets/packages/flutter_monaco/assets/monaco/min/vs/editor.api-i0YVFWkl.js": "e704eb11bc7f158430e2bcf016823311",
"assets/packages/flutter_monaco/assets/monaco/min/vs/ecl-30fUercY.js": "43e45e0fc7f7afa261bed0499e01eb34",
"assets/packages/flutter_monaco/assets/monaco/min/vs/_commonjsHelpers-CT9FvmAN.js": "4a48565772bbe45985e54e3895501f5c",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.it.js": "60aee8767f7bcd5c4432f276a1e34b2b",
"assets/packages/flutter_monaco/assets/monaco/min/vs/basic-languages/monaco.contribution.js": "2b7b5661debf8a4a03d95eb0dd1e70be",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.es.js": "f5ae4b6e3f50cdc3f7190b7ebae0c584",
"assets/packages/flutter_monaco/assets/monaco/min/vs/liquid-STktYroN.js": "9e3d4175a0dce07a7a281bea8fc1b8df",
"assets/packages/flutter_monaco/assets/monaco/min/vs/ruby-CZO8zYTz.js": "16f7642ce03dc7d2017a2f1a626616ab",
"assets/packages/flutter_monaco/assets/monaco/min/vs/objective-c-CntZFaHX.js": "e6aec163dfc7d5ff83409372483235d7",
"assets/packages/flutter_monaco/assets/monaco/min/vs/msdax-C38-sJlp.js": "d509b8c4a364a2d0c566da24b7a197c4",
"assets/packages/flutter_monaco/assets/monaco/min/vs/powershell-B-7ap1zc.js": "22ee9a4418305725ab0b7e2e824305de",
"assets/packages/flutter_monaco/assets/monaco/min/vs/freemarker2-CJME-ah8.js": "e793daa50fc0df616449ebaa541c474a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/redis-fvZQY4PI.js": "61dfc96077f10e8886787114fea69d4c",
"assets/packages/flutter_monaco/assets/monaco/min/vs/systemverilog-Ch4vA8Yt.js": "d6fb3d30bedeff41e78795614283454a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.fr.js": "089b5fc9809a47608487a26d61ae1809",
"assets/packages/flutter_monaco/assets/monaco/min/vs/handlebars-NccI6MVO.js": "feb6b5fd252cdd03383661a182cc47b9",
"assets/packages/flutter_monaco/assets/monaco/min/vs/sb-3GYllVck.js": "29001894bd09b546687d762cd475d15a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/csharp-CX28MZyh.js": "cbab847bfda42e379a2188e3ea8e389f",
"assets/packages/flutter_monaco/assets/monaco/min/vs/xml-DRHZuZwg.js": "8ae61d61715a46f524633ceb3ce8b662",
"assets/packages/flutter_monaco/assets/monaco/min/vs/mips-CiYP61RB.js": "a7984755de015d502b486ba0519e9f44",
"assets/packages/flutter_monaco/assets/monaco/min/vs/pla-VfZjczW0.js": "4ed2f54268f7bc585015ac0671a6fea0",
"assets/packages/flutter_monaco/assets/monaco/min/vs/pascaligo-BiXoTmXh.js": "382301e1eac4ff40e762e23341e968f8",
"assets/packages/flutter_monaco/assets/monaco/min/vs/cpp-CkKPQIni.js": "59f8644b208c81222048ee96d0a523fa",
"assets/packages/flutter_monaco/assets/monaco/min/vs/kotlin-BLeVJFaw.js": "e0a7d4b844888e1a0236adfd424f8812",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.de.js": "1c255248994d727a1ecf9bdd93bc59e9",
"assets/packages/flutter_monaco/assets/monaco/min/vs/css-CaeNmE3S.js": "dedc444d7536344db2170fbdd30273e7",
"assets/packages/flutter_monaco/assets/monaco/min/vs/shell-ClXCKCEW.js": "dace60e2242bc60c7095e0aad56b2f4b",
"assets/packages/flutter_monaco/assets/monaco/min/vs/rust-Bfetafyc.js": "32a0e1e979a1c81582aac948616d819a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/scala-foMgrKo1.js": "ead7b69776975ed0255a781ac954c723",
"assets/packages/flutter_monaco/assets/monaco/min/vs/lspLanguageFeatures-A02kBDb6.js": "3dd794c2b7482cac48b2aaec054f85f9",
"assets/packages/flutter_monaco/assets/monaco/min/vs/tcl-D74tq1nH.js": "926d428dccd60364b204d199ad0d5518",
"assets/packages/flutter_monaco/assets/monaco/min/vs/sparql-AUGFYSyk.js": "b77181eadd5f24ce6312c5018a79095d",
"assets/packages/flutter_monaco/assets/monaco/min/vs/bicep-DF5aW17k.js": "a507b805fe34311c6734b49628f2baa3",
"assets/packages/flutter_monaco/assets/monaco/min/vs/csp-D8uWnyxW.js": "f6c4d86e9c28c7e2f0538b9f69e8df26",
"assets/packages/flutter_monaco/assets/monaco/min/vs/mdx-C6mq4H94.js": "a5c66d3a1199f3d92a0b5fbbe47a8dfd",
"assets/packages/flutter_monaco/assets/monaco/min/vs/php-D_kh-9LK.js": "d4d6a847cb5619053e75768ce1b24a07",
"assets/packages/flutter_monaco/assets/monaco/min/vs/typescript-4zug7YwV.js": "5fdb3d6f4c95fb6cde82d81a27cb950d",
"assets/packages/flutter_monaco/assets/monaco/min/vs/go-D_hbi-Jt.js": "6211ff4a45b33da5295b7642082caf76",
"assets/packages/flutter_monaco/assets/monaco/min/vs/java-CI4ZMsH9.js": "80cb94e1a1c694682e29a0e0f2f08fc2",
"assets/packages/flutter_monaco/assets/monaco/min/vs/language/css/monaco.contribution.js": "be2181f3336016d8482d72fed74eaf87",
"assets/packages/flutter_monaco/assets/monaco/min/vs/language/typescript/monaco.contribution.js": "69b271ce56523880b60ddcd85d9b8a50",
"assets/packages/flutter_monaco/assets/monaco/min/vs/language/html/monaco.contribution.js": "f2d2cd5a09303c5e482f3ac09e417e85",
"assets/packages/flutter_monaco/assets/monaco/min/vs/language/json/monaco.contribution.js": "968f5d6d9c93353c32fc88c32a4fa7d6",
"assets/packages/flutter_monaco/assets/monaco/min/vs/razor-JzN5FpSg.js": "4ec399f1a3284c064f186cb3c7e8f840",
"assets/packages/flutter_monaco/assets/monaco/min/vs/redshift-45Et0LQi.js": "70e5811cf89e78d17fe09ea0d1ee4032",
"assets/packages/flutter_monaco/assets/monaco/min/vs/julia-BwzEvaQw.js": "b78bd37eda518cebee751e700d0d393e",
"assets/packages/flutter_monaco/assets/monaco/min/vs/st-CuDFIVZ_.js": "540690fcd5c30ad3f7e57853316b6101",
"assets/packages/flutter_monaco/assets/monaco/min/vs/javascript-CUpTMdAr.js": "1ea7e1aa17836ed091034c283a049f16",
"assets/packages/flutter_monaco/assets/monaco/min/vs/swift-n-2HociN.js": "71df66a78aca6c0841450b76991daaba",
"assets/packages/flutter_monaco/assets/monaco/min/vs/powerquery-Dt-g_2cc.js": "20a9745598e24163b626514a71351cbf",
"assets/packages/flutter_monaco/assets/monaco/min/vs/typespec-D-PIh9Xw.js": "0b8a844c4ed95d1e52658d287784055b",
"assets/packages/flutter_monaco/assets/monaco/min/vs/elixir-xjPaIfzF.js": "c139e67c14d1223eae42a815ecdfd13a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/yaml-CkWIGXBM.js": "f24ebafe294ae2d5b513d2eda8c7e812",
"assets/packages/flutter_monaco/assets/monaco/min/vs/html-K7M-xuod.js": "8be6fd5c47a3643ecd6a6757ba1766bc",
"assets/packages/flutter_monaco/assets/monaco/min/vs/twig-C6taOxMV.js": "e00521368d3af6efbbc44c8b7351b757",
"assets/packages/flutter_monaco/assets/monaco/min/vs/flow9-DqtmStfK.js": "9418c3db156c5ff392744c995b9ca920",
"assets/packages/flutter_monaco/assets/monaco/min/vs/dart-CmGfCvrO.js": "53299cf8cc2c0428879169fae4dfe2e9",
"assets/packages/flutter_monaco/assets/monaco/min/vs/lexon-iON-Kj97.js": "e0f4113ed03f2af61b36dd0868474580",
"assets/packages/flutter_monaco/assets/monaco/min/vs/pascal-r6kuqfl_.js": "702a67029c2bac299993a6c78adc277d",
"assets/packages/flutter_monaco/assets/monaco/min/vs/cssMode-CGp6dFmI.js": "46b73fcec4f0b3dbf3369715f4b16eb7",
"assets/packages/flutter_monaco/assets/monaco/min/vs/ini-CsNwO04R.js": "2b1d3fc24f3e91d8c7ee1ca23ca90415",
"assets/packages/flutter_monaco/assets/monaco/min/vs/azcli-BA0tQDCg.js": "43d4af923a75bdb52edee1970db32bef",
"assets/packages/flutter_monaco/assets/monaco/min/vs/tsMode-i88JHxDY.js": "2edcb0ff2871bf8281ada7e2407b1a62",
"assets/packages/flutter_monaco/assets/monaco/min/vs/dockerfile-CZqqYdch.js": "526e21a1bfc3b59789a5af173abe4ca3",
"assets/packages/flutter_monaco/assets/monaco/min/vs/htmlMode-DtjCNH-N.js": "214f8720f87fe25d69dc3222c8a9ecac",
"assets/packages/flutter_monaco/assets/monaco/min/vs/sql-32GpJSV2.js": "63cb5f3eb2bfe952616c229b1e596a33",
"assets/packages/flutter_monaco/assets/monaco/min/vs/abap-D-t0cyap.js": "878f18f1c9daffff63186dd68ea2001b",
"assets/packages/flutter_monaco/assets/monaco/min/vs/cameligo-plsz8qhj.js": "8b07bc70382c7f48fd37de87f524aef3",
"assets/packages/flutter_monaco/assets/monaco/min/vs/sophia-DWkuSsPQ.js": "04af1333a7f748e93ab50eb5efcc9752",
"assets/packages/flutter_monaco/assets/monaco/min/vs/postiats-BBSzz8Pk.js": "3b68dff1c265ad4a470c4d9cd2338269",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.ja.js": "c5cbfe7a190a2b2ab2300c243726aaef",
"assets/packages/flutter_monaco/assets/monaco/min/vs/jsonMode-CJjR_ECa.js": "084847fb30de6d218d8b3f62e5f94f35",
"assets/packages/flutter_monaco/assets/monaco/min/vs/workers-CbP2cVmy.js": "10545eedbbfcd6b0e87d7baefcbc1b21",
"assets/packages/flutter_monaco/assets/monaco/min/vs/wgsl-BhLXMOR0.js": "6e7ccddd1a86949e25a597747cb1d4ad",
"assets/packages/flutter_monaco/assets/monaco/min/vs/bat-C397hTD6.js": "4e1d2ddd59b467fc13a07ac7baea65fd",
"assets/packages/flutter_monaco/assets/monaco/min/vs/restructuredtext-C7UUFKFD.js": "3704b7917ae996882a788ec2092a3655",
"assets/packages/flutter_monaco/assets/monaco/min/vs/pgsql-me_jFXeX.js": "472f92c7d4db2fe909e954066f6dded3",
"assets/packages/flutter_monaco/assets/monaco/min/vs/cypher-DVThT8BS.js": "6e59e3b8c7dc2c4e6ad289ac8ba2784b",
"assets/packages/flutter_monaco/assets/monaco/min/vs/python-B-Y2SC3b.js": "fe85ee610f63e624655c6fed8016aa86",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.ru.js": "39d9ab52cd9c6b115056f088356a29c8",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.zh-tw.js": "f1a4c873c5a708f35a85dfa10e8aca7e",
"assets/packages/flutter_monaco/assets/monaco/min/vs/less-C0eDYdqa.js": "077b034955740b21533b9e0ee7c253d0",
"assets/packages/flutter_monaco/assets/monaco/min/vs/perl-DABw_TcH.js": "b4f87349d6c625be4720842a6ba657d5",
"assets/packages/flutter_monaco/assets/monaco/min/vs/assets/ts.worker-C4E4vgbE.js": "cfa6e9ba3992c4caa12366aa218e605a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/assets/css.worker-cO8rX8Iy.js": "e66e14cf95773033f19cb93a1ccc6d96",
"assets/packages/flutter_monaco/assets/monaco/min/vs/assets/json.worker-DghZTZS7.js": "f1cb09d87ac1d7b4f400881a51f9c30f",
"assets/packages/flutter_monaco/assets/monaco/min/vs/assets/editor.worker-DM0G1eFj.js": "6b441887e23051e3dff9784a65b80316",
"assets/packages/flutter_monaco/assets/monaco/min/vs/assets/html.worker-BruuIJkK.js": "051f31a91d6eaf647d4ae6dab05dc8a7",
"assets/packages/flutter_monaco/assets/monaco/min/vs/m3-CsR4AuFi.js": "5f4dffbda7f31d456f807822a4793349",
"assets/packages/flutter_monaco/assets/monaco/min/vs/pug-BRpRNeEb.js": "9ba3b65053e41aa128432fd934e9eac1",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.zh-cn.js": "f0b220eb848829eb621298813ad78a31",
"assets/packages/flutter_monaco/assets/monaco/min/vs/protobuf-BmtuEB1A.js": "db119da7fd727773a5d5b00f34142780",
"assets/packages/flutter_monaco/assets/monaco/min/vs/lua-DtygF91M.js": "44ced53d5a6b4d8aafb8ac8994ee5ee7",
"assets/packages/flutter_monaco/assets/monaco/min/vs/nls.messages.ko.js": "efe7d50a4c072e83ee239d4b0c5f446a",
"assets/packages/flutter_monaco/assets/monaco/min/vs/qsharp-BzsFaUU9.js": "91feccc1bfef3392f472e529bd5c6595",
"assets/packages/flutter_monaco/assets/monaco/min/vs/markdown-C_rD0bIw.js": "a96775ef25f324d40b707afb494d94c6",
"assets/packages/flutter_monaco/assets/monaco/min/vs/r-f8dDdrp4.js": "652a5aed2d31b401431688fe147a374f",
"assets/packages/flutter_monaco/assets/monaco/min/vs/coffee-Bu45yuWE.js": "39c01b8108e782427e1fcdb26fe6f7c6",
"assets/packages/flutter_monaco/assets/monaco/min/vs/editor/editor.main.css": "0241e0de54b6787d7b441b8aa21950eb",
"assets/packages/flutter_monaco/assets/monaco/min/vs/editor/editor.main.js": "eb782680acf78b5d2c3ed34cc6997ccd",
"assets/packages/flutter_monaco/assets/monaco/min/vs/mysql-CdtbpvbG.js": "607230de9ddcf1c7e1047eed96de8249",
"assets/packages/flutter_monaco/assets/monaco/min/vs/graphql-CKUU4kLG.js": "197988cf789d1df853f4f5b61130d1fd",
"assets/packages/flutter_monaco/assets/monaco/min/vs/loader.js": "d4d9390a105f9cef9b6514f1dacb6c43",
"assets/packages/flutter_monaco/assets/monaco/min/vs/apex-CcIm7xu6.js": "d9042998c5758af514908f7122cda444",
"assets/packages/flutter_monaco/assets/monaco/min/vs/vb-Dyb2648j.js": "75dbc57b359ad188983b948b3fde867f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "ba59fac3979145115d83fa8491a92cf5",
"assets/fonts/MaterialIcons-Regular.otf": "cff587ba7ec9bf1873319482cec9e8c8",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
