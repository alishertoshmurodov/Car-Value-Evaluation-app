

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

const calcMethodOption0 = document.createElement('option');
calcMethodOption0.setAttribute('value', 'none');
calcMethodOption0.textContent = 'Usulni tanlang';

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

calcMethodSelect.append(calcMethodOption0, calcMethodOption1, calcMethodOption2, calcMethodOption3, calcMethodOption4);
calcMethodInputBlock.append(calcMethodLabel, calcMethodSelect);


function chooseType(e) {
    if (calcTypeEl.value.toLowerCase() == 'tiklanish-hisobi'.toLowerCase()) {
        inputBlockEL.append(calcMethodInputBlock);
    } else {
        calcMethodInputBlock.remove();
        firstMethodContainer.remove();
        secondMethodContainer.remove();
        thirdMethodContainer.remove();
        fourthMethodContainer.remove();
    }
}


chooseType();

calcTypeEl.addEventListener('change', chooseType);
// calcTypeEl.addEventListener('change', chooseType2);



// 
// 1-usul
// 


// Analog-transport-rusumi

// const analogCarNameBox = document.createElement('div');
// analogCarNameBox.setAttribute('class', 'app-container__input-option')

// const analogCarNameLabel = document.createElement('label');
// analogCarNameLabel.textContent = 'Analog avtotransport vositasi rusumi:';
// analogCarNameLabel.setAttribute('for', 'Analog-transport-rusumi');

// const analogCarNameInput = document.createElement('input');
// analogCarNameInput.setAttribute('id', 'Analog-transport-rusumi');
// analogCarNameInput.setAttribute('name', 'Analog-transport-rusumi');
// analogCarNameInput.setAttribute('type', 'text');

// analogCarNameBox.append(analogCarNameLabel, analogCarNameInput);


// Analog-transport-turi

// const analogCarTypeBox = document.createElement('div');
// analogCarTypeBox.setAttribute('class', 'app-container__input-option')

// const analogCarTypeLabel = document.createElement('label');
// analogCarTypeLabel.textContent = 'Analog avtotransport vositasi turi:';
// analogCarTypeLabel.setAttribute('for', 'Analog-transport-turi');

// const analogCarTypeInput = document.createElement('input');
// analogCarTypeInput.setAttribute('id', 'Analog-transport-turi');
// analogCarTypeInput.setAttribute('name', 'Analog-transport-turi');
// analogCarTypeInput.setAttribute('type', 'text');

// analogCarTypeBox.append(analogCarTypeLabel, analogCarTypeInput);


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


// Analog-ob'yekt narxiga tuzatishlar

const analogObjPriceSettingsHeading = document.createElement('h3');
analogObjPriceSettingsHeading.textContent = "Analog-ob'yekt narxiga tuzatishlar";
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
analogCarPriceSetting2Label.textContent = "Tashish, bitimni rasmiylashtirish, soliq va yig'imlarga qarab tuzatish, so`m";
analogCarPriceSetting2Label.setAttribute('for', 'Analog-transport-narxiga-tuzatish-2');

const analogCarPriceSetting2Input = document.createElement('input');
analogCarPriceSetting2Input.setAttribute('id', 'Analog-transport-narxiga-tuzatish-2');
analogCarPriceSetting2Input.setAttribute('name', 'Analog-transport-narxiga-tuzatish-2');
analogCarPriceSetting2Input.setAttribute('type', 'number');

analogCarPriceSetting2Box.append(analogCarPriceSetting2Label, analogCarPriceSetting2Input);


// 3

const analogCarPriceSetting3Box = document.createElement('div');
analogCarPriceSetting3Box.setAttribute('class', 'app-container__input-option')

const analogCarPriceSetting3Label = document.createElement('label');
analogCarPriceSetting3Label.textContent = "Analog-ob'yektning joylashgan joyiga qarab tuzatish, so'm";
analogCarPriceSetting3Label.setAttribute('for', 'Analog-transport-narxiga-tuzatish-3');

