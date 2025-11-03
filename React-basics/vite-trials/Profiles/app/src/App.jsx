import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    isOnline: false,
  });
  const [profiles, setProfiles] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setProfiles((prev) => [...prev, formData]);

    setFormData({
      name: "",
      age: "",
      isOnline: false,
    });
  }

  return (
    <>
      <div>
        <h2>Create Profile: </h2>
        <form action="" onSubmit={handleSubmit}>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            required
          ></input>{" "}
          <br />
          Age:{" "}
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Age"
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
            required
          ></input>{" "}
          <br />
          IsOnLine:{" "}
          <input
            type="checkbox"
            name="isOnline"
            checked={formData.isOnline}
            onChange={(e) => {
              setFormData({ ...formData, isOnline: e.target.checked });
            }}
          />{" "}
          <br />
          <button type="submit">Create Profile</button>
        </form>

        <div>{profiles.map((profile)=> {
            <div>{profile}</div>
        })}</div>
      </div>
    </>
  );
}

export default App;
