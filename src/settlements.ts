import type { SettlementMeta, SettlementSlug } from "./types.js";

export const settlements = Object.freeze([
  {
    "slug": "boksitogorsk",
    "code": "BOKSITOGORSK",
    "name": "Бокситогорск"
  },
  {
    "slug": "bugry",
    "code": "BUGRY",
    "name": "Бугры"
  },
  {
    "slug": "volosovo",
    "code": "VOLOSOVO",
    "name": "Волосово"
  },
  {
    "slug": "volhov",
    "code": "VOLHOV",
    "name": "Волхов"
  },
  {
    "slug": "vsevolozhsk",
    "code": "VSEVOLOZHSK",
    "name": "Всеволожск"
  },
  {
    "slug": "vyborg",
    "code": "VYBORG",
    "name": "Выборг"
  },
  {
    "slug": "vysotsk",
    "code": "VYSOTSK",
    "name": "Высоцк"
  },
  {
    "slug": "gatchina",
    "code": "GATCHINA",
    "name": "Гатчина"
  },
  {
    "slug": "ivangorod",
    "code": "IVANGOROD",
    "name": "Ивангород"
  },
  {
    "slug": "kamennogorsk",
    "code": "KAMENNOGORSK",
    "name": "Каменногорск"
  },
  {
    "slug": "kingisepp",
    "code": "KINGISEPP",
    "name": "Кингисепп"
  },
  {
    "slug": "kirishi",
    "code": "KIRISHI",
    "name": "Кириши"
  },
  {
    "slug": "kirovsk",
    "code": "KIROVSK",
    "name": "Кировск"
  },
  {
    "slug": "koltushi",
    "code": "KOLTUSHI",
    "name": "Колтуши"
  },
  {
    "slug": "kommunar",
    "code": "KOMMUNAR",
    "name": "Коммунар"
  },
  {
    "slug": "kudrovo",
    "code": "KUDROVO",
    "name": "Кудрово"
  },
  {
    "slug": "lodeynoe-pole",
    "code": "LODEYNOE_POLE",
    "name": "Лодейное Поле"
  },
  {
    "slug": "luga",
    "code": "LUGA",
    "name": "Луга"
  },
  {
    "slug": "lyuban",
    "code": "LYUBAN",
    "name": "Любань"
  },
  {
    "slug": "murino",
    "code": "MURINO",
    "name": "Мурино"
  },
  {
    "slug": "nikolskoe",
    "code": "NIKOLSKOE",
    "name": "Никольское"
  },
  {
    "slug": "novaya-ladoga",
    "code": "NOVAYA_LADOGA",
    "name": "Новая Ладога"
  },
  {
    "slug": "otradnoe",
    "code": "OTRADNOE",
    "name": "Отрадное"
  },
  {
    "slug": "pikalevo",
    "code": "PIKALEVO",
    "name": "Пикалёво"
  },
  {
    "slug": "podporozhe",
    "code": "PODPOROZHE",
    "name": "Подпорожье"
  },
  {
    "slug": "primorsk",
    "code": "PRIMORSK",
    "name": "Приморск"
  },
  {
    "slug": "priozersk",
    "code": "PRIOZERSK",
    "name": "Приозерск"
  },
  {
    "slug": "svetogorsk",
    "code": "SVETOGORSK",
    "name": "Светогорск"
  },
  {
    "slug": "sertolovo",
    "code": "SERTOLOVO",
    "name": "Сертолово"
  },
  {
    "slug": "slantsy",
    "code": "SLANTSY",
    "name": "Сланцы"
  },
  {
    "slug": "sosnovyy-bor",
    "code": "SOSNOVYY_BOR",
    "name": "Сосновый Бор"
  },
  {
    "slug": "syasstroy",
    "code": "SYASSTROY",
    "name": "Сясьстрой"
  },
  {
    "slug": "telmana",
    "code": "TELMANA",
    "name": "Тельмана"
  },
  {
    "slug": "tihvin",
    "code": "TIHVIN",
    "name": "Тихвин"
  },
  {
    "slug": "tosno",
    "code": "TOSNO",
    "name": "Тосно"
  },
  {
    "slug": "shlisselburg",
    "code": "SHLISSELBURG",
    "name": "Шлиссельбург"
  },
  {
    "slug": "bolshaya-izhora",
    "code": "BOLSHAYA_IZHORA",
    "name": "Большая Ижора"
  },
  {
    "slug": "budogosch",
    "code": "BUDOGOSCH",
    "name": "Будогощь"
  },
  {
    "slug": "vazhiny",
    "code": "VAZHINY",
    "name": "Важины"
  },
  {
    "slug": "villozi",
    "code": "VILLOZI",
    "name": "Виллози"
  },
  {
    "slug": "voznesene",
    "code": "VOZNESENE",
    "name": "Вознесенье"
  },
  {
    "slug": "vyritsa",
    "code": "VYRITSA",
    "name": "Вырица"
  },
  {
    "slug": "druzhnaya-gorka",
    "code": "DRUZHNAYA_GORKA",
    "name": "Дружная Горка"
  },
  {
    "slug": "efimovskiy",
    "code": "EFIMOVSKIY",
    "name": "Ефимовский"
  },
  {
    "slug": "imeni-morozova",
    "code": "IMENI_MOROZOVA",
    "name": "имени Морозова"
  },
  {
    "slug": "imeni-sverdlova",
    "code": "IMENI_SVERDLOVA",
    "name": "имени Свердлова"
  },
  {
    "slug": "krasnyy-bor",
    "code": "KRASNYY_BOR",
    "name": "Красный Бор"
  },
  {
    "slug": "kuznechnoe",
    "code": "KUZNECHNOE",
    "name": "Кузнечное"
  },
  {
    "slug": "kuzmolovskiy",
    "code": "KUZMOLOVSKIY",
    "name": "Кузьмоловский"
  },
  {
    "slug": "lebyazhe",
    "code": "LEBYAZHE",
    "name": "Лебяжье"
  },
  {
    "slug": "lesogorskiy",
    "code": "LESOGORSKIY",
    "name": "Лесогорский"
  },
  {
    "slug": "mga",
    "code": "MGA",
    "name": "Мга"
  },
  {
    "slug": "naziya",
    "code": "NAZIYA",
    "name": "Назия"
  },
  {
    "slug": "nevskaya-dubrovka",
    "code": "NEVSKAYA_DUBROVKA",
    "name": "Невская Дубровка"
  },
  {
    "slug": "nikolskiy",
    "code": "NIKOLSKIY",
    "name": "Никольский"
  },
  {
    "slug": "novosele",
    "code": "NOVOSELE",
    "name": "Новоселье"
  },
  {
    "slug": "pavlovo",
    "code": "PAVLOVO",
    "name": "Павлово"
  },
  {
    "slug": "priladozhskiy",
    "code": "PRILADOZHSKIY",
    "name": "Приладожский"
  },
  {
    "slug": "rahya",
    "code": "RAHYA",
    "name": "Рахья"
  },
  {
    "slug": "roschino",
    "code": "ROSCHINO",
    "name": "Рощино"
  },
  {
    "slug": "ryabovo",
    "code": "RYABOVO",
    "name": "Рябово"
  },
  {
    "slug": "svirstroy",
    "code": "SVIRSTROY",
    "name": "Свирьстрой"
  },
  {
    "slug": "siverskiy",
    "code": "SIVERSKIY",
    "name": "Сиверский"
  },
  {
    "slug": "sinyavino",
    "code": "SINYAVINO",
    "name": "Синявино"
  },
  {
    "slug": "sovetskiy",
    "code": "SOVETSKIY",
    "name": "Советский"
  },
  {
    "slug": "taytsy",
    "code": "TAYTSY",
    "name": "Тайцы"
  },
  {
    "slug": "toksovo",
    "code": "TOKSOVO",
    "name": "Токсово"
  },
  {
    "slug": "tolmachevo",
    "code": "TOLMACHEVO",
    "name": "Толмачёво"
  },
  {
    "slug": "ulyanovka",
    "code": "ULYANOVKA",
    "name": "Ульяновка"
  },
  {
    "slug": "fedorovskoe",
    "code": "FEDOROVSKOE",
    "name": "Фёдоровское"
  },
  {
    "slug": "fornosovo",
    "code": "FORNOSOVO",
    "name": "Форносово"
  },
  {
    "slug": "yanino-1",
    "code": "YANINO_1",
    "name": "Янино-1"
  }
]) as readonly SettlementMeta[];
export const settlementSlugs = Object.freeze(settlements.map((settlement) => settlement.slug)) as readonly SettlementSlug[];
