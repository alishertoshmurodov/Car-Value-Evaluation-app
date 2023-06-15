fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
    .then(response => response.json())
    .then(data => {
      document.querySelector('#Baholovchi-sanasidagi-som-kursi-1').value = `1 AQSH dollari: ${data[0].Rate} so'm`;
      document.querySelector('#Baholovchi-sanasidagi-som-kursi-2').value = `1 Yevro: ${data[1].Rate} so'm`;
      document.querySelector('#Baholovchi-sanasidagi-som-kursi-3').value = `1 Rubl: ${data[2].Rate} so'm`;
    });




const buyurtmachi = document.querySelector("#Buyurtmachi");
const hisobotRoyhatiRaqami = document.querySelector(
  "#Hisobot-royxatga-olish-raqami"
);
const hisobotTuzilganSanasi = document.querySelector(
  "#Hisobot-tuzilgan-sanasi"
);
const baholashSanasi = document.querySelector("#baholash-sanasi");
const avtotransportVositasiRusumi = document.querySelector(
  "#Avtotransport-vositasi-rusumi"
);
const avtotransportVositasiTuri = document.querySelector(
  "#Avtotransport-vositasi-turi"
);
const avtotransportVositasiDavlatRaqami = document.querySelector(
  "#Avtotransport-vositasi-davlat-raqami"
);
const avtotransportVositasiIshlanganYili = document.querySelector(
  "#Avtotransport-vositasi-ishlangan-yili"
);
const baholashObyektiJoylashganManzili = document.querySelector(
  "#Baholash-obyekti-joylashgan-manzili"
);
const baholashObyektiningEgasi = document.querySelector(
  "#baholash-obyektining-egasi"
);
const baholashdanMaqsad = document.querySelector("#Baholashdan-maqsad");
const baholovchiTashkilotNomi = document.querySelector('#Baholovchi-tashkilot-nomi');
const baholovchiTashkilotIsmiSharifi = document.querySelector('#Baholovchi-tashkilot-ismi-sharifi');
const avtoVositaTiklashQiymati  = document.querySelector('#avto-vosita-tiklash-qiymati')
const tashkilotDirektori = document.querySelector('#Tashkilot-ditektori')
document
  .querySelector(".app-container__calculate-btn")
  .addEventListener("click", async function (e) {

    const hisobotSanasi = new Date(hisobotTuzilganSanasi.value);



    // tiklanish hisobi


    let tiklanisUsuli = '';
    let tiklanishQiymati;

    if (calcMethodSelect.value == '1-usul') {
      tiklanisUsuli = 'Amashtirish';
      tiklanishQiymati = document.querySelector('#baholangan-avto-tiklanish').value;
    }
    // 2-usul
    let cPod = 0;
    let cP = 0;
    let cV = 0;
    if (calcMethodSelect.value == '2-usul') {
      console.log(2);
      tiklanisUsuli = `Turdosh avtotransport vositasi narxi bo'yicha hisoblash`;
      cPod = ((1 - Number(secondMethodInput2.value)) * (1 - Number(secondMethodInput3.value)
        - Number(secondMethodInput4.value)) * Number(secondMethodInput.value))
        / ((1 + Number(secondMethodInput2.value)) * (1 - Number(secondMethodInput3.value)));
      cP = cPod * (Number(secondMethodInput5.value) / Number(secondMethodInput6.value)) * (Number(secondMethodInput7.value) / Number(secondMethodInput8.value))
      cV = ((1 - Number(secondMethodInput3.value)) * cP) / 1 - Number(secondMethodInput3.value) - Number(secondMethodInput4.value);
      tiklanishQiymati = cV;
    }
    // 3-usul
    let cP2 = 0;
    let cV2 = 0;
    if (calcMethodSelect.value == '3-usul') {
      tiklanisUsuli = `Elementma-element hisoblash`;
      console.log(3);
      cP2 = Number(thirdMethodInput2.value) + Number(thirdMethodInput3.value);
      cV2 = ((1 - Number(thirdMethodInput4.value)) * cP2) /
        (1 - Number(thirdMethodInput4.value) - Number(thirdMethodInput5.value));
      tiklanishQiymati = cV2;
    }
    // 4-usul
    let qT = 0;
    if (calcMethodSelect.value == '4-usul') {
      console.log(4);
      tiklanisUsuli = `Qiymatni indeksatsiyalash`;
      qT = Number(fourthMethodInput.value) * Number(fourthMethodInput2.value) * Number(fourthMethodInput3.value);
      tiklanishQiymati = qT;
    }


    // Eskirish hisobi

    let eskirishUsuli;
    let eskirishHisobi;

    if (calcMethodSelect2.value == '1-usul') {
      const elBaholashPaytidagiQiymati = document.querySelector(
        "[data-baholash-paytidagi-qiymati]"
      );
      const elFormEskirishBirinchi = document.querySelector(
        "[data-form-eskirish-birinchi-usul]"
      );
      const elAsosiyParametrNomi = document.querySelector(
        "[data-asosiy-parametr-nomi]"
      );
      const elEksplutatsiyagaQadarQiymati = document.querySelector(
        "[data-eksplutatsiyaga-qadar-qiymat]"
      );
      const elBaholashDarajasiKorsatkichi = document.querySelector(
        "[data-baholash-daraja-korsatkichi]"
      );

      eskirishUsuli = 'Asosiy parametrning yomonlashuvi';
      eskirishHisobi = String(1 - (elBaholashPaytidagiQiymati.value /
        elEksplutatsiyagaQadarQiymati.value) ** elBaholashDarajasiKorsatkichi.value).slice(0, 6);

    }

    if (calcMethodSelect2.value == '2-usul') {
      function qoldiqXizmatMuddati(ti, tost) {
        return (ti / tost) * 100;
      }

      const elXizmatMuddati = document.querySelector("[data-xizmat-muddat]");
      const elQoldiqXizmatMuddati = document.querySelector(
        "[data-qoldiq-xizmat-muddat]"
      );

      eskirishHisobi = `${(qoldiqXizmatMuddati(
        +elXizmatMuddati.value,
        +elQoldiqXizmatMuddati.value
      ) /
        +elXizmatMuddati.value) *
        100
        }`;

      if (String(eskirishHisobi).includes('.')) {
        const arr = String(eskirishHisobi).split('.');
        console.log(arr);
        const afterThePoint = String(arr[1]).slice(0, 2);
        eskirishHisobi = String(arr[0]) + '.' + String(afterThePoint);
      }

      eskirishUsuli = 'Normativ eskirish';
    }
    if (calcMethodSelect2.value == '3-usul') {

      const elTamirlashQiymati = document.querySelector("[data-tamirlash-qiymat]");
      const elYangiAnalog = document.querySelector("[data-yangi-analog]");

      eskirishHisobi = `${(Number(elTamirlashQiymati.value) / Number(elYangiAnalog.value)) * 100
        }`;

      if (String(eskirishHisobi).includes('.')) {
        const arr = String(eskirishHisobi).split('.');
        console.log(arr);
        const afterThePoint = String(arr[1]).slice(0, 2);
        eskirishHisobi = String(arr[0]) + '.' + String(afterThePoint);
      }

      eskirishUsuli = `Jismoniy eskirishni aniqlashning to'g'ridan-to'g'ri`;
    }
    if (calcMethodSelect2.value == '4-usul') {

      const arrNameEls = document.querySelectorAll('[data-konst-nomi]');
      const arrPricEls = document.querySelectorAll('[data-konst-price]')
      const arrPricEskiEls = document.querySelectorAll('[data-konst-price-eski]')
      const kosntlarSoni = arrNameEls.length;
      arrNameEls.forEach(element => {
        console.log(element.value);
      });
      arrPricEls.forEach(element => {
        console.log(element.value);
      });
      arrPricEskiEls.forEach(element => {
        console.log(element.value);
      });
      //4-formula
      let result = 0;
      for (let i = 0; i < arrPricEls.length; i++) {
        eskirishHisobi += Number(arrPricEls[i].value) * Number(arrPricEskiEls[i].value);
      };

      if (String(eskirishHisobi).includes('.')) {
        const arr = String(eskirishHisobi).split('.');
        console.log(arr);
        const afterThePoint = String(arr[1]).slice(0, 2);
        eskirishHisobi = String(arr[0]) + '.' + String(afterThePoint);
      }

      eskirishUsuli = `O'rtacha o'lchangan eskirish`;
    }
    if (calcMethodSelect2.value == '5-usul') {
      omegaFunc();
      eskirishHisobi = 100 * (1 - 2.71828 ** -omega);
      if (String(eskirishHisobi).includes('.')) {
        const arr = String(eskirishHisobi).split('.');
        console.log(arr);
        const afterThePoint = String(arr[1]).slice(0, 2);
        eskirishHisobi = String(arr[0]) + '.' + String(afterThePoint);
      }

      eskirishUsuli = `Yoshi va eksplutatsiya boshidan bosib o'tgan masofani hisobga olgan`;
    }
    if (calcMethodSelect2.value == '6-usul') {
      eskirishUsuli = 'Ekspert-tahliliy';
    }



    let myWindow = window.open("", "PRINT", "");

    myWindow.document.write(
      await getPopulatedHTML({
        buyurtmachi: buyurtmachi.value,
        hisobotRoyhatiRaqami: hisobotRoyhatiRaqami.value,
        hisobotTuzilganSanasi: hisobotTuzilganSanasi.value,
        hisobotSanasiKuni: hisobotSanasi.getDate(),
        hisobotSanasiOyi: hisobotSanasiOyi(hisobotSanasi.getMonth()),
        hisobotSanasiYili: hisobotSanasi.getFullYear(),
        baholashSanasi: baholashSanasi.value,
        tashkilotDirektori: tashkilotDirektori.value,
        avtotransportVositasiDavlatRaqami:
          avtotransportVositasiDavlatRaqami.value,
        avtotransportVositasiRusumi: avtotransportVositasiRusumi.value,
        avtotransportVositasiTuri: avtotransportVositasiTuri.value,
        baholashObyektiJoylashganManzili:
          baholashObyektiJoylashganManzili.value,
        baholashObyektiningEgasi: baholashObyektiningEgasi.value,
        baholashdanMaqsad: baholashdanMaqsad.value,
        baholovchiTashkilotNomi: baholovchiTashkilotNomi.value,
        baholovchiTashkilotIsmiSharifi: baholovchiTashkilotIsmiSharifi.value,
        avtoVositaTiklashQiymati: avtoVositaTiklashQiymati.value,
        avtotransportVositasiIshlanganYili: avtotransportVositasiIshlanganYili.value,
        // tiklanish hisobi
        tiklanisUsuli: tiklanisUsuli,
        tiklanishQiymati: tiklanishQiymati,
        // eskirish hisobi
        eskirishUsuli: eskirishUsuli,
        eskirishHisobi: eskirishHisobi,
        //jam eskirish
        jamiEskirish: jamiEskirish.value,
        //jis eskirish
        jismoniyEskirish: jisEskInput.value,
        //funksional eskriish
        funksionaleskirish: funkEskirishInputMain.value,
        // funk sababi
        funksionaleskirishSababi: funcEskSabInput.value,
        //tashqi eskirish
        tashqiEskirish: tashqiEskirishInput.value,
        //tashqi eskirish sababi
        tashqiEskirishSababi: tashqiEskSabInput.value,
        //baholash obyekti 
        baholashQiymat: xarQiymatInput.value,
       })
    );
    myWindow.print();

    return false;

    async function getPopulatedHTML(data) {
      let html = await getHTML();
      for (key in data) {
        html = html.replaceAll(`{{${key}}}`, data[key]);
      }

      return html;
    }

    async function getHTML() {
      const res = await fetch("/hisobot.html");

      return await res.text();
    }
  });


