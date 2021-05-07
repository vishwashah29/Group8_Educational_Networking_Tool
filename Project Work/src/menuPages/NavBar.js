import {Link} from 'react-router-dom';
const App=()=>{
    return(
        
        <div className='link-container'>            
            <Link className='link-item' to='/signup'>SIGN UP</Link>
            <Link className='link-item' to='/login'>LOGIN</Link>
            <Link className='link-item' to='/contactus'>CONTACT US</Link>
            <Link className='link-item' to='/home'>HOME</Link>
        </div>
    )
}

export default App;