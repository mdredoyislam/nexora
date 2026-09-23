import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service.js';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Add later if needed for admin panel auth

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
}
