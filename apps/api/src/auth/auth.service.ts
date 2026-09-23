import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { generateNonce, SiweMessage } from 'siwe';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  generateNonce(): string {
    return generateNonce();
  }

  async verifySiwe(message: string, signature: string, expectedNonce: string) {
    try {
      const siweMessage = new SiweMessage(message);
      
      const verificationResult = await siweMessage.verify({
        signature,
        nonce: expectedNonce,
      });

      if (verificationResult.success) {
        const payload = { sub: siweMessage.address, address: siweMessage.address };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
      
      throw new UnauthorizedException('Invalid signature');
    } catch (e) {
      throw new UnauthorizedException('Authentication failed');
    }
  }
}
