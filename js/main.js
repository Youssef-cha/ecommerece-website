// open close cart
var cart = document.querySelector('.cart');
var menu = document.getElementById('menu')

function open_cart() {
    cart.classList.add('active')
}

function close_cart() {
    cart.classList.remove('active')
}


function open_menu() {
    menu.classList.add('active')
}

function close_menu() {
    menu.classList.remove('active')
}

// add items in cart    

var all_product_json;
var items_in_cart = document.querySelector('.items_in_cart')
let product_cart = [];

function add_to_cart(id, btn) {
    product_cart.push(all_product_json[id])
    btn.classList.add('active')
    get_cart_items()
}

let count_item = document.querySelector('.count-item') 
let _spn = document.querySelector('.top_cart h3 span') 
let price_cart_total = document.querySelector('.price_cart_total') 
let price_cart_Head = document.querySelector('.price_cart_Head') 

function get_cart_items() {
    let total_price = 0
    let items = ""
    product_cart.forEach(e => {
        items += `
            <div class="item_cart">
                <img src="${e.img}" alt="">
                <div class="content">
                    <h4>${e.name}</h4>
                    <p class="price_cart">$${e.price}</p>
                </div>
                <button onclick="remove_from_cart(${e.id})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
        total_price += e.price
    })
    price_cart_Head.innerHTML = total_price + "$"
    price_cart_total.innerHTML = total_price + "$"
    _spn.innerHTML = product_cart.length
    count_item.innerHTML = product_cart.length  
    items_in_cart.innerHTML = items

}



function restore_buttons(index) {
    let all_buttons = document.querySelectorAll('.fa-cart-plus')
    all_buttons.forEach((e,index )=> {
        e.classList.remove('active')
        product_cart.forEach((p,i)=> {
            if(i === index){
                e.classList.add('active')
            }
        })
    })
}

function remove_from_cart(index) {
    product_cart.shift(index)
    restore_buttons(index)
    get_cart_items()
}

// back to top

let back_to_top = document.querySelector('.back_to_top')
back_to_top.addEventListener('click' , function(){
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
})