// Aziz

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

const calcMethodOption44 = document.createElement('option');
calcMethodOption44.setAttribute('value', '4-usul');
calcMethodOption44.textContent = "4.O'rtacha o'lchangan eskirish usuli";

const calcMethodOption5 = document.createElement('option');
calcMethodOption5.setAttribute('value', '5-usul');
calcMethodOption5.textContent = "5.Yoshi va eksplutatsiya boshidan bosib o'tgan masofani hisobga olgan usul";

const calcMethodOption6 = document.createElement('option');
calcMethodOption6.setAttribute('value', '6-usul');
calcMethodOption6.textContent = "6.Ekspert-tahliliy usul";

calcMethodSelect2.append(calcMethodOption44, calcMethodOption5, calcMethodOption6);
calcMethodInputBlock2.append(calcMethodLabel2, calcMethodSelect2);


function chooseType4() {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase()) {
        inputBlockEL.append(calcMethodInputBlock2);
    }
    else {
        calcMethodInputBlock2.remove();
    }

}


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
SumUpElPriceInput.setAttribute('id', "Baholanayotgan-avto-1-elementi-tannarxining-baholash-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput.setAttribute('name', "Baholanayotgan-avto-1-elementi-tannarxining-baholash-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput.setAttribute('type', 'number');

SumUpElPriceBox.append(SumUpElPriceLabel, SumUpElPriceInput);

// "Baholanayotgan avtotransport vositasi 2-konstruktiv elementning nomi"
const SumUpElNameBox2 = document.createElement('div');
SumUpElNameBox2.setAttribute('class', 'app-container__input-option')

const SumUpElNameLabel2 = document.createElement('label');
SumUpElNameLabel2.textContent = 'Baholanayotgan avtotransport vositasi 2-konstruktiv elementning nomi:';
SumUpElNameLabel2.setAttribute('for', 'Baholanayotgan-avto-2-konstruktiv-elementning-nomi');

const SumUpElNameInput2 = document.createElement('input');
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
SumUpElPriceInput2.setAttribute('id', "Baholanayotgan-avto-2-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput2.setAttribute('name', "Baholanayotgan-avto-2-elementi-tannarxining-oby'ekti-tannarxidagi-salmog'i");
SumUpElPriceInput2.setAttribute('type', 'number');

SumUpElPriceBox2.append(SumUpElPriceLabel2, SumUpElPriceInput2);

//Baholanayotgan avtotransport vositasining konstruktiv elementlar soni
const SumUpElPriceBoxSoni = document.createElement('div');
SumUpElPriceBoxSoni.setAttribute('class', 'app-container__input-option')

const SumUpCarPriceLabel = document.createElement('label');
SumUpCarPriceLabel.textContent = "Baholanayotgan avtotransport vositasining konstruktiv elementlar soni";
SumUpCarPriceLabel.setAttribute('for', "Baholanayotgan-avto-elementlar-soni");

const SumUpElPriceInputsoni = document.createElement('input');
SumUpElPriceInputsoni.setAttribute('id', "Baholanayotgan-avto-elementlar-soni");
SumUpElPriceInputsoni.setAttribute('name', "Baholanayotgan-avto-elementlar-soni");
SumUpElPriceInputsoni.setAttribute('type', 'number');

SumUpElPriceBoxSoni.append(SumUpCarPriceLabel, SumUpElPriceInputsoni);

//Jismoniy eskirish
const SumUpElPriceBoxEski = document.createElement('div');
SumUpElPriceBoxEski.setAttribute('class', 'app-container__input-option')

const SumUpElPriceLabelEski = document.createElement('label');
SumUpElPriceLabelEski.textContent = "Jismoniy eskirish: %";
SumUpElPriceLabelEski.setAttribute('for', "Jismoniy-eskirish");

const SumUpElPriceInputEski = document.createElement('input');
SumUpElPriceInputEski.setAttribute('id', "Jismoniy-eskirish");
SumUpElPriceInputEski.setAttribute('name', "Jismoniy-eskirish");
SumUpElPriceInputEski.setAttribute('type', 'number');

SumUpElPriceBoxEski.append(SumUpElPriceLabelEski, SumUpElPriceInputEski);

function fourthMethod(e) {
    if (calcMethodSelect2.value == '4-usul') {
        inputBlockEL.append(fourthMethodContainer2);
    } else {
        fourthMethodContainer2.remove();
    }
}

const fourthMethodContainer2 = document.createElement('div');
fourthMethodContainer2.setAttribute('class', 'app-container__input-block');
fourthMethodContainer2.append(SumUpElNameBox, SumUpElPriceBox, SumUpElNameBox2, SumUpElPriceBox2, SumUpElPriceBoxSoni, SumUpElPriceBoxEski);

calcMethodSelect2.addEventListener('change', fourthMethod);

fourthMethod();

function removeFuncOpt(e) {
    if (calcTypeEl.value.toLowerCase() == 'tiklanish-hisobi'.toLowerCase()) {
        fourthMethodContainer2.remove();
    }
}
removeFuncOpt();

//formula


// kamchiliklar mavjud birinchi birgalikda to'g'irlaymiz savollar va asabbuzarliklar bo'lsa aytinglar
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

const explCarBoxEski = document.createElement('div');
explCarBoxEski.setAttribute('class', 'app-container__input-option')

const explCarLabelEski = document.createElement('label');
explCarLabelEski.textContent = "Jismoniy eskirish: %";
explCarLabelEski.setAttribute('for', "Jismoniy-eskirish");

const explCarInputEski = document.createElement('input');
explCarInputEski.setAttribute('id', "Jismoniy-eskirish");
explCarInputEski.setAttribute('name', "Jismoniy-eskirish");
explCarInputEski.setAttribute('type', 'number');

explCarBoxEski.append(explCarLabelEski, explCarInputEski);

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
fifthMethodContainer.append(explCarTypes, explCarAge, explCarDest, explCarBoxEski);

calcMethodSelect2.addEventListener('change', fifthMethod);

fifthMethod();

//formula


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
// Funksional eskirish: %
const funcEskirish = document.createElement('div');
funcEskirish.setAttribute('class', 'app-container__input-option')

const funcEskirishLabel = document.createElement('label');
funcEskirishLabel.textContent = "Funksional eskirish: %";
funcEskirishLabel.setAttribute('for', "funksional-eskirish");

const funcEskirishInput = document.createElement('input');
funcEskirishInput.setAttribute('id', "funksional-eskirish");
funcEskirishInput.setAttribute('name', "funksional-eskirish");
funcEskirishInput.setAttribute('type', 'number');

funcEskirish.append(funcEskirishLabel, funcEskirishInput);
//Tashqi (iqtisodiy) eskirish Avtotransport vositasiga tashqi eskirish hisoblash sababi
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

tashqiEskirish.append(tashqiEskirishLabel, tashqiEskirishInput)
/////////////////////////////////////////////////
const expertTahMethodLabel3 = document.createElement('h3');
expertTahMethodLabel3.setAttribute('for', 'calculation-method');
expertTahMethodLabel3.textContent = "Jamlangan eskirish";
expertTahMethodLabel3.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';
// Jismoniy eskirish: %'
const jisEsk = document.createElement('div');
jisEsk.setAttribute('class', 'app-container__input-option')

const jisEskLabel = document.createElement('label');
jisEskLabel.textContent = 'Jismoniy eskirish: %';
jisEskLabel.setAttribute('for', 'jismoniy-eskirish');

const jisEskInput = document.createElement('input');
jisEskInput.setAttribute('id', 'jismoniy-eskirish');
jisEskInput.setAttribute('name', 'jismoniy-eskirish');
jisEskInput.setAttribute('type', 'text');

jisEsk.append(jisEskLabel, jisEskInput);
// funksional eskirish: %"
const funkEskirish = document.createElement('div');
funkEskirish.setAttribute('class', 'app-container__input-option')

const funkEskirishLabel = document.createElement('label');
funkEskirishLabel.textContent = "funksional eskirish: %";
funkEskirishLabel.setAttribute('for', "funksional-eskirish");

const funkEskirishInput = document.createElement('input');
funkEskirishInput.setAttribute('id', "funksional-eskirish");
funkEskirishInput.setAttribute('name', "funksional-eskirish");
funkEskirishInput.setAttribute('type', 'number');

funkEskirish.append(funkEskirishLabel, funkEskirishInput);
// Tashqi (iqtisodiy) eskirish: %
const tashqiInEskirish = document.createElement('div');
tashqiInEskirish.setAttribute('class', 'app-container__input-option')

const tashqiInEskirishLabel = document.createElement('label');
tashqiInEskirishLabel.textContent = "Tashqi (iqtisodiy) eskirish: %";
tashqiInEskirishLabel.setAttribute('for', "tashqi-eskirish");

const tashqiInEskirishInput = document.createElement('input');
tashqiInEskirishInput.setAttribute('id', "tashqi-eskirish");
tashqiInEskirishInput.setAttribute('name', "tashqi-eskirish");
tashqiInEskirishInput.setAttribute('type', 'number');

tashqiInEskirish.append(tashqiInEskirishLabel, tashqiInEskirishInput);
// Jamlangan eskirish: %
const jamiEskirish = document.createElement('div');
jamiEskirish.setAttribute('class', 'app-container__input-option')

const jamiEskirishLabel = document.createElement('label');
jamiEskirishLabel.textContent = "Jamlangan eskirish: %";
jamiEskirishLabel.setAttribute('for', "jami-eskirish");

const jamiEskirishInput = document.createElement('input');
jamiEskirishInput.setAttribute('id', "jami-eskirish");
jamiEskirishInput.setAttribute('name', "jami-eskirish");
jamiEskirishInput.setAttribute('type', 'number');

jamiEskirish.append(jamiEskirishLabel, jamiEskirishInput);
/////////////////////////////////////////////////
const expertTahMethodLabel4 = document.createElement('h3');
expertTahMethodLabel4.setAttribute('for', 'calculation-method');
expertTahMethodLabel4.textContent = "Avtotransport vositasining xarajat yondashuvida hisoblangan qiymati";
expertTahMethodLabel4.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';
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
expertTahMethod.append(expertTahMethodLabel, funcEskSab, funcEskirish, expertTahMethodLabel2, tashqiEskSab, tashqiEskirish, expertTahMethodLabel3, jisEsk, funkEskirish, tashqiInEskirish, jamiEskirish, expertTahMethodLabel4, tiklanishQiymat, avtJamEskirish, xarQiymat)

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



