const pool = require("../database");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM food", []);

    console.log(response.rows);
    res.json(response.rows);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", async (req, res) => {
  const food = req.body;

  try {
    const response = await pool.query(
      "INSERT INTO food(menu) VALUES($1) RETURNING *",
      [food.menu]
    );
    console.log(response.rows[0]);
    res.json(response.rows[0]);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;