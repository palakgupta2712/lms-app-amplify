// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AnnouncementsModel, User, Lesson, Course } = initSchema(schema);

export {
  AnnouncementsModel,
  User,
  Lesson,
  Course
};