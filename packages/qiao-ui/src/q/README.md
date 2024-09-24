## qiao-ui

[![npm version](https://img.shields.io/npm/v/qiao-ui.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ui)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ui.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ui)

简洁小巧的 react ui 框架

## 官网

[https://qiao-ui.vincentqiao.com/#/](https://qiao-ui.vincentqiao.com/#/)

## install

安装

```shell
npm i qiao-ui
```

## use

使用

```javascript
// cjs
const { QInput } = require('qiao-ui');

// mjs
import { QInput } from 'qiao-ui';
```

## color

color集合

### 引入

```javascript
  '@color': path.resolve(__dirname, '../../../../node_modules/qiao-ui/src/q'),
```

### 使用

```scss
@use '@color/color.scss';
```

## components

### QInput

输入框

```scss
$inputHeight: 40px;
$inputMarginBottom: 10px;
$inputPadding: 10px;
$inputWidth: calc(100% - (2 * $inputPadding));
$inputColor: color.$color11;
$inputSize: 14px;
$inputAlign: left;
$inputPlaceholderColor: color.$acolor03;

.QInput {
  height: $inputHeight;
  margin-bottom: $inputMarginBottom;

  input {
    width: $inputWidth;
    height: $inputHeight;
    padding: 0 $inputPadding;

    color: $inputColor;
    font-size: $inputSize;
    text-align: $inputAlign;
    line-height: $inputHeight;
  }
  input::placeholder {
    color: $inputPlaceholderColor;
  }
}
```

### QModal

遮罩

```scss
$modalTop: 206px;
$modalWidth: 680px;
$modalRadius: 8px;
$modalBg: color.$acolor01;
$modalContentBg: color.$color05;
$modalCloseTopRight: 15px;
$modalCloseWidthHeight: 24px;
$modalCloseBg: url('@styles/assets/icons/ic-close.svg');
$modalCloseHoverBg: url('@styles/assets/icons/ic-close-hover.svg');
.QModal {
  background-color: $modalBg;

  .modal {
    top: $modalTop;
    width: $modalWidth;
    border-radius: $modalRadius;
    background-color: $modalContentBg;
  }

  .modal-close {
    top: $modalCloseTopRight;
    right: $modalCloseTopRight;
    width: $modalCloseWidthHeight;
    height: $modalCloseWidthHeight;
    background-image: $modalCloseBg;
  }
  .modal-close:hover {
    background-image: $modalCloseHoverBg;
  }
}
```

### QRadio

横向单选

```scss
$radioInputWidthHeight: 13px;
$radioInputMargin: 13px;
$radioLabelPadding: 10px;
$radioLabelColor: color.$color11;
$radioLabelFontSize: 16px;
$radioLabelLineHeight: $ckHeight;
> .QRadio {
  input {
    width: $radioInputWidthHeight;
    height: $radioInputWidthHeight;
    margin: $radioInputMargin 0;
  }
  span {
    padding: 0 $radioLabelPadding;
    color: $radioLabelColor;
    font-size: $radioLabelFontSize;
    line-height: $radioLabelLineHeight;
  }
}
```
