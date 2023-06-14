// Aziz


/* -------- */
/* 1-3 usul */
/* -------- */

const firstMethod01Box = document.createElement('div');
firstMethod01Box.setAttribute('class', 'app-container__input-option')

const firstMethod01Label = document.createElement('label');
firstMethod01Label.textContent = 'Asosiy parametrlarning aksplutatsiyaga qadar qiymati';
firstMethod01Label.setAttribute('for', 'ekputatsiyaga-qadar-qiymat');

const firstMethod01Input = document.createElement('input');
firstMethod01Input.dataset.eksplutatsiyagaQadarQiymat = '';


firstMethod01Input.setAttribute('id', 'ekputatsiyaga-qadar-qiymat');
firstMethod01Input.setAttribute('name', 'ekputatsiyaga-qadar-qiymat');
firstMethod01Input.setAttribute('type', 'number');

firstMethod01Box.append(firstMethod01Label, firstMethod01Input);


const firstMethod02Box = document.createElement('div');
firstMethod02Box.setAttribute('class', 'app-container__input-option')

const firstMethod02Label = document.createElement('label');
firstMethod02Label.textContent = 'Asosiy parametirlarning baholash paytidagi qiymati';
firstMethod02Label.setAttribute('for', 'baholash-paytidagi-qiymati');

const firstMethod02Input = document.createElement('input');
firstMethod02Input.dataset.baholashPaytidagiQiymati = '';
firstMethod02Input.setAttribute('id', 'baholash-paytidagi-qiymatiti');
firstMethod02Input.setAttribute('name', 'baholash-paytidagi-qiymatiti');
firstMethod02Input.setAttribute('type', 'number')

firstMethod02Box.append(firstMethod02Label, firstMethod02Input);


const firstMethod03Box = document.createElement('div');
firstMethod03Box.setAttribute('class', 'app-container__input-option')

const firstMethod03Label = document.createElement('label');
firstMethod03Label.textContent = "Asosiy parametirlarning baholash obyektiga tasir kuchini tavsiflovchi daraja ko'rsatkichi (0.6 - 0.8)";
firstMethod03Label.setAttribute('for', 'baholash-daraja-korsatkichi');

const firstMethod03Input = document.createElement('input');
firstMethod03Input.dataset.baholashDarajaKorsatkichi = '';
firstMethod03Input.setAttribute('id', 'baholash-daraja-korsatkichi');
firstMethod03Input.setAttribute('name', 'baholash-daraja-korsatkichi');
firstMethod03Input.setAttribute('type', 'number')

firstMethod03Box.append(firstMethod03Label, firstMethod03Input);

// 

const secondMethod01Box = document.createElement('div');
secondMethod01Box.setAttribute('class', 'app-container__input-option')

const secondMethod01Label = document.createElement('label');
secondMethod01Label.textContent = 'Baholanayotgan avtotransport vositasining baholash sanasidagi samarali yoshi (ishlagan vaqti)';
secondMethod01Label.setAttribute('for', 'samarali-yoshi');

const secondMethod01Input = document.createElement('input');
secondMethod01Input.setAttribute('id', 'samarali-yoshi');
secondMethod01Input.setAttribute('name', 'samarali-yoshi');
secondMethod01Input.setAttribute('type', 'number');
secondMethod01Input.dataset.samaraliYosh = '';

secondMethod01Box.append(secondMethod01Label, secondMethod01Input);


const secondMethod02Box = document.createElement('div');
secondMethod02Box.setAttribute('class', 'app-container__input-option')

const secondMethod02Label = document.createElement('label');
secondMethod02Label.textContent = "Hisobdan chiqarish yoki kapital ta'mirlashgacha normativ xizmati muddati(ishlagan vaqti)";
secondMethod02Label.setAttribute('for', 'xizmat-muddati');

const secondMethod02Input = document.createElement('input');
secondMethod02Input.setAttribute('id', 'xizmat-muddati');
secondMethod02Input.setAttribute('name', 'xizmat-muddati');
secondMethod02Input.setAttribute('type', 'number');
secondMethod02Input.dataset.xizmatMuddat = '';

secondMethod02Box.append(secondMethod02Label, secondMethod02Input);

const secondMethod03Box = document.createElement('div');
secondMethod03Box.setAttribute('class', 'app-container__input-option')

const secondMethod03Label = document.createElement('label');
secondMethod03Label.textContent = 'Qoldiq xizmati muddati(ishlagan vaqti)';
secondMethod03Label.setAttribute('for', 'qoldiq-xizmat-muddati');

const secondMethod03Input = document.createElement('input');
secondMethod03Input.setAttribute('id', 'qoldiq-xizmat-muddati');
secondMethod03Input.setAttribute('name', 'qoldiq-xizmat-muddati');
secondMethod03Input.setAttribute('type', 'number');
secondMethod03Input.dataset.qoldiqXizmatMuddat = '';

secondMethod03Box.append(secondMethod03Label, secondMethod03Input);

// 

const thirdMethod01Box = document.createElement('div');
thirdMethod01Box.setAttribute('class', 'app-container__input-option')

