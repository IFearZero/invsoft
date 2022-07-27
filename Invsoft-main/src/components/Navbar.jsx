import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";                      //Quitar este

const Container = styled.div`
  height: 75px;
  background-color: #FFD2E0;
  ${mobile({ height: "100px" })}
`;

const Wrapper = styled.div`
  padding: 1px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 130px;
  ${mobile({ fontSize: "24px" })}
`;

const Center = styled.div`
  flex: 1.2;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.button`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  background-color: white;
  padding: 8px;
  border: 0.5px solid lightgray;
  border-radius: 6px;
  &:hover{
    background-color: #f8f4f4;
}
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  border: none; 
  margin: auto;
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link to="/">
              <Button>
                <Img src="https://cdn.discordapp.com/attachments/944794613472972834/986502479732703242/Logo.png"/>
              </Button>
        </Link>
        </Left>
        <Center>
        </Center>
        <Right>
            <Link to="/register">
              <MenuItem>Registrate</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>Entrar</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;