import { channels } from "../stub-data"
let nextId = 3;

export default {
    Mutation: {
        addChannel: (root, args) => {
            const newChannel = { id: nextId++, name: args.name };
            channels.push(newChannel);
            return newChannel;
        }
    }
}
