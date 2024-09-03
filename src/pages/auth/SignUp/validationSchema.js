import { Schema } from 'rsuite';

const { StringType } = Schema.Types;

const model = Schema.Model({
  username: StringType()
    .isRequired('This field is required.')
    .minLength(3, "Can't be less than 3 characters")
    .maxLength(50, 'Cannot be greater than 50 characters'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType()
    .isRequired('This field is required.')
    .containsLetter('Must contain English characters')
    .containsNumber('Must contain numbers')
    .minLength(6, 'Minimum 6 characters required'),
});

export default model;
