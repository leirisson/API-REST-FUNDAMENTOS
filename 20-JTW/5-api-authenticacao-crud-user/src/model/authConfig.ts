export interface AuthJwtConfig {
  secret: string
  expiresIn: string | number
}

export interface AuthConfig {
  jwt: AuthJwtConfig;
}