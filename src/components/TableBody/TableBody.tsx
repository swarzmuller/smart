import { SUCCEEDED } from "@/constans";
import { TableBodyProps } from "./types";

export const TableBody = ({ users, status }: TableBodyProps) => {
  if (!users.length && status === SUCCEEDED) {
    return (
      <tbody>
        <tr>
          <td colSpan={4}>
            <h3>Not Found</h3>
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};
