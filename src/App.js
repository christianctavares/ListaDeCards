import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import ListaDeNotas from "./components/ListaDeNotas";
import { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categoria from "./dados/Categorias.js";
import ArrayDeNotas from "./dados/Notas.js";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayDeNotas();
    // this.state = {
    //   notas: [],
    //   categorias: [],
    // };
  }

  // criarNota(titulo, texto) {
  //   const novaNota = { titulo, texto };
  //   const novoArrayNotas = [...this.state.notas, novaNota];
  //   const novoEstado = {
  //     notas: novoArrayNotas,
  //   };
  //   this.setState(novoEstado);
  // }

  // deletarNota(index) {
  //   const arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas });
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategoria = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = { ...this.state, categorias: novoArrayCategoria };
  //   this.setState(novoEstado);
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            // chame aquele this que ele tem que chamar dentro da função
            //  é referente a esse objeto this.categorias do meu app.js
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}
export default App;
