---
sidebar_label: "2017年8月実施 4 確率及び統計"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Exponential-Distribution
  - Probability-Statistics.Probability-Basics.Covariance
---

# 東京農工大学 生物システム応用科学府 2017年8月実施 4 確率及び統計

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E7%94%9F%E7%89%A9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%BF%9C%E7%94%A8%E7%A7%91%E5%AD%A6%E5%BA%9C/2017%E5%B9%B4%E5%AE%9F%E6%96%BD.html) refined with GPT 6 Astra)

## **Description**

(1) 連続確率変数 $X$ の確率密度関数 $f(x)$ が以下の式で与えられている。

$$
f(x)=\begin{cases}ae^{-x/2}&(x>0),\\0&(x\leq0).\end{cases}
$$

このとき，

(i) $f(x)$ が確率密度関数となるような定数 $a$ を求めよ。

(ii) $X$ の平均と分散を求めよ。

(2) $X$ と $Y$ を二つの連続確率変数とする。$X$ と $Y$ の同時確率密度関数 $f(x,y)$ が，

$$
f(x,y)=\begin{cases}\dfrac{1}{47}(x+y)(x+2)&(0\leq x\leq2,\ 0\leq y\leq3),\\0&\text{（その他の範囲）}\end{cases}
$$

で与えられているとき，$X$ と $Y$ の共分散を求めよ。

#### 题目描述

(1) 连续随机变量 $X$ 的概率密度函数 $f(x)$ 如下：

$$
f(x)=\begin{cases}ae^{-x/2}&(x>0),\\0&(x\leq0).\end{cases}
$$

此时，

(i) 求使 $f(x)$ 成为概率密度函数的常数 $a$。

(ii) 求 $X$ 的均值和方差。

(2) 设 $X$、$Y$ 为两个连续随机变量，其联合概率密度函数为

$$
f(x,y)=\begin{cases}\dfrac{1}{47}(x+y)(x+2)&(0\leq x\leq2,\ 0\leq y\leq3),\\0&\text{（其他范围）}.\end{cases}
$$

求 $X$ 与 $Y$ 的协方差。

## **Kai**

### (1)

(i) 規格化条件から、$1=\int_0^\infty ae^{-x/2}\,dx=2a$。よって $\boxed{a=1/2}$。

(ii) 部分積分を用いると、

$$
\begin{gathered}
E[X]=\frac12\int_0^\infty xe^{-x/2}\,dx=2,\\
E[X^2]=\frac12\int_0^\infty x^2e^{-x/2}\,dx=8.
\end{gathered}
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
