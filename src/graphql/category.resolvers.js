const boom = require('@hapi/boom');

const createCategory = async (_, args, context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) throw boom.unauthorized();
  return { id: '1', name: 'test' };
};

module.exports = { createCategory };
