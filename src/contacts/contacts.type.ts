import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  phone: string;
}
