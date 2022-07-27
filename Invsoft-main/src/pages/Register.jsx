import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F10%2F09%2Fwedding-dress-shopping-fitting-getty-0619-2000.jpg&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Trebuchet MS;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  padding-bottom: 30px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Enlace = styled.a`
  margin-top: 50px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR NUEVA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre(s)" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Nombre de usuario" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña"
          type="password"/>
          <Input placeholder="Confirmar contraseña"
          type="password"/>
          <Agreement>
           Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales de acuerdo con las  
           <b> POLITICAS DE PRIVACIDAD</b>
          </Agreement>
            <Button>REGISTRARSE</Button>
        </Form>
        <Link to="/login">
            <Enlace>Accede a tu cuenta</Enlace>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;