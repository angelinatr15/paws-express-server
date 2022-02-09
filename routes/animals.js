const router = require("express").Router();
const pool = require("../database");

router.get("/", async (req, res) => {
  try {
    const animals = await pool.query("SELECT * FROM animals");
    console.log(animals.rows);
    res.json(animals.rows);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const response = await pool.query(
      "DELETE FROM animals WHERE id=$1 RETURNING *",
      [id]
    );

    console.log(response.rows[0]);
    res.json(response.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  const animal = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO animals(name, species, breed, age, gender, size, color, location, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        animal.name,
        animal.species,
        animal.breed,
        animal.age,
        animal.gender,
        animal.size,
        animal.color,
        animal.location,
        animal.image,
      ]
    );
  } catch (e) {
    console.log(e.message);
  }
});
