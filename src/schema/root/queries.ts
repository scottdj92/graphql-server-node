import Channel from "../../../core/models/entities/Channel";
import Metadata from "../../../core/models/entities/Metadata";

export default {
    Query: {
        channels: async () => {
            return await Channel.findAll({
                include: [ Metadata ],
            });
        },
        findChannelById: async (parent, args) => {
            return await Channel.findById(args.id);
        },
    },
};
