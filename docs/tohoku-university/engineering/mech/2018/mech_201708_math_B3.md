---
sidebar_label: "2017年秋季 数学B 第3問"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Chain-Rule
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 数学B 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

$u(x,y)$ は $u_{xy}-u_{yy}=e^{x+3y}$ を満たす。相異なる実数 $s,t$ を用い、$\xi=x+sy,\eta=x+ty$ と変換する。

1. $u_{xx},u_{yy},u_{xy}$ を新しい変数の偏導関数で表せ。
2. $\xi,\eta$ に関する偏微分方程式を求めよ。
3. $s=0,t=1$ とし、一般解 $u(x,y)$ を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

函数 $u$ 满足 $u_{xy}-u_{yy}=e^{x+3y}$。取不同实数 $s,t$，定义 $\xi=x+sy,\eta=x+ty$。（1）将三个二阶偏导 $u_{xx},u_{yy},u_{xy}$ 用新坐标偏导表示。（2）求变换后的偏微分方程。（3）取 $s=0,t=1$，求通解。

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
\boxed{s(1-s)u_{\xi\xi}+(s+t-2st)u_{\xi\eta}+t(1-t)u_{\eta\eta}
=\exp\left(\frac{(3-t)\xi+(s-3)\eta}{s-t}\right)}.
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
