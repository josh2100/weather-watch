import Header from "./components/Header";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
