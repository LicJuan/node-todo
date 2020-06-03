const fs = require("fs");

let listado = [];

const saveDB = () => {
	let data = JSON.stringify(listado);
	fs.writeFile("db/data.json", data, (err) => {
		if (err) throw new Error("No se pudo guardar", err);
	});
};

const cargarDB = () => {
	try {
		listado = require("../db/data.json");
	} catch (error) {
		listado = [];
	}
};

const crear = (descripcion) => {
	cargarDB();
	let todo = {
		descripcion,
		completado: false,
	};
	listado.push(todo);
	saveDB();
	return todo;
};

const getLista = () => {
	cargarDB();
	return listado;
};
const actualizar = (descripcion, completado) => {
	cargarDB();
	let index = listado.findIndex((tarea) => tarea.descripcion === descripcion);
	if (index >= 0) {
		listado[index].completado = completado;
		saveDB();
		return true;
	} else {
		return false;
	}
};

const borrar = (descripcion) => {
	cargarDB();
	let newList = listado.filter((tarea) => {
		tarea.descripcion !== descripcion;
	});
	if (listado.length === newList.length) {
		return false;
	} else {
		listado = newList;
		saveDB();
		return true;
	}
};

module.exports = {
	crear,
	getLista,
	actualizar,
	borrar,
};
