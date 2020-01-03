const comments = [];
let likes = 0;
const like_btn = document.getElementById("like_btn");

like_btn.addEventListener("click", () => {
    if(likes === 0) {
        likes = 1;
    } else {
        likes = 0;
    }
    document.getElementById('likes').innerHTML = likes;
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    const comment = document.getElementById("comment").value;
    if(comment.length > 1) {
        comments.unshift(comment);
        printComments();
    }
    document.getElementById("comment").value = "";
    e.preventDefault();
})

function printComments() {
    const commentsDiv = document.getElementById("comments");
    let outpu = "";
    comments.forEach(c => {
        outpu += `<div class="comment">
            ${c}
        </div>`;
    })
    commentsDiv.innerHTML = outpu;
    document.getElementById("comments_label").innerHTML = comments.length;
}