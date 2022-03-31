import React from "react";

export default class Opciones extends React.Component { 
    render() {
        return (
          <>
            <div className="opcion">
              <button
                id={this.props.acumulador + "a"}
                className="botones"
                onClick={this.props.buttonClick}
              >
                A
              </button>
              <h2>{this.props.datosJson.opciones.a}</h2>
            </div>

            <div className="opcion">
              <button
                id={this.props.acumulador + "b"}
                className="botones"
                onClick={this.props.buttonClick}
              >
                B
              </button>
              <h2>{this.props.datosJson.opciones.b}</h2>
            </div>
          </>
        );
    }
}