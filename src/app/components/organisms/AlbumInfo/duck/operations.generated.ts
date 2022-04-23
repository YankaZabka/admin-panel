/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetAlbumInfoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumInfoQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "name" | "username">>;
    }
  >;
};
