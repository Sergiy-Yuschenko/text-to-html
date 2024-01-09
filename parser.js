let scatteredDataArray = []; //Масив для розпарсених данних
let htmlContainer = null; //контейнер для зберігання тексту вдягнутого в html код
let paragraphTextContainer = null; //контейнер для проміжного зберігання тексту абзаца
let tagMarking; //контейнер для зберігання поточного типу тега
let attributesLine; //контейнер для зберігання поточного рядка атрибутів тега
let stepLength = 1; //довжина кроку циклу розпарсювання

/*Контейнер для зберігання введеного тексту*/
//Знаходимо елемент текстової області для вводу тексту з теговими підказками
const textareaInputEl = document.querySelector('.js-textarea-input');
let dataСontainer = null; //контейнер для зберігання текстових даних введених з поля вводу
textareaInputEl.addEventListener('input', copyTextFromTextarea); //Чіпляємо слухач елемент текстової області для вводу тексту з теговими підказками
//Функція для додавання данних з текстового поля для вводу в змінну dataContainer
function copyTextFromTextarea(element) { 
    dataСontainer = element.target.value;
}
/*Контейнер для зберігання атрибутів <p>*/ 
//Знаходимо елемент input для вводу тексту атрибутів тегу <p>
let tagP = null; //контейнер для зберігання даних рядка атрибутів туга <p>
const inputP = document.querySelector('#tag-p-base'); //Знаходимо елемент  input для вводу тексту атрибутів тегу <p>
inputP.addEventListener('input', copyTextFromP); //Чіпляємо слухач на елемент input для заповнення інформації по тегу 
function copyTextFromP (element) {
    tagP = element.target.value;
}
/*Контейнер для зберігання атрибутів <p1>*/ 
let tagP1 = null; 
const inputP1 = document.querySelector('#tag-p-first');
inputP1.addEventListener('input', copyTextFromP1);
function copyTextFromP1 (element) {
    tagP1 = element.target.value;
}
/*Контейнер для зберігання атрибутів <p2>*/ 
let tagP2 = null;
const inputP2 = document.querySelector('#tag-p-second');
inputP2.addEventListener('input', copyTextFromP2);
function copyTextFromP2 (element) {
    tagP2 = element.target.value;
}
/*Контейнер для зберігання атрибутів <p3>*/ 
let tagP3 = null;
const inputP3 = document.querySelector('#tag-p-third');
inputP3.addEventListener('input', copyTextFromP3);
function copyTextFromP3 (element) {
    tagP3 = element.target.value;
}
/*Контейнер для зберігання атрибутів <p4>*/ 
let tagP4 = null;
const inputP4 = document.querySelector('#tag-p-fourth');
inputP4.addEventListener('input', copyTextFromP4);
function copyTextFromP4 (element) {
    tagP4 = element.target.value;
}
/*Контейнер для зберігання атрибутів <p5>*/ 
let tagP5 = null;
const inputP5 = document.querySelector('#tag-p-fifth');
inputP5.addEventListener('input', copyTextFromP5);
function copyTextFromP5 (element) {
    tagP5 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h1>*/ 
let tagH1 = null;
const inputH1 = document.querySelector('#tag-h-first');
inputH1.addEventListener('input', copyTextFromH1);
function copyTextFromH1 (element) {
    tagH1 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h2>*/ 
let tagH2 = null;
const inputH2 = document.querySelector('#tag-h-second');
inputH2.addEventListener('input', copyTextFromH2);
function copyTextFromH2 (element) {
    tagH2 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h3>*/ 
let tagH3 = null;
const inputH3 = document.querySelector('#tag-h-third');
inputH3.addEventListener('input', copyTextFromH3);
function copyTextFromH3 (element) {
    tagH3 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h4>*/ 
let tagH4 = null;
const inputH4 = document.querySelector('#tag-h-fourth');
inputH4.addEventListener('input', copyTextFromH4);
function copyTextFromH4 (element) {
    tagH4 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h5>*/ 
let tagH5 = null;
const inputH5 = document.querySelector('#tag-h-fifth');
inputH5.addEventListener('input', copyTextFromH5);
function copyTextFromH5 (element) {
    tagH5 = element.target.value;
}
/*Контейнер для зберігання атрибутів <h6>*/ 
let tagH6 = null;
const inputH6 = document.querySelector('#tag-h-sixth');
inputH6.addEventListener('input', copyTextFromH6);
function copyTextFromH6 (element) {
    tagH6 = element.target.value;
}


//Знаходимо елемент кнопки генерації
const buttonEl = document.querySelector('.js-button-start');
//Чіпляємо слухач на кнопку генерації
buttonEl.addEventListener('click', startGenerate);//Розпарсити введений текст та згенерувати html код

const buttonCopyEl = document.querySelector('.js-button-copy'); //Знаходимо елемент кнопки копіювання
buttonCopyEl.disabled = 'true';//Додаємо атрибут "disabled" до кнопки копіювання



//Знаходимо елемент для виводу тексту вдягнутого в html
const textareaOutputEl = document.querySelector('.js-textarea-output');

//Чіпляємо слухач на  текстову область вводу тексту з часовими мітками


//Функція для визначення типу тега 10 - якщо формат тега <p> перехід на новий рядок але без тега (аналог <p>), 11 - якщо формат <p1>, 12 - якщо формат  <p2>, 13 - якщо формат  <p3>, 14 - якщо формат  <p4>, 15 - якщо формат  <p5>
function tagTypeDetermination(i) {
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 62) {
                tagMarking ='p';
                attributesLine = tagP; //якщо формат <p>
                stepLength = 3;
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 49) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='p';
                    attributesLine = tagP1; //якщо формат <p1>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 50) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='p';
                    attributesLine = tagP2; //якщо формат <p2>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 51) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='p';
                    attributesLine = tagP3; //якщо формат <p3>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 52) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='p';
                    attributesLine = tagP4; //якщо формат <p4>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 112 || dataСontainer.charCodeAt(i + 1) === 80) {
            if (dataСontainer.charCodeAt(i + 2) === 53) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='p';
                    attributesLine = tagP5; //якщо формат <p5>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 49) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h1';
                    attributesLine = tagH1; //якщо формат <h1>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 50) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h2';
                    attributesLine = tagH2; //якщо формат <h2>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 51) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h3';
                    attributesLine = tagH3; //якщо формат <h3>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 52) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h4';
                    attributesLine = tagH4; //якщо формат <h4>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 53) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h5';
                    attributesLine = tagH5; //якщо формат <h5>
                    stepLength = 4;
                }
            }
        }
    }
    if (dataСontainer.charCodeAt(i) === 60) {
        if (dataСontainer.charCodeAt(i + 1) === 104 || dataСontainer.charCodeAt(i + 1) === 72) {
            if (dataСontainer.charCodeAt(i + 2) === 54) {
                if (dataСontainer.charCodeAt(i + 3) === 62) {
                    tagMarking ='h6';
                    attributesLine = tagH6; //якщо формат <h6>
                    stepLength = 4;
                }
            }
        }
    }
    else {
        tagMarking ='p';
        attributesLine = tagP;
        stepLength = 1;
    }
}

