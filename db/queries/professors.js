import db from "#db/client";

export async function createProfessor(name, bio, email) {
    const sql = `
    INSERT INTO professors
    (name, bio, email)
    VALUES
    ($1, $2, $3)
    RETURNING *`;
}