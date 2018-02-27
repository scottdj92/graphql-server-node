import Metadata from "../../.../../../../core/models/entities/Metadata";

export default {
    Metadata: {
        dateCreated: async (parent: Metadata, args) => {
            return parent.dateCreated;
        },
    },
};