const analogCarPriceSetting3Input = document.createElement('input');
analogCarPriceSetting3Input.setAttribute('id', 'Analog-transport-narxiga-tuzatish-3');
analogCarPriceSetting3Input.setAttribute('name', 'Analog-transport-narxiga-tuzatish-3');
analogCarPriceSetting3Input.setAttribute('type', 'number');

analogCarPriceSetting3Box.append(analogCarPriceSetting3Label, analogCarPriceSetting3Input);


// 4

const analogCarPriceSetting4Box = document.createElement('div');
analogCarPriceSetting4Box.setAttribute('class', 'app-container__input-option')

const analogCarPriceSetting4Label = document.createElement('label');
analogCarPriceSetting4Label.textContent = "Narxlar o'zgarishi dinamikasini hisobga olib tuzatish, so'm";
analogCarPriceSetting4Label.setAttribute('for', 'Analog-transport-narxiga-tuzatish-4');

const analogCarPriceSetting4Input = document.createElement('input');
analogCarPriceSetting4Input.setAttribute('id', 'Analog-transport-narxiga-tuzatish-4');
analogCarPriceSetting4Input.setAttribute('name', 'Analog-transport-narxiga-tuzatish-4');
analogCarPriceSetting4Input.setAttribute('type', 'number');

analogCarPriceSetting4Box.append(analogCarPriceSetting4Label, analogCarPriceSetting4Input);



// const firstMethodLastBox = document.createElement('div');
// firstMethodLastBox.setAttribute('class', 'app-container__input-option')

// const firstMethodLastLabel = document.createElement('label');
// firstMethodLastLabel.textContent = `Baholanayotgan avtotransport vositasining tiklanish 
// qiymati, so'm`;
// firstMethodLastLabel.setAttribute('for', 'baholangan-avto-tiklanish');

// const firstMethodLastInput = document.createElement('input');
// firstMethodLastInput.setAttribute('id', 'baholangan-avto-tiklanish');
// firstMethodLastInput.setAttribute('name', 'baholangan-avto-tiklanish');
// firstMethodLastInput.setAttribute('type', 'number');

// firstMethodLastBox.append(firstMethodLastLabel, firstMethodLastInput);



const addMalumotBtn = document.createElement("button");
addMalumotBtn.setAttribute("class", "add_btn");
addMalumotBtn.setAttribute("id", "add_btn");
addMalumotBtn.textContent = `Ma'lumot qo'shish`;

addMalumotBtn.addEventListener('click', function (e) {
    const addMalumotBlock = document.createElement('div');
    addMalumotBlock.setAttribute('class', 'app-container__input-option')


    const addMalumotNomiLabel = document.createElement('label');
    addMalumotNomiLabel.textContent = `Qoshimcha ma'lumot nomi:`;

    const addMalumotNomi = document.createElement('input');
    addMalumotNomi.setAttribute('type', 'text');


    const addMalumotQiymatiabel = document.createElement('label');
    addMalumotQiymatiabel.textContent = `Qoshimcha ma'lumot qiymati:`;

    const addMalumotQiymati = document.createElement('input');
    addMalumotQiymati.dataset.qiymatNomi = '';
    addMalumotQiymati.setAttribute('id', 'add-malumot-qiymati');
    addMalumotQiymati.setAttribute('name', 'add-malumot-qiymati');
    addMalumotQiymati.setAttribute('type', 'number');

    addMalumotBlock.append(addMalumotNomiLabel, addMalumotNomi, addMalumotQiymatiabel, addMalumotQiymati);
    firstMethodContainer.append(addMalumotBlock)
    addMalumotBtn.before(addMalumotBlock);
});


const firstMethodContainer = document.createElement('div');
firstMethodContainer.setAttribute('class', 'app-container__input-block');
firstMethodContainer.append(analogCarPriceBox, analogCarInfoDateBox, analogCarInfoSourceBox, analogObjPriceSettingsHeading, analogCarPriceSetting1Box, analogCarPriceSetting2Box, analogCarPriceSetting3Box, analogCarPriceSetting4Box, addMalumotBtn);

