import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [], categoria: "" };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handlerEventoInput(e) {
    if (e.key === "Enter") {
      let novaCategoria = e.target.value;
      this.props.adicionarCategoria(novaCategoria);
      this.setState({
        categoria: "",
      });
    }
  }

  _limparCampo(e) {
    this.setState({
      categoria: e.target.value,
    });
    e.stopPropagation();
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={this.state.categoria}
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handlerEventoInput.bind(this)}
          onChange={this._limparCampo.bind(this)}
        ></input>
      </section>
    );
  }
}

export default ListaDeCategorias;
