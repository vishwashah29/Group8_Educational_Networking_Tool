import Main from './components/Main';
import Logm from './Logmain'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
{/*this is main App.js this file will be rendered in index.js*/}
function App() {
  return (
    <>
    <BrowserRouter > 
   
         <Switch>
              
              <Route exact path="/main" component={Main}/>      {/*this should route to /main page*/}     
              {/* <Route exact path="/main">
                <h1>this should show simlly</h1>
                 </Route> */}
                 <Route exact path="/" component={Logm}/>       {/*this should route to / login page*/}
                                                                {/*And further route pages can be added here*/}
            </Switch> 
     </BrowserRouter>
    </>
  );
}

export default App;


