import _ from 'lodash';
import './style.css';

export function createDropDownMenu() {
  const dashboard = document.getElementById('dashboard');
  const dropDownMenu = document.querySelector('.dropdown-menu');
  const dropDownMenuItems = dropDownMenu.querySelectorAll('.menu-item');

  dashboard.addEventListener('click', () => {
    dropDownMenu.classList.toggle('show-menu');

    setTimeout(() => {
      dropDownMenu.classList.toggle('trigger2');
    }, 100);
  });

  window.addEventListener('click', (e) => {
    if (e.target.id !== dashboard.id) {
      dropDownMenu.classList.remove('show-menu');
      dropDownMenu.classList.remove('trigger2');
    }
  });

  dropDownMenuItems.forEach((item) => {
    const dropDownSubMenu = item.querySelector('.dropdown-submenu');
    item.addEventListener('mouseover', () => {
      dropDownSubMenu.classList.add('show-submenu');
    });

    item.addEventListener('mouseout', () => {
      dropDownSubMenu.classList.remove('show-submenu');
    });
  });
}
