/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getAlbumInfo: DocumentNode;
  export const getAlbums: DocumentNode;
  export const deleteAlbum: DocumentNode;
  export const getPhotoInfo: DocumentNode;
  export const getAlbumPhotoInfo: DocumentNode;
  export const getUsers: DocumentNode;
  export const createAlbum: DocumentNode;
  export const editAlbum: DocumentNode;
  export const getUsersUsernames: DocumentNode;

  export default defaultDocument;
}
