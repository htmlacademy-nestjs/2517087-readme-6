export const ParamDescription = {
  FileId: 'File id',
} as const;

export const FileResponseMessage = {
  FoundFileList: 'Success found list files',
  FileCreated: 'New file has been created',
  FileFound: 'File found',
  FileNotFound: 'File not found',
  BadMongoIdError: 'Bad entity mongo ID',
} as const;
