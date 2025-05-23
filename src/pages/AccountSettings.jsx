import img from "../assets/reddit-pfp.jpg";
import cameraSvg from "../assets/camera.svg";
import { useOutletContext } from "react-router";
import { getLocalStorage } from "../utils/getterAndSetterLocalStorage";
import Container from "../components/Container";

const AccountSettings = () => {
  const {
    state: { fullName: contextFullName, email: contextEmail },
  } = useOutletContext();

  // Try getting fallback values from localStorage
  let localFullName = "";
  let localEmail = "";

  const user = getLocalStorage("user");
  if (user) {
    try {
      const parsedData = JSON.parse(user);
      localFullName = parsedData.fullName || "";
      localEmail = parsedData.email || "";
    } catch (err) {
      console.error("Invalid JSON in localStorage for user", err);
    }
  }

  const fullName = contextFullName || localFullName || "Mary Doe";
  const email = contextEmail || localEmail || "MarryDoe@gmail.com";

  return (
    <Container>
      <h1 className="text-xl font-lightbold text-primary bg-white px-4 py-6">
        Account Settings
      </h1>
      <div className="px-4 flex gap-8 flex-col text-primary">
        <div className="flex items-center gap-8">
          <div className="w-18 h-18 relative">
            <img
              src={img}
              className="h-full w-full rounded-full object-cover"
              alt="A picture of a reddit pfp"
            />
            <img
              src={cameraSvg}
              alt="A svg of camera"
              className="absolute bottom-0 left-full -translate-x-full h-6 w-6"
            />
          </div>
          <div>
            <h4 className="text-base font-lightbold capitalize">{fullName}</h4>
            <p className="text-sm">{email}</p>
          </div>
        </div>
        <p className="text-sm text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          asperiores voluptatum esse consequuntur porro quibusdam explicabo quis
          aliquid, earum odit.
        </p>
        <hr className="border-dashed" />
      </div>
    </Container>
  );
};
export default AccountSettings;