//Фунція для розпарсювання введеного тексту в структуровані дані, які поміщуються в масив об'єктів
function parseEnteredText() {
    if (dataСontainer === null) { //якщо форма пуста - завершити функцію без результату
        return;
    }
    const lastSymbNumb = dataСontainer.length - 1; //визначення номеру останнього символу в рядку введеного тексту
    let parseOn = false; //вмикач розпарсювання
    let copyTextOn = false; //вмикач зчитування текстової інформації
    scatteredDataArray = []; //Очищуємо масив для розпарсених данних
    for (let i = 0; i <= lastSymbNumb; i += stepLength) { //цикл, в процесі якого проходить посимвольний аналіз даних та їх розпарсювання
        if (stepLength !== 1) { //повернення довжини кроку до одиниці
            stepLength = 1;
        }
        // Блок для додавання тексту у контейнер для проміжного зберігання тексту абзацу
        if (parseOn === true && copyTextOn === true) { //Якщо процес розпарсювання увімкнуто і процес копіювання тексту - теж       
            if (dataСontainer.charCodeAt(i) !== 10 && paragraphTextContainer !== null) { //Якщо поточний символ контейнера не є переносом на інший рядок і контейнер для проміжного зберігання тексту абзацу не порожній
                paragraphTextContainer = paragraphTextContainer + dataСontainer[i]; //додаваємо поточний символ у контейнер для проміжного зберігання тексту абзацу, приплюсовуючи до попередніх
            }
            if (dataСontainer.charCodeAt(i) !== 10 && paragraphTextContainer === null && dataСontainer.charCodeAt(i) !== 32 && dataСontainer.charCodeAt(i) !== 160) { //Якщо поточний символ контейнера не є переносом на інший рядок чи пробілом, а контейнер для проміжного зберігання тексту абзацу порожній
                paragraphTextContainer = dataСontainer[i]; //поміщуємо поточний символ у контейнер для проміжного зберігання тексту абзацу
            }
            if (dataСontainer.charCodeAt(i) === 10) { // Якщо поточний символ контейнера є переносом           
                parseOn = false; //Вимикаємо процес розпарсюваня
            }
        }
        if (copyTextOn === true && parseOn === false || paragraphTextContainer && i === lastSymbNumb) { //Якщо процес копіювання тексту ввімкнутий, а процес розпарсювання - вимкнутий або якщо поточний символ є останнім в контейнері для зберігання текстових даних введених з поля вводу          
            paragraphTextContainer = normalizeСurrentTextContainerData(paragraphTextContainer); //Нормалізуємо вміст контейнеру для проміжного зберігання тексту абзаца (видалення множинних пробілів)
            сreatingArrayWithData(tagMarking, attributesLine, paragraphTextContainer); //значення тега, атрибутів та текст абзаца додаємо в масив за допомогою функції для додавання даних в масив
            tagMarking = null; // очищуємо контейнер для поточного зберігання значення тега
            attributesLine = null; // очищуємо контейнер для поточного зберігання атрибуту тега
            paragraphTextContainer = null; // очищуємо контейнер для проміжного зберігання тексту абзаца
            copyTextOn = false; //Вимикаємо процес копіювання тексту
        }
        if (parseOn === false && dataСontainer.charCodeAt(i) !== 32 && dataСontainer.charCodeAt(i) !== 160 && dataСontainer.charCodeAt(i) !== 10) { //Якщо процес розпарсювання вимкнено, поточний символ відмінний від пробілу чи переходу на новий рядок       
            tagTypeDetermination(i);//Визначаємо тип часової мітки
            if (stepLength === 1) { //Якщо крок рівний одиниці (тобто ніякого вказівного тегу на початку абзацу немає)
                if (paragraphTextContainer !== null) { //Якщо контейнер для проміжного зберігання тексту абзацу не порожній
                    paragraphTextContainer = paragraphTextContainer + dataСontainer[i]; //додаваємо поточний символ у контейнер для проміжного зберігання тексту абзацу, приплюсовуючи до попередніх
                }
                if (paragraphTextContainer === null) { //Якщо контейнер для проміжного зберігання тексту абзацу порожній
                    paragraphTextContainer = dataСontainer[i]; //поміщуємо поточний символ у контейнер для проміжного зберігання тексту абзацу
                }
            }
            copyTextOn = true; //Увімкнути процес копіювання тексту 
            parseOn = true; //вмикаємо процес розпарсювання
        }
    }
}

