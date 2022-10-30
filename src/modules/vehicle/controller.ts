import { Request, Response } from 'express';
import service from './service';
import { VehicleData } from './types';
import { RESPONSE_STATUS } from '../../types';

const getVehicleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await service.findVehicleById(id);
  if (!vehicle) return res.status(RESPONSE_STATUS.NOT_FOUND).end();
  res.json(vehicle);
};

const getVehicles = async (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  const vehicles = await service.findVehicles(Number(limit), Number(offset));
  if (!vehicles) return res.status(RESPONSE_STATUS.NOT_FOUND).end();
  res.json(vehicles);
};

const createVehicle = async (req: Request, res: Response) => {
  const data: VehicleData = req.body;
  const vehicle = await service.createVehicle(data);
  if (!vehicle) return res.status(RESPONSE_STATUS.NOT_FOUND).end();
  res.json(vehicle);
};

const updateVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: Partial<VehicleData> = req.body;
  const vehicle = await service.updateVehicle(id, data);
  if (!vehicle) return res.status(RESPONSE_STATUS.NOT_FOUND).end();
  res.json(vehicle);
};

export default { getVehicleById, getVehicles, createVehicle, updateVehicle };
