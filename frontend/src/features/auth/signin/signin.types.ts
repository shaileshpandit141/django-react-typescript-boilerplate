import { InitialState, SuccessResponse, ErrorResponse } from "BaseAPITypes";

export interface SigninInitialState
  extends InitialState<
    {
      access_token: string | null;
      refresh_token: string | null;
    },
    {}
  > {}

export interface SigninSuccessResponse
  extends SuccessResponse<{
    access_token: string;
    refresh_token: string;
  }> {}

export interface SigninErrorResponse extends ErrorResponse<{}> {}

export interface RefreshTokenSuccessResponse
  extends SuccessResponse<{
    access_token: string;
  }> {}

export interface RefreshTokenErrorResponse
  extends ErrorResponse<{
    refresh_token?: string[];
  }> {}
