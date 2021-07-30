import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10)
    if(isNaN(val)) {
      return new BadRequestException(`${value} is not an number`)
    }
    return val;
  }
}
