import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./Layout/PageLayout/PageLayout";
import AuthPage from "./pages/Authpage/AuthPage";
import HomePage from "./pages/Homepage/HomePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
