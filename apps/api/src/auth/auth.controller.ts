import { Controller, Get, Post, Body, Session, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service.js';

@Controller('v1/auth/siwe')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('nonce')
  getNonce(@Session() session: Record<string, any>) {
    const nonce = this.authService.generateNonce();
    session.nonce = nonce;
    return { nonce };
  }

  @Post('verify')
  @HttpCode(200)
  async verify(@Body() body: { message: string; signature: string }, @Session() session: Record<string, any>) {
    const { message, signature } = body;
    const token = await this.authService.verifySiwe(message, signature, session.nonce);
    
    // Clear nonce after successful use to prevent replay attacks
    session.nonce = null;
    
    return token;
  }
}
