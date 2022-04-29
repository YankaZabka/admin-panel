const useTablePagination = (
  page: string | null,
  pageSize: string | null,
  totalCount: number,
  setSearchParams: any
) => {
  return {
    current: page ? Number(page) : 1,
    pageSize: pageSize ? Number(pageSize) : 10,
    pageSizeOptions: [10, 20, 50],
    onChange(tablePage: number, tablePageSize: number) {
      setSearchParams({
        page: tablePage.toString(),
        size: tablePageSize.toString(),
      });
    },
    total: totalCount ?? 100,
  };
};

export default useTablePagination;
