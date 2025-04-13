export interface paths {
  "/v1/api/members/social": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** SNS 회원 가입 */
    post: operations["join"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/api/login/social": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** SNS 로그인 */
    post: operations["join_1"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 헬스체크 */
    get: operations["healthCheck"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    JoinSocialMemberRequest: {
      /** @enum {string} */
      joinType: "KAKAO" | "NAVER";
      socialId: string;
      email?: string;
    };
    JoinSocialMemberResponse: {
      accessToken: string;
      refreshToken: string;
    };
    LoginSocialRequest: {
      socialId: string;
      /** @enum {string} */
      joinType: "KAKAO" | "NAVER";
      remoteAddress?: string;
      deviceInformation?: string;
      appVersion?: string;
    };
    LoginSocialResponse: {
      accessToken: string;
      refreshToken: string;
    };
    Unit: Record<string, never>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  join: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["JoinSocialMemberRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["JoinSocialMemberResponse"];
        };
      };
    };
  };
  join_1: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginSocialRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["LoginSocialResponse"];
        };
      };
    };
  };
  healthCheck: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["Unit"];
        };
      };
    };
  };
}
