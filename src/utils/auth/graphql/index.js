const checkAuth = require('./checkAuth');
const checkRoles = require('./checkRoles');

const authPipe = async (context, roles) => {
  const { user } = await checkAuth(context);
  checkRoles(user, roles);
  return user;
};

module.exports = { authPipe };
