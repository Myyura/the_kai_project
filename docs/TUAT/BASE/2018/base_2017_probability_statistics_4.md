---
sidebar_label: "2017年度実施 4 確率及び統計"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Basics.Covariance
---

# 東京農工大学 生物システム応用科学府 2017年度実施 4 確率及び統計

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2017%E5%B9%B4%E5%AE%9F%E6%96%BD.html) refined with GPT 6 Astra)

## **Description**

(1) 連続確率変数 $X$ の密度が

$$
f(x)=\begin{cases}ae^{-x/2}&(x>0),\\0&(x\le0)\end{cases}
$$

で与えられる。(i) 確率密度となる定数 $a$ を求めよ。(ii) $X$ の平均と分散を求めよ。

(2) 二つの連続確率変数 $X,Y$ の同時確率密度が

$$
f(x,y)=\begin{cases}\dfrac1{47}(x+y)(x+2)&(0\le x\le2,\ 0\le y\le3),\\0&\text{それ以外}\end{cases}
$$

であるとき、$X,Y$ の共分散を求めよ。

#### 题目描述

1. 连续随机变量 $X$ 的密度在 $x>0$ 时为 $ae^{-x/2}$，其他处为0。求归一化常数 $a$，再求均值与方差。
2. $X,Y$ 的联合密度在矩形 $0\le x\le2,0\le y\le3$ 上为 $(x+y)(x+2)/47$，其他处为0。求协方差。

## **Kai**

### (1)

(i) 規格化条件から、$1=\int_0^\infty ae^{-x/2}\,dx=2a$。よって $\boxed{a=1/2}$。

(ii) 部分積分を用いると、

$$
E[X]=\frac12\int_0^\infty xe^{-x/2}\,dx=2,\qquad
E[X^2]=\frac12\int_0^\infty x^2e^{-x/2}\,dx=8.
$$

したがって $\boxed{E[X]=2,\quad\operatorname{Var}(X)=8-2^2=4}$。

### (2)

まず $\int_0^2\int_0^3(x+y)(x+2)\,dy\,dx=47$ で、密度は正しく規格化されている。各モーメントは

$$
\begin{aligned}
E[X]&=\frac1{47}\int_0^2\int_0^3x(x+y)(x+2)\,dy\,dx=\frac{58}{47},\\
E[Y]&=\frac1{47}\int_0^2\int_0^3y(x+y)(x+2)\,dy\,dx=\frac{84}{47},\\
E[XY]&=\frac1{47}\int_0^2\int_0^3xy(x+y)(x+2)\,dy\,dx=\frac{102}{47}.
\end{aligned}
$$

よって

$$
\boxed{\operatorname{Cov}(X,Y)=\frac{102}{47}-\frac{58\cdot84}{47^2}=-\frac{78}{2209}}.
$$

## **Reference**

- [大学公式問題（5ページ（公式PDFの保存版））](https://web.archive.org/web/20210101id_/https://www.tuat.ac.jp/documents/base/jp/examination/2017-1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2017%E5%B9%B4%E5%AE%9F%E6%96%BD.html)
