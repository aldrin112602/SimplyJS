
// import components
import LandingPage from "./src/components/LandingPage";
import Button from "./src/components/Button";
import Logo from "./src/components/Logo";

// Create App component
const App = () => {
  return (
    <div
      style="min-height: 100vh;"
      class="bg-dark d-flex align-items-center justify-content-center gap-3 flex-column"
    >
      <Logo />
      <LandingPage title="Welcome to SimplyJS!" />
      <Button />
      <a class="text-secondary" href="https://github.com/aldrin112602/SimplyJS">View on github</a>
    </div>
  );
};

// Render App
Simply.render(App, "#root");
