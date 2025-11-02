import { param, body, validationResult } from "express-validator";

export const validateUpdateTask = [
  param("id").trim().isUUID().withMessage("task not found").bail(),
  body().custom((_value, meta) => {
    const req = meta.req;
    if (!Object.keys(req.body).length) {
      throw new Error("At leas one field must be provided for update");
    }
    return true;
  }),

  (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];
