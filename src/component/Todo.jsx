import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/Action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(data);
  //Toggle Functionality
  const handleToggle = (ele) => {
    // let toggle = data.map((e) =>
    //   e.id === ele.id ? { ...e, status: !e.status } : e
    // );
    // setData(toggle);
    dispatch(toggleTodo(ele.id));
  };
  //Delete Functionality
  const handleDelete = (id) => {
    // let deleted = data.filter((e) => e.id !== id);
    // setData(deleted);
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <TodoInput />
      {data.map((ele) => (
        <TodoList
          key={ele.id}
          {...ele}
          obj={ele}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};
