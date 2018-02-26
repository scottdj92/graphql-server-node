// TODO: add models for db
import Channel from "../core/models/entities/Channel";
import { Sequelize } from "sequelize-typescript";

export default async (connectionString: string, force: boolean = false) => {
    const sequelize = new Sequelize(connectionString);
    sequelize.addModels([Channel]);
    await sequelize.sync({force});
    return sequelize;
}
