import {IEntity} from "../../interfaces/interface.entity";

export interface IItem extends IEntity{
    name: string;
    description?: string;
    quantity: number;
}