const thirdMethod01Label = document.createElement('label');
thirdMethod01Label.textContent = "Baholanayotgan avtotransport vositasining eskirishini bartaraf etish uchun talab qilinadigan tamirlash qiymati, so'm"
thirdMethod01Label.setAttribute('for', 'tamirlash-qiymati');

const thirdMethod01Input = document.createElement('input');
thirdMethod01Input.setAttribute('id', 'tamirlash-qiymati');
thirdMethod01Input.setAttribute('name', 'tamirlash-qiymati');
thirdMethod01Input.setAttribute('type', 'number');
thirdMethod01Input.dataset.tamirlashQiymat = '';

thirdMethod01Box.append(thirdMethod01Label, thirdMethod01Input);


const thirdMethod02Box = document.createElement('div');
thirdMethod02Box.setAttribute('class', 'app-container__input-option')

const thirdMethod02Label = document.createElement('label');
thirdMethod02Label.textContent = "Yangi analog qiymati"
thirdMethod02Label.setAttribute('for', 'yangi-anolog-qiymati');

const thirdMethod02Input = document.createElement('input');
thirdMethod02Input.setAttribute('id', 'yangi-anolog-qiymati');
thirdMethod02Input.setAttribute('name', 'yangi-anolog-qiymati');
thirdMethod02Input.setAttribute('type', 'number');
thirdMethod02Input.dataset.yangiAnalog = '';

thirdMethod02Box.append(thirdMethod02Label, thirdMethod02Input);


//4-usul O'rtacha o'lchangan eskirish usuli

const calcMethodInputBlock2 = document.createElement('div');
calcMethodInputBlock2.setAttribute('class', 'app-container__input-option');

const calcMethodLabel2 = document.createElement('label');
calcMethodLabel2.setAttribute('for', 'calculation-method');
calcMethodLabel2.textContent = 'Hisoblash usuli:';

const calcMethodSelect2 = document.createElement('select');
calcMethodSelect2.setAttribute('name', 'calculation-method');
calcMethodSelect2.setAttribute('id', 'calculation-method');
calcMethodSelect2.setAttribute('class', 'app-container__select');

const calcMethodOption00 = document.createElement('option');
calcMethodOption00.setAttribute('value', 'none');
calcMethodOption00.textContent = "Usulni tanlang";

const calcMethodOption01 = document.createElement('option');
calcMethodOption01.setAttribute('value', '1-usul');
calcMethodOption01.textContent = "1.Asosiy parametrning yomonlashuvi usuli";

const calcMethodOption02 = document.createElement('option');
calcMethodOption02.setAttribute('value', '2-usul');
calcMethodOption02.textContent = "2.Normativ eskirish usuli";

const calcMethodOption03 = document.createElement('option');
calcMethodOption03.setAttribute('value', '3-usul');
calcMethodOption03.textContent = "3.Jismoniy eskirishni aniqlashning to'g'ridan-to'g'ri usuli";

const calcMethodOption44 = document.createElement('option');
calcMethodOption44.setAttribute('value', '4-usul');
calcMethodOption44.textContent = "4.O'rtacha o'lchangan eskirish usuli";

const calcMethodOption5 = document.createElement('option');
calcMethodOption5.setAttribute('value', '5-usul');
calcMethodOption5.textContent = "5.Yoshi va eksplutatsiya boshidan bosib o'tgan masofani hisobga olgan usul";

const calcMethodOption6 = document.createElement('option');
calcMethodOption6.setAttribute('value', '6-usul');
calcMethodOption6.textContent = "6.Ekspert-tahliliy usul";

calcMethodSelect2.append(calcMethodOption00, calcMethodOption01, calcMethodOption02, calcMethodOption03, calcMethodOption44, calcMethodOption5, calcMethodOption6);
calcMethodInputBlock2.append(calcMethodLabel2, calcMethodSelect2);



function chooseType4() {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase()) {
        inputBlockEL.append(calcMethodInputBlock2);
    }
    else {
        calcMethodInputBlock2.remove();
        firstMethodContainer2.remove();
        secondMethodContainer2.remove();
        thirdMethodContainer2.remove();
    }

}



function firstMethod(e) {
    if (calcMethodSelect2.value == '1-usul' && calcTypeEl.value == 'Eskirish-hisobi') {
        inputBlockEL.append(firstMethodContainer2);
    } else {
        firstMethodContainer2.remove();
    }
}

const firstMethodContainer2 = document.createElement('div');
firstMethodContainer2.setAttribute('class', 'app-container__input-block');
firstMethodContainer2.append(firstMethod01Box, firstMethod02Box, firstMethod03Box);

calcMethodSelect2.addEventListener('change', firstMethod);

firstMethod();

function secondMethod(e) {
    if (calcMethodSelect2.value == '2-usul' && calcTypeEl.value == 'Eskirish-hisobi') {
        inputBlockEL.append(secondMethodContainer2);
    } else {
        secondMethodContainer2.remove();
    }
}

const secondMethodContainer2 = document.createElement('div');
secondMethodContainer2.setAttribute('class', 'app-container__input-block');
secondMethodContainer2.append(secondMethod01Box, secondMethod02Box, secondMethod03Box);

