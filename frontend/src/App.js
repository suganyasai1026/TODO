
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AllRoutes from './routes/allroutes';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        

          <AllRoutes />

       
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
