import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CourseStatus {
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT"
}



export declare class CommentModel {
  readonly id: string;
  readonly comment?: string;
  readonly createdBy?: string;
  readonly createdAt?: string;
  readonly postmodelID?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CommentModel>);
  static copyOf(source: CommentModel, mutator: (draft: MutableModel<CommentModel>) => MutableModel<CommentModel> | void): CommentModel;
}

export declare class PostModel {
  readonly id: string;
  readonly content?: string;
  readonly createdBy?: string;
  readonly createdAt?: string;
  readonly CommentModels?: (CommentModel | null)[];
  readonly courseID?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PostModel>);
  static copyOf(source: PostModel, mutator: (draft: MutableModel<PostModel>) => MutableModel<PostModel> | void): PostModel;
}

export declare class AnnouncementsModel {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly createdAt?: string;
  readonly courseID?: string;
  readonly User?: User;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AnnouncementsModel>);
  static copyOf(source: AnnouncementsModel, mutator: (draft: MutableModel<AnnouncementsModel>) => MutableModel<AnnouncementsModel> | void): AnnouncementsModel;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly username?: string;
  readonly isEducator?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Lesson {
  readonly id: string;
  readonly title?: string;
  readonly summary?: string;
  readonly videoURL?: string;
  readonly courseID?: string;
  readonly createdBy?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class Course {
  readonly id: string;
  readonly title?: string;
  readonly desc?: string;
  readonly introduction?: string;
  readonly createdBy?: string;
  readonly Lessons?: (Lesson | null)[];
  readonly AnnouncementsModels?: (AnnouncementsModel | null)[];
  readonly createdAt?: string;
  readonly User?: User;
  readonly status?: CourseStatus | keyof typeof CourseStatus;
  readonly PostModels?: (PostModel | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}