import { apiURL } from "../data/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormContainer from "../layout/containers/FormContainer";
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
          data-test="email-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
          required
          disabled={toggle}
        />
        <Input
          data-test="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="senha"
          required
          disabled={toggle}
        />
        <Input
          data-test="user-name-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="nome"
          required
          disabled={toggle}
          pattern="[a-zA-Z\s]+"
        />
        <Input
          data-test="user-image-input"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="url"
          placeholder="foto"
          disabled={toggle}
        />
        <Submit dataTest="signup-btn" disabled={toggle}>
          Cadastrar
        </Submit>
      </form>
      <Link data-test="login-link" to="/">
        Já tem uma conta? Faça login!
      </Link>
    </FormContainer>
  );
}
