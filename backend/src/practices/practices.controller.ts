import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PracticesService } from './practices.service';

@Controller('practices')
@UseGuards(JwtAuthGuard)
export class PracticesController {
  constructor(private readonly practicesService: PracticesService) {}

  @Post('start')
  async start(@Body() body: { type: string }, @Param('userId') userId: number) {
    return this.practicesService.startPractice(userId, body.type);
  }

  @Post('complete')
  async complete(@Body() body: { type: string; duration: number; notes?: string }, @Param('userId') userId: number) {
    return this.practicesService.completePractice(userId, body.type, body.duration, body.notes);
  }

  @Get()
  async getPractices(@Param('userId') userId: number) {
    return this.practicesService.getUserPractices(userId);
  }
}
