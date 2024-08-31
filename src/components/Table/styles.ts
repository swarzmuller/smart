import { css } from "@emotion/react";

export const Wrapper = css`
  max-width: 1280px;
  padding: 10px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 10px 0;
  }

  h3 {
    text-align: center;
  }

  & > h3 {
    color: red;
  }
`;

export const Table = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td,
  tr {
    text-align: left;
    border: 1px solid #d7d7d7;
    padding: 5px;
  }

  &.loading {
    opacity: 0.3;
  }
`;

export const HeaderColumn = css`
  p {
    text-align: center;
    margin-bottom: 4px;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  input {
    width: 100%;
    border: 1px solid #1c1c1c;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
  }
`;
