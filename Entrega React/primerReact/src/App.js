import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemsListContainer';


function App() {
  return (
    <>
      <Navbar></Navbar>    
      
      <ItemListContainer greeting = '' ></ItemListContainer>   
    </>

    
  );
}

export default App;
