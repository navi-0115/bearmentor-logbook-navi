import "./App.css";

function App() {
  const todoList = [
    { id: 1, task: "Bangun pagi" },
    { id: 2, task: "Mandi pagi" },
    { id: 3, task: "Sarapan" },
  ];

  return (
    <div>
      <h1>To do List</h1>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
