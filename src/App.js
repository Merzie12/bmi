import "./styles/App.scss";
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <>
      <div className="main">
        <div className="calculator__container">
          <Calculator />
        </div>
      </div>
    </>
  );
};

export default App;
