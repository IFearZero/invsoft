import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #DFBDC8;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  // eslint-disable-next-line
  return <Container><marquee>¡Super oferta! Envío gratis en todos los artículos disponibles</marquee></Container>;
};

export default Announcement;