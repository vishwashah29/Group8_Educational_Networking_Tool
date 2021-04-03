import background1 from "../Images/logo.png";

const Synergy = () => {
    return (
        <div>
        
            <div className='syn'
              style={{ 
                backgroundImage: `url(${background1})` ,
                 height :'500px',
                 width : '450px',
        
                }}>
            </div>
            <div>
              <h1 className='textcls'>Welcome to </h1>
                <h1 className='textcls'>the community</h1>
                
            </div>

        </div>
    );
    
}

export default Synergy
