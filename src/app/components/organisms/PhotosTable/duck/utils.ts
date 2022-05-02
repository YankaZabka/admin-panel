export const buildDataSource = (data: any) => {
  return data?.album?.photos?.data?.map((item: any) => {
    return {
      key: item?.id,
      id: item?.id,
      title: item?.title,
      preview: item?.thumbnailUrl,
    };
  });
};
