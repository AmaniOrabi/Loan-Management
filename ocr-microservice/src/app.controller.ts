import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ocr')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('process-image')
  async processDocumentImage(@Body('image') image: string): Promise<string> {
    const extractedText = await this.appService.processLoanImage(image);
    return extractedText;
  }
}
