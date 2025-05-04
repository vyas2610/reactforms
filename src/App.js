import { useState } from "react";

function App() {
  const [name, setName] = useState("Deepak");
  const [email, setEmail] = useState("deepak@gmail.com");
  const changeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  const SudmitData = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
    };
    console.log(data);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1>Form Handling in React Js</h1>
            <form action="" onSubmit={SudmitData}>
              <p>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  name="name"
                  onChange={changeHandler}
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={changeHandler}
                />
              </p>
              <p>
                <input
                  type="submit"
                  value="Click"
                  className=" btn btn-primary px-4"
                ></input>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
