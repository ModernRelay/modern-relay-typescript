// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Search entities across repositories
 */
export class Search extends APIResource {
  /**
   * Search for entities across all repositories matching the specified query.
   */
  entities(query: SearchEntitiesParams, options?: RequestOptions): APIPromise<SearchEntitiesResponse> {
    return this._client.get('/v1/search', { query, ...options });
  }

  /**
   * Search for repositories across the account matching the specified query.
   */
  repositories(
    query: SearchRepositoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SearchRepositoriesResponsesOffsetPage, SearchRepositoriesResponse> {
    return this._client.getAPIList('/v1/search/repositories', OffsetPage<SearchRepositoriesResponse>, {
      query,
      ...options,
    });
  }
}

export type SearchRepositoriesResponsesOffsetPage = OffsetPage<SearchRepositoriesResponse>;

export interface SearchEntitiesResponse {
  data: Array<SearchEntitiesResponse.Data>;

  has_more: boolean;
}

export namespace SearchEntitiesResponse {
  export interface Data {
    branchId: string;

    classId: string;

    className: string;

    displayName: string;

    entityId: string;

    repositoryId: string;
  }
}

export interface SearchRepositoriesResponse {
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

  permissions: SearchRepositoriesResponse.Permissions | null;

  saveCount: number;

  slug: string | null;

  storage: 'postgres' | 'turbopuffer';

  supportsFiles: boolean;

  updatedAt: string | null;

  voteCount: number;
}

export namespace SearchRepositoriesResponse {
  export interface Permissions {
    actions: Array<
      'view_repository' | 'edit_repository' | 'delete_repository' | 'manage_branches' | 'manage_permissions'
    >;

    canEdit: boolean;

    canView: boolean;
  }
}

export interface SearchEntitiesParams {
  accountId: string;

  query: string;

  limit?: number;

  mode?: 'fts' | 'fuzzy';
}

export interface SearchRepositoriesParams extends OffsetPageParams {
  contextAccountId?: string;

  ownerAccountId?: string;

  ownerAccountSlug?: string;

  query?: string;

  repositoryId?: string;

  repositorySlug?: string;
}

export declare namespace Search {
  export {
    type SearchEntitiesResponse as SearchEntitiesResponse,
    type SearchRepositoriesResponse as SearchRepositoriesResponse,
    type SearchRepositoriesResponsesOffsetPage as SearchRepositoriesResponsesOffsetPage,
    type SearchEntitiesParams as SearchEntitiesParams,
    type SearchRepositoriesParams as SearchRepositoriesParams,
  };
}
