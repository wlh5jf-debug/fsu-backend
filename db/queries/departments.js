import db from "#db/client";

export async function createDepartment(name, description, phone) {
  const sql = `
    INSERT INTO departments
    (name, description, phone)
    VALUES
    ($1, $2, $3)
    RETURNING *`;
  const {
    rows: [department],
  } = await db.query(sql, [name, description, phone]);
  return department;
}

export async function getDepartments() {
  const sql = `
    SELECT *
    FROM departments`;
  const { rows: departments } = await db.query(sql);
  return departments;
}

export async function getDepartmentById(id) {
  const sql = `
    SELECT *
    FROM departments
    WHERE id = $1`;

  const {
    rows: [department],
  } = await db.query(sql, [id]);
  return department;
}

export async function deleteDepartment(id) {
  const sql = `DELETE FROM departments WHERE id = $1`;

  const { rows: department } = await db.query(sql, [id]);
  return department;
}

export async function updateDepartment(id, name, description, phone) {
  const sql = `UPDATE departments SET name = $2, description = $3, phone = $4 WHERE id = $1 RETURNING *`;

  const {
    rows: [department],
  } = await db.query(sql, [id, name, description, phone]);
  return department;
}
