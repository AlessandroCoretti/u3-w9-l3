import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "../components/CustomNavbar";
import CustomFooter from "../components/CustomFooter";
import Welcome from "../components/CustomWelcome";
import SingleBook from "../components/SingleBook";
//import AllTheBooks from "./components/AlltheBooks";

function App() {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <SingleBook />
      {/*<AllTheBooks />*/}

      <CustomFooter date={new Date().getFullYear()} />
    </>
  );
}

export default App;
