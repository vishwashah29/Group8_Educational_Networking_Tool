import PropTypes from 'prop-types'


const Buttton = ({color,text,onClick}) => {

   
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
        </div>
    )
}
Buttton.defaultProps={
    color:'steelblue',
    text:'button'
}

Buttton.propType={
    text : PropTypes.sting,
    color : PropTypes.sting,
    onClick : PropTypes.func,
}
export default Buttton