calcMethodSelect2.addEventListener('change', secondMethod);

secondMethod();


function thirdMethod(e) {
    if (calcMethodSelect2.value == '3-usul' && calcTypeEl.value == 'Eskirish-hisobi') {
        inputBlockEL.append(thirdMethodContainer2);
    } else {
        thirdMethodContainer2.remove();
    }
}

const thirdMethodContainer2 = document.createElement('div');
thirdMethodContainer2.setAttribute('class', 'app-container__input-block');
thirdMethodContainer2.append(thirdMethod01Box, thirdMethod02Box);

calcMethodSelect2.addEventListener('change', thirdMethod);

thirdMethod();


chooseType4();

calcTypeEl.addEventListener('change', chooseType4);


//////////////////////////////////////////////////////////////////////////////////////////

// Baholanayotgan avtotransport vositasi 1-konstruktiv elementning nomi:
const SumUpElNameBox = document.createElement('div');
SumUpElNameBox.setAttribute('class', 'app-container__input-option')

const SumUpElNameLabel = document.createElement('label');
SumUpElNameLabel.textContent = 'Baholanayotgan avtotransport vositasi 1-konstruktiv elementning nomi:';
SumUpElNameLabel.setAttribute('for', 'Baholanayotgan-avto-1-konstruktiv-elementning-nomi');

const SumUpElNameInput = document.createElement('input');
SumUpElNameInput.dataset.konstNomi = '';
SumUpElNameInput.setAttribute('id', 'Baholanayotgan-avto-1-konstruktiv-elementning-nomi');
SumUpElNameInput.setAttribute('name', 'Baholanayotgan-avto-1-konstruktiv-elementning-nomi');
SumUpElNameInput.setAttribute('type', 'text');

SumUpElNameBox.append(SumUpElNameLabel, SumUpElNameInput);

//Baholanayotgan avtotransport vositasi 1-konstruktiv elementi tannarxining butun baholash oby'ekti tannarxidagi salmog'i %
const SumUpElPriceBox = document.createElement('div');
SumUpElPriceBox.setAttribute('class', 'app-container__input-option')

const SumUpElPriceLabel = document.createElement('label');
SumUpElPriceLabel.textContent = "Baholanayotgan avtotransport vositasi 1-konstruktiv elementi tannarxining butun baholash oby'ekti tannarxidagi salmog'i: %";
SumUpElPriceLabel.setAttribute('for', "Baholanayotgan-avto-1-elementi-tannarxining-baholash-oby'ekti-tannarxidagi-salmog'i");

