import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Pizza({ id, name, img, price, desc, size, addToOrder }) {
    const [sizes, setSize] = useState(Object.keys(price)[0]);
    const [inp, setInp] = useState(1);
    const path = "./assets/img/";

    function std(e) {
        setSize(e.target.value)
    }
    function change(arg) {
        if (arg && inp < 20) { setInp(inp + 1) }
        else if (!arg && inp > 1) { setInp(inp - 1) }
    }
    return (
        <div className="card">
            <Card className='border-0 h-100' style={{ width: '16rem' }}>
                <Card.Img variant="top" src={path + img} />
                <Card.Body className='d-flex justify-content-between flex-column'>
                    <Card.Title className='align-self-center'>{name}</Card.Title>
                    <Card.Text style={{ height: '80px' }}>
                        {desc}
                    </Card.Text>
                    <div className='d-flex justify-content-between w-100 align-center'>
                        <Form.Select onChange={std} aria-label="Default select example" style={{ flexBasis: "70%" }}>
                            {
                                Object.keys(price).map((item, i) => <option key={i} value={item}>{size[item]}</option>)
                            }
                        </Form.Select>
                        <span className='py-1 text-nowrap' style={{ flexBasis: "20%" }}>{price[sizes] * inp} Azn</span>
                    </div>
                    <div className='d-flex py-3'>
                        <Button variant="primary" onClick={() => change(false)} >-</Button>
                        <Form.Control readOnly className='text-center' value={inp} />
                        <Button variant="primary" onClick={() => change(true)}>+</Button>
                    </div>
                    <Button className='w-100' variant="primary" onClick={() => { addToOrder(id, sizes, inp) }}>Add to Basket</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pizza
