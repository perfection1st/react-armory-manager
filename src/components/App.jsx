import {useEffect, useState, useRef} from 'react';
import { Header } from './Header';
import { Roster } from './Roster';
import { RosterTable } from './RosterTable';
import {AddSoldierForm} from './AddSoldierForm';
import { useReactToPrint } from 'react-to-print';

const API = 'http://localhost:3001'

export const App = () => {
  const [roster, setRoster] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    fetch(`${API}/soldiers`)
    .then((response) => response.json())
    .then((data) => { 
      setRoster(data) 
      console.log(data)
    });
    console.log('fetched')
  }, [update]);

const isUpdated = () => {
  setUpdate(update + 1)
}

  return (
    <div id="container">
      <Header />
      <Roster />
      <RosterTable roster={roster} />
      <AddSoldierForm update={isUpdated} tracker={update} />
    </div>
  );
}