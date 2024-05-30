import { useState, FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "./utils/loginUtils";
import { Input } from "../../components/inputs/Input";
import { InputPassword } from "../../components/inputs/InputPassword";


const LoginForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!checkLogin()) {
      return alert("Uneli ste pogresno korisnicko ime ili sifru");
    } //Proverava ime i sifru

    console.log("Username:", username);
    console.log("Password:", password); //PROSLEDI DALJE USERNAME I SIFRU
    sessionStorage.setItem("UserName", username);
    navigate("/table");
  };

  return (
    <div className="backgroundCenter">
      <form onSubmit={handleSubmit} className="login-form form">
      <h2>Login</h2>
        
        <Input
          value={username}
          setValue={setUsername}
          label="Korisnicko ime"
          required={true}
        />
        <InputPassword
          value={password}
          setValue={setPassword}
          label="Sifra:"
          required={true}
        ></InputPassword>
        <center> <button className="button1"  type="submit">
          Ulogujte se
        </button></center>
      </form>
    </div>
  );
};

export default LoginForm;