// analogCarNameBox, analogCarTypeBox, firstMethodLastBox,

function removeFuncOpt1(e) {
    if (calcTypeEl.value.toLowerCase() == 'eskirish-hisobi'.toLowerCase()) {
        firstMethodContainer.remove();
    }
}
removeFuncOpt1();
calcTypeEl.addEventListener('change', removeFuncOpt1);


// 
// 2-usul
// 


// Turdosh avtotransport vositasining narxi, so'm

const secondMethodBox = document.createElement('div');
secondMethodBox.setAttribute('class', 'app-container__input-option')

const secondMethodLabel = document.createElement('label');
secondMethodLabel.textContent = "Turdosh avtotransport vositasining narxi, so'm";
secondMethodLabel.setAttribute('for', 'Turdosh-transport-narxi');

const secondMethodInput = document.createElement('input');
secondMethodInput.setAttribute('id', 'Turdosh-transport-narxi');
secondMethodInput.setAttribute('name', 'Turdosh-transport-narxi');
secondMethodInput.setAttribute('type', 'number');

secondMethodBox.append(secondMethodLabel, secondMethodInput);


// Qo'shilgan qiymat solig'i stavkasi

const secondMethodBox2 = document.createElement('div');
secondMethodBox2.setAttribute('class', 'app-container__input-option')

const secondMethodLabel2 = document.createElement('label');
secondMethodLabel2.textContent = "Qo'shilgan qiymat solig'i stavkasi";
secondMethodLabel2.setAttribute('for', 'Qushilgan-soliq-stavkasi');

const secondMethodInput2 = document.createElement('input');
secondMethodInput2.setAttribute('id', 'Qushilgan-soliq-stavkasi');
secondMethodInput2.setAttribute('name', 'Qushilgan-soliq-stavkasi');
secondMethodInput2.setAttribute('type', 'number');

secondMethodBox2.append(secondMethodLabel2, secondMethodInput2);


// Foyda solig'i stavkasi 

const secondMethodBox3 = document.createElement('div');
secondMethodBox3.setAttribute('class', 'app-container__input-option')

const secondMethodLabel3 = document.createElement('label');
secondMethodLabel3.textContent = "Foyda solig'i stavkasi ";
secondMethodLabel3.setAttribute('for', 'Fovda-soligi-stavkasi');

const secondMethodInput3 = document.createElement('input');
secondMethodInput3.setAttribute('id', 'Foyda-soligi-stavkasi');
secondMethodInput3.setAttribute('name', 'Foyda-soligi-stavkasi');
secondMethodInput3.setAttribute('type', 'number');

secondMethodBox3.append(secondMethodLabel3, secondMethodInput3);


// Rentabellik ko`rsatkichi

const secondMethodBox4 = document.createElement('div');
secondMethodBox4.setAttribute('class', 'app-container__input-option')

const secondMethodLabel4 = document.createElement('label');
secondMethodLabel4.textContent = "Rentabellik ko`rsatkichi";
secondMethodLabel4.setAttribute('for', 'Rentabellik-ko`rsatkichi');

const secondMethodInput4 = document.createElement('input');
secondMethodInput4.setAttribute('id', 'Rentabellik-ko`rsatkichi');
secondMethodInput4.setAttribute('name', 'Rentabellik-ko`rsatkichi');
secondMethodInput4.setAttribute('type', 'number');

secondMethodBox4.append(secondMethodLabel4, secondMethodInput4);


// Baholanayotgan avtotransport vositasining asosiy tavsif ko'rsatkichi

const secondMethodBox5 = document.createElement('div');
secondMethodBox5.setAttribute('class', 'app-container__input-option')

const secondMethodLabel5 = document.createElement('label');
secondMethodLabel5.textContent = "Baholanayotgan avtotransport vositasining asosiy tavsif ko'rsatkichi";
secondMethodLabel5.setAttribute('for', 'asosiy-tavsif-ko`rsatkichi');

