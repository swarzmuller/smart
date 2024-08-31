import { injectGlobal } from "@emotion/css";
import { Global, css } from "@emotion/react";

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

  * {
    outline: none;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 1rem;
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body {
          color: #1c1c1c;
        }
      `}
    />
  );
};
