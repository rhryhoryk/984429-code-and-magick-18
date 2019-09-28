'use strict';

(function () {
  // var ENTER_BUTTON = 13;
  // var ESC_BUTTON = 27;

  window.general = {
    ENTER_BUTTON: 13,
    ESC_BUTTON: 27,
    NUMBER_OF_SIMILAR_WIZARDS: 4,
    SIMILAR_WIZARD_FIRST_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SIMILAR_WIZARD_LAST_NAMES: ['да Мария', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Тополицка', 'Нионго', 'Ирвинг'],
    WIZARD_COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARD_EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    WIZARD_FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    whatButtonAction: function (evt, button, action) {
      if (evt.keyCode === button) {
        action();
      }
    },
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };

})();
