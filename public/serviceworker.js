const CACHE_NAME = "version-1";
const urlsToCache = ['index.html','offline.html'];

const self = this;

//Intall SW
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log('Opened Cache');

                return cache.addAll(urlsToCache);
            })
    )
});



//Listen for reqs

self.addEventListener('fetch',(event)=>{

});

//Activate the SW

self.addEventListener('activate',(event)=>{

});