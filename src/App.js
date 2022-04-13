
import './App.css';
 import Navv from './components/Navv'
import TextForm from "./components/TextForm"




function App() {




    return (
    <div className="App">
        <>
        <Navv title="Text Analyzer" home = "HomePage"/>

          <div className="container my-3"><TextForm label = "Enter Your Text to analyze"/>
</div>


        </>

    </div>

  );
}

export default App;