//Функція для додавання розпарсеного тексту та даних по текстових html тегах в масив
function сreatingArrayWithData(t, a, pt) { 
     scatteredDataArray.push({tagMarking: t, attributesLine: a, paragraphText: pt,});
}

//Функція для нормалізації вмісту контейнеру для проміжного зберігання тексту абзаца (видалення дубльованих пробілів)
function normalizeСurrentTextContainerData(textсontainer) {
    let copyTextOn = false; //вмикач зчитування текстової інформації
    let invertedTextContainer = []; //Контейнер для додавання очищеного тексту в інвертованому вигляді

    for (let i = textсontainer.length - 1; i >= 0; i -= 1) { //Цикл для перебору вмісту контейнеру для проміжного зберігання
        // тексту сабзаца в інвертованому(перевернутому) вигляді. Цикл перебирає рядок символів зі зворотнього боку
        //увімкнення процесу зчитування коли починаються символи відмінні від пробілів
        if (!copyTextOn) { //Якщо вмикач зчитування текстової інформації вимкнено
            if (textсontainer.charCodeAt(i) !== 32 && textсontainer.charCodeAt(i) !== 160 /*&& textсontainer.charCodeAt(i) !== 10*/) { //і при цьому поточний символ відмінний від пробілу
                copyTextOn = true; // вмикаємо вмикач зчитування текстової інформації
            }
        }
        // вимкнення процесу зчитування символів якщо підряд йде декілька таких символів
        if (copyTextOn && textсontainer.charCodeAt(i) === 32 || copyTextOn && textсontainer.charCodeAt(i) === 160 /*|| copyTextOn && textсontainer.charCodeAt(i) === 10*/) { //Якщо процес зчитування ввімкнено та поточний символ це пробіл або перенос на інший рядок
            if (textсontainer.charCodeAt(i - 1) === 32 || textсontainer.charCodeAt(i - 1) === 160 /*|| textсontainer.charCodeAt(i - 1) === 10*/) { // і наступний символ це теж пробіл або перенос на інший рядок
                copyTextOn = false; //вимикаємо вмикач зчитування текстової інформації
                invertedTextContainer.push(' '); //в контейнер для додавання очищеного тексту в інфертованому вигляді пушимо один символ пробілу
            }
        }
        //зчитування символів
        if (copyTextOn) { //якщо вмикач зчитування текстової інформації увімкнено
            invertedTextContainer.push(textсontainer[i]); //пушимо поточний символ з контейнеру для проміжного зберігання тексту абзаца (внутрішній контейнер цієї функції) в Контейнер для додавання очищеного тексту в інфертованому вигляді
        }
    }

    textсontainer = null; //обнуляємо контейнер для проміжного зберігання тексту абзаца
    textсontainer = invertedTextContainer[invertedTextContainer.length - 1]; //в контейнер для проміжного зберігання тексту абзацу додаємо останнє значення масиву контейнеру для додавання очищеного тексту в інвертованому вигляді

    for (let i = invertedTextContainer.length - 2; i >= 0; i -= 1) { //Цикл для перебору вмісту контейнеру для додавання очищеного тексту в інфертованому вигляді,
        // та покроковому додавання елементів масиву в контейнер для проміжного зберігання тексту, починаючи з передостаннього елементу масиву і закінчуючи першим (в результаті очищений від зайвих пробілів та переносів інвертований
        // текст повторно інвертується та приводиться до нормального вигляду)
        textсontainer = textсontainer + invertedTextContainer[i]; //до контейнеру для проміжного зберігання тексту додаємо поточний символ з контейнеру для додавання очищеного тексту в інвертованому вигляді
    }
    return textсontainer; //функція повертає вміст контейнера для проміжного зберігання тексту
}


