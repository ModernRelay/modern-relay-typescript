// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create and manage data repositories
 */
export class Repositories extends APIResource {
  /**
   * Creates a new repository. Returns the created repository object.
   *
   * @example
   * ```ts
   * const repository = await client.repositories.create({
   *   accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   name: 'name',
   *   slug: 'slug',
   * });
   * ```
   */
  create(body: RepositoryCreateParams, options?: RequestOptions): APIPromise<RepositoryCreateResponse> {
    return this._client.post('/v1/repositories', { body, ...options });
  }

  /**
   * Retrieves the details of an existing repository.
   *
   * @example
   * ```ts
   * const repository = await client.repositories.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(repositoryID: string, options?: RequestOptions): APIPromise<Repository> {
    return this._client.get(path`/v1/repositories/${repositoryID}`, options);
  }

  /**
   * Updates the specified repository by setting the values of the parameters passed.
   *
   * @example
   * ```ts
   * const repository = await client.repositories.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    repositoryID: string,
    body: RepositoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryUpdateResponse | null> {
    return this._client.patch(path`/v1/repositories/${repositoryID}`, { body, ...options });
  }

  /**
   * Returns a list of repositories for the specified account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const repositoryListResponse of client.repositories.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    accountID: string,
    query: RepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RepositoryListResponsesOffsetPage, RepositoryListResponse> {
    return this._client.getAPIList(
      path`/v1/accounts/${accountID}/repositories`,
      OffsetPage<RepositoryListResponse>,
      { query, ...options },
    );
  }

  /**
   * Permanently deletes a repository. This action cannot be undone.
   *
   * @example
   * ```ts
   * const repository = await client.repositories.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(repositoryID: string, options?: RequestOptions): APIPromise<RepositoryDeleteResponse> {
    return this._client.delete(path`/v1/repositories/${repositoryID}`, options);
  }
}

export type RepositoryListResponsesOffsetPage = OffsetPage<RepositoryListResponse>;

export interface Repository {
  id: string;

  account_id: string;

  created_at: string;

  created_by: string | null;

  description: string | null;

  files_enabled: boolean;

  mainBranchId: string | null;

  name: string;

  skill: string | null;

  slug: string;

  storage: 'postgres' | 'turbopuffer';

  supportsFiles: boolean;

  updated_at: string;

  updated_by: string | null;
}

export interface RepositoryCreateResponse {
  success: boolean;

  branchId?: string;

  repositoryId?: string;
}

export interface RepositoryUpdateResponse {
  id: string;

  account_id: string;

  created_at: string;

  created_by: string | null;

  description: string | null;

  files_enabled: boolean;

  name: string;

  skill: string | null;

  slug: string;

  storage: 'postgres' | 'turbopuffer';

  updated_at: string;

  updated_by: string | null;
}

export interface RepositoryListResponse {
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

  permissions: RepositoryListResponse.Permissions | null;

  saveCount: number;

  slug: string | null;

  storage: 'postgres' | 'turbopuffer';

  supportsFiles: boolean;

  updatedAt: string | null;

  voteCount: number;
}

export namespace RepositoryListResponse {
  export interface Permissions {
    actions: Array<
      'view_repository' | 'edit_repository' | 'delete_repository' | 'manage_branches' | 'manage_permissions'
    >;

    canEdit: boolean;

    canView: boolean;
  }
}

export type RepositoryDeleteResponse = boolean;

export interface RepositoryCreateParams {
  accountId: string;

  name: string;

  slug: string;

  description?: string;

  skill?: string;
}

export interface RepositoryUpdateParams {
  description?: string;

  filesEnabled?: boolean;

  name?: string;

  skill?: string;

  slug?: string;
}

export interface RepositoryListParams extends OffsetPageParams {
  source?: 'all' | 'my' | 'shared' | 'saved';

  userId?: string;
}

export declare namespace Repositories {
  export {
    type Repository as Repository,
    type RepositoryCreateResponse as RepositoryCreateResponse,
    type RepositoryUpdateResponse as RepositoryUpdateResponse,
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryDeleteResponse as RepositoryDeleteResponse,
    type RepositoryListResponsesOffsetPage as RepositoryListResponsesOffsetPage,
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
    type RepositoryListParams as RepositoryListParams,
  };
}
