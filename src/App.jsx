
// import './App.css'
import { useEffect, useState } from 'react';

let data = [
  {
    id: 1,
    name: "Persona1",
    proporcion: 42.15,
  },
  {
    id: 2,
    name: "Persona2",
    proporcion: 87.03,
  },
  {
    id: 3,
    name: "Persona3",
    proporcion: 15.49,
  },
  {
    id: 4,
    name: "Persona4",
    proporcion: 63.81,
  },
  {
    id: 5,
    name: "Persona5",
    proporcion: 29.74,
  }
];

let miConfig = {
  // numberOfPeople: 0,                                     // descontinuado
  // montoTotal: 1000,                                      // descontinuado.
  operacion: "proporcional",
};


function App() {
  // In-Memory Logger (with Vite,react...):
  let logs = "";                                                      // este 'logs' en memoria, reemplaza al console.log
  const postLogData = (texto) => (logs += texto + "\n");              // POST  log
  const getLoggedData = () => (logs);                                 // GET   logs
  const printLoggedData = () => (console.log(logs));                  // PRINT logs


  function registrarMontosProporcionalmente(datos, { operacion }, Total) {
    if (operacion === "proporcional") {
      // regla de tres simple (vinculado,origen,tercerT,x)
      const vinculado = datos.reduce((acc, manData) => acc + manData.proporcion, 0);
      const origen = Total;
      for (let i = 0; i < datos.length; i++) {
        const tercerT = datos[i].proporcion;
        const subTotal = Number(((origen * tercerT / vinculado) + 0.01).toFixed(2));
        postLogData(`${i + 1}) S/. ${subTotal}`);
      }
      postLogData(`Monto Total = S/. ${Total}`);
    } else {
      console.log("Error: El tipo de operación es inválida. Favor de corregir.");
    };

  };
  const [nofPeople, setNofPeople] = useState(4);
  const [total, setTotal] = useState(1000);

  let input = undefined;
  useEffect(() => {
    input = Number(prompt("Ingrese el monto a particionar (en soles).", total));
  }, []);
  useEffect(() => { if (input != total) { setTotal(input) } }, [input])
  registrarMontosProporcionalmente(data, miConfig, total);


  return (
    <>
      <pre style={{ fontSize: "medium", fontFamily: "sans-serif", fontWeight: "bold" }}>{getLoggedData()}</pre><br />
      <form action="">
        <label htmlFor="total">Monto Total:</label>
        <input type='number' id='total' value={total}></input><br />              {/* input.name:""  --  se usa solo cuando hay backend */}
        <label htmlFor="nofPeople">N° de Personas:</label>
        <input type='number' id='nofPeople' min={2} defaultValue={nofPeople} onChange={(e) => (setNofPeople(e.target.value))}></input>
      </form>
    </>
  )
}

export default App