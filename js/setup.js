'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Мария', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Тополицка', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;

var setupSimilarList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (firstName, LastName, coatColor, eyesColor) {
  return {
    name: firstName + ' ' + LastName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
};

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createSimilarWizards = function () {
  var similarWizardsArr = [];
  for (var i = 1; i <= NUMBER_OF_WIZARDS; i++) {
    var wizard = createWizard(getRandomElement(WIZARD_FIRST_NAMES), getRandomElement(WIZARD_LAST_NAMES), getRandomElement(WIZARD_COAT_COLORS), getRandomElement(WIZARD_EYES_COLORS));
    similarWizardsArr.push(wizard);
  }
  return similarWizardsArr;
};

var similarWizards = createSimilarWizards();

for (var i = 0; i < similarWizards.length; i++) {
  var similarWizard = wizardTemplate.cloneNode(true);
  similarWizard.querySelector('.setup-similar-label').textContent = similarWizards[i].name;
  similarWizard.querySelector('.wizard-coat').style.fill = similarWizards[i].coatColor;
  similarWizard.querySelector('.wizard-eyes').style.fill = similarWizards[i].eyesColor;
  setupSimilarList.appendChild(similarWizard);
}

