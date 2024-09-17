import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {
    }

    @Get()
    async findAll(): Promise<IItem[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<IItem> {
        return this.itemsService.findById(id);
    }

    @Post()
    async create(@Body() itemDto: ItemDto): Promise<IItem> {
        return this.itemsService.create(itemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<IItem> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    async (@Param('id') id: string, @Body() itemDto: ItemDto): Promise<IItem> {
        return this.itemsService.update(id, itemDto);
    }
}
