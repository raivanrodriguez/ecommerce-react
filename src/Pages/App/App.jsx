

import { AppProvider } from "../../Context";
import Navbar from "../../Components/Navbar"
import { HashRouter } from 'react-router-dom';






import './App.css'
import { AppRoutes } from "./AppRoutes";

function App() {
    
  return (
    <AppProvider>
      <HashRouter>
      <Navbar/>
        <AppRoutes />
        
        
        
      </HashRouter>
      </AppProvider>
    
  )
}


    
     
    
    export default App