/*Функція для генерації тексту загорнутого в HTML*/

function generateHTML() {
    htmlContainer = null; //Обнуляємо контейнер для зберігання тексту вдягнутого в html код
    scatteredDataArray.forEach(({tagMarking, attributesLine, paragraphText}, index) => { //Цикл перебору масиву для розпарсених данних, та генерації текстової структури одягнутої в html теги
        //блок для покрокового конструювання фрагментів структури SRT файлу з даних масиву для розпарсених данних та об'єднання їх в єдиний рядок символів
        if (attributesLine === null) {//У випадку коли поле для рядка з атрибутами порожнє
            if (index === 0) { //конструюємо перший абзац одягнутий в html та додаємо  в контейнер для зберігання тексту вдягнутого в html код
                htmlContainer = `<${tagMarking}>${paragraphText}</${tagMarking}>${String.fromCharCode(10)}`;
            } else {//конструюємо наступний абзац одягнутий в html та додаємо до наступних в контейнері для зберігання тексту вдягнутого в html код
                htmlContainer = htmlContainer + `<${tagMarking}>${paragraphText}</${tagMarking}>${String.fromCharCode(10)}`;
            }
        }
        if (attributesLine !== null) {//У випадку коли поле для рядка з атрибутами заповнене
            if (index === 0) { //конструюємо перший абзац одягнутий в html та додаємо  в контейнер для зберігання тексту вдягнутого в html код
                htmlContainer = `<${tagMarking} ${attributesLine}>${paragraphText}</${tagMarking}>${String.fromCharCode(10)}`;
            } else {//конструюємо наступний абзац одягнутий в html та додаємо до наступних в контейнері для зберігання тексту вдягнутого в html код
                htmlContainer = htmlContainer + `<${tagMarking} ${attributesLine}>${paragraphText}</${tagMarking}>${String.fromCharCode(10)}`;
            }
        }
    });
}


//Функція для виконання генерації, яка запускається при натисканні на кнопку та виконує функції розпарсювання та генерації html
function startGenerate() {
    parseEnteredText(); // виконуємо фунцію для розпарсювання введеного тексту
    generateHTML();
    textareaOutputEl.textContent = htmlContainer; //отриманий текст одягнутий в html теги додаємо в поле для виводу інформації
    buttonCopyEl.textContent = 'Copy'; //міняємо текстовий контент кнопки копіювання на "копіювати" 
}
    


if (buttonCopyEl.disabled) { //якщо в елемента кнопки копіювання додано атрибут "disabled"
    buttonCopyEl.removeAttribute('disabled'); //видаляємо його
}

/*-------Додавання в буфер обміну----------*/

buttonCopyEl.addEventListener('click', () => {navigator.clipboard.writeText(htmlContainer) //Чіпляємо слухач на кнопку копіювання, який виконує функцію копіювання тексту одягнутого в html в буфер обміну
  .then(() => {
      buttonCopyEl.textContent = 'готово'; //Якщо операція успішна то міняємо текстовий контент кнопки копіювання з "копіювати" на "готово"
  })
  .catch(err => {
    console.log('copy error', err); //якщо копіювання не вдалося то виводимо текст повідомлення про помилку в консоль
  });
});
  





