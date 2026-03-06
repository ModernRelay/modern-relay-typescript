// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Define classes and properties for your data model
 */
export class Schema extends APIResource {
  /**
   * Call this first to discover the data model before any data operations. Returns
   * class definitions, property definitions, and bidirectional UUID lookup maps. Use
   * `classIds` (apiName → UUID) and `propertyIds` ('ClassName.propApiName' → UUID)
   * to resolve human-readable names to UUIDs for queries.
   */
  retrieve(branchID: string, options?: RequestOptions): APIPromise<SchemaRetrieveResponse> {
    return this._client.get(path`/v1/branches/${branchID}/schema`, options);
  }
}

export interface SchemaRetrieveResponse {
  /**
   * Map of class apiName → class UUID. Use to resolve names to IDs for queries.
   */
  classIds: { [key: string]: string };

  /**
   * Map of class UUID → apiName. Reverse lookup.
   */
  classIdToApiName: { [key: string]: string };

  /**
   * Map of class UUID → plural display name
   */
  classIdToPluralName: { [key: string]: string };

  /**
   * Map of class UUID → singular display name
   */
  classIdToSingularName: { [key: string]: string };

  /**
   * Map of "ClassName.propertyApiName" → property UUID. Use to resolve property
   * names to IDs.
   */
  propertyIds: { [key: string]: string };

  /**
   * Map of property UUID → apiName. Reverse lookup.
   */
  propertyIdToApiName: { [key: string]: string };

  /**
   * Complete schema with class and property definitions keyed by UUID
   */
  schema: SchemaRetrieveResponse.Schema;

  queryDsl?: SchemaRetrieveResponse.QueryDsl;
}

export namespace SchemaRetrieveResponse {
  /**
   * Complete schema with class and property definitions keyed by UUID
   */
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

export declare namespace Schema {
  export { type SchemaRetrieveResponse as SchemaRetrieveResponse };
}
