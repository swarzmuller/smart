import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/features/users/usersSlice";
import { AppDispatch, RootState } from "@/app/store";
import { DEBOUNCE_DELAY, LOADING } from "@/constans";
import { useDebounce, TableHead, TableBody } from "@/components";
import * as S from "./styles";

export const Table = () => {
  const [queryValue, setQueryValue] = useState({});
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );
  const debounceValue = useDebounce(queryValue, DEBOUNCE_DELAY);
  const loading = status === LOADING ? "loading" : "";
  const handleSearch = (query: string, value: string) => {
    setQueryValue({ ...queryValue, [query]: value });
  };

  useEffect(() => {
    const queryString = new URLSearchParams(queryValue).toString();
    dispatch(fetchUsers(queryString));
  }, [debounceValue]);


  return (
    <div css={S.Wrapper}>
      <h1>Users</h1>
      {error ? (
        <h3>{error}</h3>
      ) : (
        <table css={S.Table} className={loading}>
          <TableHead handleSearch={handleSearch} />
          <TableBody users={users} status={status} />
        </table>
      )}
    </div>
  );
};
