import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginContext } from "./hooks/LoginContext";
import { useState } from "react";
import RecordPage from "./pages/RecordPage";
import HabitsPage from "./pages/HabitsPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  const [loginData, setLoginData] = useState(null);
  return (
    <LoginContext.Provider value={loginData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage setLoginData={setLoginData} />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<RecordPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}
