var posts=["2024/06/24/hello-world/","2024/06/24/“第一篇文章”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };