

import { AppProvider } from "../../Context";
import Navbar from "../../Components/Navbar"
import { BrowserRouter } from 'react-router-dom';






import './App.css'
import { AppRoutes } from "./AppRoutes";

function App() {
    
  return (
    <AppProvider>
      <BrowserRouter>
      <Navbar/>
        <AppRoutes />
        
        
        
      </BrowserRouter>
      </AppProvider>
    
  )
}


    
     
    
    export default App
