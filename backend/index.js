const express = require('express')
const axios = require('axios');
const productsList = require('./apitext.json') 
const app = express()

app.use(express.json())

let products = productsList
let productsWished= []
app.get('/products', (request, response) => {
return response.json(products)
})

app.listen(3333, () => {
    console.log('Backend started!');
});
    



// const params = {
//   api_key: "54A84C8FB0F54F11AEC3B90B3E75453D",
//   type: "bestsellers",
//   url: "https://www.amazon.com.br/gp/bestsellers/computers"
// }
// app.get('/products', (request, response) => {
//     axios.get('https://api.rainforestapi.com/request', { params })
//     .then(response => {
//         console.log(JSON.stringify(response.data, 0, 2));
//         products = response.data.bestsellers
//     }).catch(error => {
//     console.log(error);
//     })
//     return response.json(products)
// })

