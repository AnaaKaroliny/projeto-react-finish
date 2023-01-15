import styled from "styled-components";

export const MainStyle = styled.main`
  background-color: transparent;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  flex: 80%;
`;

export const Row = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 2.5rem;
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 2rem;
  margin-top: 5rem;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;

  background-color: #ffffff;
  border: 0;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #111827;

  font-weight: bold;

  padding: 0.5rem 1rem;
  text-align: center;
  color: #602b97;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Busca = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin: 0.5rem;
  padding: 1rem;
`;

export const InputBusca = styled.input`
  border-radius: 5px;
  border: solid 2px #e0e0e0;
`;

export const Ordenacao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin: 0.5rem;
  padding: 1rem;
`;

export const InputOrdenacao = styled.select`
  border-radius: 5px;
  border: solid 2px #e0e0e0;
`;

export const MinPrice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 0.5rem;
  padding: 1rem;
`;

export const MaxPrice = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 0.5rem;
  padding: 1rem;
`;
