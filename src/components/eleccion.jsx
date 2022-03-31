import React from "react";

export default class Eleccion extends React.Component {
  render() {
    return (
      <>
        <h3>Seleccion anterior: {this.props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.props.historialDeOpciones.lenght === 0
            ? false
            : this.props.historialDeOpciones.map((opcion, i) => (
                <li key={i + opcion}>{opcion}</li>
              ))}
        </ul>
      </>
    );
  }
}
