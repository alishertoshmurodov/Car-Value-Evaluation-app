// Alisher



// Hisob turi tanlash

const calcTypeEl = document.querySelector('#calculation-type');
const inputBlockEL = document.querySelector('.app-container__input-block');



// ******************************************* //
// Tiklanish qiymati hisoblash usuli selektori //
// ******************************************* //

const calcMethodInputBlock = document.createElement('div');
calcMethodInputBlock.setAttribute('class', 'app-container__input-option');

const calcMethodLabel = document.createElement('label');
calcMethodLabel.setAttribute('for', 'calculation-method');
calcMethodLabel.textContent = 'Hisoblash usuli:';

const calcMethodSelect = document.createElement('select');
calcMethodSelect.setAttribute('name', 'calculation-method');
calcMethodSelect.setAttribute('id', 'calculation-method');
calcMethodSelect.setAttribute('class', 'app-container__select');

const calcMethodOption1 = document.createElement('option');
calcMethodOption1.setAttribute('value', '1-usul');
calcMethodOption1.textContent = '1.Amashtirish usuli';

const calcMethodOption2 = document.createElement('option');
calcMethodOption2.setAttribute('value', '2-usul');
calcMethodOption2.textContent = "2.Turdosh avtotransport vositasi narxi bo'yicha hisoblash usuli";

const calcMethodOption3 = document.createElement('option');
calcMethodOption3.setAttribute('value', '3-usul');
calcMethodOption3.textContent = '3.Elementma-element hisoblash usuli';

const calcMethodOption4 = document.createElement('option');
calcMethodOption4.setAttribute('value', '4-usul');
calcMethodOption4.textContent = '4.Qiymatni indeksatsiyalash usuli';

calcMethodSelect.append(calcMethodOption1, calcMethodOption2, calcMethodOption3, calcMethodOption4);
calcMethodInputBlock.append(calcMethodLabel, calcMethodSelect);


function chooseType(e) {
    if (calcTypeEl.value.toLowerCase() == 'tiklanish-hisobi'.toLowerCase()) {
        inputBlockEL.append(calcMethodInputBlock);
    }
    else{
        calcMethodInputBlock.remove(); 
        firstMethodContainer.remove(); 
    }
}


chooseType(); 

calcTypeEl.addEventListener('change', chooseType);
// calcTypeEl.addEventListener('change', chooseType2);


// 
// 1-usul
// 


// Analog-transport-rusumi

const analogCarNameBox = document.createElement('div');
analogCarNameBox.setAttribute('class', 'app-container__input-option')

const analogCarNameLabel = document.createElement('label');
analogCarNameLabel.textContent = 'Analog avtotransport vositasi rusumi:';
analogCarNameLabel.setAttribute('for', 'Analog-transport-rusumi');

const analogCarNameInput = document.createElement('input');
analogCarNameInput.setAttribute('id', 'Analog-transport-rusumi');
analogCarNameInput.setAttribute('name', 'Analog-transport-rusumi');
analogCarNameInput.setAttribute('type', 'text');

analogCarNameBox.append(analogCarNameLabel, analogCarNameInput);


// Analog-transport-turi

const analogCarTypeBox = document.createElement('div');
analogCarTypeBox.setAttribute('class', 'app-container__input-option')

const analogCarTypeLabel = document.createElement('label');
analogCarTypeLabel.textContent = 'Analog avtotransport vositasi turi:';
analogCarTypeLabel.setAttribute('for', 'Analog-transport-turi');

const analogCarTypeInput = document.createElement('input');
analogCarTypeInput.setAttribute('id', 'Analog-transport-turi');
analogCarTypeInput.setAttribute('name', 'Analog-transport-turi');
analogCarTypeInput.setAttribute('type', 'text');

analogCarTypeBox.append(analogCarTypeLabel, analogCarTypeInput);


// Analog-transport-narxi

const analogCarPriceBox = document.createElement('div');
analogCarPriceBox.setAttribute('class', 'app-container__input-option')

const analogCarPriceLabel = document.createElement('label');
analogCarPriceLabel.textContent = "Analog standart komplektatsiyaga ega avtotransport vositasi narxi: (So'm)";
analogCarPriceLabel.setAttribute('for', 'Analog-transport-narxi');

const analogCarPriceInput = document.createElement('input');
analogCarPriceInput.setAttribute('id', 'Analog-transport-narxi');
analogCarPriceInput.setAttribute('name', 'Analog-transport-narxi');
analogCarPriceInput.setAttribute('type', 'number');

analogCarPriceBox.append(analogCarPriceLabel, analogCarPriceInput);


// Analog avtotransport vositasi narxi to'g'risidagi ma'lumot sanasi

const analogCarInfoDateBox = document.createElement('div');
analogCarInfoDateBox.setAttribute('class', 'app-container__input-option')

