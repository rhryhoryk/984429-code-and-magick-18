'use strict';

(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createSimilarWizard = function (firstName, LastName, coatColor, eyesColor) {
    return {
      name: firstName + ' ' + LastName,
      coatColor: coatColor,
      eyesColor: eyesColor
    };
  };

  var createSimilarWizards = function () {
    var similarWizardsArr = [];
    for (var i = 1; i <= window.general.NUMBER_OF_WIZARDS; i++) {
      var wizard = createSimilarWizard(window.general.getRandomElement(window.general.WIZARD_FIRST_NAMES), window.general.getRandomElement(window.general.WIZARD_LAST_NAMES), window.general.getRandomElement(window.general.WIZARD_COAT_COLORS), window.general.getRandomElement(window.general.WIZARD_EYES_COLORS));
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
})();
