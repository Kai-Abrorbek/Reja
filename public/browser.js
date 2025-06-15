
console.log("FrontEnd Js ishga tushdi.");

function itemTemplate(item){
  return `
    <li class="list-group-item list-group-item-info d-flex 
            align-items-center justify-content-between">
      <span id="item-text">${item.reja}</span>
      <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
          Ozgartirissh
        </button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
          Ochirish
        </button>
      </div>
    </li>
  `
}

let createField = document.getElementById("create-field")
document.getElementById("create-form").addEventListener("submit", function(e){
  e.preventDefault();
  axios
  .post("/create-item", {reja: createField.value})
  .then((response) => {
    document.getElementById("item-list")
      .insertAdjacentHTML("beforeend", itemTemplate(response.data))
      createField.value = "";
      createField.focus();
  }).catch((err) =>{
    console.log(err);
  })
})


document.addEventListener("click", function(e){
  if(e.target.classList.contains("edit-me")){
    let userOldInput =  e.target.parentElement.previousElementSibling.textContent.trim();
    let userNewInput = prompt("O'zgartirish kiriting!", userOldInput);
    if(userNewInput){
      axios
        .post("/edit-item/" + e.target.getAttribute("data-id"), {newInput: userNewInput})
        .then((response) => {
          e.target.parentElement
          .previousElementSibling.textContent = response.data.data;
        })
        .catch((err) => {});
    }
    
  }else if(e.target.classList.contains("delete-me")){
    if(confirm("Rostanham ochirmoqchimisiz?")){
      axios
      .post("/delete-item/" + e.target.getAttribute("data-id"))
      .then((response) => {
        e.target
        .parentElement
        .parentElement.remove();
      })
      .catch((err) => {});
    }
  }
})


document.querySelector(".delete-all").addEventListener("click", function(e){
  axios
      .post("/delete-all", {delete_all: true})
      .then((response) => {
        alert(response.data.state);
        location.reload();
      })
      .catch((err) => {});
})
