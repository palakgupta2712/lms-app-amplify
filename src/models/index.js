// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Course, User } = initSchema(schema);

export {
  Course,
  User
};