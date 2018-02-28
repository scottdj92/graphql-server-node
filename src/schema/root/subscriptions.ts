import { withFilter } from "graphql-subscriptions";
import pubsub from "../../pub-sub";

export default {
    Subscription: {
        channelAdded: withFilter(
            () => pubsub.asyncIterator("channelAdded"),
            (payload, vars) => {
                return payload.channelId === vars.channelId;
            },
        ),
    },
};
