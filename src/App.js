import './App.css';
import 'semantic-ui-css/semantic.min.css'
import './style/JobAdvertisementAdd_btnAdd/btnAdd.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import JobAdvertisementAdd from './pages/JobAdvertisementAdd';
import { ToastContainer } from 'react-toastify';
import JobAdvertisementList from './pages/JobAdvertisementList';
import Notification from './pages/Notification.jsx';
import Footer from './layouts/Footer'
import Citie from './layouts/Citie.jsx';
import { Route } from 'react-router';
import Dasboard from './layouts/Dashboard';


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"></ToastContainer>
      <Navi></Navi>
      <Container className="main" style={{ marginTop: 70 }}>
        <Route exact path="/" component={Dasboard}></Route>
        <Route exact path="/home" component={Dasboard}></Route>
        <Route exact path="/jobAdvertisement" component={Dasboard} />
        <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
        <Route exact path="/jobAdvertisement/notifications" component={Notification} />
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
