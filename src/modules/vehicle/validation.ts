import { param, body, query } from 'express-validator';

const checkVehicleId = param('id').isUUID().withMessage('Invalid vehicle id');
const checkVehicleName = body('vehicleName')
  .isString()
  .withMessage('Vehicle name must be a string')
  .isLength({ min: 1, max: 100 })
  .withMessage('Vehicle name must be not less than 1 symbol and not more than 100 symbols');
const checkOffset = query('offset').isNumeric().withMessage('Invalid offset');
const checkLimit = query('limit').isNumeric().withMessage('Invalid limit');

export default { checkVehicleId, checkVehicleName, checkLimit, checkOffset };
