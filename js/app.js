// Limites de horas usados para clasificar y filtrar juegos.
const HORAS_PARA_JUEGO_CORTO = 20;
const HORAS_MAXIMAS_PARA_SEGUIR = 40;
const HORAS_MAXIMAS_ALTERNATIVAS = 20;
const HORAS_MINIMAS = 0;
// Valores iniciales y especiales para las busquedas.
const ID_INICIAL = 0;
const PRIMER_INDICE = 0;
const ID_NO_ENCONTRADO = -1;

// SESION 7, RETO 1: datos de los videojuegos del proyecto.
const juegos = [
  {
    id: 1,
    titulo: "Elden Ring",
    genero: "Aventura",
    plataforma: "PC",
    horasJugadas: 18,
    valoracion: 8,
    fechaInicio: "2026-09-12"
  },
  {
    id: 2,
    titulo: "Farmer Simulator",
    genero: "Simulacion",
    plataforma: "Nintendo Switch",
    horasJugadas: 7,
    valoracion: 7,
    fechaInicio: "2026-10-02"
  },
  {
    id: 3,
    titulo: "Baldurs Gate",
    genero: "Rol",
    plataforma: "PC",
    horasJugadas: 54,
    valoracion: 9,
    fechaInicio: "2026-08-21"
  },
  {
    id: 4,
    titulo: "Clash of Clans",
    genero: "Estrategia",
    plataforma: "Movil",
    horasJugadas: 12,
    valoracion: 6,
    fechaInicio: "2026-09-30"
  },
  {
    id: 5,
    titulo: "Sonic",
    genero: "Plataformas",
    plataforma: "PlayStation 5",
    horasJugadas: 9,
    valoracion: 8,
    fechaInicio: "2026-10-05"
  },
  {
    id: 6,
    titulo: "Gran Turismo",
    genero: "Conduccion",
    plataforma: "Xbox",
    horasJugadas: 26,
    valoracion: 7,
    fechaInicio: "2026-09-03"
  },
  {
    id: 7,
    titulo: "Limbo",
    genero: "Aventura",
    plataforma: "PC",
    horasJugadas: 15,
    valoracion: 9,
    fechaInicio: "2026-10-10"
  },
  {
    id: 8,
    titulo: "Animal Crosing",
    genero: "Simulacion",
    plataforma: "Nintendo Switch",
    horasJugadas: 32,
    valoracion: 8,
    fechaInicio: "2026-07-18"
  }
];

// SESION 7, RETOS 1 Y 2: listados; este tambien es listar(lista) de S8, RETO 2.
function listar(lista) {
  // Recorre los juegos y muestra sus datos con una etiqueta de duracion.
  for (const juego of lista) {
    // Considera corto un juego que no supera el limite establecido.
    const etiqueta = juego.horasJugadas <= HORAS_PARA_JUEGO_CORTO
      ? "Corto"
      : "Largo";

    console.log(
      `ID: ${juego.id} | ${juego.titulo} | ${juego.genero} | ` +
      `${juego.plataforma} | ${juego.horasJugadas} horas | ` +
      `Empece: ${juego.fechaInicio} | Nota: ${juego.valoracion}/10 | ${etiqueta}`
    );
  }
}

// SESION 7, RETO 2: filtrar con una condicion compuesta y devolver el numero encontrado.
function filtrarJuegos(lista, limiteHoras) {
  // Rechaza limites que no sean numeros validos o que sean negativos.
  if (!Number.isFinite(limiteHoras) || limiteHoras < HORAS_MINIMAS) {
    throw new RangeError("El limite debe ser un numero igual o mayor que cero.");
  }

  // Selecciona juegos dentro del limite y de los generos indicados.
  const juegosFiltrados = lista.filter(
    (juego) =>
      juego.horasJugadas <= limiteHoras &&
      (juego.genero === "Aventura" || juego.genero === "Simulacion")
  );

  // Muestra los resultados y devuelve cuantos juegos coinciden.
  console.table(juegosFiltrados);
  return juegosFiltrados.length;
}

// SESION 7, RETO 2: contar por genero usando switch.
function contarPorGenero(lista, genero) {
  // Compara el genero en minusculas para aceptar distintas mayusculas.
  switch (genero.toLowerCase()) {
    case "aventura":
      return lista.filter((juego) => juego.genero === "Aventura").length;
    case "simulacion":
      return lista.filter((juego) => juego.genero === "Simulacion").length;
    case "rol":
      return lista.filter((juego) => juego.genero === "Rol").length;
    case "estrategia":
      return lista.filter((juego) => juego.genero === "Estrategia").length;
    case "plataformas":
      return lista.filter((juego) => juego.genero === "Plataformas").length;
    case "conduccion":
      return lista.filter((juego) => juego.genero === "Conduccion").length;
    default:
      console.warn(`No conozco el genero: ${genero}`);
      return 0;
  }
}

