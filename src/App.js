import "./App.css";
import "../node_modules/flag-icons/css/flag-icons.min.css";
// import HomePage from "./Pages/HomePage";
// import SchedulePage from "./Pages/SchedulePage";
// import ContactPage from "./Pages/ContactPage";
import FacultiesPage from "./Pages/FacultiesPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-gradient-to-t from-blue-700 to-blue-950 w-screen h-screen poppins-regular px-10 py-5 overflow-hidden text-white">
      {/* <HomePage /> */}
      {/* <SchedulePage /> */}
      {/* <ContactPage /> */}
      <FacultiesPage />
      <Footer />
    </div>
  );
}

export default App;

// {/* <span className={`fi fis fi-kh`} /> */}
