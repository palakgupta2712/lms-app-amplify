// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CourseStatus = {
  "PUBLISHED": "PUBLISHED",
  "DRAFT": "DRAFT"
};

const { AssignmentModel, SyllabusModel, CommentModel, User, PostModel, AnnouncementsModel, Lesson, Course } = initSchema(schema);

export {
  AssignmentModel,
  SyllabusModel,
  CommentModel,
  User,
  PostModel,
  AnnouncementsModel,
  Lesson,
  Course,
  CourseStatus
};