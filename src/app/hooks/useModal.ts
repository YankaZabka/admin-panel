import { useState } from "react";

const useModal = (callBack: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<string>();

  const showModal = (id: string) => {
    setSelectedAlbum(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (selectedAlbum) {
      callBack({
        variables: {
          id: selectedAlbum,
        },
      });
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return { isModalVisible, showModal, handleOk, handleCancel };
};

export default useModal;
