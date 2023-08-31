import makeNetworkCall from "./api-client.js";
import {URL} from "../utils/config.js";
import Pizza from "../models/pizza-model.js";


const pizzaOperations={
    allPizzas:[],
    searchPizza(pizzaId){
        const pizzaObject=this.allPizzas.find(pizza=>pizza.id==pizzaId);
        pizzaObject.isAddedInCart=true;
    },
    async getPizzas(){
        // Api Client Object Pizza
        // Data Map to Model
        // return Model
        const data=await makeNetworkCall(URL);
        const pizzaJSON=data['Vegetarian'];
        const pizzas=pizzaJSON.map(singlePizza=>{
            const pizzaObject=new Pizza(
                singlePizza.id,
                singlePizza.name,
                singlePizza.price,
                singlePizza.assets.product_details_page[0].url,
                singlePizza.menu_description);
                return pizzaObject;
               
        })
        this.allPizzas=pizzas;
        return pizzas;
           
    }
}
export default pizzaOperations;
// export async function getPizzas(){
//     // Api Client Object Pizza
//     // Data Map to Model
//     // return Model
//     const data=await makeNetworkCall(URL);
//     const pizzaJSON=data['Vegetarian'];
//     const pizzas=pizzaJSON.map(singlePizza=>{
//         const pizzaObject=new Pizza(
//             singlePizza.id,
//             singlePizza.name,
//             singlePizza.price,
//             singlePizza.assets.product_details_page[0].url,
//             singlePizza.menu_description);
//             return pizzaObject;
           
//     })
//     return pizzas;
       
// }

