---
sidebar_label: "2021年8月実施 力学系数学"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Polynomial-Solutions-of-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Wronskian
---
# 京都大学 情報学研究科 数理工学専攻 2021年8月実施 力学系数学

## **Author**
Casablanca, 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
### 日本語版
$a(t), b(t)$ を $t$ のある有理式として次の実微分方程式を考える．

$$
\frac{d^2 x}{dt^2} + a(t) \frac{dx}{dt} + b(t)x = 0
$$

以下の問いに答えよ．

(i) $k \geqq 1$ をある整数として，$x = t^k$ が式 (1) の解であるための $a(t), b(t)$ に関する必要十分条件を求めよ．

以下では，ある整数 $k \geqq 1$ に対して (i) で求めた条件が成り立つものとし，$\phi(t)$ を $t^k$ と線形独立な解として，

$$
p(t) = t\frac{d \phi}{dt} (t) - k \phi(t)
$$

とおく．

(ii) $a(t), b(t)$ を $p(t)$ を用いて表わせ．

(iii) $p(t) = t$ のとき $a(t), b(t)$ を定めよ．

(iv) 式 (1) のすべての解が定数でない多項式のとき，$a(t), b(t)$ は多項式でないことを示せ．

### English Version


### 题目描述

设 $a(t),b(t)$ 为关于 $t$ 的有理函数，考虑实微分方程

$$
\frac{d^2x}{dt^2}+a(t)\frac{dx}{dt}+b(t)x=0. \tag{1}
$$

回答：

1. 对给定整数 $k\ge1$，求 $x=t^k$ 为 (1) 的解时 $a(t),b(t)$ 所满足的充要条件。

以下假设该条件对某个 $k\ge1$ 成立。令 $\phi(t)$ 为与 $t^k$ 线性无关的另一解，并定义

$$
p(t)=t\frac{d\phi}{dt}(t)-k\phi(t).
$$

继续回答：

2. 用 $p(t)$ 表示 $a(t),b(t)$。
3. 当 $p(t)=t$ 时确定 $a(t),b(t)$。
4. 若 (1) 的每一个解都是非常值多项式，证明 $a(t),b(t)$ 不是多项式。

## **Kai**

以下、係数が定義される開区間上で考え、$1/t$ を含む式は $t\ne0$ で用いる。$0$ が通常点である場合には、必要な等式は連続性により $t=0$ にも延長される。

### (i)

$x=t^k$ を式 (1) に代入すると、$t\ne0$ において

$$
0=k(k-1)t^{k-2}+ka(t)t^{k-1}+b(t)t^k
=t^{k-2}\bigl(k(k-1)+kta(t)+t^2b(t)\bigr).
$$

したがって、必要十分条件は有理式の恒等式

$$
\boxed{k(k-1)+kta(t)+t^2b(t)=0}
$$

が成り立つことである。逆にこの恒等式が成り立てば、代入した式は零となる。特に $k=1$ のときは $a(t)+tb(t)=0$ である。

### (ii)

$p=t\phi'-k\phi$ より

$$
p'=t\phi''-(k-1)\phi'.
$$

$\phi''+a\phi'+b\phi=0$ と (i) の条件を用いると、

$$
\begin{aligned}
p'
&=-(ta+k-1)\phi'-tb\phi\\
&=\frac{t^2b}{k}\phi'-tb\phi
=\frac{tb}{k}\bigl(t\phi'-k\phi\bigr)
=\frac{tb}{k}p.
\end{aligned}
$$

また、$t^k$ と $\phi$ のロンスキー行列式は

$$
W(t)=t^k\phi'-kt^{k-1}\phi=t^{k-1}p(t)
$$

である。二つの解は線形独立なので、通常点のみからなる区間で $W$ は零にならず、$t\ne0$ ならば $p(t)\ne0$ である。よって

$$
\boxed{b(t)=\frac{k p'(t)}{t p(t)}}.
$$

これを (i) に代入して

$$
\boxed{a(t)=-\frac{k-1}{t}-\frac{p'(t)}{p(t)}}
$$

を得る。

### (iii)

$p(t)=t$、$p'(t)=1$ を (ii) に代入すれば、

$$
\boxed{a(t)=-\frac{k}{t},\qquad b(t)=\frac{k}{t^2}}
$$

である。

### (iv)

同次方程式は零解をもつので、仮定は「すべての非零解が非常数多項式である」と解釈する。

$\phi$ の $t^k$ の係数を $c$ とし、$\psi(t)=\phi(t)-ct^k$ とおく。$\psi$ は非零の解であるから、仮定より非常数多項式である。また、$t^k$ の係数は $0$ なので、

$$
n=\deg\psi\ge1,\qquad n\ne k.
$$

$t^k$ の定数倍を差し引いても $p$ は変わらず、

$$
p=t\psi'-k\psi
$$

である。$\psi$ の最高次係数を $c_n\ne0$ とすると、$p$ の最高次係数は $(n-k)c_n\ne0$ であり、$\deg p=n$ となる。

(ii) より、

$$
a(t)=\frac{(1-k)p(t)-tp'(t)}{tp(t)},\qquad
b(t)=\frac{kp'(t)}{tp(t)}.
$$

$a$ の分子の最高次係数は $(1-k-n)(n-k)c_n\ne0$ であるから、分子の次数は $n$、分母の次数は $n+1$ である。また、$b$ の分子の次数は $n-1$、分母の次数は $n+1$ であり、その分子も非零である。

したがって、$a,b$ はいずれも非零の真分式であり、どちらも多項式ではない。

## **Reference**

- [京都大学公式：令和4年度 数理工学専攻 入試問題・力学系数学 問6（PDF 23–24ページ）](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_amp.pdf)
