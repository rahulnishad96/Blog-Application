import {Switch,Route} from "react-router-dom";
import './App.css';
import AddPage from "./pages/addPage/AddPage";
import DetailsBlog from "./pages/detailBlogPage/DetailsBlog";
import EditPage from "./pages/editPage/EditPage";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Blog Application</h1>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addblog" component={AddPage}/>
        <Route exact path="/detailsblog/:id" component={DetailsBlog}/>
        <Route exact path="/editblog/:id" component={EditPage}/>
      </Switch>
    </div>
  );
}

export default App;
