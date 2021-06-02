// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Lesson, Course, User } = initSchema(schema);

export {
  Lesson,
  Course,
  User
};