// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
  mergeEvents: MergeEventsAPI.MergeEvents = new MergeEventsAPI.MergeEvents(this._client);

  /**
   * Creates a new proposal with its own isolated branch. Returns the proposal ID and
   * branch ID for data operations.
   */
  create(repositoryID: string, options?: RequestOptions): APIPromise<ProposalCreateResponse> {
    return this._client.post(path`/v1/repositories/${repositoryID}/proposals`, options);
  }

  /**
   * Retrieves the details of a proposal, including its associated branches and
   * review status.
   */
  retrieve(proposalID: string, options?: RequestOptions): APIPromise<Proposal> {
    return this._client.get(path`/v1/proposals/${proposalID}`, options);
  }

  /**
   * Updates the proposal title, description, or status. Use status transitions to
   * move through the review workflow: draft → open → needs_review → closed.
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
  branchId: string;

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

  updatedAt: string;
}

export interface ProposalAcceptResponse {
  mergeEventId: string;

  success: boolean;
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

Proposals.MergeEvents = MergeEvents;

export declare namespace Proposals {
  export {
    type Proposal as Proposal,
    type ProposalCreateResponse as ProposalCreateResponse,
    type ProposalUpdateResponse as ProposalUpdateResponse,
    type ProposalListResponse as ProposalListResponse,
    type ProposalAcceptResponse as ProposalAcceptResponse,
    type ProposalListResponsesOffsetPage as ProposalListResponsesOffsetPage,
    type ProposalUpdateParams as ProposalUpdateParams,
    type ProposalListParams as ProposalListParams,
    type ProposalAcceptParams as ProposalAcceptParams,
  };

  export {
    MergeEvents as MergeEvents,
    type MergeEventListResponse as MergeEventListResponse,
    type MergeEventListResponsesOffsetPage as MergeEventListResponsesOffsetPage,
    type MergeEventListParams as MergeEventListParams,
  };
}
