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


document
  .querySelector(".app-container__calculate-btn")
  .addEventListener("click", async function (e) {

    const hisobotSanasi = new Date(hisobotTuzilganSanasi.value);
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
