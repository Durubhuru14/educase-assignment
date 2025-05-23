// import { Form, redirect } from "react-router";

import { useNavigate, useOutletContext } from "react-router";

import PrimaryBtn from "../components/Buttons/PrimaryBtn.jsx";
import Input from "../components/Inputs/Input.jsx";
import RadioInput from "../components/Inputs/RadioInput.jsx";
import Container from "../components/Container.jsx";

import handleSubmit from "../utils/handleSignUpSubmit.js";

// This all the code for the signup action which is can be used if you have a backend
// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//   return redirect("/account");
// };

const inputFields = [
  {
    id: 1,
    type: "text",
    name: "fullName",
    placeholder: "Marry Doe",
    label: "Full Name",
    required: true,
  },
  {
    id: 2,
    type: "tel",
    name: "phoneNumber",
    placeholder: "9881291234",
    label: "Phone Number",
    required: true,
    pattern: "[0-9]{10}",
  },
  {
    id: 3,
    type: "email",
    name: "email",
    placeholder: "marryDoe@gmail.com",
    label: "Email Address",
    required: true,
  },
  {
    id: 4,
    type: "password",
    name: "password",
    placeholder: "Enter password",
    label: "Password",
    required: true,
  },
  {
    id: 5,
    type: "text",
    name: "companyName",
    placeholder: "Enter company name",
    label: "Company Name",
    required: true,
  },
];

const SignUp = () => {
  const { setState } = useOutletContext();
  const navigate = useNavigate();

  return (
    <Container className="grid grid-rows-[auto_auto_1fr]">
      <div className="flex flex-col gap-2">
        <h1 className="text-2.5xl text-primary font-bold">
          Create your PopX account
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-primary text-base">
        <form
          id="signup-form"
          /*method="post"*/ className="flex flex-col gap-6"
          onSubmit={(e) => {
            handleSubmit(e, setState, navigate);
          }}
        >
          {inputFields.map((input) => {
            return (
              <div className="relative w-full" key={input.id}>
                <Input {...input} />
                <label className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-primaryBg text-(--primary-color)">
                  {input.label}
                  <span className="ml-0.5 text-red-500">*</span>
                </label>
              </div>
            );
          })}

          <RadioInput
            name="isAgency"
            label="Are you an agency?"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            defaultValue="yes"
            required
          />
        </form>
      </div>
      <PrimaryBtn
        form={"signup-form"}
        type={"submit"}
        style={{
          alignSelf: "end",
        }}
        text={"Create Account"}
      />
    </Container>
  );
};
export default SignUp;
