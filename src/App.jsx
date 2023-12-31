import { ChakraProvider } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import PageLayout from "./Layout/PageLayout/PageLayout";
import AuthPage from "./pages/Authpage/AuthPage";
import HomePage from "./pages/Homepage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import useAuthStore from "./store/authStore";

function App() {
  const authUser = useAuthStore((state) => state.user)
  return (
    <ChakraProvider>
    <PageLayout>
      <Routes>
        <Route path="/" element={ authUser ? <HomePage/> : <Navigate to = "/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to = "/auth" />}  />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
    </ChakraProvider>
  );
}

export default App;