const secondMethodInput5 = document.createElement('input');
secondMethodInput5.setAttribute('id', 'asosiy-tavsif-ko`rsatkichi');
secondMethodInput5.setAttribute('name', 'asosiy-tavsif-ko`rsatkichi');
secondMethodInput5.setAttribute('type', 'number');

secondMethodBox5.append(secondMethodLabel5, secondMethodInput5);


// Turdosh avtotransport vositasining asosiy tavsif ko'rsatkichi

const secondMethodBox6 = document.createElement('div');
secondMethodBox6.setAttribute('class', 'app-container__input-option')

const secondMethodLabel6 = document.createElement('label');
secondMethodLabel6.textContent = "Turdosh avtotransport vositasining asosiy tavsif ko'rsatkichi";
secondMethodLabel6.setAttribute('for', 'turdosh-asosiy-tavsif-ko`rsatkichi');

const secondMethodInput6 = document.createElement('input');
secondMethodInput6.setAttribute('id', 'turdosh-asosiy-tavsif-ko`rsatkichi');
secondMethodInput6.setAttribute('name', 'turdosh-asosiy-tavsif-ko`rsatkichi');
secondMethodInput6.setAttribute('type', 'number');

secondMethodBox6.append(secondMethodLabel6, secondMethodInput6);


// Baholanayotgan avtotransport vositasini ishlab chiqarishning turkumligi koeffitsiyenti

const secondMethodBox7 = document.createElement('div');
secondMethodBox7.setAttribute('class', 'app-container__input-option')

const secondMethodLabel7 = document.createElement('label');
secondMethodLabel7.textContent = "Baholanayotgan avtotransport vositasini ishlab chiqarishning turkumligi koeffitsiyenti";
secondMethodLabel7.setAttribute('for', 'avto-turkumligi-koeffitsiyenti');

const secondMethodInput7 = document.createElement('input');
secondMethodInput7.setAttribute('id', 'avto-turkumligi-koeffitsiyenti');
secondMethodInput7.setAttribute('name', 'avto-turkumligi-koeffitsiyenti');
secondMethodInput7.setAttribute('type', 'number');

secondMethodBox7.append(secondMethodLabel7, secondMethodInput7);


// Turdosh avtotransport vositasini ishlab chiqarishning turkumligi koeffitsiyenti 

const secondMethodBox8 = document.createElement('div');
secondMethodBox8.setAttribute('class', 'app-container__input-option')

const secondMethodLabel8 = document.createElement('label');
secondMethodLabel8.textContent = "Turdosh avtotransport vositasini ishlab chiqarishning turkumligi koeffitsiyenti ";
secondMethodLabel8.setAttribute('for', 'turdosh-avto-turkumligi-koeffitsiyenti');

const secondMethodInput8 = document.createElement('input');
secondMethodInput8.setAttribute('id', 'turdosh-avto-turkumligi-koeffitsiyenti');
secondMethodInput8.setAttribute('name', 'turdosh-avto-turkumligi-koeffitsiyenti');
secondMethodInput8.setAttribute('type', 'number');

secondMethodBox8.append(secondMethodLabel8, secondMethodInput8);




const secondMethodContainer = document.createElement('div');
secondMethodContainer.setAttribute('class', 'app-container__input-block');
secondMethodContainer.append(secondMethodBox, secondMethodBox2, secondMethodBox3, secondMethodBox4, secondMethodBox5, secondMethodBox6, secondMethodBox7, secondMethodBox8);



// 
// 3-usul
// 


// Butlovchi usel va agreganlarining nomi 

const thirdMethodBox = document.createElement('div');
thirdMethodBox.setAttribute('class', 'app-container__input-option')

const thirdMethodLabel = document.createElement('label');
thirdMethodLabel.textContent = "Butlovchi usel va agregatlarining nomi";
thirdMethodLabel.setAttribute('for', 'Butlovchi-usel-agreganlarining nomi');

