import { apiURL } from "../data/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "../layout/FormContainer";
import Input from "../components/form/Input";
import Submit from "../components/form/Submit";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    setToggle(true);
    axios
      .post(apiURL.login, { email, password })
      .then(() => {
        navigate("/hoje");
      })
      .catch(() => {
        alert("Não foi possível fazer login!");
        setToggle(false);
      });
  }

  return (
    <FormContainer>
      <form onSubmit={(e) => submit(e)}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
          required
          disabled={toggle}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="senha"
          required
          disabled={toggle}
        />
        <Submit disabled={toggle}>Entrar</Submit>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </FormContainer>
  );
}
