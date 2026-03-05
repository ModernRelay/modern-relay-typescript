// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Create, query, and search your data
 */
export class Search extends APIResource {
  /**
   * Searches for entities matching the specified query.
   */
  perform(query: SearchPerformParams, options?: RequestOptions): APIPromise<SearchPerformResponse> {
    return this._client.get('/v1/search', { query, ...options });
  }
}

export interface SearchPerformResponse {
  data: Array<SearchPerformResponse.Data>;

  has_more: boolean;
}

export namespace SearchPerformResponse {
  export interface Data {
    classId: string;

    className: string;

    displayName: string;

    entityId: string;
  }
}

export interface SearchPerformParams {
  accountId: string;

  query: string;

  limit?: number;

  mode?: 'fts' | 'fuzzy';
}

export declare namespace Search {
  export {
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}
