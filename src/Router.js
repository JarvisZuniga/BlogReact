import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MiComponente from "./components/MiComponente";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
import Peliculas from "./components/Peliculas";
import Search from "./components/Search";

function Router() {
  function Pagina1() {
    return <h1>Hola mundo desde la ruta: PAGINA 1</h1>;
  }

  function Pruebas() {
    let { nombre } = useParams();
    let { apellidos } = useParams();

    return (
      <div id="content">
        <h1 className="subheader">PAGINA DE PRUEBAS</h1>
        <h2>
          {nombre && !apellidos && <React.Fragment>{nombre}</React.Fragment>}
          {nombre && apellidos && (
            <React.Fragment>
              {nombre} {apellidos}
            </React.Fragment>
          )}
        </h2>
      </div>
    );
  }

  const Articulo = () => {
    const { id } = useParams();
    const titulo = "Título del artículo";

    return (
      <div>
        <h1>{titulo}</h1>
        <p>Contenido del artículo...</p>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/articulo/:id" element={<Articulo />} />
        <Route exact path="/blog/busqueda/:search" element={<Search />} />
        <Route exact path="/segunda-ruta" element={<MiComponente />} />
        <Route exact path="/pagina-1" element={<Pagina1 />} />
        <Route exact path="/formulario" element={<Formulario />} />
        <Route exact path="/peliculas" element={<Peliculas />} />
        <Route exact path="/pruebas/:nombre/:apellidos?" element={<Pruebas />} />
        <Route path="*" element={<Error />} />
      </Switch>

      <div className="clearfix"></div>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
