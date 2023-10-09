import Parent from "./LiftingStateUp(Function)/Parent";
import ParentComponent from "./LiftingStateUp(Props)/ParentComponent";

function App() {
  return (
    <>
      <p>Displaying Object In Parent Component from Child Component</p>
      <ParentComponent />
      <p>Changing State of Value From Child Component</p>
      <Parent />
    </>
  );
}

export default App;
