import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "3ac8537f-4601-4bcb-97be-05ab95e0ac1b",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.localStorage.reload();
    } catch (err) {
        setError('Oops incorrect credentials.')
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Aplication</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="User Name"
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />

          <input
            type="text"
            value={password}
            placeholder="User Password"
            onChange={(e) => setpassword(e.target.value)}
            className="input"
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">
              {error}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
