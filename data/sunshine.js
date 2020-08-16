const dataset = [
    {'name': 'Tamanrasset', 'continent': 'Africa', 'sunshine': '3701.1', 'lat': '22.785', 'long': '5.52278'},
    {'name': 'Gahanzi', 'continent': 'Africa', 'sunshine': '3578', 'lat': '-21.56667', 'long': '21.78333'},
    {'name': 'Abeché', 'continent': 'Africa', 'sunshine': '3500.9', 'lat': '13.82916', 'long': '20.8324'},
    {'name': 'Alexandira', 'continent': 'Africa', 'sunshine': '3569.6', 'lat': '31.205753', 'long': '29.924526'},
    {'name': 'Cairo', 'continent': 'Africa', 'sunshine': '3541.8', 'lat': '30.033333', 'long': '31.233334'},
    {'name': 'Dakhla Oasis', 'continent': 'Africa', 'sunshine': '3943.4', 'lat': '25.447615', 'long': '30.555038'},
    {'name': 'Helwan', 'continent': 'Africa', 'sunshine': '3725', 'lat': '31.3368529', 'long': '29.8483192'},
    {'name': 'Kharga', 'continent': 'Africa', 'sunshine': '3790.8', 'lat': '25.447615', 'long': '30.555038'},
    {'name': 'Marsa Alam', 'continent': 'Africa', 'sunshine': '3958', 'lat': '25.066668', 'long': '34.900002'},
    {'name': 'Lodwar', 'continent': 'Africa', 'sunshine': '3582', 'lat': '3.11911', 'long': '35.59727'},
    {'name': 'Toliara', 'continent': 'Africa', 'sunshine': '3610', 'lat': '-23.35', 'long': '43.66667'},
    {'name': 'Keetmanshoop', 'continent': 'Africa', 'sunshine': '3848', 'lat': '-26.58333', 'long': '18.13333'},
    {'name': 'Windhoek', 'continent': 'Africa', 'sunshine': '3605', 'lat': '-22.563906', 'long': '17.085548'},
    {'name': 'Upington', 'continent': 'Africa', 'sunshine': '3731.8', 'lat': '-28.44776', 'long': '21.25612'},
    {'name': 'Khartoum', 'continent': 'Africa', 'sunshine': '3731', 'lat': '15.564836', 'long': '32.529831'},
    {'name': 'Kabul', 'continent': 'Asia', 'sunshine': '3175.1', 'lat': '34.543896', 'long': '69.160652'},
    {'name': 'Lhasa', 'continent': 'Asia', 'sunshine': '2990.2', 'lat': '29.652491', 'long': '91.172112'},
    {'name': 'Delhi', 'continent': 'Asia', 'sunshine': '2684.6', 'lat': '28.610001', 'long': '77.230003'},
    {'name': 'Jakarta', 'continent': 'Asia', 'sunshine': '2983.3', 'lat': '-6.135200', 'long': '106.813301'},
    {'name': 'Tehran', 'continent': 'Asia', 'sunshine': '2826.1', 'lat': '35.715298', 'long': '51.404343'},
    {'name': 'Bagdad', 'continent': 'Asia', 'sunshine': '3240.1', 'lat': '	33.312805', 'long': '44.361488'},
    {'name': 'Tel Aviv', 'continent': 'Asia', 'sunshine': '3311', 'lat': '32.111767', 'long': '34.801361'},
    {'name': 'Ulaanbaatar', 'continent': 'Asia', 'sunshine': '2794.5', 'lat': '47.921230', 'long': '106.918556'},
    {'name': 'Muscat', 'continent': 'Asia', 'sunshine': '3493.3', 'lat': '23.614328', 'long': '58.545284'},
    {'name': 'Karachi', 'continent': 'Asia', 'sunshine': '2950.3', 'lat': '24.926294', 'long': '67.022095'},
    {'name': 'Lahore', 'continent': 'Asia', 'sunshine': '3034', 'lat': '31.582045', 'long': '74.329376'},
    {'name': 'Abha', 'continent': 'Asia', 'sunshine': '3248.2', 'lat': '18.216797', 'long': '42.503765'},
    {'name': 'Riyadh', 'continent': 'Asia', 'sunshine': '3224.8', 'lat': '24.774265', 'long': '46.738586'},
    {'name': 'Dubai', 'continent': 'Asia', 'sunshine': '3508.7', 'lat': '25.276987', 'long': '55.296249'},
    {'name': 'Tashkent', 'continent': 'Asia', 'sunshine': '2823.9', 'lat': '41.311081', 'long': '69.240562'},
    {'name': 'Tirana', 'continent': 'Europe', 'sunshine': '2544', 'lat': '41.327953', 'long': '19.819025'},
    {'name': 'Yerevan', 'continent': 'Europe', 'sunshine': '2474', 'lat': '40.177200', 'long': '44.503490'},
    {'name': 'Nicosia', 'continent': 'Europe', 'sunshine': '3314.1', 'lat': '35.185566', 'long': '33.382275'},
    {'name': 'Marseille', 'continent': 'Europe', 'sunshine': '2836', 'lat': '43.296398', 'long': '5.370000'},
    {'name': 'Athens', 'continent': 'Europe', 'sunshine': '2847', 'lat': '37.983810', 'long': '23.727539'},
    {'name': 'Ierapetra', 'continent': 'Europe', 'sunshine': '3102', 'lat': '35.01186', 'long': '25.74234'},
    {'name': 'Rome', 'continent': 'Europe', 'sunshine': '2474', 'lat': '41.902782', 'long': '12.496366'},
    {'name': 'Valletta', 'continent': 'Europe', 'sunshine': '3054', 'lat': '35.896343', 'long': '14.512982'},
    {'name': 'Podgorica', 'continent': 'Europe', 'sunshine': '2482', 'lat': '42.442574', 'long': '19.268646'},
    {'name': 'Skopje', 'continent': 'Europe', 'sunshine': '2339', 'lat': '41.99646', 'long': '21.43141'},
    {'name': 'Lisbon', 'continent': 'Europe', 'sunshine': '2807', 'lat': '38.736946', 'long': '-9.142685'},
    {'name': 'Barcelona', 'continent': 'Europe', 'sunshine': '2591', 'lat': '41.390205', 'long': '2.154007'},
    {'name': 'Madrid', 'continent': 'Europe', 'sunshine': '2766', 'lat': '40.416775', 'long': '-3.703790'},
    {'name': 'Seville', 'continent': 'Europe', 'sunshine': '2906', 'lat': '37.392529', 'long': '-5.994072'},
    {'name': 'Istanbul', 'continent': 'Europe', 'sunshine': '2217', 'lat': '41.015137', 'long': '28.979530'},
    {'name': 'Yuma', 'continent': 'North America', 'sunshine': '4015.3', 'lat': '32.698437', 'long': '-114.650398'},
    {'name': 'Tucson', 'continent': 'North America', 'sunshine': '3806', 'lat': '32.253460', 'long': '-110.911789'},
    {'name': 'San Francisco', 'continent': 'North America', 'sunshine': '3061.7', 'lat': '37.733795', 'long': '-122.446747'},
    {'name': 'San Diego', 'continent': 'North America', 'sunshine': '3054.6', 'lat': '32.715736', 'long': '-117.161087'},
    {'name': 'Sacramento', 'continent': 'North America', 'sunshine': '3607.8', 'lat': '38.575764', 'long': '-121.478851'},
    {'name': 'Phoenix', 'continent': 'North America', 'sunshine': '3871.6', 'lat': '33.448376', 'long': '-112.074036'},
    {'name': 'Oklahoma City', 'continent': 'North America', 'sunshine': '3089.4', 'lat': '35.481918', 'long': '-97.508469'},
    {'name': 'Miami', 'continent': 'North America', 'sunshine': '3154', 'lat': '25.761681', 'long': '-80.191788'},
    {'name': 'Los Angeles', 'continent': 'North America', 'sunshine': '3254.2', 'lat': '34.052235', 'long': '-118.243683'},
    {'name': 'Las Vegas', 'continent': 'North America', 'sunshine': '3825.3', 'lat': '36.114647', 'long': '-115.172813'},
    {'name': 'Fresno', 'continent': 'North America', 'sunshine': '3564.2', 'lat': '29.540457', 'long': '-95.448189'},
    {'name': 'El Paso', 'continent': 'North America', 'sunshine': '3762.5', 'lat': '31.772543', 'long': '-106.460953'},
    {'name': 'Denver', 'continent': 'North America', 'sunshine': '3106.6', 'lat': '39.742043', 'long': '-104.991531'},
    {'name': 'Albuquerque', 'continent': 'North America', 'sunshine': '3415.4', 'lat': '35.106766', 'long': '-106.629181'},
    {'name': 'La Paz', 'continent': 'North America', 'sunshine': '3148', 'lat': '10.201744', 'long': '-84.161453'},
    {'name': 'Honiara', 'continent': 'Oceania', 'sunshine': '2329', 'lat': '-9.43333', 'long': '159.95'},
    {'name': 'Port Moresby', 'continent': 'Oceania', 'sunshine': '2463', 'lat': '-9.44314', 'long': '147.17972'},
    {'name': 'Wellington', 'continent': 'Oceania', 'sunshine': '2058', 'lat': '-33.640480', 'long': '19.009657'},
    {'name': 'Christchurch', 'continent': 'Oceania', 'sunshine': '2070', 'lat': '-43.525650', 'long': '172.639847'},
    {'name': 'Auckland', 'continent': 'Oceania', 'sunshine': '2003', 'lat': '-36.848461', 'long': '174.763336'},
    {'name': 'Suva', 'continent': 'Oceania', 'sunshine': '1922', 'lat': '-18.141600	', 'long': '178.441895'},
    {'name': 'Sydney', 'continent': 'Oceania', 'sunshine': '2635', 'lat': '-33.865143', 'long': '151.209900'},
    {'name': 'Perth', 'continent': 'Oceania', 'sunshine': '3225', 'lat': '-31.953512', 'long': '115.857048'},
    {'name': 'Melbourne', 'continent': 'Oceania', 'sunshine': '2362', 'lat': '-37.819954', 'long': '144.983398'},
    {'name': 'Hobart', 'continent': 'Oceania', 'sunshine': '2165', 'lat': '-42.880554', 'long': '147.324997'},
    {'name': 'Darwin', 'continent': 'Oceania', 'sunshine': '3092', 'lat': '-12.462827', 'long': '130.841782'},
    {'name': 'Canberra', 'continent': 'Oceania', 'sunshine': '2813', 'lat': '-35.282001', 'long': '149.128998'},
    {'name': 'Brisbane', 'continent': 'Oceania', 'sunshine': '2973', 'lat': '-27.470125', 'long': '153.021072'},
    {'name': 'Adelaide', 'continent': 'Oceania', 'sunshine': '2765', 'lat': '-34.921230', 'long': '138.599503'},
    {'name': 'Maracaibo', 'continent': 'South America', 'sunshine': '3284', 'lat': '10.653860', 'long': '-71.645966'},
    {'name': 'Caracas', 'continent': 'South America', 'sunshine': '2506', 'lat': '10.500000', 'long': '-66.916664'},
    {'name': 'Montevideo', 'continent': 'South America', 'sunshine': '2481', 'lat': '-34.901112', 'long': '-56.164532'},
    {'name': 'Arequipa', 'continent': 'South America', 'sunshine': '3333', 'lat': '-16.39889', 'long': '-71.535'},
    {'name': 'Asunción', 'continent': 'South America', 'sunshine': '2702', 'lat': '-25.30066', 'long': '-57.63591'},
    {'name': 'Barranquilla', 'continent': 'South America', 'sunshine': '2562', 'lat': '10.963889', 'long': '-74.796387'},
    {'name': 'Santiago', 'continent': 'South America', 'sunshine': '2807', 'lat': '-33.447487', 'long': '-70.673676'},
    {'name': 'Calama', 'continent': 'South America', 'sunshine': '3926', 'lat': '-22.453712', 'long': '-68.925308'},
    {'name': 'Antofagasta', 'continent': 'South America', 'sunshine': '3077', 'lat': '-23.650000', 'long': '-70.400002'},
    {'name': 'Fortaleza', 'continent': 'South America', 'sunshine': '2843', 'lat': '-3.731862', 'long': '-38.526669'},
    {'name': 'Brasília', 'continent': 'South America', 'sunshine': '2363', 'lat': '-15.793889', 'long': '-47.882778'},
    {'name': 'La Paz', 'continent': 'South America', 'sunshine': '2290', 'lat': '-16.489689', 'long': '-68.119293'},
    {'name': 'Mendoza', 'continent': 'South America', 'sunshine': '2871', 'lat': '-32.888355', 'long': '-68.838844'},
    {'name': 'La Plata', 'continent': 'South America', 'sunshine': '2283', 'lat': '-34.920345', 'long': '-57.969559'},
    {'name': 'Buenos Aires', 'continent': 'South America', 'sunshine': '2525', 'lat': '-34.603722', 'long': '-58.381592'},
];
