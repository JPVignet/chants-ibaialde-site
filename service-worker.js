const CACHE_NAME = "chants-cache-v19";

const urlsToCache = [
  "Chants_Basques_html/ABENTURAZ_ABENTURA.html",
  "Chants_Basques_html/ABERRIAREN_MUGAK.html",
  "Chants_Basques_html/AGURE_ZAHARRA.html",
  "Chants_Basques_html/AGUR_JAUNAK.html",
  "Chants_Basques_html/AITA_SEMEAK.html",
  "Chants_Basques_html/AITORREN_HIZKUNTZ_ZAHARRA.html",
  "Chants_Basques_html/AMA_LURRAREN_OIHUA.html",
  "Chants_Basques_html/AMETS_BAT_OTE_DA.html",
  "Chants_Basques_html/ANDRE_MADALEN.html",
  "Chants_Basques_html/ARBOLA_GAINEAN.html",
  "Chants_Basques_html/ARDIAK_LERRO_LERRO.html",
  "Chants_Basques_html/ARGI_ZIRRINTA_ZENIAN.html",
  "Chants_Basques_html/ARRANTZALEAK.html",
  "Chants_Basques_html/ARROSAKO_ZOLAN.html",
  "Chants_Basques_html/ASKATASUNAREN_ADARRA.html",
  "Chants_Basques_html/ASKATASUNERA.html",
  "Chants_Basques_html/ATARRATZEKO_GAZTELUKO_KANTUA.html",
  "Chants_Basques_html/ATHENRY-KO_ZELAIAK.html",
  "Chants_Basques_html/AUZOAN_ZER_BERRI_DEN.html",
  "Chants_Basques_html/AZKEN_DANTZA_HAU.html",
  "Chants_Basques_html/BAGARE.html",
  "Chants_Basques_html/BAKEAREN_MUSIKA.html",
  "Chants_Basques_html/BALDORBA.html",
  "Chants_Basques_html/BALE_IHIZI.html",
  "Chants_Basques_html/BARATZE_BAT.html",
  "Chants_Basques_html/BEDATSIAN.html",
  "Chants_Basques_html/BEGIAK_FARREZ.html",
  "Chants_Basques_html/BEGI_URDINEZKO_IZARRA.html",
  "Chants_Basques_html/BELLA_CIAO.html",
  "Chants_Basques_html/BELLA_CIAO_ABERTZALE.html",
  "Chants_Basques_html/BIHOTZA.html",
  "Chants_Basques_html/BI_HAURREN_AMETSA.html",
  "Chants_Basques_html/BOGA_BOGA.html",
  "Chants_Basques_html/DIN_DAN_DON.html",
  "Chants_Basques_html/DONOSTIAKO_MARTXA.html",
  "Chants_Basques_html/De_Treville_ren_Azken_Hitzak.html",
  "Chants_Basques_html/EGUN_DA_SANTI_MAMINA.html",
  "Chants_Basques_html/EGUN_ON.html",
  "Chants_Basques_html/EKAITZA.html",
  "Chants_Basques_html/EKI_EDER.html",
  "Chants_Basques_html/ELURRA_TEILATUAN.html",
  "Chants_Basques_html/ENE_AMODIOA.html",
  "Chants_Basques_html/ENAUT_BIDEGORRI.html",
  "Chants_Basques_html/EPERRA.html",
  "Chants_Basques_html/ESKUALDUNA_NAIZ_ETA.html",
  "Chants_Basques_html/ETXAHUN_IRURI.html",
  "Chants_Basques_html/EUSKUAL_HERRIAN_EUSKARAZ.html",
  "Chants_Basques_html/EZ_GINUKE.html",
  "Chants_Basques_html/Ez_Ez_Dut_Nahi.html",
  "Chants_Basques_html/GALDETZEN.html",
  "Chants_Basques_html/GAZTE_NAIZ_GAZTE.html",
  "Chants_Basques_html/GEREZIEN_DENBORA.html",
  "Chants_Basques_html/GOGOAREN_BAITAN.html",
  "Chants_Basques_html/GOIZEAN_GOIZ_JEIKIRIK.html",
  "Chants_Basques_html/GOIZIAN_ARGI_HASTIAN.html",
  "Chants_Basques_html/GORA_TA_GORA_BETI.html",
  "Chants_Basques_html/GREZIAKO_ITSASONTZIA.html",
  "Chants_Basques_html/GUK_EUSKARAZ.html",
  "Chants_Basques_html/GURE_AITA.html",
  "Chants_Basques_html/HABANERA.html",
  "Chants_Basques_html/HAIZEA.html",
  "Chants_Basques_html/HATOR.html",
  "Chants_Basques_html/HAURTXO_SEASKAN.html",
  "Chants_Basques_html/HEGOAK.html",
  "Chants_Basques_html/HERRIBEHERA.html",
  "Chants_Basques_html/Haurrak_ikasazue.html",
  "Chants_Basques_html/IKUSI_NUENEAN.html",
  "Chants_Basques_html/IKUSTEN_DUZU_GOIZEAN.html",
  "Chants_Basques_html/ILUNTZEAN.html",
  "Chants_Basques_html/ITSASOA.html",
  "Chants_Basques_html/ITSASOAN_URAK_HAUNDI.html",
  "Chants_Basques_html/ITSASOARI_BEGIRA.html",
  "Chants_Basques_html/ITSAS_ONTZI_BATEN.html",
  "Chants_Basques_html/ITURINGO_AROTZA.html",
  "Chants_Basques_html/IXILTASUNA.html",
  "Chants_Basques_html/IXIL_IXILIK_DAGO.html",
  "Chants_Basques_html/JAUN_BARUAK.html",
  "Chants_Basques_html/JOSEBA_ELOSEGI.html",
  "Chants_Basques_html/KATTALIN.html",
  "Chants_Basques_html/KRIOLINAK.html",
  "Chants_Basques_html/KULTUR_KIROL.html",
  "Chants_Basques_html/LAGUN_ETOR_GUREKIN.html",
  "Chants_Basques_html/LANIK_GABE.html",
  "Chants_Basques_html/LARROSA_KOLOREZ.html",
  "Chants_Basques_html/LAU_TEILATU.html",
  "Chants_Basques_html/LA_PALOMA.html",
  "Chants_Basques_html/LOREAK_UDAN.html",
  "Chants_Basques_html/LORETXOA.html",
  "Chants_Basques_html/LORE_POLIT_BATEN_BILA.html",
  "Chants_Basques_html/MAITASUN_AROAK.html",
  "Chants_Basques_html/MAITASUN_NORTASUN.html",
  "Chants_Basques_html/MAITIAK_GALDE_EGIN_ZAUTAN.html",
  "Chants_Basques_html/MARIA_SOLT_ETA_KASTERO.html",
  "Chants_Basques_html/MARINELAREN_KONTRA_PASA.html",
  "Chants_Basques_html/MARTXA_BATEN_LEHEN_NOTAK.html",
  "Chants_Basques_html/MATALAZ.html",
  "Chants_Basques_html/MENDIAN_GORA_HARITZA.html",
  "Chants_Basques_html/MUNAGORRIREN_BERTSOAK.html",
  "Chants_Basques_html/MUNDUKO_JABE.html",
  "Chants_Basques_html/MUNDURAT_EMAN_NINDUZUN.html",
  "Chants_Basques_html/NERE_HERRIKO_NESKATXA_MAITE.html",
  "Chants_Basques_html/NESKATXA_EZAGUN_BAT.html",
  "Chants_Basques_html/NEURE_ANDREA_ANDRE_ONA_DA.html",
  "Chants_Basques_html/NEVADARAT_JOAN_NINTZAN.html",
  "Chants_Basques_html/NIGARRA_BEGIAN.html",
  "Chants_Basques_html/NIGARREZ_SORTU.html",
  "Chants_Basques_html/NIRE_HERRIA_BEZALA.html",
  "Chants_Basques_html/NOLA_BIZI_HALA_KANTA.html",
  "Chants_Basques_html/NON_GERATZEN_DEN_DENBORA.html",
  "Chants_Basques_html/OIHAN_BELTZIAN.html",
  "Chants_Basques_html/OI_AMA_ESKUAL_HERRI.html",
  "Chants_Basques_html/OI_GU_HEMEN.html",
  "Chants_Basques_html/OI_KANTA_BERRI.html",
  "Chants_Basques_html/OLENTZERO.html",
  "Chants_Basques_html/ONDARABIA.html",
  "Chants_Basques_html/Olentzeroren_oparia.html",
  "Chants_Basques_html/PARISEN_ETA_MADRILEN.html",
  "Chants_Basques_html/PENA_BAIONA.html",
  "Chants_Basques_html/PENA_BAIONA_(Euskara).html",
  "Chants_Basques_html/PILOTARIEN_BILTZARRA.html",
  "Chants_Basques_html/POTTOKA.html",
  "Chants_Basques_html/PRIMADERAKO_LILIAK.html",
  "Chants_Basques_html/PRIMA_EIJERRA.html",
  "Chants_Basques_html/SEASKA_KANTA.html",
  "Chants_Basques_html/TOPA_DAGIGUN.html",
  "Chants_Basques_html/TXALAPARTA.html",
  "Chants_Basques_html/TXIKIA.html",
  "Chants_Basques_html/Ttiki_Ttikitik.html",
  "Chants_Basques_html/URTE_BATEZ.html",
  "Chants_Basques_html/URTXINTXAK.html",
  "Chants_Basques_html/USAIAN_BEZALA.html",
  "Chants_Basques_html/Urtoroz_bezala.html",
  "Chants_Basques_html/XALBADORREN_HERIOTZEAN.html",
  "Chants_Basques_html/XORIERI_MINTZO_ZEN.html",
  "Chants_Basques_html/XORROTXAK.html",
  "Chants_Basques_html/ZAZPI_EUSKAL_HERRIEK.html",
  "Chants_Basques_html/ZAZPI_LORE.html",
  "Chants_Basques_html/ZENBAT_GARA_ANGELU.html",
  "Chants_Basques_html/ZENBAT_GERA.html",
  "Chants_Basques_html/ZERTARAKO.html",
  "Chants_Basques_html/Zato_Olentzero.html",
  "Chants_Basques_html/Zazpiak_Oihal_Batetik.html",
  "Chants_Basques_html/Zurekin_batera.html",
  "Chants_Basques_html/index.html",
  "Chants_Basques_html/style.css",
  "Chants_Corses_html/COMPANERO.html",
  "Chants_Corses_html/VOLE.html",
  "Chants_Corses_html/index.html",
  "Chants_Corses_html/style.css",
  "Chants_Creoles_html/Ba_moin_en_tibo.html",
  "Chants_Creoles_html/INN_TI_MANZEL.html",
  "Chants_Creoles_html/P_tite_Fleur_Aime.html",
  "Chants_Creoles_html/index.html",
  "Chants_Creoles_html/style.css",
  "Chants_Espagnols_html/AMOR_DE_MIS_AMORES.html",
  "Chants_Espagnols_html/CHIRI_BIRIBIN_MARIA_ISABEL.html",
  "Chants_Espagnols_html/CIELITO_LINDO.html",
  "Chants_Espagnols_html/CLAVERITOS.html",
  "Chants_Espagnols_html/COLEGIALA.html",
  "Chants_Espagnols_html/DE_COLORES.html",
  "Chants_Espagnols_html/DIOS_TE_SALVE_MARIA.html",
  "Chants_Espagnols_html/GUANTANAMERA.html",
  "Chants_Espagnols_html/LAS_MANANITAS.html",
  "Chants_Espagnols_html/LA_ADELITA.html",
  "Chants_Espagnols_html/LA_CAMIONETA_DE_MI_PAPA.html",
  "Chants_Espagnols_html/LA_CLARA.html",
  "Chants_Espagnols_html/LA_MINA_MARIA_LUISA.html",
  "Chants_Espagnols_html/NO_NOS_MOVERAN.html",
  "Chants_Espagnols_html/PORQUE_TE_VAS.html",
  "Chants_Espagnols_html/index.html",
  "Chants_Espagnols_html/style.css",
  "Chants_Francophones_html/ATTENTION_MESDAMES_ET_MESSIEURS.html",
  "Chants_Francophones_html/AUPA_BO.html",
  "Chants_Francophones_html/A_toi.html",
  "Chants_Francophones_html/Aline.html",
  "Chants_Francophones_html/BELLE.html",
  "Chants_Francophones_html/CA_SERT_A_QUOI.html",
  "Chants_Francophones_html/CHANTE.html",
  "Chants_Francophones_html/COMME_UN_SOLEIL.html",
  "Chants_Francophones_html/Ca_fait_rire_les_oiseaux.html",
  "Chants_Francophones_html/DONNE_DU_RHUM_A_TON_HOMME.html",
  "Chants_Francophones_html/EMMENEZ_MOI.html",
  "Chants_Francophones_html/ETOILE_DES_NEIGES.html",
  "Chants_Francophones_html/ET_MAINTENANT.html",
  "Chants_Francophones_html/Fais_comme_l_oiseau.html",
  "Chants_Francophones_html/GENS_DU_PAYS.html",
  "Chants_Francophones_html/HARMONIE_DU_SOIR_A_CHATEAUGAY.html",
  "Chants_Francophones_html/IL_FAUT_QUE_JE_M_EN_AILLE.html",
  "Chants_Francophones_html/JE_N_AURAI_PAS_LE_TEMPS.html",
  "Chants_Francophones_html/JOLIE_BOUTEILLE.html",
  "Chants_Francophones_html/L_EQUIPE_A_JOJO.html",
  "Chants_Francophones_html/LA_BALADE_NORD_IRLANDAISE.html",
  "Chants_Francophones_html/LA_COMPLAINTE_DU_PHOQUE_EN_ALASKA.html",
  "Chants_Francophones_html/LA_MALADIE_D_AMOUR.html",
  "Chants_Francophones_html/LA_NOCE_A_YANTOU.html",
  "Chants_Francophones_html/LES_AMANTS_DUN_JOUR.html",
  "Chants_Francophones_html/LES_COPAINS_D_ABORD.html",
  "Chants_Francophones_html/LES_FETES_DE_MAULEON.html",
  "Chants_Francophones_html/LE_BERGER_D_AURE.html",
  "Chants_Francophones_html/LE_LION_EST_MORT_CE_SOIR.html",
  "Chants_Francophones_html/LE_PETIT_BONHEUR.html",
  "Chants_Francophones_html/LE_ROCK_DU_COCHON.html",
  "Chants_Francophones_html/La_Montagne.html",
  "Chants_Francophones_html/La_ballade_des_gens_heureux.html",
  "Chants_Francophones_html/La_chanson_de_Prevert.html",
  "Chants_Francophones_html/La_fleur_aux_dents.html",
  "Chants_Francophones_html/La_javanaise.html",
  "Chants_Francophones_html/Le_Chiffon_Rouge.html",
  "Chants_Francophones_html/Le_Steak.html",
  "Chants_Francophones_html/Les_Champs_ELYSEES.html",
  "Chants_Francophones_html/Les_Rois_Mages.html",
  "Chants_Francophones_html/MAMY_BLUE.html",
  "Chants_Francophones_html/MON_DIEU.html",
  "Chants_Francophones_html/Mon-Amant_de_Saint_Jean.html",
  "Chants_Francophones_html/NON_RIEN_DE_RIEN.html",
  "Chants_Francophones_html/POUR_UN_FLIRT.html",
  "Chants_Francophones_html/S_ASSOIR_PAR_TERRE.html",
  "Chants_Francophones_html/SALUT_LES_AMOUREUX.html",
  "Chants_Francophones_html/SANTIANO.html",
  "Chants_Francophones_html/Siffler_sur_la_colline.html",
  "Chants_Francophones_html/Tous_les_garcons_et_les_filles.html",
  "Chants_Francophones_html/Travailler_c_est_trop_dur.html",
  "Chants_Francophones_html/UN_BEAU_ROMAN.html",
  "Chants_Francophones_html/YA_SA_PICHOU.html",
  "Chants_Francophones_html/index.html",
  "Chants_Francophones_html/style.css",
  "Chants_Gascons_html/DE_CAP_TA_L_IMMORTELA.html",
  "Chants_Gascons_html/DIS_MAMIE.html",
  "Chants_Gascons_html/L_ENCANTADA.html",
  "Chants_Gascons_html/L_ENCANTADA_Phonetique.html",
  "Chants_Gascons_html/index.html",
  "Chants_Gascons_html/style.css",
  "icons/android/ibaialde-192x192.png",
  "icons/android/ibaialde-512x512.png",
  "icons/android/launchericon-144x144.png",
  "icons/android/launchericon-48x48.png",
  "icons/android/launchericon-72x72.png",
  "icons/android/launchericon-96x96.png",
  "icons/ibaialde-192x192.png",
  "icons/ibaialde-512x512.png",
  "icons/ibaialde.png",
  "icons/ios/100.png",
  "icons/ios/1024.png",
  "icons/ios/114.png",
  "icons/ios/120.png",
  "icons/ios/128.png",
  "icons/ios/144.png",
  "icons/ios/152.png",
  "icons/ios/16.png",
  "icons/ios/167.png",
  "icons/ios/180.png",
  "icons/ios/192.png",
  "icons/ios/20.png",
  "icons/ios/256.png",
  "icons/ios/29.png",
  "icons/ios/32.png",
  "icons/ios/40.png",
  "icons/ios/50.png",
  "icons/ios/512.png",
  "icons/ios/57.png",
  "icons/ios/58.png",
  "icons/ios/60.png",
  "icons/ios/64.png",
  "icons/ios/72.png",
  "icons/ios/76.png",
  "icons/ios/80.png",
  "icons/ios/87.png",
  "icons/windows/LargeTile.scale-100.png",
  "icons/windows/LargeTile.scale-125.png",
  "icons/windows/LargeTile.scale-150.png",
  "icons/windows/LargeTile.scale-200.png",
  "icons/windows/LargeTile.scale-400.png",
  "icons/windows/SmallTile.scale-100.png",
  "icons/windows/SmallTile.scale-125.png",
  "icons/windows/SmallTile.scale-150.png",
  "icons/windows/SmallTile.scale-200.png",
  "icons/windows/SmallTile.scale-400.png",
  "icons/windows/SplashScreen.scale-100.png",
  "icons/windows/SplashScreen.scale-125.png",
  "icons/windows/SplashScreen.scale-150.png",
  "icons/windows/SplashScreen.scale-200.png",
  "icons/windows/SplashScreen.scale-400.png",
  "icons/windows/Square150x150Logo.scale-100.png",
  "icons/windows/Square150x150Logo.scale-125.png",
  "icons/windows/Square150x150Logo.scale-150.png",
  "icons/windows/Square150x150Logo.scale-200.png",
  "icons/windows/Square150x150Logo.scale-400.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-16.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-20.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-24.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-256.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-30.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-32.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-36.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-40.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-44.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-48.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-60.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-64.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-72.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-80.png",
  "icons/windows/Square44x44Logo.altform-lightunplated_targetsize-96.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-16.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-20.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-24.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-256.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-30.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-32.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-36.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-40.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-44.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-48.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-60.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-64.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-72.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-80.png",
  "icons/windows/Square44x44Logo.altform-unplated_targetsize-96.png",
  "icons/windows/Square44x44Logo.scale-100.png",
  "icons/windows/Square44x44Logo.scale-125.png",
  "icons/windows/Square44x44Logo.scale-150.png",
  "icons/windows/Square44x44Logo.scale-200.png",
  "icons/windows/Square44x44Logo.scale-400.png",
  "icons/windows/Square44x44Logo.targetsize-16.png",
  "icons/windows/Square44x44Logo.targetsize-20.png",
  "icons/windows/Square44x44Logo.targetsize-24.png",
  "icons/windows/Square44x44Logo.targetsize-256.png",
  "icons/windows/Square44x44Logo.targetsize-30.png",
  "icons/windows/Square44x44Logo.targetsize-32.png",
  "icons/windows/Square44x44Logo.targetsize-36.png",
  "icons/windows/Square44x44Logo.targetsize-40.png",
  "icons/windows/Square44x44Logo.targetsize-44.png",
  "icons/windows/Square44x44Logo.targetsize-48.png",
  "icons/windows/Square44x44Logo.targetsize-60.png",
  "icons/windows/Square44x44Logo.targetsize-64.png",
  "icons/windows/Square44x44Logo.targetsize-72.png",
  "icons/windows/Square44x44Logo.targetsize-80.png",
  "icons/windows/Square44x44Logo.targetsize-96.png",
  "icons/windows/StoreLogo.scale-100.png",
  "icons/windows/StoreLogo.scale-125.png",
  "icons/windows/StoreLogo.scale-150.png",
  "icons/windows/StoreLogo.scale-200.png",
  "icons/windows/StoreLogo.scale-400.png",
  "icons/windows/Wide310x150Logo.scale-100.png",
  "icons/windows/Wide310x150Logo.scale-125.png",
  "icons/windows/Wide310x150Logo.scale-150.png",
  "icons/windows/Wide310x150Logo.scale-200.png",
  "icons/windows/Wide310x150Logo.scale-400.png",
  "index.html",
  "service-worker.js",
  "style.css"
];

/* INSTALLATION */
self.addEventListener("install", event => {

  console.log("Installation SW :", CACHE_NAME);

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {

      for (const url of urlsToCache) {

        try {

          const response = await fetch(url, { cache: "no-cache" });

          if (response.ok) {

            await cache.put(url, response.clone());

            console.log("Cache :", url);

          }

        } catch (err) {

          console.log("Erreur cache :", url, err);

        }

      }

    })
  );

});


/* ACTIVATION */
self.addEventListener("activate", event => {

  console.log("Activation SW :", CACHE_NAME);

  event.waitUntil(

    Promise.all([

      clients.claim(),

      caches.keys().then(cacheNames =>

        Promise.all(

          cacheNames
            .filter(name => name !== CACHE_NAME)
            .map(name => {

              console.log("Suppression ancien cache :", name);

              return caches.delete(name);

            })

        )

      )

    ])

  );

});


/* REQUÊTES */
self.addEventListener("fetch", event => {

  event.respondWith(

    fetch(event.request, { cache: "reload" })
      .then(response => response)
      .catch(() => caches.match(event.request))

  );

});
