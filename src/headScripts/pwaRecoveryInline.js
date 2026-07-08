/**
 * Inline head script: must run before deferred main/runtime bundles.
 * Exported as a string for docusaurus.config.js headTags.
 */
module.exports = `(function(){if("undefined"==typeof window)return;var k="kai_pwa_recovery_attempted";function r(){if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1");var u="serviceWorker"in navigator?navigator.serviceWorker.getRegistrations().then(function(e){return Promise.all(e.map(function(e){return e.unregister()}))}):Promise.resolve(),c="caches"in window?caches.keys().then(function(e){return Promise.all(e.map(function(e){return caches.delete(e)}))}):Promise.resolve();u.then(c).finally(function(){location.reload()})}window.addEventListener("error",function(e){var t=String(e&&e.message||""),n=String(e&&e.filename||"");n.indexOf("/assets/js/")!==-1&&(t.indexOf("Invalid or unexpected token")!==-1||t.indexOf("Unexpected token")!==-1)&&r()},!0)})();`;
