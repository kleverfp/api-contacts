import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InputContact {
  @Field()
  name: string;

  @Field()
  phone: string;
}
