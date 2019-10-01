'use strict';

(function () {
  var avatarIcon = document.querySelector('.setup-open');
  var dialogWindow = document.querySelector('.setup');
  var uploadAvatar = dialogWindow.querySelector('.upload');
  var dialogUserNameInput = dialogWindow.querySelector('.setup-user-name');
  var closeDialogWindowButton = dialogWindow.querySelector('.setup-close');


  var wizardCoat = dialogWindow.querySelector('.wizard-coat');
  var wizardCoatInput = dialogWindow.querySelector('input[name=coat-color]');
  var wizardEyes = dialogWindow.querySelector('.wizard-eyes');
  var wizardEyesInput = dialogWindow.querySelector('input[name=eyes-color]');
  var wizardFireball = dialogWindow.querySelector('.setup-fireball-wrap');
  var WizardFireballInput = wizardFireball.querySelector('input[name=fireball-color]');

  // --------------------------------------------------------------open-close(dialogWindow)--------------------------------------------------
  var onSetupWindowEscPress = function (evt) {
    window.general.whatButtonAction(evt, window.general.ESC_BUTTON, closeSetupWindow);
  };
  var openSetupWindow = function () {
    dialogWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSetupWindowEscPress);
  };
  var closeSetupWindow = function () {
    dialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSetupWindowEscPress);
    dialogWindow.style.top = 80 + 'px';
    dialogWindow.style.left = 50 + '%';
  };

  avatarIcon.addEventListener('click', function () {
    openSetupWindow();
  });
  avatarIcon.addEventListener('keydown', function (evt) {
    window.general.whatButtonAction(evt, window.general.ENTER_BUTTON, openSetupWindow);
  });

  closeDialogWindowButton.addEventListener('click', function () {
    closeSetupWindow();
  });
  closeDialogWindowButton.addEventListener('keydown', function (evt) {
    window.general.whatButtonAction(evt, window.general.ENTER_BUTTON, closeSetupWindow);
  });

  dialogUserNameInput.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });
  // __________________________________________________________________________________________________________________________________________

  // --------------------------------------------------------------------wizardChanges---------------------------------------------------------
  var setNewColor = function (obj, input, colorArr) {
    var newColor = window.general.getRandomElement(colorArr);
    input.value = newColor;
    if (obj.tagName.toLowerCase() === 'div') {
      obj.style.background = newColor;
    } else {
      obj.style.fill = newColor;
    }
  };

  wizardCoat.addEventListener('click', function () {
    setNewColor(wizardCoat, wizardCoatInput, window.general.WIZARD_COAT_COLORS);
  });
  wizardCoat.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.general.ENTER_BUTTON) {
      setNewColor(wizardCoat, wizardCoatInput, window.general.WIZARD_COAT_COLORS);
    }
  });

  wizardEyes.addEventListener('click', function () {
    setNewColor(wizardEyes, wizardEyesInput, window.general.WIZARD_EYES_COLORS);
  });
  wizardEyes.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.general.ENTER_BUTTON) {
      setNewColor(wizardEyes, wizardEyesInput, window.general.WIZARD_EYES_COLORS);
    }
  });

  wizardFireball.addEventListener('click', function () {
    setNewColor(wizardFireball, WizardFireballInput, window.general.WIZARD_FIREBALL_COLORS);
  });
  wizardFireball.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.general.ENTER_BUTTON) {
      setNewColor(wizardFireball, WizardFireballInput, window.general.WIZARD_FIREBALL_COLORS);
    }
  });
  // _____________________________________________________________________________________________________________________________________________

  // ------------------------------------------------------------------draggable------------------------------------------------------------------
  uploadAvatar.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var clientCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var distance = {
        x: clientCoordinates.x - moveEvt.clientX,
        y: clientCoordinates.y - moveEvt.clientY
      };

      clientCoordinates = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      dialogWindow.style.left = (dialogWindow.offsetLeft - distance.x) + 'px';
      dialogWindow.style.top = (dialogWindow.offsetTop - distance.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          uploadAvatar.removeEventListener('click', onClickPreventDefault);
        };
        uploadAvatar.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
