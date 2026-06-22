export type SettlementSlug = "boksitogorsk" | "bugry" | "volosovo" | "volhov" | "vsevolozhsk" | "vyborg" | "vysotsk" | "gatchina" | "ivangorod" | "kamennogorsk" | "kingisepp" | "kirishi" | "kirovsk" | "koltushi" | "kommunar" | "kudrovo" | "lodeynoe-pole" | "luga" | "lyuban" | "murino" | "nikolskoe" | "novaya-ladoga" | "otradnoe" | "pikalevo" | "podporozhe" | "primorsk" | "priozersk" | "svetogorsk" | "sertolovo" | "slantsy" | "sosnovyy-bor" | "syasstroy" | "telmana" | "tihvin" | "tosno" | "shlisselburg" | "bolshaya-izhora" | "budogosch" | "vazhiny" | "villozi" | "voznesene" | "vyritsa" | "druzhnaya-gorka" | "efimovskiy" | "imeni-morozova" | "imeni-sverdlova" | "krasnyy-bor" | "kuznechnoe" | "kuzmolovskiy" | "lebyazhe" | "lesogorskiy" | "mga" | "naziya" | "nevskaya-dubrovka" | "nikolskiy" | "novosele" | "pavlovo" | "priladozhskiy" | "rahya" | "roschino" | "ryabovo" | "svirstroy" | "siverskiy" | "sinyavino" | "sovetskiy" | "taytsy" | "toksovo" | "tolmachevo" | "ulyanovka" | "fedorovskoe" | "fornosovo" | "yanino-1";
export type SettlementInput = SettlementSlug | string;

export interface SettlementMeta {
  readonly slug: SettlementSlug;
  readonly code: string;
  readonly name: string;
}

export type FlagImageAttributeValue = string | number | boolean | null | undefined;

export interface FlagImageOptions {
  readonly alt?: string;
  readonly decoding?: "async" | "auto" | "sync";
  readonly loading?: "eager" | "lazy";
  readonly className?: string;
  readonly title?: string;
  readonly id?: string;
  readonly width?: number;
  readonly height?: number;
  readonly style?: Partial<CSSStyleDeclaration>;
  readonly dataset?: Record<string, FlagImageAttributeValue>;
  readonly attributes?: Record<string, FlagImageAttributeValue>;
}

export type FlagImageFactory = (options?: FlagImageOptions) => HTMLImageElement;

export interface FlagModule {
  readonly src: string;
  readonly createImage: FlagImageFactory;
  readonly default: FlagImageFactory;
}
