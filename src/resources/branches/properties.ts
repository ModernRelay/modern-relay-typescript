// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Define classes and properties for your data model
 */
export class Properties extends APIResource {
  /**
   * Creates a new property definition for one or more classes.
   */
  create(branchID: string, body: PropertyCreateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post(path`/v1/branches/${branchID}/properties`, { body, ...options });
  }

  /**
   * Updates the specified property by setting the values of the parameters passed.
   */
  update(propertyID: string, params: PropertyUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { branchId, ...body } = params;
    return this._client.patch(path`/v1/branches/${branchId}/properties/${propertyID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes a property definition from the schema.
   */
  delete(
    propertyID: string,
    params: PropertyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PropertyDeleteResponse> {
    const { branchId } = params;
    return this._client.delete(path`/v1/branches/${branchId}/properties/${propertyID}`, options);
  }

  /**
   * Creates multiple property definitions in a single request. Returns an array of
   * created property IDs.
   */
  createBatch(
    branchID: string,
    body: PropertyCreateBatchParams,
    options?: RequestOptions,
  ): APIPromise<PropertyCreateBatchResponse> {
    return this._client.post(path`/v1/branches/${branchID}/properties/batch`, { body, ...options });
  }
}

export type PropertyCreateResponse = string;

export type PropertyDeleteResponse = boolean;

export type PropertyCreateBatchResponse = Array<string>;

export interface PropertyCreateParams {
  property: PropertyCreateParams.Property;
}

export namespace PropertyCreateParams {
  export interface Property {
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

export interface PropertyUpdateParams {
  /**
   * Path param: The branch ID containing the property
   */
  branchId: string;

  /**
   * Body param
   */
  updates: PropertyUpdateParams.Updates;
}

export namespace PropertyUpdateParams {
  export interface Updates {
    apiName?: string;

    description?: string;

    displayName?: boolean;

    name?: string;
  }
}

export interface PropertyDeleteParams {
  branchId: string;
}

export interface PropertyCreateBatchParams {
  /**
   * Array of property definitions to create
   */
  properties: Array<PropertyCreateBatchParams.Property>;
}

export namespace PropertyCreateBatchParams {
  export interface Property {
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

export declare namespace Properties {
  export {
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateBatchResponse as PropertyCreateBatchResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyUpdateParams as PropertyUpdateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
    type PropertyCreateBatchParams as PropertyCreateBatchParams,
  };
}
