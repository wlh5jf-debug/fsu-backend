import express from "express";
const router = express.Router();
export default router;
import { createProfessor, getAllProfessors, getProfessorById, updateProfessor, deleteProfessorById } from "#db/queries/professors.js";
import getUserFromToken from "../middleware/getUserFromToken.js";
import requireUser from "../middleware/requireUser.js";

router.get("/", async (req, res) => {
    const professors = await getAllProfessors();
    res.send(professors);
});

router.get("/:id", async (req,res) => {
    const professor = await getProfessorById(req.params.id);

    if (!professor) {
        return res.status(404).json ({ error: "Professor not found" });

    
    }
    res.json(professor);
});

router.post(
  "/",
  getUserFromToken,
  requireUser,
  async (req, res) => {
const { name, bio, email, department_id } = req.body;

    if (!name || !bio || !email || !department_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const professor = await createProfessor(name, bio, email, department_id);

    res.status(201).json(professor);
  }
);

router.put(
    "/:id",
    getUserFromToken,
    requireUser,
    async (req, res) => {
        const { name, bio, email, department_id} = req.body;

        if (!name || !bio || !email || !department_id) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const professor = await updateProfessor(
            req.params.id,
            name,
            bio,
            email,
            department_id
        );
        if (!professor) {
            return res.status(404).json({ error: "Professor not found" });
        }

        res.json(professor)
    }
);

router.delete(
    "/:id",
    getUserFromToken,
    requireUser,
    async (req, res) => {
        const professor = await deleteProfessorById(req.params.id);

        if (!professor) {
            return res.status(404).json({ error: "Professor not found" });

        }

        res.json(professor)
    }
);