const Constants = require("../utils/constants");

const validate = (schema) =>
  (req, res, next) => {
    const body = req.body;

    if (Array.isArray(body)) {
      body.forEach(lead => {
        const value = schema.validate(lead);
        console.log(` if ${value}`)
      });
    } else {
      const value = schema.validate(body);
      console.log(` else ${value}`)
    }

    // if (value.error) {
    //     res.json({
    //       success: 0,
    //       message: value.error.details[0].message,
    //   });
    // } else {
    //   next();
    // }
    next()
  };

module.exports = validate