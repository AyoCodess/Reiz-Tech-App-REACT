import './App.css';
import AppContainer from './components/AppContainer';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <List />
      </AppContainer>
    </>
  );
}

export default App;