// SESION 8, RETO 1: lista de la compra con arrays, Set y Map.
function ejecutarRetoListaCompra() {
  // La lista incluye productos repetidos para probar las operaciones.
  const compra = ["pan", "leche", "huevos", "pan", "tomates", "leche", "pan"];

  console.log("\nSESION 8, RETO 1: lista de la compra");
  // Añade un producto al final y consulta el numero de elementos.
  compra.push("aceite");
  console.log("Lista tras añadir aceite:", compra);
  console.log("Numero de productos:", compra.length);

  // Comprueba si un producto esta en la lista.
  const hayHuevos = compra.includes("huevos");
  console.log("¿Hay huevos?:", hayHuevos);

  // Busca la posicion de tomates; devuelve -1 si no aparece.
  const posicionTomates = compra.indexOf("tomates");
  console.log("Posicion de tomates:", posicionTomates);

  // Busca huevos y los elimina solo si existen.
  const indiceHuevos = compra.indexOf("huevos");
  if (indiceHuevos !== ID_NO_ENCONTRADO) {
    compra.splice(indiceHuevos, 1);
  }
  console.log("Lista tras quitar huevos:", compra);

  // Un Set conserva una sola copia de cada producto.
  const productosDistintos = new Set(compra);
  console.log("Productos distintos:", productosDistintos);
  console.log("Cantidad de productos distintos:", productosDistintos.size);
  console.log("¿Hay leche?:", productosDistintos.has("leche"));

  // Un Map guarda la cantidad de veces que aparece cada producto.
  const unidadesPorProducto = new Map();
  for (const producto of compra) {
    // Suma uno a la cantidad actual, o empieza desde cero.
    const cantidadActual = unidadesPorProducto.get(producto) ?? 0;
    unidadesPorProducto.set(producto, cantidadActual + 1);
  }

  // Muestra cada producto junto con su cantidad.
  console.log("Unidades por producto:");
  for (const [producto, cantidad] of unidadesPorProducto) {
    console.log(`${producto}: ${cantidad}`);
  }

  // Elimina todos los panes y cuenta cuantas veces se repite la operacion.
  let vueltas = 0;
  while (compra.indexOf("pan") !== ID_NO_ENCONTRADO) {
    compra.splice(compra.indexOf("pan"), 1);
    vueltas++;
  }

  console.log("Vueltas para quitar todos los panes:", vueltas);
  console.log("Lista final:", compra);
}

// SESION 8, RETO 2: buscar por titulo o genero sin distinguir mayusculas.
function buscarPorTexto(lista, texto) {
  // Normaliza el texto para que la busqueda ignore mayusculas.
  const textoBuscado = texto.toLowerCase();

  // Devuelve los juegos cuyo titulo o genero contiene el texto.
  return lista.filter((juego) =>
    `${juego.titulo} ${juego.genero}`.toLowerCase().includes(textoBuscado)
  );
}

function ordenar(lista, criterio) {
  const copia = [...lista];

  if (criterio === "titulo") {
    copia.sort((juegoA, juegoB) =>
      juegoA.titulo.localeCompare(juegoB.titulo)
    );
  } else if (criterio === "horasJugadas") {
    copia.sort((juegoA, juegoB) =>
      juegoA.horasJugadas - juegoB.horasJugadas
    );
  } else if (criterio !== "ninguno") {
    throw new RangeError("El criterio de ordenación no es válido.");
  }

  return copia;
}

// SESION 8, RETO 2: asignar el siguiente id, añadir el juego y devolver el id.
function anadir(lista, juego) {
  // Encuentra el id mayor y calcula el siguiente.
  const idSiguiente = lista.reduce(
    (mayorId, juegoActual) => Math.max(mayorId, juegoActual.id),
    ID_INICIAL
  ) + 1;

  // Asigna el id nuevo, agrega el juego y devuelve su identificador.
  juego.id = idSiguiente;
  lista.push(juego);
  return idSiguiente;
}

// SESION 8, RETO 2: buscar con un bucle, eliminar con splice y devolver true o false.
function eliminarPorId(lista, id) {
  // Busca la posicion del juego que tenga el id indicado.
  let indiceEncontrado = ID_NO_ENCONTRADO;

  for (let indice = PRIMER_INDICE; indice < lista.length; indice++) {
    if (lista[indice].id === id) {
      indiceEncontrado = indice;
      break;
    }
  }

  // Si no existe, indica que no se elimino ningun juego.
  if (indiceEncontrado === ID_NO_ENCONTRADO) {
    return false;
  }

  // Quita el juego encontrado y confirma que se elimino.
  lista.splice(indiceEncontrado, 1);
  return true;
}

