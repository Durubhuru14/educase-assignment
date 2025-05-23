import { getLocalStorage } from "../utils/getterAndSetterLocalStorage.js";

const handleSubmit = (e, navigate, setIsError) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { email, password } = Object.fromEntries(formData);

  try {
    const user = getLocalStorage("user");
    if (!user) return setIsError(true);
    const { email: storedEmail, password: storedPassword } = JSON.parse(user);
    if (!email === storedEmail && !password === storedPassword)
      return setIsError(true);
    setIsError(false);
    navigate("/account");
  } catch (error) {
    console.error("Invalid JSON in localStorage for user", error);
    setIsError(true);
  }
};

export default handleSubmit;