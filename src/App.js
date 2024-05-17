// import logo from './logo.svg';
import './Style.css';
import Header from './Component/Header';
import Home from './Component/Home';
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element ={  <Home/>}/>
        <Route path="userList" element ={ <UserList/>}/>
        <Route path="addUser" element ={ <AddUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
