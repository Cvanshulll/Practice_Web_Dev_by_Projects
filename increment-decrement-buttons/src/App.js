import "./styles.css";

export default function App() {
  const [count, setCount] = useState();
  return (
    <div className="App">
      <h1>Increment and Decrement Buttons</h1>
      <h2 className="value">0</h2>
      <div className="buttons">
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
}
