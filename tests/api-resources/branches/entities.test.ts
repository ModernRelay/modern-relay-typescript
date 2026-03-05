// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.branches.entities.create('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      entities: [{ foo: 'string' }],
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
    const response = await client.branches.entities.create('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      entities: [{ foo: 'string' }],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.branches.entities.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      data: { foo: 'string' },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.branches.entities.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      data: { foo: 'string' },
      clearExistingValues: true,
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.branches.entities.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.branches.entities.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          classId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          excludeProperties: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          expand: {
            foo: {
              filters: {
                kind: 'and',
                terms: [
                  {
                    kind: 'and',
                    terms: [
                      {
                        kind: {},
                        terms: {},
                      },
                    ],
                  },
                ],
              },
              limit: 1,
              referenceClasses: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
              select: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
              targetBranchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          },
          filters: { kind: 'and', terms: [{ kind: 'and', terms: [{ kind: 'and', terms: [{}] }] }] },
          offset: 0,
          rankBy: {
            direction: 'asc',
            field: { kind: 'property', propertyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
            kind: 'order',
          },
          select: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          topK: 1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernRelay.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.branches.entities.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.branches.entities.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  // Mock server tests are disabled
  test.skip('updateMultiple: only required params', async () => {
    const responsePromise = client.branches.entities.updateMultiple('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      properties: { foo: 'string' },
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
  test.skip('updateMultiple: required and optional params', async () => {
    const response = await client.branches.entities.updateMultiple('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      properties: { foo: 'string' },
    });
  });
});
