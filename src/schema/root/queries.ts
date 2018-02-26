// import { channels } from "../stub-data";
import Channel from "../../../core/models/entities/Channel";

export default {
    Query: {
        channels: () => {
            return Channel.findAll();
        }
    }
}
