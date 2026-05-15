import { useState } from "react";
import styled from "styled-components";

const Button = ({ onRefresh }) => {

  const [spinning, setSpinning] = useState(false);

  const handleClick = async () => {

    setSpinning(true);

    await onRefresh();

    setTimeout(() => {
      setSpinning(false);
    }, 900);
  };

  return (
    <StyledWrapper>
      <button type="button" className="button" onClick={handleClick}>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
          className={spinning ? "spin" : ""}
        >
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />

          <path
            fillRule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          />
        </svg>

        Refresh Jobs
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .button {
    color: white;
    background-color: green;
    font-weight: 500;
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border: none;
  }

  .button:hover {
    background-color: #333;
  }

  .button svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.75rem;
  }

  .spin {
    animation: spin_357 0.9s linear;
  }

  @keyframes spin_357 {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default Button;