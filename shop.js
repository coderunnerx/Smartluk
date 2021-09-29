
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")

let cartModal = document.querySelector(".cart-modal-container")
let itemsInCart = document.querySelector(".cart-qty")


one.addEventListener("click", (e)=>{
    e.preventDefault();
})
two.addEventListener("click", (e)=>{
    e.preventDefault();
})
three.addEventListener("click", (e)=>{
    e.preventDefault();
})
four.addEventListener("click", (e)=>{
    e.preventDefault();
})
five.addEventListener("click", (e)=>{
    e.preventDefault();
})
six.addEventListener("click", (e)=>{
    e.preventDefault();
})

//open cart modal
function displayModal(){
    cartModal.style.display = "flex"
}
//close cart modal
function closeModal(){
    cartModal.style.display ="none"

}

//fucntion to increment items in cart
counter = 0;
function incrCartQty(){
    counter++
    itemsInCart.innerHTML = counter;
}
//fucntion to decrement items in cart
function decrCartQty(){
    counter--
    itemsInCart.innerHTML = counter
}

//items data arrays
let itemName = []
let itemPrice = []
let itemQty = []
let itemAdded = []

let items = {
    0:["Mario", 20, 1, one],
    1:["Brownline", 25, 1, two],
    2:["Aviator", 30, 1, three],
    3:["Martina", 15, 1, four],
    4:["Langston", 19, 1, five],
    5:["Barret", 15, 1, six]
}

//function to add item to the  cart
let ids = [0,0,0,0,0,0]
function addToCart(id, styl){
    
    
    if (ids[id]==0){
        incrCartQty()
        styl.style.background="#caf8f4"
       
        
        itemName.push(items[id][0])
        itemPrice.push(items[id][1])
        itemQty.push(items[id][2])
        itemAdded.push(items[id][3])
        // console.log(itemName)
      
        
        displayCart()
        ids[id]=1;
    }   
    console.log(ids)
}

//fucntion to display the items  currently in the cart
function displayCart(){
    
    let cartdiv = document.querySelector(".cart-table")
    let currentTotal = document.querySelector(".current-total")
    cartData = '<tr><th>' + 'Product' + '</th><th>' + 'Price' + '</th><th>' + 'Quantity' + '</th></tr>'
    total = 0
    
    for(i=0; i<itemName.length; i++){
        total += itemPrice[i] * itemQty[i]
        cartData += '<tr><td>' + itemName[i] + '</td><td>' + itemPrice[i] + '</td><td><button onClick="decrItemQty(' + i + ')">-</button> ' + itemQty[i] + ' <button onClick="incrItemQty(' + i + ')">+</button></td> <td><button onClick="removeItem(' + i + ')">Remove</button></td> </tr>'
    }
    cartdiv.innerHTML =  cartData;
    currentTotal.innerHTML = total

}

//function to remove an item from the cart
function removeItem(i){
    itemAdded[i].style.background="#75e6da"
    itemName.splice(i, 1)
    itemPrice.splice(i, 1)
    itemQty.splice(i, 1)
    itemAdded.splice(i,1)

    


    decrCartQty()
    displayCart()
}

//increment the quantity of an item in the cart
function incrItemQty(i){
    //access ele
    currentQty = itemQty[i]
    
    currentQty++
    itemQty[i] = currentQty
    displayCart()
}

//decrement the quantity of an item in the cart
function decrItemQty(i){
    currentQty = itemQty[i]
    if(currentQty==1){
        alert("Item quantity cannot be less than 1. Click the remove button to remove item from cart")
    }else{
        currentQty--
    }
    itemQty[i] = currentQty
    displayCart()
}

