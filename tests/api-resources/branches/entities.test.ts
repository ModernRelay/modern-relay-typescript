// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('create: only required params', async () => {
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

  test('create: required and optional params', async () => {
    const response = await client.branches.entities.create('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      entities: [{ foo: 'string' }],
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.branches.entities.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['x'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.branches.entities.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['x'],
    });
  });

  test('update: only required params', async () => {
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

  test('update: required and optional params', async () => {
    const response = await client.branches.entities.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      data: { foo: 'string' },
      clearExistingValues: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.branches.entities.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.branches.entities.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 1,
      offset: 0,
    });
  });

  test('delete: only required params', async () => {
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

  test('delete: required and optional params', async () => {
    const response = await client.branches.entities.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  test('listBackreferences: only required params', async () => {
    const responsePromise = client.branches.entities.listBackreferences(
      'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      { branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBackreferences: required and optional params', async () => {
    const response = await client.branches.entities.listBackreferences(
      'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      {
        branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
        classId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
        limit: 1,
        maxDomainsPerProperty: 1,
        maxEntitiesPerDomain: 1,
        offset: 0,
      },
    );
  });

  test('query', async () => {
    const responsePromise = client.branches.entities.query('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.branches.entities.query(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          classId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          excludeProperties: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          expand: {
            foo: {
              filters: {},
              limit: 1,
              referenceClasses: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
              select: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
              targetBranchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            },
          },
          filters: {},
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

  test('updateBatch: only required params', async () => {
    const responsePromise = client.branches.entities.updateBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('updateBatch: required and optional params', async () => {
    const response = await client.branches.entities.updateBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      entityIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      properties: { foo: 'string' },
    });
  });
});
