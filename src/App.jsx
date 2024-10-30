import Hotels from "./components/Hotels";
import "./components/Hotel.css";

export const App = () => {
  return(
    <section className="container">
      <h1 className="card-heading">RESTAURANTS IN JAMSHEDPUR</h1>
      <Hotels />;
    </section>
  ) 
  
};

export default App;

