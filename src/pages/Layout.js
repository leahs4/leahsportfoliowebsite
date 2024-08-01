import {Outlet} from "react-router-dom";
import HeaderButtons from '../HeaderButtons';
import './Layout.css';

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
