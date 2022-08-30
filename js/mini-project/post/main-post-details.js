// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.

let url = new URL(location.href);
let postId = url.searchParams.get('id');
console.log(postId);
let postBlock = document.getElementsByClassName('postBlock')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(responsePost => responsePost.json())
    .then(post => createPostBlock(post));

function createPostBlock(post) {
    let postCard = document.createElement('div');
    postCard.classList.add('postCard');
    document.body.appendChild(postCard);
    let postUserId = document.createElement('div');
    postUserId.innerText = `Post ID: ${post.userId}`;
    let postID = document.createElement('div');
    postID.innerText = `ID: ${post.id}`;
    let postTitle = document.createElement('div');
    postTitle.innerText = `Title: ${post.title}`;
    let postBody = document.createElement('div');
    postBody.innerText = `Body: ${post.body}`;


// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

    //button
    let commentsBtn = document.createElement('button');
    commentsBtn.classList.add('commentsBtn');
    commentsBtn.innerText = 'comments';
    commentsBtn.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(responseComments => responseComments.json())
            .then(comments => {
                let commentsBlock = document.createElement('div');
                commentsBlock.classList.add('commentsBlock');
                comments.forEach(comment => {
                    let commentsCard = document.createElement('div');
                    commentsCard.classList.add('commentsCard');
                    let commentPostId = document.createElement('p');
                    commentPostId.innerText = `Post ID: ${comment.postId}`;
                    let commentId = document.createElement('p');
                    commentId.innerText = `ID: ${comment.id}`;
                    let commentName = document.createElement('p');
                    commentName.innerText = `Name: ${comment.name}`;
                    let commentEmail = document.createElement('p');
                    commentEmail.innerText = `Email: ${comment.email}`;
                    let commentBody = document.createElement('p');
                    commentBody.innerText = `Body: ${comment.body}`;
                    document.body.appendChild(commentsBlock);
                    commentsBlock.append(commentsCard);
                    commentsCard.append(commentPostId, commentId, commentName, commentEmail, commentBody)
                })
            });
    }

    postBlock.append(postCard);
    postCard.append(postUserId, postID, postTitle, postBody, commentsBtn);
}


//так можно?
// postBlock.innerHTML = `
//     <div>Post ID: ${post.userId}</div>
//     <div>ID: ${post.id}</div>
//     <div>Title: ${post.title}</div>
//     <div>Body: ${post.body}</div>
// `
