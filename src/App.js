import { GroceryStore } from "./components/GroceryStore";
import { Divider } from "antd";
import { Steps } from "./components/Steps";

function App() {
  return (
    <div className="app">
      <h1>Curatech</h1>
      <br />
      <GroceryStore />
      <Divider />
      <Steps />
    </div>
  );
}

export default App;
