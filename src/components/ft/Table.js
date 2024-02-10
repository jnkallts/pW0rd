import React from "react";
import { BasFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
   return (
      <div className="table-wrapper">
         <table>
            <thead>
               <tr>
                  <th>Page</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Password</th>
               </tr>
            </thead>
            <tbody>
              {rows.map((row.index) => {
                const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1)

                return (
                  <tr key={index}>
                    <td><a href={row.link}>{row.title}</a></td>
                    <td>{row.email}</td>
                    <td>{row.username}</td>
                    <td>{row.password}</td>
                    <td className="fit">
                      <span className="actions">
                        <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(index)} />
                        <BsFillPencilFill className="edit-btn" onClick={() => editRowRow(index)} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
         </table>
      </div>
   );
};
