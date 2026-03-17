// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  test('entities: only required params', async () => {
    const responsePromise = client.search.entities({
      branchIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
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

  test('entities: required and optional params', async () => {
    const response = await client.search.entities({
      branchIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      query: 'x',
      limit: 1,
      mode: 'fts',
    });
  });

  test('repositories', async () => {
    const responsePromise = client.search.repositories();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('repositories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.search.repositories(
        {
          contextAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 1,
          offset: 0,
          ownerAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ownerAccountSlug: 'x',
          query: 'x',
          repositoryId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          repositorySlug: 'x',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });
});
