import React, {useState} from 'react'
import Routers from './components/router/Router'
import AuthProvider from "./Context/AuthProvider.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  
  return (
    <> 
        <AuthProvider>
      <Routers />
      </AuthProvider>
    </>
  )
}

export default App