const thirdMethodInput = document.createElement('input');
thirdMethodInput.setAttribute('id', 'Butlovchi-usel-agreganlarining nomi');
thirdMethodInput.setAttribute('name', 'Butlovchi-usel-agreganlarining nomi');
thirdMethodInput.setAttribute('type', 'text');

thirdMethodBox.append(thirdMethodLabel, thirdMethodInput);


// Butlovchi usel va agreganlarining narxi, so'm

const thirdMethodBox2 = document.createElement('div');
thirdMethodBox2.setAttribute('class', 'app-container__input-option')

const thirdMethodLabel2 = document.createElement('label');
thirdMethodLabel2.textContent = "Butlovchi usel va agregatlarining narxi, so'm";
thirdMethodLabel2.setAttribute('for', 'Butlovchi-usel-agreganlarining nomi');

const thirdMethodInput2 = document.createElement('input');
thirdMethodInput2.setAttribute('id', 'Butlovchi-usel-agreganlarining-narxi');
thirdMethodInput2.setAttribute('name', 'Butlovchi-usel-agreganlarining-narxi');
thirdMethodInput2.setAttribute('type', 'number');

thirdMethodBox2.append(thirdMethodLabel2, thirdMethodInput2);


// Tayyorlovchining o'z xarajatlari, so'm

const thirdMethodBox3 = document.createElement('div');
thirdMethodBox3.setAttribute('class', 'app-container__input-option')

const thirdMethodLabel3 = document.createElement('label');
thirdMethodLabel3.textContent = "Tayyorlovchining o'z xarajatlari, so'm";
thirdMethodLabel3.setAttribute('for', 'Tayyorlovchining-xarajatlari');

const thirdMethodInput3 = document.createElement('input');
thirdMethodInput3.setAttribute('id', 'Tayyorlovchining-xarajatlari');
thirdMethodInput3.setAttribute('name', 'Tayyorlovchining-xarajatlari');
thirdMethodInput3.setAttribute('type', 'number');

thirdMethodBox3.append(thirdMethodLabel3, thirdMethodInput3);


// Foyda solig'i stavkasi

const thirdMethodBox4 = document.createElement('div');
thirdMethodBox4.setAttribute('class', 'app-container__input-option')

const thirdMethodLabel4 = document.createElement('label');
thirdMethodLabel4.textContent = "Foyda solig'i stavkasi";
thirdMethodLabel4.setAttribute('for', 'Foyda-soligi-stavkasi');

const thirdMethodInput4 = document.createElement('input');
thirdMethodInput4.setAttribute('id', 'Foyda-soligi-stavkasi');
thirdMethodInput4.setAttribute('name', 'Foyda-soligi-stavkasi');
thirdMethodInput4.setAttribute('type', 'number');

thirdMethodBox4.append(thirdMethodLabel4, thirdMethodInput4);


// Rentabellik ko'rsatkichi

const thirdMethodBox5 = document.createElement('div');
thirdMethodBox5.setAttribute('class', 'app-container__input-option')

const thirdMethodLabel5 = document.createElement('label');
thirdMethodLabel5.textContent = "Rentabellik ko'rsatkichi";
thirdMethodLabel5.setAttribute('for', 'Rentabellik korsatkichi');

const thirdMethodInput5 = document.createElement('input');
thirdMethodInput5.setAttribute('id', 'Rentabellik korsatkichi');
thirdMethodInput5.setAttribute('name', 'Rentabellik korsatkichi');
thirdMethodInput5.setAttribute('type', 'number');

thirdMethodBox5.append(thirdMethodLabel5, thirdMethodInput5);


const qoshimchaMalumotlar = [];

const addMalumotBtn1 = document.createElement("button");
addMalumotBtn1.setAttribute("class", "add_btn");
addMalumotBtn1.setAttribute("id", "add_btn");
addMalumotBtn1.textContent = `Ma'lumot qo'shish`;

