const { Lead } = require("../models");

const getAll = async (req, res) => {
  try {
    const allLeads = await Lead.findAll()
    return res.status(200).send(allLeads)
  } catch (err) {
    console.log(err)
  }
}

const getOne = async (req, res) => {
  const { id } = req.params;
  const lead = await Lead.findAll({
    where: {
      id
    }
  })
  return res.status(200).send(lead)
}

const createLead = async (req, res) => {
    const {
      firstName,
      lastName,
      telephone,
      email,
      status
    } = req.body;
    await Lead.create({
        firstName,
        lastName,
        telephone,
        email,
        status
    });
    return res.status(201).send(`${email}, lead added!`);
};

// const bulkCreateLeads = async (req, res) => {
//   await Lead.bulkCreate(req.body)
//   return res.status(201).send(`Created ${body.length} new Leads!`)
// }

const updateLead = async (req, res) => {
  const { id } = req.params;
  const {
        firstName,
        lastName,
        telephone,
        email,
        status
    } = req.body;
  await Lead.update(
    {
      firstName,
      lastName,
      telephone,
      email,
      status
    },
    {
      where: { id },
    }
  );
  return res.status(204).send(`${email}, lead updated!`);
};

const deleteOne = async (req, res) => {
  console.log("before")
  // PROVJERITI ZASTO NE PRINTA SEND!
  const { id } = req.params;
  await Lead.destroy({
    where: {
      id,
    },
  });
  console.log("after")
  return res.status(204).send(`Lead with id ${id} is deleted.`);
};

module.exports = {
    createLead,
    updateLead,
    getAll,
    getOne,
    deleteOne,
    // bulkCreateLeads
}