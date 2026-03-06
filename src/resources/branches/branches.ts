// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClassesAPI from './classes';
import {
  ClassCreateBatchParams,
  ClassCreateBatchResponse,
  ClassCreateParams,
  ClassCreateResponse,
  ClassDeleteParams,
  ClassDeleteResponse,
  ClassUpdateParams,
  Classes,
} from './classes';
import * as EntitiesAPI from './entities';
import {
  Entities,
  EntityCreateParams,
  EntityCreateResponse,
  EntityDeleteParams,
  EntityDeleteResponse,
  EntityListBackreferencesParams,
  EntityListBackreferencesResponse,
  EntityListBackreferencesResponsesOffsetPage,
  EntityListParams,
  EntityListResponse,
  EntityListResponsesOffsetPage,
  EntityQueryParams,
  EntityQueryResponse,
  EntityRetrieveParams,
  EntityRetrieveResponse,
  EntityUpdateBatchParams,
  EntityUpdateBatchResponse,
  EntityUpdateParams,
  EntityUpdateResponse,
} from './entities';
import * as PropertiesAPI from './properties';
import {
  Properties,
  PropertyCreateBatchParams,
  PropertyCreateBatchResponse,
  PropertyCreateParams,
  PropertyCreateResponse,
  PropertyDeleteParams,
  PropertyDeleteResponse,
  PropertyUpdateParams,
} from './properties';
import * as SchemaAPI from './schema';
import { Schema, SchemaRetrieveResponse } from './schema';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Propose, review, and merge changes to data
 */
export class Branches extends APIResource {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
  classes: ClassesAPI.Classes = new ClassesAPI.Classes(this._client);
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);

  /**
   * Creates a new branch from the repository's main data.
   */
  create(repositoryID: string, body: BranchCreateParams, options?: RequestOptions): APIPromise<Branch> {
    return this._client.post(path`/v1/repositories/${repositoryID}/branches`, { body, ...options });
  }

  /**
   * Retrieves the details of an existing branch.
   */
  retrieve(branchID: string, options?: RequestOptions): APIPromise<Branch> {
    return this._client.get(path`/v1/branches/${branchID}`, options);
  }

  /**
   * Returns a paginated list of all branches for the specified repository.
   */
  list(
    repositoryID: string,
    query: BranchListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BranchesOffsetPage, Branch> {
    return this._client.getAPIList(path`/v1/repositories/${repositoryID}/branches`, OffsetPage<Branch>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a branch and all its associated facts. Cannot delete
   * branches with children or the main branch.
   */
  delete(branchID: string, options?: RequestOptions): APIPromise<BranchDeleteResponse> {
    return this._client.delete(path`/v1/branches/${branchID}`, options);
  }

  /**
   * Returns the set of entity changes on this branch compared to its parent. Shows
   * added and removed property values per entity.
   */
  diff(
    branchID: string,
    query: BranchDiffParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BranchDiffResponse> {
    return this._client.get(path`/v1/branches/${branchID}/diff`, { query, ...options });
  }

  /**
   * Returns a list of branches that are direct children of the specified branch.
   */
  listChildren(
    branchID: string,
    query: BranchListChildrenParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BranchesOffsetPage, Branch> {
    return this._client.getAPIList(path`/v1/branches/${branchID}/children`, OffsetPage<Branch>, {
      query,
      ...options,
    });
  }

  /**
   * Merges all changes from the source branch into the target branch. The source
   * branch ID comes from the URL path; the target branch ID must be provided in the
   * request body.
   */
  merge(sourceBranchID: string, body: BranchMergeParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/branches/${sourceBranchID}/merge`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BranchesOffsetPage = OffsetPage<Branch>;

export interface Branch {
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

export type BranchDeleteResponse = boolean;

export type BranchDiffResponse = { [key: string]: BranchDiffResponse.item };

export namespace BranchDiffResponse {
  export interface item {
    added: {
      [key: string]: Array<
        | string
        | number
        | boolean
        | (string & {})
        | Array<string | number | boolean | (string & {})>
        | { [key: string]: unknown }
      >;
    };

    removed: {
      [key: string]: Array<
        | string
        | number
        | boolean
        | (string & {})
        | Array<string | number | boolean | (string & {})>
        | { [key: string]: unknown }
      >;
    };
  }
}

export interface BranchCreateParams {
  name: string;
}

export interface BranchListParams extends OffsetPageParams {}

export interface BranchDiffParams {
  classId?: string;
}

export interface BranchListChildrenParams extends OffsetPageParams {}

export interface BranchMergeParams {
  targetBranchId: string;
}

Branches.Schema = Schema;
Branches.Classes = Classes;
Branches.Properties = Properties;
Branches.Entities = Entities;

export declare namespace Branches {
  export {
    type Branch as Branch,
    type BranchDeleteResponse as BranchDeleteResponse,
    type BranchDiffResponse as BranchDiffResponse,
    type BranchesOffsetPage as BranchesOffsetPage,
    type BranchCreateParams as BranchCreateParams,
    type BranchListParams as BranchListParams,
    type BranchDiffParams as BranchDiffParams,
    type BranchListChildrenParams as BranchListChildrenParams,
    type BranchMergeParams as BranchMergeParams,
  };

  export { Schema as Schema, type SchemaRetrieveResponse as SchemaRetrieveResponse };

  export {
    Classes as Classes,
    type ClassCreateResponse as ClassCreateResponse,
    type ClassDeleteResponse as ClassDeleteResponse,
    type ClassCreateBatchResponse as ClassCreateBatchResponse,
    type ClassCreateParams as ClassCreateParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassDeleteParams as ClassDeleteParams,
    type ClassCreateBatchParams as ClassCreateBatchParams,
  };

  export {
    Properties as Properties,
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateBatchResponse as PropertyCreateBatchResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
  };

  export {
    Entities as Entities,
    type EntityCreateResponse as EntityCreateResponse,
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityUpdateResponse as EntityUpdateResponse,
    type EntityListResponse as EntityListResponse,
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityListBackreferencesResponse as EntityListBackreferencesResponse,
    type EntityQueryResponse as EntityQueryResponse,
    type EntityUpdateBatchResponse as EntityUpdateBatchResponse,
    type EntityListResponsesOffsetPage as EntityListResponsesOffsetPage,
    type EntityListBackreferencesResponsesOffsetPage as EntityListBackreferencesResponsesOffsetPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityRetrieveParams as EntityRetrieveParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityListBackreferencesParams as EntityListBackreferencesParams,
    type EntityQueryParams as EntityQueryParams,
    type EntityUpdateBatchParams as EntityUpdateBatchParams,
  };
}
