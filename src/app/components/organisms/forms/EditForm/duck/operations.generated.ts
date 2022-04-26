/* eslint-disable */
import * as Types from "../../../../../../schema.generated";

export type EditAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  input: Types.UpdateAlbumInput;
}>;

export type EditAlbumMutation = {
  updateAlbum?: Types.Maybe<Pick<Types.Album, "id" | "title">>;
};
