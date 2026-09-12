---
sidebar_label: "2021年度 サンプル問題 2"
tags:
  - Tokyo-University
  - Mathematics.Linear-Algebra.Least-Squares-and-Minimum-Norm-Solutions
  - Mathematics.Vector-Calculus.Plane-and-Distance-in-Three-Dimensional-Euclidean-Space
  - Mathematics.Linear-Algebra.Quadratic-Form
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
---

# 東京大学 新領域創成科学研究科 複雑理工学専攻 2021年度 サンプル問題 2

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

以下の問に答えよ。定数、変数、関数はすべて実数とする。

### 問1

$xy$ 平面上の直線 $\ell:y=ax+b$ を考える。

(i) 点 $(0,q)$ と $\ell$ との距離が $2/\sqrt{a^2+1}$ であった。このときの $q$ を求めよ。

(ii) $\ell$ を3点 $(1,0),(0,-1),(2,p)$ に対する最小二乗法による近似直線とする。$a,b$ を $p$ を用いて表せ。

(iii) (ii) の近似直線が $p$ によらず通過する点を求めよ。

### 問2

以下の逆行列を持つ行列 $A$ と、直交座標空間上のベクトル $a,x$ を考える。

$$
A=\begin{pmatrix}1&0&1\\3&1&0\\0&2&1\end{pmatrix},\quad
A^{-1}=\frac17\begin{pmatrix}1&2&-1\\-3&1&3\\6&-2&1\end{pmatrix},\quad
a=\begin{pmatrix}1\\1\\1\end{pmatrix},\quad x=\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$


$a^{\mathsf T}x=1$ を満たす点全体の集合を平面 $S$ とする。$\mathsf T$ は転置を表す。

(i) 線形写像 $f(x)=Ax$ による $S$ の像を $S'=\{x'=Ax:x\in S\}$ とする。$S'$ を $b^{\mathsf T}x'=1$ と記述するとき、$b=(b_1,b_2,b_3)^{\mathsf T}$ を求めよ。

(ii) 原点から $S'$ への垂線の足の座標を求めよ。

(iii) $c>0$ とし、楕円体 $T=\{x:x^{\mathsf T}A^{\mathsf T}Ax=c\}$ が $S$ に接するときの $c$ を求めよ。

### 問3

$f(y)=1-y^2/4$ とする。

(i) $1/f(y)=A/(1+y/2)+B/(1-y/2)$（$y\ne\pm2$）と部分分数分解したときの $A,B$ を求めよ。

(ii) 微分方程式 $dy/dx=f(y)$ の一般解を求めよ。任意定数として $C$ を用いること。

#### 题目描述

以下常数、变量、函数均为实数。

1. 考虑平面直线 $\ell:y=ax+b$。
   - 点 $(0,q)$ 到直线的距离为 $2/\sqrt{a^2+1}$，求 $q$。
   - 直线是三点 $(1,0),(0,-1),(2,p)$ 的最小二乘拟合直线，用 $p$ 表示 $a,b$。
   - 求该拟合直线无论 $p$ 取何值都经过的点。
2. 给定

$$
A=\begin{pmatrix}1&0&1\\3&1&0\\0&2&1\end{pmatrix},\quad
A^{-1}=\frac17\begin{pmatrix}1&2&-1\\-3&1&3\\6&-2&1\end{pmatrix},\quad
a=(1,1,1)^{\mathsf T},\quad x=(x_1,x_2,x_3)^{\mathsf T}.
$$


设平面 $S=\{x:a^{\mathsf T}x=1\}$，$\mathsf T$ 表示转置。
   - 求 $S$ 在线性映射 $x'=Ax$ 下的像 $S'$ 的方程 $b^{\mathsf T}x'=1$ 中的 $b$。
   - 求原点到 $S'$ 的垂足。
   - 对 $c>0$，求椭球面 $x^{\mathsf T}A^{\mathsf T}Ax=c$ 与 $S$ 相切时的 $c$。
3. 令 $f(y)=1-y^2/4$。
   - 求分解 $1/f(y)=A/(1+y/2)+B/(1-y/2)$（$y\ne\pm2$）的系数。
   - 解 $dy/dx=f(y)$，用 $C$ 表示任意常数。

## **Kai**

### 問1

(i) $|b-q|/\sqrt{a^2+1}=2/\sqrt{a^2+1}$ より $\boxed{q=b\pm2}$。

(ii) 残差平方和 $E=(a+b)^2+(b+1)^2+(2a+b-p)^2$ の停留条件は

$$
5a+3b=2p,\qquad3a+3b=p-1.
$$


よって $\boxed{a=(p+1)/2,\ b=-(p+5)/6}$。係数行列は正定値なのでこれが最小値を与える。

(iii) $6y=p(3x-1)+3x-5$ より、$\boxed{(x,y)=(1/3,-2/3)}$。

### 問2

(i) $a^{\mathsf T}A^{-1}x'=1$ であるから、

$$
\boxed{b=(A^{-1})^{\mathsf T}a=\frac17(4,1,3)^{\mathsf T}.}
$$


(ii) 垂線の足は $b/\|b\|^2$ なので、

$$
\boxed{\left(\frac{14}{13},\frac7{26},\frac{21}{26}\right).}
$$


(iii) 可逆変換 $x'=Ax$ により、$T$ は球面 $\|x'\|^2=c$、$S$ は $S'$ に移る。接する条件は半径が原点から $S'$ までの距離に等しいことである。したがって

$$
\boxed{c=\frac1{\|b\|^2}=\frac{49}{26}.}
$$


### 問3

(i) 係数比較により $\boxed{A=B=1/2}$。

(ii) 変数分離すると $\log|(2+y)/(2-y)|=x+\text{定数}$。よって

$$
\boxed{y(x)=\frac{2(Ce^x-1)}{Ce^x+1}\quad(C\in\mathbb R),\qquad y(x)\equiv2.}
$$


分母が $0$ にならない区間で考える。$C=0$ は定数解 $y\equiv-2$ を含む。

