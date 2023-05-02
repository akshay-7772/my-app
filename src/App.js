import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import Abouts from './components/Abouts';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been Enable", "success");
      document.title = "TextUtils - Dark mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enable", "success");
      document.title = "TextUtils - Light mode";

    }
  }
  
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/abouts" element={<Abouts/>}>
              
            </Route>
            <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} ></TextForm>}>
            
            </Route>
          </Routes> */}
          <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} ></TextForm>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
