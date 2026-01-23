import express from "express";
const router = express.Router();
export default router;
import {
    createDepartment,
    getDepartments,
    getDepartmentById,
    deleteDepartment,
    updateDepartment
} from "#db/queries/departments";

import { getProfessorByDepartmentId } from "#db/queries/professors";

import requireUser from "#middleware/requireUser";
import requireBody from "#middleware/requireBody";
import getUserFromToken from "#middleware/getUserFromToken";

router.get("/", async (req, res) => {
    const departments = await getDepartments();
    res.json(departments);
});

router.get("/:id", async (req, res) => {
    const department = await getDepartmentById(req.params.id);

    if (!department) {
        return res.status(404).json({ error: "Department not found"});
    }

    const professors = await getProfessorByDepartmentId(req.params.id)

    res.json({
        ...department,
        professors
    });
});

router.post(
    "/",
    getUserFromToken,
    requireUser,
    requireBody(["name", "description", "phone"]),
    async (req, res) => {
        const { name, description, phone } = req.body;

    const department = await createDepartment(name,
    description,
    phone
    );
    res.status(201).json(department)
    }
);

router.put(
    "/:id",
    getUserFromToken,
    requireUser,
    requireBody(["name", "description", "phone"]),
    async (req, res) => {
        const { name, description, phone } = req.body;
        const department = await updateDepartment(
            req.params.id,
            name,
            description,
            phone
        );

        if (!department) {
            return res.status(404).json({ error: "Department not found"});
        }

        res.json(department);
    }
);


router.delete(
    "/:id",
    getUserFromToken,
    requireUser,
    async (req, res) => {
        const department = await deleteDepartment(req.params.id);

        if (!department) {
            return res.status(404).json ({ error: "Department not found"});
        }

        res.json(department)
    }
)
