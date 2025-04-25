import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;
}
