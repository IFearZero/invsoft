import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.gannett-cdn.com/-mm-/2dc15386e8c925115579e95a147cf3085cb8ea5c/c=0-50-2800-1630/local/-/media/USATODAY/GenericImages/2014/04/21//1398106026000-ShotGunWedding-041514.JPG?width=2800&height=1580&fit=crop&format=pjpg&auto=webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Trebuchet MS;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Enlace = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>INICIAR SESIÓN</Title>
        <Form>
          <Input
            placeholder="Nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            INICIAR SESIÓN
          </Button>
          {error && <Error>Los datos son incorrectos</Error>}
          <Enlace>¿Olvidaste tu contraseña?</Enlace>
          <Link to="/register">
            <Enlace>Regístrate ahora</Enlace>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;