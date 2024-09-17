import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IEntity } from './interface.entity';

export class ServiceGeneric<T extends IEntity> {
    constructor(@InjectModel('') private readonly model: Model<T>) {
    }

    async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async findById(id: string): Promise<T> {
        return this.model.findOne({ _id: id});
    }

    async create(item: any): Promise<T> {
        const newItem = new this.model(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<T>{
        return this.model.findByIdAndDelete(id);
    }

    async update(id:string, item: any): Promise<T>{
        return this.model.findByIdAndUpdate(id, item, {new: true});
    }
}