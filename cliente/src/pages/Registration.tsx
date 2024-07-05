import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { User } from "../types/CustomTypes";
import { useNavigate } from "react-router-dom";

// The <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <FormLabel> for the label.

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [profilePic, setProfilePic] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value :>> ", e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.value :>> ", e.target.value);
    setPassword(e.target.value);
  };
  const handleProfilePicChange = (e: ChangeEvent<FormControlElement>) => {
    console.log("e.target", e);
    setProfilePic(e.target.files[0]);
  };
  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "name, email, password, profilePic :>> ",
      name,
      email,
      profilePic
    );
    // validate input values

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("profilePic", profilePic);
    const requestOptions = {
      method: "POST",
      body: formdata,
    };
    try {
      const res = await fetch(
        "http://localhost:5000/api/users/register",
        requestOptions
      );

      // if res.ok success (say Hello & re-direct)
      if (res.ok) {
        const result = (await res.json()) as User;
        // console.log("data", data);
        console.log("this is the new user!", result);
        alert(`Hello ${name},Registration was a success, now please Login!`);
        navigate("/login");
        // setInputValues({ email: "", password: "", username: "" });
        // selectedFile.current = null;
        // setPreviewImg("");
      }
      // else handle error (alert message / error state)

      if (!res.ok) {
        const result = await res.json();
        console.log("result not ok", result);
        alert(result.error);
        // setError(result.error);
      }
    } catch (error) {
      console.log(error);
      // const { message } = error as Error;
      // setError(message);
    }
  };

  return (
    <Form onSubmit={handleRegisterSubmit}>
      <h2>Welcome!</h2>

      <Form.Group className="mb-3" controlId="formBasicName'">
        <Form.Label>Name</Form.Label>

        <Form.Control
          type="name"
          placeholder="Enter the name you want to use here"
          value={name}
          onChange={handleNameChange}
        />

        <Form.Text className="text-muted">
          Your (user)name should contain only characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>

        <Form.Control
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
        />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          aria-describedby="passwordHelpBlock"
          value={password}
          onChange={handlePasswordChange}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Must be 8-20 characters long, contain letters & numbers, must NOT
          contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" onChange={handleProfilePicChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  // <Link to=("/login")>
  // If you don't have an account, click here to login </Link>
}

export default Registration;