addMalumotBtn1.addEventListener('click', function (e) {

    const addMalumotBlock = document.createElement('div');
    addMalumotBlock.setAttribute('class', 'app-container__input-option')


    const addMalumotNomiLabel = document.createElement('label');
    addMalumotNomiLabel.textContent = `Qoshimcha ma'lumot nomi:`;

    const addMalumotNomi = document.createElement('input');
    addMalumotNomi.setAttribute('type', 'text');


    const addMalumotQiymatiabel = document.createElement('label');
    addMalumotQiymatiabel.textContent = `Qoshimcha ma'lumot qiymati:`;

    const addMalumotQiymati = document.createElement('input');
    addMalumotQiymati.dataset.qiymatNomi = '';
    addMalumotQiymati.setAttribute('id', 'add-malumot-qiymati');
    addMalumotQiymati.setAttribute('name', 'add-malumot-qiymati');
    addMalumotQiymati.setAttribute('type', 'number');

    addMalumotBlock.append(addMalumotNomiLabel, addMalumotNomi, addMalumotQiymatiabel, addMalumotQiymati);
    firstMethodContainer.append(addMalumotBlock)
    addMalumotBtn1.before(addMalumotBlock);
    qoshimchaMalumotlar.push(addMalumotQiymati)
});


const thirdMethodContainer = document.createElement('div');
thirdMethodContainer.setAttribute('class', 'app-container__input-block');
thirdMethodContainer.append(thirdMethodBox, thirdMethodBox2, thirdMethodBox3, thirdMethodBox4, thirdMethodBox5, addMalumotBtn1);


// 
// 4-usul
// 


// Avtotransport vositasining bazaviy qiymati, so'm 

const fourthMethodBox = document.createElement('div');
fourthMethodBox.setAttribute('class', 'app-container__input-option')

const fourthMethodLabel = document.createElement('label');
fourthMethodLabel.textContent = "Avtotransport vositasining bazaviy qiymati, so'm";
fourthMethodLabel.setAttribute('for', 'Avto-bazaviy-qiymati');

const fourthMethodInput = document.createElement('input');
fourthMethodInput.setAttribute('id', 'Avto-bazaviy-qiymati');
fourthMethodInput.setAttribute('name', 'Avto-bazaviy-qiymati');
fourthMethodInput.setAttribute('type', 'number');

fourthMethodBox.append(fourthMethodLabel, fourthMethodInput);


// Narxlarning qimmatlashuvi indekslari 

const fourthMethodBox2 = document.createElement('div');
fourthMethodBox2.setAttribute('class', 'app-container__input-option')

const fourthMethodLabel2 = document.createElement('label');
fourthMethodLabel2.textContent = "Narxlarning qimmatlashuvi indekslari";
fourthMethodLabel2.setAttribute('for', 'Narxlarning-qimmatlashuvi-indekslari ');

const fourthMethodInput2 = document.createElement('input');
fourthMethodInput2.setAttribute('id', 'Narxlarning-qimmatlashuvi-indekslari ');
fourthMethodInput2.setAttribute('name', 'Narxlarning-qimmatlashuvi-indekslari ');
fourthMethodInput2.setAttribute('type', 'number');

fourthMethodBox2.append(fourthMethodLabel2, fourthMethodInput2);


// Qayta baholash indeksi

// const fourthMethodBox3 = document.createElement('div');
// fourthMethodBox3.setAttribute('class', 'app-container__input-option')

// const fourthMethodLabel3 = document.createElement('label');
// fourthMethodLabel3.textContent = "Qayta baholash  koeffitsiyenti:";
// fourthMethodLabel3.setAttribute('for', 'qayta-baholash-koeff');

// const fourthMethodInput3 = document.createElement('input');
// fourthMethodInput3.setAttribute('id', 'qayta-baholash-koeff');
// fourthMethodInput3.setAttribute('name', 'qayta-baholash-koeff');
// fourthMethodInput3.setAttribute('type', 'number');

