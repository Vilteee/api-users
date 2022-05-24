fetch('https://jsonplaceholder.typicode.com/posts?_limit=15&_start=7')

  .then(res => res.json())
  .then(posts => {

    let postsList = document.querySelector('#posts-list');

    posts.map(post => {
      let title = post.title;
      let body = post.body;
      let userId = post.userId;
      let postItem = document.createElement('div');
      postItem.classList.add('post-item');
      postsList.append(postItem);
      fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(res => res.json())
        .then(user => {
          postItem.innerHTML = `<h2>${title}</h2>
                                <span><strong>Post created by:</strong> <a href="./user.html?user_id=${userId}">${user.name}</a></span>
                                <p>${body}</p>`;
        })
    })
  })
