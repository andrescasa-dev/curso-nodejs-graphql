const boom = require('@hapi/boom');

const checkRoles = (user, roles) => {
  const isAuthorized = roles.includes(user.role);
  if (!isAuthorized) throw boom.unauthorized();
};

module.exports = checkRoles;
