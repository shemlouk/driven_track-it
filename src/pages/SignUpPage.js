import { apiURL } from "../data/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "../layout/FormContainer";
import Input from "../components/form/Input";
import Submit from "../components/form/Submit";

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    setToggle(true);
    axios
      .post(apiURL.signup, { email, name, image, password })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Não foi possível fazer cadastro!");
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
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="nome"
          required
          disabled={toggle}
          pattern="[a-zA-Z\s]+"
        />
        <Input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="url"
          placeholder="foto"
          disabled={toggle}
        />
        <Submit disabled={toggle}>Cadastrar</Submit>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </FormContainer>
  );
}
