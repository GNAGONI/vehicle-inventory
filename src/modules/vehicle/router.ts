import express from 'express';
import { validate } from '../../middlewares';
import controller from './controller';
import validation from './validation';

const router = express.Router();

router.get('/', validation.checkLimit, validation.checkOffset, validate, controller.getVehicles);
router.get('/:id', validation.checkVehicleId, validate, controller.getVehicleById);
router.post('/', validation.checkVehicleName, validate, controller.createVehicle);
router.patch('/:id', validation.checkVehicleId, validation.checkVehicleName, validate, controller.updateVehicle);
router.delete('/:id', validation.checkVehicleId, validate, controller.deleteVehicle);

export default router;
