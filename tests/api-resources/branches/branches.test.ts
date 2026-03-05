// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource branches', () => {
  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.branches.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.branches.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {},
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createClass: only required params', async () => {
    const responsePromise = client.branches.createClass('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classInfo: {
        apiName: 'apiName',
        pluralName: 'x',
        singularName: 'x',
      },
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
  test.skip('createClass: required and optional params', async () => {
    const response = await client.branches.createClass('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classInfo: {
        apiName: 'apiName',
        pluralName: 'x',
        singularName: 'x',
        description: 'description',
        isSystem: true,
      },
    });
  });

  // Mock server tests are disabled
  test.skip('listChildren', async () => {
    const responsePromise = client.branches.listChildren('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listChildren: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.branches.listChildren(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 1, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveSchema', async () => {
    const responsePromise = client.branches.retrieveSchema('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
