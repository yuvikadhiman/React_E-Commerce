import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButton from "../components/AmountButton";

const AddToCart = ({ singleproduct }) => {
  const { id, colors, stock } = singleproduct;
  console.log(colors);
  const [mainColor, setmainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const [Stock, setStock] = useState(stock-1);

  console.log(Stock)
  const increase = () => {
    if (Stock) {
      const newAmount = amount + 1;
      const newStock = Stock - 1;
      return (
        setAmount(newAmount),
        setStock(newStock)
        )
    }
    // eslint-disable-next-line no-unreachable
    return amount;
  };
  const decrease = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      const newStock = Stock + 1;
      return (
        setAmount(newAmount), 
        setStock(newStock)
        )
      }
    return amount;
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === colors[index] ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setmainColor(colors[index])}
              >
                {mainColor === colors[index] ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButton increase={increase} decrease={decrease} amount={amount} />
        <Link to="/cart" className="btn">
          Add to Cart
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  alert {
  }
`;
export default AddToCart;
