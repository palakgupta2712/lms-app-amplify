/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAssignmentModel = /* GraphQL */ `
  subscription OnCreateAssignmentModel {
    onCreateAssignmentModel {
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
export const onUpdateAssignmentModel = /* GraphQL */ `
  subscription OnUpdateAssignmentModel {
    onUpdateAssignmentModel {
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
export const onDeleteAssignmentModel = /* GraphQL */ `
  subscription OnDeleteAssignmentModel {
    onDeleteAssignmentModel {
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
export const onCreateSyllabusModel = /* GraphQL */ `
  subscription OnCreateSyllabusModel {
    onCreateSyllabusModel {
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
export const onUpdateSyllabusModel = /* GraphQL */ `
  subscription OnUpdateSyllabusModel {
    onUpdateSyllabusModel {
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
export const onDeleteSyllabusModel = /* GraphQL */ `
  subscription OnDeleteSyllabusModel {
    onDeleteSyllabusModel {
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
export const onCreateCommentModel = /* GraphQL */ `
  subscription OnCreateCommentModel {
    onCreateCommentModel {
      id
      comment
      createdBy
      createdAt
      postmodelID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onUpdateCommentModel = /* GraphQL */ `
  subscription OnUpdateCommentModel {
    onUpdateCommentModel {
      id
      comment
      createdBy
      createdAt
      postmodelID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onDeleteCommentModel = /* GraphQL */ `
  subscription OnDeleteCommentModel {
    onDeleteCommentModel {
      id
      comment
      createdBy
      createdAt
      postmodelID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onCreatePostModel = /* GraphQL */ `
  subscription OnCreatePostModel {
    onCreatePostModel {
      id
      content
      createdBy
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      CommentModels {
        nextToken
        startedAt
      }
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
    }
  }
`;
export const onUpdatePostModel = /* GraphQL */ `
  subscription OnUpdatePostModel {
    onUpdatePostModel {
      id
      content
      createdBy
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      CommentModels {
        nextToken
        startedAt
      }
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
    }
  }
`;
export const onDeletePostModel = /* GraphQL */ `
  subscription OnDeletePostModel {
    onDeletePostModel {
      id
      content
      createdBy
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
      CommentModels {
        nextToken
        startedAt
      }
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
    }
  }
`;
export const onCreateAnnouncementsModel = /* GraphQL */ `
  subscription OnCreateAnnouncementsModel {
    onCreateAnnouncementsModel {
      id
      title
      content
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onUpdateAnnouncementsModel = /* GraphQL */ `
  subscription OnUpdateAnnouncementsModel {
    onUpdateAnnouncementsModel {
      id
      title
      content
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onDeleteAnnouncementsModel = /* GraphQL */ `
  subscription OnDeleteAnnouncementsModel {
    onDeleteAnnouncementsModel {
      id
      title
      content
      createdAt
      courseID
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      desc
      introduction
      createdBy
      createdAt
      status
      enrolledStudents
      _version
      _deleted
      _lastChangedAt
      updatedAt
      AssignmentModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      PostModels {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      Lessons {
        nextToken
        startedAt
      }
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
      CourseUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      title
      desc
      introduction
      createdBy
      createdAt
      status
      enrolledStudents
      _version
      _deleted
      _lastChangedAt
      updatedAt
      AssignmentModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      PostModels {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      Lessons {
        nextToken
        startedAt
      }
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
      CourseUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      title
      desc
      introduction
      createdBy
      createdAt
      status
      enrolledStudents
      _version
      _deleted
      _lastChangedAt
      updatedAt
      AssignmentModels {
        nextToken
        startedAt
      }
      SyllabusModels {
        nextToken
        startedAt
      }
      PostModels {
        nextToken
        startedAt
      }
      AnnouncementsModels {
        nextToken
        startedAt
      }
      Lessons {
        nextToken
        startedAt
      }
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
      CourseUsers {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      courses {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      courses {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      courses {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateCourseUser = /* GraphQL */ `
  subscription OnCreateCourseUser {
    onCreateCourseUser {
      id
      courseID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
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
    }
  }
`;
export const onUpdateCourseUser = /* GraphQL */ `
  subscription OnUpdateCourseUser {
    onUpdateCourseUser {
      id
      courseID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
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
    }
  }
`;
export const onDeleteCourseUser = /* GraphQL */ `
  subscription OnDeleteCourseUser {
    onDeleteCourseUser {
      id
      courseID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      course {
        id
        title
        desc
        introduction
        createdBy
        createdAt
        status
        enrolledStudents
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
    }
  }
`;
