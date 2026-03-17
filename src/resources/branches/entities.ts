// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Create, query, and search your data
 */
export class Entities extends APIResource {
  /**
   * Creates one or more entity instances of a specified class.
   *
   * @example
   * ```ts
   * const entities = await client.branches.entities.create(
   *   'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *   {
   *     classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *     entities: [{ foo: 'string' }],
   *   },
   * );
   * ```
   */
  create(
    branchID: string,
    body: EntityCreateParams,
    options?: RequestOptions,
  ): APIPromise<EntityCreateResponse> {
    return this._client.post(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }

  /**
   * Returns one or more entities by their IDs, including all property values.
   *
   * @example
   * ```ts
   * const entities = await client.branches.entities.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { entityIds: ['x'] },
   * );
   * ```
   */
  retrieve(
    branchID: string,
    body: EntityRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EntityRetrieveResponse> {
    return this._client.post(path`/v1/branches/${branchID}/entities/retrieve`, { body, ...options });
  }

  /**
   * Updates an entity by setting the values of the properties passed.
   *
   * @example
   * ```ts
   * const entity = await client.branches.entities.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     data: { foo: 'string' },
   *   },
   * );
   * ```
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
   * Returns a paginated list of entities for a given class, ordered by creation
   * date. For filtering, search, and ranking, use POST /entities/query.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityListResponse of client.branches.entities.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { classId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    branchID: string,
    query: EntityListParams,
    options?: RequestOptions,
  ): PagePromise<EntityListResponsesOffsetPage, EntityListResponse> {
    return this._client.getAPIList(path`/v1/branches/${branchID}/entities`, OffsetPage<EntityListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes one or more entities by their IDs.
   *
   * @example
   * ```ts
   * const entity = await client.branches.entities.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'] },
   * );
   * ```
   */
  delete(
    branchID: string,
    body: EntityDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EntityDeleteResponse> {
    return this._client.delete(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }

  /**
   * Returns entities that reference the specified entity via reference properties.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityListBackreferencesResponse of client.branches.entities.listBackreferences(
   *   'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *   { branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listBackreferences(
    entityID: string,
    params: EntityListBackreferencesParams,
    options?: RequestOptions,
  ): PagePromise<EntityListBackreferencesResponsesOffsetPage, EntityListBackreferencesResponse> {
    const { branchId, ...query } = params;
    return this._client.getAPIList(
      path`/v1/branches/${branchId}/entities/${entityID}/references`,
      OffsetPage<EntityListBackreferencesResponse>,
      { query, ...options },
    );
  }

  /**
   * Query entities with filters, full-text search, vector search, ranking, and
   * relationship expansion. Supports the full query DSL. Call GET /schema first to
   * discover class and property UUIDs.
   *
   * @example
   * ```ts
   * const response = await client.branches.entities.query(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  query(
    branchID: string,
    body: EntityQueryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityQueryResponse> {
    return this._client.post(path`/v1/branches/${branchID}/entities/query`, { body, ...options });
  }

  /**
   * Applies the same property values to multiple entities at once.
   *
   * @example
   * ```ts
   * const response = await client.branches.entities.updateBatch(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   *     properties: { foo: 'string' },
   *   },
   * );
   * ```
   */
  updateBatch(
    branchID: string,
    body: EntityUpdateBatchParams,
    options?: RequestOptions,
  ): APIPromise<EntityUpdateBatchResponse> {
    return this._client.patch(path`/v1/branches/${branchID}/entities`, { body, ...options });
  }
}

export type EntityListResponsesOffsetPage = OffsetPage<EntityListResponse>;

export type EntityListBackreferencesResponsesOffsetPage = OffsetPage<EntityListBackreferencesResponse>;

export type EntityCreateResponse = Array<string>;

export type EntityRetrieveResponse = Array<EntityRetrieveResponse.EntityRetrieveResponseItem>;

export namespace EntityRetrieveResponse {
  export interface EntityRetrieveResponseItem {
    class_id: string;

    entity_id: string;

    properties: { [key: string]: unknown };
  }
}

export interface EntityUpdateResponse {
  success: boolean;
}

export interface EntityListResponse {
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

export type EntityDeleteResponse = number;

export interface EntityListBackreferencesResponse {
  classId: string;

  entityId: string;

  properties: { [key: string]: unknown };

  viaPropertyId: string;

  displayName?: string;
}

export interface EntityQueryResponse {
  backend: 'postgres' | 'turbopuffer';

  data: Array<EntityQueryResponse.Data>;

  has_more: boolean;
}

export namespace EntityQueryResponse {
  export interface Data {
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

export type EntityUpdateBatchResponse = boolean;

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

export interface EntityRetrieveParams {
  entityIds: Array<string>;
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

export interface EntityListParams extends OffsetPageParams {
  /**
   * Class UUID. Required to scope the listing.
   */
  classId: string;
}

export interface EntityDeleteParams {
  entityIds: Array<string>;
}

export interface EntityListBackreferencesParams extends OffsetPageParams {
  /**
   * Path param
   */
  branchId: string;

  /**
   * Query param
   */
  classId?: string;

  /**
   * Query param
   */
  maxDomainsPerProperty?: number;

  /**
   * Query param
   */
  maxEntitiesPerDomain?: number;
}

export interface EntityQueryParams {
  /**
   * Class UUID. Required for vector search (Turbopuffer backend).
   */
  classId?: string | null;

  /**
   * Property UUIDs to exclude from response (blacklist).
   */
  excludeProperties?: Array<string> | null;

  /**
   * Relationship expansion configuration keyed by reference property UUID.
   */
  expand?: { [key: string]: EntityQueryParams.Expand } | null;

  /**
   * Filter AST. Use { kind: 'cond', field, op, value } for conditions, { kind:
   * 'and'|'or', terms } for logic, { kind: 'rel', op, refPropId, subFilter } for
   * relational joins.
   */
  filters?: unknown | EntityQueryParams.FilterAstCond | null;

  /**
   * Pagination offset (default 0).
   */
  offset?: number;

  /**
   * Ranking/sorting AST. Supports vector search, full-text search, field ordering,
   * and composite ranking.
   */
  rankBy?:
    | EntityQueryParams.RankAstOrder
    | EntityQueryParams.RankAstVector
    | EntityQueryParams.RankAstBm25
    | EntityQueryParams.RankAstFts
    | EntityQueryParams.RankAstFilterBoost
    | unknown
    | null;

  /**
   * Property UUIDs to include in response (whitelist). If omitted, all properties
   * are returned.
   */
  select?: Array<string> | null;

  /**
   * Maximum number of results to return (default 100, max 1200).
   */
  topK?: number;
}

export namespace EntityQueryParams {
  export interface Expand {
    /**
     * Filter applied to the related entity/entities.
     */
    filters?: unknown | Expand.FilterAstCond;

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
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface FilterAstCond {
      /**
       * Field reference (property UUID or system field).
       */
      field: FilterAstCond.FieldRefProperty | FilterAstCond.FieldRefSystem;

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
      options?: FilterAstCond.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace FilterAstCond {
      export interface FieldRefProperty {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface FieldRefSystem {
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
  }

  /**
   * Atomic condition filter: field + operator (+ value/options).
   */
  export interface FilterAstCond {
    /**
     * Field reference (property UUID or system field).
     */
    field: FilterAstCond.FieldRefProperty | FilterAstCond.FieldRefSystem;

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
    options?: FilterAstCond.Options;

    value?: string | number | boolean | Array<string | number | boolean | null> | null;
  }

  export namespace FilterAstCond {
    export interface FieldRefProperty {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface FieldRefSystem {
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
   * Order results by a field (attribute ordering).
   */
  export interface RankAstOrder {
    /**
     * Sort direction.
     */
    direction: 'asc' | 'desc';

    /**
     * Field reference (property UUID or system field).
     */
    field: RankAstOrder.FieldRefProperty | RankAstOrder.FieldRefSystem;

    kind: 'order';
  }

  export namespace RankAstOrder {
    export interface FieldRefProperty {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface FieldRefSystem {
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
  export interface RankAstVector {
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
  export interface RankAstBm25 {
    /**
     * Property field (Turbopuffer: limited to indexed fields like title. Prefer vector
     * search).
     */
    field: RankAstBm25.Field;

    kind: 'bm25';

    query: string;

    /**
     * BM25 options (Turbopuffer).
     */
    options?: RankAstBm25.Options;
  }

  export namespace RankAstBm25 {
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
  export interface RankAstFts {
    kind: 'fts';

    query: string;

    /**
     * FTS target field (property or $fts).
     */
    target: RankAstFts.FieldRefProperty | RankAstFts.FieldRefSystem;

    /**
     * Optional prefix options (Postgres only; Turbopuffer should use vector search).
     */
    options?: RankAstFts.Options;

    /**
     * FTS parser (default: plain). Options: plain (all words), fts (websearch with
     * OR/-/quotes), phrase (exact sequence), tsquery (raw).
     */
    parser?: 'fts' | 'tsquery' | 'phrase' | 'plain';
  }

  export namespace RankAstFts {
    export interface FieldRefProperty {
      /**
       * Reference to a property UUID.
       */
      kind: 'property';

      /**
       * Property UUID (matches repository schema property IDs).
       */
      propertyId: string;
    }

    export interface FieldRefSystem {
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
  export interface RankAstFilterBoost {
    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    filter: unknown | RankAstFilterBoost.FilterAstCond;

    kind: 'filterBoost';
  }

  export namespace RankAstFilterBoost {
    /**
     * Atomic condition filter: field + operator (+ value/options).
     */
    export interface FilterAstCond {
      /**
       * Field reference (property UUID or system field).
       */
      field: FilterAstCond.FieldRefProperty | FilterAstCond.FieldRefSystem;

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
      options?: FilterAstCond.Options;

      value?: string | number | boolean | Array<string | number | boolean | null> | null;
    }

    export namespace FilterAstCond {
      export interface FieldRefProperty {
        /**
         * Reference to a property UUID.
         */
        kind: 'property';

        /**
         * Property UUID (matches repository schema property IDs).
         */
        propertyId: string;
      }

      export interface FieldRefSystem {
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
  }
}

export interface EntityUpdateBatchParams {
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
