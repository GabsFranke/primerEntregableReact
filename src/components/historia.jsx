import React from "react";
import data from "./data/data.json";
import Opciones from "./opciones";
import Eleccion from "./eleccion";

export default class Historia extends React.Component {
  state = {
    acumulador: 2,
    datosJson: data[0],
    seleccionPrevia: "",
    historialDeOpciones: [],
  };

  componentDidUpdate(prevState) {
    if (
      prevState.seleccionPrevia !== this.state.seleccionPrevia &&
      this.state.seleccionPrevia !== ""
    ) {
      this.state.historialDeOpciones.push(this.state.seleccionPrevia);
    }
  }

  buttonClick = (e) => {
    if (this.state.acumulador < 6) {
      this.setState({
        acumulador: this.state.acumulador + 1,
        datosJson: data.find((element) => element.id === e.target.id),
        seleccionPrevia: e.target.id.slice(1, 2).toUpperCase(),
      });
    } else {
      e.preventDefault();
      if (window.confirm("La historia termino! ¿Queres volver a empezar?")) {
        this.setState({
          acumulador: 2,
          datosJson: data[0],
          seleccionPrevia: "",
          historialDeOpciones: [],
        });
      }
    }
  };

  render() {
    return (
      <div className="layout">
        <div className="historia">
          <h1>{this.state.datosJson.historia}</h1>
        </div>
        <div className="opciones">
          <Opciones
            acumulador={this.state.acumulador}
            buttonClick={this.buttonClick}
            datosJson={this.state.datosJson}
          />
        </div>
        <div className="recordatorio">
          <Eleccion
            seleccionAnterior={this.state.seleccionPrevia}
            historialDeOpciones={this.state.historialDeOpciones}
          />
        </div>
      </div>
    );
  }
}
