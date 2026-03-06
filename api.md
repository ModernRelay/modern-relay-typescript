# Repositories

Types:

- <code><a href="./src/resources/repositories.ts">Repository</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryCreateResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryUpdateResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryListResponse</a></code>
- <code><a href="./src/resources/repositories.ts">RepositoryDeleteResponse</a></code>

Methods:

- <code title="post /v1/repositories">client.repositories.<a href="./src/resources/repositories.ts">create</a>({ ...params }) -> RepositoryCreateResponse</code>
- <code title="get /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">retrieve</a>(repositoryID) -> Repository</code>
- <code title="patch /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">update</a>(repositoryID, { ...params }) -> RepositoryUpdateResponse | null</code>
- <code title="get /v1/accounts/{accountId}/repositories">client.repositories.<a href="./src/resources/repositories.ts">list</a>(accountID, { ...params }) -> RepositoryListResponsesOffsetPage</code>
- <code title="delete /v1/repositories/{repositoryId}">client.repositories.<a href="./src/resources/repositories.ts">delete</a>(repositoryID) -> RepositoryDeleteResponse</code>

# Branches

Types:

- <code><a href="./src/resources/branches/branches.ts">Branch</a></code>
- <code><a href="./src/resources/branches/branches.ts">BranchDeleteResponse</a></code>
- <code><a href="./src/resources/branches/branches.ts">BranchDiffResponse</a></code>

Methods:

- <code title="post /v1/repositories/{repositoryId}/branches">client.branches.<a href="./src/resources/branches/branches.ts">create</a>(repositoryID, { ...params }) -> Branch</code>
- <code title="get /v1/branches/{branchId}">client.branches.<a href="./src/resources/branches/branches.ts">retrieve</a>(branchID) -> Branch</code>
- <code title="get /v1/repositories/{repositoryId}/branches">client.branches.<a href="./src/resources/branches/branches.ts">list</a>(repositoryID, { ...params }) -> BranchesOffsetPage</code>
- <code title="delete /v1/branches/{branchId}">client.branches.<a href="./src/resources/branches/branches.ts">delete</a>(branchID) -> BranchDeleteResponse</code>
- <code title="get /v1/branches/{branchId}/diff">client.branches.<a href="./src/resources/branches/branches.ts">diff</a>(branchID, { ...params }) -> BranchDiffResponse</code>
- <code title="get /v1/branches/{branchId}/children">client.branches.<a href="./src/resources/branches/branches.ts">listChildren</a>(branchID, { ...params }) -> BranchesOffsetPage</code>
- <code title="post /v1/branches/{sourceBranchId}/merge">client.branches.<a href="./src/resources/branches/branches.ts">merge</a>(sourceBranchID, { ...params }) -> void</code>

## Schema

Types:

- <code><a href="./src/resources/branches/schema.ts">SchemaRetrieveResponse</a></code>

Methods:

- <code title="get /v1/branches/{branchId}/schema">client.branches.schema.<a href="./src/resources/branches/schema.ts">retrieve</a>(branchID) -> SchemaRetrieveResponse</code>

## Classes

Types:

- <code><a href="./src/resources/branches/classes.ts">ClassCreateResponse</a></code>
- <code><a href="./src/resources/branches/classes.ts">ClassDeleteResponse</a></code>
- <code><a href="./src/resources/branches/classes.ts">ClassCreateBatchResponse</a></code>

Methods:

- <code title="post /v1/branches/{branchId}/classes">client.branches.classes.<a href="./src/resources/branches/classes.ts">create</a>(branchID, { ...params }) -> string</code>
- <code title="patch /v1/branches/{branchId}/classes/{classId}">client.branches.classes.<a href="./src/resources/branches/classes.ts">update</a>(classID, { ...params }) -> void</code>
- <code title="delete /v1/branches/{branchId}/classes/{classId}">client.branches.classes.<a href="./src/resources/branches/classes.ts">delete</a>(classID, { ...params }) -> ClassDeleteResponse</code>
- <code title="post /v1/branches/{branchId}/classes/batch">client.branches.classes.<a href="./src/resources/branches/classes.ts">createBatch</a>(branchID, { ...params }) -> ClassCreateBatchResponse</code>

## Properties

Types:

- <code><a href="./src/resources/branches/properties.ts">PropertyCreateResponse</a></code>
- <code><a href="./src/resources/branches/properties.ts">PropertyDeleteResponse</a></code>
- <code><a href="./src/resources/branches/properties.ts">PropertyCreateBatchResponse</a></code>

Methods:

