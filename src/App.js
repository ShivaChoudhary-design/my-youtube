
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './components/MainContainer';
import ShowPage from './components/ShowPage';


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },{
      path:"/watch",
      element:<ShowPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
    <Head/>
    <RouterProvider router={appRouter}/>
    


{/* Head
    Body
     Sidebar
       MenuItems
     MainContainer
       ButtonList
       Video Container
         VideoCard

    
    
*/}
    </div>
    </Provider>
  );

  
}

export default App;
