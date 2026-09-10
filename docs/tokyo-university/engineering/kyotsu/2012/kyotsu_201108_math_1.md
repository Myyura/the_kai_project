---
sidebar_label: '2011年8月実施 数学 第1問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Riccati-Equation
  - Mathematics.Calculus.Calculus-of-Variations
---

# 東京大学 工学系研究科 2011年8月実施 数学 第1問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 微分方程式 $y'+(2x^2+1)y+y^2+x^4+x^2+2x=0$ の一般解を求めよ。$y=-x^2$ が特解であることを用いてよい。

II. $y$ を二階まで連続微分可能とし、$I(y)=\int_{x_1}^{x_2}F(x,y,y')\,dx$ とする。

1. 任意の微分可能な関数 $\eta$ に対し $Y=y+k\eta$（$|k|\ll1$）とおく。$\delta I=I(Y)-I(y)$ を $k$ の一次まで展開せよ。
2. 両端で $y(x_1)=y_1,y(x_2)=y_2$ が固定されているとき、極値を与える必要条件を求めよ。
3. 始点で $y(x_1)=y_1$ のみが与えられ、終点の値が自由な場合の必要条件を求めよ。
4. $F=y^2+(y')^2,x_1=0,x_2=1,y(0)=1$、終点自由の場合に極値を与える関数を求めよ。

#### 题目描述

I. 求 $y'+(2x^2+1)y+y^2+x^4+x^2+2x=0$ 的通解。可利用特解 $y=-x^2$。

II. 设 $y$ 二阶连续可微，$I(y)=\int_{x_1}^{x_2}F(x,y,y')\,dx$。

1. 对可微函数 $\eta$，令 $Y=y+k\eta$，$|k|\ll1$。将 $\delta I=I(Y)-I(y)$ 展开到 $k$ 的一阶。
2. 两端固定 $y(x_1)=y_1,y(x_2)=y_2$ 时，写出取得极值的必要条件。
3. 只有左端固定 $y(x_1)=y_1$、右端函数值自由时，写出极值的必要条件。
4. 若 $F=y^2+(y')^2,x_1=0,x_2=1,y(0)=1$，右端自由，求使 $I$ 取极值的函数。

## **Kai**

### I

$y=-x^2+u$ とおくと、原方程式は $u'+u+u^2=0$ となる。
$u\ne0$ のとき $v=1/u$ とおけば $v'-v=1$ なので、

$$
\boxed{y=-x^2+\frac1{Ce^x-1}}.
$$

代換で除かれた解 $\boxed{y=-x^2}$ も加える。式は分母が零でない区間で考える。$C=0$ は $y=-x^2-1$ を与える。

### II

#### 1–2

$F$ を後二変数について展開し、部分積分すると、

$$
\delta I=k\int_{x_1}^{x_2}(F_y\eta+F_{y'}\eta')\,dx+o(k)
=k[F_{y'}\eta]_{x_1}^{x_2}
+k\int_{x_1}^{x_2}\left(F_y-\frac d{dx}F_{y'}\right)\eta\,dx+o(k).
$$

両端固定では $\eta(x_1)=\eta(x_2)=0$ である。変分の基本補題より、必要条件は

$$
\boxed{F_y-\frac d{dx}F_{y'}=0,\quad y(x_1)=y_1,\quad y(x_2)=y_2}.
$$

#### 3

$\eta(x_1)=0$、$\eta(x_2)$ は任意なので、Euler–Lagrange 方程式に加えて自然境界条件

$$
\boxed{F_{y'}(x_2,y(x_2),y'(x_2))=0}.
$$

#### 4

方程式と境界条件は $y''=y,y(0)=1,y'(1)=0$ であり、これを解くと、

$$
\boxed{y(x)=\frac{\cosh(1-x)}{\cosh1}}.
$$

零でない変分 $\eta(0)=0$ に対する二次増分は $\int_0^1(\eta^2+(\eta')^2)dx>0$ なので、これは唯一の最小化関数である。
