// v3.0 Divisor de recibos

// .map // .toFixed(2) // Number()                  // USADO: metodos y fn nativas:
// ------------------------------------------
import './App.css';
import './Components/PersonaRateList.css';

import { useEffect, useState } from 'react';


function App() {

  const [nofPersonas, setNofPersonas] = useState(4);
  const [total, setTotal] = useState(1000);

  let input = undefined;
  useEffect(() => {
    input = Number(prompt("Ingrese el monto a particionar (en soles).", total));
  }, []);
  useEffect(() => { if (input != total) { setTotal(input) } }, [input])

  function registrarGente(setDatos, nofGente) {
    setDatos([]);
    for (let i = 0; i < nofGente; i++) {
      setDatos((prev) => ([...prev, { id: i, name: `Persona${i + 1}`, rate: 1 }]))
    }
  }

  function reemplazarRate({ id, newRate }, setDatos) {
    if (newRate >= 1) {
      setDatos((prev) => (                                            // '.map method' -- devuelve un nuevo array
        prev.map((persona) => (persona.id === id ? { ...persona, rate: Number(newRate) } : persona))
      ));
    }
  }

  function editarRate(id, rateVariation, setDatos) {                            // -----------------------------------------------
    setDatos((prev) => (                                                            // guarda los cambios
      prev.map((person) => {                                                        // return -- un nuevo array       (db2)
        const newTasa = person.rate + Number(rateVariation);
        const filtro = newTasa >= 1 && person.id === id;
        if (filtro) {
          return { ...person, rate: newTasa }                                       // return -- el array actualizado (db2)-----------
        } else {
          return person
        };
      })));
  };

  const [personas, setPersonas] = useState([]);
  useEffect(() => (registrarGente(setPersonas, nofPersonas)), [nofPersonas]);
  console.log(personas);

  const vinculado2 = personas.reduce((acc, p) => (acc + p.rate), 0)

  return (
    <div className="container">
      <h3 className="title">Creador de recibos</h3>

      {/* Formulario de parámetros principales */}
      <form className="form-group" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <label htmlFor="total" className="label">
            Monto Total (S/.):
          </label>
          <input
            type="number"
            id="total"
            value={total}
            readOnly
            className="input form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="nofPersonas" className="label">
            N° de Personas:
          </label>
          <input
            type="number"
            id="nofPersonas"
            min={2}
            max={9}
            defaultValue={nofPersonas}
            onChange={(e) => setNofPersonas(e.target.value)}
            className="input form-input"
          />
        </div>
      </form>

      <hr className="divider" />

      {/* Lista ordenada de desglose */}
      <ol className="list">
        {personas.map(({ id, name, rate }) => (
          <li key={id} className="list-item">
            <div className="content-wrapper">

              {/* Contenedor 1: Precio y Nombre */}
              <div className="info-group">
                <span className="price">
                  S/. {((total * rate) / vinculado2).toFixed(2)}
                </span>
                <span className="separator">—</span>
                <span className="name">{name}</span>
              </div>

              {/* Contenedor 2: Input numérico y Botones de edición */}
              <div className="action-group">
                <span className="prop-label">
                  (prop.
                  <input
                    type="number"
                    min={1}
                    value={rate}
                    onChange={(e) =>
                      reemplazarRate({ id, newRate: e.target.value }, setPersonas)
                    }
                    className="input rate-input"
                  />
                  )
                </span>

                <button
                  type="button"
                  onClick={() => editarRate(id, "-1", setPersonas)}
                  className="step-button"
                  aria-label="Disminuir proporción"
                >
                  –
                </button>

                <button
                  type="button"
                  onClick={() => editarRate(id, "+1", setPersonas)}
                  className="step-button"
                  aria-label="Aumentar proporción"
                >
                  +
                </button>
              </div>

            </div>
          </li>
        ))}
      </ol>

      {/* Resumen final homogeneizado */}
      <div className="summary-footer">
        Monto Total: <span className="summary-total">S/. <b>{total}</b></span>
      </div>
    </div>
  );
}

export default App