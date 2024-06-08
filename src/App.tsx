import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
