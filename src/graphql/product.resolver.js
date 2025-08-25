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

const updateProduct = (_, {product})=>{
  return service.update(product.id, product)
}

const deleteProduct = async (_, {id})=>{
  const product = await service.delete(id)
  return product.id
}

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct}
