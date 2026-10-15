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
    "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "GLS", "G-Class"],
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
    "Прочее":        ["Седан", "Кроссовер", "Внедорожник", "Минивэн", "Автобус"],
  };

  const priceCategories = [
    { id: 1, label: "Класс 1", description: "Обычные автомобили" },
    { id: 2, label: "Класс 2", description: "7-местные авто и автобусы" },
  ];

  // Прайс с октября 2026. Пустые цены в исходном прайсе остаются неизвестными.
  const priceMatrix = {
    "moyka": {
      label: "Мойка и детейлинг",
      items: [
        { id:"mo1", title:"Мойка кузова + ковры", price:{1:2000,2:3000} },
        { id:"mo2", title:"Комплексная мойка автомобиля", price:{1:3500,2:5000} },
        { id:"mo3", title:"Уборка салона", price:{1:2000,2:2500} },
        { id:"mo4", title:"Багажник", price:{1:500,2:null} },
        { id:"mo5", title:"Удаление битума, следов насекомых, извести и смолы", from:1, price:{1:500,2:null} },
        { id:"mo6", title:"Чернение резины", sub:"Входит в комплексную мойку", included:true },
        { id:"mo7", title:"Химчистка колёс", price:{1:1500,2:null} },
      ],
    },
    "himchistka": {
      label: "Химчистка салона",
      items: [
        { id:"hi1", title:"Комплексная химчистка салона (с багажником)", from:1, price:{1:30000,2:38000} },
        { id:"hi2", title:"Чистка руля", price:{1:1000,2:1000} },
        { id:"hi3", title:"Чистка одного сиденья", sub:"Цена зависит от степени загрязнения", from:1, price:{1:1500,2:null} },
        { id:"hi4", title:"Чистка коврового покрытия пола", from:1, price:{1:3000,2:5000} },
        { id:"hi5", title:"Химчистка крыши кабриолета", from:1, price:{1:13000,2:13000} },
      ],
    },
    "zashita-salona": {
      label: "Защита салона",
      items: [
        { id:"zs1", title:"Уход за кожаным салоном, нанесение лосьона", from:1, price:{1:1500,2:2000} },
        { id:"zs2", title:"Обработка кожи защитным составом (керамика)", from:1, price:{1:15000,2:15000} },
        { id:"zs3", title:"Обработка тканевой крыши кабриолета (керамика)", from:1, price:{1:15000,2:15000} },
      ],
    },
    "polirovka": {
      label: "Полировка кузова",
      items: [
        { id:"po1", title:"Полировка одной детали кузова", from:1, price:{1:1000,2:1500} },
        { id:"po2", title:"Мягкая полировка кузова", price:{1:17000,2:21000} },
        { id:"po3", title:"Полная абразивная полировка", price:{1:27000,2:30000} },
        { id:"po4", title:"Разбор/сбор под полировку", sub:"Ручки, шильдики и другие элементы", price:{1:7400,2:9500} },
        { id:"po5", title:"Полировка лакированных вставок в салоне", sub:"1 деталь", price:{1:3300,2:3300} },
      ],
    },
    "keramika": {
      label: "Керамика и защита кузова",
      items: [
        { id:"ke1", title:"Нанесение защитного кварцевого покрытия", price:{1:1000,2:1500} },
        { id:"ke2", title:"Нанесение защитного керамического покрытия", from:1, price:{1:20000,2:25000} },
      ],
    },
    "okleyka": {
      label: "Оклейка",
      items: [
        { id:"ok1", title:"Полная оклейка", sub:"Защита всего кузова", from:1, price:{1:230000,2:265000} },
        { id:"ok2", title:"Зоны риска", sub:"Капот, передний бампер, крылья, фары, стойки и полоса на крышу", from:1, price:{1:75000,2:95000} },
      ],
    },
    "tonirovka": {
      label: "Тонировка и гидрофоб стекла",
      items: [
        { id:"to1", title:"Тонировка", from:1, price:{1:25000,2:25000} },
        { id:"to2", title:"Гидрофобное покрытие остекления — передняя полусфера", price:{1:6600,2:6600} },
        { id:"to3", title:"Гидрофобное покрытие остекления — все стёкла", price:{1:8800,2:8800} },
        { id:"to4", title:"Гидрофобное покрытие остекления — панорама", price:{1:3300,2:3300} },
      ],
    },
  };

  // услуги без прайс-листа — считаем индивидуально
  const priceOnRequest = ["bronirovanie-stekla", "shumoizolyatsiya", "antihrom", "dooosnaschenie"];

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

  return { services, promos, carBrands, carModels, priceCategories, priceMatrix, priceOnRequest, extras, gallery, details };
})();
