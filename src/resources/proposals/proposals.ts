// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BranchesAPI from './branches';
import { BranchLinkParams, BranchUnlinkParams, Branches } from './branches';
import * as MergeEventsAPI from './merge-events';
import {
  MergeEventListParams,
  MergeEventListResponse,
  MergeEventListResponsesOffsetPage,
  MergeEvents,
} from './merge-events';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Review workflows for collaborative data contributions. Proposals isolate changes on branches for human review before merging.
 */
export class Proposals extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);
  mergeEvents: MergeEventsAPI.MergeEvents = new MergeEventsAPI.MergeEvents(this._client);

  /**
   * Creates a new proposal from existing branches. Accepts an array of branch IDs
   * (one per repository). Returns the proposal ID.
   *
   * @example
   * ```ts
   * const proposal = await client.proposals.create({
   *   branchIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   * });
   * ```
   */
  create(body: ProposalCreateParams, options?: RequestOptions): APIPromise<ProposalCreateResponse> {
    return this._client.post('/v1/proposals', { body, ...options });
  }

  /**
   * Retrieves the details of a proposal, including its associated branches and
   * review status.
   *
   * @example
   * ```ts
   * const proposal = await client.proposals.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(proposalID: string, options?: RequestOptions): APIPromise<Proposal> {
    return this._client.get(path`/v1/proposals/${proposalID}`, options);
  }

  /**
   * Updates the proposal title, description, or status. Use status transitions to
   * move through the review workflow: draft → open → needs_review → closed.
   *
   * @example
   * ```ts
   * const proposal = await client.proposals.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { repositoryId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  update(
    proposalID: string,
    body: ProposalUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProposalUpdateResponse> {
    return this._client.patch(path`/v1/proposals/${proposalID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of proposals for the specified repository. Filter by
   * status to find proposals needing review.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const proposalListResponse of client.proposals.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    repositoryID: string,
    query: ProposalListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProposalListResponsesOffsetPage, ProposalListResponse> {
    return this._client.getAPIList(
      path`/v1/repositories/${repositoryID}/proposals`,
      OffsetPage<ProposalListResponse>,
      { query, ...options },
    );
  }

  /**
   * Permanently deletes a draft proposal. Only proposals in draft status can be
   * deleted.
   *
   * @example
   * ```ts
   * await client.proposals.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(proposalID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/proposals/${proposalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Merges the proposal's branch changes into the parent branch. Creates a merge
   * event for audit. The proposal remains open for further contributions.
   *
   * @example
   * ```ts
   * const response = await client.proposals.accept(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  accept(
    proposalID: string,
    body: ProposalAcceptParams,
    options?: RequestOptions,
  ): APIPromise<ProposalAcceptResponse> {
    return this._client.post(path`/v1/proposals/${proposalID}/accept`, { body, ...options });
  }
}

export type ProposalListResponsesOffsetPage = OffsetPage<ProposalListResponse>;

export interface Proposal {
  id: string;

  account_id: string;

  branches: Array<Proposal.Branch>;

  created_at: string;

  created_by: string | null;

  description: string | null;

  status: 'draft' | 'open' | 'needs_review' | 'closed';

  title: string | null;

  updated_at: string;
}

export namespace Proposal {
  export interface Branch {
    branch_id: string;

    proposal_id: string;

    branch_name?: string;

    has_pending_changes?: boolean;

    last_merge_event_id?: string | null;

    repository_id?: string;

    repository_name?: string;

    repository_slug?: string;
  }
}

export interface ProposalCreateResponse {
  proposalId: string;
}

export interface ProposalUpdateResponse {
  id: string;

  account_id: string;

  created_at: string;

  created_by: string | null;

  description: string | null;

  status: 'draft' | 'open' | 'needs_review' | 'closed';

  title: string | null;

  updated_at: string;
}

export interface ProposalListResponse {
  id: string;

  branchId: string;

  branchName: string;

  canAccept: boolean;

  canEdit: boolean;

  createdAt: string;

  createdBy: string | null;

  description: string | null;

  hasPendingChanges: boolean;

  isMerged: boolean;

  isMine: boolean;

  status: 'draft' | 'open' | 'needs_review' | 'closed';

  title: string | null;

  totalBranchCount: number;

  updatedAt: string;
}

export interface ProposalAcceptResponse {
  mergeEventId: string;

  success: boolean;
}

export interface ProposalCreateParams {
  branchIds: Array<string>;
}

export interface ProposalUpdateParams {
  repositoryId: string;

  branchId?: string;

  description?: string;

  status?: 'draft' | 'open' | 'needs_review' | 'closed';

  title?: string;
}

export interface ProposalListParams extends OffsetPageParams {
  status?: Array<'draft' | 'open' | 'needs_review' | 'closed'>;
}

export interface ProposalAcceptParams {
  branchId: string;
}

Proposals.Branches = Branches;
Proposals.MergeEvents = MergeEvents;

export declare namespace Proposals {
  export {
    type Proposal as Proposal,
    type ProposalCreateResponse as ProposalCreateResponse,
    type ProposalUpdateResponse as ProposalUpdateResponse,
    type ProposalListResponse as ProposalListResponse,
    type ProposalAcceptResponse as ProposalAcceptResponse,
    type ProposalListResponsesOffsetPage as ProposalListResponsesOffsetPage,
    type ProposalCreateParams as ProposalCreateParams,
    type ProposalUpdateParams as ProposalUpdateParams,
    type ProposalListParams as ProposalListParams,
    type ProposalAcceptParams as ProposalAcceptParams,
  };

  export {
    Branches as Branches,
    type BranchLinkParams as BranchLinkParams,
    type BranchUnlinkParams as BranchUnlinkParams,
  };

  export {
    MergeEvents as MergeEvents,
    type MergeEventListResponse as MergeEventListResponse,
    type MergeEventListResponsesOffsetPage as MergeEventListResponsesOffsetPage,
    type MergeEventListParams as MergeEventListParams,
  };
}
