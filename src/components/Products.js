import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {productsList, formatPrice} from '../utils/helper';
import {useProductsContext} from '../context/ProductsContext';
import useStorage from '../hooks/useStorage';

function Products() {
  const {
    file,
    valueContent: {title, category, price, text},
  } = useProductsContext();

  const {progress, error, url} = useStorage(file.data && file.data);

  if (file.data) {
    console.log({
      'file upload state': {progress, error, url},
      'value content': {title, category, price, text},
    });
  }

  return (
    <Wrapper>
      <h1>당근 마켓</h1>
      <div>
        {productsList.map((item) => {
          const {id, title, where, price, img} = item;
          return (
            <div key={id} id={id} className="products__list">
              <img src={img} alt={title} />

              <div className="products__list-info">
                <div className="products__list-flex">
                  <h3>{title}</h3>
                  <Link to="/detail">
                    <button>detail</button>
                  </Link>
                </div>
                <p>{where}</p>
                <h2>{formatPrice(price)}원</h2>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 78vh;
  max-width: 50vw;
  padding-top: 6rem;
  text-align: center;
  margin: 2rem auto;

  img {
    width: 300px;
    height: 200px;
  }
  .products__list {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    border-bottom: 2px solid lightgray;
    button {
      max-width: 200px;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      background: #ffa468;
      border: none;
      outline: none;
      font-size: 1rem;
      font-weight: bold;
      color: white;
      transition: all 0.3s linear;
      letter-spacing: 0.2rem;
      font-weight: bold;
      cursor: pointer;
      margin-left: 2rem;
      &:hover {
        transform: scale(0.97);
        background: #fd7e35;
      }
    }
    .products__list-info {
      margin-left: 3rem;
      .products__list-flex {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: 991px) {
    text-align: left;
    margin: 2rem;
    max-width: 80vw;
    min-width: 80vw;
    h1 {
      font-size: 1.5rem;
    }
    h3,
    h2 {
      margin: 0;
      font-size: 1.2rem;
    }
    img {
      width: 200px;
      height: 100px;
    }
    .products__list {
      justify-content: flex-start;
      border-bottom: 2px solid transparent;
      padding: 1rem 0;
      button {
        padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
      }
      .products__list-info {
        margin-top: 0.5rem;
      }
    }
  }
`;
export default Products;
