---
sidebar_label: 2012年8月実施 専門科目 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
---
# 京都大学 情報学研究科 システム科学専攻 2012年8月実施 専門科目 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $(-1+i)^7$ の実部と虚部を求めよ。

(2) 方程式 $e^{z+i}=1$ の解を求めよ。

(3) $\overline{e^{iz}}-e^{-i\overline z}$ の実部と虚部を求めよ。

### 問題2
$m\ge1$ を整数とする。円周を正方向に一周する次の積分を求めよ。

(1) $\displaystyle\oint_{|z|=0.5}\frac{z}{z^m-1}dz$。

(2) $\displaystyle\oint_{|z|=4}\frac{\sin z}{(z+\pi)^2(z-5)}dz$。

### 問題3
$f(z)=\tanh z$ は $|z|<\pi/2$ で

$$
\tanh z=\sum_{n=0}^\infty a_nz^n,\qquad a_n=\frac{f^{(n)}(0)}{n!}
$$

とテイラー展開できる。$\tanh z=(e^z-e^{-z})/(e^z+e^{-z})$ とする。

(1) $f'(z)+f(z)^2=1$ を示せ。

(2) $n\ge1$ に対し $\displaystyle a_{n+1}=-\frac1{n+1}\sum_{m=0}^na_{n-m}a_m$ を示せ。

(3) (2) を用いて $a_{2n}=0\ (n\ge0)$ を示せ。

(4) $a_1,a_3,a_5$ を求めよ。

#### 题目描述

**问题1** (1) 求 $(-1+i)^7$ 的实部、虚部。(2) 解 $e^{z+i}=1$。(3) 求 $\overline{e^{iz}}-e^{-i\overline z}$ 的实部、虚部。

**问题2** 设整数 $m\ge1$，求沿圆周正向积分：(1) $\oint_{|z|=0.5}z/(z^m-1)dz$；(2) $\oint_{|z|=4}\sin z/[(z+\pi)^2(z-5)]dz$。

**问题3** 设 $f(z)=\tanh z=(e^z-e^{-z})/(e^z+e^{-z})=\sum_{n\ge0}a_nz^n$，$|z|<\pi/2$，$a_n=f^{(n)}(0)/n!$。(1) 证明 $f'+f^2=1$。(2) 证明 $n\ge1$ 时 $a_{n+1}=-(n+1)^{-1}\sum_{m=0}^na_{n-m}a_m$。(3) 利用该递推式证明所有偶数次系数为零。(4) 求 $a_1,a_3,a_5$。

## **Kai**

### 問題1
(1) $(-1+i)^7=2^{7/2}e^{21\pi i/4}=-8-8i$。従って実部、虚部ともに $\boxed{-8}$。

(2) $z+i=2\pi ki$ より $\boxed{z=i(2\pi k-1),\ k\in\mathbb Z}$。

(3) $\overline{e^{iz}}=e^{\overline{iz}}=e^{-i\overline z}$ より実部、虚部ともに $\boxed0$。

### 問題2
(1) $z^m=1$ の解はすべて $|z|=1$ 上にある。積分円の内部に特異点がないので、積分値は $\boxed0$。

(2) 円内の唯一の特異点は $z=-\pi$ であり、$\sin z$ の零点によって単純極となる。留数は

$$
\lim_{z\to-\pi}\frac{\sin z}{(z+\pi)(z-5)}
=\frac{\cos(-\pi)}{-\pi-5}=\frac1{\pi+5}.
$$

従って $\boxed{\oint_{|z|=4}\frac{\sin z}{(z+\pi)^2(z-5)}dz=\frac{2\pi i}{\pi+5}}$。

### 問題3
(1) $f'=1/\cosh^2z$ より $f'+f^2=(1+\sinh^2z)/\cosh^2z=1$。

(2) 冪級数を代入し $z^n$ の係数を比較すると、$n\ge1$ で

$$
(n+1)a_{n+1}+\sum_{m=0}^na_{n-m}a_m=0.
$$

(3) $a_0=f(0)=0$。$a_0,a_2,\ldots,a_{2k}$ が零と仮定する。$n=2k+1$ とした (2) の各積では添字の片方が $2k$ 以下の偶数なので、$a_{2k+2}=0$。帰納法から結論を得る。

(4) 定数項から $a_1=1$。さらに $a_3=-a_1^2/3$、$a_5=-2a_1a_3/5$ より

$$
\boxed{a_1=1,\qquad a_3=-\frac13,\qquad a_5=\frac2{15}}.
$$

