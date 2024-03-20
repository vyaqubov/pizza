import {Button, ButtonGroup, ButtonToolbar, Form, InputGroup} from 'react-bootstrap/';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Pizza from './Pizza';
import Error from './Error';

function Main({arr, sizes, fltr, addToOrder}) {
  const filtr = ['All', 'Chick', 'Meat', 'Vegan', 'Spicy']
  const [inp, setInp] = useState("");
  const [active, setActive] = useState(filtr[0]);

  const newarr = arr.filter(item => item.name.toLowerCase().includes(inp.toLowerCase()));
  return (
    <main className='container '>
      <div className='my-3 bg-light p-3'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            {
              filtr.map((item,i) => <Button variant="outline-primary" active={active === item} key={i} onClick={(e) => {fltr(e.target.value);setActive(item)}} value={item}>{item}</Button>)
            }
          </ButtonGroup>
        </ButtonToolbar>
        <InputGroup className="my-3">
          <Form.Control
            onInput={(e) => setInp(e.target.value)}
            value={inp}
            placeholder="Search pizza ..."
            aria-label="Search pizza ..."
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2"> <FaSearch /></InputGroup.Text>
        </InputGroup>
      </div>
      <div className='d-flex my-4 flex-wrap gap-3 align-items-center justify-content-around'>
        {
          newarr.length > 0 ? newarr.map(item => <Pizza key={item.id} {...item} addToOrder={addToOrder} size={sizes} />) : <Error />
        }
      </div>
    </main>
  );
}

export default Main;