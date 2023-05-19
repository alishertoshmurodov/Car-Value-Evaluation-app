// Jonibek
/*eskirish hisobi 1- usul */

const elFormEskirishBirinchi = document.querySelector(
  "[data-form-eskirish-birinchi-usul]"
);
const elAsosiyParametrNomi = document.querySelector(
  "[data-asosiy-parametr-nomi]"
);
const elEksplutatsiyagaQadarQiymati = document.querySelector(
  "[data-eksplutatsiyaga-qadar-qiymat]"
);
const elBaholashPaytidagiQiymati = document.querySelector(
  "[data-baholash-paytidagi-qiymati]"
);
const elBaholashDarajasiKorsatkichi = document.querySelector(
  "[data-baholash-daraja-korsatkichi]"
);
const elJamiEskirish = document.querySelector("[data-jami-eskirish-text]");

elFormEskirishBirinchi.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("[data-birinchi-usul-tugmasi]"))
    elJamiEskirish.textContent = `${elAsosiyParametrNomi.value}${
      1 -
      (elBaholashPaytidagiQiymati.value /
        elEksplutatsiyagaQadarQiymati.value) **
        elBaholashDarajasiKorsatkichi.value
    }%`;
});

/* eskirish hisobi 2- usul */

const elFormEskirishIkkinchi = document.querySelector(
  "[data-form-eskirish-ikkinchi-usul]"
);

const elSamariYoshi = document.querySelector("[data-samarali-yosh]");
const elXizmatMuddati = document.querySelector("[data-xizmat-muddat]");
const elQoldiqXizmatMuddati = document.querySelector(
  "[data-qoldiq-xizmat-muddat]"
);

const elJismoniyEskirish = document.querySelector(
  "[data-jismoniy-eskirish-text]"
);

function qoldiqXizmatMuddati(ti, tost) {
  return (ti / tost) * 100;
}

elFormEskirishIkkinchi.addEventListener("click", (e) => {
  e.preventDefault();

  if (!e.target.matches("[data-eskirish-tugma]"))
    elJismoniyEskirish.textContent = `${
      (qoldiqXizmatMuddati(
        +elXizmatMuddati.value,
        +elQoldiqXizmatMuddati.value
      ) /
        +elXizmatMuddati.value) *
      100
    }%`;
});

/* eskirishni hisoblashni 3- usuli */

const elFormEskirishUchunchi = document.querySelector(
  "[data-form-uchunchi-usul-eskirish]"
);

const elTamirlashQiymati = document.querySelector("[data-tamirlash-qiymat]");
const elYangiAnalog = document.querySelector("[data-yangi-analog]");
const elEskirishTugriText = document.querySelector(
  "[data-jismoniy-eskirish-tugri-usuli-text]"
);

elFormEskirishUchunchi.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.matches("[data-eskirish-tugri-hisoblash-tugma]"))
    elEskirishTugriText.textContent = `${
      (elTamirlashQiymati.value / elYangiAnalog.value) * 100
    }%`;
});
