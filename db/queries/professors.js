import db from "#db/client";

export async function createProfessor(name, bio, email) {
  const sql = `
    INSERT INTO professors
    (name, bio, email)
    VALUES
    ($1, $2, $3)
    RETURNING *`;

  const {
    rows: [professor],
  } = await db.query(sql, [name, bio, email]);
  return professor;
}

export async function getAllProfessors() {
  const sql = `SELECT * FROM professors`;
  const { rows: professors } = await db.query(sql);
  return professors;
}

export async function getProfessorById(id) {
  const sql = `SELECT * FROM professors WHERE id = $1`;
  const {
    rows: [professor],
  } = await db.query(sql, [id]);
  return professor;
}

export async function updateProfessor(id, name, bio, email) {
  const sql = `UPDATE professors SET name = $2, bio = $3, email = $4 WHERE id = $1 RETURNING *`;

  const {
    rows: [professor],
  } = await db.query(sql, [id, name, bio, email]);
  return professor;
}

export async function deleteProfessorById(id) {
  const sql = `DELETE FROM professors WHERE id = $1 RETURNING *`;
  const {
    rows: [professor],
  } = await db.query(sql, [id]);
  return professor;
}
