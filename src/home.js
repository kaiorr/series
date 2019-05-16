import React, { Component } from "react";

// import { Container } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      isLoading: false
    };
  }
  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>
                  <img src="images/logo.png" />
                </h1>
                <p>
                  Nunca mais esqueça uma série que você assistiu ou que alguém
                  lhe indicou.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          {this.state.isLoading && <span>Aguarde Carregando...</span>}
          {!this.state.isLoading && (
            <div>
              ver séries do Gênero:
              {/*this.state.genres.map(this.renderGenreLink)*/}
            </div>
          )}
        </section>
      </div>
    );
  }
}
