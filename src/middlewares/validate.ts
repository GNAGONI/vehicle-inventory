import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';
import { RESPONSE_STATUS } from '../types';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req) as Result<ValidationError>;
  if (!errors.isEmpty()) {
    return res.status(RESPONSE_STATUS.BAD_REQUEST).json(errors);
  } else {
    next();
  }
};

export default validate;
