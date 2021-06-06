import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class Course {
  readonly id: string;
  readonly title?: string;
  readonly desc?: string;
  readonly createdBy?: string;
  readonly createdAt?: string;
  readonly Lessons?: (Lesson | null)[];
  readonly AnnouncementsModels?: (AnnouncementsModel | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}