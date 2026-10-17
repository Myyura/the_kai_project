---
sidebar_label: "2017年8月実施 数学B 第3問"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Chain-Rule
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 数学B 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

3. 関数 $u(x,y)$ は偏微分方程式

$$
\frac{\partial^2u}{\partial x\partial y}-\frac{\partial^2u}{\partial y^2}=e^{x+3y}
$$

を満足する。2つの異なる実数 $s,t$ を用いて，$\xi=x+sy,\ \eta=x+ty$ なる座標変換を考える。以下の問いに答えよ。

**(1)** $\dfrac{\partial^2u}{\partial x^2},\ \dfrac{\partial^2u}{\partial y^2},\ \dfrac{\partial^2u}{\partial x\partial y}$ をそれぞれ $u,\xi,\eta$ を用いて表せ。

**(2)** 関数 $u$ が満足する $\xi$ と $\eta$ に関する偏微分方程式を求めよ。

**(3)** 問(2)の結果において，$s=0,t=1$ として，一般解 $u(x,y)$ を求めよ。

#### 题目描述

3. 函数 $u(x,y)$ 满足偏微分方程

$$
\frac{\partial^2u}{\partial x\partial y}-\frac{\partial^2u}{\partial y^2}=e^{x+3y}.
$$

利用两个不同的实数 $s,t$，考虑坐标变换 $\xi=x+sy,\ \eta=x+ty$。回答下列问题。

**(1)** 分别用 $u,\xi,\eta$ 表示 $\dfrac{\partial^2u}{\partial x^2},\ \dfrac{\partial^2u}{\partial y^2},\ \dfrac{\partial^2u}{\partial x\partial y}$。

**(2)** 求函数 $u$ 所满足的关于 $\xi,\eta$ 的偏微分方程。

**(3)** 在第(2)问的结果中取 $s=0,t=1$，求通解 $u(x,y)$。

## **Kai**

### (1)

連鎖律より $\partial_x=\partial_\xi+\partial_\eta$、$\partial_y=s\partial_\xi+t\partial_\eta$。係数が定数なので

$$
\boxed{u_{xx}=u_{\xi\xi}+2u_{\xi\eta}+u_{\eta\eta}},
$$

$$
\boxed{u_{yy}=s^2u_{\xi\xi}+2st\,u_{\xi\eta}+t^2u_{\eta\eta}},
$$

$$
\boxed{u_{xy}=s\,u_{\xi\xi}+(s+t)u_{\xi\eta}+t\,u_{\eta\eta}}.
$$

### (2)

$s\ne t$ より

$$
y=\frac{\xi-\eta}{s-t},\qquad x=\frac{s\eta-t\xi}{s-t}.
$$

従って

$$
\boxed{\begin{aligned}&s(1-s)u_{\xi\xi}+(s+t-2st)u_{\xi\eta}+t(1-t)u_{\eta\eta}\\
&=\exp\left(\frac{(3-t)\xi+(s-3)\eta}{s-t}\right)
\end{aligned}}.
$$

### (3)

$\xi=x,\eta=x+y$ となり、方程式は $u_{\xi\eta}=e^{-2\xi+3\eta}$。順に積分して

$$
u=-\frac16e^{-2\xi+3\eta}+\varphi(\xi)+\psi(\eta).
$$

元の変数に戻すと

$$
\boxed{u(x,y)=-\frac16e^{x+3y}+\varphi(x)+\psi(x+y)}.
$$

$\varphi,\psi$ は任意の $C^2$ 級関数。特解に対して $u_{xy}-u_{yy}=e^{x+3y}$、残りの二項に対しては差がゼロとなる。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 9ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
