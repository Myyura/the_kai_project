---
sidebar_label: "2020年8月実施 C"
tags:
  - Saitama-University
  - Mathematics.Differential-Equations.Wronskian
---

# 埼玉大学 理工学研究科 数理電子情報系専攻 数学コース 2020年8月実施 C

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%9F%BC%E7%8E%89%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E5%B0%82%E6%94%BB_%E6%95%B0%E5%AD%A6%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/2020%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD.html) refined with GPT 6 Astra)

## **Description**

$P(x),Q(x)$ を既知の連続関数とし、微分方程式

$$
y''(x)+P(x)y'(x)+Q(x)y(x)=0
$$

を考える。$y_1,y_2$ を一次独立な解として、

$$
W[y_1,y_2](x)=\det\begin{pmatrix}y_1(x)&y_1'(x)\\y_2(x)&y_2'(x)\end{pmatrix}
$$

とおく。

(1) $\frac d{dx}W[y_1,y_2](x)=-P(x)W[y_1,y_2](x)$ を示せ。
(2) $y_3,y_4$ を $y_1,y_2$ と異なる一次独立な解としたとき、$W[y_1,y_2](x)$ と $W[y_3,y_4](x)$ の比が $x$ に依らないことを示せ。

### 题目描述

设 $P(x),Q(x)$ 为已知连续函数，考虑微分方程

$$
y''(x)+P(x)y'(x)+Q(x)y(x)=0.
$$

取线性无关的解 $y_1,y_2$，令

$$
W[y_1,y_2](x)=\det\begin{pmatrix}y_1(x)&y_1'(x)\\y_2(x)&y_2'(x)\end{pmatrix}.
$$

(1) 证明 $\dfrac{d}{dx}W[y_1,y_2](x)=-P(x)W[y_1,y_2](x)$。

(2) 取不同于 $y_1,y_2$ 的另一组线性无关解 $y_3,y_4$，证明 $W[y_1,y_2](x)$ 与 $W[y_3,y_4](x)$ 之比与 $x$ 无关。

## **Kai**

### (1)

各解の微分方程式を用いると、

$$
\begin{aligned}
W'&=y_1y_2''-y_1''y_2\\
&=y_1(-Py_2'-Qy_2)-(-Py_1'-Qy_1)y_2\\
&=-P(y_1y_2'-y_1'y_2)=\boxed{-PW}.
\end{aligned}
$$

### (2)

係数が連続な区間 $I$ 上で $x_0\in I$ を固定する。(1) より、どの解対についても

$$
W(x)=W(x_0)\exp\left(-\int_{x_0}^xP(t)\,dt\right).
$$

一次独立な解対の $W(x_0)$ は非零である。もし零なら、ある非自明な線形結合が $x_0$ で値と導関数をともに零とし、初期値問題の一意性によって恒等的に零となり、一次独立性に反する。

したがって、

$$
\boxed{\frac{W[y_1,y_2](x)}{W[y_3,y_4](x)}
=\frac{W[y_1,y_2](x_0)}{W[y_3,y_4](x_0)}}
$$

は $x$ に依らない。

## **Reference**

- [大学公式問題（PDF 9ページ）](https://www.rimath.saitama-u.ac.jp/prob/master/03master.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%9F%BC%E7%8E%89%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%95%B0%E7%90%86%E9%9B%BB%E5%AD%90%E6%83%85%E5%A0%B1%E5%B0%82%E6%94%BB_%E6%95%B0%E5%AD%A6%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/2020%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD.html)
