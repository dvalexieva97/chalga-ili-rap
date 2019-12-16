// standard modules
const https = require('https');

// dependencies
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


// constants
const mainContainerId = 'maintxt';
const maxParallelDownloads = 2;

// Main functionality

let allSongLyrics = [];
/* Chalga
let urls = [
'https://textove.com/mariya-kaul-klavela-mariya-tekst',
'https://textove.com/tsvetelina-yaneva-vsichko-tekst',
'https://textove.com/aneliya-dah-tekst',
'https://textove.com/emiliya-snezhanka-tekst',
'https://textove.com/galena-habibi-tekst',
'https://textove.com/emanuela-skapoto-se-plashta-tekst',
'https://textove.com/azis-galin-na-egipet-faraona-tekst',
'https://textove.com/galin-lidiya-nyama-da-mi-mine-tekst',
'https://textove.com/alisiya-lidiya-ne-me-narichay-skapa-1-tekst',
'https://textove.com/alisiya-lidiya-ne-me-narichay-skapa-tekst',
'https://textove.com/desi-slava-lidiya-mnogo-lud-tekst',
'https://textove.com/diona-dessita-lidiya-izlazhi-me-tekst',
'https://textove.com/azis-motel-tekst',
'https://textove.com/azis-napipay-go-tekst',
'https://textove.com/azis-tseluvay-me-tekst',
'https://textove.com/azis-tedi-aleksandrova-nasi-podgryavashti-zvezdichki-tekst',
'https://textove.com/azis-mila-moya-angel-moy-tekst',
'https://textove.com/azis-obicham-te-tekst',
'https://textove.com/azis-salzi-tekst',
'https://textove.com/azis-nyakoy-den-tekst',
'https://textove.com/azis-mma-tekst',
'https://textove.com/azis-bivshi-tekst',
'https://textove.com/azis-boli-tekst',
'https://textove.com/azis-vseki-pat-tekst',
'https://textove.com/azis-evala-tekst',
'https://textove.com/azis-kazhi-chestno-tekst',
'https://textove.com/alisiya-na-ti-mi-govori-tekst',
'https://textove.com/alisiya-iliyan-nito-duma-tekst',
'https://textove.com/alisiya-konstantin-liubov-li-e-tekst',
'https://textove.com/alisiya-toni-storaro-dobre-ti-beshe-tekst',
'https://textove.com/alisiya-karamel-tekst',
'https://textove.com/alisiya-ti-li-tekst',
'https://textove.com/alisiya-iliyan-za-posledno-tekst',
'https://textove.com/alisiya-imame-li-vrazka-tekst',
'https://textove.com/alisiya-sablechi-me-tekst',
'https://textove.com/alisiya-zapali-tekst',
'https://textove.com/alisiya-vsichko-si-za-men-tekst',
'https://textove.com/alisiya-dve-sartsa-tekst',
'https://textove.com/alisiya-emrah-dusho-moya-tekst',
'https://textove.com/alisiya-edva-li-te-boli-tekst',
'https://textove.com/alisiya-toni-storaro-zlatoto-na-tati-tekst',
'https://textove.com/alisiya-moy-tekst',
'https://textove.com/galin-liubovta-tekst',
'https://textove.com/galin-emanuela-5-6-7-8-tekst',
'https://textove.com/galin-preslava-moga-tekst',
'https://textove.com/konstantin-galin-kralete-tekst',
'https://textove.com/yanitsa-galin-roklyata-ti-pada-tekst',
'https://textove.com/azis-napipay-go-tekst',
'https://textove.com/azis-tseluvay-me-tekst',
'https://textove.com/azis-tedi-aleksandrova-nasi-podgryavashti-zvezdichki-tekst',
'https://textove.com/azis-mila-moya-angel-moy-tekst',
'https://textove.com/azis-obicham-te-tekst',
'https://textove.com/azis-salzi-tekst',
'https://textove.com/azis-nyakoy-den-tekst',
'https://textove.com/azis-mma-tekst',
'https://textove.com/azis-bivshi-tekst',
'https://textove.com/azis-boli-tekst',
'https://textove.com/azis-vseki-pat-tekst',
'https://textove.com/azis-evala-tekst',
'https://textove.com/azis-kazhi-chestno-tekst',
'https://textove.com/alisiya-na-ti-mi-govori-tekst',
'https://textove.com/alisiya-iliyan-nito-duma-tekst',
'https://textove.com/alisiya-toni-storaro-dobre-ti-beshe-tekst',
'https://textove.com/alisiya-karamel-tekst',
'https://textove.com/alisiya-ti-li-tekst',
'https://textove.com/alisiya-iliyan-za-posledno-tekst',
'https://textove.com/alisiya-imame-li-vrazka-tekst',
'https://textove.com/alisiya-sablechi-me-tekst',
'https://textove.com/alisiya-zapali-tekst',
'https://textove.com/alisiya-vsichko-si-za-men-tekst',
'https://textove.com/alisiya-dve-sartsa-tekst',
'https://textove.com/alisiya-emrah-dusho-moya-tekst',
'https://textove.com/alisiya-edva-li-te-boli-tekst',
'https://textove.com/alisiya-toni-storaro-zlatoto-na-tati-tekst',
'https://textove.com/alisiya-konstantin-liubov-li-e-tekst',
'https://textove.com/alisiya-moy-tekst',
'https://textove.com/desi-slava-i-na-vsichki-kato-tebe-tekst',
'https://textove.com/desi-slava-konstantin-az-byah-tuk-tekst',
'https://textove.com/desi-slava-dzhordan-angelite-plachat-tekst',
'https://textove.com/desi-slava-zabravi-za-men-tekst',
'https://textove.com/desi-slava-lazha-tekst',
'https://textove.com/desi-slava-edna-nosht-tekst',
'https://textove.com/desi-slava-ezi-tura-tekst',
'https://textove.com/desi-slava-dyavolska-magiya-tekst',
'https://textove.com/desi-slava-zhadni-za-liubov-tekst',
'https://textove.com/desi-slava-zabranen-tekst',
'https://textove.com/desi-slava-zavinagi-tekst',
'https://textove.com/desi-slava-dzhordan-zlatoto-mi-tekst',
'https://textove.com/desi-slava-kazhi-mi-1-tekst',
'https://textove.com/desi-slava-mrasni-porachki-tekst',
'https://textove.com/desi-slava-galin-neka-da-e-tayno-tekst',
'https://textove.com/yanitsa-az-li-da-te-ucha-tekst',
'https://textove.com/yanitsa-bebcho-sabudi-se-tekst',
'https://textove.com/yanitsa-v-pet-mi-zvanni-tekst',
'https://textove.com/yanitsa-vinovna-tekst',
'https://textove.com/yanitsa-vsichko-chuzhdo-pozhelavash-tekst',
'https://textove.com/yanitsa-varnah-ti-go-tekst',
'https://textove.com/yanitsa-vartelezhkata-tekst',
'https://textove.com/yanitsa-kristiana-glavnata-tekst',
'https://textove.com/yanitsa-dvoyno-vliuben-tekst',
'https://textove.com/yanitsa-izkushenie-tekst',
'https://textove.com/yanitsa-koy-si-ti-tekst',
'https://textove.com/yanitsa-dj-zhivko-miks-natiskay-tekst',
'https://textove.com/yanitsa-ne-moga-da-spra-tekst',
'https://textove.com/yanitsa-dj-zhivko-miks-neshto-yako-tekst',
'https://textove.com/yanitsa-galin-nyama-da-me-kupish-tekst',
'https://textove.com/yanitsa-nyama-kak-tekst',
'https://textove.com/yanitsa-otmastitelka-tekst',
'https://textove.com/yanitsa-galin-roklyata-ti-pada-tekst',
'https://textove.com/yanitsa-fuklata-tekst',
'https://textove.com/yanitsa-shampionka-tekst',
'https://textove.com/galena-habibi-tekst',
'https://textove.com/tsvetelina-yaneva-vsichko-tekst',
'https://textove.com/aneliya-dah-tekst',
'https://textove.com/emiliya-snezhanka-tekst',
'https://textove.com/mariya-kaul-klavela-mariya-tekst',
'https://textove.com/konstantin-obadi-mi-se-tekst',
'https://textove.com/konstantin-cherna-roza-tekst',
'https://textove.com/konstantin-emanuela-oshte-te-obicham-tekst',
'https://textove.com/konstantin-kato-san-tekst',
'https://textove.com/konstantin-dzhuliya-shte-me-nauchish-li-tekst',
'https://textove.com/konstantin-nespodelena-liubov-tekst',
'https://textove.com/konstantin-ti-si-samo-8-mi-klas-tekst',
'https://textove.com/konstantin-mr-king-tekst',
'https://textove.com/kali-konstantin-v-raya-tekst',
'https://textove.com/konstantin-vizhdam-te-tekst',
'https://textove.com/konstantin-varni-se-tekst',
'https://textove.com/konstantin-greshnik-tekst',
'https://textove.com/konstantin-edvam-me-navi-tekst',
'https://textove.com/konstantin-edna-zhena-edna-liubov-tekst',
'https://textove.com/konstantin-izlishen-tekst',
'https://textove.com/konstantin-toni-storaro-koma-tekst',
'https://textove.com/preslava-gorchivi-spomeni-tekst',
'https://textove.com/preslava-dyavolsko-zhelanie-tekst',
'https://textove.com/preslava-bezrazlichna-tekst',
'https://textove.com/preslava-obicham-te-tekst',
'https://textove.com/preslava-zaklevam-te-tekst',
'https://textove.com/preslava-zavinagi-tvoya-tekst',
'https://textove.com/preslava-amatyorka-tekst',
'https://textove.com/preslava-vsichko-svarshi-tekst',
'https://textove.com/gloriya-stefan-mitrov-toni-dacheva-preslava-tsvetelina-yaneva-mariyana-dve-ochi-razplakani-tekst',
'https://textove.com/preslava-zhenite-sled-men-tekst',
'https://textove.com/galin-preslava-kapitana-kris-za-da-imam-teb-tekst',
'https://textove.com/preslava-iztreznyavash-li-tekst',
'https://textove.com/preslava-kak-ti-stoi-tekst',
'https://textove.com/preslava-kogato-samne-tekst',
'https://textove.com/preslava-kato-za-final-tekst',
'https://textove.com/preslava-lazha-e-tekst',
'https://textove.com/preslava-moeto-slabo-myasto-tekst',
'https://textove.com/preslava-ne-se-iztrivash-tekst',
'https://textove.com/preslava-novata-ti-tekst',
'https://textove.com/preslava-obratno-v-igrata-tekst',
'https://textove.com/preslava-pishi-go-neuspeshno-tekst',
'https://textove.com/preslava-rezhim-neprilichna-tekst',
'https://textove.com/emanuela-vinovna-tekst',
'https://textove.com/emiliya-emanuela-vse-edno-mi-e-tekst',
'https://textove.com/emanuela-notarialno-zaveren-tekst',
'https://textove.com/emanuela-nishto-mazhko-tekst',
'https://textove.com/emanuela-prazni-dumi-tekst',
'https://textove.com/emanuela-gleday-me-na-snimka-tekst',
'https://textove.com/emanuela-are-darpay-tekst',
'https://textove.com/emanuela-bez-chuvstva-tekst',
'https://textove.com/emanuela-vinovna-1-tekst',
'https://textove.com/emanuela-da-si-plashtal-tekst',
'https://textove.com/emanuela-krayna-myarka-tekst',
'https://textove.com/dzhordan-emanuela-kupih-ti-sartse-tekst',
'https://textove.com/konstantin-emanuela-ne-me-zasluzhavash-tekst',
'https://textove.com/emanuela-otzad-mini-tekst',
'https://textove.com/emanuela-pozhelavam-ti-tekst',
'https://textove.com/emanuela-pochti-perfekten-tekst',
'https://textove.com/emanuela-predatel-tekst',
'https://textove.com/emanuela-skapoto-se-plashta-tekst',
'https://textove.com/galin-emanuela-5-6-7-8-tekst',
'https://textove.com/galin-megusta-tekst',
'https://textove.com/galin-lidiya-nyama-da-mi-mine-tekst',
'https://textove.com/galin-kak-si-kazhi-tekst',
'https://textove.com/galin-preslava-tsarya-na-kupona-tekst',
'https://textove.com/galin-112-tekst',
'https://textove.com/galin-vse-napred-tekst',
'https://textove.com/malina-galin-grehove-tekst',
'https://textove.com/galin-edin-na-broy-tekst',
'https://textove.com/galin-ani-hoang-kristiana-mezhdu-nas-tekst',
'https://textove.com/galin-momche-bez-sartse-tekst',
'https://textove.com/azis-galin-na-egipet-faraona-tekst',
'https://textove.com/galin-dzhena-s-mene-da-varvish-tekst',
'https://textove.com/preslava-dzhena-tuk-zhena-mu-pazi-tekst',
'https://textove.com/dzhena-yako-mi-e-tekst',
'https://textove.com/dzhena-koya-tekst',
'https://textove.com/dzhena-huligan-tekst',
'https://textove.com/dzhena-da-ti-bada-korona-tekst',
'https://textove.com/dzhena-diagnoza-ti-tekst',
'https://textove.com/dzhena-zhena-bez-ime-tekst',
'https://textove.com/dzhena-gorkoto-momiche-tekst',
'https://textove.com/dzhena-drazni-me-pak-tekst',
'https://textove.com/andrea-dzhena-piy-edno-ot-mene-tekst',
'https://textove.com/tsvetelina-yaneva-denis-teofikov-greshka-beshe-tekst',
'https://textove.com/toni-storaro-tsvetelina-yaneva-bez-teb-liubov-tekst',
'https://textove.com/galena-tsvetelina-yaneva-marakesh-tekst',
'https://textove.com/tsvetelina-yaneva-chestito-tekst',
'https://textove.com/tsvetelina-yaneva-bolka-moya-tekst',
'https://textove.com/tsvetelina-yaneva-da-te-byah-zaryazala-tekst',
'https://textove.com/tsvetelina-yaneva-fiki-ne-me-ostavyay-tekst',
'https://textove.com/tsvetelina-yaneva-vsichko-tekst',
'https://textove.com/tsvetelina-yaneva-angelat-tekst',
'https://textove.com/tsvetelina-yaneva-bolka-moya-tekst',
'https://textove.com/tsvetelina-yaneva-broy-me-tekst',
'https://textove.com/tsvetelina-yaneva-vidimo-izneveril-tekst',
'https://textove.com/tsvetelina-yaneva-kazhi-mi-alo-tekst',
'https://textove.com/tsvetelina-yaneva-milionerche-tekst',
'https://textove.com/galena-moro-mou-bebeto-mi-tekst',
'https://textove.com/toni-storaro-galena-shefkata-tekst',
'https://textove.com/galena-fenomenalen-tekst',
'https://textove.com/galena-mamauragan-tekst',
'https://textove.com/galena-100-pati-tekst',
'https://textove.com/galena-dj-yat-me-izdade-tekst',
'https://textove.com/galena-zhivko-miks-havana-tropicana-tekst',
'https://textove.com/galena-fiki-bozhe-prosti-tekst',
'https://textove.com/desi-slava-galena-v-tvoite-ochi-tekst',
'https://textove.com/galena-za-pari-tekst',
'https://textove.com/galena-za-posledno-tekst',
'https://textove.com/galena-fiki-koy-tekst',
'https://textove.com/galena-na-dve-golemi-tekst',
'https://textove.com/galena-panika-tekst',
'https://textove.com/azis-galena-tsvetelina-yaneva-pey-sartse-tekst',
'https://textove.com/aneliya-zoopark-tekst',
'https://textove.com/aneliya-dzhuliya-brammm-tekst',
'https://textove.com/aneliya-vyarvay-tekst',
'https://textove.com/aneliya-general-tekst',
'https://textove.com/aneliya-da-ti-vikna-li-taksi-tekst',
'https://textove.com/aneliya-day-mi-oshte-tekst',
'https://textove.com/aneliya-vanya-za-patrona-tekst',
'https://textove.com/aneliya-zoopark-tekst',
'https://textove.com/aneliya-igri-za-naprednali-tekst',
'https://textove.com/aneliya-milo-moe-tekst',
];
*/