- <code title="post /v1/branches/{branchId}/properties">client.branches.properties.<a href="./src/resources/branches/properties.ts">create</a>(branchID, { ...params }) -> string</code>
- <code title="patch /v1/branches/{branchId}/properties/{propertyId}">client.branches.properties.<a href="./src/resources/branches/properties.ts">update</a>(propertyID, { ...params }) -> void</code>
- <code title="delete /v1/branches/{branchId}/properties/{propertyId}">client.branches.properties.<a href="./src/resources/branches/properties.ts">delete</a>(propertyID, { ...params }) -> PropertyDeleteResponse</code>
- <code title="post /v1/branches/{branchId}/properties/batch">client.branches.properties.<a href="./src/resources/branches/properties.ts">createBatch</a>(branchID, { ...params }) -> PropertyCreateBatchResponse</code>

## Entities

Types:

- <code><a href="./src/resources/branches/entities.ts">EntityCreateResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityRetrieveResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityUpdateResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityListResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityDeleteResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityListBackreferencesResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityQueryResponse</a></code>
- <code><a href="./src/resources/branches/entities.ts">EntityUpdateBatchResponse</a></code>

Methods:

- <code title="post /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">create</a>(branchID, { ...params }) -> EntityCreateResponse</code>
- <code title="post /v1/branches/{branchId}/entities/retrieve">client.branches.entities.<a href="./src/resources/branches/entities.ts">retrieve</a>(branchID, { ...params }) -> EntityRetrieveResponse</code>
- <code title="patch /v1/branches/{branchId}/entities/{entityId}">client.branches.entities.<a href="./src/resources/branches/entities.ts">update</a>(entityID, { ...params }) -> EntityUpdateResponse</code>
- <code title="get /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">list</a>(branchID, { ...params }) -> EntityListResponsesOffsetPage</code>
- <code title="delete /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">delete</a>(branchID, { ...params }) -> EntityDeleteResponse</code>
- <code title="get /v1/branches/{branchId}/entities/{entityId}/references">client.branches.entities.<a href="./src/resources/branches/entities.ts">listBackreferences</a>(entityID, { ...params }) -> EntityListBackreferencesResponsesOffsetPage</code>
- <code title="post /v1/branches/{branchId}/entities/query">client.branches.entities.<a href="./src/resources/branches/entities.ts">query</a>(branchID, { ...params }) -> EntityQueryResponse</code>
- <code title="patch /v1/branches/{branchId}/entities">client.branches.entities.<a href="./src/resources/branches/entities.ts">updateBatch</a>(branchID, { ...params }) -> EntityUpdateBatchResponse</code>

# Proposals

Types:

- <code><a href="./src/resources/proposals/proposals.ts">Proposal</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalCreateResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalUpdateResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalListResponse</a></code>
- <code><a href="./src/resources/proposals/proposals.ts">ProposalAcceptResponse</a></code>

Methods:

- <code title="post /v1/repositories/{repositoryId}/proposals">client.proposals.<a href="./src/resources/proposals/proposals.ts">create</a>(repositoryID) -> ProposalCreateResponse</code>
- <code title="get /v1/proposals/{proposalId}">client.proposals.<a href="./src/resources/proposals/proposals.ts">retrieve</a>(proposalID) -> Proposal</code>
- <code title="patch /v1/proposals/{proposalId}">client.proposals.<a href="./src/resources/proposals/proposals.ts">update</a>(proposalID, { ...params }) -> ProposalUpdateResponse</code>
- <code title="get /v1/repositories/{repositoryId}/proposals">client.proposals.<a href="./src/resources/proposals/proposals.ts">list</a>(repositoryID, { ...params }) -> ProposalListResponsesOffsetPage</code>
- <code title="delete /v1/proposals/{proposalId}">client.proposals.<a href="./src/resources/proposals/proposals.ts">delete</a>(proposalID) -> void</code>
- <code title="post /v1/proposals/{proposalId}/accept">client.proposals.<a href="./src/resources/proposals/proposals.ts">accept</a>(proposalID, { ...params }) -> ProposalAcceptResponse</code>

## MergeEvents

Types:

- <code><a href="./src/resources/proposals/merge-events.ts">MergeEventListResponse</a></code>

Methods:

- <code title="get /v1/proposals/{proposalId}/merge-events">client.proposals.mergeEvents.<a href="./src/resources/proposals/merge-events.ts">list</a>(proposalID, { ...params }) -> MergeEventListResponsesOffsetPage</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchEntitiesResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchRepositoriesResponse</a></code>

Methods:

- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">entities</a>({ ...params }) -> SearchEntitiesResponse</code>
- <code title="get /v1/search/repositories">client.search.<a href="./src/resources/search.ts">repositories</a>({ ...params }) -> SearchRepositoriesResponsesOffsetPage</code>
