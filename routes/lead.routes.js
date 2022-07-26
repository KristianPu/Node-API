const express = require("express");
const { leadController } = require("../controllers/index");
const auth = require("../middlewares/authorization");
const validate = require("../middlewares/reqValidator");
const leadSchema = require("../validation/lead.schema");
const router = express.Router();

router.route("/getAll").get(auth, leadController.getAll);

router.route("/getOne/:id").get(auth, leadController.getOne);

router.route("/create").post(auth, validate(leadSchema), leadController.createLead);

// router.route("/bulkCreate").post(auth, validate(leadSchema), leadController.createLead);

router.route("/update/:id").put(auth, validate(leadSchema), leadController.updateLead);

router.route("/deleteOne/:id").delete(auth, leadController.deleteOne);

module.exports = router;