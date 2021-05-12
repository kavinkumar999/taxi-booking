import Model, { attr, belongsTo} from '@ember-data/model';

export default class RaidModel extends Model {
  @belongsTo('customer') customer;
  @attr('string') from;
  @attr('string') to;
  @attr('number') phone;
  @attr('string') date;
  @attr('string') time;
  @attr('number') km;
  @attr('number') amount;
}
