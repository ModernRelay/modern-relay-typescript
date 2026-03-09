// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.repositories.create',
    fullyQualifiedName: 'repositories.create',
    httpMethod: 'post',
    httpPath: '/v1/repositories',
  },
  {
    clientCallName: 'client.repositories.retrieve',
    fullyQualifiedName: 'repositories.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/repositories/{repositoryId}',
  },
  {
    clientCallName: 'client.repositories.update',
    fullyQualifiedName: 'repositories.update',
    httpMethod: 'patch',
    httpPath: '/v1/repositories/{repositoryId}',
  },
  {
    clientCallName: 'client.repositories.list',
    fullyQualifiedName: 'repositories.list',
    httpMethod: 'get',
    httpPath: '/v1/accounts/{accountId}/repositories',
  },
  {
    clientCallName: 'client.repositories.delete',
    fullyQualifiedName: 'repositories.delete',
    httpMethod: 'delete',
    httpPath: '/v1/repositories/{repositoryId}',
  },
  {
    clientCallName: 'client.branches.create',
    fullyQualifiedName: 'branches.create',
    httpMethod: 'post',
    httpPath: '/v1/repositories/{repositoryId}/branches',
  },
  {
    clientCallName: 'client.branches.retrieve',
    fullyQualifiedName: 'branches.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}',
  },
  {
    clientCallName: 'client.branches.list',
    fullyQualifiedName: 'branches.list',
    httpMethod: 'get',
    httpPath: '/v1/repositories/{repositoryId}/branches',
  },
  {
    clientCallName: 'client.branches.delete',
    fullyQualifiedName: 'branches.delete',
    httpMethod: 'delete',
    httpPath: '/v1/branches/{branchId}',
  },
  {
    clientCallName: 'client.branches.diff',
    fullyQualifiedName: 'branches.diff',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}/diff',
  },
  {
    clientCallName: 'client.branches.listChildren',
    fullyQualifiedName: 'branches.listChildren',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}/children',
  },
  {
    clientCallName: 'client.branches.merge',
    fullyQualifiedName: 'branches.merge',
    httpMethod: 'post',
    httpPath: '/v1/branches/{sourceBranchId}/merge',
  },
  {
    clientCallName: 'client.branches.schema.retrieve',
    fullyQualifiedName: 'branches.schema.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}/schema',
  },
  {
    clientCallName: 'client.branches.classes.create',
    fullyQualifiedName: 'branches.classes.create',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/classes',
  },
  {
    clientCallName: 'client.branches.classes.update',
    fullyQualifiedName: 'branches.classes.update',
    httpMethod: 'patch',
    httpPath: '/v1/branches/{branchId}/classes/{classId}',
  },
  {
    clientCallName: 'client.branches.classes.delete',
    fullyQualifiedName: 'branches.classes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/branches/{branchId}/classes/{classId}',
  },
  {
    clientCallName: 'client.branches.classes.createBatch',
    fullyQualifiedName: 'branches.classes.createBatch',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/classes/batch',
  },
  {
    clientCallName: 'client.branches.properties.create',
    fullyQualifiedName: 'branches.properties.create',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/properties',
  },
  {
    clientCallName: 'client.branches.properties.update',
    fullyQualifiedName: 'branches.properties.update',
    httpMethod: 'patch',
    httpPath: '/v1/branches/{branchId}/properties/{propertyId}',
  },
  {
    clientCallName: 'client.branches.properties.delete',
    fullyQualifiedName: 'branches.properties.delete',
    httpMethod: 'delete',
    httpPath: '/v1/branches/{branchId}/properties/{propertyId}',
  },
  {
    clientCallName: 'client.branches.properties.createBatch',
    fullyQualifiedName: 'branches.properties.createBatch',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/properties/batch',
  },
  {
    clientCallName: 'client.branches.entities.create',
    fullyQualifiedName: 'branches.entities.create',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/entities',
  },
  {
    clientCallName: 'client.branches.entities.retrieve',
    fullyQualifiedName: 'branches.entities.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/entities/retrieve',
  },
  {
    clientCallName: 'client.branches.entities.update',
    fullyQualifiedName: 'branches.entities.update',
    httpMethod: 'patch',
    httpPath: '/v1/branches/{branchId}/entities/{entityId}',
  },
  {
    clientCallName: 'client.branches.entities.list',
    fullyQualifiedName: 'branches.entities.list',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}/entities',
  },
  {
    clientCallName: 'client.branches.entities.delete',
    fullyQualifiedName: 'branches.entities.delete',
    httpMethod: 'delete',
    httpPath: '/v1/branches/{branchId}/entities',
  },
  {
    clientCallName: 'client.branches.entities.listBackreferences',
    fullyQualifiedName: 'branches.entities.listBackreferences',
    httpMethod: 'get',
    httpPath: '/v1/branches/{branchId}/entities/{entityId}/references',
  },
  {
    clientCallName: 'client.branches.entities.query',
    fullyQualifiedName: 'branches.entities.query',
    httpMethod: 'post',
    httpPath: '/v1/branches/{branchId}/entities/query',
  },
  {
    clientCallName: 'client.branches.entities.updateBatch',
    fullyQualifiedName: 'branches.entities.updateBatch',
    httpMethod: 'patch',
    httpPath: '/v1/branches/{branchId}/entities',
  },
  {
    clientCallName: 'client.proposals.create',
    fullyQualifiedName: 'proposals.create',
    httpMethod: 'post',
    httpPath: '/v1/proposals',
  },
  {
    clientCallName: 'client.proposals.retrieve',
    fullyQualifiedName: 'proposals.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/proposals/{proposalId}',
  },
  {
    clientCallName: 'client.proposals.update',
    fullyQualifiedName: 'proposals.update',
    httpMethod: 'patch',
    httpPath: '/v1/proposals/{proposalId}',
  },
  {
    clientCallName: 'client.proposals.list',
    fullyQualifiedName: 'proposals.list',
    httpMethod: 'get',
    httpPath: '/v1/repositories/{repositoryId}/proposals',
  },
  {
    clientCallName: 'client.proposals.delete',
    fullyQualifiedName: 'proposals.delete',
    httpMethod: 'delete',
    httpPath: '/v1/proposals/{proposalId}',
  },
  {
    clientCallName: 'client.proposals.accept',
    fullyQualifiedName: 'proposals.accept',
    httpMethod: 'post',
    httpPath: '/v1/proposals/{proposalId}/accept',
  },
  {
    clientCallName: 'client.proposals.branches.link',
    fullyQualifiedName: 'proposals.branches.link',
    httpMethod: 'post',
    httpPath: '/v1/proposals/{proposalId}/branches',
  },
  {
    clientCallName: 'client.proposals.branches.unlink',
    fullyQualifiedName: 'proposals.branches.unlink',
    httpMethod: 'delete',
    httpPath: '/v1/proposals/{proposalId}/branches/{branchId}',
  },
  {
    clientCallName: 'client.proposals.mergeEvents.list',
    fullyQualifiedName: 'proposals.mergeEvents.list',
    httpMethod: 'get',
    httpPath: '/v1/proposals/{proposalId}/merge-events',
  },
  {
    clientCallName: 'client.search.entities',
    fullyQualifiedName: 'search.entities',
    httpMethod: 'get',
    httpPath: '/v1/search',
  },
  {
    clientCallName: 'client.search.repositories',
    fullyQualifiedName: 'search.repositories',
    httpMethod: 'get',
    httpPath: '/v1/search/repositories',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
