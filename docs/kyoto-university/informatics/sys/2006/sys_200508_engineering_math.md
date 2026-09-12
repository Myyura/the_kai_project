---
sidebar_label: 2005年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
---

# 京都大学 情報学研究科 システム科学専攻 2005年8月実施 工業数学

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問1
(1) $1$ の 8 乗根のうち、$1$ 以外で正の偏角が最小のものを $\alpha$ とする。$\alpha$ を求めよ。

(2) $\alpha^4$ を求めよ。

(3) $e^z$ の実部と虚部が Cauchy–Riemann の関係式を満たすことを示せ。

(4) $z_k=(k+1/2)\pi$（$k=0,1,2,\ldots$）が $\tan z$ の 1 位の極であることを示せ。

(5) $R>0$ とし、$C$ を $z(t)=t e^{\pi i/4}$（$0\le t\le R$）で表される経路とする。$I_C=\int_C e^{-z^2}\,dz$ の実部を $\int_0^R\cos(t^2)\,dt$ と $\int_0^R\sin(t^2)\,dt$ で表せ。

### 問2
原点の近傍で正則な $f(z)$ が次のように展開されている。

$$
f(z)=\sum_{n=0}^{\infty}a_nz^n=\sum_{n=0}^{\infty}b_nz^n.
$$

(1) $a_n=b_n$ を示せ。

(2) $f(-z)=-f(z)$ ならば $a_{2k}=0$（$k=0,1,2,\ldots$）であることを示せ。

(3) さらに $f''(z)=-f(z)$、$a_1=1$ とする。$a_{2k+1}$ を求めよ。

(4) (3) のべき級数の収束半径を求めよ。

#### 题目描述

### 问1
(1) 求 $1$ 的八次方根中除 $1$ 外正辐角最小的根 $\alpha$。

(2) 求 $\alpha^4$。

(3) 证明 $e^z$ 的实部与虚部满足 Cauchy–Riemann 方程。

(4) 证明 $z_k=(k+1/2)\pi$（$k=0,1,2,\ldots$）是 $\tan z$ 的一阶极点。

(5) $R>0$，路径 $C$ 为 $z(t)=t e^{\pi i/4}$、$0\le t\le R$。用 $\int_0^R\cos(t^2)\,dt$ 和 $\int_0^R\sin(t^2)\,dt$ 表示 $I_C=\int_C e^{-z^2}\,dz$ 的实部。

### 问2
设 $f$ 在原点附近全纯，且 $f(z)=\sum_{n=0}^{\infty}a_nz^n=\sum_{n=0}^{\infty}b_nz^n$。

(1) 证明 $a_n=b_n$。

(2) 若 $f(-z)=-f(z)$，证明所有 $a_{2k}=0$。

(3) 再设 $f''=-f$ 且 $a_1=1$，求 $a_{2k+1}$。

(4) 求 (3) 中幂级数的收敛半径。

## **Kai**

### 問1
(1) $1$ の 8 乗根は $e^{2\pi ik/8}$（$k=0,\ldots,7$）。よって $\boxed{\alpha=e^{\pi i/4}=(1+i)/\sqrt2}$。

(2) $\boxed{\alpha^4=e^{\pi i}=-1}$。

(3) $e^{x+iy}=u+iv$ とおくと $u=e^x\cos y$、$v=e^x\sin y$。したがって $u_x=v_y=e^x\cos y$、$u_y=-v_x=-e^x\sin y$。

(4) $\cos z_k=0$、$\cos'(z_k)=-\sin z_k\ne0$ なので、分母 $\cos z$ の零点は単純である。分子 $\sin z_k\ne0$ より $\tan z$ の 1 位の極となる。

(5) $z^2=it^2$、$dz=e^{\pi i/4}dt$ より

$$
I_C=\frac{1+i}{\sqrt2}\int_0^R\{\cos(t^2)-i\sin(t^2)\}\,dt.
$$

したがって

$$
\boxed{\operatorname{Re}I_C=\frac1{\sqrt2}\left(\int_0^R\cos(t^2)\,dt+\int_0^R\sin(t^2)\,dt\right)}.
$$

### 問2
(1) 収束円内で $n$ 回項別微分して $z=0$ とおけば、$a_n=f^{(n)}(0)/n!=b_n$。

(2) $f(-z)=-f(z)$ の両辺の係数を比較すると $(-1)^na_n=-a_n$。$n=2k$ で $a_{2k}=0$。

(3) 微分方程式の係数比較から $(n+2)(n+1)a_{n+2}=-a_n$。$a_1=1$ より帰納的に

$$
\boxed{a_{2k+1}=\frac{(-1)^k}{(2k+1)!}}.
$$

(4) 任意の $z$ に対し、隣接する非零項の絶対値の比は $|z|^2/\{(2k+3)(2k+2)\}\to0$。したがって収束半径は $\boxed{\infty}$。

