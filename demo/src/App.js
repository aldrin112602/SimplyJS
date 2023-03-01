
// import LandingPage component
import LandingPage from "./src/components/LandingPage";
// import Button Component
import Button from "./src/components/Button";
// Create App component
const App = () => {
  return (
    <LandingPage />
  )
};

// Render App
Simply.render(App, "#root", () => {
  console.log("Rendered success!");
});
