// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Review workflows for collaborative data contributions. Proposals isolate changes on branches for human review before merging.
 */
export class Branches extends APIResource {
  /**
   * Links an existing branch to a proposal. One branch per repository per proposal.
   *
   * @example
   * ```ts
   * await client.proposals.branches.link(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  link(proposalID: string, body: BranchLinkParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/proposals/${proposalID}/branches`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Removes a branch from a proposal without deleting the branch. Cannot remove the
   * last branch.
   *
   * @example
   * ```ts
   * await client.proposals.branches.unlink(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { proposalId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  unlink(branchID: string, params: BranchUnlinkParams, options?: RequestOptions): APIPromise<void> {
    const { proposalId } = params;
    return this._client.delete(path`/v1/proposals/${proposalId}/branches/${branchID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BranchLinkParams {
  branchId: string;
}

export interface BranchUnlinkParams {
  proposalId: string;
}

export declare namespace Branches {
  export { type BranchLinkParams as BranchLinkParams, type BranchUnlinkParams as BranchUnlinkParams };
}
