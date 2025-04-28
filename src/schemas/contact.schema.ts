import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
