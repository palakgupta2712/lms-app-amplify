/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAssignmentModel = /* GraphQL */ `
  mutation CreateAssignmentModel(
    $input: CreateAssignmentModelInput!
    $condition: ModelAssignmentModelConditionInput
  ) {
    createAssignmentModel(input: $input, condition: $condition) {
      id
      title
      content
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAssignmentModel = /* GraphQL */ `
  mutation UpdateAssignmentModel(
    $input: UpdateAssignmentModelInput!
    $condition: ModelAssignmentModelConditionInput
  ) {
    updateAssignmentModel(input: $input, condition: $condition) {
      id
      title
      content
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAssignmentModel = /* GraphQL */ `
  mutation DeleteAssignmentModel(
    $input: DeleteAssignmentModelInput!
    $condition: ModelAssignmentModelConditionInput
  ) {
    deleteAssignmentModel(input: $input, condition: $condition) {
      id
      title
      content
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSyllabusModel = /* GraphQL */ `
  mutation CreateSyllabusModel(
    $input: CreateSyllabusModelInput!
    $condition: ModelSyllabusModelConditionInput
  ) {
    createSyllabusModel(input: $input, condition: $condition) {
      id
      title
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSyllabusModel = /* GraphQL */ `
  mutation UpdateSyllabusModel(
    $input: UpdateSyllabusModelInput!
    $condition: ModelSyllabusModelConditionInput
  ) {
    updateSyllabusModel(input: $input, condition: $condition) {
      id
      title
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSyllabusModel = /* GraphQL */ `
  mutation DeleteSyllabusModel(
    $input: DeleteSyllabusModelInput!
    $condition: ModelSyllabusModelConditionInput
  ) {
    deleteSyllabusModel(input: $input, condition: $condition) {
      id
      title
      S3Key
      courseID
      uploadedBy
      uploadedAt
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCommentModel = /* GraphQL */ `
  mutation CreateCommentModel(
    $input: CreateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    createCommentModel(input: $input, condition: $condition) {
      id
      comment
      createdBy
      createdAt
      postmodelID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateCommentModel = /* GraphQL */ `
  mutation UpdateCommentModel(
    $input: UpdateCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    updateCommentModel(input: $input, condition: $condition) {
      id
      comment
      createdBy
      createdAt
      postmodelID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteCommentModel = /* GraphQL */ `
  mutation DeleteCommentModel(
    $input: DeleteCommentModelInput!
    $condition: ModelCommentModelConditionInput
  ) {
    deleteCommentModel(input: $input, condition: $condition) {
      id
      comment
      createdBy
      createdAt
      postmodelID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createPostModel = /* GraphQL */ `
  mutation CreatePostModel(
    $input: CreatePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    createPostModel(input: $input, condition: $condition) {
      id
      content
      createdBy
      createdAt
      CommentModels {
        nextToken
        startedAt
      }
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updatePostModel = /* GraphQL */ `
  mutation UpdatePostModel(
    $input: UpdatePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    updatePostModel(input: $input, condition: $condition) {
      id
      content
      createdBy
      createdAt
      CommentModels {
        nextToken
        startedAt
      }
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deletePostModel = /* GraphQL */ `
  mutation DeletePostModel(
    $input: DeletePostModelInput!
    $condition: ModelPostModelConditionInput
  ) {
    deletePostModel(input: $input, condition: $condition) {
      id
      content
      createdBy
      createdAt
      CommentModels {
        nextToken
        startedAt
      }
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createAnnouncementsModel = /* GraphQL */ `
  mutation CreateAnnouncementsModel(
    $input: CreateAnnouncementsModelInput!
    $condition: ModelAnnouncementsModelConditionInput
  ) {
    createAnnouncementsModel(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateAnnouncementsModel = /* GraphQL */ `
  mutation UpdateAnnouncementsModel(
    $input: UpdateAnnouncementsModelInput!
    $condition: ModelAnnouncementsModelConditionInput
  ) {
    updateAnnouncementsModel(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteAnnouncementsModel = /* GraphQL */ `
  mutation DeleteAnnouncementsModel(
    $input: DeleteAnnouncementsModelInput!
    $condition: ModelAnnouncementsModelConditionInput
  ) {
    deleteAnnouncementsModel(input: $input, condition: $condition) {
      id
      title
      content
      createdAt
      courseID
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      summary
      videoURL
      courseID
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      summary
      videoURL
      courseID
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      summary
      videoURL
      courseID
      createdBy
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      desc
      introduction
      createdBy
      Lessons {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      createdAt
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      PostModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      AssignmentModels {
        nextToken
        startedAt
      }
      enrolledStudents
      CourseUsers {
        nextToken
        startedAt
      }
      coursePin
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      desc
      introduction
      createdBy
      Lessons {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      createdAt
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      PostModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      AssignmentModels {
        nextToken
        startedAt
      }
      enrolledStudents
      CourseUsers {
        nextToken
        startedAt
      }
      coursePin
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      desc
      introduction
      createdBy
      Lessons {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      createdAt
      User {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      status
      PostModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      AssignmentModels {
        nextToken
        startedAt
      }
      enrolledStudents
      CourseUsers {
        nextToken
        startedAt
      }
      coursePin
      _version
      _deleted
      _lastChangedAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      isEducator
      courses {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      isEducator
      courses {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      isEducator
      courses {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCourseUser = /* GraphQL */ `
  mutation CreateCourseUser(
    $input: CreateCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    createCourseUser(input: $input, condition: $condition) {
      id
      courseID
      userID
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
        coursePin
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      user {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCourseUser = /* GraphQL */ `
  mutation UpdateCourseUser(
    $input: UpdateCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    updateCourseUser(input: $input, condition: $condition) {
      id
      courseID
      userID
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
        coursePin
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      user {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourseUser = /* GraphQL */ `
  mutation DeleteCourseUser(
    $input: DeleteCourseUserInput!
    $condition: ModelCourseUserConditionInput
  ) {
    deleteCourseUser(input: $input, condition: $condition) {
      id
      courseID
      userID
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
        coursePin
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      user {
        id
        name
        email
        username
        isEducator
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
