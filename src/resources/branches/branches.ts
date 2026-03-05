// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from './entities';
import {
  Entities,
  EntityCreateParams,
  EntityCreateResponse,
  EntityDeleteParams,
  EntityDeleteResponse,
  EntityListParams,
  EntityListResponse,
  EntityUpdateMultipleParams,
  EntityUpdateMultipleResponse,
  EntityUpdateParams,
  EntityUpdateResponse,
} from './entities';
import * as PropertiesAPI from './properties';
import {
  Properties as PropertiesAPIProperties,
  PropertyCreateParams,
  PropertyCreateResponse,
  PropertyDeleteParams,
  PropertyDeleteResponse,
} from './properties';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Branches extends APIResource {
  properties: PropertiesAPI.Properties = new PropertiesAPI.Properties(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);

  /**
   * Permanently deletes a branch and all its associated facts. Cannot delete
   * proposals with child proposals or the main proposal.
   */
  delete(
    branchID: string,
    body?: BranchDeleteParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<BranchDeleteResponse> {
    return this._client.delete(path`/v1/branches/${branchID}`, { body, ...options });
  }

  /**
   * Creates a new class in the schema.
   */
  createClass(branchID: string, body: BranchCreateClassParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/branches/${branchID}/classes`, { body, ...options });
  }

  /**
   * Returns a list of Branches that are direct children of the specified proposal.
   */
  listChildren(
    branchID: string,
    query: BranchListChildrenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BranchListChildrenResponse> {
    return this._client.get(path`/v1/branches/${branchID}/children`, { query, ...options });
  }

  /**
   * Retrieves the complete schema definition for a branch, including all classes and
   * properties.
   */
  retrieveSchema(branchID: string, options?: RequestOptions): APIPromise<BranchRetrieveSchemaResponse> {
    return this._client.get(path`/v1/branches/${branchID}/schema`, options);
  }
}

export type BranchDeleteResponse = boolean;

export type BranchCreateClassResponse = string;

export interface BranchListChildrenResponse {
  data: Array<BranchListChildrenResponse.Data>;

  has_more: boolean;
}

export namespace BranchListChildrenResponse {
  export interface Data {
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
}

export interface BranchRetrieveSchemaResponse {
  classIds: { [key: string]: string };

  classIdToApiName: { [key: string]: string };

  classIdToPluralName: { [key: string]: string };

  classIdToSingularName: { [key: string]: string };

  propertyIds: { [key: string]: string };

  propertyIdToApiName: { [key: string]: string };

  schema: BranchRetrieveSchemaResponse.Schema;

  queryDsl?: BranchRetrieveSchemaResponse.QueryDsl;
}

export namespace BranchRetrieveSchemaResponse {
  export interface Schema {
    classes: { [key: string]: Schema.Classes };

    properties: { [key: string]: Schema.Properties };
  }

  export namespace Schema {
    export interface Classes {
      apiName: string;

      pluralName: string;

      singularName: string;

      description?: string;

      /**
       * Marks system-managed classes that cannot be deleted by users
       */
      isSystem?: boolean;
    }

    export interface Properties {
      apiName: string;

      /**
       * Which classes this property belongs to
       */
      domain: Array<string>;

      /**
       * The human readable display name of the property (Capitalize the first letter)
       * (e.g. 'Last Name', 'Email', 'Age', etc.)
       */
      name: string;

      range: 'string' | 'number' | 'boolean' | 'datetime' | 'reference';

      default?: unknown;

      /**
       * Provide a description for the property if it's not obvious from the name.
       */
      description?: string | null;

      displayName?: boolean;

      multiValued?: boolean;

      /**
       * Which classes this property references
       */
      referenceClasses?: Array<string>;

      required?: boolean;

      targetBranchId?: string;

      unique?: boolean;
    }
  }

  export interface QueryDsl {
    filterOperators: Array<string>;

    logicalOperators: Array<string>;

    rankCombinators: Array<string>;

    rankTypes: Array<string>;

    relationalOperators: Array<string>;

    sortDirections: Array<string>;
  }
}

export interface BranchDeleteParams {}

export interface BranchCreateClassParams {
  classInfo: BranchCreateClassParams.ClassInfo;
}

export namespace BranchCreateClassParams {
  export interface ClassInfo {
    apiName: string;

    pluralName: string;

    singularName: string;

    description?: string;

    /**
     * Marks system-managed classes that cannot be deleted by users
     */
    isSystem?: boolean;
  }
}

export interface BranchListChildrenParams {
  limit?: number;

  offset?: number;
}

Branches.Properties = PropertiesAPIProperties;
Branches.Entities = Entities;

export declare namespace Branches {
  export {
    type BranchDeleteResponse as BranchDeleteResponse,
    type BranchCreateClassResponse as BranchCreateClassResponse,
    type BranchListChildrenResponse as BranchListChildrenResponse,
    type BranchRetrieveSchemaResponse as BranchRetrieveSchemaResponse,
    type BranchDeleteParams as BranchDeleteParams,
    type BranchCreateClassParams as BranchCreateClassParams,
    type BranchListChildrenParams as BranchListChildrenParams,
  };

  export {
    PropertiesAPIProperties as Properties,
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };

  export {
    Entities as Entities,
    type EntityCreateResponse as EntityCreateResponse,
    type EntityUpdateResponse as EntityUpdateResponse,
    type EntityListResponse as EntityListResponse,
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityUpdateMultipleResponse as EntityUpdateMultipleResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityUpdateMultipleParams as EntityUpdateMultipleParams,
  };
}
