# SimplyJS Intro
Simply is a lightweight JavaScript framework for building user interfaces with plain JavaScript. It allows you to write UI components in a syntax that resembles HTML, but with the full power of JavaScript behind it. Here's a quick example:

Create Button Componet `Button.js`:
```jsx
// Button component
const Button = () => {
  let i = 0;

  const increment = () => {
    i++;
    console.log(i);
    alert(i);
  }

  return (
    <button onClick={increment} class="btn btn-primary">Click me</button>
  )

}
// In SimplyJS, no need to export component
```

Create Container Component `Container.js`
```javascript
// import Button Component
import Button from './Button';

const Container = () => {
    return (
        <div className="container">
            <h1>Hello, world!</h1>
            <Button />
            <p>This is a simple example of a component built with Simply.</p>
        </div>
    )
}
Simply.render(Container, "#root", () => {
    console.log('Rendered Success!')
});
```
---
This code will render a `div` element with a class of `"container"`, containing an `h1` element with the text `"Hello, world!"`, `button` element with a class of `"btn btn-primary"` with an onclick event to increment the `i` variable. Also a `p` element with some sample text. It will then append that div to the element with an ID of `"root"` in your HTML document.

The `Simply.render` method takes 3 arguments: a component function, container element and callback function. The component function should return a tree of Simply elements, which are plain JavaScript objects that describe a UI element. These elements can be nested, just like regular HTML, to build up a complete user interface.

This is a simple example project demonstrating how to use the Simply.js framework.
---
## Getting Started
To get started with this project, follow these steps:
First, you'll need to download the `SimplyJS` library and include it in your project. You can download the library from here. `SimplyJS` provides a single `simply.development.js` file that you can include in your HTML file.

```html
<script src="./path/to/simply.development.js"></script>
```

or clone this repository
## Clone the repository:
```bash
git clone https://github.com/aldrin112602/SimplyJS.git
cd simplyJS
```

## Usage
This example project demonstrates how to create a simple login form using Simply.js. Here's a breakdown of the key components:

## Form Component
The Form component is a simple login form that takes in a username and password and logs them to the console when the form is submitted.

Create a File called `Form.js`

```jsx
const Form = () => {
  let username, password;

  // handle login request
  const handleLogin = (ev) => {
    ev.preventDefault();
    const data = { username, password };
    // display data
    console.log(data);
  };

  return (
    <form method="post" className="col-7 bg-dark p-5 text-white" onSubmit={handleLogin}>
      <h1 className="text-center">Log-In</h1>
      <label className="form-label">Enter your Username</label>
      <input
        placeholder="Username"
        className="form-control"
        type="text"
        name="username"
        required={true}
        onInput={(e) => (username = e.target.value)}
      ></input>
      <label className="form-label">Enter your Password</label>
      <input
        placeholder="Password"
        className="form-control"
        type="password"
        name="password"
        required={true}
        onInput={(e) => (password = e.target.value)}
      ></input>
      
      <div className="d-grid mt-4">
        <button type="submit" className="btn btn-primary btn-block">Login now</button>
      </div>
    </form>
  );
};
```

## Rendering the Form
To render the Form component to the DOM, we use the `Simply.render()` function:
```jsx
Simply.render(Form, "#root");
```

Here, we're rendering the Form component to the #root element in the HTML document.

Now create `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simply JS example</title>
    <!-- simplyJS script -->
    <script src="./simplyJS/simply.development.js" defer></script>
    <!-- botstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- main app -->
    <div
      id="root"
      class="d-flex align-items-center justify-content-center"
      style="min-height: 100vh"
    ></div>

    <!-- main simplyJS -->
    <script src="./Main.js" type="text/simply"></script>

    <!-- or using internal script -->
    <script  type="text/simply">
      /*
      const Form = () => {
        let username, password;
        // handle login request
        const handleLogin = (ev) => {
          ev.preventDefault();
          const data = { username, password };
          // display data
          console.log(data);
        };
        return (
          <form
            method="post"
            className="col-7 bg-dark p-5 text-white"
            onSubmit={handleLogin}
          >
            <h1 className="text-center">Log-In</h1>,
            <label className="form-label">Enter your Username</label>
            <input
              placeholder="Username"
              className="form-control"
              type="text"
              name="username"
              required={true}
              onInput={(e) => (username = e.target.value)}
            ></input>
            <label className="form-label">Enter your Password</label>
            <input
              placeholder="Password"
              className="form-control"
              type="password"
              name="password"
              required={true}
              onInput={(e) => (password = e.target.value)}
            ></input>
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-block">
                Login now
              </button>
            </div>
          </form>
        );
      };
      Simply.render(Form, "#root");
      */
    </script>
  </body>
</html>

```

## Contributing
Contributions are always welcome! If you have any issues or feature requests, please create an issue on the repository. If you'd like to contribute code, please create a pull request and we'll review it as soon as possible.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

---
Made with ❤️ by Aldrin Caballero
