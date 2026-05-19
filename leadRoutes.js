const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");

/* CREATE LEAD */

router.post("/", async (req, res) => {

  try {

    const lead =
      await Lead.create(req.body);

    res.json(lead);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


/* GET ALL LEADS */

router.get("/", async (req, res) => {

  try {

    const leads =
      await Lead.find()
      .sort({ createdAt: -1 });

    res.json(leads);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


/* UPDATE LEAD */

router.put("/:id", async (req, res) => {

  try {

    const updatedLead =
      await Lead.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedLead);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


/* DELETE LEAD */

router.delete("/:id", async (req, res) => {

  try {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Lead deleted"
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;