const hisobotSanasiOyi = (monthNum) => {
  switch (Number(monthNum)) {
    case 0:
      return 'Yanvar';
      break;
    case 1:
      return 'Fevral';
      break;
    case 2:
      return 'Mart';
      break;
    case 3:
      return 'Aprel';
      break;
    case 4:
      return 'May';
      break;
    case 5:
      return 'Iyun';
      break;
    case 6:
      return 'Iyul';
      break;
    case 7:
      return 'Avgust';
      break;
    case 8:
      return 'Sentyabr';
      break;
    case 9:
      return 'Oktyabr';
      break;
    case 10:
      return 'Noyabr';
      break;
    case 11:
      return 'Dekabr';
      break;
    default:
      break;
  }
}


function omegaFunc() {
  if (explCarTypeSelect.value == explCarTypeOption1.value) {
      omega = 0.07 * Number(explCarAgeInput.value) + 0.0035 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption2.value) {
      omega = 0.1 * Number(explCarAgeInput.value) + 0.003 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption3.value) {
      omega = 0.09 * Number(explCarAgeInput.value) + 0.002 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption4.value) {
      omega = 0.15 * Number(explCarAgeInput.value) + 0.0025 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption5.value) {
      omega = 0.14 * Number(explCarAgeInput.value) + 0.002 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption6.value) {
      omega = 0.16 * Number(explCarAgeInput.value) + 0.001 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption7.value) {
      omega = 0.05 * Number(explCarAgeInput.value) + 0.0025 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption8.value) {
      omega = 0.0055 * Number(explCarAgeInput.value) + 0.003 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption9.value) {
      omega = 0.065 * Number(explCarAgeInput.value) + 0.0032 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption10.value) {
      omega = 0.045 * Number(explCarAgeInput.value) + 0.002 * Number(explCarDestInput.value);
  }
  else if (explCarTypeSelect.value == explCarTypeOption11.value) {
      omega = 0.09 * Number(explCarAgeInput.value) + 0.002 * Number(explCarDestInput.value);
  }
  else {
      omega = 0.12 * Number(explCarAgeInput.value) + 0.001 * Number(explCarDestInput.value);

  }

}