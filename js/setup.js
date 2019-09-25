'use strict';

var ESC_BUTTON = 27;
var ENTER_BUTTON = 13;
var setupWindow = document.querySelector('.setup');
var avatarIcon = document.querySelector('.setup-open');
var closeSetupWindowButton = setupWindow.querySelector('.setup-close');
var setupUserNameInput = setupWindow.querySelector('.setup-user-name');

var onSetupWindowEscPress = function (evt) {
  if (evt.keyCode === ESC_BUTTON) {
    closeSetupWindow();
  }
};

var openSetupWindow = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onSetupWindowEscPress);
};
var closeSetupWindow = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onSetupWindowEscPress);
};

avatarIcon.addEventListener('click', function () {
  openSetupWindow();
});
avatarIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    openSetupWindow();
  }
});

closeSetupWindowButton.addEventListener('click', function () {
  closeSetupWindow();
});
closeSetupWindowButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    closeSetupWindow();
  }
});

setupUserNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

document.querySelector('.setup-similar').classList.remove('hidden');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Мария', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Тополицка', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var NUMBER_OF_WIZARDS = 4;

var wizardCoat = setupWindow.querySelector('.wizard-coat');
var wizardCoatInput = setupWindow.querySelector('input[name=coat-color]');
var wizardEyes = setupWindow.querySelector('.wizard-eyes');
var wizardEyesInput = setupWindow.querySelector('input[name=eyes-color]');
var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');
var WizardFireballInput = wizardFireball.querySelector('input[name=fireball-color]');

var generateRandomFill = function (arr) {
  return getRandomElement(arr);
};

var setNewFillColor = function (obj, input, arr) {
  var newColor = generateRandomFill(arr);
  obj.style.fill = newColor;
  input.value = newColor;
};

var setNewBackgroundColor = function (obj, input, arr) {
  var newColor = generateRandomFill(arr);
  obj.style.background = newColor;
  input.value = newColor;
};

wizardCoat.addEventListener('click', function () {
  setNewFillColor(wizardCoat, wizardCoatInput, WIZARD_COAT_COLORS);
});
wizardCoat.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    setNewFillColor(wizardCoat, wizardCoatInput, WIZARD_COAT_COLORS);
  }
});

wizardEyes.addEventListener('click', function () {
  setNewFillColor(wizardEyes, wizardEyesInput, WIZARD_EYES_COLORS);
});
wizardEyes.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    setNewFillColor(wizardEyes, wizardEyesInput, WIZARD_EYES_COLORS);
  }
});

wizardFireball.addEventListener('click', function () {
  setNewBackgroundColor(wizardFireball, WizardFireballInput, WIZARD_FIREBALL_COLORS);
});
wizardFireball.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_BUTTON) {
    setNewBackgroundColor(wizardFireball, WizardFireballInput, WIZARD_FIREBALL_COLORS);
  }
});

var setupSimilarList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (firstName, LastName, coatColor, eyesColor) {
  return {
    name: firstName + ' ' + LastName,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
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

