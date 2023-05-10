import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  processLoanImage(image: string): string {
    // Perform OCR processing on the image to extract text
    const extractedText = this.performOCR(image);

    // Emit an event to notify other microservices about the extracted text
    this.communicationClient.emit('extracted_text', extractedText);

    return extractedText;
  }

  performOCR(image: string): string {
    // Perform OCR processing on the image using OCR library or service
    // ...

    // Return the extracted text
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  }
}
