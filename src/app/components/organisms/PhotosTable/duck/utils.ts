export const photoPageSizeVerification = (pageSize: string | null) => {
  switch (pageSize) {
    case "10":
      return 10;
    case "20":
      return 20;
    case "50":
      return 50;
    default:
      return 10;
  }
};
