export const buildDataSource = (data: any) => {
  return data?.albums?.data?.map((item: any) => {
    return {
      key: item?.id,
      id: item?.id,
      title: item?.title,
      username: item?.user?.name,
      photos: item?.photos?.data?.length,
    };
  });
};
