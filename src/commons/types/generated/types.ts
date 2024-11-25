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
  Upload: { input: any; output: any; }
};

export type IBoard = {
  __typename?: 'Board';
  _id: Scalars['ID']['output'];
  boardAddress?: Maybe<IBoardAddress>;
  comments?: Maybe<Array<IBoardComment>>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  dislikeCount: Scalars['Int']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  likeCount: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  writer: Scalars['String']['output'];
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type IBoardAddress = {
  __typename?: 'BoardAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type IBoardAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type IBoardComment = {
  __typename?: 'BoardComment';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  password: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  writer: Scalars['String']['output'];
};

export type ICreateBoardCommentInput = {
  contents: Scalars['String']['input'];
  password: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  writer: Scalars['String']['input'];
};

export type ICreateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  password: Scalars['String']['input'];
  title: Scalars['String']['input'];
  writer: Scalars['String']['input'];
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ICreateUseditemInput = {
  contents: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  remarks: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
  useditemAddress?: InputMaybe<IUsedItemAddressInput>;
};

export type ICreateUseditemQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type ICreateUseditemQuestionInput = {
  contents: Scalars['String']['input'];
};

export type ICreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type IFileManager = {
  __typename?: 'FileManager';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  isUsed: Scalars['Boolean']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createBoardComment: IBoardComment;
  createPointTransactionOfBuyingAndSelling: IPointTransaction;
  createPointTransactionOfLoading: IPointTransaction;
  createUseditem: IUsedItem;
  createUseditemQuestion: IUsedItemQuestion;
  createUseditemQuestionAnswer: IUseditemQuestionAnswer;
  createUser: IUser;
  deleteBoard: Scalars['Boolean']['output'];
  deleteBoardComment: Scalars['Boolean']['output'];
  deleteUseditemQuestion: Scalars['ID']['output'];
  deleteUseditemQuestionAnswer: Scalars['ID']['output'];
  dislikeBoard: Scalars['Int']['output'];
  likeBoard: Scalars['Int']['output'];
  loginUser: IToken;
  logoutUser: Scalars['Boolean']['output'];
  resetUserPassword: Scalars['Boolean']['output'];
  restoreAccessToken: IToken;
  toggleUseditemPick: Scalars['Int']['output'];
  updateBoard: IBoard;
  updateBoardComment: IBoardComment;
  updateUseditem: IUsedItem;
  updateUseditemQuestion: IUsedItemQuestion;
  updateUseditemQuestionAnswer: IUseditemQuestionAnswer;
  updateUser: IUser;
  uploadFile: IFileManager;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBoardCommentArgs = {
  boardId: Scalars['ID']['input'];
  createBoardCommentInput: ICreateBoardCommentInput;
};


export type IMutationCreatePointTransactionOfBuyingAndSellingArgs = {
  useritemId: Scalars['ID']['input'];
};


export type IMutationCreatePointTransactionOfLoadingArgs = {
  impUid: Scalars['ID']['input'];
};


export type IMutationCreateUseditemArgs = {
  createUseditemInput: ICreateUseditemInput;
};


export type IMutationCreateUseditemQuestionArgs = {
  createUseditemQuestionInput: ICreateUseditemQuestionInput;
  useditemId: Scalars['ID']['input'];
};


export type IMutationCreateUseditemQuestionAnswerArgs = {
  createUseditemQuestionAnswerInput: ICreateUseditemQuestionAnswerInput;
  useditemQuestionId: Scalars['ID']['input'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type IMutationDeleteBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type IMutationDeleteUseditemQuestionArgs = {
  useditemQuestionId: Scalars['ID']['input'];
};


export type IMutationDeleteUseditemQuestionAnswerArgs = {
  useditemQuestionAnswerId: Scalars['ID']['input'];
};


export type IMutationDislikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IMutationLikeBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type IMutationResetUserPasswordArgs = {
  password: Scalars['String']['input'];
};


export type IMutationToggleUseditemPickArgs = {
  useditemId: Scalars['ID']['input'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardCommentArgs = {
  boardCommentId: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  updateBoardCommentInput: IUpdateBoardCommentInput;
};


export type IMutationUpdateUseditemArgs = {
  updateUseditemInput: IUpdateUseditemInput;
  useditemId: Scalars['ID']['input'];
};


export type IMutationUpdateUseditemQuestionArgs = {
  updateUseditemQuestionInput: IUpdateUseditemQuestionInput;
  useditemQuestionId: Scalars['ID']['input'];
};


export type IMutationUpdateUseditemQuestionAnswerArgs = {
  updateUseditemQuestionAnswerInput: IUpdateUseditemQuestionAnswerInput;
  useditemQuestionAnswerId: Scalars['ID']['input'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type IPointTransaction = {
  __typename?: 'PointTransaction';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  balance: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  impUid?: Maybe<Scalars['ID']['output']>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  useditem?: Maybe<IUsedItem>;
  user?: Maybe<IUsedItem>;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoardComments: Array<IBoardComment>;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars['Int']['output'];
  fetchBoardsOfTheBest: Array<IBoard>;
  fetchPointTransactions: Array<IPointTransaction>;
  fetchPointTransactionsCount: Scalars['Int']['output'];
  fetchPointTransactionsOfBuying: Array<IPointTransaction>;
  fetchPointTransactionsOfLoading: Array<IPointTransaction>;
  fetchPointTransactionsOfSelling: Array<IPointTransaction>;
  fetchUseditem: IUsedItem;
  fetchUseditemQuestionAnswers: Array<IUseditemQuestionAnswer>;
  fetchUseditemQuestions: Array<IUsedItemQuestion>;
  fetchUseditems: Array<IUsedItem>;
  fetchUseditemsIPicked: Array<IUsedItem>;
  fetchUseditemsISold: Array<IUsedItem>;
  fetchUseditemsOfTheBest: Array<IUsedItem>;
  fetchUserLoggedIn: IUser;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['ID']['input'];
};


export type IQueryFetchBoardCommentsArgs = {
  boardId: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type IQueryFetchBoardsArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type IQueryFetchBoardsCountArgs = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type IQueryFetchPointTransactionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchPointTransactionsCountArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchPointTransactionsOfBuyingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchPointTransactionsOfLoadingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchPointTransactionsOfSellingArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchUseditemArgs = {
  useditemId: Scalars['ID']['input'];
};


export type IQueryFetchUseditemQuestionAnswersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  useditemQuestionId: Scalars['ID']['input'];
};


export type IQueryFetchUseditemQuestionsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  useditemId: Scalars['ID']['input'];
};


export type IQueryFetchUseditemsArgs = {
  isSoldout?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchUseditemsIPickedArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type IQueryFetchUseditemsISoldArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type IUpdateBoardCommentInput = {
  contents: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};

export type IUpdateBoardInput = {
  boardAddress?: InputMaybe<IBoardAddressInput>;
  contents?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type IUpdateUseditemInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  tags: Array<Scalars['String']['input']>;
  useditemAddress?: InputMaybe<IUsedItemAddressInput>;
};

export type IUpdateUseditemQuestionAnswerInput = {
  contents: Scalars['String']['input'];
};

export type IUpdateUseditemQuestionInput = {
  contents: Scalars['String']['input'];
};

export type IUpdateUserInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type IUsedItem = {
  __typename?: 'UsedItem';
  _id: Scalars['ID']['output'];
  buyer?: Maybe<IUser>;
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  pickedCount: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  questions?: Maybe<Array<IUsedItemQuestion>>;
  remarks: Scalars['String']['output'];
  seller: IUser;
  soldAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
  useditemAddress?: Maybe<IUsedItemAddress>;
};

export type IUsedItemAddress = {
  __typename?: 'UsedItemAddress';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  addressDetail?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type IUsedItemAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressDetail?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type IUsedItemQuestion = {
  __typename?: 'UsedItemQuestion';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  useditem: IUsedItem;
  user: IUser;
};

export type IUseditemQuestionAnswer = {
  __typename?: 'UseditemQuestionAnswer';
  _id: Scalars['ID']['output'];
  contents: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  useditem_question: IUsedItemQuestion;
  user: IUser;
};

export type IUser = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userPoint?: Maybe<IUserPoint>;
};

export type IUserPoint = {
  __typename?: 'UserPoint';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};
