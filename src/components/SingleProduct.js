import React from 'react';
import {AiOutlineLike} from 'react-icons/ai';
import {MdDeleteOutline, MdOutlineEdit} from 'react-icons/md';
import {RiBearSmileLine} from 'react-icons/ri';
import styled from 'styled-components';
import {useGlobalContext} from '../context/AppContext';
import {PRODUCTS} from '../utils/constant';

function SingleProduct() {
  const {user, loading} = useGlobalContext();
  const {name, photo, email} = user;

  if (loading) {
    return null;
  }

  return (
    <Wrapper>
      <img src="assets/car.jpeg" alt="detail-img" />
      <div className="detail__user">
        <div className="detail__user-info">
          <img src={photo} alt={name} />
          <div className="detail__user-pri">
            <h4>{name}</h4>
            <p>운서동</p>
          </div>
        </div>
        <div className="detail__icon">
          <RiBearSmileLine />
        </div>
      </div>
      <div className="detail__products">
        <h1>올드카</h1>
        <h4>스포츠/레저</h4>
        <p className="text">
          오래 된 올드카 입니다. 오래됐지만 주행하는데에는 아무 문제없습니다!
          직거래만 원하고, 오셔서 얼마든지 인스펙션 보셔도 됩니다. 장소는 운서
          카페거리입니다 !
        </p>
        <p className="interest">
          <span>관심 1</span>
          <AiOutlineLike className="like__icon" />
          <div className="detail__control">
            <MdOutlineEdit />
            <MdDeleteOutline />
          </div>
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 10rem;
  min-height: 78vh;
  max-width: 50vw;
  margin: 2rem auto;
  text-align: center;
  img {
    width: 700px;
    height: 400px;
    border-radius: 10px;
  }
  p,
  h4 {
    margin: 0.5rem;
  }
  .detail__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 5rem;

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .detail__icon {
      font-size: 2rem;
      color: green;
    }
    .detail__user-info {
      display: flex;
      align-items: center;
      .detail__user-pri {
        margin-left: 1.4rem;
      }
    }
  }
  .detail__products {
    text-align: left;
    margin: 0.5rem 5rem;
    .text {
      margin-top: 1rem;
    }
    .like__icon {
      font-size: 2rem;
      margin-left: 1rem;
      transition: all 0.2s linear;
      &:hover {
        opacity: 1;
        color: #ffa468;
      }
      .detail__control {
        font-size: 2rem;
      }
    }
    .interest {
      display: flex;
      align-items: center;
      opacity: 0.5;
      margin-top: 2rem;
    }
  }
`;
export default SingleProduct;
