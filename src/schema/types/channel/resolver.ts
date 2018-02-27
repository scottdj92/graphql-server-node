import Metadata from "../../../../core/models/entities/Metadata";
import Channel from "../../../../core/models/entities/Channel";

export default {
    Channel: {
        metadata: async (parent, args) => {
            return await Metadata.findOne({
                where: {
                    channelId: parent.dataValues.id,
                },
            });
        },
    },
};
