import styled from "styled-components";

export const IMG = styled.img`
  margin-top: 10px;
  width: 12rem;
  height: 12rem;
  border-radius: 5px;
`;

export const H4 = styled.h4`
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
  width: 70%;
  margin: 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  color: #602b97;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  Button:hover {
    transition: 0.3;
    background-color: #602b97;
  }
`;

export const Card = styled.div`
  background-color: #ededed;
  border-top: #602b97 solid 2px;

  width: 30%;
  height: 50%;

  text-align: center;
  font-size: inherit;

  border-radius: 7px;
`;
