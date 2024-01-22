interface Environment {
  OIDC_ISSUER: string;
  OIDC_CLIENT_ID: string;
  OIDC_SCOPES: string;
}

declare global {
  interface Window {
    env: Environment;
  }
}

export default () =>
  ({
    OIDC_ISSUER: window.env.OIDC_ISSUER,
    OIDC_CLIENT_ID: window.env.OIDC_CLIENT_ID,
    OIDC_SCOPES: window.env.OIDC_SCOPES,
  }) satisfies Environment;
