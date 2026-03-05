// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, query, and search your data
 */
export class Entities extends APIResource {
  /**
   * Creates one or more entity instances of a specified class.
   */
  create(
    branchID: string,
    body: EntityCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntityCreateResponse> {
    return this._client.post(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }

  /**
   * Updates an entity by setting the values of the properties passed.
   */
  update(
    entityID: string,
    params: EntityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntityUpdateResponse> {
    const { branchId, ...body } = params;
    return this._client.patch(path`/v1/branches/${branchId}/entities/${entityID}`, { body, ...options });
  }

  /**
   * Returns a list of entities matching the specified filters. Supports pagination,
   * filtering, and sorting.
   */
  list(
    branchID: string,
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityListResponse> {
    return this._client.get(path`/v1/branches/${branchID}/entities`, { query, ...options });
  }

  /**
   * Deletes one or more entities by their IDs.
   */
  delete(
    branchID: string,
    body: EntityDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EntityDeleteResponse> {
    return this._client.delete(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }

  /**
   * Updates multiple entities by setting the values of the properties passed.
   */
  updateMultiple(
    branchID: string,
    body: EntityUpdateMultipleParams,
    options?: RequestOptions,
  ): APIPromise<EntityUpdateMultipleResponse> {
    return this._client.patch(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }
}

export type EntityCreateResponse = Array<string>;

export interface EntityUpdateResponse {
  success: boolean;
}

export interface EntityListResponse {
  backend: 'postgres' | 'turbopuffer';

  has_more: boolean;

  rows: Array<EntityListResponse.Row>;
}

export namespace EntityListResponse {
  export interface Row {
    classId: string;

    createdAt: string;

    entityId: string;

    properties: { [key: string]: unknown };

    updatedAt: string;

    commentCount?: number | null;

    hasVoted?: boolean | null;

    rank?: number;

    voteCount?: number | null;
  }
}

export type EntityDeleteResponse = number;

export type EntityUpdateMultipleResponse = boolean;

export interface EntityCreateParams {
  /**
   * The class ID for the entities
   */
  classId: string;

  /**
   * Array of entities to create. Each entity is a record mapping property IDs to
   * values.
   */
  entities: Array<{
    [key: string]:
      | string
      | number
      | boolean
      | (string & {})
      | Array<string | number | boolean | (string & {})>
      | { [key: string]: unknown };
  }>;
}

export interface EntityUpdateParams {
  /**
   * Path param
   */
  branchId: string;

  /**
   * Body param
   */
  data: {
    [key: string]:
      | string
      | number
      | boolean
      | (string & {})
      | Array<string | number | boolean | (string & {})>
      | { [key: string]: unknown };
  };

  /**
   * Body param: Clear existing values for properties. Should be true if properties
   * are being updated with new values rather than appended to existing values.
   */
  clearExistingValues?: boolean;
}

export interface EntityListParams {
  /**
   * Class UUID (required for Turbopuffer).
   */
  classId?: string | null;

  /**
   * Property exclusion (blacklist).
   */
  excludeProperties?: Array<string> | null;

  /**
   * Relationship expansion configuration keyed by reference property UUID.
   */
  expand?: { [key: string]: EntityListParams.Expand } | null;

  /**
   * Filter AST or shorthand object syntax.
   */
  filters?:
    | EntityListParams.UnionMember0
    | EntityListParams.UnionMember1
    | EntityListParams.UnionMember2
    | EntityListParams.UnionMember3
    | EntityListParams.UnionMember4
    | null;

  /**
   * Pagination offset.
   */
  offset?: number;

  /**
   * Rank AST.
   */
  rankBy?:
    | EntityListParams.UnionMember0
    | EntityListParams.UnionMember1
    | EntityListParams.UnionMember2
    | EntityListParams.UnionMember3
    | EntityListParams.UnionMember4
    | EntityListParams.UnionMember5
    | EntityListParams.UnionMember6
    | EntityListParams.UnionMember7
    | null;

  /**
   * Property projection (whitelist).
   */
  select?: Array<string> | null;

  /**
   * Max results (default 100, max 1200).
   */
  topK?: number;
}

export namespace EntityListParams {
  export interface Expand {
    /**
     * Filter applied to the related entity/entities.
     */
    filters?:
      | Expand.UnionMember0
      | Expand.UnionMember1
      | Expand.UnionMember2
      | Expand.UnionMember3
      | Expand.UnionMember4;

    /**
     * Limit of expanded related entities (for multi-valued refs).
     */
    limit?: number;

    /**
     * Reference class IDs (needed for Turbopuffer namespace lookup).
     */
    referenceClasses?: Array<string>;

    /**
     * Project only these properties on the expanded entity.
     */
    select?: Array<string>;

    /**
     * Target branch ID for cross-repository references (Postgres expansion extension).
     */
    targetBranchId?: string;
  }

  export namespace Expand {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<
          | UnionMember0.UnionMember0
          | UnionMember0.UnionMember1
          | UnionMember0.UnionMember2
          | UnionMember0.UnionMember3
          | UnionMember0.UnionMember4
        >;
      }

      export namespace UnionMember0 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind?: unknown;

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          field?: unknown;

          kind?: unknown;

          op?: unknown;

          options?: unknown;

          value?: unknown;
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind?: unknown;

          op?: unknown;

          refPropId?: unknown;

          subFilter?: unknown;

          targetBranchId?: unknown;
        }
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<
          | UnionMember1.UnionMember0
          | UnionMember1.UnionMember1
          | UnionMember1.UnionMember2
          | UnionMember1.UnionMember3
          | UnionMember1.UnionMember4
        >;
      }

      export namespace UnionMember1 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind?: unknown;

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          field?: unknown;

          kind?: unknown;

          op?: unknown;

          options?: unknown;

          value?: unknown;
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind?: unknown;

          op?: unknown;

          refPropId?: unknown;

          subFilter?: unknown;

          targetBranchId?: unknown;
        }
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        /**
         * Logical AND (all terms must match).
         */
        term:
          | UnionMember2.UnionMember0
          | UnionMember2.UnionMember1
          | UnionMember2.UnionMember2
          | UnionMember2.UnionMember3
          | UnionMember2.UnionMember4;
      }

      export namespace UnionMember2 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<
          | UnionMember0.UnionMember0
          | UnionMember0.UnionMember1
          | UnionMember0.UnionMember2
          | UnionMember0.UnionMember3
          | UnionMember0.UnionMember4
        >;
      }

      export namespace UnionMember0 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind?: unknown;

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          field?: unknown;

          kind?: unknown;

          op?: unknown;

          options?: unknown;

          value?: unknown;
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind?: unknown;

          op?: unknown;

          refPropId?: unknown;

          subFilter?: unknown;

          targetBranchId?: unknown;
        }
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<
          | UnionMember1.UnionMember0
          | UnionMember1.UnionMember1
          | UnionMember1.UnionMember2
          | UnionMember1.UnionMember3
          | UnionMember1.UnionMember4
        >;
      }

