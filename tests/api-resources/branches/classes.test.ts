// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource classes', () => {
  test('create: only required params', async () => {
    const responsePromise = client.branches.classes.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('create: required and optional params', async () => {
    const response = await client.branches.classes.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classInfo: {
        apiName: 'apiName',
        pluralName: 'x',
        singularName: 'x',
        description: 'description',
        ftsEnabled: true,
        isSystem: true,
        vectorSearchEnabled: true,
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.branches.classes.update('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      updates: {},
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
    const response = await client.branches.classes.update('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      updates: {
        apiName: 'apiName',
        description: 'description',
        pluralName: 'x',
        singularName: 'x',
      },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.branches.classes.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.branches.classes.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('createBatch: only required params', async () => {
    const responsePromise = client.branches.classes.createBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classes: [
        {
          apiName: 'apiName',
          pluralName: 'x',
          singularName: 'x',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBatch: required and optional params', async () => {
    const response = await client.branches.classes.createBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      classes: [
        {
          apiName: 'apiName',
          pluralName: 'x',
          singularName: 'x',
          description: 'description',
          ftsEnabled: true,
          isSystem: true,
          vectorSearchEnabled: true,
        },
      ],
    });
  });
});
