// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CourseStatus = {
  "PUBLISHED": "PUBLISHED",
  "DRAFT": "DRAFT"
};

const { CommentModel, User, PostModel, AnnouncementsModel, Lesson, Course } = initSchema(schema);

export {
  CommentModel,
  User,
  PostModel,
  AnnouncementsModel,
  Lesson,
  Course,
  CourseStatus
};