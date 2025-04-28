import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class Login {
  @Field()
  x_auth_token: string;
}
