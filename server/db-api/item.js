import Debug from 'debug';
import { Item } from '../models';

const debug = new Debug('mean-gorilla:db-api:item');

export default {
  findAll: (sort = '-createdAt') => {
    debug('Finding all items');
    return Item.find().sort(sort);
  },

  create: q => {
    debug(`Creating new question ${JSON.stringify(q)}`);
    const item = new Item(q);
    return item.save();
  },
};
