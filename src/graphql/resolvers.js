const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('./product.resolver')

const resolvers = {
  Query: {
    products: getProducts,
    product: getProduct
  },
  Mutation: {
    createProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = resolvers
