import React from "react";
import Product from "../Product/Product";
import {
  H2,
  MainStyle,
  Row,
  Filters,
  Busca,
  InputBusca,
  Ordenacao,
  InputOrdenacao,
  MinPrice,
  MaxPrice,
} from "./style";

export default function Main(props) {
  const {
    products,
    onAdd,
    query,
    orderParam,
    inputQuery,
    inputOrder,
    handleMin,
    handleMax,
    maxPrice,
    minPrice,
  } = props;

  return (
    <MainStyle>
      <H2>Filter</H2>

      <Filters>
        <Busca>
          <h3>Search</h3>
          <InputBusca type="text" value={query} onChange={inputQuery} />
        </Busca>
        <Ordenacao>
          <h3>Ordination</h3>
          <InputOrdenacao
            name=""
            id=""
            value={orderParam}
            onChange={inputOrder}
          >
            <option value="asc">Crescent</option>
            <option value="desc">Decrescent</option>
          </InputOrdenacao>
        </Ordenacao>
        <MinPrice>
          <label htmlFor={minPrice}> Lowest price</label>
          <input
            type="range"
            value={minPrice}
            onChange={handleMin}
            placeholder="Preço Mínimo"
          />
          <h5>$ {minPrice} </h5>
        </MinPrice>
        <MaxPrice>
          <label htmlFor={maxPrice}> Upper Price </label>
          <input
            type="range"
            onChange={handleMax}
            value={maxPrice}
            placeholder="Preço máximo"
          />
          <h5>$ {maxPrice} </h5>
        </MaxPrice>
      </Filters>
      <Row>
        {products
          .filter(
            (product) =>
              query === "" || product.name.toLowerCase().includes(query)
          )
          .filter((item) => {
            return item.price >= minPrice || minPrice === "";
          })
          .filter((item) => {
            return item.price <= maxPrice || maxPrice === "";
          })

          .sort((a, b) =>
            orderParam === "" || (orderParam === "asc" && a.name > b.name)
              ? 1
              : -1
          )
          .sort((a, b) =>
            orderParam === "" || (orderParam === "desc" && a.name > b.name)
              ? -1
              : 1
          )
          .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
      </Row>
    </MainStyle>
  );
}
