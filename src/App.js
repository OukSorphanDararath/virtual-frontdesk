import "./App.css";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="bg-gradient-to-t from-blue-700 to-blue-950 w-screen h-screen poppins-regular px-10 py-5 overflow-hidden text-white">
      <HomePage />
      {/* <span className={`fi fis fi-kh`} /> */}
    </div>
  );
}

export default App;
