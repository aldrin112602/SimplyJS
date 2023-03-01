// import NavBar Component
import NavBar from './NavBar';

// main App
const App = () => {
  const handleClick = () => {
    alert("You clicked button!");
  }
  return (
    <div>
      <NavBar />
      <div className="d-grid">
        <button className="btn btn-primary" onClick={handleClick}> Click me </button>
      </div>
    </div>
  );
}
// render to DOM
Simply.render(App, "#root");
