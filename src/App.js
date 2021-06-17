import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import JobAdvertisementList from './pages/JobAdvertisementList';
import JobAdvertisementAdd from './pages/JobAdvertisementAdd';
import { Route } from "react-router";
import Dasboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Route exact path="/" component={Dasboard}></Route>
        <Route exact path="/home" component={Dasboard}></Route>
        <Route exact path="/jobAdvertisement" component={JobAdvertisementList} />
        <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
      </Container>
    </div>
  );
}

export default App;
