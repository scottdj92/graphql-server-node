// TODO: add models for db
import Channel from "../core/models/entities/Channel";
import MetaData from "../core/models/entities/Metadata";
import { Sequelize } from "sequelize-typescript";

export default async (connectionString: string, force: boolean = false) => {
    const sequelize = new Sequelize(connectionString);
    sequelize.addModels([Channel, MetaData]);
    await sequelize.sync({force});
    return sequelize;
};
