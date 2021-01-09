import { GroceryStore } from "./components/GroceryStore";
import { Divider } from "antd";
import { Steps } from "./components/Steps";
import { Multiple } from "./components/Multiple";

function App() {
  return (
    <div className="app">
      <h1>Curatech</h1>
      <br />
      <GroceryStore />
      <Divider />
      <Steps />
      <Divider />
      <Multiple />
    </div>
  );
}

export default App;
