import { channels } from "../stub-data";

export default {
    Query: {
        channels: () => {
            return channels;
        }
    }
}
