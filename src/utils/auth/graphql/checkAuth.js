const boom = require('@hapi/boom');

const checkAuth = async (context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) throw boom.unauthorized();
  return user;
};

module.exports = checkAuth;
