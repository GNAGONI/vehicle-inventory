import { Vehicle } from './model';
import { VehicleData } from './types';

const findVehicleById = async (vehicleId: string): Promise<Vehicle> => {
  const vehicle = await Vehicle.findOne({
    where: { id: vehicleId },
    limit: 1,
    offset: 0,
  });
  return vehicle;
};

const findVehicles = async (limit: number, offset: number): Promise<Vehicle[]> => {
  const vehicles = await Vehicle.findAll({
    limit,
    offset,
  });
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

const deleteVehicle = async (vehicleId: string): Promise<number> => {
  const count = await Vehicle.destroy({
    where: {
      id: vehicleId,
    },
  });
  return count;
};

export default { findVehicleById, findVehicles, createVehicle, updateVehicle, deleteVehicle };
