import Main from './Main';
import Logm from './Logmain'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import FirstPage from './firstPage'
import Home from './menuPages/Home';
import ContactUs from './menuPages/ContactUs';
import Blog from './menuPages/Blog';
{/*this is main App.js this file will be rendered in index.js*/}
function App() {
  return (
    <>
    
    <BrowserRouter > 
    
         <Switch>
              
              <Route exact path="/main" component={Main}/>      {/*this should route to /main page*/}     
           
                 {/*<Route exact path="/"> <Logm flg='true'/></Route>     */}
                 <Route exact path='/'>
                   <FirstPage/>
                 </Route>

                 <Route exact path='/home'>
                   <FirstPage/>
                   </Route>

                 <Route exact path='/blog' >
                <Blog/>
                </Route>

                 <Route exact path='/contactus'>
                   <ContactUs/>
                 </Route>
                 {/* <Route exact path="/"> <Project/></Route> */}
                 <Route exact path="/login"> 
                    <Logm flg='true'/>
                  </Route>
                 <Route exact path="/signup"> 
                      <Logm flg='false'/>
                  </Route> 
                 {/*And further route pages can be added here*/}
          

                {/*<Route exact path="/blog">
                   
                 </Route>

                 <Route exact path='/contactus'>

                 </Route>
                */}
            </Switch> 
     </BrowserRouter>
    </>
  );
}

export default App;


