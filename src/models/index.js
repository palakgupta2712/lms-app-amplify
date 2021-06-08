// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CourseStatus = {
  "PUBLISHED": "PUBLISHED",
  "DRAFT": "DRAFT"
};

const { CommentModel, PostModel, AnnouncementsModel, User, Lesson, Course } = initSchema(schema);

export {
  CommentModel,
  PostModel,
  AnnouncementsModel,
  User,
  Lesson,
  Course,
  CourseStatus
};