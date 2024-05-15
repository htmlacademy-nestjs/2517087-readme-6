import { Module } from '@nestjs/common';

import { PrismaClientModule } from '@project/blog-models';

import { BlogCommentController } from './blog-comment.controller';
import { BlogCommentService } from './blog-comment.service';
import { BlogCommentRepository } from './blog-comment.repository';
import { BlogCommentFactory } from './blog-comment.factory';
import { CheckAuthGuard } from '@project/guards';
import { HttpModule } from '@nestjs/axios';
import { HttpClient } from '@project/api-config';

@Module({
  imports: [
    HttpModule.register({
      timeout: HttpClient.Timeout,
      maxRedirects: HttpClient.MaxRedirects,
    }),
    PrismaClientModule
  ],
  controllers: [BlogCommentController],
  providers: [
    BlogCommentRepository,
    BlogCommentService,
    BlogCommentFactory,
    CheckAuthGuard,
  ],
  exports: [BlogCommentRepository, BlogCommentFactory]
})
export class BlogCommentModule {}
