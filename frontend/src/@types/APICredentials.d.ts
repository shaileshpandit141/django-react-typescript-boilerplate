declare module 'APICredentials' {
  export interface SigninCredentials {
    email: string
    password: string
  }

  export interface SignupCredentials {
    email: string
    password1: string
    password2: string
  }

  export interface SignoutCredentials {
    email: string
    password1: string
    password2: string
  }

  export interface PasswordResetCredentials {
    email: string
  }

  export interface ConfirmPasswordResetCredentials {
    uid: string
    token: string
    new_password1: string
    new_password2: string
  }

  export interface VerifyEmailCredentials {
    key: string
  }

  export interface RsendVerificationEmailCredentials { }

  export interface RefreshTokenCredentials {
    refresh_token: string
  }

  export interface SigninUserCredentials { }

}