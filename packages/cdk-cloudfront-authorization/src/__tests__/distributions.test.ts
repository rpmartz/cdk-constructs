import 'jest-cdk-snapshot';
import { UserPool } from '@aws-cdk/aws-cognito';
import { App, Stack } from '@aws-cdk/core';

import { SpaAuthorization, StaticSiteAuthorization } from '../authorizations';
import { SpaDistribution, StaticSiteDistribution } from '../distributions';

test('default spa setup', (): void => {
  const app = new App();

  const stack = new Stack(app, 'Dummy', {
    env: {
      region: 'xxx',
    },
  });

  const userPool = new UserPool(stack, 'UserPool', {
    selfSignUpEnabled: false,
    userPoolName: 'cloudfront-authorization-userpool',
  });

  // UserPool must have a domain!
  userPool.addDomain('Domain', {
    cognitoDomain: {
      domainPrefix: 'cloudcomponents',
    },
  });

  const authorization = new SpaAuthorization(stack, 'SpaAuthorization', {
    userPool,
  });

  new SpaDistribution(stack, 'SpaDistribution', {
    authorization,
  });

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
    propertyMatchers: {
      Resources: {
        SpaAuthorizationAuthFlowcheckauthProviderAD2E39F4: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        SpaAuthorizationAuthFlowhttpheadersProviderCAB23200: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        SpaAuthorizationAuthFlowparseauthProviderFAD7CF01: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        SpaAuthorizationAuthFlowrefreshauthProvider2F233848: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        SpaAuthorizationAuthFlowsignoutProvider0444513A: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
      },
    },
  });
});

test('default static-site setup', (): void => {
  const app = new App();

  const stack = new Stack(app, 'Dummy', {
    env: {
      region: 'xxx',
    },
  });

  const userPool = new UserPool(stack, 'UserPool', {
    selfSignUpEnabled: false,
    userPoolName: 'cloudfront-authorization-userpool',
  });

  // UserPool must have a domain!
  userPool.addDomain('Domain', {
    cognitoDomain: {
      domainPrefix: 'cloudcomponents',
    },
  });

  const authorization = new StaticSiteAuthorization(stack, 'StaticSiteAuthorization', {
    userPool,
  });

  new StaticSiteDistribution(stack, 'StaticSiteDistribution', {
    authorization,
  });

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
    propertyMatchers: {
      Resources: {
        StaticSiteAuthorizationAuthFlowcheckauthProviderA6235A8D: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        StaticSiteAuthorizationAuthFlowhttpheadersProvider1776DA6C: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        StaticSiteAuthorizationAuthFlowparseauthProvider72D5CD13: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        StaticSiteAuthorizationAuthFlowrefreshauthProvider4DB598E9: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
        StaticSiteAuthorizationAuthFlowsignoutProvider710213B2: {
          Properties: {
            Create: {
              physicalResourceId: expect.any(Object),
            },
            Update: {
              physicalResourceId: expect.any(Object),
            },
          },
        },
      },
    },
  });
});
