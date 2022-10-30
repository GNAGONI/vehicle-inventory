import { Request, Response } from 'express';
import { Vehicle } from './model';
import { RESPONSE_STATUS } from '../../types';

const getVehicleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await Vehicle.findOne({
    where: { id },
  });
  if (!vehicle) return res.status(RESPONSE_STATUS.NOT_FOUND).end();
  res.json(vehicle);
};

const getVehicles = async (req: Request, res: Response) => {
  const contracts = await Vehicle.findAll();
  res.json(contracts);
};

export default { getVehicleById, getVehicles };
