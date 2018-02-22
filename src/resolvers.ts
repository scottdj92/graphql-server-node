const channels = [
    {
        id: 1,
        name: "soccer"
    },
    {
        id: 2,
        name: "basketball"
    }
];

export const resolvers = {
    Query: {
        channels: () => {
            return channels;
        }
    }
}
