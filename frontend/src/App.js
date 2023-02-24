import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./app/store";
import Tickets from "./pages/Tickets";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/new-ticket" element={<PrivateRoute />}>
                <Route path="/new-ticket" element={<NewTicket />} />
              </Route>

              <Route path="/ticket" element={<PrivateRoute />}>
                <Route path="/ticket" element={<Tickets />} />
              </Route>

              <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
                <Route path="/ticket/:ticketId" element={<Ticket />} />
              </Route>
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
