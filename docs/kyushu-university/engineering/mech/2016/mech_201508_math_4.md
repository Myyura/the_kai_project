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

2次元空間における $x,y$ 方向の単位ベクトルを $\boldsymbol i,\boldsymbol j$ とし、演算子 $\nabla=\boldsymbol i\partial/\partial x+\boldsymbol j\partial/\partial y$ を定義する。$R$ を正の実数とし、スカラ関数 $\Phi(r)$、ベクトル関数 $\boldsymbol A(x,y)$、スカラ関数 $\Gamma(x,y)$ をそれぞれ下記のように定義する。

$$
\Phi(r)=\begin{cases}\dfrac{r^2-R^2}{2R^2}&0\le r\le R,\\[3pt]\log(r/R)&r>R,\end{cases}
\qquad \boldsymbol A=\nabla\Phi(\sqrt{x^2+y^2}),\qquad
\Gamma=\nabla\cdot\boldsymbol A.
$$

以下の問いに答えよ。（50点）

1. 関数 $\Phi(r)$ の概形を描け。
2. 関数 $\boldsymbol A(x,y)$ を求めよ。
3. 関数 $\Gamma(x,y)$ を求め、その概形を描け。
4. 領域 $D=\{(x,y)\mid |x|\le2R,\ |y|\le2R\}$ とするとき、$\iint_D\Gamma(x,y)\,dx\,dy$ を求めよ。

#### 题目描述

对分段径向势函数求梯度和散度，画势函数与散度的形状，并求正方形区域上的散度积分。

## **Kai**

### (1)

$\Phi(0)=-1/2$、$\Phi(R)=0$。$r<R$ では下に凸の放物線、$r>R$ では単調増加する対数曲線であり、$r=R$ で値と1階導関数が連続する。

![勢関数と散度の動径方向の概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2016/mech_201508_math-4-radial.svg)

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
