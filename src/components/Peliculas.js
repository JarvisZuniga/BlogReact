import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://th.bing.com/th/id/R.8ba26391a256bbffbb7aabe2b36733e5?rik=RYxuBcNttt8pgw&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2fbatman-vs-superman-dawn-of-justice.jpg&ehk=he34uV9HOS6F0coo1iJSJC3ww7vcVCBZbicM6P6lnZI%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        titulo: "Gran Torino",
        image:
          "https://th.bing.com/th/id/R.b3e943f90f8976365db97e3190c8036b?rik=D2BmjMJRqnTWJw&riu=http%3a%2f%2fcomic.highlightzone.de%2fwp-content%2fuploads%2f2020%2f01%2f0000-1.jpg&ehk=msSc5fbko41NQoiTJPu2BsXzRe8tSUdimmgkPAUGNWs%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        titulo: "Looper",
        image:
          "https://i.pinimg.com/originals/c1/e9/2e/c1e92ed37b5a4ac72cfd81cc90780c82.jpg",
      },
    ],
    nombre: "Jarvis Zuniga",
    favorita: {},
  };

  favorita = (pelicula, indice) => {
    console.log("Favorita");
    console.log(pelicula, indice);
    this.setState({ favorita: pelicula });
  };

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    return (
    <div>
        <Slider
          title="PELICULAS"
          size="slider-small"
        />
      <div class="center">
        <div id="content" className="peliculas">
          <h2 className="subheader">Listado de Peliculas</h2>
          <p>Seleccion de la peliculas favoritas de {this.state.nombre}</p>
          {this.state.favorita.titulo && (
            <p className="favorita" style={pStyle}>
              <strong>La pelicula favorita es: </strong>
              <span>{this.state.favorita.titulo}</span>
            </p>
          )}
          <div id="articles" className="peliculas">
            {this.state.peliculas.map((pelicula, i) => {
              return (
                <Pelicula
                  key={i}
                  pelicula={pelicula}
                  indice={i}
                  marcarFavorita={this.favorita}
                />
              );
            })}
          </div>
        </div>
        <Sidebar 
            blog= "false"
         />
      </div>
    </div>
    );
  }
}

export default Peliculas;
