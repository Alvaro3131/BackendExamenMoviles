import { pool } from "../database";
export const getProductos = async (req, res) => {
  try {
    pool.query(
      "SELECT p.idproductos, p.nombre, p.marca, p.stock, p.precio, p.idcategoria,c.nombre categoria  FROM productos p join categorias c on p.idcategoria=c.idcategorias;",
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar producto");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const searchEstudiante = async (req, res) => {
  try {
    const nombre = String(req.params.nombre);
    pool.query(
      "SELECT p.idproductos, p.nombre, p.marca, p.stock, p.precio, p.idcategoria,c.nombre categoria  FROM productos p join categorias c on p.idcategoria=c.idcategorias where p.nombre=?;",
      [nombre],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const getProducto = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      "SELECT p.idproductos, p.nombre, p.marca, p.stock, p.precio, p.idcategoria,c.nombre categoria  FROM productos p join categorias c on p.idcategoria=c.idcategorias where p.idproductos=?",
      [id],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const createEstudiante = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const stock = parseInt(req.body.stock);
    const precio = parseFloat(req.body.precio);
    const idcategoria = parseInt(req.body.idcategoria);
    pool.query(
      "INSERT INTO productos(nombre, marca, stock, precio, estado, idcategoria) VALUES(?, ?, ?, ?, 1, ?); ",
      [nombre, marca, stock, precio, idcategoria],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const updateEstudiante = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const nombre = req.body.nombre;
    const marca = req.body.marca;
    const stock = parseInt(req.body.stock);
    const precio = parseFloat(req.body.precio);
    const idcategoria = parseInt(req.body.idcategoria);
    console.log(id, nombre, marca, stock, precio, idcategoria);
    pool.query(
      "UPDATE productos SET nombre=?, marca=?, stock=?, precio=?,  idcategoria=? WHERE idproductos=?;",
      [nombre, marca, stock, precio, idcategoria, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const deleteEstudiante = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    pool.query(
      "DELETE FROM productos WHERE idproductos=?; ",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
