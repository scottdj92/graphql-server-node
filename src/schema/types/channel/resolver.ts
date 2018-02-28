import Metadata from "../../../../core/models/entities/Metadata";
import Channel from "../../../../core/models/entities/Channel";
import { Model } from "sequelize-typescript";

export default {
    Channel: {
        metadata: async (parent: Model<Channel>, args) => {
            return await Metadata.findOne({
                where: {
                    channelId: parent.getDataValue("id"),
                },
            });
        },
    },
};
