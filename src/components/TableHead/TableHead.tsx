import { HeadValues } from "./helpers";
import { TableHeadProps } from "./types";
import * as S from "../Table/styles";

export const TableHead = ({ handleSearch }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {HeadValues.map((item) => (
          <th key={item} css={S.HeaderColumn}>
            <p>{item}</p>
            <input
              type="text"
              onChange={(e) => handleSearch(`${item}_like`, e.target.value)}
              placeholder={`Search by ${item}`}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
