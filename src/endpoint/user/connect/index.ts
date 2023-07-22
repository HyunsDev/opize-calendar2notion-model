import { Endpoint } from 'endpoint-client';

// POST /user/:userId/connect/google-api
export type PostConnectGoogleAPIParameter = {
    userId: 'me' | number;
    code: string;
    callbackVersion: number;
};
export type PostConnectGoogleAPIResponse = {};
export const postConnectGoogleAPI: Endpoint<
    PostConnectGoogleAPIParameter,
    PostConnectGoogleAPIResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/connect/google-api`,
    bodyParams: ['code', 'callbackVersion'],
    pathParams: ['userId'],
    queryParams: [],
};

// POST /user/:userId/connect/notion-api
export type PostConnectNotionAPIParameter = {
    userId: 'me' | number;
    code: string;
    redirectUrl: string;
};
export type PostConnectNotionAPIResponse = {};
export const postConnectNotionAPI: Endpoint<
    PostConnectNotionAPIParameter,
    PostConnectNotionAPIResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/connect/notion-api`,
    bodyParams: ['code', 'redirectUrl'],
    pathParams: ['userId'],
    queryParams: [],
};

// GET /user/:userId/connect/notion-database
export type GetConnectNotionDatabasesParameter = {
    userId: 'me' | number;
};
export type GetConnectNotionDatabasesResponse = any;
export const getConnectNotionDatabases: Endpoint<
    GetConnectNotionDatabasesParameter,
    GetConnectNotionDatabasesResponse
> = {
    method: 'GET',
    path: (e) => `/users/${e.userId}/connect/notion-database`,
    bodyParams: [],
    pathParams: ['userId'],
    queryParams: [],
};

// POST /user/:userId/connect/notion-database
export type PostConnectNotionDatabaseParameter = {
    userId: 'me' | number;
    id: string;
};
export type PostConnectNotionDatabaseResponse = {};

export const postConnectNotionDatabase: Endpoint<
    PostConnectNotionDatabaseParameter,
    PostConnectNotionDatabaseResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/connect/notion-database`,
    bodyParams: ['id'],
    pathParams: ['userId'],
    queryParams: [],
};

// POST /user/:userId/connect/exist-notion-database
export type PostConnectExistNotionDatabaseParameter = {
    userId: 'me' | number;
    databaseId: string;
};
export type PostConnectExistNotionDatabaseResponse = {};
export const postConnectExistNotionDatabase: Endpoint<
    PostConnectExistNotionDatabaseParameter,
    PostConnectExistNotionDatabaseResponse
> = {
    method: 'POST',
    path: (e) => `/users/${e.userId}/connect/exist-notion-database`,
    bodyParams: ['databaseId'],
    pathParams: ['userId'],
    queryParams: [],
};
