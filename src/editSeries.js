import React, { Component } from "react";
import api from "./api";
import { Redirect } from "react-router-dom";

// import { Container } from './styles';

const statuses = {
  watched: "Asistido",
  watching: "Assistindo",
  toWatch: "Assistir"
};

export default class EditSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      isLoading: false,
      redirect: false
    };
    // PARA CONSEGUIR PEGAR O ELEMENTO QUE PASSA O THIS
    this.saveSeries = this.saveSeries.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    api
      .loadSeriesById(this.props.match.params.id)
      .then(res => console.log(res));
    api.loadGenres().then(res =>
      this.setState({
        isLoading: false,
        genres: res.data
      })
    );
  }
  // METODO QUE ENVIA A CONSTANTE DE OBJETOS
  saveSeries() {
    const newSeries = {
      name: this.refs.name.value,
      status: this.refs.status.value,
      genre: this.refs.genre.value,
      comments: this.refs.comments.value
    };
    api.saveSeries(newSeries).then(res =>
      this.setState({
        redirect: "/series/" + this.refs.genre.value
      })
    );
  }
  render() {
    return (
      <section className="intro-section">
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <h1>Nova Série</h1>
        <form>
          Nome: <input type="text" ref="name" className="form-control" />
          Status:
          <select ref="status">
            {Object.keys(statuses).map(key => (
              <option key={key} value={key}>
                {statuses[key]}
              </option>
            ))}
          </select>
          <br />
          Genero:
          <select ref="genre">
            {this.state.genres.map(key => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <br />
          Comentários: <textarea ref="comments" className="form-control" />
          <br />
          <button type="button" onClick={this.saveSeries}>
            Salvar
          </button>
        </form>
      </section>
    );
  }
}
