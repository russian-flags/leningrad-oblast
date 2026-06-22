import type { FlagModule, SettlementSlug } from "./types.js";
export declare const flagLoaders: Readonly<Record<SettlementSlug, () => Promise<FlagModule>>>;
