import { UserManager } from 'oidc-client-ts';

import env from '@project/env';
import AuthService from '@project/services/auth';

export const auth = () =>
  new AuthService(
    new UserManager({
      authority: env().OIDC_ISSUER,
      client_id: env().OIDC_CLIENT_ID,
      redirect_uri: `${window.location.origin}/auth`,
      post_logout_redirect_uri: window.location.origin,
      scope: env().OIDC_SCOPES,
      response_mode: 'query',
      automaticSilentRenew: false,
      loadUserInfo: true,
    })
  );
