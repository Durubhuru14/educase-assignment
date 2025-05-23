import { Link } from "react-router";
import PrimaryBtn from "../components/Buttons/PrimaryBtn";
import SecondaryBtn from "../components/Buttons/SecondaryBtn";
import Container from "../components/Container";

const Landing = () => {
  return (
    <Container className="self-end">
      <div className="flex flex-col gap-2">
        <h1 className="text-2.5xl text-primary font-bold">Welcome to PopX</h1>
        <p className="text-base text-(--primary-text)/60">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/signup">
          <PrimaryBtn text="Create Account" />
        </Link>
        <Link to="/signin">
          <SecondaryBtn text="Already Registered? Login" />
        </Link>
      </div>
    </Container>
  );
};
export default Landing;
