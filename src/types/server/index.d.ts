export interface paths {
  "/v1/api/refresh-token": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 토큰 재발행 */
    post: operations["refresh"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/api/orders": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 주문 생성(결제 전) */
    post: operations["crete"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/api/orders/{id}/complete-payment": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** 결제 완료 */
    post: operations["create"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
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
  "/v1/api/members/social/status": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** SNS 회원 가입 여부 확인 */
    post: operations["check"];
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
  "/v1/api/products": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 상품 리스트 조회 */
    get: operations["query"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/api/products/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** 상품 상세 조회 */
    get: operations["query_1"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/api/members/social/url": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** SNS 회원 가입 로그인 URL */
    get: operations["create_1"];
    put?: never;
    post?: never;
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
    RefreshTokenRequest: {
      accessToken: string;
      refreshToken: string;
    };
    RefreshTokenResponse: {
      accessToken: string;
      refreshToken: string;
    };
    CreateOrderRequest: {
      /** Format: int64 */
      productId: number;
      options: components["schemas"]["ProductOptionRequest"][];
      /** Format: int64 */
      memberId: number;
      memberEmail: string;
      memberPhone: string;
      deliveryAddress: string;
      deliveryDetailAddress: string;
      postalCode: string;
      recipientName: string;
      recipientPhone: string;
      deliveryRequestMessage: string;
      /** Format: date */
      startDate: string;
      /** Format: date-time */
      startDateTime: string;
      /** Format: date-time */
      endDateTime: string;
    };
    ProductOptionRequest: {
      /** Format: int64 */
      optionId: number;
      choiceIds: number[];
    };
    CreateOrderResponse: {
      /** Format: int64 */
      orderId: number;
    };
    JoinSocialRequest: {
      /** @enum {string} */
      joinType: "KAKAO" | "NAVER";
      socialAccessToken: string;
    };
    JoinSocialResponse: {
      accessToken: string;
      refreshToken: string;
    };
    CheckSocialMemberExistRequest: {
      /** @enum {string} */
      joinType: "KAKAO" | "NAVER";
      accessToken: string;
    };
    CheckSocialMemberExistResponse: {
      exists: boolean;
    };
    LoginSocialRequest: {
      socialAccessToken: string;
      /** @enum {string} */
      loginType: "KAKAO" | "NAVER";
      remoteAddress?: string;
      deviceInformation?: string;
      appVersion?: string;
    };
    LoginSocialResponse: {
      accessToken: string;
      refreshToken: string;
    };
    PriceResponse: {
      /** Format: int64 */
      originalPrice: number;
      /** Format: int64 */
      disCountedPrice: number;
      /** Format: double */
      discountRate: number;
    };
    QueryProductsResponse: {
      /** Format: int64 */
      id: number;
      /** Format: int64 */
      cursorIndex: number;
      code: string;
      representativeImageUploadFileName: string;
      title: string;
      member: components["schemas"]["SimpleMemberResponse"];
      price: components["schemas"]["PriceResponse"];
    };
    SimpleMemberResponse: {
      nickname: string;
      uid: string;
    };
    OptionChoiceResponse: {
      /** Format: int64 */
      id: number;
      name: string;
      /** Format: int64 */
      additionalPrice: number;
    };
    OptionResponse: {
      /** Format: int64 */
      id: number;
      title: string;
      choices: components["schemas"]["OptionChoiceResponse"][];
      isMultipleSelectAllowed: boolean;
      isRequired: boolean;
    };
    QueryProductDetailResponse: {
      /** Format: int64 */
      id: number;
      code: string;
      imageUrls: string[];
      detailImageUrls: string[];
      title: string;
      member: components["schemas"]["SimpleMemberResponse"];
      price: components["schemas"]["PriceResponse"];
      description: string;
      possibleDeliveryTypes: ("COURIER" | "SELF_PICKUP")[];
      /** Format: int64 */
      stockCount: number;
      bundles: string[];
      options: components["schemas"]["OptionResponse"][];
      sellerInformation: components["schemas"]["SellerInformation"];
      productUnavailableDates: string[];
    };
    SellerInformation: {
      nickname: string;
      phone: string;
      email: string;
    };
    CreateOAuthUrlResponse: {
      url: string;
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
  refresh: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RefreshTokenRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["RefreshTokenResponse"];
        };
      };
    };
  };
  crete: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateOrderRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["CreateOrderResponse"];
        };
      };
    };
  };
  create: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  join: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["JoinSocialRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["JoinSocialResponse"];
        };
      };
    };
  };
  check: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CheckSocialMemberExistRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["CheckSocialMemberExistResponse"];
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
  query: {
    parameters: {
      query?: {
        cursorIndex?: number;
        size?: number;
      };
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
          "*/*": components["schemas"]["QueryProductsResponse"][];
        };
      };
    };
  };
  query_1: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
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
          "*/*": components["schemas"]["QueryProductDetailResponse"];
        };
      };
    };
  };
  create_1: {
    parameters: {
      query: {
        type: "KAKAO" | "NAVER";
      };
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
          "*/*": components["schemas"]["CreateOAuthUrlResponse"];
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
