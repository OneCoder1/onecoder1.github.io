var posts=["posts/d69ac772.html","posts/4a17b156.html","posts/32ee5bcf.html","posts/1d0f5724.html","posts/8cb6891e.html","posts/306cb7c5.html","posts/205bf421.html","posts/f6562d1e.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};