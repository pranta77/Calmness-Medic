import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllHome from "./Components/Home/AllHome/AllHome";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import Buying from "./Components/Home/Buying/Buying";
import Login from "./Components/Home/Login/Login/Login";
import SignUp from "./Components/Home/Login/SignUp/SignUp";
import AuthProvider from "./Context/authProvider";
import Shops from "./Components/Home/Shops/Shops";
import NotFound from "./Components/Home/NotFound/NotFound";
import PrivateRoute from "./Components/Home/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<AllHome />}></Route>
            <Route path="/home" element={<AllHome />}></Route>
            <Route
              path="/shop"
              element={
                <PrivateRoute>
                  <Shops />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>

            <Route
              path="/buying/:serviceId"
              element={
                <PrivateRoute>
                  <Buying />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
