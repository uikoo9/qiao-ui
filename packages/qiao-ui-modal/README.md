## qiao-ui-modal

[![npm version](https://img.shields.io/npm/v/qiao-ui-modal.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ui-modal)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ui-modal.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ui-modal)

[https://qiao-ui.vincentqiao.com/#/](https://qiao-ui.vincentqiao.com/#/)-modal

## install

安装

```shell
npm i qiao-ui-modal
```

## use

使用

```javascript
// cjs
const { QModal } = require('qiao-ui-modal');

// mjs
import { QModal } from 'qiao-ui-modal';
```

## scss

样式

```scss
$modalTop: 206px;
$modalWidth: 680px;
$modalContentBg: color.$color05;
$modalCloseTopRight: 15px;
.QModal {
  .modal {
    top: $modalTop;
    width: $modalWidth;
    background-color: $modalContentBg;
  }

  .modal-close {
    top: $modalCloseTopRight;
    right: $modalCloseTopRight;
  }
}
```