const analogCarInfoDateLabel = document.createElement('label');
analogCarInfoDateLabel.textContent = "Analog avtotransport vositasi narxi to'g'risidagi ma'lumot sanasi:";
analogCarInfoDateLabel.setAttribute('for', 'Analog-transport-malumot-sanasi');

const analogCarInfoDateInput = document.createElement('input');
analogCarInfoDateInput.setAttribute('id', 'Analog-transport-malumot-sanasi');
analogCarInfoDateInput.setAttribute('name', 'Analog-transport-malumot-sanasi');
analogCarInfoDateInput.setAttribute('type', 'date');

analogCarInfoDateBox.append(analogCarInfoDateLabel, analogCarInfoDateInput);


// Analog avtotransport vositasi narxi to'g'risidagi ma'lumot olingan manba 

const analogCarInfoSourceBox = document.createElement('div');
analogCarInfoSourceBox.setAttribute('class', 'app-container__input-option')

const analogCarInfoSourceLabel = document.createElement('label');
analogCarInfoSourceLabel.textContent = "Analog avtotransport vositasi narxi to'g'risidagi ma'lumot olingan manba:";
analogCarInfoSourceLabel.setAttribute('for', 'Analog-transport-malumot-manba');

const analogCarInfoSourceInput = document.createElement('input');
analogCarInfoSourceInput.setAttribute('id', 'Analog-transport-malumot-manba');
analogCarInfoSourceInput.setAttribute('name', 'Analog-transport-malumot-manba');
analogCarInfoSourceInput.setAttribute('type', 'text');

analogCarInfoSourceBox.append(analogCarInfoSourceLabel, analogCarInfoSourceInput);


// Analog-ob'yekt narxiga tuzatushlar

const analogObjPriceSettingsHeading = document.createElement('h3');
analogObjPriceSettingsHeading.textContent = "Analog-ob'yekt narxiga tuzatushlar";
analogObjPriceSettingsHeading.style = 'text-align: center; font-weight: 700; padding: 20px 0; border-bottom: 1px solid gray';


// 1

const analogCarPriceSetting1Box = document.createElement('div');
analogCarPriceSetting1Box.setAttribute('class', 'app-container__input-option')

const analogCarPriceSetting1Label = document.createElement('label');
analogCarPriceSetting1Label.textContent = "Ishlab chiqarish, texnik, texnologik, funksional tavsiflari, butlanishi, jiholanishi va boshqalar bo'yicha tafovutlarlarga qarab tuzatishlar, so'm";
analogCarPriceSetting1Label.setAttribute('for', 'Analog-transport-narxiga-tuzatish-1');

const analogCarPriceSetting1Input = document.createElement('input');
analogCarPriceSetting1Input.setAttribute('id', 'Analog-transport-narxiga-tuzatish-1');
analogCarPriceSetting1Input.setAttribute('name', 'Analog-transport-narxiga-tuzatish-1');
analogCarPriceSetting1Input.setAttribute('type', 'number');

analogCarPriceSetting1Box.append(analogCarPriceSetting1Label, analogCarPriceSetting1Input);


// 2

const analogCarPriceSetting2Box = document.createElement('div');
analogCarPriceSetting2Box.setAttribute('class', 'app-container__input-option')

const analogCarPriceSetting2Label = document.createElement('label');
analogCarPriceSetting2Label.textContent = "Tashish, bitimni rasmiylashtirish, soliq va yig imlarga qarab tuzatish, so`m";
analogCarPriceSetting2Label.setAttribute('for', 'Analog-transport-narxiga-tuzatish-2');

const analogCarPriceSetting2Input = document.createElement('input');
analogCarPriceSetting2Input.setAttribute('id', 'Analog-transport-narxiga-tuzatish-2');
analogCarPriceSetting2Input.setAttribute('name', 'Analog-transport-narxiga-tuzatish-2');
analogCarPriceSetting2Input.setAttribute('type', 'number');

analogCarPriceSetting2Box.append(analogCarPriceSetting2Label, analogCarPriceSetting2Input);



function firstMethod(e) {
    if (calcMethodSelect.value == '1-usul') {
        inputBlockEL.append(firstMethodContainer);
    } else {
        firstMethodContainer.remove();
    }
}

const firstMethodContainer = document.createElement('div');
firstMethodContainer.setAttribute('class', 'app-container__input-block');
firstMethodContainer.append(analogCarNameBox, analogCarTypeBox, analogCarPriceBox, analogCarInfoDateBox, analogCarInfoSourceBox, analogObjPriceSettingsHeading, analogCarPriceSetting1Box, analogCarPriceSetting2Box);

calcMethodSelect.addEventListener('change', firstMethod);

firstMethod();

function removeFuncOpt1(e) {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase()) {
         firstMethodContainer.remove();
    }
 }
 removeFuncOpt1();
calcTypeEl.addEventListener('change', removeFuncOpt1);


// 2-usul

