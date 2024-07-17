import {Outlet} from "react-router-dom";
import HeaderButtons from "../HeaderButtons"; // Ensure correct path to HeaderButtons
import './Layout.css'; // Ensure you have styles for the layout

const Layout=()=>{
  return(
    <>
      <HeaderButtons />
      <main className="App-main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
