import db from "#db/client";
import { createUser } from "./queries/users.js";
import { createDepartment } from "./queries/departments.js";
import { createProfessor } from "./queries/professors.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  let user1 = await createUser("user1", "pass1");
  let user2 = await createUser("user2", "pass2");

  await createDepartment(
    "Department of Arcane Botany & Mischievous Plants",
    "A lively research division dedicated to studying magical flora, from shy glowmoss to aggressively affectionate vines.",
    "4251115555"
  );

  await createDepartment(
    "Department of Charms, Hexes, and Everyday Enchantments",
    "Focused on practical spellcraft for daily life, teaching everything from harmless household charms to defensive hexes.",
    "4252224444"
  );

  await createDepartment(
    "Department of Mythical Creature Relations",
    "A diplomatic and educational hub for understanding dragons, griffins, kelpies, and other magical beings.",
    "4253337777"
  );

  await createDepartment(
    "Department of Haunted Artifacts & Mildly Cursed Objects",
    "Specializes in identifying, cataloging, and safely storing objects with questionable magical histories.",
    "4254441313"
  );

  await createDepartment(
    "Department of Magical Bureaucracy & Lost Paperwork",
    "Dedicated to the study of magical administration, enchanted filing systems, and the mysterious phenomenon of disappearing forms.",
    "4255559090"
  );

  await createProfessor(
    "Professor Liora Fernwhistle",
    "Specialist in temperamental vines and bioluminescent mosses. Known for her calm voice that even calms carnivorous plants.",
    "lfernwhistle@academy.edu",
    1
  );

  await createProfessor(
    "Professor Bram Thornwick",
    "Expert in defensive herbology and the ethical training of bitehappy shrubs.",
    "bthornwick@academy.edu",
    1
  );

  await createProfessor(
    "Professor Maribel Rootspinner",
    "Studies ancient plantbased spellcraft and the folklore of wandering trees.",
    "mrootspinner@academy.edu",
    1
  );

  await createProfessor(
    "Professor Cedric Dewdrop",
    "Focuses on potiongrade flora and the safe harvesting of explosive pollen.",
    "cdewdrop@academy.edu",
    1
  );

  await createProfessor(
    "Professor Elowen Sparkwright",
    "Renowned for her elegant charmwork and her ability to enchant nearly anything, including the occasional teacup.",
    "esparkwright@academy.edu",
    2
  );

  await createProfessor(
    "Professor Tobias Flickerquill",
    "Teaches practical hexes and counter‑hexes with a flair for dramatic demonstrations.",
    "tflickerquill@academy.edu",
    2
  );

  await createProfessor(
    "Professor Juniper Glimmershade",
    "Specializes in household enchantments and subtle spellcraft for everyday convenience.",
    "jglimmershade@academy.edu",
    2
  );

  await createProfessor(
    "Professor Rowan Quickbeam",
    "Known for rapidfire charmcasting and his signature spell, the Quickbeam Sparkburst.",
    "rquickbeam@academy.edu",
    2
  );

  await createProfessor(
    "Professor Thalia Stormmane",
    "Dragon behaviorist with a gentle approach to firebreathing species.",
    "tstormmane@academy.edu",
    3
  );

  await createProfessor(
    "Professor Garrick Underhoof",
    "Expert in centaur diplomacy and interspecies communication.",
    "gunderhoof@academy.edu",
    3
  );

  await createProfessor(
    "Professor Selene Riverstride",
    "Studies aquatic magical beings and the etiquette of underwater negotiations.",
    "sriverstride@academy.edu",
    3
  );

  await createProfessor(
    "Professor Orion Flintfeather",
    "Specializes in griffin psychology and aerial creature training.",
    "oflintfeather@academy.edu",
    3
  );

  await createProfessor(
    "Professor Mortimer Candlewick",
    "Archivist of cursed heirlooms and expert in safely disarming whispering relics.",
    "mcandlewick@academy.edu",
    4
  );

  await createProfessor(
    "Professor Vesper Hollowthorn",
    "Studies spectral resonance and the emotional imprinting of haunted objects.",
    "vhollowthorn@academy.edu",
    4
  );

  await createProfessor(
    "Professor Agatha Moonspindle",
    "Specializes in cursed jewelry and the history of illfated enchantments.",
    "amoonspindle@academy.edu",
    4
  );

  await createProfessor(
    "Professor Crispin Gloomwell",
    "Known for his dry humor and unmatched ability to negotiate with temperamental artifacts.",
    "cgloomwell@academy.edu",
    4
  );

  await createProfessor(
    "Professor Penelope Quilldraft",
    "Master of enchanted filing systems and the prevention of spontaneous document disappearance.",
    "pquilldraft@academy.edu",
    5
  );

  await createProfessor(
    "Professor Barnaby Redtape",
    "Teaches administrative spellcraft and the art of navigating magical red tape.",
    "bredtape@academy.edu",
    5
  );

  await createProfessor(
    "Professor Hestia Ledgerbloom",
    "Specialist in enchanted ledgers, selfsorting forms, and bureaucratic divination.",
    "hledgerbloom@academy.edu",
    5
  );

  await createProfessor(
    "Professor Quentin Stampwhistle",
    "Expert in magical permits, arcane regulations, and the mysterious phenomenon of vanishing signatures.",
    "qstampwhistle@academy.edu",
    5
  );

  console.log("Database has been successfully seeded");
}
