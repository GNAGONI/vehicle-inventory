import { param } from 'express-validator';

const checkVehicleId = param('id').isUUID().withMessage('Invalid vehicle id');

export { checkVehicleId };
