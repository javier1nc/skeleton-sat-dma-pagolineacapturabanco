import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/app/(inner)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/app/(inner)/catalogo-tsaak" | "/app/(inner)/consulta" | "/app/(inner)/datos-alergias" | "/app/(inner)/datos-direccion" | "/app/(inner)/datos-generales" | "/app/(inner)/datos-padecimientos" | "/app/(inner)/docs-calendario" | "/app/(inner)/docs-perfil" | "/app/(inner)/docs-secciones" | "/app/(inner)/expedientes" | "/app/(inner)/get-started" | "/app/(inner)/introduccion" | "/app/(inner)/registros" | "/app/(inner)/test"
type LayoutParams = RouteParams & {  }
type LayoutParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;