import pizzaOperations from "../services/pizza-operations.js";

async function printPizzas() {
  const allPizzas = await pizzaOperations.getPizzas();
  const div = document.getElementById("pizza-output");
  for (var pizza of allPizzas) {
    const card = createCard(pizza);
    div.appendChild(card);
  }
}

printPizzas();
const printTotal=(pizzas)=>
pizzas.reduce((sum,pizza)=>sum+parseFloat(pizza.price),0);
function printBasket(){
    const BasketDiv=document.getElementById('basket');
    BasketDiv.innerHTML='';
    const pizzasInCart=pizzaOperations.allPizzas.filter(pizza=>pizza.isAddedInCart);
    pizzasInCart.forEach(pizza=>{
        const p=printInBasket(pizza);   
        BasketDiv.appendChild(p);                                         
    })
    const total=printTotal(pizzasInCart);
    const totalPTag=document.createElement("p");
    totalPTag.innerText=`Total is ${total}`
    BasketDiv.appendChild(totalPTag);
}
function printInBasket(pizza){
    const p=document.createElement('p');
    p.innerText=`Pizza Name: ${pizza.name} Pizza Price:${pizza.price}`
    return p;
}

function addToCart(){
    // console.log("Added to cart",this);
    const currentButton=this;
    const button_id=currentButton.getAttribute('pizza-id');
    //mark true to all pizzas in cart
    pizzaOperations.searchPizza(button_id);
    printBasket();
}
function createCard(pizza) {
    
    const colDiv=document.createElement('div')
    colDiv.className='col-4'
    const cardDiv=document.createElement("div");
    cardDiv.className='card'
    cardDiv.style={width:'18rem'};

    const img=document.createElement('img');
    img.src=pizza.url;
    img.classsName='card-img-top';

    cardDiv.appendChild(img);

    const cardBody=document.createElement("div");
    cardBody.className='card-body';
    
    const h5=document.createElement("h5");
    h5.className='card-titile';
    h5.innerText=pizza.name;
    cardBody.appendChild(h5);
    
    const p=document.createElement("p");
    p.className='card-text';
    p.innerText=pizza.desc;
    cardBody.appendChild(p);

    const button=document.createElement('button')
    button.className='btn btn-primary';
    button.innerText="Add to Cart";
   // button.id=id not using because i don't want anyone to change my id like we did in amazon example
   // custom attribute
    button.setAttribute('pizza-id',pizza.id);
    button.addEventListener("click",addToCart);

    cardBody.appendChild(button);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(cardDiv);
    return colDiv;
    
}
