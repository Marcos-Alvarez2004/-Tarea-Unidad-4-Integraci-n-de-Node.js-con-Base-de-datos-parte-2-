var pool = require("./bd");

async function getNovedades() {
  var query = "select * from novedades";
  var rows = await pool.query(query);
  return rows;
}

// Agregar

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ?";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch {
    console.log(error);
    throw error;
  }
}

// Eliminar

async function deleteNovedadesById(id) {
  var query = "delete from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

// Traiga la novedad por id
async function getNovedadesById(id) {
  var query = "select * from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

// Actualizacion
async function modificarNovedades(obj, id) {
  try {
    var query = "update novedades set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getNovedades,
  insertNovedad,
  deleteNovedadesById,
  getNovedadesById,
  modificarNovedades,
};
