import { param, body } from 'express-validator';

const checkVehicleId = param('id').isUUID().withMessage('Invalid vehicle id');
const checkVehicleName = body('vehicleName')
  .isString()
  .withMessage('Vehicle name must be a string')
  .isLength({ min: 1, max: 100 })
  .withMessage('Vehicle name must be not less than 1 symbol and not more than 100 symbols');

export default { checkVehicleId, checkVehicleName };
