import Channel from "../../../core/models/entities/Channel";
import MetaData from "../../../core/models/entities/Metadata";

export default {
    Mutation: {
        addChannel: async (root, args) => {
            const currentDate = new Date();
            const newChannel = new Channel({
                name: args.name,
                metadata: [{
                    dateCreated: currentDate.toISOString(),
                }],
            }, {include: [{ model: MetaData }]});
            return await newChannel.save();
        },
    },
};
