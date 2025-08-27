const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./product.resolvers')
const { login } = require('./users.resolvers')


const resolvers = {
  Query: {
    products: getProducts,
    product: getProduct
  },
  Mutation: {
    createProduct,
    updateProduct,
    deleteProduct,
    login
  }
}

module.exports = resolvers