// fourthMethodBox3.append(fourthMethodLabel3, fourthMethodInput3);


const fourthMethodContainer = document.createElement('div');
fourthMethodContainer.setAttribute('class', 'app-container__input-block');
fourthMethodContainer.append(fourthMethodBox, fourthMethodBox2);






function Method(e) {
    chooseType();
    if (calcMethodSelect.value == '1-usul') {
        inputBlockEL.append(firstMethodContainer);
        secondMethodContainer.remove()
        thirdMethodContainer.remove();
        fourthMethodContainer.remove();
    }
    else if (calcMethodSelect.value == '2-usul') {
        inputBlockEL.append(secondMethodContainer);
        firstMethodContainer.remove();
        thirdMethodContainer.remove();
        fourthMethodContainer.remove();
    }
    else if (calcMethodSelect.value == '3-usul') {
        inputBlockEL.append(thirdMethodContainer);
        firstMethodContainer.remove();
        secondMethodContainer.remove();
        fourthMethodContainer.remove();
    }
    else if (calcMethodSelect.value == '4-usul') {
        inputBlockEL.append(fourthMethodContainer);
        firstMethodContainer.remove();
        secondMethodContainer.remove();
        thirdMethodContainer.remove();
    }
    else {
        firstMethodContainer.remove();
        secondMethodContainer.remove();
        thirdMethodContainer.remove();
        fourthMethodContainer.remove();
    }
}

calcMethodSelect.addEventListener('change', Method);

Method();



/*  ---------  */
/*  Hisoblash  */
/*  ---------  */



const calcBtnEl = document.querySelector('#calc-btn');

calcBtnEl.addEventListener('click', function (e) {
    if (calcTypeEl.value == 'Tiklanish-hisobi') {
        // 1-usul
        if (calcMethodSelect.value == '1-usul') {
            console.log(1);
        }
        // 2-usul
        let cPod = 0;
        let cP = 0;
        let cV = 0;
        if (calcMethodSelect.value == '2-usul') {
            console.log(2);
            cPod = ((1 - Number(secondMethodInput2.value)) * (1 - Number(secondMethodInput3.value)
                - Number(secondMethodInput4.value)) * Number(secondMethodInput.value))
                / ((1 + Number(secondMethodInput2.value)) * (1 - Number(secondMethodInput3.value)));
            cP = cPod * (Number(secondMethodInput5.value) / Number(secondMethodInput6.value)) * (Number(secondMethodInput7.value) / Number(secondMethodInput8.value))
            cV = ((1 - Number(secondMethodInput3.value)) * cP) / 1 - Number(secondMethodInput3.value) - Number(secondMethodInput4.value);
            console.log(cV);
        }
        // 3-usul
        let cP2 = 0;
        let cV2 = 0;
        if (calcMethodSelect.value == '3-usul') {
            console.log(3);
            cP2 = Number(thirdMethodInput2.value) + Number(thirdMethodInput3.value);
            cV2 = ((1 - Number(thirdMethodInput4.value)) * cP2) /
                (1 - Number(thirdMethodInput4.value) - Number(thirdMethodInput5.value));
            console.log(cV2);
        }
        // 4-usul
        let qT = 0;
        if (calcMethodSelect.value == '4-usul') {
            console.log(4);
            qT = Number(fourthMethodInput.value) * Number(fourthMethodInput2.value) * Number(fourthMethodInput3.value);
            console.log(qT);
        }
    }
});

// plain hide 

const plainInputEls1 = document.querySelectorAll('.plain-inputs');

function hidePlain(e) {
    if (calcMethodSelect.value !== 'none') {
        plainInputEls1.forEach(element => {
            element.classList.add('plain-inputs')
        });
    } else {
        plainInputEls1.forEach(element => {
            element.classList.remove('plain-inputs');
        });
    }
}

hidePlain();

calcMethodSelect.addEventListener('change', hidePlain);
