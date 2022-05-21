console.log('labas')



let queryParams = document.location.search;
let urlParams = new URLSearchParams(queryParams)
let postId = urlParams.get('post_id');


fetch ('https://jsonplaceholder.typicode.com/posts/ ' + postId)

.then(res => res.json())
.then(post => {
    let postElement = document.querySelector('#post-element')
})