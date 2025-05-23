import { setLocalStorage } from "../utils/getterAndSetterLocalStorage.js";

const handleSubmit = (e, setState, navigate) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  setState(data);
  setLocalStorage("user", JSON.stringify(data));
  navigate("/account");
};

export default handleSubmit;
