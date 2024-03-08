import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from  '../Global';
import sinfoto from  '../assets/images/sinfoto.jpg'

class Articles extends Component {
    
    url = Global.url

  state = {
    articles: [],
    status: null,
  };

  componentWillMount() {
    var home = this.props.home;
    var search = this.props.search;

    if(home === 'true'){
        this.getLasArticles();
    }else if(search && search !=null && search != undefined){
      this.getSearchedArticles(search);
    
    }else{
        this.getArticles();
    }    
  }

  getArticlesBySearch = (searched) => {
      axios.get(this.url +  "search/"+ searched)
          .then(res => {
            
            
              if(res.data.articles){
                this.setState({ 
                  articles: res.data.articles,
                  status: "success" 
                });
              }else{          
                this.setState({ 
                  articles: res.data.articles,
                  status: "failed" 
                });
              }
          });
      
  }

  getLasArticles = () => {
    axios
      .get(this.url +  "/articles/last")
      .then((res) => {
        console.log(res.data);
        this.setState({ articles: res.data.articles, status: "success" });
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        this.setState({ status: "error" });
      });
  };

  getArticles = () => {
    axios
      .get(this.url +  "/articles")
      .then((res) => {
        console.log(res.data);
        this.setState({ articles: res.data.articles, status: "success" });
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        this.setState({ status: "error" });
      });
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        return (
            <article className="article-item" id="article-tamplate">
            <div className="image-wrap">
                {article.image !== undefined ? (
                    <img src={this.url + '/get-image/' + article.image} alt={article.title} />
                ) : (console.log("article.image:", article.image),

                    <img src={sinfoto} alt={article.title} />
                )}
            </div>
            <h2>{article.title}</h2>
            <span className="date">
                <Moment fromNow>{article.date}</Moment>
            </span>
            <Link to={'/blog/articulo/' + article._id}>Leer mas</Link>
            <div className="clearfix"></div>
        </article>
        
        );
      });
    } else {
      listArticles = <p>No hay artículos cargados aún</p>;
    }

    if (this.state.articles.length >= 1) {
      return (
        <div id="articles">
          {listArticles}
        </div>
      );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subheader">No hay artículos que mostrar</h2>
          <p>Todavía no hay artículos en esta sección</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 className="subheader">Cargando.....</h2>
          <p>Espere mientras carga el contenido</p>
        </div>
      );
    }
  }
}

export default Articles;

