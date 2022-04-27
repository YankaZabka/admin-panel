/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type GetAlbumPhotoInfoQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  options?: Types.Maybe<Types.PageQueryOptions>;
}>;

export type GetAlbumPhotoInfoQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id"> & {
      photos?: Types.Maybe<{
        data?: Types.Maybe<
          Array<Types.Maybe<Pick<Types.Photo, "id" | "title" | "thumbnailUrl">>>
        >;
        meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
      }>;
    }
  >;
};
