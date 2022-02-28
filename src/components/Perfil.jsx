import React, {  useEffect } from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { ButtonProfile, MailProfile, NombreProfile, Titulo } from '../styles/profileStyle'
import { DivProfile } from '../styles/profileStyle'

const cookies = new Cookies();

function Perfil() {
  const navigate = useNavigate ()
  
  const cerrarSesion=()=>{
      cookies.remove('id', {path: "/"});
      cookies.remove('apellido', {path: "/"});
      cookies.remove('nombre', {path: "/"});
      cookies.remove('email', {path: "/"});
      navigate('/login');
  }

  useEffect(() => {
    if(!cookies.get('email')){
      return navigate('login')
    }
})
  return (
    <div className='profile-div'>
      <Titulo>Perfil</Titulo>

      <DivProfile>
        <Image src="https://i.ibb.co/S5ntDMv/Ellipse-3.png" />
        <NombreProfile>Francisco Javier</NombreProfile>
        <MailProfile>francisco.javier@gmail.com</MailProfile>
      </DivProfile>

      <ButtonProfile onClick={() => cerrarSesion()}>Cerrar sesión</ButtonProfile>


      
    </div>
  )
}

export default Perfil