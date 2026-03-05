// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create and manage data repositories
 */
export class Accounts extends APIResource {
  /**
   * Returns a list of repositories for the specified account.
   */
  listRepositories(
    accountID: string,
    query: AccountListRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListRepositoriesResponse> {
    return this._client.get(path`/v1/accounts/${accountID}/repositories`, { query, ...options });
  }
}

export interface AccountListRepositoriesResponse {
  data: Array<AccountListRepositoriesResponse.Data>;

  has_more: boolean;
}

export namespace AccountListRepositoriesResponse {
  export interface Data {
    id: string;

    branchCount: number;

    createdAt: string;

    description: string | null;

    filesEnabled: boolean;

    isPinned: boolean | null;

    isSaved: boolean | null;

    mainBranchId: string | null;

    name: string;

    ownerAccountId: string;

    ownerAccountName: string | null;

    ownerAccountSlug: string | null;

    permissions: Data.Permissions | null;

    saveCount: number;

    slug: string | null;

    storage: 'postgres' | 'turbopuffer';

    supportsFiles: boolean;

    updatedAt: string | null;

    voteCount: number;
  }

  export namespace Data {
    export interface Permissions {
      actions: Array<
        'view_repository' | 'edit_repository' | 'delete_repository' | 'manage_branches' | 'manage_permissions'
      >;

      canEdit: boolean;

      canView: boolean;
    }
  }
}

export interface AccountListRepositoriesParams {
  limit?: number;

  offset?: number;

  source?: 'all' | 'my' | 'shared' | 'saved';

  userId?: string;
}

export declare namespace Accounts {
  export {
    type AccountListRepositoriesResponse as AccountListRepositoriesResponse,
    type AccountListRepositoriesParams as AccountListRepositoriesParams,
  };
}
