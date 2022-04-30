export interface IColumns {
  title: string;
  dataIndex: string;
  render?(text: string, record: any): any;
}
