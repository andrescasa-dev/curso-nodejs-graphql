const AuthService = require('../services/auth.service');

const service = new AuthService();

const login = async (_, args, context) => {
  const { email, password } = args.user;
  const { user } = await context.authenticate('graphql-local', {
    email,
    password,
  });
  const { access_token } = service.signToken(user);
  return { user, tokenSession: access_token };
};

module.exports = { login };
