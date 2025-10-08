import { Period } from "types/historicalDates";


export const historicalData: Period[] = [
    {
      id: 1,
      category: "Технологии",
      startYear: 2015,
      endYear: 2022,
      events: [
        {
          year: 2015,
          description: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
        {
          year: 2016,
          description:
            "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
        },
        {
          year: 2017,
          description: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
        },
        { year: 2018, description: "SpaceX успешно запустила сверхтяжёлую ракету-носитель Falcon Heavy" },
        { year: 2019, description: "Получено первое в истории изображение чёрной дыры" },
        {
          year: 2020,
          description: "Компания SpaceX впервые в истории частной космонавтики доставила астронавтов на МКС",
        },
        { year: 2021, description: "Марсоход Perseverance успешно приземлился на Марсе" },
        { year: 2022, description: "Запущен космический телескоп «Джеймс Уэбб»" },
      ],
    },
    {
      id: 2,
      category: "Кино",
      startYear: 1987,
      endYear: 1991,
      events: [
        { year: 1987, description: 'Вышел фильм "Хищник" с Арнольдом Шварценеггером' },
        { year: 1988, description: 'Премьера аниме "Могила светлячков" Исао Такахаты' },
        { year: 1989, description: 'Вышел фильм "Бэтмен" режиссёра Тима Бёртона' },
        { year: 1990, description: 'Премьера фильма "Один дома" с Маколеем Калкиным' },
        { year: 1991, description: 'Вышел фильм "Терминатор 2: Судный день"' },
      ],
    },
    {
      id: 3,
      category: "Литература",
      startYear: 1992,
      endYear: 1997,
      events: [
        { year: 1992, description: 'Опубликован роман "Игра престолов" Джорджа Мартина' },
        { year: 1993, description: 'Вышла книга "Парк юрского периода" Майкла Крайтона' },
        { year: 1994, description: 'Опубликован роман "Интервью с вампиром" Энн Райс' },
        { year: 1995, description: 'Вышла книга "Высокий замок" Филипа Дика' },
        { year: 1996, description: 'Опубликован роман "Бойцовский клуб" Чака Паланика' },
        { year: 1997, description: "Вышла первая книга о Гарри Поттере" },
      ],
    },
    {
      id: 4,
      category: "Спорт",
      startYear: 1998,
      endYear: 2004,
      events: [
        { year: 1998, description: "Чемпионат мира по футболу во Франции" },
        { year: 1999, description: "Манчестер Юнайтед выиграл требл" },
        { year: 2000, description: "Летние Олимпийские игры в Сиднее" },
        { year: 2002, description: "Чемпионат мира по футболу в Корее и Японии" },
        { year: 2003, description: "Майкл Шумахер выиграл шестой титул Формулы-1" },
        { year: 2004, description: "Летние Олимпийские игры в Афинах" },
      ],
    },
    {
      id: 5,
      category: "Музыка",
      startYear: 2005,
      endYear: 2010,
      events: [
        { year: 2005, description: 'Вышел альбом "Demon Days" группы Gorillaz' },
        { year: 2006, description: 'Релиз альбома "Stadium Arcadium" Red Hot Chili Peppers' },
        { year: 2007, description: 'Вышел альбом "In Rainbows" группы Radiohead' },
        { year: 2008, description: 'Релиз альбома "Viva la Vida" группы Coldplay' },
        { year: 2009, description: "Смерть Майкла Джексона" },
        { year: 2010, description: 'Вышел альбом "My Beautiful Dark Twisted Fantasy" Канье Уэста' },
      ],
    },
    {
      id: 6,
      category: "Наука",
      startYear: 2011,
      endYear: 2018,
      events: [
        { year: 2011, description: "Завершена программа Space Shuttle" },
        { year: 2012, description: "Открыт бозон Хиггса в ЦЕРН" },
        { year: 2013, description: "Обнаружены гравитационные волны" },
        { year: 2014, description: "Посадка зонда Philae на комету" },
        { year: 2015, description: "Миссия New Horizons достигла Плутона" },
        { year: 2016, description: "Обнаружена планета Проксима Центавра b" },
        { year: 2017, description: "Первое наблюдение слияния нейтронных звёзд" },
        { year: 2018, description: "Китайский зонд совершил посадку на обратной стороне Луны" },
      ],
    },
]
