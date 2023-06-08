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

document
  .querySelector(".app-container__calculate-btn")
  .addEventListener("click", async function (e) {
    let myWindow = window.open("", "PRINT", "");

    myWindow.document.write(
      await getPopulatedHTML({
        buyurtmachi: buyurtmachi.value,
        hisobotRoyhatiRaqami: hisobotRoyhatiRaqami.value,
        hisobotTuzilganSanasi: hisobotTuzilganSanasi.value,
        baholashSanasi: baholashSanasi.value,
        avtotransportVositasiDavlatRaqami:
          avtotransportVositasiDavlatRaqami.value,
        avtotransportVositasiRusumi: avtotransportVositasiRusumi.value,
        avtotransportVositasiTuri: avtotransportVositasiTuri.value,
        baholashObyektiJoylashganManzili:
          baholashObyektiJoylashganManzili.value,
        baholashObyektiningEgasi: baholashObyektiningEgasi.value,
        baholashdanMaqsad: baholashdanMaqsad.value,
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
