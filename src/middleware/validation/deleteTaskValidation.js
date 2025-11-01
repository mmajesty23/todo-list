import { param, validationResult } from "express-validator";

export const validateDeleteTask = [
  param("id").trim().isUUID().withMessage("ID Not Found"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];
