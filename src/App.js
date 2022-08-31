//styles
import "./app/scss/App.scss";
//components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (<>
    <NavBar />
    <ItemListContainer />
  </>
  );
}

export default App;
