// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernRelay from 'modern-relay';

const client = new ModernRelay({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource properties', () => {
  test('create: only required params', async () => {
    const responsePromise = client.branches.properties.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      property: {
        apiName: 'apiName',
        domain: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        name: 'x',
        range: 'string',
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
    const response = await client.branches.properties.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      property: {
        apiName: 'apiName',
        domain: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        name: 'x',
        range: 'string',
        default: {},
        description: 'description',
        displayName: true,
        multiValued: true,
        referenceClasses: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        required: true,
        targetBranchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        unique: true,
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.branches.properties.update('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
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
    const response = await client.branches.properties.update('ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c', {
      branchId: 'ecc2efdd-ddfa-31a9-c6f1-b833d337aa7c',
      updates: {
        apiName: 'apiName',
        description: 'description',
        displayName: true,
        name: 'x',
      },
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.branches.properties.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.branches.properties.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      branchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('createBatch: only required params', async () => {
    const responsePromise = client.branches.properties.createBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      properties: [
        {
          apiName: 'apiName',
          domain: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          name: 'x',
          range: 'string',
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
    const response = await client.branches.properties.createBatch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      properties: [
        {
          apiName: 'apiName',
          domain: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          name: 'x',
          range: 'string',
          default: {},
          description: 'description',
          displayName: true,
          multiValued: true,
          referenceClasses: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          required: true,
          targetBranchId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          unique: true,
        },
      ],
    });
  });
});
