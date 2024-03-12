export type iGenericResponse<T = any> = {
  error: string;
  result: T;
};

export interface iLoginRequest {
  email: string;
  password: string;
}