/* rap */
let urls = [
'https://textove.com/apsurt-oslushay-se-tekst',
'https://textove.com/apsurt-chuk-chuk-tekst',
'https://textove.com/apsurt-ppp-tekst',
'https://textove.com/apsurt-mama-tekst',
'https://textove.com/apsurt-piyani-tekst',
'https://textove.com/apsurt-moreto-tekst',
'https://textove.com/apsurt-kolega-1-tekst',
'https://textove.com/apsurt-satira-tekst',
'https://textove.com/apsurt-skit-1-tekst',
'https://textove.com/apsurt-gangsteri-tekst',
'https://textove.com/apsurt-psihopat-tekst',
'https://textove.com/apsurt-zvezdata-tekst',
'https://textove.com/apsurt-ako-tekst',
'https://textove.com/apsurt-bozdugan-tekst',
'https://textove.com/apsurt-freestyle-tekst',
'https://textove.com/apsurt-nescafe-3-v-1-tekst',
'https://textove.com/apsurt-kolega-tekst',
'https://textove.com/apsurt-ole-skit-tekst',
'https://textove.com/apsurt-free-style-tekst',
'https://textove.com/apsurt-bela-zhiga-tekst',
'https://textove.com/apsurt-chekay-malko-tekst',
'https://textove.com/apsurt-vtora-tsedka-tekst',
'https://textove.com/apsurt-stiga-fira-tekst',
'https://textove.com/apsurt-tsutska-skit-tekst',
'https://textove.com/apsurt-tozi-tants-tekst',
'https://textove.com/apsurt-bay-huy-tekst',
'https://textove.com/apsurt-tsvyat-zelen-tekst',
'https://textove.com/apsurt-pop-folk-tekst',
'https://textove.com/apsurt-non-stop-tekst',
'https://textove.com/apsurt-nedelya-sutrinta-tekst',
'https://textove.com/apsurt-kalchi-kalki-tekst',
'https://textove.com/apsurt-sveteshti-zhiletki-tekst',
'https://textove.com/degradatsiya-apsurt-go-otnasya-tekst',
'https://textove.com/apsurt-i-dicho-doping-test-tekst',
'https://textove.com/apsurt-ne-pitay-zashto-tekst',
'https://textove.com/apsurt-zhena-ot-shaolin-tekst',
'https://textove.com/apsurt-obicham-mayka-ti-tekst',
'https://textove.com/apsurt-bez-vazpitanie-tsenzurirana-tekst',
'https://textove.com/apsurt-bez-vazpitanie-original-tekst',
'https://textove.com/apsurt-iskam-tvoyto-tyalo-tekst',
'https://textove.com/apsurt-i-ball-face-punta-tekst',
'https://textove.com/apsurt-zhenata-na-shefa-tekst',
'https://textove.com/apsurt-i-beloslava-i-tvoyta-mayka-sashto-tekst',
'https://textove.com/apsurt-i-vasil-naydenov-chekay-malko-tekst',
'https://textove.com/apsurt-dicho-seks-belo-i-treva-tekst',
'https://textove.com/d2-apsurt-dicho-doping-test-tekst',
'https://textove.com/apsurt-zdravo-drazh-ili-pusni-tekst',
'https://textove.com/apsurt-hvani-me-za-trabata-tekst',
'https://textove.com/apsurt-tri-v-edno-neochakvano-dobra-kombinatsiya-tekst',
'https://textove.com/apsurt-chekay-malko-remiks-na-rst-tekst',
'https://textove.com/apsurt-vtora-tsedka-reklamata-na-nescafe-3in1-tekst',
'https://textove.com/apsurt-mran-mran-tekst',
'https://textove.com/so-called-crew-morfin-tekst',
'https://textove.com/so-called-crew-nedey-tekst',
'https://textove.com/so-called-crew-tova-e-tekst',
'https://textove.com/zhlach-trotoari-tekst',
'https://textove.com/zhlach-pechal-tekst',
'https://textove.com/zhlach-prenositelyat-tekst',
'https://textove.com/zhlach-dozhivotna-tekst',
'https://textove.com/zhlach-final-freestyle-tekst',
'https://textove.com/zhlach-egotrip-tova-e-tekst',
'https://textove.com/zhlach-balgarskata-presa-tekst',
'https://textove.com/zhlach-yavkata-dlg-vgz-tekst',
'https://textove.com/zhlach-i-utre-e-den-tekst',
'https://textove.com/zhlach-rusty-balakariya-tekst',
'https://textove.com/zhlach-gena-nikoynemozhedatespasiottovakoetoiskash-tekst',
'https://textove.com/zhlach-kragovrat-freestyle-tekst',
'https://textove.com/zhlach-chalgariya-freestyle-tekst',
'https://textove.com/zhlach-gena-nemilost-tekst',
'https://textove.com/zhlach-gena-ubiy-tekst',
'https://textove.com/zhlach-gena-oko-tekst',
'https://textove.com/zhlach-gena-prestizh-tekst',
'https://textove.com/zhlach-gena-grigovor-otgore-tekst',
'https://textove.com/zhlach-bate-douen-mnogotochie-tekst',
'https://textove.com/zhlach-gena-grigovor-kraya-tekst',
'https://textove.com/zhlach-gena-grigovor-128-tekst',
'https://textove.com/zhlach-gena-sofiysko-gradsko-tekst',
'https://textove.com/fo-zhlach-madmatic-glavnite-gotvachi-tekst',
'https://textove.com/zhlach-gena-kliuchov-reshavasht-tekst',
'https://textove.com/zhlach-gena-grigorov-nikadesiti-tekst',
'https://textove.com/zhlach-bryat-che-gena-doma-tekst',
'https://textove.com/zhlach-chetiri-i-dvayse-za-nachalo-tekst',
'https://textove.com/zhlach-gena-dj-skill-nas-tekst',
'https://textove.com/atila-zhlach-yavkata-dlg-tr1ckmusic-ot-a-do-ya-tekst',
'https://textove.com/zhlach-canal-creatures-of-sofia-freestyle-tekst',
'https://textove.com/zhlach-gena-oko-tekst',
'https://textove.com/gena-grigovor-logo5-zal-tekst',
'https://textove.com/zhlach-gena-grigovor-128-tekst',
'https://textove.com/zhlach-gena-grigovor-kraya-tekst',
'https://textove.com/zhlach-gena-grigovor-otgore-tekst',
'https://textove.com/grigovor-gena-tldr-tekst',
'https://textove.com/jay-tr1ckmusic-grigovor-neshto-kato-sci-fi-tekst',
'https://textove.com/rusty-grigovor-ok-ok-tekst',
'https://textove.com/bate-sasho-egn-tekst',
'https://textove.com/bate-sasho-satanas-bate-pesho-graka-karma-3-tekst',
'https://textove.com/bate-sasho-bate-pesho-camorata-bermudskiyat-triagalnik-tekst',
'https://textove.com/bate-sasho-bate-pesho-tsitata-proshtavam-vi-tekst',
'https://textove.com/bate-sasho-nogo-tekst',
'https://textove.com/bate-sasho-karma-4-tekst',
'https://textove.com/bate-sasho-tiho-tekst',
'https://textove.com/bate-pesho-salzite-tekst',
'https://textove.com/bate-pesho-someday-tekst',
'https://textove.com/bate-sasho-goreshto-tekst',
'https://textove.com/bate-sasho-tatuirana-tekst',
'https://textove.com/bate-sasho-lady-tekst',
'https://textove.com/bate-sasho-zashto-tekst',
'https://textove.com/bate-sasho-diafragma-tekst',
'https://textove.com/bate-pesho-byagam-tekst',
'https://textove.com/bate-sasho-medichi-tekst',
'https://textove.com/bate-douen-porno-tekst',
'https://textove.com/bate-sasho-tapi-pi-tekst',
'https://textove.com/hipodil-bate-goyko-tekst',
'https://textove.com/bate-sasho-pali-tekst',
'https://textove.com/bate-pesho-solo-tekst',
'https://textove.com/bate-sasho-galab-tekst',
'https://textove.com/bate-pesho-salzi-tekst',
'https://textove.com/bate-sasho-moeto-momiche-tekst',
'https://textove.com/bate-pesho-bebo-strast-tekst',
'https://textove.com/bate-sasho-bez-dusha-tekst',
'https://textove.com/bate-sasho-bmw-swag-tekst',
'https://textove.com/bate-sasho-za-teb-tekst',
'https://textove.com/bate-sasho-za-teb-tekst',
'https://textove.com/fars-flying-minds-tekst',
'https://textove.com/so-called-crew-vantka-fengi-vsichko-koeto-iskash-tekst',
'https://textove.com/rapara-kartela-vizhte-vsichki-tekst',
'https://textove.com/secta-mbt-bm-megz-tekst',
'https://textove.com/kapitana-iskah-samo-tebe-tekst',
'https://textove.com/krisko-2bona-gorilla-tekst',
'https://textove.com/angie-corine-kamikaze-tekst',
'https://textove.com/42-neka-zmayat-1-tekst',
'https://textove.com/vrgo-vrag-tekst',
'https://textove.com/dim4ou-mc-hammer-intro-tekst',
'https://textove.com/nadia-samo-teb-1-tekst',
'https://textove.com/kapitana-iskam-da-umra-tekst',
'https://textove.com/bobkata-sensei-grime-tekst',
'https://textove.com/secta-zona-na-komfort-tekst',
'https://textove.com/teodor-petrov-kontrol-tekst',
'https://textove.com/boro-parvi-mayko-mayko-tekst',
'https://textove.com/dax-my-last-words-tekst',
'https://textove.com/trf-bm-za-kvo-tekst',
'https://textove.com/mbt-bm-bb-pg-h5n1-tekst',
'https://textove.com/fyre-sofia-hills-tekst',
'https://textove.com/secta-prim-mamino-sinche-tekst',
'https://textove.com/choko-za-tebe-tekst',
'https://textove.com/deko-preplitam-tekst',
'https://textove.com/mishmash-izvini-me-tekst',
'https://textove.com/kapitana-mahlenetsa-pochvam-s-2-leva-tekst',
'https://textove.com/kapitana-fencheto-bozhidara-gaden-tekst',
'https://textove.com/vanya-g-yoana-star-sinya-krav-tekst',
'https://textove.com/vessou-sam-tekst',
'https://textove.com/fyre-vor-v-zakone-tekst',
'https://textove.com/dim4ou-trf-vrgo-prada-tekst',
'https://textove.com/sugar-djs-spik-deystvie-tekst',
'https://textove.com/marso-mbt-bm-chanel-tekst',
'https://textove.com/yorkaa-haosa-tekst',
'https://textove.com/yorkaa-op-ko-staa-tekst',
'https://textove.com/yorkaa-ot-men-tekst',
'https://textove.com/bobi-beattz-day-mi-tekst',
'https://textove.com/kapitana-bozhidara-obicham-te-tekst',
'https://textove.com/joker-flow-shtotoya-tekst',
'https://textove.com/lacho-skandau-vesi-boneva-netsafnali-rozi-tekst',
'https://textove.com/kapitana-bozhidara-ot-vreme-na-vreme-tekst',
'https://textove.com/kapitana-tragna-si-tekst',
'https://textove.com/bobi-beattz-boli-tekst',
'https://textove.com/zhlach-gena-grigorov-nikadesiti-tekst',
'https://textove.com/kapitana-nadezhda-nadezhda-za-deni-tekst',
'https://textove.com/kapitana-nadezhda-dueta-na-godinata-tekst',
'https://textove.com/kapitana-martvo-sazdanie-tekst',
'https://textove.com/bobi-beattz-neka-da-sa-pray-tekst',
'https://textove.com/bobi-beattz-karera-tekst',
'https://textove.com/skandau-rambo-tekst',
'https://textove.com/bobi-beattz-vlizam-arabskata-tekst',
'https://textove.com/100-kila-toxic-tekst',
'https://textove.com/100-kila-gaz-do-dupka-tekst',
'https://textove.com/wosh-mc-100-kila-kintite-v-sak-tekst',
'https://textove.com/rick-ross-100-kila-babuli-jabulah-tekst',
'https://textove.com/krisko-100-kila-mladi-bulki-tekst',
'https://textove.com/100-kila-100-gaydi-remix-tekst',
'https://textove.com/100-kila-3000-tekst',
'https://textove.com/rick-ross-100-kila-babuli-jabulah-tekst',
'https://textove.com/100-kila-balkan-funk-ne-legal-tekst',
'https://textove.com/100-kila-bom-bom-bom-tekst',
'https://textove.com/100-kila-freestyle-ii-tekst',
'https://textove.com/wosh-mc-vnimavay-tekst',
'https://textove.com/wosh-mc-moya-kur-tekst',
'https://textove.com/wosh-mc-spomeni-tekst',
'https://textove.com/wosh-mc-chovek-na-pokaz-tekst',
'https://textove.com/wosh-mc-raper-bate-tekst',
'https://textove.com/wosh-mc-100-kila-kintite-v-sak-tekst',
'https://textove.com/wosh-mc-momiche-tekst',
'https://textove.com/wosh-mc-fira-tekst',
'https://textove.com/wosh-mc-3-v-1-tekst',
'https://textove.com/wosh-mc-animal-tekst',
'https://textove.com/wosh-mc-better-than-you-tekst',
'https://textove.com/wosh-mc-blank-tekst',
'https://textove.com/wosh-mc-yoko-funkosmos-tekst',
'https://textove.com/wosh-mc-feel-i-got-the-benjamins-tekst',
'https://textove.com/wosh-mc-nice-apartment-tekst',
'https://textove.com/wosh-mc-yoko-nothing-tekst',
'https://textove.com/wosh-mc-on-fire-tekst',
'https://textove.com/wosh-mc-problems-tekst',
'https://textove.com/wosh-mc-we-smoke-tekst',
'https://textove.com/wosh-mc-vnimavay-tekst',
'https://textove.com/wosh-mc-vseki-den-tekst',
'https://textove.com/wosh-mc-gleday-pak-zvezdite-tekst',
'https://textove.com/wosh-mc-dve-taksita-tekst',
'https://textove.com/wosh-mc-zhalta-presa-tekst',
'https://textove.com/wosh-mc-za-moreto-e-taya-pesen-tekst',
'https://textove.com/wosh-mc-moya-kur-tekst',
'https://textove.com/wosh-mc-na-nebeto-tekst',
'https://textove.com/wosh-mc-obicham-ochite-ti-tekst',
'https://textove.com/wosh-mc-feel-yoko-pak-na-more-tekst',
'https://textove.com/wosh-mc-feel-prah-tekst',
'https://textove.com/wosh-mc-pri-loshiya-stil-tekst',
'https://textove.com/wosh-mc-tashatsi-tekst',
'https://textove.com/itso-hazarta-homelesz-imam-chovek-tekst',
];

