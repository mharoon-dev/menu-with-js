let btnsName = [
    "ALL",
    "FAST FOOD",
    "FISHES",
    "DRINKS"
]


let btnsContainer = document.querySelector(".btnsContainer")
btnsName.forEach(function (btn) {
    let btns = document.createElement("div")

    btns.innerHTML = `
    <button id="btn" type="button" class="btn btn-outline-warning">${btn}</button>
            `
            btnsContainer.appendChild(btns)
})


let cards = [
    {
        name: "burger",
        RS: "600",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"fast food"
    },
    {
        name: "apple juice",
        RS: "250",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"drinks"
    },
    {
        name: "broast",
        RS: "400",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"fast food"
    },
    {
        name: "finger fish",
        RS: "850",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"fishes"
    },
    {
        name: "mango juice",
        RS: "350",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"drinks"
    },
    {
        name: "fish",
        RS: "500",
        text: "Lorem ipsum dolor sit amet consectetur, corporis.",
        cetagory:"fishes"
    },
]
let images = [
    "./images/burger.png",
    "./images/apple juice.png",
    "./images/broast.jpg",
    "./images/finger fish.png",
    "./images/mango-juice.png",
    "./images/fish.png",
]
let imageIndex = -1

let cardContainer = document.querySelector('.container-fluid')

let row = document.createElement('div')
row.classList.add('row')

cards.forEach( function (menuCard) {
    imageIndex++
    
    for (i = 0 ; i < 2 ; i++ ) {
        col =  document.createElement('div')
            col.classList.add('col-md-4')
            col.classList.add('mb-3')
        
    }
    
    div = document.createElement('div')
    div.style.display = "flex"
    div.style.justifyContent = "center"
    div.style.alignItems = "center"
    div.innerHTML = `
    <div class="card" style="width: 18rem; border:1px solid lightgrey;  border-radius:15px; box-shadow: box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
    -webkit-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;
    -moz-box-shadow: 0px 0px 58px -24px rgba(0,0,0,0.65) inset;;">
                <img class="card1img" style="border-radius:15px;" src="${images[imageIndex]}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title card1Name" style="color:rgb(252, 163, 9); text-transform:capitalize;">${menuCard.name}</h5>
                  <h6 class="card-title card1Price" style="font-size:large;">RS : <span style="color:rgb(252, 163, 9);">${menuCard.RS}</span></h6>
                  <p class="card-text" style="color:black; font-size:medium;"> ${menuCard.text}</p>
                </div>
                
    `

    col.appendChild(div)
    row.appendChild(col)
    cardContainer.appendChild(row)
})