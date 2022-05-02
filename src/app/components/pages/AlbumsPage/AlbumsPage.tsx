import React from "react";
import { Routes, Route } from "react-router-dom";
import AlbumShowPage from "../../organisms/AlbumShowPage";
import AlbumsTable from "../../organisms/AlbumsTable";
import PhotoInfo from "../../organisms/PhotoInfo";
import PhotosTable from "../../organisms/PhotosTable";
import CreateFormPage from "../CreateFormPage";
import EditFormPage from "../EditFormPage";

interface Props {
  table: JSX.Element;
  createForm: JSX.Element;
  editForm: JSX.Element;
  showPage: JSX.Element;
}

const AlbumsPage: React.FC<Props> = ({
  table,
  createForm,
  showPage,
  editForm,
}) => {
  return (
    <Routes>
      {table && <Route index element={<AlbumsTable />} />}
      {createForm && <Route path="create" element={<CreateFormPage />} />}
      {showPage && (
        <Route path=":id" element={<AlbumShowPage />}>
          <Route path="photos" element={<PhotosTable />} />
          <Route path="photos/:id" element={<PhotoInfo />} />
        </Route>
      )}
      {editForm && <Route path=":id/edit" element={<EditFormPage />} />}
    </Routes>
  );
};

export default AlbumsPage;
