import { body, validationResult } from "express-validator";

export const validateCreateTask = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is Required")
    .bail()
    .isLength({ max: 255 })
    .withMessage("Title cannot exceed 255 chars"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }
    next();
  },
];
