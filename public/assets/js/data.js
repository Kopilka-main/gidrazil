/* ──────────────────────────────────────────────
   ГИДРАЗИЛ — shared content data
   ────────────────────────────────────────────── */

window.GIDRAZIL = (function () {
  const services = [
    { slug: "moyka",               num: "01", title: "Мойка автомобиля",              short: "Бесконтактная и двухфазная, с защитой воском." },
    { slug: "himchistka",          num: "02", title: "Химчистка салона",              short: "Ткань, кожа, потолок, багажник. Сушка и озон." },
    { slug: "zashita-salona",      num: "03", title: "Защита салона автомобиля",      short: "Водо- и грязеотталкивающие составы для ткани и кожи." },
    { slug: "polirovka",           num: "04", title: "Полировка кузова",              short: "Восстановительная, защитная, под керамику." },
    { slug: "keramika",            num: "05", title: "Нанесение керамики на кузов",   short: "Гидрофоб, твёрдость 9H, защита до 3 лет." },
    { slug: "okleyka",             num: "06", title: "Оклейка автомобиля",            short: "Части кузова, зоны риска или весь кузов. PPF и винил." },
    { slug: "bronirovanie-stekla", num: "07", title: "Бронирование лобового стекла",  short: "Прозрачная плёнка от сколов и трещин." },
    { slug: "tonirovka",           num: "08", title: "Тонировка",                     short: "Атермальная и керамическая. Сертифицированные плёнки." },
    { slug: "shumoizolyatsiya",    num: "09", title: "Шумоизоляция автомобиля",       short: "Двери, пол, арки, потолок. Тише и теплее." },
    { slug: "antihrom",            num: "10", title: "Антихром",                      short: "Хромированные детали перекрашиваем в цвет кузова." },
    { slug: "dooosnaschenie",      num: "11", title: "Дооснащение автомобиля",        short: "Доводчики дверей, подогрев руля, подогрев и вентиляция сидений." },
  ];

  const promos = [
    {
      tag: "АКЦИЯ · ДО 31.08",
      title: "Бронируй заранее — забирай −15 %",
      desc: "Запись на любую услугу больше, чем за 7 дней — минус 15 % от прайса. Действует на все категории кроме полной оклейки.",
      price: "−15%", unit: "к прайсу",
      style: "accent",
    },
    {
      tag: "БРОНИРОВАНИЕ",
      title: "Бронирование лобового стекла",
      desc: "Прозрачная плёнка защищает стекло от сколов и трещин от камней. Сохраняет обзор.",
      price: "35 000", unit: "₽",
      style: "dark",
    },
    {
      tag: "ЗАЩИТА КУЗОВА",
      title: "Полировка + керамика",
      desc: "Восстановительная полировка и керамическое покрытие кузова — блеск и защита в комплексе.",
      price: "от 45 000", unit: "₽",
      style: "paper",
    },
    {
      tag: "РЕКОМЕНДАЦИЯ",
      title: "Приведи друга — скидка 15 %",
      desc: "Порекомендуйте нас другу — и получите скидку 15 % на свою услугу.",
      price: "−15%", unit: "на услугу",
      style: "outline",
    },
    {
      tag: "К ПРОДАЖЕ",
      title: "Подготовка авто к продаже",
      desc: "Комплексная мойка и полировка кузова — товарный вид перед продажей.",
      price: "от 21 000", unit: "₽",
      style: "dark",
    },
  ];

  const carBrands = [
    "BMW", "Mercedes-Benz", "Audi", "Porsche",
    "Lexus", "Toyota", "Volkswagen", "Volvo",
    "Range Rover", "Genesis", "Hyundai", "Kia",
    "Tesla", "Li Auto", "Zeekr", "Прочее",
  ];

  // Sample models per brand (3-5 each — placeholder reasonable)
  const carModels = {
    "BMW":           ["3 серии", "5 серии", "7 серии", "X3", "X5", "X7"],
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "G-Class"],
    "Audi":          ["A4", "A6", "A8", "Q5", "Q7", "Q8"],
    "Porsche":       ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
    "Lexus":         ["ES", "LS", "NX", "RX", "LX", "LM"],
    "Toyota":        ["Camry", "Land Cruiser", "RAV4", "Highlander"],
    "Volkswagen":    ["Polo", "Tiguan", "Touareg", "Multivan"],
    "Volvo":         ["S60", "S90", "XC60", "XC90"],
    "Range Rover":   ["Evoque", "Velar", "Sport", "Range Rover"],
    "Genesis":       ["G70", "G80", "G90", "GV70", "GV80"],
    "Hyundai":       ["Sonata", "Tucson", "Santa Fe", "Palisade"],
    "Kia":           ["K5", "Sportage", "Sorento", "Carnival"],
    "Tesla":         ["Model 3", "Model Y", "Model S", "Model X"],
    "Li Auto":       ["L7", "L8", "L9", "Mega"],
    "Zeekr":         ["001", "007", "009", "X"],
    "Прочее":        ["Седан", "Кроссовер", "Внедорожник", "Минивэн"],
  };

  // size class derived from model (S/M/L/XL) — placeholder
  const sizeClass = {
    "3 серии":"S","5 серии":"M","7 серии":"L","X3":"M","X5":"L","X7":"XL",
    "C-Class":"S","E-Class":"M","S-Class":"L","GLC":"M","GLE":"L","G-Class":"XL",
    "A4":"S","A6":"M","A8":"L","Q5":"M","Q7":"L","Q8":"L",
    "911":"S","Cayenne":"L","Macan":"M","Panamera":"L","Taycan":"M",
    "ES":"M","LS":"L","NX":"M","RX":"L","LX":"XL","LM":"XL",
    "Camry":"M","Land Cruiser":"XL","RAV4":"M","Highlander":"L",
    "Polo":"S","Tiguan":"M","Touareg":"L","Multivan":"XL",
    "S60":"M","S90":"L","XC60":"M","XC90":"L",
    "Evoque":"M","Velar":"L","Sport":"L","Range Rover":"XL",
    "G70":"S","G80":"M","G90":"L","GV70":"M","GV80":"L",
    "Sonata":"M","Tucson":"M","Santa Fe":"L","Palisade":"XL",
    "K5":"M","Sportage":"M","Sorento":"L","Carnival":"XL",
    "Model 3":"M","Model Y":"M","Model S":"L","Model X":"L",
    "L7":"L","L8":"L","L9":"XL","Mega":"XL",
    "001":"M","007":"M","009":"XL","X":"M",
    "Седан":"M","Кроссовер":"L","Внедорожник":"XL","Минивэн":"XL",
  };

  // Price matrix by size (S/M/L/XL)
  const priceMatrix = {
    "moyka": {
      label: "Мойка",
      items: [
        { id:"m1", title:"Экспресс-мойка",          sub:"Кузов + диски + сушка",                price:{S:1200,M:1500,L:1800,XL:2200}, dur:"35 мин" },
        { id:"m2", title:"Стандарт двухфазная",     sub:"Активная пена + ручная мойка + сушка", price:{S:2200,M:2600,L:3100,XL:3700}, dur:"60 мин" },
        { id:"m3", title:"Премиум с воском",        sub:"Двухфазная + воск + интерьер сухой",   price:{S:3800,M:4400,L:5100,XL:6200}, dur:"90 мин" },
        { id:"m4", title:"Декристалл (соль зимой)", sub:"Снятие реагентов с днища и арок",      price:{S:2400,M:2800,L:3300,XL:4000}, dur:"45 мин" },
      ],
    },
    "himchistka": {
      label: "Химчистка салона",
      items: [
        { id:"h1", title:"Локальная (1 зона)",       sub:"Сиденье, ковёр или элемент",           price:{S:2500,M:2800,L:3200,XL:3800},     dur:"1 час" },
        { id:"h2", title:"Полная — ткань",           sub:"Сиденья + потолок + ковры + багажник", price:{S:11000,M:13500,L:16000,XL:19000}, dur:"6 часов" },
        { id:"h3", title:"Полная — кожа",            sub:"Очистка + питание + защита",           price:{S:14000,M:17000,L:20000,XL:23500}, dur:"6 часов" },
        { id:"h4", title:"После животных / куряк",   sub:"Озонирование + дезодорация",           price:{S:4500,M:5500,L:6500,XL:7500},     dur:"+3 часа" },
      ],
    },
    "zashita-salona": {
      label: "Защита салона",
      items: [
        { id:"zs1", title:"Защита ткани",            sub:"Антигрязь, водоотталкивающий состав",  price:{S:6000,M:7000,L:8000,XL:9500},     dur:"2 часа" },
        { id:"zs2", title:"Защита кожи",             sub:"Питание + защитный барьер",            price:{S:7000,M:8000,L:9500,XL:11000},    dur:"2 часа" },
        { id:"zs3", title:"Комплекс «салон под защиту»", sub:"Ткань + кожа + пластик",           price:{S:12000,M:14000,L:16500,XL:19000}, dur:"5 часов" },
      ],
    },
    "polirovka": {
      label: "Полировка кузова",
      items: [
        { id:"p1", title:"Защитная полировка",       sub:"1 этап, мягкий полироль",              price:{S:9000,M:11000,L:13500,XL:16000},  dur:"4 часа" },
        { id:"p2", title:"Восстановительная",        sub:"2 этапа, удаление царапин 60–80%",     price:{S:18000,M:22000,L:26500,XL:32000}, dur:"1 день" },
        { id:"p3", title:"Глубокая полировка",       sub:"3 этапа + защитный слой",              price:{S:28000,M:34000,L:40500,XL:48000}, dur:"2 дня" },
        { id:"p4", title:"Полировка фар",            sub:"Бронепленка после",                    price:{S:3500,M:3500,L:4000,XL:4500},     dur:"2 часа" },
      ],
    },
    "keramika": {
      label: "Керамика на кузов",
      items: [
        { id:"c1", title:"Керамика 1 слой",          sub:"Гидрофобность 6+ мес, твёрдость 9H",   price:{S:24000,M:28000,L:34000,XL:40000}, dur:"1 день" },
        { id:"c2", title:"Керамика 2 слоя",          sub:"Гарантия 18 мес, защита кузова",       price:{S:38000,M:44000,L:52000,XL:62000}, dur:"2 дня" },
        { id:"c3", title:"Керамика 9H Premium",      sub:"Защита 3 года, глубина цвета",         price:{S:62000,M:72000,L:84000,XL:96000}, dur:"3 дня" },
        { id:"c4", title:"Защита стёкол",            sub:"Антидождь + защита от налёта",         price:{S:6000,M:7000,L:8000,XL:9500},     dur:"1 час" },
      ],
    },
    "okleyka": {
      label: "Оклейка кузова",
      items: [
        { id:"ok1", title:"Фары",                    sub:"PPF, защита от пескоструя",             price:{S:4500,M:5000,L:5500,XL:6500},         dur:"2 часа" },
        { id:"ok2", title:"Капот",                   sub:"PPF полиуретан, гарантия 7 лет",        price:{S:14000,M:16500,L:19000,XL:22000},     dur:"1 день" },
        { id:"ok3", title:"Зоны риска (комплект)",   sub:"Капот, фары, бампер, пороги, ручки",    price:{S:38000,M:44000,L:52000,XL:62000},     dur:"2 дня" },
        { id:"ok4", title:"Полная оклейка PPF",      sub:"Защита всего кузова, 7 лет",            price:{S:225000,M:265000,L:320000,XL:380000}, dur:"7 дней" },
        { id:"ok5", title:"Винил — смена цвета",     sub:"Под ключ, демонтируется без следов",    price:{S:135000,M:160000,L:195000,XL:235000}, dur:"4 дня" },
      ],
    },
    "bronirovanie-stekla": {
      label: "Бронирование стекла",
      items: [
        { id:"bs1", title:"Лобовое — антискол",      sub:"Прозрачная плёнка от сколов и трещин",  price:{S:14000,M:15500,L:17000,XL:19500}, dur:"3 часа" },
        { id:"bs2", title:"Лобовое — атермал + бронь", sub:"Защита + теплоотражение",             price:{S:22000,M:24000,L:27000,XL:30000}, dur:"4 часа" },
        { id:"bs3", title:"Фары — бронепленка",      sub:"Защита оптики",                         price:{S:4500,M:5000,L:5500,XL:6500},     dur:"2 часа" },
      ],
    },
    "tonirovka": {
      label: "Тонировка",
      items: [
        { id:"t1", title:"Атермальная — лобовое",    sub:"Прозрачная, 70%+ светопропуск",        price:{S:14000,M:15500,L:17000,XL:19500}, dur:"3 часа" },
        { id:"t2", title:"Боковые задние",           sub:"Карбоновая, на выбор плотность",       price:{S:6000,M:7000,L:8000,XL:9500},     dur:"2 часа" },
        { id:"t3", title:"Полный круг — премиум",    sub:"Атермальная + керамическая",           price:{S:32000,M:36000,L:42000,XL:48000}, dur:"5 часов" },
        { id:"t4", title:"Растонировка",             sub:"Демонтаж старой плёнки, чистка",       price:{S:3500,M:4000,L:4500,XL:5500},     dur:"1.5 часа" },
      ],
    },
    "shumoizolyatsiya": {
      label: "Шумоизоляция",
      items: [
        { id:"sh1", title:"Двери (4 шт.)",           sub:"Виброизоляция + антишум",               price:{S:14000,M:16000,L:18000,XL:21000}, dur:"1 день" },
        { id:"sh2", title:"Пол + багажник",          sub:"Снижение гула и дорожного шума",        price:{S:18000,M:21000,L:24000,XL:28000}, dur:"1 день" },
        { id:"sh3", title:"Колёсные арки",           sub:"Антигравий + шумопоглощение",           price:{S:12000,M:14000,L:16000,XL:19000}, dur:"1 день" },
        { id:"sh4", title:"Комплекс «тишина»",       sub:"Двери, пол, арки, потолок",             price:{S:42000,M:48000,L:56000,XL:66000}, dur:"2–3 дня" },
      ],
    },
    "antihrom": {
      label: "Антихром",
      items: [
        { id:"ah1", title:"Отдельные элементы",      sub:"Молдинги, решётка или эмблемы — по элементам", price:{S:35000,M:45000,L:55000,XL:70000},      dur:"1–2 дня" },
        { id:"ah2", title:"Комплект «внешний хром»", sub:"Молдинги + решётка + ручки",            price:{S:110000,M:130000,L:150000,XL:180000}, dur:"3–4 дня" },
        { id:"ah3", title:"Полный антихром",         sub:"Весь хром снимаем и красим в цвет кузова или чёрный", price:{S:180000,M:210000,L:240000,XL:280000}, dur:"5–7 дней" },
      ],
    },
    "dooosnaschenie": {
      label: "Дооснащение",
      items: [
        { id:"do1", title:"Доводчики дверей (пара)", sub:"Плавное бесшумное закрытие",            price:{S:14000,M:14000,L:15000,XL:16000}, dur:"3 часа" },
        { id:"do2", title:"Подогрев руля",           sub:"Встроенный, с кнопкой",                 price:{S:9000,M:9000,L:9500,XL:10000},    dur:"3 часа" },
        { id:"do3", title:"Подогрев сидений (пара)", sub:"Карбоновые маты, регулировка",          price:{S:11000,M:11000,L:12000,XL:13000}, dur:"4 часа" },
        { id:"do4", title:"Вентиляция сидений (пара)", sub:"Активный обдув, регулировка",         price:{S:26000,M:27000,L:28000,XL:30000}, dur:"1 день" },
      ],
    },
  };

  // extras (доп. оборудование)
  const extras = [
    { id:"01", title:"Подушка под поясницу",     desc:"Анатомическая, мемори-форм, чехол замша.",      price:"3 800 ₽", iconPath:"M6 12 Q12 6 18 12 T30 12 V20 H6 Z" },
    { id:"02", title:"Подголовник Touring",      desc:"Под голову и шею, крепление на любые сиденья.", price:"4 200 ₽", iconPath:"M10 6 Q18 4 26 6 V18 H10 Z" },
    { id:"03", title:"Коврики Eva 3D",           desc:"Высокий борт, точно по модели авто, 4 шт.",     price:"9 500 ₽", iconPath:"M4 8 H32 V24 H4 Z M8 12 H28 V20 H8 Z" },
    { id:"04", title:"Коврик в багажник",        desc:"Бортик 6 см, не скользит, моется водой.",       price:"4 700 ₽", iconPath:"M4 10 H32 V22 H4 Z" },
    { id:"05", title:"Сумка-органайзер",         desc:"В багажник, плотный нейлон, 3 секции.",         price:"3 200 ₽", iconPath:"M6 10 H30 L28 24 H8 Z M14 10 V8 H22 V10" },
    { id:"06", title:"Чехол на руль",            desc:"Натуральная кожа, прошив, 5 размеров.",         price:"2 600 ₽", iconPath:"M18 6 A12 12 0 1 0 18 30 A12 12 0 1 0 18 6 M14 18 H22" },
    { id:"07", title:"Защитная плёнка на экран", desc:"Антибликовая, мульти-медиа 9–14″.",             price:"1 900 ₽", iconPath:"M6 8 H30 V24 H6 Z M6 26 H30" },
    { id:"08", title:"Карман между сидений",     desc:"Кожзам, держатели карт и стаканов.",            price:"2 400 ₽", iconPath:"M6 14 H30 V24 H6 Z M12 14 V10 H24 V14" },
    { id:"09", title:"Набор для ухода",          desc:"Шампунь, воск, микрофибра ×3, аппликатор.",     price:"4 900 ₽", iconPath:"M10 10 H14 V20 H10 Z M18 8 H22 V22 H18 Z M26 12 H30 V18 H26 Z" },
  ];

  // real work photos per service (public/assets/img/works/)
  const gallery = {
    "moyka":               [{ f:"moyka-do.jpg", b:"до" }, { f:"moyka-posle.jpg", b:"после" }, { f:"moyka-1.jpg" }],
    "himchistka":          [{ f:"himchistka-1.jpg" }, { f:"himchistka-2.jpg" }, { f:"himchistka-3.jpg" }],
    "zashita-salona":      [{ f:"zashita-salona-1.jpg" }, { f:"zashita-salona-2.jpg" }, { f:"zashita-salona-3.jpg" }],
    "polirovka":           [{ f:"polirovka-1.jpg" }, { f:"polirovka-2.jpg" }, { f:"polirovka-3.jpg" }],
    "keramika":            [{ f:"keramika-1.jpg" }],
    "okleyka":             [{ f:"okleyka-1.jpg" }, { f:"okleyka-2.jpg" }],
    "bronirovanie-stekla": [{ f:"bronirovanie-stekla-1.jpg" }, { f:"bronirovanie-stekla-2.jpg" }, { f:"bronirovanie-stekla-3.jpg" }],
    "tonirovka":           [{ f:"tonirovka-do.jpg", b:"до" }, { f:"tonirovka-posle.jpg", b:"после" }],
    "antihrom":            [{ f:"antihrom-posle-1.jpg", b:"после" }, { f:"antihrom-do-1.jpg", b:"до" }, { f:"antihrom-posle-2.jpg", b:"после" }, { f:"antihrom-do-2.jpg", b:"до" }],
  };

  // per-service detailed description + process steps (falls back to generic if absent)
  const details = {
    "antihrom": {
      intro: [
        "Антихром — снятие хрома и покраска. Хромированные элементы приводим к цвету кузова или в чёрный: получается стойко и «монолитно», без блестящих вставок.",
      ],
      steps: [
        { title: "Разбор и снятие деталей", sub: "Демонтируем хромированные элементы с автомобиля." },
        { title: "Удаление хрома",          sub: "Химическое травление специальными реагентами." },
        { title: "Подготовка поверхности",  sub: "Грунтуем, при необходимости шпатлюем." },
        { title: "Покраска и лак",          sub: "Красим в цвет кузова или чёрный, покрываем лаком." },
      ],
      note: "Плюсы: долговечно и монолитно выглядит.",
    },
  };

  return { services, promos, carBrands, carModels, sizeClass, priceMatrix, extras, gallery, details };
})();
