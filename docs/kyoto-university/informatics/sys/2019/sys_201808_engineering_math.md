---
sidebar_label: 2018年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Calculus.Hyperbolic-Functions-from-Power-Series
---

# 京都大学 情報学研究科 システム科学専攻 2018年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1

次の閉路積分を求めよ。

$$
\int_C\frac{e^z}{z^3+3z^2+z-5}\,dz.
$$

$C$ は複素平面で $z=i$ を中心とする半径 $r>0$ の円周を正の向きに一周する経路である。$C$ が被積分関数の特異点を通らない場合について解答せよ。

### 問題2

べき級数 $f(z)=\sum_{n=0}^\infty z^{n!}$ の収束半径を $R$ とする。

(1) $R$ を求めよ。

(2) $p,q$ を正整数、$0<t<R$ を満たす実数を $t$ とする。$\lim_{t\to R}f(te^{i2\pi p/q})$ を求めよ。

(3) $f(z)$ は収束円 $|z|<R$ を超えて解析接続できないことを示せ。

### 問題3

複素変数 $z$ について $\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$ と定義する。

(1) 実数 $x,y$ により $z=x+iy$ とおくとき、

$$
\tanh z=\frac{e^{2x}-e^{-2x}+i2\sin2y}{e^{2x}+e^{-2x}+2\cos2y}
$$

となることを示せ。

(2) $t>0$ とする。$z$ が純虚数でないとき $\lim_{t\to\infty}\tanh(tz)$ を求めよ。

(3) $f(u)=(u+u^{-1})/2$ とする。純虚数でない複素数 $z$ に対し $u_0=1/\tanh z$、$u_{n+1}=f(u_n)$ ($n=0,1,\ldots$) と定める。$\lim_{n\to\infty}u_n$ を求めよ。

#### 题目描述

**问题1** 求

$$
\int_C\frac{e^z}{z^3+3z^2+z-5}\,dz,
$$

其中 $C$ 是以 $i$ 为中心、半径 $r>0$ 的圆周，沿正向走一周。仅讨论路径不经过被积函数奇点的情形。

**问题2** 设 $f(z)=\sum_{n=0}^\infty z^{n!}$ 的收敛半径为 $R$。（1）求 $R$。（2）设 $p,q$ 为正整数，实数 $t$ 满足 $0<t<R$，求 $\lim_{t\to R}f(te^{i2\pi p/q})$。（3）证明 $f$ 无法解析延拓到收敛圆 $|z|<R$ 以外。

**问题3** 定义 $\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$。

（1）对实数 $x,y$ 令 $z=x+iy$，证明

$$
\tanh z=\frac{e^{2x}-e^{-2x}+2i\sin2y}{e^{2x}+e^{-2x}+2\cos2y}.
$$

（2）$t>0$ 且 $z$ 不是纯虚数，求 $\lim_{t\to\infty}\tanh(tz)$。

（3）设 $f(u)=(u+u^{-1})/2$。对非纯虚复数 $z$，定义 $u_0=1/\tanh z,u_{n+1}=f(u_n)$（$n\ge0$），求 $\lim_{n\to\infty}u_n$。


## **Kai**

### 問題1

分母は $(z-1)(z+2-i)(z+2+i)$。極 $1,-2+i,-2-i$ と中心 $i$ との距離は、それぞれ $\sqrt2,2,2\sqrt2$ である。各留数に $2\pi i$ を掛けた値は

$$
A=\frac{\pi i e}{5},\qquad
B=\frac{\pi e^{-2+i}}{-3+i},\qquad
D=\frac{\pi e^{-2-i}}{3+i}.
$$

留数定理より答えは

$$
\boxed{\begin{cases}
0&0<r<\sqrt2,\\
A&\sqrt2<r<2,\\
A+B&2<r<2\sqrt2,\\
A+B+D&r>2\sqrt2.
\end{cases}}
$$

### 問題2

(1) $|z|<1$ では $n!\ge n$ により絶対収束する。$|z|>1$ では一般項が $0$ に収束しない。よって $\boxed{R=1}$。

(2) $\zeta=e^{2\pi ip/q}$ とする。$n\ge q$ なら $q\mid n!$ なので

$$
f(t\zeta)=\sum_{n=0}^{q-1}t^{n!}\zeta^{n!}+\sum_{n=q}^{\infty}t^{n!}.
$$

第1項は有限極限をもち、第2項は $t\uparrow1$ で $+\infty$ に発散する。したがって実部は $+\infty$、特に $|f(t\zeta)|\to\infty$。

(3) (2) より、すべての1のべき根は特異点である。これらは単位円上に稠密なので、単位円のいかなる点の近傍にも正則な接続は存在しない。よって単位円は自然境界である。

### 問題3

(1) 分母・分子に $e^{\bar z}+e^{-\bar z}$ を掛け、$z=x+iy$ を代入して整理すれば所望の式を得る。

(2) $x=\operatorname{Re}z\ne0$ とする。(1) の分母・分子を $e^{2t|x|}$ で割れば

$$
\boxed{\lim_{t\to\infty}\tanh(tz)=\begin{cases}1&x>0,\\-1&x<0.\end{cases}}
$$

(3) 倍角公式から

$$
\frac12(\coth w+\tanh w)=\coth(2w).
$$

帰納的に $u_n=\coth(2^nz)$。$\operatorname{Re}(2^nz)\ne0$ なので全項が定義され、(2) より

$$
\boxed{\lim_{n\to\infty}u_n=\begin{cases}1&\operatorname{Re}z>0,\\-1&\operatorname{Re}z<0.\end{cases}}
$$

