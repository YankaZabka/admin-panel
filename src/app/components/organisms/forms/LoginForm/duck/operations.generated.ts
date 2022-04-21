/* eslint-disable */
import * as Types from "../../../../../../schema.generated";

export type GetUsersUsernamesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUsersUsernamesQuery = {
  users?: Types.Maybe<{
    data?: Types.Maybe<Array<Types.Maybe<Pick<Types.User, "email">>>>;
  }>;
};