async function main() {
  for (let i = 0; i < urls.length; ) {

    let songRequestBuffer = [];
    for(let j = 0; j < maxParallelDownloads; j++) {
      if (i == urls.length) {
        continue;
      }
      songRequestBuffer.push(downloadAndParseSongLyrics(urls[i]));
      i++;
    }

    await Promise.all(songRequestBuffer)
    .then(result => {
      allSongLyrics.push(...result);      
      if ( i == urls.length ) {
        console.log('Final result:', JSON.stringify(allSongLyrics));
      }
    })
    .catch(error => console.log(error));
  }
}

main();

// Private functions

async function downloadAndParseSongLyrics(url) {
  return new Promise( (resolve, reject) => {
    // console.log('Donwloading: ' + url);
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        const dom = new JSDOM(data);
        const document = dom.window.document;
        const childNodes = document.getElementById(mainContainerId).childNodes['1'].childNodes;

        const verses = cleanupSongVerses(childNodes);
        // Adds repeating lines
        addRepeatingVerses(verses);
        const chorus = extractChorus(verses);
        addRepeatingChorus(verses, chorus); 
        // console.log('Song chorus: ', chorus);
        // console.log('Song lyrics: ', verses);
        resolve({ url: url, lyrics: verses.join('') });
      });

    }).on("error", (err) => {
      // console.log("Error: " + err.message);
      reject(err.message);
    });

  });
}

