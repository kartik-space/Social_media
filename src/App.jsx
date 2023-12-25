import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./Layout/PageLayout/PageLayout";
import AuthPage from "./pages/Authpage/AuthPage";
import HomePage from "./pages/Homepage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
