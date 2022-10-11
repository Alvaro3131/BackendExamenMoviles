import { pool } from "../database";
export const getCategorias = async (req, res) => {
  try {
    pool.query("SELECT * FROM categorias;", function (err, result) {
      console.log(result);
      try {
        return res.status(200).json(result);
      } catch (error) {
        return res.status(500).json("Error al listar estudiante");
      }
    });
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
