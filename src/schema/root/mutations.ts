import Channel from "../../../core/models/entities/Channel";
import MetaData from "../../../core/models/entities/Metadata";
import pubsub from "../../pub-sub";

export default {
    Mutation: {
        addChannel: async (root, args) => {
            if (args !== null && args !== undefined) {
                const newChannel = new Channel({
                    name: args.channel.name,
                    metadata: [{
                        createdBy: args.channel.createdBy,
                    }],
                }, {include: [{ model: MetaData }]});

                // publish event for subscription
                pubsub.publish("channelAdded", {
                    channelId: newChannel.getDataValue("id"),
                });
                return await newChannel.save();
            } else {
                throw new Error("Channel is null or undefined.");
            }
        },
    },
};
