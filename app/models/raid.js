import Model, { attr } from '@ember-data/model';

export default class RaidModel extends Model {
  @attr('customer') customer;
  @attr('string') from;
  @attr('string') to;
  @attr('string') phone;
  @attr('date') date;
  @attr('time') time;
  @attr('string') km;
  @attr('string') amount;
}
