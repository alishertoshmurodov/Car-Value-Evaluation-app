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
    if (calcTypeEl.value.toLowerCase() == 'tiklanish-hisobi'.toLowerCase() ) {
        inputBlockEL.append(calcMethodInputBlock);
    } 
}

chooseType();

calcTypeEl.addEventListener('change', chooseType);


// 1-usul


// 2-usul

