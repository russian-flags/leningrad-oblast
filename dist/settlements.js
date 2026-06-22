const settlements = Object.freeze([
  {
    "slug": "boksitogorsk",
    "code": "BOKSITOGORSK",
    "name": "\u0411\u043E\u043A\u0441\u0438\u0442\u043E\u0433\u043E\u0440\u0441\u043A"
  },
  {
    "slug": "bugry",
    "code": "BUGRY",
    "name": "\u0411\u0443\u0433\u0440\u044B"
  },
  {
    "slug": "volosovo",
    "code": "VOLOSOVO",
    "name": "\u0412\u043E\u043B\u043E\u0441\u043E\u0432\u043E"
  },
  {
    "slug": "volhov",
    "code": "VOLHOV",
    "name": "\u0412\u043E\u043B\u0445\u043E\u0432"
  },
  {
    "slug": "vsevolozhsk",
    "code": "VSEVOLOZHSK",
    "name": "\u0412\u0441\u0435\u0432\u043E\u043B\u043E\u0436\u0441\u043A"
  },
  {
    "slug": "vyborg",
    "code": "VYBORG",
    "name": "\u0412\u044B\u0431\u043E\u0440\u0433"
  },
  {
    "slug": "vysotsk",
    "code": "VYSOTSK",
    "name": "\u0412\u044B\u0441\u043E\u0446\u043A"
  },
  {
    "slug": "gatchina",
    "code": "GATCHINA",
    "name": "\u0413\u0430\u0442\u0447\u0438\u043D\u0430"
  },
  {
    "slug": "ivangorod",
    "code": "IVANGOROD",
    "name": "\u0418\u0432\u0430\u043D\u0433\u043E\u0440\u043E\u0434"
  },
  {
    "slug": "kamennogorsk",
    "code": "KAMENNOGORSK",
    "name": "\u041A\u0430\u043C\u0435\u043D\u043D\u043E\u0433\u043E\u0440\u0441\u043A"
  },
  {
    "slug": "kingisepp",
    "code": "KINGISEPP",
    "name": "\u041A\u0438\u043D\u0433\u0438\u0441\u0435\u043F\u043F"
  },
  {
    "slug": "kirishi",
    "code": "KIRISHI",
    "name": "\u041A\u0438\u0440\u0438\u0448\u0438"
  },
  {
    "slug": "kirovsk",
    "code": "KIROVSK",
    "name": "\u041A\u0438\u0440\u043E\u0432\u0441\u043A"
  },
  {
    "slug": "koltushi",
    "code": "KOLTUSHI",
    "name": "\u041A\u043E\u043B\u0442\u0443\u0448\u0438"
  },
  {
    "slug": "kommunar",
    "code": "KOMMUNAR",
    "name": "\u041A\u043E\u043C\u043C\u0443\u043D\u0430\u0440"
  },
  {
    "slug": "kudrovo",
    "code": "KUDROVO",
    "name": "\u041A\u0443\u0434\u0440\u043E\u0432\u043E"
  },
  {
    "slug": "lodeynoe-pole",
    "code": "LODEYNOE_POLE",
    "name": "\u041B\u043E\u0434\u0435\u0439\u043D\u043E\u0435 \u041F\u043E\u043B\u0435"
  },
  {
    "slug": "luga",
    "code": "LUGA",
    "name": "\u041B\u0443\u0433\u0430"
  },
  {
    "slug": "lyuban",
    "code": "LYUBAN",
    "name": "\u041B\u044E\u0431\u0430\u043D\u044C"
  },
  {
    "slug": "murino",
    "code": "MURINO",
    "name": "\u041C\u0443\u0440\u0438\u043D\u043E"
  },
  {
    "slug": "nikolskoe",
    "code": "NIKOLSKOE",
    "name": "\u041D\u0438\u043A\u043E\u043B\u044C\u0441\u043A\u043E\u0435"
  },
  {
    "slug": "novaya-ladoga",
    "code": "NOVAYA_LADOGA",
    "name": "\u041D\u043E\u0432\u0430\u044F \u041B\u0430\u0434\u043E\u0433\u0430"
  },
  {
    "slug": "otradnoe",
    "code": "OTRADNOE",
    "name": "\u041E\u0442\u0440\u0430\u0434\u043D\u043E\u0435"
  },
  {
    "slug": "pikalevo",
    "code": "PIKALEVO",
    "name": "\u041F\u0438\u043A\u0430\u043B\u0451\u0432\u043E"
  },
  {
    "slug": "podporozhe",
    "code": "PODPOROZHE",
    "name": "\u041F\u043E\u0434\u043F\u043E\u0440\u043E\u0436\u044C\u0435"
  },
  {
    "slug": "primorsk",
    "code": "PRIMORSK",
    "name": "\u041F\u0440\u0438\u043C\u043E\u0440\u0441\u043A"
  },
  {
    "slug": "priozersk",
    "code": "PRIOZERSK",
    "name": "\u041F\u0440\u0438\u043E\u0437\u0435\u0440\u0441\u043A"
  },
  {
    "slug": "svetogorsk",
    "code": "SVETOGORSK",
    "name": "\u0421\u0432\u0435\u0442\u043E\u0433\u043E\u0440\u0441\u043A"
  },
  {
    "slug": "sertolovo",
    "code": "SERTOLOVO",
    "name": "\u0421\u0435\u0440\u0442\u043E\u043B\u043E\u0432\u043E"
  },
  {
    "slug": "slantsy",
    "code": "SLANTSY",
    "name": "\u0421\u043B\u0430\u043D\u0446\u044B"
  },
  {
    "slug": "sosnovyy-bor",
    "code": "SOSNOVYY_BOR",
    "name": "\u0421\u043E\u0441\u043D\u043E\u0432\u044B\u0439 \u0411\u043E\u0440"
  },
  {
    "slug": "syasstroy",
    "code": "SYASSTROY",
    "name": "\u0421\u044F\u0441\u044C\u0441\u0442\u0440\u043E\u0439"
  },
  {
    "slug": "telmana",
    "code": "TELMANA",
    "name": "\u0422\u0435\u043B\u044C\u043C\u0430\u043D\u0430"
  },
  {
    "slug": "tihvin",
    "code": "TIHVIN",
    "name": "\u0422\u0438\u0445\u0432\u0438\u043D"
  },
  {
    "slug": "tosno",
    "code": "TOSNO",
    "name": "\u0422\u043E\u0441\u043D\u043E"
  },
  {
    "slug": "shlisselburg",
    "code": "SHLISSELBURG",
    "name": "\u0428\u043B\u0438\u0441\u0441\u0435\u043B\u044C\u0431\u0443\u0440\u0433"
  },
  {
    "slug": "bolshaya-izhora",
    "code": "BOLSHAYA_IZHORA",
    "name": "\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0418\u0436\u043E\u0440\u0430"
  },
  {
    "slug": "budogosch",
    "code": "BUDOGOSCH",
    "name": "\u0411\u0443\u0434\u043E\u0433\u043E\u0449\u044C"
  },
  {
    "slug": "vazhiny",
    "code": "VAZHINY",
    "name": "\u0412\u0430\u0436\u0438\u043D\u044B"
  },
  {
    "slug": "villozi",
    "code": "VILLOZI",
    "name": "\u0412\u0438\u043B\u043B\u043E\u0437\u0438"
  },
  {
    "slug": "voznesene",
    "code": "VOZNESENE",
    "name": "\u0412\u043E\u0437\u043D\u0435\u0441\u0435\u043D\u044C\u0435"
  },
  {
    "slug": "vyritsa",
    "code": "VYRITSA",
    "name": "\u0412\u044B\u0440\u0438\u0446\u0430"
  },
  {
    "slug": "druzhnaya-gorka",
    "code": "DRUZHNAYA_GORKA",
    "name": "\u0414\u0440\u0443\u0436\u043D\u0430\u044F \u0413\u043E\u0440\u043A\u0430"
  },
  {
    "slug": "efimovskiy",
    "code": "EFIMOVSKIY",
    "name": "\u0415\u0444\u0438\u043C\u043E\u0432\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "imeni-morozova",
    "code": "IMENI_MOROZOVA",
    "name": "\u0438\u043C\u0435\u043D\u0438 \u041C\u043E\u0440\u043E\u0437\u043E\u0432\u0430"
  },
  {
    "slug": "imeni-sverdlova",
    "code": "IMENI_SVERDLOVA",
    "name": "\u0438\u043C\u0435\u043D\u0438 \u0421\u0432\u0435\u0440\u0434\u043B\u043E\u0432\u0430"
  },
  {
    "slug": "krasnyy-bor",
    "code": "KRASNYY_BOR",
    "name": "\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0411\u043E\u0440"
  },
  {
    "slug": "kuznechnoe",
    "code": "KUZNECHNOE",
    "name": "\u041A\u0443\u0437\u043D\u0435\u0447\u043D\u043E\u0435"
  },
  {
    "slug": "kuzmolovskiy",
    "code": "KUZMOLOVSKIY",
    "name": "\u041A\u0443\u0437\u044C\u043C\u043E\u043B\u043E\u0432\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "lebyazhe",
    "code": "LEBYAZHE",
    "name": "\u041B\u0435\u0431\u044F\u0436\u044C\u0435"
  },
  {
    "slug": "lesogorskiy",
    "code": "LESOGORSKIY",
    "name": "\u041B\u0435\u0441\u043E\u0433\u043E\u0440\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "mga",
    "code": "MGA",
    "name": "\u041C\u0433\u0430"
  },
  {
    "slug": "naziya",
    "code": "NAZIYA",
    "name": "\u041D\u0430\u0437\u0438\u044F"
  },
  {
    "slug": "nevskaya-dubrovka",
    "code": "NEVSKAYA_DUBROVKA",
    "name": "\u041D\u0435\u0432\u0441\u043A\u0430\u044F \u0414\u0443\u0431\u0440\u043E\u0432\u043A\u0430"
  },
  {
    "slug": "nikolskiy",
    "code": "NIKOLSKIY",
    "name": "\u041D\u0438\u043A\u043E\u043B\u044C\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "novosele",
    "code": "NOVOSELE",
    "name": "\u041D\u043E\u0432\u043E\u0441\u0435\u043B\u044C\u0435"
  },
  {
    "slug": "pavlovo",
    "code": "PAVLOVO",
    "name": "\u041F\u0430\u0432\u043B\u043E\u0432\u043E"
  },
  {
    "slug": "priladozhskiy",
    "code": "PRILADOZHSKIY",
    "name": "\u041F\u0440\u0438\u043B\u0430\u0434\u043E\u0436\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "rahya",
    "code": "RAHYA",
    "name": "\u0420\u0430\u0445\u044C\u044F"
  },
  {
    "slug": "roschino",
    "code": "ROSCHINO",
    "name": "\u0420\u043E\u0449\u0438\u043D\u043E"
  },
  {
    "slug": "ryabovo",
    "code": "RYABOVO",
    "name": "\u0420\u044F\u0431\u043E\u0432\u043E"
  },
  {
    "slug": "svirstroy",
    "code": "SVIRSTROY",
    "name": "\u0421\u0432\u0438\u0440\u044C\u0441\u0442\u0440\u043E\u0439"
  },
  {
    "slug": "siverskiy",
    "code": "SIVERSKIY",
    "name": "\u0421\u0438\u0432\u0435\u0440\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "sinyavino",
    "code": "SINYAVINO",
    "name": "\u0421\u0438\u043D\u044F\u0432\u0438\u043D\u043E"
  },
  {
    "slug": "sovetskiy",
    "code": "SOVETSKIY",
    "name": "\u0421\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0439"
  },
  {
    "slug": "taytsy",
    "code": "TAYTSY",
    "name": "\u0422\u0430\u0439\u0446\u044B"
  },
  {
    "slug": "toksovo",
    "code": "TOKSOVO",
    "name": "\u0422\u043E\u043A\u0441\u043E\u0432\u043E"
  },
  {
    "slug": "tolmachevo",
    "code": "TOLMACHEVO",
    "name": "\u0422\u043E\u043B\u043C\u0430\u0447\u0451\u0432\u043E"
  },
  {
    "slug": "ulyanovka",
    "code": "ULYANOVKA",
    "name": "\u0423\u043B\u044C\u044F\u043D\u043E\u0432\u043A\u0430"
  },
  {
    "slug": "fedorovskoe",
    "code": "FEDOROVSKOE",
    "name": "\u0424\u0451\u0434\u043E\u0440\u043E\u0432\u0441\u043A\u043E\u0435"
  },
  {
    "slug": "fornosovo",
    "code": "FORNOSOVO",
    "name": "\u0424\u043E\u0440\u043D\u043E\u0441\u043E\u0432\u043E"
  },
  {
    "slug": "yanino-1",
    "code": "YANINO_1",
    "name": "\u042F\u043D\u0438\u043D\u043E-1"
  }
]);
const settlementSlugs = Object.freeze(settlements.map((settlement) => settlement.slug));
export {
  settlementSlugs,
  settlements
};
