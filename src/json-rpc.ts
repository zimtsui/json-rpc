export interface Obj {
	readonly jsonrpc: '2.0';
}

export interface Req<
	id extends string | number,
	method extends string,
	params extends {} | readonly unknown[] = any,
> extends Obj {
	readonly id: id;
	readonly method: method;
	readonly params: params;
}


export interface Res<
	id extends string | number,
	result,
	errorData,
> extends Obj {
	readonly id: id;
	readonly result?: result;
	readonly error?: Res.Fail.Error<errorData>;
}
export namespace Res {
	export interface Succ<
		id extends string | number,
		result,
	> extends Res<id, result, never> {
		readonly id: id;
		readonly result: result;
		readonly error: never;
	}

	export interface Fail<
		id extends string | number,
		errorData,
	> extends Res<id, never, errorData> {
		readonly id: id;
		readonly result: never;
		readonly error: Fail.Error<errorData>;
	}
	export namespace Fail {
		export interface Error<Data> {
			readonly code: number;
			readonly message: string;
			readonly data: Data;
		}
	}
}
