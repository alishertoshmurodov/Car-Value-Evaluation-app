// Jonibek
/*eskirish hisobi 1- usul */





const elJamiEskirish = document.querySelector("[data-jami-eskirish-text]");





document.querySelector('#calc-btn').addEventListener("click", (e) => {
  let res = ''
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
  if (calcTypeEl.value == 'Eskirish-hisobi' && calcMethodSelect2.value == '1-usul') {
    res = 1 - (elBaholashPaytidagiQiymati.value /
      elEksplutatsiyagaQadarQiymati.value) ** elBaholashDarajasiKorsatkichi.value;
    console.log('1-usul' + res);
  }

});

/* eskirish hisobi 2- usul */



function qoldiqXizmatMuddati(ti, tost) {
  return (ti / tost) * 100;
}

document.querySelector('#calc-btn').addEventListener("click", (e) => {

  let res = '';

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


  if (calcTypeEl.value == 'Eskirish-hisobi' && calcMethodSelect2.value == '2-usul') {
    res = `${(qoldiqXizmatMuddati(
      +elXizmatMuddati.value,
      +elQoldiqXizmatMuddati.value
    ) /
      +elXizmatMuddati.value) *
      100
      }%`;
    console.log('2-usul: ' + res);
  }
});

/* eskirishni hisoblashni 3- usuli */



document.querySelector('#calc-btn').addEventListener("click", (e) => {
  let res = '';

  const elFormEskirishUchunchi = document.querySelector(
    "[data-form-uchunchi-usul-eskirish]"
  );

  const elTamirlashQiymati = document.querySelector("[data-tamirlash-qiymat]");
  const elYangiAnalog = document.querySelector("[data-yangi-analog]");
  const elEskirishTugriText = document.querySelector(
    "[data-jismoniy-eskirish-tugri-usuli-text]"
  );

  if (calcTypeEl.value == 'Eskirish-hisobi' && calcMethodSelect2.value == '3-usul') {
    res = `${(elTamirlashQiymati.value / elYangiAnalog.value) * 100
      }%`;

    console.log('3-uslul: ' + res);
  }
});
