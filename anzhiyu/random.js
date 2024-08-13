var posts=["posts/21118/","posts/40486/","posts/31322/","posts/40486/","posts/50857/","posts/14369/","posts/35411/","posts/36171/","posts/13529/","posts/2607/","posts/5401/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };