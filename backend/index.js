const cors = require('cors')
const express = require('express')
const axios = require('axios');
const productsList = require('./apitext.json') 
const connection = require('./connection')
const app = express()

app.use(cors())
app.use(express.json())

let products = productsList
let productsWishedId = []
let productsWished = []

app.get('/products', (request, response) => {
return response.json(products)
})

app.get('/wishlist', (request, response) => {
    productsWished = products.filter(product => productsWishedId.includes(product.rank))
    console.log('productsWished', productsWished)
    return response.json(productsWished)
})

app.post('/wishlist', (request, response) => {
    const { id } = request.body
    if(productsWishedId.includes(id)) {
        console.log('id ja existente')
        return
    }
    productsWishedId.push(id)
    console.log('post productsWishedId', productsWishedId)

        
    // connection.query(`INSERT INTO wishlist(testevar) VALUES('${productsWishedId}');`, function (error, results, fields){
    //     if(error) return console.log(error);
    //     console.log('adicionou registros!');
    //     connection.end();//fecha a conexão
    // })
    // connection.end

    return response.json(productsWishedId)
})

app.delete('/wishlist/:id', (request, response) => {
    const { id } = request.params

    const ProductsWishedIndex = productsWishedId.findIndex(product => product == id)

    if(ProductsWishedIndex < 0) {
        return response.status(400).json({error: "Product not found."})
    }

    productsWishedId.splice(ProductsWishedIndex, 1)

    return response.status(204).send()
  });
    
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

