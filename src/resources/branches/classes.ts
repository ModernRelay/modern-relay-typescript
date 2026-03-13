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
   */
  create(branchID: string, body: ClassCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/branches/${branchID}/classes`, { body, ...options });
  }

  /**
   * Updates the specified class by setting the values of the parameters passed.
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
     * Marks system-managed classes that cannot be deleted by users
     */
    isSystem?: boolean;
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
     * Marks system-managed classes that cannot be deleted by users
     */
    isSystem?: boolean;
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
