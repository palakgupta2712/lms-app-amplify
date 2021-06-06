// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AnnouncementModel, Lesson, Course, User } = initSchema(schema);

export {
  AnnouncementModel,
  Lesson,
  Course,
  User
};