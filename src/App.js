import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="ui card centered" style={{marginTop:"50px"}}>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
