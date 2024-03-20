import {Nav, Button} from 'react-bootstrap/';
import{FaShoppingBasket} from 'react-icons/fa'
function Header({setModalShow}) {
  let orders = localStorage.getItem("pizza");
  orders = (orders) ? JSON.parse(orders) : [];
  
  let bool = false;
  orders.length > 0 ? bool = !bool : "";
  return (
    <>
      <Nav className='bg-danger p-3 text-white '>
        <div className='d-flex align-items-center justify-content-between container '>
          <div className='d-flex'>
            <Nav.Item className='px-3'>
              <span>Navbar</span>
            </Nav.Item>
          </div>
          <div className='position-relative'>
            <Button variant="light" onClick={() => setModalShow(true)}>
            <FaShoppingBasket className='fs-3'/>
            </Button>
            { bool ? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary text-dark">{orders.length}</span> : null }
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Header;