// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Review workflows for collaborative data contributions. Proposals isolate changes on branches for human review before merging.
 */
export class MergeEvents extends APIResource {
  /**
   * Returns a paginated list of merge events for the specified proposal, showing the
   * audit trail of accepted changes.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mergeEventListResponse of client.proposals.mergeEvents.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    proposalID: string,
    query: MergeEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MergeEventListResponsesOffsetPage, MergeEventListResponse> {
    return this._client.getAPIList(
      path`/v1/proposals/${proposalID}/merge-events`,
      OffsetPage<MergeEventListResponse>,
      { query, ...options },
    );
  }
}

export type MergeEventListResponsesOffsetPage = OffsetPage<MergeEventListResponse>;

export interface MergeEventListResponse {
  id: string;

  branch_id: string;

  created_at: string;

  created_by: string | null;

  proposal_id: string;

  repository_id: string;
}

export interface MergeEventListParams extends OffsetPageParams {
  branchId?: string;
}

export declare namespace MergeEvents {
  export {
    type MergeEventListResponse as MergeEventListResponse,
    type MergeEventListResponsesOffsetPage as MergeEventListResponsesOffsetPage,
    type MergeEventListParams as MergeEventListParams,
  };
}
