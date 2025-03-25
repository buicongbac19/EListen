import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Authentication from "./pages/Auththentication";
import ForgotPassword from "./pages/ForgotPassword";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
