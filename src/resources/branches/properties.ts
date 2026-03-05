// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
   * Permanently deletes a property definition from the schema.
   */
  delete(
    propertyID: string,
    params: PropertyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PropertyDeleteResponse> {
    const { branchId, ...body } = params;
    return this._client.delete(path`/v1/branches/${branchId}/properties/${propertyID}`, { body, ...options });
  }
}

export type PropertyCreateResponse = string;

export type PropertyDeleteResponse = boolean;

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

export interface PropertyDeleteParams {
  branchId: string;
}

export declare namespace Properties {
  export {
    type PropertyCreateResponse as PropertyCreateResponse,
    type PropertyDeleteResponse as PropertyDeleteResponse,
    type PropertyCreateParams as PropertyCreateParams,
    type PropertyDeleteParams as PropertyDeleteParams,
  };
}
