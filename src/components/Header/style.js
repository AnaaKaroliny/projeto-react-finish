import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-evenly;
  background-color: #ffffff;
  padding: 1rem;
  align-items: center;
  height: 5rem;
  position: fixed;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const A = styled.a`
  text-decoration: none;
  display: flex;
  gap: 0.75rem;
`;

export const H1 = styled.h1`
  font-size: 1.5rem;
`;

export const CartButton = styled.button`
  background-color: #f04040;
  border: none;
  color: #ffffff;
  width: 1.5rem;
`;

export const Carro = styled.img`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const LogoMarca = styled.div`
  font-size: 2rem;
  font-weight: normal;
  color: #602b97;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;
  font-size: 0.875rem;
  font-weight: bold;

  padding: 0.5rem 1rem;
  text-align: center;
  color: #602b97;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

export const Negrito = styled.span`
  font-weight: bold;
`;

export const Logo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Carrinho = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
