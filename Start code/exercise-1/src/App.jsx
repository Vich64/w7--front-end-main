import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";
function App() {
  return (
    <>
   
      <Header courses="English"/>
    <main className="scores-container">
      <Scores course="Java" results={JAVA_RESULTS} />      
      <Scores course="Python" results={PYTHON_RESULTS} />
      <Scores course="HTML" results={HTML_RESULTS} />
      <Scores course="English" results={ENGLISH_RESULTS} />
        
    </main>
      
    </>
  );
}

export default App;
