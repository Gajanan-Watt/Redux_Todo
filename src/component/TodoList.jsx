export const TodoList = ({
  obj,
  title,
  status,
  id,
  handleToggle,
  handleDelete
}) => {
  const strike = {
    textDecoration: status ? "line-through" : null
  };
  return (
    <>
      <h1 style={strike}>{title}</h1>
      <button onClick={() => handleToggle(obj)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </>
  );
};
