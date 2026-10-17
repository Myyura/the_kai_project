---
sidebar_label: "2014年8月実施 問題2（数学）"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Boundary-Value-Problem
---

# 大阪大学 工学研究科 機械工学専攻 2014年8月実施 数学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

問題2（解答用紙：白）

以下の問いに答えなさい。

(1) 実数 $x$ を変数とする関数 $\log(x+\sqrt{x^2+1})$ の導関数を求めなさい。

(2) $xy$ 平面内のある曲線 $y=y(x)$ 上の任意の点において、その点における接線と $x$ 軸の正の方向のなす角 $\theta$ が、次の微分方程式 (A) を満たすとする。

$$
\frac{1}{\cos\theta}\frac{d\theta}{dx}=a \tag{A}
$$

ただし、$\theta$ は反時計回りを正の方向とし、$-\pi/2<\theta<\pi/2$ とする。また、$a$ は正の定数である。微分方程式 (A) を、変数 $x$ に関する $y$ の微分方程式に変換しなさい。

(3) 小問 (2) で求めた微分方程式において、$z=dy/dx$ と置き換えて得られる $z$ の微分方程式の一般解を求めなさい。小問 (1) の結果を用いてもよい。

(4) $x=\pm1$ で $y=0$ であるとき、小問 (2) の曲線の方程式を求めなさい。また、この曲線の概形を図示しなさい。

#### 题目描述

问题2（使用白色答题纸）

回答下列问题。

(1) 求实变量 $x$ 的函数 $\log(x+\sqrt{x^2+1})$ 的导数。

(2) 在 $xy$ 平面内某曲线 $y=y(x)$ 的任意一点，该点切线与 $x$ 轴正方向的夹角 $\theta$ 满足微分方程 (A)：

$$
\frac{1}{\cos\theta}\frac{d\theta}{dx}=a. \tag{A}
$$

角度 $\theta$ 以逆时针为正，$-\pi/2<\theta<\pi/2$，$a$ 为正常数。将 (A) 转化为以 $x$ 为自变量、$y$ 为未知函数的微分方程。

(3) 在 (2) 所得微分方程中令 $z=dy/dx$，求得到的关于 $z$ 的微分方程的通解。可以使用 (1) 的结果。

(4) 当 $x=\pm1$ 时均有 $y=0$，求 (2) 中曲线的方程，并画出曲线的示意图。

## **Kai**

### (1)

$$
\frac{d}{dx}\log\left(x+\sqrt{x^2+1}\right)
=\frac{1+x/\sqrt{x^2+1}}{x+\sqrt{x^2+1}}
=\boxed{\frac1{\sqrt{x^2+1}}}.
$$

### (2)

$y'=\tan\theta$ より $y''=\sec^2\theta\,\theta'$ である。また、指定された範囲では $\cos\theta>0$ なので

$$
\sec\theta=\sqrt{1+(y')^2}.
$$

したがって (A) は

$$
\boxed{\frac{y''}{\sqrt{1+(y')^2}}=a}
$$

となる。

### (3)

$z=y'$ とおくと

$$
\frac{z'}{\sqrt{1+z^2}}=a.
$$

(1) の結果を用いて積分すれば

$$
\log\left(z+\sqrt{z^2+1}\right)=ax+C.
$$

左辺は $\operatorname{arsinh}z$ であるから、一般解は

$$
\boxed{z=\sinh(ax+C)}\qquad(C\in\mathbb R).
$$

### (4)

(3) を積分すると

$$
y=\frac1a\cosh(ax+C)+D.
$$

二つの境界条件の差を取ると

$$
\cosh(a+C)-\cosh(C-a)=2\sinh C\sinh a=0.
$$

$a>0$ より $\sinh a>0$ であるため $C=0$、さらに $D=-\cosh a/a$ となる。よって

$$
\boxed{y(x)=\frac{\cosh(ax)-\cosh a}{a}}.
$$

曲線は $y$ 軸に関して対称であり、$(-1,0)$、$(1,0)$ を通る。また

$$
y'(x)=\sinh(ax),\qquad y''(x)=a\cosh(ax)>0
$$

なので下に凸で、唯一の最小点は

$$
\left(0,\frac{1-\cosh a}{a}\right)
$$

である。以下に $a=1$ の場合の概形を示す。任意の $a>0$ で上記の対称性、零点、凸性は共通である。

![境界条件を満たす懸垂線の概形（a=1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/osaka-university/engineering/mech/2015/mech_201408_math_2-solution-fig1.svg)
