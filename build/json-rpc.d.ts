export interface Obj {
    readonly jsonrpc: '2.0';
}
export interface Req<id extends string | number, method extends string, params extends {} | readonly unknown[] = any> extends Obj {
    readonly id: id;
    readonly method: method;
    readonly params: params;
}
export type Res<id extends string | number, result, errorData> = Res.Succ<id, result> | Res.Fail<id, errorData>;
export declare namespace Res {
    interface Succ<id extends string | number, result> {
        readonly id: id;
        readonly result: result;
        readonly error: undefined;
    }
    interface Fail<id extends string | number, errorData> {
        readonly id: id;
        readonly result: undefined;
        readonly error: Fail.Error<errorData>;
    }
    namespace Fail {
        interface Error<Data> {
            readonly code: number;
            readonly message: string;
            readonly data: Data;
        }
    }
}
