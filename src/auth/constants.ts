import * as process from 'process';

interface JwtConstantsConfig {
  secret: string;
}

export const jwtConstants: JwtConstantsConfig = {
  secret: process.env.APP_KEY || '123',
};
