
const cacheData = 'pwav1'

this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheData).then(cach => {
            cach.addAll([
                "/static/js/bundle.js",
                "/static/js/0.chunk.js",
                "/static/js/main.chunk.js",
                "/",
                "index.html",
                "/about",
                "/user",
            ])
        })
    )
})

this.addEventListener('fetch', (e) => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then(res => {
                if (res) {
                    return res;
                }
                let requestUrl=e.request.clone()
                return fetch(requestUrl)
            })
        )
    }

})