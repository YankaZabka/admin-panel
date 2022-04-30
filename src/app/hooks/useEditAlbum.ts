/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../notify";
import {
  operations as albumOperations,
  Types as albumTypes,
} from "../components/organisms/AlbumInfo/duck";
import { operations, Types } from "../components/organisms/forms/EditForm/duck";

const useEditAlbum = (id: string | undefined) => {
  const navigate = useNavigate();

  const [editAlbum, { loading: mutationLoading }] = useMutation<
    Types.EditAlbumMutation,
    Types.EditAlbumMutationVariables
  >(operations.editAlbum, {
    onCompleted() {
      navigate(-1);
      notifySuccess(`Album was edited!`);
    },
  });

  const { data: albumData, loading: albumLoading } = useQuery<
    albumTypes.GetAlbumInfoQuery,
    albumTypes.GetAlbumInfoQueryVariables
  >(albumOperations.getAlbumInfo, {
    variables: {
      id: id!,
    },
  });

  return { editAlbum, albumData, mutationLoading, albumLoading };
};

export default useEditAlbum;
