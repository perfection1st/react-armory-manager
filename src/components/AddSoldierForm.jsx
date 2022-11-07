import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

const API = 'http://localhost:3001'

export const AddSoldierForm = (props) => {
  const [inputValues, setInputValues] = useState(undefined);

  const handleChange = (e) => {
    setInputValues(inputValues => {
      return {...inputValues, [e.target.name]: e.target.value};
    });
    console.log(inputValues);
  }

  const postSoldier = () =>{
    fetch(`${API}/soldiers/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputValues)
    })
    .then(response => response.json)
    .catch(err => {
      console.log(err);
    });
  }

  const handleAddSoldier = (e) => {
    e.preventDefault();
    props.update();
    if(inputValues === undefined) {
      alert('please enter something in the forms', inputValues)
    } else {
      postSoldier();
    }

  }

  return (
    <Form>
    <Form.Label htmlFor="soldier-lin">LIN</Form.Label>
    <Form.Control
      onChange={handleChange}
      type="text"
      id="soldier-lin"
      name="lin"
      placeholder="Platoon/Squad e.g. 201 (2nd platoon 1st squad)"
    />
    <Form.Label htmlFor="soldier-rank">Rank</Form.Label>
    <Form.Control
      onChange={handleChange}
      type="text"
      id="soldier-rank"
      name="rank"
      placeholder="Rank Abbreviation e.g. SGT"
    />
    <Form.Label htmlFor="soldier-name">Full Name</Form.Label>
    <Form.Control
      onChange={handleChange}
      type="text"
      id="soldier-name"
      name="name"
      placeholder="Last Name, First Name"
    />
    <Form.Label htmlFor="soldier-weapon">Weapon</Form.Label>
    <Form.Control
      onChange={handleChange}
      type="text"
      id="soldier-name"
      name="weapon"
      placeholder="Soldier's assigned weapon e.g. M4A1"
    />
    <Form.Label htmlFor="soldier-nvg">NVG</Form.Label>
    <Form.Control
      onChange={handleChange}
      type="text"
      id="soldier-nvg"
      name="nvg"
      placeholder="Soldier's Night Vision Device e.g. PSQ-20"
    />
    <hr />
    <Button type="submit" onClick={handleAddSoldier}>Add Soldier</Button>
    </Form>
  )


}