const login = async (parent, { user }, context) => {
  const { password, email } = user
  console.log("context", context)
  console.log("parent", parent)
  console.log("user", user)
  return null;
};

module.exports = { login };
