import { Controller, Get, Param } from '@nestjs/common';
import { VirtuesService } from './virtues.service';

@Controller('virtues')
export class VirtuesController {
  constructor(private readonly virtuesService: VirtuesService) {}

  @Get()
  async list() {
    return this.virtuesService.findAll();
  }

  @Get(':slug')
  async get(@Param('slug') slug: string) {
    return this.virtuesService.findBySlug(slug);
  }
}
