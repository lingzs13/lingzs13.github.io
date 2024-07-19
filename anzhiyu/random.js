var posts=["posts/50857/","posts/14369/","posts/21118/","posts/40486/","posts/26940/","posts/174/","posts/49263/","posts/36171/","posts/13529/","posts/2607/","posts/5401/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };