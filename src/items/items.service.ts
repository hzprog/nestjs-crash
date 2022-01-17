import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1324654893',
      name: 'item 1',
      qty: 100,
      description: 'this is item one',
    },
    {
      id: '4487238',
      name: 'item 2',
      qty: 400,
      description: 'this is item two',
    },
    {
      id: '514793',
      name: 'item 3',
      qty: 500,
      description: 'this is item three',
    },
    {
      id: '84324863',
      name: 'item 4',
      qty: 1000,
      description: 'this is item four',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item | undefined {
    const result: Item = this.items.find((item: Item) => item.id === id);
    return result;
  }
}
