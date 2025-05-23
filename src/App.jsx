import { Outlet } from "react-router";
import useGlobalState from "./hooks/useGlobalState.jsx";

function App() {
  const globalState = useGlobalState();
  return (
    <main className="min-h-screen min-w-screen bg-primaryBg flex justify-center">
      <article className="w-full max-w-sm px-4 py-8 grid">
        <Outlet context={globalState} />
      </article>
    </main>
  );
}

export default App;
