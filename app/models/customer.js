import Model, { attr, hasMany  } from '@ember-data/model';


export default class CustomerModel extends Model {
  @hasMany raid;
  @attr('string') username;
  @attr('string') pass;
}
