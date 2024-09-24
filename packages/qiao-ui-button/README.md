## qiao-ui-button

[![npm version](https://img.shields.io/npm/v/qiao-ui-button.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ui-button)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ui-button.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ui-button)

[https://qiao-ui.vincentqiao.com/#/](https://qiao-ui.vincentqiao.com/#/)-button

## install

安装

```shell
npm i qiao-ui-button
```

## use

使用

```javascript
// cjs
const { QButton } = require('qiao-ui-button');

// mjs
import { QButton } from 'qiao-ui-button';
```

## scss

样式

```scss
// normal
.parent-div {
  $btnPadding: 0px;
  $btnBorder: 0px;
  $btnWidth: calc(100% - (2 * $btnBorder) - (2 * $btnPadding));
  $btnHeight: calc(100% - (2 * $btnBorder));
  $btnRadius: 5px;
  $fontSize: 16px;
  $lineHeight: 38px;
  $textAlign: center;
  .QButton {
    width: $btnWidth;
    height: $btnHeight;
    padding: 0 $btnPadding;
    border-radius: $btnRadius;
    background: color.$lcolor01;

    .ctx {
      color: color.$color03;
      font-size: $fontSize;
      line-height: $lineHeight;
      text-align: $textAlign;
    }
  }
}

// icon
.parent-div {
  $btnPadding: 8px;
  $btnBorder: 1px;
  $btnWidth: calc(100% - (2 * $btnBorder) - (2 * $btnPadding));
  $btnHeight: calc(100% - (2 * $btnBorder));
  $btnRadius: 5px;
  $fontSize: 16px;
  $lineHeight: 38px;
  $textAlign: left;
  .QButton {
    width: $btnWidth;
    height: $btnHeight;
    padding: 0 $btnPadding;
    border: $btnBorder solid color.$color04;
    border-radius: $btnRadius;

    $iconWidthHeight: 18px;
    $iconMargin: 6px;
    $iconCtxWidth: calc(100% - $iconWidthHeight - (2 * $iconMargin));
    .icon {
      width: $iconWidthHeight;
      height: $iconWidthHeight;
      margin: 0 $iconMargin;
      margin-top: 12px;

      img {
        width: $iconWidthHeight;
        height: $iconWidthHeight;
      }
    }
    .icon-ctx {
      width: $iconCtxWidth;
      height: 100%;
      color: color.$color04;
      font-size: $fontSize;
      line-height: $lineHeight;
      text-align: $textAlign;
      background: color.$acolor04;
    }
  }
  .QButton:hover {
    background: color.$color05;
  }
}
```
