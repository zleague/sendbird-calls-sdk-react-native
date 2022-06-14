import { NativeQueryType, Query } from '../types/Query';
import NativeBinder from './NativeBinder';

export class BridgedQuery<T extends NativeQueryType> implements Query {
  private _isLoading = false;
  private _hasNext = false;
  get isLoading() {
    return this._isLoading;
  }
  get hasNext() {
    return this._hasNext;
  }

  constructor(protected queryKey: string, protected type: T, protected binder: NativeBinder) {}

  async next() {
    this._isLoading = true;
    const { hasNext, result } = await this.binder.nativeModule.queryNext(this.queryKey, this.type as any);
    this._hasNext = hasNext;
    this._isLoading = false;
    return result;
  }

  release() {
    this.binder.nativeModule.queryRelease(this.queryKey);
  }
}
