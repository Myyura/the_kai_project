---
sidebar_label: "2015年度 問題2（数学）"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Boundary-Value-Problem
---

# 大阪大学 工学研究科 機械工学専攻 2015年度 数学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下の問いに答えなさい。

1. 関数 $\log(x+\sqrt{x^2+1})$ を $x$ で微分しなさい。
2. $xy$ 平面上の曲線 $y=y(x)$ を考える。この曲線の接線と $x$ 軸の正の向きとのなす角を $\theta$ とし、反時計回りを正として $-\pi/2<\theta<\pi/2$ とする。$\theta$ が次の微分方程式 (A) を満たすとき、これを $y$ と $x$ に関する微分方程式に書き換えなさい。ただし、$a$ は正の定数とする。

   $$
   \frac1{\cos\theta}\frac{d\theta}{dx}=a.\tag{A}
   $$

3. $z=dy/dx$ とおいて、(2) で得られた微分方程式を $z$ と $x$ に関する微分方程式に書き換え、その一般解を求めなさい。必要であれば (1) の結果を用いてよい。
4. $y(1)=y(-1)=0$ を満たす曲線を求め、その概形を描きなさい。

#### 题目描述

1. 求 $\log(x+\sqrt{x^2+1})$ 对 $x$ 的导数。
2. 平面曲线 $y=y(x)$ 的切线与 $x$ 轴正向的夹角为 $\theta$，逆时针方向为正，且 $-\pi/2<\theta<\pi/2$。已知 $\sec\theta\,d\theta/dx=a$，其中 $a>0$，将其改写为关于 $y,x$ 的微分方程。
3. 令 $z=dy/dx$，求所得关于 $z,x$ 的微分方程的通解，可使用第 (1) 问结果。
4. 求满足 $y(1)=y(-1)=0$ 的曲线，并画出其概形。

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

![境界条件を満たす懸垂線の概形（a=1）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/osaka-university/engineering/mech/2015/mech_201408_math_2-solution-fig1.svg)