function cleanupSongVerses(elements) {
	let verses = [];
	elements.forEach( (obj, key) => { 
		let line = obj.innerHTML.replace(/<br>/g, " ");
		line.trim();
		verses.push(line);
	});
	return verses;
}

function addRepeatingVerses(verses) {
	let versesToAdd = [];
	verses.forEach( verse => {
		if (verse.match(/припев/gi)) {
			return;
		}

		if (!verse.match(/\(x?х?Х?X?(\d)\)$/)) {
			return;
		}


		// Remove 1 since the number is the total times it is sang
		// not how many we need to add
		let repeatCount = verse.match(/\(x?х?Х?X?(\d)\)$/)[1] -1;

		for (let i = 0; i < repeatCount; i++) {
			versesToAdd.push(verse);
		}

	});

	verses.push(...versesToAdd);
	return verses;
}

function extractChorus(verses) {
	const chorus = verses.filter( verse => {
		return verse.match(/припев/gi);
	});

  // Theoretically, although unlikely the chorus may be both anotated and pasted multiple times
  return chorus[0];
}

function addRepeatingChorus(verses, chorus) {
  re = /\([xхХX]\d\)$/g;
  let match;
  let chorusRepeatCount = 0;
	verses.forEach( verse => {

    if (verse.match(/припев:$/i)) {
      chorusRepeatCount++;
    } else {
      matches = re.exec(verse);
      if(!matches) {
        return;
      }
      matches.forEach( (match) => {
        if(!match) {
          return;
        }
        let timesRepeated = verse.match(/\([xхХX](\d)\)$/)[1];
        chorusRepeatCount += parseInt(timesRepeated);
      });
    }
  });
  // console.log('REPEATING CHORUS COUNT: ', chorusRepeatCount);
  while( chorusRepeatCount > 0) {
    chorusRepeatCount--;
    verses.push(chorus);
  }
  return verses;
}
