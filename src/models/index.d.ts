import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Course {
  readonly id: string;
  readonly title?: string;
  readonly desc?: string;
  readonly createdBy?: string;
  readonly createdAt?: string;
  readonly userID?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly username?: string;
  readonly isEducator?: boolean;
  readonly Courses?: (Course | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}