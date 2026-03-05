// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource repositories', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.repositories.create({
      accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
      slug: 'slug',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.repositories.create({
      accountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
      slug: 'slug',
      description: 'description',
      skill: 'skill',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.repositories.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.repositories.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.repositories.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          description: 'description',
          filesEnabled: true,
          name: 'x',
          skill: 'skill',
          slug: 'slug',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.repositories.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.repositories.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {},
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createBranch: only required params', async () => {
    const responsePromise = client.repositories.createBranch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
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
  test.skip('createBranch: required and optional params', async () => {
    const response = await client.repositories.createBranch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'x',
    });
  });
});
