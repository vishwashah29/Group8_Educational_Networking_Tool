import Button from './Button'


const Header = ({showreg,showlog}) => {
    
    return (
        <header className='header'>
            
            <Button text='Register' onClick={showreg}/>
            <Button text='Login' onClick={showlog}/>

        </header>
    )
}

export default Header

