export interface RegisterDto {
  email: string;
  password: string;
  intro: string;
  profiles: string[];
}

export interface LoginDto {
  email: string;
  password: string;
}