const SumUpElPriceInput = document.createElement('input');
SumUpElPriceInput.dataset.konstPrice = '';
SumUpElPriceInput.setAttribute('id', "Baholanayotgan-avto-1-elementi-tannarxining-baholash-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput.setAttribute('name', "Baholanayotgan-avto-1-elementi-tannarxining-baholash-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput.setAttribute('type', 'number');

SumUpElPriceBox.append(SumUpElPriceLabel, SumUpElPriceInput);

//1-konstruktiv jismoniy eskirishi
const SumUpElPriceBoxEsk = document.createElement('div');
SumUpElPriceBoxEsk.setAttribute('class', 'app-container__input-option')

const SumUpElPriceEskLabel = document.createElement('label');
SumUpElPriceEskLabel.textContent = "Baholanayotgan avtotransport vositasi 1-konstruktiv elementi jismoniy eskirishi: %";
SumUpElPriceEskLabel.setAttribute('for', "Baholanayotgan-avto-1-elementi-jismoniy-eskirishi");

const SumUpElPriceEskInput = document.createElement('input');
SumUpElPriceEskInput.dataset.konstPriceEski = '';
SumUpElPriceEskInput.setAttribute('id', "Baholanayotgan-avto-1-elementi-jismoniy-eskirishi");
SumUpElPriceEskInput.setAttribute('name', "Baholanayotgan-avto-1-elementi-jismoniy-eskirishi");
SumUpElPriceEskInput.setAttribute('type', 'number');

SumUpElPriceBoxEsk.append(SumUpElPriceEskLabel, SumUpElPriceEskInput);
// "Baholanayotgan avtotransport vositasi 2-konstruktiv elementning nomi"
const SumUpElNameBox2 = document.createElement('div');
SumUpElNameBox2.setAttribute('class', 'app-container__input-option')

const SumUpElNameLabel2 = document.createElement('label');
SumUpElNameLabel2.textContent = 'Baholanayotgan avtotransport vositasi 2-konstruktiv elementning nomi:';
SumUpElNameLabel2.setAttribute('for', 'Baholanayotgan-avto-2-konstruktiv-elementning-nomi');

const SumUpElNameInput2 = document.createElement('input');
SumUpElNameInput2.dataset.konstNomi = '';
SumUpElNameInput2.setAttribute('id', 'Baholanayotgan-avto-2-konstruktiv-elementning-nomi');
SumUpElNameInput2.setAttribute('name', 'Baholanayotgan-avto-2-konstruktiv-elementning-nomi');
SumUpElNameInput2.setAttribute('type', 'text');

SumUpElNameBox2.append(SumUpElNameLabel2, SumUpElNameInput2);

//Baholanayotgan avtotransport vositasi 2-konstruktiv elementi tannarxining butun baholash oby'ekti tannarxidagi salmog'i %
const SumUpElPriceBox2 = document.createElement('div');
SumUpElPriceBox2.setAttribute('class', 'app-container__input-option')

const SumUpElPriceLabel2 = document.createElement('label');
SumUpElPriceLabel2.textContent = "Baholanayotgan avtotransport vositasi 2-konstruktiv elementi tannarxining butun baholash oby'ekti tannarxidagi salmog'i: %";
SumUpElPriceLabel2.setAttribute('for', "Baholanayotgan-avto-2-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");

const SumUpElPriceInput2 = document.createElement('input');
SumUpElPriceInput2.dataset.konstPrice = '';
SumUpElPriceInput2.setAttribute('id', "Baholanayotgan-avto-2-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput2.setAttribute('name', "Baholanayotgan-avto-2-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput2.setAttribute('type', 'number');

SumUpElPriceBox2.append(SumUpElPriceLabel2, SumUpElPriceInput2);
//2-konstruktiv jismoniy eskirishi
const SumUpElPriceBoxEsk2 = document.createElement('div');
SumUpElPriceBoxEsk2.setAttribute('class', 'app-container__input-option')

const SumUpElPriceEskLabel2 = document.createElement('label');
SumUpElPriceEskLabel2.textContent = "Baholanayotgan avtotransport vositasi 2-konstruktiv elementi jismoniy eskirishi: %";
SumUpElPriceEskLabel2.setAttribute('for', "Baholanayotgan-avto-2-elementi-jismoniy-eskirishi");

const SumUpElPriceEskInput2 = document.createElement('input');
SumUpElPriceEskInput2.dataset.konstPriceEski = '';
SumUpElPriceEskInput2.setAttribute('id', "Baholanayotgan-avto-2-elementi-jismoniy-eskirishi");
SumUpElPriceEskInput2.setAttribute('name', "Baholanayotgan-avto-2-elementi-jismoniy-eskirishi");
SumUpElPriceEskInput2.setAttribute('type', 'number');
SumUpElPriceBoxEsk2.append(SumUpElPriceEskLabel2, SumUpElPriceEskInput2);

const konstAddbtn = document.createElement("button");
konstAddbtn.setAttribute("class", "add_btn");
konstAddbtn.setAttribute("id", "add_btn");
konstAddbtn.textContent = "Konstruktiv element qo'shish";

let counter = 3;

konstAddbtn.addEventListener('click', () => {
    const SumUpElNameBox2 = document.createElement('div');
    SumUpElNameBox2.setAttribute('class', 'app-container__input-option')

    const SumUpElNameLabel2 = document.createElement('label');
    SumUpElNameLabel2.textContent = 'Baholanayotgan avtotransport vositasi ' + counter + '-konstruktiv elementning nomi:';
    SumUpElNameLabel2.setAttribute('for', 'Baholanayotgan-avto-' + counter +'-konstruktiv-elementning-nomi');

    const SumUpElNameInput2 = document.createElement('input');
    SumUpElNameInput2.dataset.konstNomi = '';
    SumUpElNameInput2.setAttribute('id', 'Baholanayotgan-avto-' + counter +'-konstruktiv-elementning-nomi');
    SumUpElNameInput2.setAttribute('name', 'Baholanayotgan-avto-' + counter +'-konstruktiv-elementning-nomi');
    SumUpElNameInput2.setAttribute('type', 'text');

    SumUpElNameBox2.append(SumUpElNameLabel2, SumUpElNameInput2);

    ///////////////////
    const SumUpElPriceBox2 = document.createElement('div');
    SumUpElPriceBox2.setAttribute('class', 'app-container__input-option')

    const SumUpElPriceLabel2 = document.createElement('label');
    SumUpElPriceLabel2.textContent = "Baholanayotgan avtotransport vositas "+ counter + "-konstruktiv elementi tannarxining butun baholash oby'ekti tannarxidagi salmog'i: %";
    SumUpElPriceLabel2.setAttribute('for', "Baholanayotgan-avto "+ counter +"-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");

    const SumUpElPriceInput2 = document.createElement('input');
    SumUpElPriceInput2.dataset.konstPrice = '';
    SumUpElPriceInput2.setAttribute('id', "Baholanayotgan-avto "+ counter +"-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
    SumUpElPriceInput2.setAttribute('name', "Baholanayotgan-avto "+ counter +"-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
    SumUpElPriceInput2.setAttribute('type', 'number');

    SumUpElPriceBox2.append(SumUpElPriceLabel2, SumUpElPriceInput2);
    ///////////////////
    const SumUpElPriceBoxEsk2 = document.createElement('div');
    SumUpElPriceBoxEsk2.setAttribute('class', 'app-container__input-option')

    const SumUpElPriceEskLabel2 = document.createElement('label');
    SumUpElPriceEskLabel2.textContent = "Baholanayotgan avtotransport vositasi "+ counter +"-konstruktiv elementi jismoniy eskirishi: %";
    SumUpElPriceEskLabel2.setAttribute('for', "Baholanayotgan-avto- "+ counter +"-elementi-jismoniy-eskirishi");

    const SumUpElPriceEskInput2 = document.createElement('input');
    SumUpElPriceEskInput2.dataset.konstPriceEski = '';
    SumUpElPriceEskInput2.setAttribute('id', "Baholanayotgan-avto- "+ counter +"-elementi-jismoniy-eskirishi");
    SumUpElPriceEskInput2.setAttribute('name', "Baholanayotgan-avto- "+ counter +"-elementi-jismoniy-eskirishi");
    SumUpElPriceEskInput2.setAttribute('type', 'number');
    SumUpElPriceBoxEsk2.append(SumUpElPriceEskLabel2, SumUpElPriceEskInput2);
    ////////////
    fourthMethodContainer2.appendChild(SumUpElNameBox2, SumUpElPriceBox2, SumUpElPriceBoxEsk2);
    konstAddbtn.before(SumUpElNameBox2, SumUpElPriceBox2, SumUpElPriceBoxEsk2);
    SumUpCarPriceLabel.textContent = `Baholanayotgan avtotransport vositasining konstruktiv elementlar soni: ${counter}`;

    counter++;

});
//Baholanayotgan avtotransport vositasining konstruktiv elementlar soni
const SumUpElPriceBoxSoni = document.createElement('div');
SumUpElPriceBoxSoni.setAttribute('class', 'app-container__input-option')

const SumUpCarPriceLabel = document.createElement('label');
SumUpCarPriceLabel.textContent = `Baholanayotgan avtotransport vositasining konstruktiv elementlar soni: 2`;
SumUpCarPriceLabel.setAttribute('for', "Baholanayotgan-avto-elementlar-soni");
SumUpElPriceBoxSoni.append(SumUpCarPriceLabel);


function fourthMethod(e) {
    if (calcMethodSelect2.value == '4-usul') {
        inputBlockEL.append(fourthMethodContainer2);
    } else {
        fourthMethodContainer2.remove();
    }
}

const fourthMethodContainer2 = document.createElement('div');
fourthMethodContainer2.setAttribute('class', 'app-container__input-block');

/////jis eskirish
const SumUpElPriceJisEsk = document.createElement('div');
SumUpElPriceJisEsk.setAttribute('class', 'app-container__input-option');

const SumUpElPriceJisEskLabel = document.createElement('label');
SumUpElPriceJisEskLabel.textContent = `Jismoniy eskirish: `;
SumUpElPriceJisEskLabel.setAttribute('for', "Baholanayotgan-avto-elementlar-soni");
SumUpElPriceJisEsk.append(SumUpElPriceJisEskLabel);
fourthMethodContainer2.append(SumUpElNameBox, SumUpElPriceBox, SumUpElPriceBoxEsk, SumUpElNameBox2, SumUpElPriceBox2, SumUpElPriceBoxEsk2, konstAddbtn, SumUpElPriceBoxSoni,SumUpElPriceJisEsk);

calcMethodSelect2.addEventListener('change', fourthMethod);

fourthMethod();

function removeFuncOpt(e) {
    if (calcTypeEl.value.toLowerCase() == 'tiklanish-hisobi'.toLowerCase()) {
        fourthMethodContainer2.remove();
    }
}
removeFuncOpt();



// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************
// ************************************************************************************

// 5-usul

const explCarTypes = document.createElement('div');
explCarTypes.setAttribute('class', 'app-container__input-option');

const explCarTypesLabel = document.createElement('label');
explCarTypesLabel.setAttribute('for', 'calculation-method');
explCarTypesLabel.textContent = 'Baholanayotgan avtotransport vositalarining turi:';

const explCarTypeSelect = document.createElement('select');
explCarTypeSelect.setAttribute('name', 'calculation-method')
explCarTypeSelect.setAttribute('id', 'calculation-method')
explCarTypeSelect.setAttribute('class', 'app-container__select')

const explCarTypeOption1 = document.createElement("option");
explCarTypeOption1.setAttribute('value', '1-tur');
explCarTypeOption1.textContent = 'Milliy yengil avtomobillar';

const explCarTypeOption2 = document.createElement("option");
explCarTypeOption2.setAttribute('value', '2-tur');
explCarTypeOption2.textContent = 'Milliy bortli yuk avtomobillari';

const explCarTypeOption3 = document.createElement("option");
explCarTypeOption3.setAttribute('value', '3-tur');
explCarTypeOption3.textContent = 'Rossiya shatakchi-avtomobillari';

const explCarTypeOption4 = document.createElement("option");
explCarTypeOption4.setAttribute('value', '4-tur');
explCarTypeOption4.textContent = "Rossiya ag'darma-mashinalari";

const explCarTypeOption5 = document.createElement("option");
explCarTypeOption5.setAttribute('value', '5-tur');
explCarTypeOption5.textContent = 'Rossiya maxsus avtotransport vositalari';

const explCarTypeOption6 = document.createElement("option");
explCarTypeOption6.setAttribute('value', '6-tur');
explCarTypeOption6.textContent = 'Rossiya avtobuslari';

const explCarTypeOption7 = document.createElement("option");
explCarTypeOption7.setAttribute('value', '7-tur');
explCarTypeOption7.textContent = 'Yevropada ishlab chiqarilgan yengil avtomobillar';

const explCarTypeOption8 = document.createElement("option");
explCarTypeOption8.setAttribute('value', '8-tur');
explCarTypeOption8.textContent = 'Amerikada ishlab chiqarilgan yengil avtomobillar';

const explCarTypeOption9 = document.createElement("option");
explCarTypeOption9.setAttribute('value', '9-tur');
explCarTypeOption9.textContent = 'Osiyoda (Yaponiyadan tashqari) ishlab chiqarilgan yengil avtomobillar';

const explCarTypeOption10 = document.createElement("option");
explCarTypeOption10.setAttribute('value', '10-tur');
explCarTypeOption10.textContent = 'Yaponiyada ishlab chiqarilgan yengil avtomobillar';

const explCarTypeOption11 = document.createElement("option");
explCarTypeOption11.setAttribute('value', '11-tur');
explCarTypeOption11.textContent = 'Chet elda ishlab chiqarilgan yuk avtomobillar';

const explCarTypeOption12 = document.createElement("option");
explCarTypeOption12.setAttribute('value', '12-tur');
explCarTypeOption12.textContent = 'Chet elda ishlab chiqarilgan avtobuslar';

//Baholanayotgan avtotransport vositasining yoshi, yil
const explCarAge = document.createElement('div');
explCarAge.setAttribute('class', 'app-container__input-option')

const explCarAgeLabel = document.createElement('label');
explCarAgeLabel.textContent = "Baholanayotgan avtotransport vositasining yoshi, yil";
explCarAgeLabel.setAttribute('for', 'Baholanayotgan-avtotransport-vositasining-yoshi');

const explCarAgeInput = document.createElement('input');
explCarAgeInput.setAttribute('id', 'Baholanayotgan-avtotransport-vositasining-yoshi');
explCarAgeInput.setAttribute('name', 'Baholanayotgan-avtotransport-vositasining-yoshi');
explCarAgeInput.setAttribute('type', 'number');

explCarAge.append(explCarAgeLabel, explCarAgeInput);

//Baholanayotgan avtotransport vositasining expluatatsiya boshidan bosib o'tgan masofasi, ming km
const explCarDest = document.createElement('div');
explCarDest.setAttribute('class', 'app-container__input-option')
const explCarDestLabel = document.createElement('label');
explCarDestLabel.textContent = "Baholanayotgan avtotransport vositasining expluatatsiya boshidan bosib o'tgan masofasi, ming km";
explCarDestLabel.setAttribute('for', 'Baholanayotgan-avto-bosgan-masofasi');

const explCarDestInput = document.createElement('input');
explCarDestInput.setAttribute('id', "Baholanayotgan-avto-bosgan-masofasi");
explCarDestInput.setAttribute('name', "Baholanayotgan-avto-bosgan-masofasi");
explCarDestInput.setAttribute('type', 'number');

explCarDest.append(explCarDestLabel, explCarDestInput);


explCarTypeSelect.append(explCarTypeOption1, explCarTypeOption2, explCarTypeOption3, explCarTypeOption4, explCarTypeOption5, explCarTypeOption6, explCarTypeOption7, explCarTypeOption8, explCarTypeOption9, explCarTypeOption10, explCarTypeOption11, explCarTypeOption12)
explCarTypes.append(explCarTypesLabel, explCarTypeSelect)

function fifthMethod(e) {
    if (calcMethodSelect2.value == '5-usul') {
        inputBlockEL.append(fifthMethodContainer);
    } else {
        fifthMethodContainer.remove();
    }
}

const fifthMethodContainer = document.createElement('div');
fifthMethodContainer.setAttribute('class', 'app-container__input-block');
fifthMethodContainer.append(explCarTypes, explCarAge, explCarDest);

calcMethodSelect2.addEventListener('change', fifthMethod);

fifthMethod();

//formula
//1
let omega;
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

omegaFunc();
explCarTypeSelect.addEventListener('change', omegaFunc);

/****************************************************************** */
/****************************************************************** */
/****************************************************************** */

// 6-usul
const expertTahMethod = document.createElement('div');
expertTahMethod.setAttribute('class', 'app-container__input-option');

const expertTahMethodLabel = document.createElement('h3');
expertTahMethodLabel.setAttribute('for', 'calculation-method');
expertTahMethodLabel.textContent = "Funksional (ma'naviy) eskirish";
expertTahMethodLabel.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';
// Avtotransport vositasiga funksional eskirish hisoblash sababi
const funcEskSab = document.createElement('div');
funcEskSab.setAttribute('class', 'app-container__input-option')

const funcEskSabLabel = document.createElement('label');
funcEskSabLabel.textContent = 'Avtotransport vositasiga funksional eskirish hisoblash sababi';
funcEskSabLabel.setAttribute('for', 'funksional-eskirish-sababi');

const funcEskSabInput = document.createElement('input');
funcEskSabInput.setAttribute('id', 'funksional-eskirish-sababi');
funcEskSabInput.setAttribute('name', 'funksional-eskirish-sababi');
funcEskSabInput.setAttribute('type', 'text');

funcEskSab.append(funcEskSabLabel, funcEskSabInput);
// Funksional eskirish: %  Main
const funkEskirishMain = document.createElement('div');
funkEskirishMain.setAttribute('class', 'app-container__input-option')

const funkEskirishMainLabel = document.createElement('label');
funkEskirishMainLabel.textContent = "Funksional eskirish: %";
funkEskirishMainLabel.setAttribute('for', "funksional-eskirish");

const funkEskirishInputMain = document.createElement('input');
funkEskirishInputMain.setAttribute('id', "funksional-eskirish");
funkEskirishInputMain.setAttribute('name', "funksional-eskirish");
funkEskirishInputMain.setAttribute('type', 'number');

funkEskirishMain.append(funkEskirishMainLabel, funkEskirishInputMain);
//   sababi
const expertTahMethodLabel2 = document.createElement('h3');
expertTahMethodLabel2.setAttribute('for', 'calculation-method');
expertTahMethodLabel2.textContent = "Tashqi (iqtisodiy) eskirish";
expertTahMethodLabel2.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';

const tashqiEskSab = document.createElement('div');
tashqiEskSab.setAttribute('class', 'app-container__input-option')

const tashqiEskSabLabel = document.createElement('label');
tashqiEskSabLabel.textContent = 'Avtotransport vositasiga tashqi eskirish hisoblash sababi';
tashqiEskSabLabel.setAttribute('for', 'tashqi-eskirish-sababi');

const tashqiEskSabInput = document.createElement('input');
tashqiEskSabInput.setAttribute('id', 'tashqi-eskirish-sababi');
tashqiEskSabInput.setAttribute('name', 'tashqi-eskirish-sababi');
tashqiEskSabInput.setAttribute('type', 'text');

tashqiEskSab.append(tashqiEskSabLabel, tashqiEskSabInput);
// Tashqi eskirish: %
const tashqiEskirish = document.createElement('div');
tashqiEskirish.setAttribute('class', 'app-container__input-option')

const tashqiEskirishLabel = document.createElement('label');
tashqiEskirishLabel.textContent = "Tashqi eskirish: %";
tashqiEskirishLabel.setAttribute('for', "tashqi-eskirish");

const tashqiEskirishInput = document.createElement('input');
tashqiEskirishInput.setAttribute('id', "tashqi-eskirish");
tashqiEskirishInput.setAttribute('name', "tashqi-eskirish");
tashqiEskirishInput.setAttribute('type', 'number');

tashqiEskirish.append(tashqiEskirishLabel, tashqiEskirishInput);
// Jismoniy eskirish: %'
const expertTahMethodLabel3 = document.createElement('h3');
expertTahMethodLabel3.setAttribute('for', 'calculation-method');
expertTahMethodLabel3.textContent = "Jismoniy eskirish";
expertTahMethodLabel3.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';

const jisEsk = document.createElement('div');
jisEsk.setAttribute('class', 'app-container__input-option')

const jisEskLabel = document.createElement('label');
jisEskLabel.textContent = 'Jismoniy eskirish: %';
jisEskLabel.setAttribute('for', 'jismoniy-eskirish');

const jisEskInput = document.createElement('input');
jisEskInput.setAttribute('id', 'jismoniy-eskirish');
jisEskInput.setAttribute('name', 'jismoniy-eskirish');
jisEskInput.setAttribute('type', 'number');

jisEsk.append(jisEskLabel, jisEskInput);
/////////////////////////////////////////////////
// Jamlangan eskirish
const expertTahMethodLabel4 = document.createElement('h3');
expertTahMethodLabel4.setAttribute('for', 'calculation-method');
expertTahMethodLabel4.textContent = "Jamlangan eskirish";
expertTahMethodLabel4.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';

const jamiEskirish = document.createElement('div');
jamiEskirish.setAttribute('class', 'app-container__input-option')

const jamiEskirishLabel = document.createElement('label');
jamiEskirishLabel.setAttribute('for', "jami-eskirish");
jamiEskirishLabel.textContent = "Jamlangan eskirish:"

const eskirishEls = [tashqiEskirishInput, funkEskirishInputMain, jisEskInput];

eskirishEls.forEach(element => {
    element.addEventListener('input', () => {
        jamiEskirish.value = Number(tashqiEskirishInput.value) + Number(funkEskirishInputMain.value) + Number(jisEskInput.value);
        jamiEskirishLabel.textContent = `Jamlangan eskirish: ${jamiEskirish.value}%`;
    })
});
jamiEskirish.append(jamiEskirishLabel);

/////////////////////////////////////////////////
const expertTahMethodLabel5 = document.createElement('h3');
expertTahMethodLabel5.setAttribute('for', 'calculation-method');
expertTahMethodLabel5.textContent = "Avtotransport vositasining xarajat yondashuvida hisoblangan qiymati";
expertTahMethodLabel5.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';
// Avtotransport vositasining tiklanish qiymati: so'm
const tiklanishQiymat = document.createElement('div');
tiklanishQiymat.setAttribute('class', 'app-container__input-option')

const tiklanishQiymatLabel = document.createElement('label');
tiklanishQiymatLabel.textContent = "Avtotransport vositasining tiklanish qiymati: so'm";
tiklanishQiymatLabel.setAttribute('for', 'tiklanish-qiymati');

const tiklanishQiymatInput = document.createElement('input');
tiklanishQiymatInput.setAttribute('id', 'tiklanish-qiymati');
tiklanishQiymatInput.setAttribute('name', 'tiklanish-qiymati');
tiklanishQiymatInput.setAttribute('type', 'number');

tiklanishQiymat.append(tiklanishQiymatLabel, tiklanishQiymatInput);
// Avtotransport vositasining jamlangan eskirishi: %
const avtJamEskirish = document.createElement('div');
avtJamEskirish.setAttribute('class', 'app-container__input-option')

const avtJamEskirishLabel = document.createElement('label');
avtJamEskirishLabel.textContent = "Avtotransport vositasining jamlangan eskirishi: %";
avtJamEskirishLabel.setAttribute('for', "avtJam-eskirish");

const avtJamEskirishInput = document.createElement('input');
avtJamEskirishInput.setAttribute('id', "avtJam-eskirish");
avtJamEskirishInput.setAttribute('name', "avtJam-eskirish");
avtJamEskirishInput.setAttribute('type', 'number');

avtJamEskirish.append(avtJamEskirishLabel, avtJamEskirishInput);
// Baholash oby'ekti - avtotransport vositasining xarajat yondashuvida aniqlangan qiymati: so'm
const xarQiymat = document.createElement('div');
xarQiymat.setAttribute('class', 'app-container__input-option')

const xarQiymatLabel = document.createElement('label');
xarQiymatLabel.textContent = "Baholash oby'ekti - avtotransport vositasining xarajat yondashuvida aniqlangan qiymati: so'm";
xarQiymatLabel.setAttribute('for', "xarajat-qiymat");

const xarQiymatInput = document.createElement('input');
xarQiymatInput.setAttribute('id', "xarajat-qiymat");
xarQiymatInput.setAttribute('name', "xarajat-qiymat");
xarQiymatInput.setAttribute('type', 'number');

xarQiymat.append(xarQiymatLabel, xarQiymatInput);
/////////////////////////////////////////////////
expertTahMethod.append(expertTahMethodLabel, funcEskSab, funkEskirishMain, expertTahMethodLabel2, tashqiEskSab, tashqiEskirish, expertTahMethodLabel3, jisEsk, expertTahMethodLabel4, jamiEskirish, expertTahMethodLabel5, tiklanishQiymat, avtJamEskirish, xarQiymat)

function sixthMethod(e) {
    if (calcMethodSelect2.value == '6-usul') {
        inputBlockEL.append(sixthMethodContainer);
    } else {
        sixthMethodContainer.remove();
    }
}

const sixthMethodContainer = document.createElement('div');
sixthMethodContainer.setAttribute('class', 'app-container__input-block');
sixthMethodContainer.append(expertTahMethod);

calcMethodSelect2.addEventListener('change', sixthMethod);

sixthMethod();

//formula

////////////////////////
//1
// Jamg'arilgan formula

const jamgarEsk = (1 - (1 - Number(jisEskInput.value) / 100) *
    (1 - Number(funkEskirishInputMain.value) / 100) *
    (1 - Number(tashqiEskirishInput.value) / 100)) * 100;

//2 Qoldiq qiymat

const qoldiqQiymat = Number(tiklanishQiymatInput) * (1 - Number(avtJamEskirishInput.value) / 100);
///////////////////////

function chooseTypeFinished() {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase()) {
        inputBlockEL.append(calcMethodInputBlock2);
    }
    else {
        calcMethodInputBlock2.remove();
        fourthMethodContainer2.remove();
        fifthMethodContainer.remove();
        sixthMethodContainer.remove();
    }

}
calcTypeEl.addEventListener('change', chooseTypeFinished);

chooseTypeFinished();
const calcBtn = document.querySelector('#calc-btn');

calcBtn.addEventListener('click', omegaFunc);

calcBtn.addEventListener('click', (e) => {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase() && calcMethodSelect2.value == "5-usul") {
        console.log(100 * (1 - 2.71828 ** -omega) + " foiz");
    }
    else if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase() && calcMethodSelect2.value == "6-usul") {
        console.log((1 - (1 - Number(jisEskInput.value) / 100) *
            (1 - Number(funkEskirishInputMain.value) / 100) *
            (1 - Number(tashqiEskirishInput.value) / 100)) * 100);
        console.log(Number(tiklanishQiymatInput.value) * (1 - Number(avtJamEskirishInput.value) / 100));
    }
    else if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase() && calcMethodSelect2.value == "4-usul") {
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
        result += Number(arrPricEls[i].value) * Number(arrPricEskiEls[i].value) ;
         };
         SumUpElPriceJisEskLabel.textContent = "Jismoniy eskirish: " + result
    }
});

