import { Module } from '@nestjs/common';
import { VirtuesService } from './virtues.service';
import { VirtuesController } from './virtues.controller';

@Module({
  controllers: [VirtuesController],
  providers: [VirtuesService],
})
export class VirtuesModule {}
