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
      <form method="post" className="col-12 col-md-7 bg-dark p-5 text-white" onSubmit={handleLogin}>
        <h1 className="text-center">'Log-In'</h1>,
        <label className="form-label">'Enter your Username'</label>,
        <input
          placeholder="Username"
          className="form-control"
          type="text"
          name="username"
          required={true}
          onInput={(e) => (username = e.target.value)}
        ></input>
        ,<label className="form-label">'Enter your Password'</label>,
        <input
          placeholder="Password"
          className="form-control"
          type="password"
          name="password"
          required={true}
          onInput={(e) => (password = e.target.value)}
        ></input>
        ,
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary btn-block">
            'Login now'
          </button>
        </div>
      </form>
    );
  };
  Simply.render(Form, "#root");

