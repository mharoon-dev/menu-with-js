let body = document.querySelector('body')
body.style.height = "100vh"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "start"
body.style.alignItems = "center"


let btnsName = [
    "ALL",
    "FAST FOOD",
    "FISHES",
    "DRINKS"
]

let btnsContainer = document.querySelector(".btnsContainer")

btnsName.forEach(function (btn) {
    let btns = document.createElement("div")
    btns.style.marginLeft = "0.5rem"
    btns.innerHTML = `<button id="btn" onclick="showItems('${btn.toLowerCase()}')" type="button" class="btn btn-outline-warning">${btn}</button>`
    btnsContainer.appendChild(btns)
})


let foodItems = [
    {
        name: "burger",
        RS: "600",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/burger.png",
        cetagory:"fast food"
    },
    {
        name: "apple juice",
        RS: "250",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/apple juice.png",
        cetagory:"drinks"
    },
    {
        name: "broast",
        RS: "400",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/broast.jpg",
        cetagory:"fast food"
    },
    {
        name: "finger fish",
        RS: "850",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/finger fish.png",
        cetagory:"fishes"
    },
    {
        name: "mango juice",
        RS: "350",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/mango-juice.png",
        cetagory:"drinks"
    },
    {
        name: "fish",
        RS: "500",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/fish.png",
        cetagory:"fishes"
    },
    {
        name: "sandwhich",
        RS: "430",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        image:"./images/sandwhich.png",
        cetagory:"fast food"
    },
   
]

let mainContainer = document.querySelector('.main-items-container')


function showItems(category) {
  console.log(btnsContainer);

    mainContainer.innerHTML = "";

    var filtration = foodItems.filter(function (item) {
      if (item.cetagory == category) {
        return true;
      }
    }); 

    if (filtration == "") {
        filtration = foodItems
    }

    filtration.forEach(function (menuCard) {
        
        mainContainer.innerHTML += 
    `<div 
        class="col-md-4 col-sm-6 mb-3 ms-3 me-3 p-0 card" 
        style="width: 18rem; 
        border:1px solid lightgrey;  
        border-radius:15px; box-shadow: box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
        -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
        -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;">
    
        <img 
        class="card1img w-100" 
        style="border-radius:15px;" 
        src="${menuCard.image}" 
        class="card-img-top">
    
        <div 
        class="card-body">
    
        <h5 
        class="card-titleard1Name" 
        style="color:rgb(252, 163, 9); 
        text-transform:capitalize;">
        ${menuCard.name}</h5>
    
        <h6 class="card-title 
        card1Price" 
        style="font-size:large;">
        RS : 
        <span 
        style="color:rgb(252, 163, 9);">
        ${menuCard.RS}</span></h6>
    
        <p 
        class="card-text" 
        style="color:black; 
        font-size:medium;"> 
        ${menuCard.text}</p>
    
        </div>`
    
    });
}

showItems()