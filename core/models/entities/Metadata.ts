import { Table, Column, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import Channel from "./Channel";

@Table
class Metadata extends Model<Metadata> {
    @Column
    public createdBy: string;
    @Column
    @ForeignKey(() => Channel)
    public channelId: number;
}

export default Metadata;