// SESION 8, RETO 3: calcular el total, la media y el juego con mas horas.
function estadisticas(lista, campo = "horasJugadas") {
  // No se pueden calcular estadisticas si la lista esta vacia o no es una lista.
  if (!Array.isArray(lista) || lista.length === 0) {
    console.warn("La lista esta vacia. No hay estadisticas que calcular.");
    return null;
  }

  // Obtiene los valores del campo solicitado para todos los juegos.
  const valores = lista.map((juego) => juego[campo]);

  // Comprueba que todos los valores sean numeros validos.
  if (valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
    console.warn("Ese campo no contiene numeros validos.");
    return null;
  }

  // Recorre los valores para calcular la suma y localizar el mayor.
  let total = 0;
  let maximo = valores[PRIMER_INDICE];
  let indiceMaximo = PRIMER_INDICE;

  for (let indice = PRIMER_INDICE; indice < valores.length; indice++) {
    total += valores[indice];

    if (valores[indice] > maximo) {
      maximo = valores[indice];
      indiceMaximo = indice;
    }
  }

  // Calcula la media y recupera el juego con el valor maximo.
  const media = total / valores.length;
  const juegoConValorMaximo = lista[indiceMaximo];

  // Muestra y devuelve los resultados del calculo.
  console.log(
    `Total: ${total} horas | Media: ${media.toFixed(1)} horas | ` +
    `Mas alto en ${campo}: ${juegoConValorMaximo.titulo} (${maximo})`
  );

  return { total, media, maximo, juegoConValorMaximo };
}

function crearTarjeta(juego) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = juego.titulo;

  const datos = document.createElement("p");
  datos.textContent =
    `${juego.genero} · ${juego.plataforma} · ${juego.horasJugadas} horas`;

  tarjeta.append(titulo, datos);
  return tarjeta;
}

function pintar(lista) {
  const listado = document.querySelector("#listado");
  listado.replaceChildren();

  for (const juego of lista) {
    listado.append(crearTarjeta(juego));
  }
}

function pintarEstadisticas(lista) {
  const elementoEstadisticas = document.querySelector("#estadisticas");
  const resultado = estadisticas(lista);

  if (resultado === null) {
    elementoEstadisticas.textContent = "No hay estadísticas disponibles.";
    return;
  }

  elementoEstadisticas.textContent =
    `Horas totales: ${resultado.total} · ` +
    `Media: ${resultado.media.toFixed(1)} · ` +
    `Más horas: ${resultado.juegoConValorMaximo.titulo} (${resultado.maximo})`;
}

// En el navegador, deja disponibles los datos y funciones para otros scripts.
if (typeof window !== "undefined") {
  Object.assign(window, {
    ejecutarRetoListaCompra,
    juegos,
    listar,
    filtrarJuegos,
    contarPorGenero,
    buscarPorTexto,
    ordenar,
    anadir,
    eliminarPorId,
    estadisticas,
    crearTarjeta,
    pintar,
    pintarEstadisticas
  });
}

// SESION 7, RETOS 1 Y 2: ejemplos de los listados y el filtro con dos limites.
console.log("Mi lista de videojuegos:");
console.table(juegos);
listar(juegos);

console.log("\nJuegos pendientes o en curso de hasta 40 horas:");
console.log("Encontrados:", filtrarJuegos(juegos, HORAS_MAXIMAS_PARA_SEGUIR));

console.log("\nJuegos pendientes o en curso de hasta 20 horas:");
console.log("Encontrados:", filtrarJuegos(juegos, HORAS_MAXIMAS_ALTERNATIVAS));

// SESION 8, RETO 1: ejecutar el ejercicio individual de la lista de la compra.
ejecutarRetoListaCompra();

// SESION 8, RETO 2: ejemplo de busqueda y recuento por genero.
console.log("\nBusqueda de 'ISLA':");
console.table(buscarPorTexto(juegos, "ISLA"));

console.log("\nJuegos de aventura:", contarPorGenero(juegos, "aventura"));

// SESION 8, RETO 3: ejemplo de estadisticas de horas jugadas.
console.log("\nEstadisticas de horas jugadas:");
estadisticas(juegos);
console.log("\nEstadisticas de valoracion:");
estadisticas(juegos, "valoracion");

if (typeof document !== "undefined") {
  const buscador = document.querySelector("#buscador");

  buscador.addEventListener("input", () => {
    const juegosEncontrados = buscarPorTexto(juegos, buscador.value);
    pintar(juegosEncontrados);
  });

  pintar(juegos);
  pintarEstadisticas(juegos);
}
