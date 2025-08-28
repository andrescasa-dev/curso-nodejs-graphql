const CategoryService = require('../services/category.service');
const { authPipe } = require('../utils/auth/graphql');
const service = new CategoryService();

const getCategories = async () => {
  const categories = await service.find();
  return categories;
};

const createCategory = async (_, { category }, context) => {
  await authPipe(context, 'admin');
  const newCat = await service.create(category);
  return newCat;
};

module.exports = { getCategories, createCategory };
