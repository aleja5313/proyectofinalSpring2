import React  from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import {
  DivAuth,
  Header,
  Logo,
  Form,
  Label,
  DivLink,
  Input,
  Separator,
  ButtonGoogle,
  DivForm
} from "../styles/styleAuth";
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { url } from '../helpers/url';

const cookies = new Cookies();

    function Login() {
        const navigate = useNavigate()
        const [form, setForm] = useState( {
            email: '',
            password: ''
        })
    
        const handleChange= e=>{
            setForm({
                    ...form,
                    [e.target.name]: e.target.value
            });
        }
    
        const useIniciarSesion=async()=>{
            console.log('form', form)
            await axios.get(url, {params: {email: form.email, password: form.password}})
            .then(response=>{
                console.log('response.data', response.data)
                return response.data;
            })
            .then(response=>{
                if(response.length>0){
                    let respuesta = response[0];
                    console.log('respuesta', respuesta)
                    console.log(respuesta.id);
                    cookies.set('id', respuesta.id, {path: "/"});
                    cookies.set('apellido', respuesta.apellido, {path: "/"});
                    cookies.set('nombre', respuesta.nombre, {path: "/"});
                    cookies.set('email', respuesta.email, {path: "/"});
                    alert("Bienvenido");
                    navigate('/home');
                    //window.location.href="/RetoFinal-Sprint2/home";
                }else{
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
    
        useEffect(() => {
            if(cookies.get('email')){
                navigate('/home')
            }
        })
        
    

return (
  <DivAuth>
    <Header>
      <Logo src="https://i.ibb.co/q5y2CTM/Logo-1.png" alt="Logo" />
      <h1>Iniciar sesión</h1>
    </Header>


    <DivForm>
      <ButtonGoogle>
        <img src="https://i.ibb.co/grVNShS/Buttons-1.png" alt="google" />
        Continuar con Google</ButtonGoogle>
      <Separator />

      <Form action="" >

        <Label htmlFor="inputEmail">
          Correo electrónico
          <Input
          onChange={handleChange}
            type="email"
            name="email"
            id="inputEmail"
            placeholder="Ingrese su correo electrónico"
          />
        </Label>

        <Label htmlFor="inputPassword">
          Contraseña
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            id="inputPassword"
            placeholder="Ingrese su contraseña"
          />
        </Label>

        <Button onClick={useIniciarSesion} >Iniciar sesion </Button> 
      </Form>
    </DivForm>

    <DivLink>
      <Link to="/auth/login" style={{ color: "#6B47DC"}}>
        ¿Olvidaste tu contraseña?
      </Link>
      <br />
      <br />
      <p>
        ¿No tienes una cuenta?{" "}
        <Link to="/auth/register" style={{ color: "green" }}>
          Registrate
        </Link>
      </p>
    </DivLink>
    {/* <Notification */}
      {/* // notification={notify}
      // isVisible={showNotification}
      // handleContinue={() => handleContinue()}
    /> */}
  </DivAuth>
);
};

export default Login
