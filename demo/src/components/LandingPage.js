// import Button Component
import Button from "./src/components/Button";

// LandingPage component
const LandingPage = () => {
  return (
    <div
      style="min-height: 100vh;"
      class="bg-dark d-flex align-items-center justify-content-center gap-3 flex-column"
    >
      <img src="./public/img/logo.png" className="col-5 col-md-3 __rotate"></img>
      <h2 class="text-white">Welcome to SimplyJS!</h2>
      <h4 class="text-white">Edit src/App.js and save to reload.</h4>
      <Button />
      <a class="text-secondary" href="https://github.com/aldrin112602/SimplyJS">View on github</a>
    {/*  */}
    </div>
  );
};

// no need to export component
