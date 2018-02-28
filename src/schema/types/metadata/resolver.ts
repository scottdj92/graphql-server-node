import Metadata from "../../.../../../../core/models/entities/Metadata";

export default {
    Metadata: {
        createdAt: async (parent: Metadata, args) => {
            return parent.createdAt;
        },
        createdBy: async (parent: Metadata, args) => {
            return parent.createdBy;
        },
    },
};
