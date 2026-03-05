// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ModernRelay } from '../client';

export abstract class APIResource {
  protected _client: ModernRelay;

  constructor(client: ModernRelay) {
    this._client = client;
  }
}
