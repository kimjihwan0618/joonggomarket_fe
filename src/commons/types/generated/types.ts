export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type IAuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type IAuthType = {
  __typename?: 'AuthType';
  access_token: Scalars['String']['output'];
};

export type IBoard = {
  __typename?: 'Board';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  password: Scalars['String']['output'];
  title: Scalars['String']['output'];
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type ICreateBoardInput = {
  contents: Scalars['String']['input'];
  password: Scalars['String']['input'];
  title: Scalars['String']['input'];
  writer: Scalars['String']['input'];
};

export type ICreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IFetchBoardsInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createUser: IUser;
  deleteBoard: Scalars['Boolean']['output'];
  login: IAuthType;
  updateBoard: IBoard;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IMutationLoginArgs = {
  authInput: IAuthInput;
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  updateBoardInput: IUpdateBoardInput;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IQueryFetchBoardsArgs = {
  fetchBoardsInput: IFetchBoardsInput;
};

export type IUpdateBoardInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};
