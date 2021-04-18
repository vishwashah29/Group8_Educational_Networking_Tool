import background1 from "../Images/logo.png";

const Synergy = () => {
    return (
        <div>
        <center>
            <div className='syn'
              style={{ 
                backgroundImage: `url(${background1})` ,
                 height :'200px',
                 width : '300px',
        
                }}>
            </div>
            </center>

            <div>

             <center> <h1 className='textcls'>Welcome to the community </h1>
                <h1 className='textcls'></h1></center>
                
            </div>
        </div>
    );
    
}

export default Synergy
