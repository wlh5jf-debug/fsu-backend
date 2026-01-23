import db from "#db/client.js";

export async function createProfessor(name, bio, email, departmentId) {
  const sql = `
    INSERT INTO professors
    (name, bio, email, department_id)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *`;

  const {
    rows: [professor],
  } = await db.query(sql, [name, bio, email, departmentId]);
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

export async function updateProfessor(id, name, bio, email, departmentId) {
  const sql = `UPDATE professors SET name = $2, bio = $3, email = $4, department_id = $5 WHERE id = $1 RETURNING *`;

  const {
    rows: [professor],
  } = await db.query(sql, [id, name, bio, email, departmentId]);
  return professor;
}

export async function deleteProfessorById(id) {
  const sql = `DELETE FROM professors WHERE id = $1 RETURNING *`;
  const {
    rows: [professor],
  } = await db.query(sql, [id]);
  return professor;
}

export async function getProfessorsByDepartment(departmentId) {
  const sql = `SELECT * FROM professors WHERE department_id = $1`;

  const { rows: professors } = await db.query(sql, [departmentId]);
  return professors;
}
