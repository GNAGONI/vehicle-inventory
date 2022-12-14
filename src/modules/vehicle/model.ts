import { Model, DataTypes, CreationOptional } from 'sequelize';
import { sequelize } from '../../model';

class Vehicle extends Model {
  declare id?: CreationOptional<string>;
  declare vehicleName: string;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    vehicleName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'vehicles',
  },
);

export { Vehicle };
