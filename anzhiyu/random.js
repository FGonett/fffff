var posts=["posts/4a17b156.html","posts/679efaa8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };