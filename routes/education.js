const router = require("express").Router();
const pool = require("../database");

router.get("/", async (req, res) => {
  try {
    const education = await pool.query("SELECT * FROM education", []);
    console.log(education.rows);
    res.json(education.rows);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const educationById = await pool.query(
      "SELECT * FROM education WHERE id=$1",
      [id]
    );
    console.log(educationById.rows[0]);
    res.json(educationById.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
