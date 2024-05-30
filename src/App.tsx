import "./styles/App.scss";

import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import VacationForm from "./pages/HomePage/VacationForm";
import Table from "./pages/Tabela/Table";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/form" element={<VacationForm />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
};

export default App;
