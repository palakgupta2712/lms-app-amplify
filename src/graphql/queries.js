/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAssignmentModels = /* GraphQL */ `
  query SyncAssignmentModels(
    $filter: ModelAssignmentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssignmentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAssignmentModel = /* GraphQL */ `
  query GetAssignmentModel($id: ID!) {
    getAssignmentModel(id: $id) {
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
export const listAssignmentModels = /* GraphQL */ `
  query ListAssignmentModels(
    $filter: ModelAssignmentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignmentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSyllabusModels = /* GraphQL */ `
  query SyncSyllabusModels(
    $filter: ModelSyllabusModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSyllabusModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSyllabusModel = /* GraphQL */ `
  query GetSyllabusModel($id: ID!) {
    getSyllabusModel(id: $id) {
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
export const listSyllabusModels = /* GraphQL */ `
  query ListSyllabusModels(
    $filter: ModelSyllabusModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSyllabusModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCommentModels = /* GraphQL */ `
  query SyncCommentModels(
    $filter: ModelCommentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment
        createdBy
        createdAt
        postmodelID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCommentModel = /* GraphQL */ `
  query GetCommentModel($id: ID!) {
    getCommentModel(id: $id) {
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
export const listCommentModels = /* GraphQL */ `
  query ListCommentModels(
    $filter: ModelCommentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        createdBy
        createdAt
        postmodelID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostModels = /* GraphQL */ `
  query SyncPostModels(
    $filter: ModelPostModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        content
        createdBy
        createdAt
        courseID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostModel = /* GraphQL */ `
  query GetPostModel($id: ID!) {
    getPostModel(id: $id) {
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
export const listPostModels = /* GraphQL */ `
  query ListPostModels(
    $filter: ModelPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdBy
        createdAt
        courseID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnnouncementsModels = /* GraphQL */ `
  query SyncAnnouncementsModels(
    $filter: ModelAnnouncementsModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnnouncementsModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        content
        createdAt
        courseID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnnouncementsModel = /* GraphQL */ `
  query GetAnnouncementsModel($id: ID!) {
    getAnnouncementsModel(id: $id) {
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
export const listAnnouncementsModels = /* GraphQL */ `
  query ListAnnouncementsModels(
    $filter: ModelAnnouncementsModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncementsModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        createdAt
        courseID
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCourseUsers = /* GraphQL */ `
  query SyncCourseUsers(
    $filter: ModelCourseUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        courseID
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
