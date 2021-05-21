import {Router} from '@reach/router';
import './App.css';
import AllPets from './components/AllPets';
import CreatePet from './components/CreatePet';
import PetDetails from './components/PetDetails';
import UpdatePet from './components/UpdatePet';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">

      <Router>
        <AllPets path="/"></AllPets>
        <CreatePet path="/pets/create"></CreatePet>
        <PetDetails path="/pets/:id"></PetDetails>
        <UpdatePet path="/pets/update/:id"></UpdatePet>
      </Router>
      </div>
    </div>
  );
}

export default App;
