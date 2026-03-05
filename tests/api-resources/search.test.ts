// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // Mock server tests are disabled
  test.skip('perform: only required params', async () => {
    const responsePromise = client.search.perform({
      accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      query: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('perform: required and optional params', async () => {
    const response = await client.search.perform({
      accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      query: 'x',
      limit: 1,
      mode: 'fts',
    });
  });
});
