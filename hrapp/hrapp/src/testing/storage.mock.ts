export class StorageMock {
  private data: Record<string, any> = {};
  create = () => Promise.resolve();
  get = (k: string) => Promise.resolve(this.data[k]);
  set = (k: string, v: any) => {
    this.data[k] = v;
    return Promise.resolve(v);
  };
  remove = (k: string) => {
    delete this.data[k];
    return Promise.resolve();
  };
  clear = () => {
    this.data = {};
    return Promise.resolve();
  };
}
