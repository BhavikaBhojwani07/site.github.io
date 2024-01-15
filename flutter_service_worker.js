'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d28efb129b8f81c9f99e37344f737a6c",
"assets/AssetManifest.bin.json": "67eb6f2d146a0b3d12a613551c234fb7",
"assets/AssetManifest.json": "017b65ec0e596d2876b553fdbc3032e8",
"assets/assets/fonts/CGTimesBoldItalic.TTF": "2c38959d725850c25b755c34ac88a317",
"assets/assets/fonts/CGTimesItalic.TTF": "46956b10b26053953a1def9728a859eb",
"assets/assets/fonts/CGTR45W.TTF": "7e79eaa1690e1922d14f826f4d068edf",
"assets/assets/fonts/CG_Times_Bold.TTF": "2f7897999792a2e73d74ca3ea02d2758",
"assets/assets/images/adf-logo-animation-3.gif": "e1b0e1e3bc7f71ce303ab91c72f50519",
"assets/assets/images/adf_1.png": "df8de1c19004f60190dbc55a3ffdbba0",
"assets/assets/images/adf_2.png": "05d566a3fe95b96c9bc6b29c75690ffa",
"assets/assets/images/adf_3.png": "0b39ac01a45a21f5248cdb2b9a05bece",
"assets/assets/images/adf_4.png": "9bd0378523fd947ddaaf78c940d0e2ff",
"assets/assets/images/adf_5.png": "1d8af621661ec2f0916701e27495693f",
"assets/assets/images/adf_tab.png": "ac721041d41c434af55e0a98934e353d",
"assets/assets/images/allcargo_logo.png": "571e8a2bcbd00da4cd50529c67af9850",
"assets/assets/images/am-ex-1.gif": "7ec10ffbd838266e48c62e2980e85c7c",
"assets/assets/images/amex-01.png": "0915aca71bbf5f972a769318208712e7",
"assets/assets/images/amex-04.png": "2b92cf5e31a9ae5f7a2f372f3156074e",
"assets/assets/images/amex-05.png": "9f426225ab1a827d2ad86a49fb9f9134",
"assets/assets/images/amex-06.png": "b93e762cbe533997dd29001374c2a47d",
"assets/assets/images/amex_tab.png": "5a9f78d6f848e17121fa421f827971b3",
"assets/assets/images/amrcnexprs_logo.png": "5d64e097f24d2ba4f0dfa032a085701f",
"assets/assets/images/bg_image.jpg": "79f3539e2268bb58f6af01648ddc15a9",
"assets/assets/images/downloadresume.jpg": "af66add456f6a594726d886af5e4a89d",
"assets/assets/images/experience.png": "88bc4f416eb30cddb82da63038820be2",
"assets/assets/images/Fabelle.gif": "e691f3f532f1364d3b492ddd476c2947",
"assets/assets/images/Fabelleportfolio-01.png": "ef2691a20eb58f0a71a47495ca52b04a",
"assets/assets/images/Fabelleportfolio-03.jpg": "e0d71bbd26a9e1dc13e3eb9f713af5b1",
"assets/assets/images/Fabelleportfolio-04.png": "9e471c09f86b3399e7c17d98dce32738",
"assets/assets/images/Fabelleportfolio-05.png": "c08ec6d793edc110704ba180fec30048",
"assets/assets/images/fabelle_logo.png": "c951bc2baabb1d35bea9098e333b4bc1",
"assets/assets/images/gati-portfolio-image-1.jpg": "40a5747493b70622b1740d38dfa7888b",
"assets/assets/images/gati-portfolio-image-2.jpg": "c2a4c41dc7a792c79a5111a4cb28222e",
"assets/assets/images/gatiportfolio-0.png": "579001669c9e6a8018f9dc18b5cfd979",
"assets/assets/images/gati_tab.png": "814807425700b05fb8123b4aac2a569e",
"assets/assets/images/hoka-last.png": "4d85d1e282125ecea4aaf6134c1f1f4b",
"assets/assets/images/hoka_1.png": "86d7f042be21453fcbdef82bd9f15100",
"assets/assets/images/hoka_2.png": "222be2be209135a9c19199c3f991cfd7",
"assets/assets/images/Hoka_GIF.gif": "dd1ca5d0afe94fa58b775a792df97713",
"assets/assets/images/hoka_tab.png": "3287478fe456f370496982b227e63f1a",
"assets/assets/images/itc_logo.png": "e5427adcb2badffea60368bbb7b07d74",
"assets/assets/images/itc_tab.png": "eac495fa350601ad7ad586790aca14b4",
"assets/assets/images/lemontree_logo.png": "bf836ae2ce02d607216a20c64be95e37",
"assets/assets/images/logofolio1.png": "14bf3327b5a2e56041d1ba3cdebe8b36",
"assets/assets/images/logofolio2.png": "daef40736b0a0a2ae8548b7dc6e441cf",
"assets/assets/images/logofolio_tab.png": "62e70446be874c2dd5b969335116beea",
"assets/assets/images/pharmeasy_logo.png": "b2a3a6988203852fd092ddc491adeef0",
"assets/assets/images/pngwing.com.png": "9dfcd8b67be8a1f89f50ade5ca434ddd",
"assets/assets/images/resume-14.png": "d4b9a29baa64f34481161602961de7a7",
"assets/assets/images/resume_profile.jpg": "6b7c021327c6a21e85d4b5e214cf11a8",
"assets/assets/images/skills.png": "15ac408411aab420dec35b39fb69c015",
"assets/assets/images/sourabhracetext-18.png": "49e629b31dd1a3df3f36d6bb581cda63",
"assets/assets/images/sunfeast_logo.png": "383b425ae924d7d8ee4526e0eb69006a",
"assets/assets/images/Transcon-03-03.png": "1e55d1b29a778ef4bacf5987ce7b7f10",
"assets/assets/images/Transcon-04.png": "15d79458c861fddf8d8c95a1f45986bb",
"assets/assets/images/Transcon-05.png": "cc5d419d8e51135319dbe7e587250677",
"assets/assets/images/Transcon-06.png": "76b7e67d372be408881e6a21fa31295b",
"assets/assets/images/transcon_tab.png": "ab341e0be166a0e9c5712bd8e9638478",
"assets/assets/images/Triz-1gif.gif": "1596745897e00592ea2f1c600baf49d3",
"assets/assets/images/Triz-1img.jpg": "cd50745673753afaeaa075412ddf2740",
"assets/assets/images/Triz-2gif.gif": "bbf23e1ce5fa36d2465bfe28921f24e0",
"assets/assets/images/Trizcardredesign-01.png": "ff10c6f3427ba92a7b66610361dcd100",
"assets/assets/images/Trizcardredesign-02.png": "f7e10fd3d4e88cd61c13d2872e9ced28",
"assets/assets/images/trizcard_tab.png": "66e75bce7194b27a88e3c4a5b7091356",
"assets/assets/images/whardt-1.png": "8bc875444cfef7a2f2b4129b59d03bd5",
"assets/assets/images/whardt-2.jpg": "55cb8ff92b724cff34c4d98b5e936161",
"assets/assets/images/whardt-3.jpg": "5c8fed9846be2992cc31b52985d6d14f",
"assets/assets/images/whardt-5.jpg": "a9a91825920b41f484b25eeed7583a92",
"assets/assets/images/whardt-6.jpg": "6e40063bbf2ae321051747fea2379cbf",
"assets/assets/images/whardt_tab.png": "d947c7cf0cd0b282a3e45694683fec0d",
"assets/assets/images/wockhardt_logo.png": "b1354634d0802ad56fbe59be5d693db0",
"assets/assets/vdo/amex_vdo.mp4": "ea963909ed939659f15f9e3a2f298424",
"assets/assets/vdo/gati.mp4": "617fa3c234e073e217dcc497c823e991",
"assets/assets/vdo/Itcvideo.mp4": "3bc888cb21da5dc07b0122acc8efa56a",
"assets/assets/vdo/whardtvdo.mp4": "a2dded80a784a04946c73b3d94c480db",
"assets/FontManifest.json": "8c74acfdb7d6b8a9e1e81475873d52b9",
"assets/fonts/CGTimesBoldItalic.TTF": "2c38959d725850c25b755c34ac88a317",
"assets/fonts/CGTimesItalic.ttf": "46956b10b26053953a1def9728a859eb",
"assets/fonts/CGTR45W.TTF": "7e79eaa1690e1922d14f826f4d068edf",
"assets/fonts/CGTR66W.TTF": "2c38959d725850c25b755c34ac88a317",
"assets/fonts/CG_Times_Bold.ttf": "2f7897999792a2e73d74ca3ea02d2758",
"assets/fonts/MaterialIcons-Regular.otf": "fed9ac25a2bdb4938ce6925e935d447e",
"assets/fonts/VAG%20Rounded%20Bold.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/images/adf-logo-animation-3.gif": "e1b0e1e3bc7f71ce303ab91c72f50519",
"assets/images/adf_1.png": "df8de1c19004f60190dbc55a3ffdbba0",
"assets/images/adf_2.png": "05d566a3fe95b96c9bc6b29c75690ffa",
"assets/images/adf_3.png": "0b39ac01a45a21f5248cdb2b9a05bece",
"assets/images/adf_4.png": "9bd0378523fd947ddaaf78c940d0e2ff",
"assets/images/adf_5.png": "1d8af621661ec2f0916701e27495693f",
"assets/images/adf_tab.png": "ac721041d41c434af55e0a98934e353d",
"assets/images/allcargo_logo.png": "571e8a2bcbd00da4cd50529c67af9850",
"assets/images/am-ex-1.gif": "7ec10ffbd838266e48c62e2980e85c7c",
"assets/images/amex-01.png": "0915aca71bbf5f972a769318208712e7",
"assets/images/amex-04.png": "2b92cf5e31a9ae5f7a2f372f3156074e",
"assets/images/amex-05.png": "9f426225ab1a827d2ad86a49fb9f9134",
"assets/images/amex-06.png": "b93e762cbe533997dd29001374c2a47d",
"assets/images/amex_tab.png": "5a9f78d6f848e17121fa421f827971b3",
"assets/images/amrcnexprs_logo.png": "5d64e097f24d2ba4f0dfa032a085701f",
"assets/images/bg_image.jpg": "79f3539e2268bb58f6af01648ddc15a9",
"assets/images/downloadresume.jpg": "af66add456f6a594726d886af5e4a89d",
"assets/images/experience.png": "88bc4f416eb30cddb82da63038820be2",
"assets/images/Fabelle.gif": "e691f3f532f1364d3b492ddd476c2947",
"assets/images/Fabelleportfolio-01.png": "ef2691a20eb58f0a71a47495ca52b04a",
"assets/images/Fabelleportfolio-03.jpg": "e0d71bbd26a9e1dc13e3eb9f713af5b1",
"assets/images/Fabelleportfolio-04.png": "9e471c09f86b3399e7c17d98dce32738",
"assets/images/Fabelleportfolio-05.png": "c08ec6d793edc110704ba180fec30048",
"assets/images/fabelle_logo.png": "c951bc2baabb1d35bea9098e333b4bc1",
"assets/images/gati-portfolio-image-1.jpg": "40a5747493b70622b1740d38dfa7888b",
"assets/images/gati-portfolio-image-2.jpg": "c2a4c41dc7a792c79a5111a4cb28222e",
"assets/images/gatiportfolio-0.png": "579001669c9e6a8018f9dc18b5cfd979",
"assets/images/gati_tab.png": "814807425700b05fb8123b4aac2a569e",
"assets/images/hoka-last.png": "4d85d1e282125ecea4aaf6134c1f1f4b",
"assets/images/hoka_1.png": "86d7f042be21453fcbdef82bd9f15100",
"assets/images/hoka_2.png": "222be2be209135a9c19199c3f991cfd7",
"assets/images/Hoka_GIF.gif": "dd1ca5d0afe94fa58b775a792df97713",
"assets/images/hoka_tab.png": "3287478fe456f370496982b227e63f1a",
"assets/images/itc_logo.png": "e5427adcb2badffea60368bbb7b07d74",
"assets/images/itc_tab.png": "eac495fa350601ad7ad586790aca14b4",
"assets/images/lemontree_logo.png": "bf836ae2ce02d607216a20c64be95e37",
"assets/images/logofolio1.png": "14bf3327b5a2e56041d1ba3cdebe8b36",
"assets/images/logofolio2.png": "daef40736b0a0a2ae8548b7dc6e441cf",
"assets/images/logofolio_tab.png": "62e70446be874c2dd5b969335116beea",
"assets/images/pharmeasy_logo.png": "b2a3a6988203852fd092ddc491adeef0",
"assets/images/pngwing.com.png": "9dfcd8b67be8a1f89f50ade5ca434ddd",
"assets/images/skills.png": "15ac408411aab420dec35b39fb69c015",
"assets/images/sourabhracetext-18.png": "49e629b31dd1a3df3f36d6bb581cda63",
"assets/images/sunfeast_logo.png": "383b425ae924d7d8ee4526e0eb69006a",
"assets/images/Transcon-03-03.png": "1e55d1b29a778ef4bacf5987ce7b7f10",
"assets/images/Transcon-04.png": "15d79458c861fddf8d8c95a1f45986bb",
"assets/images/Transcon-05.png": "cc5d419d8e51135319dbe7e587250677",
"assets/images/Transcon-06.png": "76b7e67d372be408881e6a21fa31295b",
"assets/images/transcon_tab.png": "ab341e0be166a0e9c5712bd8e9638478",
"assets/images/Triz%2520card%2520redesign-02.png": "f7e10fd3d4e88cd61c13d2872e9ced28",
"assets/images/Triz-1gif.gif": "1596745897e00592ea2f1c600baf49d3",
"assets/images/Triz-1img.jpg": "cd50745673753afaeaa075412ddf2740",
"assets/images/Triz-2gif.gif": "bbf23e1ce5fa36d2465bfe28921f24e0",
"assets/images/Trizcardredesign-01.png": "ff10c6f3427ba92a7b66610361dcd100",
"assets/images/Trizcardredesign-02.png": "f7e10fd3d4e88cd61c13d2872e9ced28",
"assets/images/trizcard_tab.png": "66e75bce7194b27a88e3c4a5b7091356",
"assets/images/whardt-1.png": "8bc875444cfef7a2f2b4129b59d03bd5",
"assets/images/whardt-2.jpg": "55cb8ff92b724cff34c4d98b5e936161",
"assets/images/whardt-3.jpg": "5c8fed9846be2992cc31b52985d6d14f",
"assets/images/whardt-5.jpg": "a9a91825920b41f484b25eeed7583a92",
"assets/images/whardt-6.jpg": "6e40063bbf2ae321051747fea2379cbf",
"assets/images/whardt_tab.png": "d947c7cf0cd0b282a3e45694683fec0d",
"assets/images/wockhardt_logo.png": "b1354634d0802ad56fbe59be5d693db0",
"assets/NOTICES": "43ccaaef96553760502b8c99e20c4479",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/resume/Hexaleaf_Technologies_Pvt.pdf": "502e2ddcb9b6135688d60ad91373b746",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/vdo/amex_vdo.mp4": "ea963909ed939659f15f9e3a2f298424",
"assets/vdo/gati.mp4": "617fa3c234e073e217dcc497c823e991",
"assets/vdo/Itcvideo.mp4": "3bc888cb21da5dc07b0122acc8efa56a",
"assets/vdo/whardtvdo.mp4": "a2dded80a784a04946c73b3d94c480db",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8d6d17e341f9fc04820cf700a26f5b5a",
"/": "8d6d17e341f9fc04820cf700a26f5b5a",
"main.dart.js": "0c4af8d58837baa5883af0d81c568e6b",
"manifest.json": "873dce3b0c119d0f7c96a0702bccbe39",
"version.json": "3d580c8884ce2e572a5ba7fd382bd4a3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
