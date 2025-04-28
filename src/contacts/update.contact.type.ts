import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateContact {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  phone?: string;
}
