import { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../components/Inputs/Input.jsx";
import PrimaryBtn from "../components/Buttons/PrimaryBtn.jsx";
import Container from "../components/Container.jsx";
import handleSubmit from "../utils/handleSignInSubmit.js";

const inputFields = [
  {
    id: 1,
    type: "email",
    name: "email",
    placeholder: "Enter email address",
    inputType: "email address",
  },
  {
    id: 2,
    type: "password",
    name: "password",
    placeholder: "Enter password",
    inputType: "password",
  },
];

const SignIn = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="text-2.5xl text-primary font-bold">
          Signin to your PopX account
        </h1>
        <p className="text-base text-(--primary-text)/60">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, navigate, setIsError);
        }}
        className="flex flex-col gap-8 text-primary"
      >
        <div className="flex flex-col gap-6">
          <span className="text-sm text-center text-red-500">
            {isError && "Invalid email or password"}
          </span>
          {inputFields.map((input) => {
            return (
              <div
                key={input.id}
                style={{ "--input-type": `"${input.inputType}"` }}
                className="input-wrapper relative"
              >
                <Input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            );
          })}
        </div>
        <PrimaryBtn text={"Login"} type={"submit"} />
      </form>
    </Container>
  );
};
export default SignIn;
