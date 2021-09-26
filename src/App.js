import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Contact from "./components/Contact"
import Product from './components/Products';
import Navbar from './components/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
     <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/products" component={Product} />
     </BrowserRouter>
  );
}

export default App;
