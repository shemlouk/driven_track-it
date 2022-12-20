import { LoginContext, ProgressContext } from "./hooks/contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RecordPage from "./pages/RecordPage";
import HabitsPage from "./pages/HabitsPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import TodayPage from "./pages/TodayPage";

export default function App() {
  const [loginData, setLoginData] = useState(null);
  const [progress, setProgress] = useState(0);
  return (
    <LoginContext.Provider value={loginData}>
      <ProgressContext.Provider value={progress}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<LogInPage setLoginData={setLoginData} />}
            />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route
              path="/hoje"
              element={<TodayPage setProgress={setProgress} />}
            />
            <Route path="/historico" element={<RecordPage />} />
          </Routes>
        </BrowserRouter>
      </ProgressContext.Provider>
    </LoginContext.Provider>
  );
}
