const argv = require("./config/yargs").argv;
const todo = require("./todo/to-do");
let comando = argv._[0];

switch (comando) {
	case "crear":
		let tarea = todo.crear(argv.descripcion);
		console.log(tarea);
		break;
	case "listar":
		let listado = todo.getLista();
		console.log(listado);
		break;
	case "actualizar":
		let actualizar = todo.actualizar(argv.descripcion, argv.c);
		console.log(actualizar);
		break;
	case "borrar":
		let borrado = todo.borrar(argv.descripcion);
		console.log(borrado);
		break;
}
