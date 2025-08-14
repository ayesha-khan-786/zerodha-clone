const useAuth = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) return null;

  try {
    const user = JSON.parse(storedUser);

    if (user && user.token) {
      return { user };
    }
    return null;
  } catch (err) {
    return null;
  }
};

export default useAuth;
