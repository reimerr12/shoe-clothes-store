/* mobile-side-bar */

const ToggleMenu = () =>{
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
}

/* cart-side-bar */

const ToggleCart = ()=>{
    const cartMenu = document.getElementById("cart-sidebar");
    cartMenu.classList.toggle("hidden");
}

/* product-scroll-hoodies*/

document.addEventListener("DOMContentLoaded",function(){
    const slider = document.getElementById("slider1");
    const prev = document.getElementById("prev1");
    const next = document.getElementById("next1");

    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const visibleItemsCount = Math.floor(sliderWidth / itemWidth);
    const transitionDuration = 300;

    function slideTo(index){
        if(index >=  0 && index <= totalItems - visibleItemsCount){
            slider.style.transition = `${transitionDuration}ms ease`;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
            currentIndex  = index;
        }
        updateButtons();
    };

    function updateButtons(){
        prev.disabled = currentIndex ===0;
        next.disabled = currentIndex === totalItems - visibleItemsCount;

    }

    prev.addEventListener("click",function(){
        if(currentIndex > 0){
            slideTo(currentIndex - 1);
        }
    });

    next.addEventListener("click",function(){
        if(currentIndex < totalItems - visibleItemsCount){
            slideTo(currentIndex + 1);
        }
    });

    updateButtons();
});

/* scroll-for-leggings&joggers */

document.addEventListener("DOMContentLoaded",function(){
    const slider = document.getElementById("slider2");
    const prev = document.getElementById("prev2");
    const next = document.getElementById("next2");

    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const visibleItemsCount = Math.floor(sliderWidth / itemWidth);
    const transitionDuration = 300;

    function slideTo(index){
        if(index >=  0 && index <= totalItems - visibleItemsCount){
            slider.style.transition = `${transitionDuration}ms ease`;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
            currentIndex  = index;
        }
        updateButtons();
    };

    function updateButtons(){
        prev.disabled = currentIndex ===0;
        next.disabled = currentIndex === totalItems  - visibleItemsCount;

    }

    prev.addEventListener("click",function(){
        if(currentIndex > 0){
            slideTo(currentIndex - 1);
        }
    });

    next.addEventListener("click",function(){
        if(currentIndex < totalItems - visibleItemsCount){
            slideTo(currentIndex + 1);
        }
    });

    updateButtons();
});

/* gym gear scroll */

document.addEventListener("DOMContentLoaded",function(){
    const slider = document.getElementById("slider3");
    const prev = document.getElementById("prev3");
    const next = document.getElementById("next3");

    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const visibleItemsCount = Math.floor(sliderWidth / itemWidth);
    const transitionDuration = 300;

    function slideTo(index){
        if(index >=  0 && index <= totalItems - visibleItemsCount){
            slider.style.transition = `${transitionDuration}ms ease`;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
            currentIndex  = index;
        }
        updateButtons();
    };

    function updateButtons(){
        prev.disabled = currentIndex ===0;
        next.disabled = currentIndex === totalItems  - visibleItemsCount;

    }

    prev.addEventListener("click",function(){
        if(currentIndex > 0){
            slideTo(currentIndex - 1);
        }
    });

    next.addEventListener("click",function(){
        if(currentIndex < totalItems - visibleItemsCount){
            slideTo(currentIndex + 1);
        }
    });

    updateButtons();
});
    

/* jordans-scrolling */

document.addEventListener("DOMContentLoaded",function(){
    const slider = document.getElementById("slider4");
    const prev = document.getElementById("prev4");
    const next = document.getElementById("next4");

    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth;
    const sliderWidth = slider.offsetWidth;
    const visibleItemsCount = Math.floor(sliderWidth / itemWidth);
    const transitionDuration = 300;

    function slideTo(index){
        if( index >= 0 && index <= totalItems - visibleItemsCount){
            slider.style.transition = `${transitionDuration}ms ease`;
            slider.style.transform = `translateX(-${index * itemWidth}px)`;
            currentIndex = index;
        }
        updateButtons();
    };

    function updateButtons(){
        prev.disabled = currentIndex ===0;
        next.disabled = currentIndex === totalItems - visibleItemsCount;
    }

    prev.addEventListener("click",function(){
        if(currentIndex >0){
            slideTo(currentIndex - 1);
        }
    });

    next.addEventListener("click",function(){
        if(currentIndex < totalItems - visibleItemsCount){
            slideTo(currentIndex + 1);
        }
    });

    updateButtons();
})


/* adding-items-to-cart-and-total-value */
document.addEventListener("DOMContentLoaded",function(){

const cart = [];
/* updating-the-cart-list */

function updateCartDisplay(){
    const cartItemContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");
    cartItemContainer.innerHTML = '';

    let total = 0;

    cart.forEach((item,index)=>{
        total += item.price * item.quantity;

        const cartItem = document.createElement("li");
        cartItem.classList.add('flex','items-center','justify-between','space-x-4');

        cartItem.innerHTML = `
                <div class="flex space-x-4">
                    <img src="${item.image}" alt="" class="w-24 h-24 object-cover rounded-xl">
                    <div class="text-left">
                        <p class="capitalize font-bold text-lg">${item.name}</p>
                        <p class="text-lg font-bold text-gray-500">Qty: ${item.quantity}</p>
                        <p class="text-lg font-bold text-black">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
                <button class="text-black hover:text-red-600 remove-Item" data-index="${index}"><i class="fa-solid fa-trash"></i></button>`

                cartItemContainer.appendChild(cartItem);
    });

    cartTotalContainer.textContent = total.toFixed(2);

    document.querySelectorAll(".remove-Item").forEach(function(button){
        button.addEventListener("click",function(){
            const index = this.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

    /*adding-name-price-andimage-to-cartlist */

    document.querySelectorAll(".shop").forEach(button =>{
        button.addEventListener("click",(e)=>{
            const name  = e.target.dataset.name;
            const price = e.target.dataset.price;
            const image = e.target.dataset.image;

            addToCart(name,price,image);
        });
    });


    function addToCart(name,price,image){
        const cartExistingIndex = cart.findIndex(item => item.name === name);

        if(cartExistingIndex !== -1){
            cart[cartExistingIndex].quantity +=1
        }else{
            const newItem = { name , price: parseFloat(price), image, quantity:1};
            cart.push(newItem);
        }

        updateCartDisplay();
    };

/* removing-cartitem */
    function removeFromCart(index) {

        cart.splice(index, 1);
        updateCartDisplay();
    }

});






