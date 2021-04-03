import Main from './Main';
import Logm from './Logmain'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

{/*this is main App.js this file will be rendered in index.js*/}
function App() {
  return (
    <>
    
    <BrowserRouter > 
    
         <Switch>
              
              <Route exact path="/main" component={Main}/>      {/*this should route to /main page*/}     
           
                 <Route exact path="/"> <Logm flg='true'/></Route>     
                 {/* <Route exact path="/"> <Project/></Route> */}
                 <Route exact path="/register"> <Logm flg='false'/></Route> 
                 {/*And further route pages can be added here*/}
            </Switch> 
     </BrowserRouter>
    </>
  );
}

export default App;


