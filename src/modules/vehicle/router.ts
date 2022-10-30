import express from 'express';
import { validate } from '../../middlewares';
import vehicleController from './controller';
import { checkVehicleId } from './validation';

const vehicleRouter = express.Router();

vehicleRouter.get('/:id', checkVehicleId, validate, vehicleController.getVehicleById);
vehicleRouter.get('/', vehicleController.getVehicles);

export default vehicleRouter;
