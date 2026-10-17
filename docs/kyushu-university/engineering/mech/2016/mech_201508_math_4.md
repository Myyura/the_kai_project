---
sidebar_label: "2015年8月実施 問4（数学）"
tags:
  - Kyushu-University
  - Mathematics.Vector-Calculus.Gradient-Divergence-and-Curl
  - Mathematics.Calculus.Double-Integral
---

# 九州大学 工学府 機械系専攻 2015年8月実施 数学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

2次元空間における $x,y$ 方向の単位ベクトルを $\boldsymbol i,\boldsymbol j$ とし、演算子 $\nabla$ を $\nabla=\boldsymbol i\dfrac\partial{\partial x}+\boldsymbol j\dfrac\partial{\partial y}$ と定義する。$R$ を正の実数とし、スカラ関数 $\Phi(r)$、ベクトル関数 $\boldsymbol A(x,y)$、スカラ関数 $\Gamma(x,y)$ をそれぞれ下記のように定義する。

$$
\Phi(r)=\begin{cases}
\dfrac{r^2-R^2}{2R^2}&\text{if }0\le r\le R,\\[5pt]
\ln\left(\dfrac rR\right)&\text{if }r>R,
\end{cases}
$$

$$
\boldsymbol A(x,y)=\nabla\Phi\left(\sqrt{x^2+y^2}\right),
$$

$$
\Gamma(x,y)=\nabla\cdot\boldsymbol A(x,y).
$$

以下の問いに答えよ。（50点）

(1) 関数 $\Phi(r)$ の概形を描け。

(2) 関数 $\boldsymbol A(x,y)$ を求めよ。

(3) 関数 $\Gamma(x,y)$ を求め、その概形を描け。

(4) 領域 $D=\{(x,y)\mid|x|\le2R,\ |y|\le2R\}$ とするとき、$\displaystyle\iint_D\Gamma(x,y)\,dx\,dy$ を求めよ。

#### 题目描述

设二维空间中沿 $x,y$ 方向的单位向量分别为 $\boldsymbol i,\boldsymbol j$，定义算子 $\nabla=\boldsymbol i\dfrac\partial{\partial x}+\boldsymbol j\dfrac\partial{\partial y}$。设 $R$ 为正实数，定义标量函数 $\Phi(r)$、向量函数 $\boldsymbol A(x,y)$ 和标量函数 $\Gamma(x,y)$ 如下。

$$
\Phi(r)=\begin{cases}
\dfrac{r^2-R^2}{2R^2}&0\le r\le R,\\[5pt]
\ln\left(\dfrac rR\right)&r>R,
\end{cases}
$$

$$
\boldsymbol A(x,y)=\nabla\Phi\left(\sqrt{x^2+y^2}\right),
$$

$$
\Gamma(x,y)=\nabla\cdot\boldsymbol A(x,y).
$$

回答以下各问。（50分）

(1) 画出函数 $\Phi(r)$ 的大致图形。

(2) 求函数 $\boldsymbol A(x,y)$。

(3) 求函数 $\Gamma(x,y)$，并画出其大致图形。

(4) 设区域 $D=\{(x,y)\mid|x|\le2R,\ |y|\le2R\}$，求 $\displaystyle\iint_D\Gamma(x,y)\,dx\,dy$。

## **Kai**

### (1)

$\Phi(0)=-1/2$、$\Phi(R)=0$。$r<R$ では下に凸の放物線、$r>R$ では単調増加する対数曲線であり、$r=R$ で値と1階導関数が連続する。

![解答図 1（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math_4_answer_layout_1.svg)

![解答図 2（既存図の局部表示）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math_4_answer_layout_2.svg)

### (2)

$r=\sqrt{x^2+y^2}$ とすると

$$
\boxed{\boldsymbol A(x,y)=
\begin{cases}
\dfrac{x\boldsymbol i+y\boldsymbol j}{R^2}&r\le R,\\[4pt]
\dfrac{x\boldsymbol i+y\boldsymbol j}{x^2+y^2}&r>R.
\end{cases}}
$$

両式は $r=R$ で一致し、原点では $\boldsymbol A=0$。

### (3)

円周 $r=R$ を除いて微分すると

$$
\boxed{\Gamma(x,y)=\begin{cases}2/R^2&r<R,\\0&r>R.\end{cases}}
$$

内側では一定、外側では零である。上図右は半径方向の断面を示す。$r=R$ では2階微分が一致しないため、古典的な散度は定義できない。この円周での値をどう定めても面積積分は変わらない。また $\boldsymbol A$ は連続なので境界にデルタ関数状の項は生じない。

### (4)

$D$ は半径 $R$ の円板をすべて含むから

$$
\boxed{\iint_D\Gamma\,dx\,dy=\frac2{R^2}\cdot\pi R^2=2\pi}.
$$
