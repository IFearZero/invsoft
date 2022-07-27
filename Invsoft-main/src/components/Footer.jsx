import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    background-color: #fcdee0;
    ${mobile({ flexDirection: "column" })}
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Desc = styled.p`
    margin: 20px 0px;
  `;

const SocialContainer = styled.div`
    display: flex;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 100px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 100%;
    margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  border: none; 
  margin: auto;
`;

const Img = styled.img`
  width: 130px;
  ${mobile({ fontSize: "24px" })}
`;

const Ref = styled.a`
  color: inherit;
  text-decoration: none;
`

const Footer = () => {
  return (
    <Container>
      <Left>
          <Link to="/">
            <Button>
              <Img src="https://cdn.discordapp.com/attachments/944794613472972834/986502479732703242/Logo.png" />
            </Button>
          </Link>
        <Desc>
          Acerca de nosotros: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
          <Ref href="https://web.facebook.com/"><Facebook /></Ref>
          </SocialIcon>
          <SocialIcon color="E4405F">
          <Ref href="https://www.instagram.com/"><Instagram /></Ref>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <Ref href="https://twitter.com/"><Twitter /></Ref>
          </SocialIcon>
          <SocialIcon color="E60023">
          <Ref href="https://co.pinterest.com/"><Pinterest /></Ref>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links útiles</Title>
        <List>
          <ListItem><Ref href="/">Inicio</Ref></ListItem>
          <ListItem><Ref href="/cart">Carrito</Ref></ListItem>
          <ListItem><Ref href="/products/man">Hombres</Ref></ListItem>
          <ListItem><Ref href="/products/woman">Mujeres</Ref></ListItem>
          <ListItem><Ref href="/products/kids">Niños</Ref></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contáctanos</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Carrera 50 No 26-37
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +57 320 6789341
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@usco.edu.co
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;