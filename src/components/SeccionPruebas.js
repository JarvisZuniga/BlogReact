import React, { Component } from "react";
import MiComponente from "./MiComponente";



class SeccionPruebas extends Component {
    contador = 0;

    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    sumar(){
        //this.contador = this.contador +1 ;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar(){
        //this.contador--;
        //this.contador = this.contador-1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

  render() {
    return (
      <section id="content">
        <h2 className="subheader">Últimos artículos</h2>
        <p>
          Hola Mi nombre es JARVIS ZUNIGA
        </p>
        <h2 className="subheader">Funciones y JSX basico</h2>
        <h2 className="subheader">Últimos artículos</h2>
          <section className="componentes">

            <MiComponente />
            <MiComponente />
          
          </section>
        <h2 className="subheader">Estado</h2>
        <p>
           Contando: {this.state.contador}
        </p>
        <p>
            <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
            <input type="button" value="Restar" onClick={this.restar.bind(this)}/>
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
