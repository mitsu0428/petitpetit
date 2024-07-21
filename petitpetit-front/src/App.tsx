import "./App.css";
import * as List from "./components/ListView";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">ぷちぷち - 共有Todo管理</h1>
      <List.Component />
    </>
  );
}

export default App;
