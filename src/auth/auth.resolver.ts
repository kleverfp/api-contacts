import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dtos/login-response.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args('x_auth_token') x_auth_token: string) {
    const token = await this.authService.login(x_auth_token);
    return { access_token: token };
  }
}
