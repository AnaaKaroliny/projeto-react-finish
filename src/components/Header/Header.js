import React from "react";
import {
  HeaderStyle,
  A,
  LogoMarca,
  Negrito,
  Logo,
  Carrinho,
  Button,
  Carro,
} from "./style";
import logo from "../Assets/logo.png";
import carrinho from "../Assets/carrinho.png";

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <HeaderStyle>
      <div>
        <A href="#/">
          <Logo>
            <img src={logo} alt="" />
            <LogoMarca>
              Space<Negrito>Shop</Negrito>
            </LogoMarca>
          </Logo>
        </A>
      </div>
      <Carrinho>
        <A href="#/cart">
          <Carro src={carrinho} alt="" />{" "}
          {countCartItems ? <Button>{countCartItems}</Button> : ""}
        </A>{" "}
      </Carrinho>
    </HeaderStyle>
  );
}
