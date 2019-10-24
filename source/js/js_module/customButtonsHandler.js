const userButtonsList = document.querySelector('.top-bar__user-buttons-list');

function emptyUserListAnimation(userButton) {
  userButton.classList.add('top-bar__user-button-animation');
  setTimeout(() => {
    userButton.classList.remove('top-bar__user-button-animation');
  }, 205);
}

function findUserButton(userButtonClasses, userButton, returnElem) {
  for (let value of userButtonClasses) {
    if (userButton.closest('.' + value)) {
      if (returnElem) {
        return userButton.closest('.' + value);
      }
      return true;
    }
  }
  return false;
}

function isAnotherUserListClosed(userButtonClasses, userButton) {
  let anotherUserButton;
  for (let value of userButtonClasses) {
    if (!userButton.classList.contains(value)) {
      anotherUserButton = '.' + value;
      break;
    }
  }
  let userCollectionContainer = document.querySelector(anotherUserButton).nextElementSibling;
  if (userCollectionContainer.classList.contains('user-collection--display')) {
    userCollectionContainer.classList.remove('user-collection--display');
  }
}

function userButtonsHandler(e) {
  e.preventDefault();
  const userButtonClasses = ['top-bar__user-buttons-link--favorites', 'top-bar__user-buttons-link--basket'];
  if (findUserButton(userButtonClasses, e.target)) {
    let userButton = findUserButton(userButtonClasses, e.target, true);
    if (userButton.lastElementChild.textContent === '0') {
      emptyUserListAnimation(userButton);
    } else {
      let userList = userButton.parentNode.querySelector('.user-collection');
      isAnotherUserListClosed(userButtonClasses, userButton);
      userList.classList.toggle('user-collection--display');
    }
  }
}

export const customButtonsHandler = {
  userButtonsListSelector: userButtonsList,
  userButtonsHandler: userButtonsHandler,
}
