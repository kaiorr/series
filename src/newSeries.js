import React, { Component } from "react";
import api from "./api";

// import { Container } from './styles';

const statuses = {
  watched: "Asistido",
  watching: "Assistindo",
  toWatch: "Assistir"
};

export default class NewSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      isLoading: false
    };
    this.saveSeries = this.saveSeries.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    api.loadGenres().then(res =>
      this.setState({
        isLoading: false,
        genres: res.data
      })
    );
  }
  saveSeries() {
    alert(this.refs.name.value);
  }
  render() {
    return (
      <section className="intro-section">
        <h1>Nova Série</h1>
        <form>
          Nome: <input type="text" className="form-control" />
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
          <select status="genre">
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
