//styles
import "./app/css/App.css";
//components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailsContainer from "./components/ItemDetailsContainer";


const App = () => {
  return (<>
    <NavBar />
    <ItemListContainer />
    <ItemDetailsContainer />
  </>
  );
}

export default App;
