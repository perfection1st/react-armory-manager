import { Header } from './Header';
import { Roster } from './Roster';
import { RosterTable } from './RosterTable';
import {AddSoldierForm} from './AddSoldierForm';

export const App = () => {
  return (
    <div id="container">
      <Header />
      <Roster />
      <RosterTable />
      <AddSoldierForm />
    </div>
  );
}