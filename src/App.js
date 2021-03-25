import './Component/Profile/photo.css';
import './App.css';
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
function App() {
  return (
    <div className="App">
      <div className="box">
      < ProfilPhoto></ProfilPhoto>
      
    <FullName></FullName>
    <Adress></Adress>
    </div>
    </div>
  );
}

export default App;
