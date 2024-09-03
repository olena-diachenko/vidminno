import { Schema } from 'rsuite';

const { StringType } = Schema.Types;

const model = Schema.Model({
  username: StringType().isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
});

export default model;
