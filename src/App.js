
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Signin from './component/Signin';
import Messenger from './component/Messenger';
import { useDatatlayerValue } from './auth/Datalayer';

function App() {
  const [{user} ,dispatch] = useDatatlayerValue();
  return (
    <div className='App'>
   <Messenger/>
    </div>
  );
}
//fNiluS2pjdWzRyiI
//mongodb+srv://prabhajaiswal231:fNiluS2pjdWzRyiI@cluster0.ykn8xfs.mongodb.net/
export default App;
