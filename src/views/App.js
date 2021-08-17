import logo from '../logo.svg';
import '../assets/css/App.css';
import Header from '../components/Header';
import InputChart from '../components/InputChart';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className=" bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto">
          <div className="text-left mx-auto container text-3xl font-bold font-sans py-16">
            Web sentimen analisis
          </div>
          <div className="text-left mx-auto container">
            abstract
          </div>
        </div>
        <InputChart/>
      </main>
      <footer>
        <span className="my-4 py-4 font-bold">
          Web Sentimen Analisis ©2020 Created Jatmiko
        </span>
      </footer>
    </div>
  );
}

export default App;
