import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./Table.scss";
import { CoursesTypes } from "./TableTypes";

const Table: React.FC<CoursesTypes> = ({
  id,
  title,
  description,
  onDelete,
  onEdit,
}) => {
  const [checkedAll, setCheckedAll] = useState<boolean>(false);
  const [checkedRows, setCheckedRows] = useState<boolean[]>([false, false]);
  const checkAllHandler = () => {
    setCheckedAll(!checkedAll);
    setCheckedRows((prev) => prev.map(() => !checkedAll));
  };

  const checkHandler = (index: number) => {
    setCheckedRows((prev) => prev.map((c, i) => (i === index ? !c : c)));
  };

  return (
    <table className="table mt-5" id="dataTable">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={checkedAll}
              onChange={checkAllHandler}
            />
          </th>
          <th>{id}</th>
          <th>{title}</th>
          <th>{description}</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={checkedRows[0]}
              onChange={() => checkHandler(0)}
            />
          </td>
          <td>1</td>
          <td>Test Title</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
          <td></td>
          <td>
            <button className="btn btn-sm btn-warning" onClick={() => onEdit()}>
              <FaIcons.FaEdit />
            </button>
          </td>
          <td>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete()}
            >
              <FaIcons.FaTrash />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={checkedRows[1]}
              onChange={() => checkHandler(1)}
            />
          </td>
          <td>2</td>
          <td>Second Test Title</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
          <td></td>
          <td>
            <button className="btn btn-sm btn-warning" onClick={() => onEdit()}>
              <FaIcons.FaEdit />
            </button>
          </td>
          <td>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete()}
            >
              <FaIcons.FaTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
