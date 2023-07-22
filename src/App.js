import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Logout from "./auth/Logout";
import Login from "./auth/Login";
import { Link, Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import '../src/Styles/Stylesnav.css';


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {
          isAuthenticated ? (
            <>
              <Link rel="stylesheet" href="Stylesnav.css"></Link>
              <Link to='/favorites' > Favoritos </Link>
              <Link to='/home' > Home </Link>

              <Logout />
            </>) :
            (<Login />)
        }
      </header>


      <Routes>
        <Route path="/favorites" element={<Favorites />} className="nav"/>
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>

    </div>
  );
}

export default App;
