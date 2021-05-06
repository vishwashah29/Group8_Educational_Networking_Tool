import { Navbar, Nav, Button, FormControl, Form ,NavLink} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import { Link } from 'react-router-dom';

const App = () => {
    return (

        <div classname= "container" style = {{'float': 'right'}}>
            <LinkContainer to="/signup">
                <Button>Signup</Button>
            </LinkContainer>
            <LinkContainer to="/login">
                <Button>Login</Button>
            </LinkContainer>
            <LinkContainer to="/contactus">
                <Button>Contact Us</Button>
            </LinkContainer>
            <LinkContainer to="/home">
                <Button>Home</Button>
            </LinkContainer>
        </div>
    )
}

export default App;