import { Vehicle } from '../src/model';

seed();

async function seed() {
  await Vehicle.sync();

  await Promise.all([
    Vehicle.create({
      vehicleName: 'Audi',
    }),
    Vehicle.create({
      vehicleName: 'BMW',
    }),
    Vehicle.create({
      vehicleName: 'Mercedes',
    }),
    Vehicle.create({
      vehicleName: 'Volkswagen',
    }),
    Vehicle.create({
      vehicleName: 'Toyota',
    }),
    Vehicle.create({
      vehicleName: 'Mitsubishi',
    }),
    Vehicle.create({
      vehicleName: 'Ford',
    }),
  ]);
}
