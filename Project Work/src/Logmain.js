import background from "./img/bg.png";
import Regi from './components/Regi';
import Log from './components/Login';
import Syn from './components/Synergy';
import PropTypes from 'prop-types'
import {useState} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';


const Logmain = ({flg}) => {


        return (
            <>
          
            <div className='containerbg inline-flex-parent'
             style={{ 
              backgroundImage: `url(${background})` ,
              height :'100%',
              // alignItems :'center',
              justifyContent:'center',
              backgroundRepeat:'no-repeat',
              }}>
        
                <div className='inline-flex-parent'
                  style={{borderRadius:'50px'}}>
                    <div className='wrapper'>
                    <div className='inner1'>
                          <Syn />
                        </div>
                      <div className='inner2'>
                      {flg==='true' && <Log />}
                      {flg==='false' && <Regi/>}
                        </div>
                        </div>
                  </div>     
            </div>
            
                    
            </>
    );
}
Logmain.propType={
  flg : PropTypes.bool,
}


export default Logmain
