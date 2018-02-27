import { Table, Column, Model, HasOne } from "sequelize-typescript";
import Metadata from "./Metadata";

@Table
class Channel extends Model<Channel> {
    @Column
    public name: string;
    @HasOne(() => Metadata)
    public metadata: Metadata;
}

export default Channel;
