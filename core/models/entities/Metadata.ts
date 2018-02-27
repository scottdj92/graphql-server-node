import { Table, Column, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import Channel from "./Channel";

@Table
class Metadata extends Model<Metadata> {
    @Column
    public dateCreated: Date;
    @Column
    @ForeignKey(() => Channel)
    public channelId: number;
}

export default Metadata;
