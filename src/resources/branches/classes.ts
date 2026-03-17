// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Define classes and properties for your data model
 */
export class Classes extends APIResource {
  /**
   * Creates a new class in the schema.
   *
   * @example
   * ```ts
   * const _class = await client.branches.classes.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     classInfo: {
   *       apiName: 'apiName',
   *       pluralName: 'x',
   *       singularName: 'x',
   *     },
   *   },
   * );
   * ```
   */
  create(branchID: string, body: ClassCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/branches/${branchID}/classes`, { body, ...options });
  }

  /**
   * Updates the specified class by setting the values of the parameters passed.
   *
   * @example
   * ```ts
   * await client.branches.classes.update(
   *   'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *   {
   *     branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
   *     updates: {},
   *   },
   * );
   * ```
   */
  update(classID: string, params: ClassUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { branchId, ...body } = params;
    return this._client.patch(path`/v1/branches/${branchId}/classes/${classID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes a class and all its associated properties from the schema.
   *
   * @example
   * ```ts
   * const _class = await client.branches.classes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(
    classID: string,
    params: ClassDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ClassDeleteResponse> {
    const { branchId } = params;
    return this._client.delete(path`/v1/branches/${branchId}/classes/${classID}`, options);
  }

  /**
   * Creates multiple classes in a single request. Returns an array of created class
   * IDs.
   *
   * @example
   * ```ts
   * const response = await client.branches.classes.createBatch(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     classes: [
   *       {
   *         apiName: 'apiName',
   *         pluralName: 'x',
   *         singularName: 'x',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  createBatch(
    branchID: string,
    body: ClassCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<ClassCreateBatchResponse> {
    return this._client.post(path`/v1/branches/${branchID}/classes/batch`, { body, ...options });
  }
}

export type ClassCreateResponse = string;

/**
 * Number of deleted classes (usually 1)
 */
export type ClassDeleteResponse = number;

export type ClassCreateBatchResponse = Array<string>;

export interface ClassCreateParams {
  classInfo: ClassCreateParams.ClassInfo;
}

export namespace ClassCreateParams {
  export interface ClassInfo {
    apiName: string;

    pluralName: string;

    singularName: string;

    description?: string;

    /**
     * Per-class FTS flag. null/undefined = use storage backend default
     */
    ftsEnabled?: boolean | null;

    /**
     * Marks system-managed classes that cannot be deleted by users
     */
    isSystem?: boolean;

    /**
     * Per-class vector search flag. null/undefined = use storage backend default
     */
    vectorSearchEnabled?: boolean | null;
  }
}

export interface ClassUpdateParams {
  /**
   * Path param: The branch ID containing the class
   */
  branchId: string;

  /**
   * Body param
   */
  updates: ClassUpdateParams.Updates;
}

export namespace ClassUpdateParams {
  export interface Updates {
    apiName?: string;

    description?: string;

    pluralName?: string;

    singularName?: string;
  }
}

export interface ClassDeleteParams {
  /**
   * The branch ID where the class exists
   */
  branchId: string;
}

export interface ClassCreateBatchParams {
  /**
   * Array of class definitions to create
   */
  classes: Array<ClassCreateBatchParams.Class>;
}

export namespace ClassCreateBatchParams {
  export interface Class {
    apiName: string;

    pluralName: string;

    singularName: string;

    description?: string;

    /**
     * Per-class FTS flag. null/undefined = use storage backend default
     */
    ftsEnabled?: boolean | null;

    /**
     * Marks system-managed classes that cannot be deleted by users
     */
    isSystem?: boolean;

    /**
     * Per-class vector search flag. null/undefined = use storage backend default
     */
    vectorSearchEnabled?: boolean | null;
  }
}

export declare namespace Classes {
  export {
    type ClassCreateResponse as ClassCreateResponse,
    type ClassDeleteResponse as ClassDeleteResponse,
    type ClassCreateBatchResponse as ClassCreateBatchResponse,
    type ClassCreateParams as ClassCreateParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassDeleteParams as ClassDeleteParams,
    type ClassCreateBatchParams as ClassCreateBatchParams,
  };
}
