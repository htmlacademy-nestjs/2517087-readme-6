import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CommonPostType, RabbitRouting } from '@project/shared/core';
import { NewsletterService } from './newsletter.service';
import { CheckAuthGuard } from '@project/guards';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { NewsletterRdo } from './rdo/newsletter.rdo';
import { NewsletterResponseMessage } from './newsletter.constants';
import { fillDto } from '@project/shared/helpers';

@ApiTags('newsletter')
@Controller()
export class NewsletterController {
  constructor(
    private readonly newsletterService: NewsletterService,
  ) { }

  @RabbitSubscribe({
    exchange: 'typoteka.notify',
    routingKey: RabbitRouting.NewPostsAppeared,
    queue: 'typoteka.notify.income',
  })
  public async notifyAboutNewPosts(posts: CommonPostType[]) {
    this.newsletterService.sendNotifyNewSubscriber(posts);
  }

  @ApiResponse({
    type: NewsletterRdo,
    status: HttpStatus.OK,
    description: NewsletterResponseMessage.NewsletterFound
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: NewsletterResponseMessage.JwtAuthError
  })
  @UseGuards(CheckAuthGuard)
  @Get('/get-last-newsletter')
  public async getLastNewsletterDate() {
    const entity = await this.newsletterService.getLastNewsletter();
    return fillDto(NewsletterRdo, { ...entity.toPOJO() });
  }
}
