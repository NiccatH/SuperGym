const tabsButtons = document.querySelectorAll('[data-tab-name]');
const tabsContents = document.querySelectorAll('[data-tab-content]');

const selectTabContent = (data) => {
  tabsContents.forEach((elem) => {
    if (elem.dataset.tabContent === data) {
      elem.setAttribute('data-active', '');
    } else {
      elem.removeAttribute('data-active');
    }
  });
};

const onTabsButtonClick = (evt) => {
  let tabName = '';
  tabsButtons.forEach((elem) => {
    elem.classList.remove('tabs__nav-item--is-active');
  });
  evt.target.classList.add('tabs__nav-item--is-active');
  tabName = evt.target.dataset.tabName;
  selectTabContent(tabName);
};

const initTabs = () => {
  tabsButtons.forEach((elem) => {
    elem.addEventListener('click', onTabsButtonClick);
  });
};

export {initTabs};
