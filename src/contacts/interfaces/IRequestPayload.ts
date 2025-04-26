import { User } from 'src/models/user.model';

export interface IRequestPayload {
  req: Request & { user: User };
}
