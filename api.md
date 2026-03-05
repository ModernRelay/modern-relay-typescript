# Repositories

Types:

- <code><a href="./src/resources/repositories.ts">RepositoryCreateResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryRetrieveResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryUpdateResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryDeleteResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryCreateBranchResponse</a></code>

Methods:

- <code title="post /v1/repositories">client.repositories.<a href="./src/resources/repositories.ts">create</a>({ ...params }) -> RepositoryCreateResponse</code>
- <code title="get /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">retrieve</a>(repositoryID) -> RepositoryRetrieveResponse</code>
- <code title="patch /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">update</a>(repositoryID, { ...params }) -> RepositoryUpdateResponse | null</code>
- <code title="delete /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">delete</a>(repositoryID) -> RepositoryDeleteResponse</code>
- <code title="post /v1/repositories/{repositoryId}/branches">client.repositories.<a href="./src/resources/repositories.ts">createBranch</a>(repositoryID, { ...params }) -> RepositoryCreateBranchResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountListRepositoriesResponse</a></code>

Methods:

- <code title="get /v1/accounts/{accountId}/repositories">client.accounts.<a href="./src/resources/accounts.ts">listRepositories</a>(accountID, { ...params }) -> AccountListRepositoriesResponse</code>

# Branches

Types:

- <code><a href="./src/resources/branches/branches.ts">BranchDeleteResponse</a></code>
- <code><a href="./src/resources/branches/branches.ts">BranchCreateClassResponse</a></code>
- <code><a href="./src/resources/branches/branches.ts">BranchListChildrenResponse</a></code>
- <code><a href="./src/resources/branches/branches.ts">BranchRetrieveSchemaResponse</a></code>

Methods:

- <code title="delete /v1/branches/{branchId}">client.branches.<a href="./src/resources/branches/branches.ts">delete</a>(branchID) -> BranchDeleteResponse</code>
- <code title="post /v1/branches/{branchId}/classes">client.branches.<a href="./src/resources/branches/branches.ts">createClass</a>(branchID, { ...params }) -> string</code>
- <code title="get /v1/branches/{branchId}/children">client.branches.<a href="./src/resources/branches/branches.ts">listChildren</a>(branchID, { ...params }) -> BranchListChildrenResponse</code>
- <code title="get /v1/branches/{branchId}/schema">client.branches.<a href="./src/resources/branches/branches.ts">retrieveSchema</a>(branchID) -> BranchRetrieveSchemaResponse</code>

## Properties

Types:

- <code><a href="./src/resources/branches/properties.ts">PropertyCreateResponse</a></code>
- <code><a href="./src/resources/branches/properties.ts">PropertyDeleteResponse</a></code>

Methods:

- <code title="post /v1/branches/{branchId}/properties">client.branches.properties.<a href="./src/resources/branches/properties.ts">create</a>(branchID, { ...params }) -> string</code>
- <code title="delete /v1/branches/{branchId}/properties/{propertyId}">client.branches.properties.<a href="./src/resources/branches/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>

## Entities

Types:

- <code><a href="./src/resources/branches/entities.ts">EntityCreateResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityUpdateResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityListResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityDeleteResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityUpdateMultipleResponse</a></code>

Methods:

- <code title="post /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">create</a>(branchID, { ...params }) -> EntityCreateResponse</code>
- <code title="patch /v1/branches/{branchId}/entities/{entityId}">client.branches.entities.<a href="./src/resources/branches/entities.ts">update</a>(entityID, { ...params }) -> EntityUpdateResponse</code>
- <code title="get /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">list</a>(branchID, { ...params }) -> EntityListResponse</code>
- <code title="delete /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">delete</a>(branchID, { ...params }) -> EntityDeleteResponse</code>
- <code title="patch /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">updateMultiple</a>(branchID, { ...params }) -> EntityUpdateMultipleResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>
