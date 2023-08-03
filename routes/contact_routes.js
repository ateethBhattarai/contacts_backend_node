const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getIndividualContact,
  updateContact,
  addNewContact,
  deleteContact,
} = require("../controllers/contact_controller");

router.get("/", getAllContacts);

router.get("/:id", getIndividualContact);

router.put("/:id", updateContact);

router.post("/", addNewContact);

router.delete("/:id", deleteContact);

module.exports = router;
