const commentForm = document.getElementById('commentForm');

const postId = parseInt(document.body.getAttribute('data-post-id'), 10);


function postComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const websiteInput = document.getElementById('websiteInput');
    const commentInput = document.getElementById('commentInput');

    const name = nameInput.value;
    const website = websiteInput.value;
    const comment = commentInput.value;

    fetch('https://api.ruflas.dev/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, website, comment, post_id: postId }) // usar postId aquí
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });

    nameInput.value = '';
    websiteInput.value = '';
    commentInput.value = '';
    setTimeout(loadComments, 1000);
}

const commentsContainer = document.getElementById('commentsContainer');

function displayComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');

    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const nameElement = document.createElement('h3');
        nameElement.textContent = comment.name;

	commentElement.appendChild(nameElement);

	if (comment.website && comment.website.trim() !== '') {
            const websiteElement = document.createElement('a');
            
            if (!/^http(s)?:\/\//.test(comment.website)) {
                comment.website = 'https://' + comment.website;
            }
            websiteElement.href = comment.website;
            websiteElement.textContent = comment.website;
            websiteElement.target = '_blank';

            commentElement.appendChild(websiteElement);
        }

        const contentElement = document.createElement('p');
        contentElement.textContent = comment.comment;

        commentElement.appendChild(contentElement);

        commentsContainer.appendChild(commentElement);
    });
}


function loadComments() {
    fetch(`https://api.ruflas.dev/comments?post_id=${postId}`)
        .then(response => response.json())
        .then(data => {
            displayComments(data);
        })
        .catch(error => {
            console.error(error);
        });
}

window.onload = function() {
    loadComments();
}

