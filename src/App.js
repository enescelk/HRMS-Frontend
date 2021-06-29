import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import JobAdvertisementAdd from './pages/JobAdvertisementAdd';
import { ToastContainer } from 'react-toastify';
import Notification from './pages/Notification.jsx';
import Footer from './layouts/Footer'
import { Route } from 'react-router';
import Dasboard from './layouts/Dashboard';
import JobAdvertisementDetail from './pages/JobAdvertisementDetail';


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right"></ToastContainer>
      <Navi></Navi>
      <Container className="main" style={{ marginTop: 65 }}>
        <Route exact path="/" component={Dasboard}></Route>
        <Route exact path="/home" component={Dasboard}></Route>
        <Route exact path="/jobAdvertisement" component={Dasboard} />
        <Route exact path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
        <Route exact path="/jobAdvertisement/notifications" component={Notification} />
        <Route exact path="/jobAdvertisement/detail/{id}" component={JobAdvertisementDetail}></Route>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
