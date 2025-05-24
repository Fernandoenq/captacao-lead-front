import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { RedirectPage } from "./pages/Redirect";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
        <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;