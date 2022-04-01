import Header from "./components/Header";
import Footer from "./components/Footer";
import CityForm from "./components/CityForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <Header />

      <main className="row">
        <CityForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
