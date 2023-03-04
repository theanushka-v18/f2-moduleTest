// Get all the elements
let createBtn = document.querySelector("#create-btn");
let modalWrapper = document.querySelector(".modal-wrapper");
let closeBtn = document.querySelector(".close");
let postTitle = document.querySelector("#title");
let postDesc = document.querySelector("#desc");
let publishBtn = document.querySelector("#publish");
let cancelBtn = document.querySelector("#cancel");
let postHeading = document.querySelector("#postHeading");
let postDescription = document.querySelector("#postDescription");
let blogContainer = document.querySelector(".blogContainer");

let editBtn, deleteBtn, id = 0;
let deleteId = null;

// function to remove data from mmodal input box after publishing blogs
function vanishInputVal() {
    postTitle.value = "";
    postDesc.value = "";
}

// delete blog
function deleteFunc(deleteId) {
    deleteBtn.addEventListener('click', function(e) {
        let getGrandParentNode = deleteBtn.parentNode.parentNode;
        if(deleteId != null) {
            arr.push({parentNode: getGrandParentNode, idx: deleteId});
            deleteId = null;
        }
        arr.forEach((k) => {
            console.log(k);
        })
    })
}

// to pop-up modal
createBtn.addEventListener('click', function() {
    modalWrapper.classList.add("modal-active");
})

// to remove modal on clicking close button
closeBtn.addEventListener("click", function() {
    modalWrapper.classList.remove("modal-active");
})

// to render blog on main page on clicking publish button
publishBtn.addEventListener("click", function() {
    // get dates 
    let Fulldate = new Date();
    let date = Fulldate.getDate();
    let month = Fulldate.getMonth()+1;
    let year = Fulldate.getFullYear();

    id = id+1;
    blogContainer.innerHTML += `<div class="container-fluid blogPost">
                                    <h2 id="postHeading" class="text-white">${postTitle.value}</h2>
                                    <p id="postDescription" class="text-white">${postDesc.value}</p>
                                    <div class="postBtns">
                                        <button class="btn btn-outline-light">Edit Post</button>
                                        <button id=${id} class="btn btn-outline-light">Delete Post</button>
                                        <div class="time">Created At: ${date}/0${month}/${year}</div>
                                    </div>
                                </div>`;

    // editBtn = document.getElementById(`${id}`);
    deleteBtn = document.getElementById(`${id}`);
    deleteFunc(id);

    // after rendering blog post on main page , remove the modal
    modalWrapper.classList.remove("modal-active");
    vanishInputVal();
})

// to remove modal also on clicking cancel button
cancelBtn.addEventListener("click", function() {
    modalWrapper.classList.remove("modal-active");
    vanishInputVal();
})
