import background from "./img/bg.png";
import Regi from './components/Regi';
import Log from './components/Login';
import Syn from './components/Synergy';
import Main from './components/Main';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


const Logmain = () => {
    
        return (
            <>
            <BrowserRouter > 
            <div className='containerbg inline-flex-parent'
             style={{ 
              backgroundImage: `url(${background})` ,
            //   height :'950px',
              // alignItems :'center',
              justifyContent:'center',
              backgroundRepeat:'no-repeat',
              }}>
        
                <div className='inline-flex-parent'
                  style={{borderRadius:'50px'}}
                >
                  <div>
                    <Switch>
                      <Route exact path="/" component={Log}/>
                      <Route  path="/register" component={Regi}/>
                      <Route  path="/main" component={Main}/>
        
                    </Switch> 
                    </div>
                    <div>
                      <Syn />
                    </div>
                  
                </div>     
            </div>
             </BrowserRouter>
            </>
    );
}

export default Logmain
