export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  username: string;
}

export interface UserPayload {
  username: string;
  email: string;
  password: string;
}

export interface PasswordChangeLayload {
  currentPassword: string;
  newPassword: string;
}
