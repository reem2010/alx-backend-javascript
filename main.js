import updateUniqueItems from "./0x03-ES6_data_manipulation/10-update_uniq_items.js";
import groceriesList from "./0x03-ES6_data_manipulation/9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);