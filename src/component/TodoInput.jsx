import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/Action";

let object = { title: "", status: false };
export const TodoInput = ({ data, setData }) => {
  const [query, setQuery] = useState(object);
  const dispatch = useDispatch();

  const handleClick = () => {
    let payload = {
      title: query.title,
      status: query.status,
      id: uuid()
    };
    // setData([...data, payload]);
    dispatch(addTodo(payload));
  };

  const handleChange = (e) => {
    let payload = { ...query, title: e.target.value };
    setQuery(payload);
  };
  return (
    <>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add Task</button>
    </>
  );
};
