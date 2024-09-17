import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IItem } from './interfaces/item.interface';
import { ServiceGeneric } from '../interfaces/interface.service';

@Injectable()
export class ItemsService extends ServiceGeneric<IItem>{

    constructor(@InjectModel('IItem') private readonly itemModel: Model<IItem>) {
        super(itemModel)
    }
}
