// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Repositories extends APIResource {
  /**
   * Creates a new repository. Returns the created repository object.
   */
  create(body: RepositoryCreateParams, options?: RequestOptions): APIPromise<RepositoryCreateResponse> {
    return this._client.post('/v1/repositories', { body, ...options });
  }

  /**
   * Retrieves the details of an existing repository.
   */
  retrieve(repositoryID: string, options?: RequestOptions): APIPromise<RepositoryRetrieveResponse> {
    return this._client.get(path`/v1/repositories/${repositoryID}`, options);
  }

  /**
   * Updates the specified repository by setting the values of the parameters passed.
   */
  update(
    repositoryID: string,
    body: RepositoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryUpdateResponse | null> {
    return this._client.patch(path`/v1/repositories/${repositoryID}`, { body, ...options });
  }

  /**
   * Permanently deletes a repository. This action cannot be undone.
   */
  delete(
    repositoryID: string,
    body?: RepositoryDeleteParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<RepositoryDeleteResponse> {
    return this._client.delete(path`/v1/repositories/${repositoryID}`, { body, ...options });
  }

  /**
   * Creates a new branch from the repository's main data.
   */
  createBranch(
    repositoryID: string,
    body: RepositoryCreateBranchParams,
    options?: RequestOptions,
  ): APIPromise<RepositoryCreateBranchResponse> {
    return this._client.post(path`/v1/repositories/${repositoryID}/branches`, { body, ...options });
  }
}

export interface RepositoryCreateResponse {
  success: boolean;

  branchId?: string;

  repositoryId?: string;
}

export interface RepositoryRetrieveResponse {
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

export type RepositoryDeleteResponse = boolean;

export interface RepositoryCreateBranchResponse {
  id: string;

  base_branch_id: string | null;

  created_at: string;

  created_by: string | null;

  is_main: boolean;

  name: string;

  repository_id: string;

  updated_at: string;

  updated_by: string | null;
}

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

export interface RepositoryDeleteParams {}

export interface RepositoryCreateBranchParams {
  name: string;
}

export declare namespace Repositories {
  export {
    type RepositoryCreateResponse as RepositoryCreateResponse,
    type RepositoryRetrieveResponse as RepositoryRetrieveResponse,
    type RepositoryUpdateResponse as RepositoryUpdateResponse,
    type RepositoryDeleteResponse as RepositoryDeleteResponse,
    type RepositoryCreateBranchResponse as RepositoryCreateBranchResponse,
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
    type RepositoryDeleteParams as RepositoryDeleteParams,
    type RepositoryCreateBranchParams as RepositoryCreateBranchParams,
  };
}
