import FetchService from "./fetch-service";

export default class FakeGpApiService extends FetchService {

    replyWithDelay = (data, delay = 700) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, delay);
        })
    }

    getTypesOfJobs = () => {
        return this.replyWithDelay([
            {"id": 1, "section": "Раздел Земляные работы", "types": [
                {"id": 1, "name": "Разработка котлована", "measureUnit": "м3"},
                {"id": 2, "name": "Рытье траншеи", "measureUnit": "м3"},
                {"id": 3, "name": "Обратная засыпка", "measureUnit": "м3"},
                {"id": 4, "name": "Обвалование", "measureUnit": "м3"}
            ]},
            {"id": 2, "section": "Раздел Свайные работы", "types": [
                {"id": 5, "name": "Погружение свай", "measureUnit": "шт"},
                {"id": 6, "name": "Устройство буронабивных свай", "measureUnit": "шт"}
            ]},
            {"id": 3, "section": "Раздел Конструкции металлические", "types": [
                {"id": 7, "name": "Монтаж оголовников свай", "measureUnit": "шт"},
                {"id": 8, "name": "Монтаж префабрикованных КМ (укрупненные конструкции, например, фермы)", "measureUnit": "тн"},
                {"id": 9, "name": "Монтаж сборных резервуаров", "measureUnit": "тн"}
            ]}
        ]);
    }

    getReferencesAndRates = () => {
        return this.replyWithDelay([
            {"name": "Земляные работы и работы по благоустройству территории", "groups": [
                {"code": "01-002", "name": "Разработка грунта вручную", "types": [
                    {"id": 1, "code": "УЕР 01-002-01", "name": "в траншеях глубиной до 2 м без креплений с откосами, группа грунта: 1", "measureUnit": "100 м3", "cost": "2 070,00"},
                    {"id": 2, "code": "УЕР 01-002-02", "name": "в траншеях глубиной до 2 м без креплений с откосами, группа грунта: 2", "measureUnit": "100 м3", "cost": "2 702,00"},
                    {"id": 3, "code": "УЕР 01-002-03", "name": "с креплениями в траншеях шириной и глубиной до 2 м, группа грунта: 1", "measureUnit": "100 м3", "cost": "2 358,00"},
                    {"id": 4, "code": "УЕР 01-002-04", "name": "с креплениями в траншеях шириной и глубиной до 2 м, группа грунта: 2", "measureUnit": "100 м3", "cost": "3 564,00"}
                ]}
            ]},
            {"name": "Строительные металлические конструкции", "groups": [
                {"code": "05-001", "name": "Монтаж несущих металлоконструкций", "types": [
                    {"id": 5, "code": "УЕР 05-001-01", "name": "Монтаж опорных плит (металлических ростверков) массой до 0,5 т из проката 265-345 МПа (27-35 кгс/мм2) (марка стали С345, С345к, С345Т1)", "measureUnit": "т", "cost": "1 313,00"},
                    {"id": 6, "code": "УЕР 05-001-02", "name": "Монтаж опорных плит (металлических ростверков) массой 0,5-1 т из проката 265-345 МПа (27-35 кгс/мм2) (марка стали С345, С345к, С345Т1)", "measureUnit": "т", "cost": "1 011,00"},
                    {"id": 7, "code": "УЕР 05-001-03", "name": "Монтаж опорных плит (металлических ростверков) массой более 1 т из проката 265-345 МПа (27-35 кгс/мм2) (марка стали С345, С345к, С345Т1)", "measureUnit": "т", "cost": "728,00"},
                    {"id": 8, "code": "УЕР 05-001-04", "name": "Монтаж опорных конструкций этажерочного типа из проката 265-345 МПа (27-35 кгс/мм2) (марка стали С345, С345к, С345Т1)", "measureUnit": "т", "cost": "1 299,00"}
                ]}
            ]},
            {"name": "Свайные фундаменты", "groups": [
                {"code": "02-003", "name": "Устройство свайного основания буроопускным способом. Установка готовых свай", "types": [
                    {"id": 9, "code": "УЕР 02-003-01", "name": "D 159 мм при длине сваи 9 м (без стоимости материалов)", "measureUnit": "м", "cost": "20,16"},
                    {"id": 10, "code": "УЕР 02-003-02", "name": "D 219 мм при длине сваи 12 м (без стоимости материалов)", "measureUnit": "м", "cost": "16,93"}
                ]}
            ]},
            {"name": "Технологические трубопроводы и арматура", "groups": [
                {"code": "07-001", "name": "Монтаж внутриплощадочных технологических трубопроводов (на условное давление не более 2,5 МПа) из труб и готовых деталей", "types": [
                    {"id": 11, "code": "УЕР 07-001-01", "name": "D18 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "6 980,00"},
                    {"id": 12, "code": "УЕР 07-001-02", "name": "D 25 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "7 332,00"},
                    {"id": 13, "code": "УЕР 07-001-03", "name": "D 32 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "7 556,00"},
                    {"id": 14, "code": "УЕР 07-001-04", "name": "D 38 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "8 638,00"},
                    {"id": 15, "code": "УЕР 07-001-05", "name": "D 45 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "8 812,00"},
                    {"id": 16, "code": "УЕР 07-001-06", "name": "D 57 мм (без стоимости труб и готовых деталей)", "measureUnit": "100 м", "cost": "9 072,00"}
                ]}
            ]}
        ]);
    }

    getFotAndMachineryFor = (id) => {
        //Пока нет данных, возвращаем всегда одну и ту же
        return this.replyWithDelay({
            "id": 1,
            "fot": [
                {"name": "Затраты труда рабочих-строителей Разряд 4", "measureUnit":"чел.-ч", "count": "2.79"},
                {"name": "Затраты труда машинистов", "measureUnit":"чел.-ч", "count": "5.51"}
            ],
            "machinery": [
                {"code": "021144", "name": "Краны на автомобильном ходу при работе на других видах строительства 25 т", "measureUnit": "маш.-ч", "standart": "0.66"},
                {"code": "021146", "name": "Краны на автомобильном ходу при работе на других видах строительства 63 т", "measureUnit": "маш.-ч", "standart": "0.02"},
                {"code": "040202", "name": "Агрегаты сварочные передвижные с номинальным сварочным током 250-400 А с дизельным двигателем", "measureUnit": "маш.-ч", "standart": "0.09"},
                {"code": "060338", "name": "Экскаваторы одноковшовые дизельные на пневмоколесном ходу при работе на других видах строительства 0,4 м3", "measureUnit": "маш.-ч", "standart": "0.03"},
                {"code": "110055", "name": "Автобетоносмесители 6 м3", "measureUnit": "маш.-ч", "standart": "0.4"},
                {"code": "110211", "name": "Автобетононасосы 65 м3/ч", "measureUnit": "маш.-ч", "standart": "0.21"},
                {"code": "121601", "name": "Машины поливомоечные 6000 л", "measureUnit": "маш.-ч", "standart": "0.02"},
                {"code": "140623", "name": "Буровые установки с крутящим моментом 250-350 кНм", "measureUnit": "маш.-ч", "standart": "0.67"}
            ]
        });
    }

    getStructuralElements = () => {
        return this.replyWithDelay([
            {"id": 1, "elemId": "123", "name": "Труба стальная D57", "class": "Трубы", "properties": [
                {"name": "Диаметр", "measureUnit": "", "value": "57"},
                {"name": "Материал", "value": "Сталь"},
                {"name": "Длина", "measureUnit": "м", "value": "11"},
                {"name": "Уровень", "measureUnit": "мм", "value": "2061"}
            ]},
            {"id": 2, "elemId": "234", "name": "Труба стальная D57", "class": "Трубы", "properties": [
                {"name": "Диаметр", "measureUnit": "", "value": "57"},
                {"name": "Материал", "value": "Сталь"},
                {"name": "Длина", "measureUnit": "м", "value": "12"},
                {"name": "Уровень", "measureUnit": "мм", "value": "2062"}
            ]},
            {"id": 3, "elemId": "555", "name": "Швеллер_с_уклоном_внутренних_граней_полок_(У)_ГОСТ_8240-97.МД.2001320.УР.v03", 
                "class": "Швеллера", "properties": [
                {"name": "Диаметр", "measureUnit": "", "value": "53"},
                {"name": "Материал", "value": "Сталь"},
                {"name": "Длина", "measureUnit": "м", "value": "13"},
                {"name": "Уровень", "measureUnit": "мм", "value": "2063"}
            ]}
        ]);
    }

    getMeasureUnits = () => {
        return this.replyWithDelay([
            {"id": 1, "unit": "100 м3", "base": "м3", "factor": 0.01},
            {"id": 2, "unit": "штук", "base": "шт", "factor": 1}
        ]);
    }

    getDesignBrands = () => {
        return this.replyWithDelay([
            {"id": 1, "name": "Технология производства", "brand": "ТХ"},
            {"id": 2, "name": "Технологические коммуникации", "brand": "ТК"},
            {"id": 3, "name": "Генеральный план и сооружения транспорта", "brand": "ГТ"},
            {"id": 4, "name": "Генеральный план", "brand": "ГП"},
            {"id": 5, "name": "Архитектурные решения", "brand": "АР"},
            {"id": 6, "name": "Интерьеры", "brand": "АИ"},
            {"id": 7, "name": "Конструкции железобетонные", "brand": "КЖ"},
            {"id": 8, "name": "Конструкции деревянные", "brand": "КД"},
            {"id": 9, "name": "Архитектурно-строительные решения", "brand": "АС"},
            {"id": 10, "name": "Конструкции металлические деталировочные", "brand": "КМД"},
            {"id": 11, "name": "Водопровод и канализация", "brand": "ВК"},
            {"id": 12, "name": "Отопление, вентиляция и кондиционирование", "brand": "ОВ"},
            {"id": 13, "name": "Тепломеханические решения котельных", "brand": "ТМ"},
            {"id": 14, "name": "Воздухоснабжение", "brand": "ВС"},
            {"id": 15, "name": "Пылеудаление", "brand": "ПУ"},
            {"id": 16, "name": "Холодоснабжение", "brand": "ХС"},
            {"id": 17, "name": "Газоснабжение (внутренние устройства)", "brand": "ГСВ"},
            {"id": 18, "name": "Силовое электрооборудование", "brand": "ЭМ"},
            {"id": 19, "name": "Электрическое освещение (внутреннее)", "brand": "ЭО"},
            {"id": 20, "name": "Системы связи", "brand": "СС"},
            {"id": 21, "name": "Пожаротушение", "brand": "РТ"},
            {"id": 22, "name": "Радиосвязь, радиовещание и телевидение", "brand": "ПТ"},
            {"id": 23, "name": "Пожарная сигнализация", "brand": "ПС"},
            {"id": 24, "name": "Охранная и охранно-пожарная сигнализация", "brand": "ОС"},
            {"id": 25, "name": "Гидротехнические решения", "brand": "ГР"},
            {"id": 26, "name": "Автоматизация …", "brand": "А …"},
            {"id": 27, "name": "Автоматизация комплексная", "brand": "АК"},
            {"id": 28, "name": "Антикоррозионная защита конструкций зданий, сооружений", "brand": "АЗ"},
            {"id": 29, "name": "Антикоррозионная защита технологических аппаратов, газоходов и трубопроводов", "brand": "АЗО"},
            {"id": 30, "name": "Тепловая изоляция оборудования и трубопроводов", "brand": "ТИ"},
            {"id": 31, "name": "Автомобильные дороги", "brand": "АД"},
            {"id": 32, "name": "Железнодорожные пути", "brand": "ПЖ"},
            {"id": 33, "name": "Сооружения транспорта", "brand": "ТР"},
            {"id": 34, "name": "Наружные сети водоснабжения", "brand": "НВ"},
            {"id": 35, "name": "Наружные сети канализации", "brand": "НК"},
            {"id": 36, "name": "Наружные сети водоснабжения и канализации", "brand": "НВК"},
            {"id": 37, "name": "Тепломеханические решения тепловых сетей", "brand": "ТС"},
            {"id": 38, "name": "Наружные газопроводы", "brand": "ГСН"},
            {"id": 39, "name": "Наружное электроосвещение", "brand": "ЭН"},
            {"id": 40, "name": "Электроснабжение", "brand": "ЭС"}
        ]);
    }
}