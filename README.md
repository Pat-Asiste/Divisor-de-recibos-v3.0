# Manual de Usuario: Creador de Recibos y Particionador de Gastos

Bienvenido a la documentación del **Creador de Recibos**. Esta aplicación está diseñada para facilitar la división de un monto total de dinero (en Soles, S/.) entre un grupo de personas, permitiendo asignar proporciones o pesos personalizados a cada una de ellas de manera visual e interactiva.

---

## 📋 Índice
1. [Descripción General](#descripcion-general)
2. [Inicio de la Aplicación](#inicio-aplicacion)
3. [Componentes y Funcionalidades Principales](#componentes-funcionalidades)
   - [Monto Total](#monto-total)
   - [Número de Personas](#numero-personas)
   - [Lista de Personas y Proporciones](#lista-personas-proporciones)
4. [Lógica de Cálculo de Cuotas](#logica-calculo-cuotas)
5. [Guía Paso a Paso de Uso](#guia-uso)
6. [Preguntas Frecuentes y Consideraciones](#preguntas-frecuentes)

---

<a id="descripcion-general"></a>

## 📄 Descripción General

El **Creador de Recibos** permite repartir una suma total entre un número de participantes (de 2 a 9 personas). A cada persona se le asigna un factor de proporción (*rate*). La aplicación calcula automáticamente la cuota exacta que le corresponde a cada individuo según su peso relativo en relación con el total del grupo.

---

<a id="inicio-aplicacion"></a>

## 🚀 Inicio de la Aplicación

Al cargar por primera vez la aplicación en el navegador:

1. **Cuadro emergente de bienvenida (Prompt):** Aparecerá un mensaje emergente solicitando el monto a repartir.
   > *"Ingrese el monto a particionar (en soles)."*
2. Por defecto, el valor inicial sugerido es **S/. 1000.00**.
3. Ingrese la cifra deseada y haga clic en **Aceptar**.

---

<a id="componentes-funcionalidades"></a>

## ⚙️ Componentes y Funcionalidades Principales

<a id="monto-total"></a>

### 1. Monto Total (S/.)
- **Descripción:** Muestra la suma total a dividir.
- **Estado:** De solo lectura (*readOnly*) en el formulario principal.
- **Inicialización:** Se define mediante la ventana emergente que se muestra al cargar la aplicación.

<a id="numero-personas"></a>

### 2. Número de Personas
- **Descripción:** Control numérico para ajustar la cantidad de participantes en la división.
- **Rango permitido:** Mínimo **2** personas, máximo **9** personas.
- **Comportamiento:** Al cambiar este valor, la lista se regenera automáticamente actualizando los nombres por defecto (`Persona1`, `Persona2`, etc.) y reiniciando sus proporciones iniciales a `1`.

<a id="lista-personas-proporciones"></a>

### 3. Lista de Personas y Proporciones
Para cada integrante de la lista se muestra:
- **Cuota Calculada (S/.):** El monto individual que le corresponde pagar o recibir, redondeado a dos decimales.
- **Identificador:** Nombre asignado por defecto (`Persona1`, `Persona2`, ...).
- **Control de Proporción (prop.):** Campo editable con valor mínimo de `1`. Permite modificar la tasa asignada a esa persona específica.
- **Botones de Incremento / Decremento (`+` / `–`):**
  - **Botón `–`:** Disminuye en 1 la proporción actual (con un límite mínimo de 1).
  - **Botón `+`:** Aumenta en 1 la proporción actual.

---

<a id="logica-calculo-cuotas"></a>

## 🧮 Lógica de Cálculo de Cuotas

El cálculo de lo que paga cada persona se basa en la suma ponderada de todas las proporciones asignadas.

### Fórmula:

$$\text{Cuota Individual} = \frac{\text{Monto Total} \times \text{Proporción Individual}}{\text{Suma de todas las Proporciones}}$$

### Ejemplo Práctico:
- **Monto Total:** S/. 1200.00
- **Número de personas:** 3 personas (`Persona1`, `Persona2`, `Persona3`)
- **Proporciones asignadas:**
  - `Persona1`: 1
  - `Persona2`: 1
  - `Persona3`: 2
- **Suma de proporciones:** $1 + 1 + 2 = 4$

**Resultados calculados:**
- `Persona1`: $\frac{1200 \times 1}{4} = \text{S/. 300.00}$
- `Persona2`: $\frac{1200 \times 1}{4} = \text{S/. 300.00}$
- `Persona3`: $\frac{1200 \times 2}{4} = \text{S/. 600.00}$

---

<a id="guia-uso"></a>

## 📝 Guía Paso a Paso de Uso

1. **Ingresar el Monto:** Al abrir la aplicación, especifique el monto en la ventana emergente.
2. **Seleccionar Participantes:** Ajuste el campo **"N° de Personas"** según la cantidad de integrantes (entre 2 y 9).
3. **Ajustar Proporciones:**
   - Si todos pagan partes iguales, deje las proporciones en `1`.
   - Si alguien debe pagar el doble, use el botón `+` o escriba directamente `2` en el campo `prop.` correspondiente.
4. **Consultar Desglose:** Observe los valores calculados en tiempo real frente a cada nombre.
5. **Verificar el Resumen:** En la parte inferior, confirme el **Monto Total** consignado.

---

<a id="preguntas-frecuentes"></a>

## ❓ Preguntas Frecuentes y Consideraciones

- **¿Puedo establecer una proporción menor a 1 o negativa?**
  No, la aplicación restringe el valor mínimo de la proporción a `1` para garantizar un reparto válido y evitar divisiones por cero o valores negativos.
- **¿Qué ocurre si cambio el número de personas a mitad del proceso?**
  La lista se reiniciará con el número seleccionado y las proporciones volverán a su valor por defecto (`1`).
- **¿Cómo cambio el monto total si me equivoqué en el cuadro emergente?**
  Actualmente, el monto se establece al inicio mediante la ventana emergente (`prompt`). Si requiere cambiarlo, recargue la página en su navegador.
