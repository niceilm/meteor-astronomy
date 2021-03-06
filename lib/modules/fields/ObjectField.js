import _ from 'lodash';
import Field from './Field';
import castToClass from './utils/castToClass';

class ObjectField extends Field {
  cast(value, options) {
    // We only cast if value is a plain object.
    if (!_.isPlainObject(value)) {
      return value;
    }

    // Get class from type property.
    const Class = this.type.class;

    // Cast value to an instance of the class.
    return castToClass({
      Class,
      rawDoc: value,
      options
    });
  }

  validate(args) {
    super.validate(args);

    this.type.validate(args);
  }
};

export default ObjectField;