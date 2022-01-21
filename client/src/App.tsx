import React, {useState} from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {

    const [validation,setValidation]=useState({
      code:'',
        person:'',
        result:false,
        message: '',
        date_of_birth:'',
        data: null
    });

    const colorFromValidation=()=>{
      
      if(validation.data!=null){
          return "red";
      }
      switch(validation.code){

          case "VALID":
              return "#14c314";
          case "TEST_NEEDED":
              return "orange";
          case "NOT_VALID":
          case "NOT_VALID_YET":
          case "REVOKED":
          case "NOT_EU_DCC":
              return "red";
          default:
              return "transparent";

      }
    }

      
    const callbackResult=(data:any)=>{
      console.log("Ho chiamato la callback",data);
      setValidation(data);
    }

    return (

      <div className="App"  style={{backgroundColor: colorFromValidation()}}>
        
          <header className="App-header">
              <h3>Valida GreenPass</h3>
          </header>
          {validation.result && 
              (<>
                  <h3>{validation.person}</h3>
                  <h3>{validation.date_of_birth}</h3>
                  <p>{validation.message}</p>
              </>
          )}
          <div>
              <FileUpload callbackmethod={callbackResult}/>
          </div>

      </div>
    );
}

export default App;
