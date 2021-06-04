import logo from './logo.svg';
import './App.css';
import Header from "./Components/HeaderContainer/Header";
import User_info_nav from './Components/user_info_nav/user_info_nav';
import Card from './Components/card/card';
import Pagination from './Components/page/pagination';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <User_info_nav/> */}
     <Card/>
     <Pagination/>
    </div>
  );
}

export default App;
