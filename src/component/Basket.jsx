import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Table, Form} from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import './css/Basket.css'
import { useEffect, useState } from 'react';

function Basket({count, pizza, setOrder, removeFromOrder, ...rest}) {
    const path = './assets/img/';
    const [d, setD] = useState([]);
    let total = d.reduce((total, item) => total += item.quantity * pizza.find(it => it.id === item.pid).price[item.size], 0)

    function change(bool, obj){
      if(bool) {obj.quantity += 1} else if(!bool && obj.quantity > 1) {obj.quantity-= 1}
      setD([...d])
      localStorage.setItem("pizza", JSON.stringify([...d]))
    }

    useEffect(()=>{
      let orders = localStorage.getItem("pizza");
      orders = (orders) ? JSON.parse(orders) : [];
      setD(orders);
    },[count])
    
  return (
    <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped>
        <thead>
            <tr>
                <th>Sekil</th>
                <th>Adi</th>
                <th>Olcu</th>
                <th>Qiymeti</th>
                <th>Say</th>
                <th>Cem</th>
                <th>...</th>
            </tr>
        </thead>
        <tbody>
            {
                d.map(o_item => {
                    let p = pizza.find(item => item.id === o_item.pid)
                    return (
                        <tr key={o_item.o_id} >
                            <td><img src={path+p.img} /></td>
                            <td>{p.name}</td>
                            <td>{o_item.size}</td>
                            <td>{p.price[o_item.size]}</td>
                            <td>
                              <div className="d-flex">
                              <Button variant="primary" onClick={() => change(false, o_item)}>-</Button>
                              <Form.Control value={o_item.quantity} readOnly style={{width: "50px"}} aria-label="Username" aria-describedby="basic-addon1"/>
                              <Button variant="primary" onClick={() => change(true, o_item)}>+</Button>
                              </div>
                            </td>
                            <td>{p.price[o_item.size]*o_item.quantity}</td>
                            <td><FaTrashAlt onClick={() => {removeFromOrder(o_item.o_id)}} /></td>
                        </tr>
                    )
                })
            }
            <tr>
                <th>Sekil</th>
                <th>Adi</th>
                <th>Olcu</th>
                <th>Qiymeti</th>
                <th>Cemi:</th>
                <th>{total}</th>
                <th>...</th>
            </tr>
        </tbody>
    </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={rest.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Basket