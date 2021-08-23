# 轱辘 - 一个 Vue UI 组件
[![Build Status](https://travis-ci.com/codingories/myGulu-demo-1.svg?branch=master)](https://travis-ci.com/codingories/myGulu-demo-1)
![ci](https://github.com/codingories/myGulu-demo-1/actions/workflows/ci.yml/badge.svg)

## 介绍
本框架主要用以学习如何造轮子。

## 开始使用
1. 添加 CSS 样式
    使用本框架前，请在CSS中开启border-box
    ```css
    *,*::before,*::after { box-sizing: border-box; }
    ```
    你还需要设置默认颜色等变量(后续会改 SCSS 变量)
    ```css
        :root {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
    ```
    IE 15 及以上浏览器都支持此样式

2. 安装 gulu
    ```
    npm i -S mygulu-demo-test-1-1
    ```
3. 引入 gulu
    ``` 
    import {Button, ButtonGroup, Icon} from 'mygulu-demo-test-1-1'
    import 'mygulu-demo-test-1-1/dist/index.css'
    
    
    export default {
      name: 'App',
      components: {
        HelloWorld,
        'g-button': Button,
        "g-icon": Icon
      }
    }
    ```
   


## 文档
## 提问
## 变更记录
## 练习

## 贡献代码
## 安装

