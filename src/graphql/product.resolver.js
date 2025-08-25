const ProductsService = require("../services/product.service")

const service = new ProductsService()

const getProducts = ()=>{
  return service.find({})
}

const getProduct = (_, {id})=>{
  return service.findOne(id)
}

const createProduct = (_, {product})=>{
  return service.create(product)
}

module.exports = {getProducts, getProduct, createProduct}
