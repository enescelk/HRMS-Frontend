import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import JobAdvertisementList from './pages/JobAdvertisementList';
import { Route } from "react-router";
import Dasboard from './layouts/Dashboard';
import JobAdvertisementAdd from './pages/JobAdvertisementAdd';
import Notification from './pages/Notification';
import Footer from './layouts/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"></ToastContainer>
      <Navi></Navi>
      <Container className="main">
        <Route exact path="/" component={Dasboard}></Route>
        <Route exact path="/home" component={Dasboard}></Route>
        <Route exact path="/jobAdvertisement" component={JobAdvertisementList} />
        <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
        <Route exact path="/jobAdvertisement/notifications" component={Notification} />
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
