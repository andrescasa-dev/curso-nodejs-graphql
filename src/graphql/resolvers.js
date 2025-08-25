const { getProducts, getProduct, createProduct } = require('./product.resolver')

const resolvers = {
  Query: {
    products: getProducts,
    product: getProduct
  },
  Mutation: {
    createProduct
  }
}

module.exports = resolvers
