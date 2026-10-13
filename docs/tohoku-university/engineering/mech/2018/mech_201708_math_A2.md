---
sidebar_label: "2017年秋季 数学A 第2問"
tags:
  - Tohoku-University
  - Mathematics.Differential-Equations.Homogeneous-First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Systems-of-ODEs
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 数学A 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

### (1)

次の常微分方程式の一般解を求めよ。

a) $(x^2-y^2)\,dy/dx=2xy$

b) $d^2y/dx^2-2\,dy/dx+y=e^{-x}\cos2x+2x$

### (2)

次の連立微分方程式の一般解を求めよ。

$$
\frac{dy}{dx}-2\frac{dz}{dx}+3z=0,\qquad
\frac{dy}{dx}-4y-3z=0.
$$

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

（1）求 a) $(x^2-y^2)y'=2xy$；b) $y''-2y'+y=e^{-x}\cos2x+2x$ 的通解。（2）求联立方程 $y'-2z'+3z=0$、$y'-4y-3z=0$ 的通解。

## **Kai**

### (1)

#### a)

$y\ne0$ の区間で元の式を微分形式にし、$y^2$ で割ると

$$
\frac{2x}{y}\,dx+\left(1-\frac{x^2}{y^2}\right)dy
=d\left(\frac{x^2}{y}+y\right)=0.
$$

従って

$$
\boxed{x^2+y^2=Cy}.
$$

これは解曲線の表示で、$y(x)$ として微分可能な枝を取る。割り算で除外した $\boxed{y=0}$ も元の方程式を満たす。

#### b)

特性方程式は $(\lambda-1)^2=0$ だから、斉次解は $(C_1+C_2x)e^x$。
$2x$ に対する特解を $ax+b$ と置くと $a=2,b=4$。
$e^{-x}\cos2x$ に対して $e^{-x}(A\cos2x+B\sin2x)$ を代入すると $A=0,B=-1/8$。従って

$$
\boxed{y=(C_1+C_2x)e^x-\frac18e^{-x}\sin2x+2x+4}.
$$

### (2)

第2式を第1式に代入して

$$
\frac d{dx}\begin{pmatrix}y\\z\end{pmatrix}
=\begin{pmatrix}4&3\\2&3\end{pmatrix}\begin{pmatrix}y\\z\end{pmatrix}.
$$

係数行列の固有値は $1,6$、対応する固有ベクトルは $(1,-1)^T,(3,2)^T$。従って

$$
\boxed{y=C_1e^x+3C_2e^{6x},\qquad z=-C_1e^x+2C_2e^{6x}}.
$$

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 3ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
