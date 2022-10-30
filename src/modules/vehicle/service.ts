import { Vehicle } from './model';
import { VehicleData } from './types';

const findVehicleById = async (vehicleId: string): Promise<Vehicle> => {
  const vehicle = await Vehicle.findOne({
    where: { id: vehicleId },
  });
  return vehicle;
};

const findVehicles = async (): Promise<Vehicle[]> => {
  const vehicles = await Vehicle.findAll();
  return vehicles;
};

const createVehicle = async (data: VehicleData): Promise<Vehicle> => {
  const vehicle = await Vehicle.create(data);
  return vehicle;
};

const updateVehicle = async (vehicleId: string, data: Partial<VehicleData>): Promise<any> => {
  await Vehicle.update(data, {
    where: {
      id: vehicleId,
    },
  });
  const updatedVehicle = await findVehicleById(vehicleId);
  return updatedVehicle;
};

export default { findVehicleById, findVehicles, createVehicle, updateVehicle };
