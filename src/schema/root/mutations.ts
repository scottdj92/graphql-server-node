import Channel from "../../../core/models/entities/Channel";

export default {
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = new Channel({name: args.name});
            newChannel.save();
            return newChannel.Model;
        }
    }
}
