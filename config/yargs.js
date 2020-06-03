const argv = require("yargs")
	.command("crear", "Crear un todo", {
		descripcion: {
			demand: true,
			alias: "d",
			desc: "Descripcion",
		},
	})
	.command("actualizar", "Atualizar", {
		descripcion: {
			demand: true,
			alias: "d",
			desc: "Actualizar todo",
		},
		completado: {
			default: true,
			alias: "c",
			des: "Marca como completado o pendiente",
		},
	})
	.command("borrar", "Borrar un todo", {
		descripcion: {
			demand: true,
			alias: "d",
			desc: "Descripcion",
		},
	})
	.help().argv;

module.exports = {
	argv,
};
