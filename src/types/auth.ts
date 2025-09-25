export interface AuthContextType {
  user: any;
  session: any;
  signUp: (email: string, password: string, confirmPassword?: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  loading: boolean;
}
