import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dasboard from './layouts/Dasboard';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dasboard></Dasboard>
      </Container>
    </div>
  );
}

export default App;
