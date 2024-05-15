export const MAX_COMMENTS_COUNT = 50;

export const DEFAULT_PAGE_COUNT = 1;

export const CommentLength = {
  Min: 10,
  Max: 300
} as const;

export const BlogCommentValidateMessage = {
  MessageIsEmpty: 'The message is empty',
  InvalidID: 'Invalid mongo id',
  MessageLesserMin: `Message Lesser Min value ${CommentLength.Min}`,
  MessageGreaterMax: `Message Greater Max value ${CommentLength.Max}`,
} as const;

export const ParamDescription = {
  CommentId: 'Comment ID',
  PostId: 'Post ID',
} as const;

export const BlogCommentResponseMessage = {
  CommentCreated: 'New comment has been created',
  CommentDeleted: 'Comment has been deleted',
  CommentValidationError: 'Validation error when creating comment',
  CommentFound: 'Comment found',
  CommentNotFound: 'Comment not found',
  PostNotFound: 'Post not found',
  JwtAuthError: 'Failed authorization with jwt',
  FoundCommentList: 'Found comment list',
  UserNotAuthor: 'User not author of this comment'
} as const;
