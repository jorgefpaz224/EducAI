import InputGroup from "../components/InputGroup";
import './Login.css'

/*Import Assets*/
import gatito from "../assets/GatitoAkshually.png";
import logo from "../assets/EducAIlogo.png";
import vector from "../assets/loginVector.png";

function Login() {
    return (
        <div id="content">
          <div id="login-page">
            <img id="logo" src={logo} />
    
            <form id="contenido-login">
              <h1 id="texto">Iniciar Sesion</h1>
              <div className="field" id="email-input">
                <label>Correo Electronico</label>
                <InputGroup
                  type="email"
                  id="email"
                  placeholder="correo@edu.com"
                />
              </div>
    
              <div className="field" id="password-input">
                <label>Contraseña</label>
                <InputGroup
                  type="password"
                  id="password"
                  placeholder="***********"
                />
              </div>
    
              <button id="iniciarSesionbtn">Iniciar Sesion</button>
            </form>
          </div>
    
          <img id="vector" src={vector} />
          <img id="gatito" src={gatito} />
        </div>
      );
}

export default Login;
