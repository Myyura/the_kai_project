---
sidebar_label: 2010年8月実施 専門科目 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Identity-Theorem
---
# 京都大学 情報学研究科 システム科学専攻 2010年8月実施 専門科目 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $e^z=5i$ を満たす $z$ の実部、虚部を求めよ。

(2) $z=x+iy$ の関数 $ax^2+bxy+y^2+i(x^2-2xy-y^2)$ が正則となる実数 $a,b$ を求めよ。

(3) $C$ は $z=(1+i)t\ (0\le t\le1)$ で表される線分とする。$\int_C(z^2+iz)dz$ を求めよ。

### 問題2

$$
I=\int_0^\infty\frac3{(x^2+1)(x^2+4)}dx
$$

を考える。

(1) $f(z)=3/[(z^2+1)(z^2+4)]$ の上半平面にある特異点をすべて求めよ。

(2) (1) の特異点が極なら各留数を求めよ。

(3) $I$ を求めよ。

### 問題3
横線は複素共役、$\mathbb C$ は複素数全体を表す。

(1) 実数 $a$ に対し $\cos(-ia)-\overline{\cos(\overline{ia})}$ を求めよ。

(2) $f$ は $\mathbb C$ で正則で、虚軸上で実数値をとるとする。虚軸上で $f(-z)-\overline{f(\overline z)}=0$ を示せ。

(3) (2) の $f$ が実軸上でも実数値をとるなら、$f$ は偶関数であることを示せ。必要なら一致の定理を用いてよい。

#### 题目描述

**问题1** (1) 求 $e^z=5i$ 的解的实部、虚部。(2) 求实数 $a,b$，使 $ax^2+bxy+y^2+i(x^2-2xy-y^2)$ 为 $z=x+iy$ 的全纯函数。(3) 沿线段 $z=(1+i)t,\ 0\le t\le1$，求 $\int_C(z^2+iz)dz$。

**问题2** 对 $f(z)=3/[(z^2+1)(z^2+4)]$，(1) 求上半平面的所有奇点；(2) 若为极点求其留数；(3) 求 $\int_0^\infty3/[(x^2+1)(x^2+4)]dx$。

**问题3** 横线表示复共轭。(1) 对实数 $a$ 求 $\cos(-ia)-\overline{\cos(\overline{ia})}$。(2) 设整函数 $f$ 在虚轴上为实数，证明虚轴上 $f(-z)-\overline{f(\overline z)}=0$。(3) 若 $f$ 在实轴上也为实数，证明 $f$ 是偶函数；可用恒等定理。

## **Kai**

### 問題1
(1) $e^{x+iy}=e^xe^{iy}=5i$ より $\boxed{\operatorname{Re}z=\log5}$、$\boxed{\operatorname{Im}z=\pi/2+2\pi k\ (k\in\mathbb Z)}$。

(2) コーシー・リーマン方程式は $2ax+by=-2x-2y$、$bx+2y=-2x+2y$。従って $\boxed{a=-1,b=-2}$。

(3) 被積分関数の原始関数を用いて

$$
\int_C(z^2+iz)dz=\left[\frac{z^3}3+\frac{iz^2}2\right]_0^{1+i}
=\boxed{\frac{-5+2i}3}.
$$

### 問題2
(1) 上半平面の特異点は $\boxed{z=i,2i}$ で、いずれも単純極。

(2) $\boxed{\operatorname{Res}(f,i)=1/(2i)}$、$\boxed{\operatorname{Res}(f,2i)=-1/(4i)}$。

(3) 上半円で閉じる。大円弧の積分は $f(z)=O(|z|^{-4})$ より零に収束するため、実軸全体の積分は $2\pi i[1/(2i)-1/(4i)]=\pi/2$。偶関数なので $\boxed{I=\pi/4}$。

### 問題3
(1) $\overline{ia}=-ia$、$\cos(-ia)=\cosh a\in\mathbb R$ より答えは $\boxed0$。

(2) 虚軸上では $\overline z=-z$ であり、$f(-z)$ は実数。従って $\overline{f(\overline z)}=f(-z)$。

(3) $F(z)=\overline{f(\overline z)}$ は、$f$ の冪級数の係数を共役にした整関数である。実軸上では $F=f$ なので一致の定理から全平面で $F=f$。(2) により虚軸上で $f(-z)=f(z)$ となり、再び一致の定理から全平面で成り立つ。従って $f$ は偶関数。

