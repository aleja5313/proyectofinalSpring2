import React, { Component } from 'react'
import { DivForm } from '../styles/CardQuestion'
import { Link } from 'react-router-dom'
import { ContainerStyle, TitleHome } from '../styles/homeStyle'
import { Navbar } from 'react-bootstrap'


export default class Home extends Component {
    render() {

        return (
            <DivForm>
            <ContainerStyle>
                <TitleHome>Practica tus conocimientos en la categoría que prefieras.</TitleHome>
                <div>
                    <Link to="../questionHTML" className="nav-link"> <img src="https://i.ibb.co/g99JvFn/Categorias.png" width="70px"  alt="" /></Link>
                    </div>
                    <div>
                    <Link to="/question2" className="nav-link"><img src="https://i.ibb.co/qY3w0Mn/Categorias-1.png" width="70px" alt="" /></Link>
                    </div>
                    <div>
                    <Link to="/question3" className="nav-link"><img src="https://i.ibb.co/kBP4ZDF/Categorias-2.png" width="70px" alt="" /></Link>
                    </div>
                    <div>
                    <Link to="/question4" className="nav-link"><img src="https://i.ibb.co/3BW36Kk/Categorias-3.png" width="70px" alt="" /></Link>
                    </div>
                    <div>
                    <Link to="/question5" className="nav-link"><img src="https://i.ibb.co/tQLFWT9/Categorias-4.png" width="70px" alt="" /></Link>
                    </div>
                    <Navbar/>
                </ContainerStyle>
            </DivForm>
        )
    }
}