      export namespace UnionMember1 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind?: unknown;

          terms?: unknown;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind?: unknown;

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          field?: unknown;

          kind?: unknown;

          op?: unknown;

          options?: unknown;

          value?: unknown;
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind?: unknown;

          op?: unknown;

          refPropId?: unknown;

          subFilter?: unknown;

          targetBranchId?: unknown;
        }
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        /**
         * Logical AND (all terms must match).
         */
        term:
          | UnionMember2.UnionMember0
          | UnionMember2.UnionMember1
          | UnionMember2.UnionMember2
          | UnionMember2.UnionMember3
          | UnionMember2.UnionMember4;
      }

      export namespace UnionMember2 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<
          | UnionMember0.UnionMember0
          | UnionMember0.UnionMember1
          | UnionMember0.UnionMember2
          | UnionMember0.UnionMember3
          | UnionMember0.UnionMember4
        >;
      }

      export namespace UnionMember0 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<
          | UnionMember1.UnionMember0
          | UnionMember1.UnionMember1
          | UnionMember1.UnionMember2
          | UnionMember1.UnionMember3
          | UnionMember1.UnionMember4
        >;
      }

      export namespace UnionMember1 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        /**
         * Logical AND (all terms must match).
         */
        term:
          | UnionMember2.UnionMember0
          | UnionMember2.UnionMember1
          | UnionMember2.UnionMember2
          | UnionMember2.UnionMember3
          | UnionMember2.UnionMember4;
      }

      export namespace UnionMember2 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<
          | UnionMember0.UnionMember0
          | UnionMember0.UnionMember1
          | UnionMember0.UnionMember2
          | UnionMember0.UnionMember3
          | UnionMember0.UnionMember4
        >;
      }

      export namespace UnionMember0 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<
          | UnionMember1.UnionMember0
          | UnionMember1.UnionMember1
          | UnionMember1.UnionMember2
          | UnionMember1.UnionMember3
          | UnionMember1.UnionMember4
        >;
      }

      export namespace UnionMember1 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Field reference (property UUID or system field).
           */
          field?: unknown;

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown;
        }

        export namespace UnionMember3 {
          /**
           * Options for token filters.
           */
          export interface Options {
            last_as_prefix?: unknown;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        /**
         * Logical AND (all terms must match).
         */
        term:
          | UnionMember2.UnionMember0
          | UnionMember2.UnionMember1
          | UnionMember2.UnionMember2
          | UnionMember2.UnionMember3
          | UnionMember2.UnionMember4;
      }

      export namespace UnionMember2 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }
    }
  }

  /**
   * Logical AND (all terms must match).
   */
  export interface UnionMember0 {
    kind: 'and';

    terms: Array<
      | UnionMember0.UnionMember0
      | UnionMember0.UnionMember1
      | UnionMember0.UnionMember2
      | UnionMember0.UnionMember3
      | UnionMember0.UnionMember4
    >;
  }

  export namespace UnionMember0 {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: unknown | Array<unknown>;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          kind?: unknown;

          propertyId?: unknown;
        }

        export interface UnionMember1 {
          field?: unknown;

          kind?: unknown;
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: unknown | Array<unknown>;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          kind?: unknown;

          propertyId?: unknown;
        }

        export interface UnionMember1 {
          field?: unknown;

          kind?: unknown;
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }
  }

  /**
   * Logical OR (at least one term must match).
   */
  export interface UnionMember1 {
    kind: 'or';

    terms: Array<
      | UnionMember1.UnionMember0
      | UnionMember1.UnionMember1
      | UnionMember1.UnionMember2
      | UnionMember1.UnionMember3
      | UnionMember1.UnionMember4
    >;
  }

  export namespace UnionMember1 {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: unknown | Array<unknown>;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          kind?: unknown;

          propertyId?: unknown;
        }

        export interface UnionMember1 {
          field?: unknown;

          kind?: unknown;
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: unknown | Array<unknown>;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          kind?: unknown;

          propertyId?: unknown;
        }

        export interface UnionMember1 {
          field?: unknown;

          kind?: unknown;
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }
  }

  /**
   * Logical NOT (negates the inner filter).
   */
  export interface UnionMember2 {
    kind: 'not';

    /**
     * Logical AND (all terms must match).
     */
    term:
      | UnionMember2.UnionMember0
      | UnionMember2.UnionMember1
      | UnionMember2.UnionMember2
      | UnionMember2.UnionMember3
      | UnionMember2.UnionMember4;
  }

  export namespace UnionMember2 {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }
  }

  /**
   * Atomic condition filter: field + operator (+ value/options).
   */
  export interface UnionMember3 {
    /**
     * Field reference (property UUID or system field).
     */
    field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

    kind: 'cond';

    /**
     * Filter operator (backend support varies).
     */
    op:
      | 'Eq'
      | 'NotEq'
      | 'In'
      | 'NotIn'
      | 'Lt'
      | 'Lte'
      | 'Gt'
      | 'Gte'
      | 'AnyLt'
      | 'AnyLte'
      | 'AnyGt'
      | 'AnyGte'
      | 'Contains'
      | 'NotContains'
      | 'ContainsAny'
      | 'NotContainsAny'
      | 'Glob'
      | 'NotGlob'
      | 'IGlob'
      | 'NotIGlob'
      | 'Regex'
      | 'ContainsAllTokens'
      | 'ContainsTokenSequence'
      | 'ContainsAll'
      | 'StartsWith'
      | 'EndsWith'
      | 'IsNull'
      | 'NotNull';

    /**
     * Options for token filters.
     */
    options?: UnionMember3.Options;

    value?: string | number | boolean | Array<string | number | boolean | null> | null;
  }

  export namespace UnionMember3 {
    export interface UnionMember0 {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface UnionMember1 {
      /**
       * System field reference (backend support varies).
       */
      field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

      /**
       * Reference to a system field.
       */
      kind: 'system';
    }

    /**
     * Options for token filters.
     */
    export interface Options {
      /**
       * Treat the last token as a prefix (Turbopuffer token filters).
       */
      last_as_prefix?: boolean;
    }
  }

  /**
   * Relational filter (Postgres-only): filter an entity by properties of its
   * referenced entity/entities.
   */
  export interface UnionMember4 {
    kind: 'rel';

    /**
     * Relational filter op.
     */
    op: 'Rel' | 'NotRel';

    /**
     * Reference property UUID to traverse.
     */
    refPropId: string;

    /**
     * Filter on related entity.
     */
    subFilter:
      | UnionMember4.UnionMember0
      | UnionMember4.UnionMember1
      | UnionMember4.UnionMember2
      | UnionMember4.UnionMember3
      | UnionMember4.UnionMember4;

    /**
     * Optional cross-repository target branch ID (Postgres-only relational filter
     * extension).
     */
    targetBranchId?: string;
  }

  export namespace UnionMember4 {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }
  }

  /**
   * Order results by a field (attribute ordering).
   */
  export interface UnionMember0 {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Field reference (property UUID or system field).
     */
    field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

    kind: 'order';
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface UnionMember1 {
      /**
       * System field reference (backend support varies).
       */
      field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

      /**
       * Reference to a system field.
       */
      kind: 'system';
    }
  }

  /**
   * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
   */
  export interface UnionMember1 {
    kind: 'vector';

    /**
     * Vector ranking mode (kNN requires filters in Turbopuffer).
     */
    mode: 'ANN' | 'kNN';

    /**
     * Embedding model (default: text-embedding-3-small).
     */
    model?: string;

    /**
     * Text to embed (provide this OR vector).
     */
    query?: string;

    /**
     * Raw embedding vector (provide this OR query).
     */
    vector?: Array<number>;
  }

  /**
   * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
   */
  export interface UnionMember2 {
    /**
     * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
     * search).
     */
    field: UnionMember2.Field;

    kind: 'bm25';

    query: string;

    /**
     * BM25 options (Turbopuffer).
     */
    options?: UnionMember2.Options;
  }

  export namespace UnionMember2 {
    /**
     * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
     * search).
     */
    export interface Field {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    /**
     * BM25 options (Turbopuffer).
     */
    export interface Options {
      last_as_prefix?: boolean;
    }
  }

  /**
   * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
   */
  export interface UnionMember3 {
    kind: 'fts';

    query: string;

    /**
     * FTS target field (property or $fts).
     */
    target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

    /**
     * Optional prefix options (Postgres only; Turbopuffer should use vector search).
     */
    options?: UnionMember3.Options;

    /**
     * FTS parser (default: plain). Options: plain (all words), fts (websearch with
     * OR/-/quotes), phrase (exact sequence), tsquery (raw).
     */
    parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
  }

  export namespace UnionMember3 {
    export interface UnionMember0 {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface UnionMember1 {
      /**
       * System field reference (backend support varies).
       */
      field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

      /**
       * Reference to a system field.
       */
      kind: 'system';
    }

    /**
     * Optional prefix options (Postgres only; Turbopuffer should use vector search).
     */
    export interface Options {
      last_as_prefix?: boolean;
    }
  }

  /**
   * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
   * others 0.0.
   */
  export interface UnionMember4 {
    /**
     * Logical AND (all terms must match).
     */
    filter:
      | UnionMember4.UnionMember0
      | UnionMember4.UnionMember1
      | UnionMember4.UnionMember2
      | UnionMember4.UnionMember3
      | UnionMember4.UnionMember4;

    kind: 'filterBoost';
  }

  export namespace UnionMember4 {
    /**
     * Logical AND (all terms must match).
     */
    export interface UnionMember0 {
      kind: 'and';

      terms: Array<
        | UnionMember0.UnionMember0
        | UnionMember0.UnionMember1
        | UnionMember0.UnionMember2
        | UnionMember0.UnionMember3
        | UnionMember0.UnionMember4
      >;
    }

    export namespace UnionMember0 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical OR (at least one term must match).
     */
    export interface UnionMember1 {
      kind: 'or';

      terms: Array<
        | UnionMember1.UnionMember0
        | UnionMember1.UnionMember1
        | UnionMember1.UnionMember2
        | UnionMember1.UnionMember3
        | UnionMember1.UnionMember4
      >;
    }

    export namespace UnionMember1 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<unknown> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Logical NOT (negates the inner filter).
     */
    export interface UnionMember2 {
      kind: 'not';

      /**
       * Logical AND (all terms must match).
       */
      term:
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4;
    }

    export namespace UnionMember2 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface UnionMember3 {
      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      kind: 'cond';

      /**
       * Filter operator (backend support varies).
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'ContainsAllTokens'
        | 'ContainsTokenSequence'
        | 'ContainsAll'
        | 'StartsWith'
        | 'EndsWith'
        | 'IsNull'
        | 'NotNull';

      /**
       * Options for token filters.
       */
      options?: UnionMember3.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Options for token filters.
       */
      export interface Options {
        /**
         * Treat the last token as a prefix (Turbopuffer token filters).
         */
        last_as_prefix?: boolean;
      }
    }

    /**
     * Relational filter (Postgres-only): filter an entity by properties of its
     * referenced entity/entities.
     */
    export interface UnionMember4 {
      kind: 'rel';

      /**
       * Relational filter op.
       */
      op: 'Rel' | 'NotRel';

      /**
       * Reference property UUID to traverse.
       */
      refPropId: string;

      /**
       * Filter on related entity.
       */
      subFilter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      /**
       * Optional cross-repository target branch ID (Postgres-only relational filter
       * extension).
       */
      targetBranchId?: string;
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }
  }

  /**
   * Sum of rank terms (optionally weighted).
   */
  export interface UnionMember5 {
    kind: 'sum';

    terms: Array<UnionMember5.Term>;
  }

  export namespace UnionMember5 {
    export interface Term {
      /**
       * Order results by a field (attribute ordering).
       */
      term:
        | Term.UnionMember0
        | Term.UnionMember1
        | Term.UnionMember2
        | Term.UnionMember3
        | Term.UnionMember4
        | Term.UnionMember5
        | Term.UnionMember6
        | Term.UnionMember7;

      weight?: number;
    }

    export namespace Term {
      /**
       * Order results by a field (attribute ordering).
       */
      export interface UnionMember0 {
        /**
         * Sort direction.
         */
        direction: 'asc' | 'desc';

        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

        kind: 'order';
      }

      export namespace UnionMember0 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }
      }

      /**
       * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
       */
      export interface UnionMember1 {
        kind: 'vector';

        /**
         * Vector ranking mode (kNN requires filters in Turbopuffer).
         */
        mode: 'ANN' | 'kNN';

        /**
         * Embedding model (default: text-embedding-3-small).
         */
        model?: string;

        /**
         * Text to embed (provide this OR vector).
         */
        query?: string;

        /**
         * Raw embedding vector (provide this OR query).
         */
        vector?: Array<number>;
      }

      /**
       * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
       */
      export interface UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        field: UnionMember2.Field;

        kind: 'bm25';

        query: string;

        /**
         * BM25 options (Turbopuffer).
         */
        options?: UnionMember2.Options;
      }

      export namespace UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        export interface Field {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        /**
         * BM25 options (Turbopuffer).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
       */
      export interface UnionMember3 {
        kind: 'fts';

        query: string;

        /**
         * FTS target field (property or $fts).
         */
        target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        options?: UnionMember3.Options;

        /**
         * FTS parser (default: plain). Options: plain (all words), fts (websearch with
         * OR/-/quotes), phrase (exact sequence), tsquery (raw).
         */
        parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
       * others 0.0.
       */
      export interface UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        filter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        kind: 'filterBoost';
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Sum of rank terms (optionally weighted).
       */
      export interface UnionMember5 {
        kind: 'sum';

        terms: Array<UnionMember5.Term>;
      }

      export namespace UnionMember5 {
        export interface Term {
          /**
           * Order results by a field (attribute ordering).
           */
          term:
            | Term.UnionMember0
            | Term.UnionMember1
            | Term.UnionMember2
            | Term.UnionMember3
            | Term.UnionMember4
            | Term.UnionMember5
            | Term.UnionMember6
            | Term.UnionMember7;

          weight?: number;
        }

        export namespace Term {
          /**
           * Order results by a field (attribute ordering).
           */
          export interface UnionMember0 {
            direction?: unknown;

            field?: unknown;

            kind?: unknown;
          }

          /**
           * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
           */
          export interface UnionMember1 {
            kind?: unknown;

            mode?: unknown;

            model?: unknown;

            query?: unknown;

            vector?: unknown;
          }

          /**
           * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
           */
          export interface UnionMember2 {
            field?: unknown;

            kind?: unknown;

            options?: unknown;

            query?: unknown;
          }

          /**
           * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
           */
          export interface UnionMember3 {
            kind?: unknown;

            options?: unknown;

            parser?: unknown;

            query?: unknown;

            target?: unknown;
          }

          /**
           * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
           * others 0.0.
           */
          export interface UnionMember4 {
            filter?: unknown;

            kind?: unknown;
          }

          /**
           * Sum of rank terms (optionally weighted).
           */
          export interface UnionMember5 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Max of rank terms.
           */
          export interface UnionMember6 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Multiply a rank term by a weight (boost).
           */
          export interface UnionMember7 {
            kind?: unknown;

            term?: unknown;

            weight?: unknown;
          }
        }
      }

      /**
       * Max of rank terms.
       */
      export interface UnionMember6 {
        kind: 'max';

        terms: Array<UnionMember6.Term>;
      }

      export namespace UnionMember6 {
        export interface Term {
          /**
           * Order results by a field (attribute ordering).
           */
          term:
            | Term.UnionMember0
            | Term.UnionMember1
            | Term.UnionMember2
            | Term.UnionMember3
            | Term.UnionMember4
            | Term.UnionMember5
            | Term.UnionMember6
            | Term.UnionMember7;

          weight?: number;
        }

        export namespace Term {
          /**
           * Order results by a field (attribute ordering).
           */
          export interface UnionMember0 {
            direction?: unknown;

            field?: unknown;

            kind?: unknown;
          }

          /**
           * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
           */
          export interface UnionMember1 {
            kind?: unknown;

            mode?: unknown;

            model?: unknown;

            query?: unknown;

            vector?: unknown;
          }

          /**
           * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
           */
          export interface UnionMember2 {
            field?: unknown;

            kind?: unknown;

            options?: unknown;

            query?: unknown;
          }

          /**
           * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
           */
          export interface UnionMember3 {
            kind?: unknown;

            options?: unknown;

            parser?: unknown;

            query?: unknown;

            target?: unknown;
          }

          /**
           * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
           * others 0.0.
           */
          export interface UnionMember4 {
            filter?: unknown;

            kind?: unknown;
          }

          /**
           * Sum of rank terms (optionally weighted).
           */
          export interface UnionMember5 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Max of rank terms.
           */
          export interface UnionMember6 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Multiply a rank term by a weight (boost).
           */
          export interface UnionMember7 {
            kind?: unknown;

            term?: unknown;

            weight?: unknown;
          }
        }
      }

      /**
       * Multiply a rank term by a weight (boost).
       */
      export interface UnionMember7 {
        kind: 'product';

        /**
         * Order results by a field (attribute ordering).
         */
        term:
          | UnionMember7.UnionMember0
          | UnionMember7.UnionMember1
          | UnionMember7.UnionMember2
          | UnionMember7.UnionMember3
          | UnionMember7.UnionMember4
          | UnionMember7.UnionMember5
          | UnionMember7.UnionMember6
          | UnionMember7.UnionMember7;

        weight: number;
      }

      export namespace UnionMember7 {
        /**
         * Order results by a field (attribute ordering).
         */
        export interface UnionMember0 {
          /**
           * Sort direction.
           */
          direction: 'asc' | 'desc';

          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

          kind: 'order';
        }

        export namespace UnionMember0 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }
        }

        /**
         * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
         */
        export interface UnionMember1 {
          kind: 'vector';

          /**
           * Vector ranking mode (kNN requires filters in Turbopuffer).
           */
          mode: 'ANN' | 'kNN';

          /**
           * Embedding model (default: text-embedding-3-small).
           */
          model?: string;

          /**
           * Text to embed (provide this OR vector).
           */
          query?: string;

          /**
           * Raw embedding vector (provide this OR query).
           */
          vector?: Array<number>;
        }

        /**
         * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
         */
        export interface UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          field: UnionMember2.Field;

          kind: 'bm25';

          query: string;

          /**
           * BM25 options (Turbopuffer).
           */
          options?: UnionMember2.Options;
        }

        export namespace UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          export interface Field {
            /**
             * Reference to a property UUID.
             */
            kind: 'property';

            /**
             * Property UUID (matches repository schema property IDs).
             */
            propertyId: string;
          }

          /**
           * BM25 options (Turbopuffer).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
         */
        export interface UnionMember3 {
          kind: 'fts';

          query: string;

          /**
           * FTS target field (property or $fts).
           */
          target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          options?: UnionMember3.Options;

          /**
           * FTS parser (default: plain). Options: plain (all words), fts (websearch with
           * OR/-/quotes), phrase (exact sequence), tsquery (raw).
           */
          parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
         * others 0.0.
         */
        export interface UnionMember4 {
          kind: 'filterBoost';

          filter?: unknown;
        }

        /**
         * Sum of rank terms (optionally weighted).
         */
        export interface UnionMember5 {
          kind: 'sum';

          terms: Array<UnionMember5.Term>;
        }

        export namespace UnionMember5 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Max of rank terms.
         */
        export interface UnionMember6 {
          kind: 'max';

          terms: Array<UnionMember6.Term>;
        }

        export namespace UnionMember6 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Multiply a rank term by a weight (boost).
         */
        export interface UnionMember7 {
          kind: 'product';

          weight: number;

          term?: unknown;
        }
      }
    }
  }

  /**
   * Max of rank terms.
   */
  export interface UnionMember6 {
    kind: 'max';

    terms: Array<UnionMember6.Term>;
  }

  export namespace UnionMember6 {
    export interface Term {
      /**
       * Order results by a field (attribute ordering).
       */
      term:
        | Term.UnionMember0
        | Term.UnionMember1
        | Term.UnionMember2
        | Term.UnionMember3
        | Term.UnionMember4
        | Term.UnionMember5
        | Term.UnionMember6
        | Term.UnionMember7;

      weight?: number;
    }

    export namespace Term {
      /**
       * Order results by a field (attribute ordering).
       */
      export interface UnionMember0 {
        /**
         * Sort direction.
         */
        direction: 'asc' | 'desc';

        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

        kind: 'order';
      }

      export namespace UnionMember0 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }
      }

      /**
       * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
       */
      export interface UnionMember1 {
        kind: 'vector';

        /**
         * Vector ranking mode (kNN requires filters in Turbopuffer).
         */
        mode: 'ANN' | 'kNN';

        /**
         * Embedding model (default: text-embedding-3-small).
         */
        model?: string;

        /**
         * Text to embed (provide this OR vector).
         */
        query?: string;

        /**
         * Raw embedding vector (provide this OR query).
         */
        vector?: Array<number>;
      }

      /**
       * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
       */
      export interface UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        field: UnionMember2.Field;

        kind: 'bm25';

        query: string;

        /**
         * BM25 options (Turbopuffer).
         */
        options?: UnionMember2.Options;
      }

      export namespace UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        export interface Field {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        /**
         * BM25 options (Turbopuffer).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
       */
      export interface UnionMember3 {
        kind: 'fts';

        query: string;

        /**
         * FTS target field (property or $fts).
         */
        target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        options?: UnionMember3.Options;

        /**
         * FTS parser (default: plain). Options: plain (all words), fts (websearch with
         * OR/-/quotes), phrase (exact sequence), tsquery (raw).
         */
        parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
       * others 0.0.
       */
      export interface UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        filter:
          | UnionMember4.UnionMember0
          | UnionMember4.UnionMember1
          | UnionMember4.UnionMember2
          | UnionMember4.UnionMember3
          | UnionMember4.UnionMember4;

        kind: 'filterBoost';
      }

      export namespace UnionMember4 {
        /**
         * Logical AND (all terms must match).
         */
        export interface UnionMember0 {
          kind: 'and';

          terms: Array<unknown>;
        }

        /**
         * Logical OR (at least one term must match).
         */
        export interface UnionMember1 {
          kind: 'or';

          terms: Array<unknown>;
        }

        /**
         * Logical NOT (negates the inner filter).
         */
        export interface UnionMember2 {
          kind: 'not';

          term?: unknown;
        }

        /**
         * Atomic condition filter: field + operator (+ value/options).
         */
        export interface UnionMember3 {
          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          kind: 'cond';

          /**
           * Filter operator (backend support varies).
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'ContainsAllTokens'
            | 'ContainsTokenSequence'
            | 'ContainsAll'
            | 'StartsWith'
            | 'EndsWith'
            | 'IsNull'
            | 'NotNull';

          /**
           * Options for token filters.
           */
          options?: UnionMember3.Options;

          value?: unknown | Array<unknown>;
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Options for token filters.
           */
          export interface Options {
            /**
             * Treat the last token as a prefix (Turbopuffer token filters).
             */
            last_as_prefix?: boolean;
          }
        }

        /**
         * Relational filter (Postgres-only): filter an entity by properties of its
         * referenced entity/entities.
         */
        export interface UnionMember4 {
          kind: 'rel';

          /**
           * Relational filter op.
           */
          op: 'Rel' | 'NotRel';

          /**
           * Reference property UUID to traverse.
           */
          refPropId: string;

          /**
           * Filter on related entity.
           */
          subFilter?: unknown;

          /**
           * Optional cross-repository target branch ID (Postgres-only relational filter
           * extension).
           */
          targetBranchId?: string;
        }
      }

      /**
       * Sum of rank terms (optionally weighted).
       */
      export interface UnionMember5 {
        kind: 'sum';

        terms: Array<UnionMember5.Term>;
      }

      export namespace UnionMember5 {
        export interface Term {
          /**
           * Order results by a field (attribute ordering).
           */
          term:
            | Term.UnionMember0
            | Term.UnionMember1
            | Term.UnionMember2
            | Term.UnionMember3
            | Term.UnionMember4
            | Term.UnionMember5
            | Term.UnionMember6
            | Term.UnionMember7;

          weight?: number;
        }

        export namespace Term {
          /**
           * Order results by a field (attribute ordering).
           */
          export interface UnionMember0 {
            direction?: unknown;

            field?: unknown;

            kind?: unknown;
          }

          /**
           * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
           */
          export interface UnionMember1 {
            kind?: unknown;

            mode?: unknown;

            model?: unknown;

            query?: unknown;

            vector?: unknown;
          }

          /**
           * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
           */
          export interface UnionMember2 {
            field?: unknown;

            kind?: unknown;

            options?: unknown;

            query?: unknown;
          }

          /**
           * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
           */
          export interface UnionMember3 {
            kind?: unknown;

            options?: unknown;

            parser?: unknown;

            query?: unknown;

            target?: unknown;
          }

          /**
           * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
           * others 0.0.
           */
          export interface UnionMember4 {
            filter?: unknown;

            kind?: unknown;
          }

          /**
           * Sum of rank terms (optionally weighted).
           */
          export interface UnionMember5 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Max of rank terms.
           */
          export interface UnionMember6 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Multiply a rank term by a weight (boost).
           */
          export interface UnionMember7 {
            kind?: unknown;

            term?: unknown;

            weight?: unknown;
          }
        }
      }

      /**
       * Max of rank terms.
       */
      export interface UnionMember6 {
        kind: 'max';

        terms: Array<UnionMember6.Term>;
      }

      export namespace UnionMember6 {
        export interface Term {
          /**
           * Order results by a field (attribute ordering).
           */
          term:
            | Term.UnionMember0
            | Term.UnionMember1
            | Term.UnionMember2
            | Term.UnionMember3
            | Term.UnionMember4
            | Term.UnionMember5
            | Term.UnionMember6
            | Term.UnionMember7;

          weight?: number;
        }

        export namespace Term {
          /**
           * Order results by a field (attribute ordering).
           */
          export interface UnionMember0 {
            direction?: unknown;

            field?: unknown;

            kind?: unknown;
          }

          /**
           * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
           */
          export interface UnionMember1 {
            kind?: unknown;

            mode?: unknown;

            model?: unknown;

            query?: unknown;

            vector?: unknown;
          }

          /**
           * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
           */
          export interface UnionMember2 {
            field?: unknown;

            kind?: unknown;

            options?: unknown;

            query?: unknown;
          }

          /**
           * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
           */
          export interface UnionMember3 {
            kind?: unknown;

            options?: unknown;

            parser?: unknown;

            query?: unknown;

            target?: unknown;
          }

          /**
           * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
           * others 0.0.
           */
          export interface UnionMember4 {
            filter?: unknown;

            kind?: unknown;
          }

          /**
           * Sum of rank terms (optionally weighted).
           */
          export interface UnionMember5 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Max of rank terms.
           */
          export interface UnionMember6 {
            kind?: unknown;

            terms?: unknown;
          }

          /**
           * Multiply a rank term by a weight (boost).
           */
          export interface UnionMember7 {
            kind?: unknown;

            term?: unknown;

            weight?: unknown;
          }
        }
      }

      /**
       * Multiply a rank term by a weight (boost).
       */
      export interface UnionMember7 {
        kind: 'product';

        /**
         * Order results by a field (attribute ordering).
         */
        term:
          | UnionMember7.UnionMember0
          | UnionMember7.UnionMember1
          | UnionMember7.UnionMember2
          | UnionMember7.UnionMember3
          | UnionMember7.UnionMember4
          | UnionMember7.UnionMember5
          | UnionMember7.UnionMember6
          | UnionMember7.UnionMember7;

        weight: number;
      }

      export namespace UnionMember7 {
        /**
         * Order results by a field (attribute ordering).
         */
        export interface UnionMember0 {
          /**
           * Sort direction.
           */
          direction: 'asc' | 'desc';

          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

          kind: 'order';
        }

        export namespace UnionMember0 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }
        }

        /**
         * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
         */
        export interface UnionMember1 {
          kind: 'vector';

          /**
           * Vector ranking mode (kNN requires filters in Turbopuffer).
           */
          mode: 'ANN' | 'kNN';

          /**
           * Embedding model (default: text-embedding-3-small).
           */
          model?: string;

          /**
           * Text to embed (provide this OR vector).
           */
          query?: string;

          /**
           * Raw embedding vector (provide this OR query).
           */
          vector?: Array<number>;
        }

        /**
         * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
         */
        export interface UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          field: UnionMember2.Field;

          kind: 'bm25';

          query: string;

          /**
           * BM25 options (Turbopuffer).
           */
          options?: UnionMember2.Options;
        }

        export namespace UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          export interface Field {
            /**
             * Reference to a property UUID.
             */
            kind: 'property';

            /**
             * Property UUID (matches repository schema property IDs).
             */
            propertyId: string;
          }

          /**
           * BM25 options (Turbopuffer).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
         */
        export interface UnionMember3 {
          kind: 'fts';

          query: string;

          /**
           * FTS target field (property or $fts).
           */
          target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          options?: UnionMember3.Options;

          /**
           * FTS parser (default: plain). Options: plain (all words), fts (websearch with
           * OR/-/quotes), phrase (exact sequence), tsquery (raw).
           */
          parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
         * others 0.0.
         */
        export interface UnionMember4 {
          kind: 'filterBoost';

          filter?: unknown;
        }

        /**
         * Sum of rank terms (optionally weighted).
         */
        export interface UnionMember5 {
          kind: 'sum';

          terms: Array<UnionMember5.Term>;
        }

        export namespace UnionMember5 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Max of rank terms.
         */
        export interface UnionMember6 {
          kind: 'max';

          terms: Array<UnionMember6.Term>;
        }

        export namespace UnionMember6 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Multiply a rank term by a weight (boost).
         */
        export interface UnionMember7 {
          kind: 'product';

          weight: number;

          term?: unknown;
        }
      }
    }
  }

  /**
   * Multiply a rank term by a weight (boost).
   */
  export interface UnionMember7 {
    kind: 'product';

    /**
     * Order results by a field (attribute ordering).
     */
    term:
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember2
      | UnionMember7.UnionMember3
      | UnionMember7.UnionMember4
      | UnionMember7.UnionMember5
      | UnionMember7.UnionMember6
      | UnionMember7.UnionMember7;

    weight: number;
  }

  export namespace UnionMember7 {
    /**
     * Order results by a field (attribute ordering).
     */
    export interface UnionMember0 {
      /**
       * Sort direction.
       */
      direction: 'asc' | 'desc';

      /**
       * Field reference (property UUID or system field).
       */
      field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

      kind: 'order';
    }

    export namespace UnionMember0 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }
    }

    /**
     * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
     */
    export interface UnionMember1 {
      kind: 'vector';

      /**
       * Vector ranking mode (kNN requires filters in Turbopuffer).
       */
      mode: 'ANN' | 'kNN';

      /**
       * Embedding model (default: text-embedding-3-small).
       */
      model?: string;

      /**
       * Text to embed (provide this OR vector).
       */
      query?: string;

      /**
       * Raw embedding vector (provide this OR query).
       */
      vector?: Array<number>;
    }

    /**
     * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
     */
    export interface UnionMember2 {
      /**
       * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
       * search).
       */
      field: UnionMember2.Field;

      kind: 'bm25';

      query: string;

      /**
       * BM25 options (Turbopuffer).
       */
      options?: UnionMember2.Options;
    }

    export namespace UnionMember2 {
      /**
       * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
       * search).
       */
      export interface Field {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      /**
       * BM25 options (Turbopuffer).
       */
      export interface Options {
        last_as_prefix?: boolean;
      }
    }

    /**
     * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
     */
    export interface UnionMember3 {
      kind: 'fts';

      query: string;

      /**
       * FTS target field (property or $fts).
       */
      target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

      /**
       * Optional prefix options (Postgres only; Turbopuffer should use vector search).
       */
      options?: UnionMember3.Options;

      /**
       * FTS parser (default: plain). Options: plain (all words), fts (websearch with
       * OR/-/quotes), phrase (exact sequence), tsquery (raw).
       */
      parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface UnionMember1 {
        /**
         * System field reference (backend support varies).
         */
        field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

        /**
         * Reference to a system field.
         */
        kind: 'system';
      }

      /**
       * Optional prefix options (Postgres only; Turbopuffer should use vector search).
       */
      export interface Options {
        last_as_prefix?: boolean;
      }
    }

    /**
     * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
     * others 0.0.
     */
    export interface UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      filter:
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4;

      kind: 'filterBoost';
    }

    export namespace UnionMember4 {
      /**
       * Logical AND (all terms must match).
       */
      export interface UnionMember0 {
        kind: 'and';

        terms: Array<unknown>;
      }

      /**
       * Logical OR (at least one term must match).
       */
      export interface UnionMember1 {
        kind: 'or';

        terms: Array<unknown>;
      }

      /**
       * Logical NOT (negates the inner filter).
       */
      export interface UnionMember2 {
        kind: 'not';

        term?: unknown;
      }

      /**
       * Atomic condition filter: field + operator (+ value/options).
       */
      export interface UnionMember3 {
        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        kind: 'cond';

        /**
         * Filter operator (backend support varies).
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'ContainsAllTokens'
          | 'ContainsTokenSequence'
          | 'ContainsAll'
          | 'StartsWith'
          | 'EndsWith'
          | 'IsNull'
          | 'NotNull';

        /**
         * Options for token filters.
         */
        options?: UnionMember3.Options;

        value?: string | number | boolean | Array<string | number | boolean | null> | null;
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Options for token filters.
         */
        export interface Options {
          /**
           * Treat the last token as a prefix (Turbopuffer token filters).
           */
          last_as_prefix?: boolean;
        }
      }

      /**
       * Relational filter (Postgres-only): filter an entity by properties of its
       * referenced entity/entities.
       */
      export interface UnionMember4 {
        kind: 'rel';

        /**
         * Relational filter op.
         */
        op: 'Rel' | 'NotRel';

        /**
         * Reference property UUID to traverse.
         */
        refPropId: string;

        /**
         * Filter on related entity.
         */
        subFilter?: unknown;

        /**
         * Optional cross-repository target branch ID (Postgres-only relational filter
         * extension).
         */
        targetBranchId?: string;
      }
    }

    /**
     * Sum of rank terms (optionally weighted).
     */
    export interface UnionMember5 {
      kind: 'sum';

      terms: Array<UnionMember5.Term>;
    }

    export namespace UnionMember5 {
      export interface Term {
        /**
         * Order results by a field (attribute ordering).
         */
        term:
          | Term.UnionMember0
          | Term.UnionMember1
          | Term.UnionMember2
          | Term.UnionMember3
          | Term.UnionMember4
          | Term.UnionMember5
          | Term.UnionMember6
          | Term.UnionMember7;

        weight?: number;
      }

      export namespace Term {
        /**
         * Order results by a field (attribute ordering).
         */
        export interface UnionMember0 {
          /**
           * Sort direction.
           */
          direction: 'asc' | 'desc';

          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

          kind: 'order';
        }

        export namespace UnionMember0 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }
        }

        /**
         * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
         */
        export interface UnionMember1 {
          kind: 'vector';

          /**
           * Vector ranking mode (kNN requires filters in Turbopuffer).
           */
          mode: 'ANN' | 'kNN';

          /**
           * Embedding model (default: text-embedding-3-small).
           */
          model?: string;

          /**
           * Text to embed (provide this OR vector).
           */
          query?: string;

          /**
           * Raw embedding vector (provide this OR query).
           */
          vector?: Array<number>;
        }

        /**
         * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
         */
        export interface UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          field: UnionMember2.Field;

          kind: 'bm25';

          query: string;

          /**
           * BM25 options (Turbopuffer).
           */
          options?: UnionMember2.Options;
        }

        export namespace UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          export interface Field {
            /**
             * Reference to a property UUID.
             */
            kind: 'property';

            /**
             * Property UUID (matches repository schema property IDs).
             */
            propertyId: string;
          }

          /**
           * BM25 options (Turbopuffer).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
         */
        export interface UnionMember3 {
          kind: 'fts';

          query: string;

          /**
           * FTS target field (property or $fts).
           */
          target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          options?: UnionMember3.Options;

          /**
           * FTS parser (default: plain). Options: plain (all words), fts (websearch with
           * OR/-/quotes), phrase (exact sequence), tsquery (raw).
           */
          parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
         * others 0.0.
         */
        export interface UnionMember4 {
          kind: 'filterBoost';

          filter?: unknown;
        }

        /**
         * Sum of rank terms (optionally weighted).
         */
        export interface UnionMember5 {
          kind: 'sum';

          terms: Array<UnionMember5.Term>;
        }

        export namespace UnionMember5 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Max of rank terms.
         */
        export interface UnionMember6 {
          kind: 'max';

          terms: Array<UnionMember6.Term>;
        }

        export namespace UnionMember6 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Multiply a rank term by a weight (boost).
         */
        export interface UnionMember7 {
          kind: 'product';

          weight: number;

          term?: unknown;
        }
      }
    }

    /**
     * Max of rank terms.
     */
    export interface UnionMember6 {
      kind: 'max';

      terms: Array<UnionMember6.Term>;
    }

    export namespace UnionMember6 {
      export interface Term {
        /**
         * Order results by a field (attribute ordering).
         */
        term:
          | Term.UnionMember0
          | Term.UnionMember1
          | Term.UnionMember2
          | Term.UnionMember3
          | Term.UnionMember4
          | Term.UnionMember5
          | Term.UnionMember6
          | Term.UnionMember7;

        weight?: number;
      }

      export namespace Term {
        /**
         * Order results by a field (attribute ordering).
         */
        export interface UnionMember0 {
          /**
           * Sort direction.
           */
          direction: 'asc' | 'desc';

          /**
           * Field reference (property UUID or system field).
           */
          field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

          kind: 'order';
        }

        export namespace UnionMember0 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }
        }

        /**
         * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
         */
        export interface UnionMember1 {
          kind: 'vector';

          /**
           * Vector ranking mode (kNN requires filters in Turbopuffer).
           */
          mode: 'ANN' | 'kNN';

          /**
           * Embedding model (default: text-embedding-3-small).
           */
          model?: string;

          /**
           * Text to embed (provide this OR vector).
           */
          query?: string;

          /**
           * Raw embedding vector (provide this OR query).
           */
          vector?: Array<number>;
        }

        /**
         * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
         */
        export interface UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          field: UnionMember2.Field;

          kind: 'bm25';

          query: string;

          /**
           * BM25 options (Turbopuffer).
           */
          options?: UnionMember2.Options;
        }

        export namespace UnionMember2 {
          /**
           * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
           * search).
           */
          export interface Field {
            /**
             * Reference to a property UUID.
             */
            kind: 'property';

            /**
             * Property UUID (matches repository schema property IDs).
             */
            propertyId: string;
          }

          /**
           * BM25 options (Turbopuffer).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
         */
        export interface UnionMember3 {
          kind: 'fts';

          query: string;

          /**
           * FTS target field (property or $fts).
           */
          target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          options?: UnionMember3.Options;

          /**
           * FTS parser (default: plain). Options: plain (all words), fts (websearch with
           * OR/-/quotes), phrase (exact sequence), tsquery (raw).
           */
          parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
        }

        export namespace UnionMember3 {
          export interface UnionMember0 {
            kind?: unknown;

            propertyId?: unknown;
          }

          export interface UnionMember1 {
            field?: unknown;

            kind?: unknown;
          }

          /**
           * Optional prefix options (Postgres only; Turbopuffer should use vector search).
           */
          export interface Options {
            last_as_prefix?: boolean;
          }
        }

        /**
         * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
         * others 0.0.
         */
        export interface UnionMember4 {
          kind: 'filterBoost';

          filter?: unknown;
        }

        /**
         * Sum of rank terms (optionally weighted).
         */
        export interface UnionMember5 {
          kind: 'sum';

          terms: Array<UnionMember5.Term>;
        }

        export namespace UnionMember5 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Max of rank terms.
         */
        export interface UnionMember6 {
          kind: 'max';

          terms: Array<UnionMember6.Term>;
        }

        export namespace UnionMember6 {
          export interface Term {
            term?: unknown;

            weight?: unknown;
          }
        }

        /**
         * Multiply a rank term by a weight (boost).
         */
        export interface UnionMember7 {
          kind: 'product';

          weight: number;

          term?: unknown;
        }
      }
    }

    /**
     * Multiply a rank term by a weight (boost).
     */
    export interface UnionMember7 {
      kind: 'product';

      /**
       * Order results by a field (attribute ordering).
       */
      term:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      weight: number;
    }

    export namespace UnionMember7 {
      /**
       * Order results by a field (attribute ordering).
       */
      export interface UnionMember0 {
        /**
         * Sort direction.
         */
        direction: 'asc' | 'desc';

        /**
         * Field reference (property UUID or system field).
         */
        field: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

        kind: 'order';
      }

      export namespace UnionMember0 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }
      }

      /**
       * Vector ranking (ANN or kNN). Provide either raw vector or query string to embed.
       */
      export interface UnionMember1 {
        kind: 'vector';

        /**
         * Vector ranking mode (kNN requires filters in Turbopuffer).
         */
        mode: 'ANN' | 'kNN';

        /**
         * Embedding model (default: text-embedding-3-small).
         */
        model?: string;

        /**
         * Text to embed (provide this OR vector).
         */
        query?: string;

        /**
         * Raw embedding vector (provide this OR query).
         */
        vector?: Array<number>;
      }

      /**
       * BM25 property-level ranking. Turbopuffer: only on indexed fields, prefer vector.
       */
      export interface UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        field: UnionMember2.Field;

        kind: 'bm25';

        query: string;

        /**
         * BM25 options (Turbopuffer).
         */
        options?: UnionMember2.Options;
      }

      export namespace UnionMember2 {
        /**
         * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
         * search).
         */
        export interface Field {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        /**
         * BM25 options (Turbopuffer).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * FTS ranking (Postgres ts_rank). Turbopuffer: prefer vector search over BM25.
       */
      export interface UnionMember3 {
        kind: 'fts';

        query: string;

        /**
         * FTS target field (property or $fts).
         */
        target: UnionMember3.UnionMember0 | UnionMember3.UnionMember1;

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        options?: UnionMember3.Options;

        /**
         * FTS parser (default: plain). Options: plain (all words), fts (websearch with
         * OR/-/quotes), phrase (exact sequence), tsquery (raw).
         */
        parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          /**
           * Reference to a property UUID.
           */
          kind: 'property';

          /**
           * Property UUID (matches repository schema property IDs).
           */
          propertyId: string;
        }

        export interface UnionMember1 {
          /**
           * System field reference (backend support varies).
           */
          field: '$id' | '$class_id' | '$created_at' | '$updated_at' | '$votes' | '$comments' | '$fts';

          /**
           * Reference to a system field.
           */
          kind: 'system';
        }

        /**
         * Optional prefix options (Postgres only; Turbopuffer should use vector search).
         */
        export interface Options {
          last_as_prefix?: boolean;
        }
      }

      /**
       * Rank-by-filter boost (Turbopuffer): documents matching the filter get score 1.0,
       * others 0.0.
       */
      export interface UnionMember4 {
        kind: 'filterBoost';

        filter?: unknown;
      }

      /**
       * Sum of rank terms (optionally weighted).
       */
      export interface UnionMember5 {
        kind: 'sum';

        terms: Array<UnionMember5.Term>;
      }

      export namespace UnionMember5 {
        export interface Term {
          term?: unknown;

          weight?: number;
        }
      }

      /**
       * Max of rank terms.
       */
      export interface UnionMember6 {
        kind: 'max';

        terms: Array<UnionMember6.Term>;
      }

      export namespace UnionMember6 {
        export interface Term {
          term?: unknown;

          weight?: number;
        }
      }

      /**
       * Multiply a rank term by a weight (boost).
       */
      export interface UnionMember7 {
        kind: 'product';

        weight: number;

        term?: unknown;
      }
    }
  }
}

export interface EntityDeleteParams {
  entityIds: Array<string>;
}

export interface EntityUpdateMultipleParams {
  entityIds: Array<string>;

  properties: {
    [key: string]:
      | string
      | number
      | boolean
      | (string & {})
      | Array<string | number | boolean | (string & {})>
      | { [key: string]: unknown };
  };
}

export declare namespace Entities {
  export {
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
