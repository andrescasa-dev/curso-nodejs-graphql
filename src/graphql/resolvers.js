const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const { getCategories, createCategory } = require('./category.resolvers');
const { login } = require('./users.resolvers');

const resolvers = {
  Query: {
    products: getProducts,
    product: getProduct,
    categories: getCategories,
  },
  Mutation: {
    createProduct,
    updateProduct,
    deleteProduct,
    login,
    createCategory,
  },
};

module.exports = resolvers;
