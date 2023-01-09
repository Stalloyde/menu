Practice package;

Download this package by running `npm install stalloyde-menu` in your project's parent directory.
Then import the function in your JS file using `import {createDropDownMenu} from 'stalloyde-menu';

Download this svg icon:
![menu hamburger icon](src/images/menu_FILL0_wght400_GRAD0_opsz48.svg)

Input this into your html:
<div class="title">
  <div id="dashboard">
    <img src="<%=require('[path to menu hamburger icon]')%>"
      height="50" width="50" />
  </div>
  <div class="dropdown-menu">
    <li class="menu-item">item 1
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
    <li class="menu-item">item 2
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
    <li class="menu-item">item 3
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
    <li class="menu-item">item 4
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
    <li class="menu-item">item 5
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
    <li class="menu-item">item 6
      <ul class="dropdown-submenu">
        <li>subitem1</li>
        <li>subitem2</li>
        <li>subitem3</li>
        <li>subitem4</li>
      </ul>
    </li>
  </div>