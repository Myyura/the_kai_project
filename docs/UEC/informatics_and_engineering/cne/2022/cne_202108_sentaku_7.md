---
sidebar_label: 2021年8月実施 選択問題 数値計算
tags:
  - University-of-Electro-Communications
  - Mathematics.Numerical-Analysis
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Characteristic-Roots-and-Stability
---

# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2021年8月実施 選択問題 数値計算

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

複素定数 $\lambda$ に対する常微分方程式

$$
\frac{dx}{dt}=\lambda x
$$

を刻み幅 $h$、$t_n=t_0+nh$ で離散化し、$x(t_n)$ の数値解を $x_n$ とする。

1. $t_n$ における 1 次前進差分を示せ。
2. $t_n$ における 1 次後退差分を示せ。
3. 陽的 Euler 法の $x_{n+1}$ を求めよ。
4. 陰的 Euler 法の $x_{n+1}$ を求めよ。
5. $z=\lambda h$ とし、陽的 Euler 法の増幅率 $\gamma=x_{n+1}/x_n$ が $|\gamma|\le1$ を満たす安定領域を複素平面上で示し、$h$ との関係を述べよ。
6. 陰的 Euler 法について同様に答えよ。

### 题目描述

对线性测试方程 $x'=\lambda x$，写出前向/后向差分以及显式、隐式 Euler 迭代式，并在复平面上求两种方法的绝对稳定域，讨论步长与实数或纯虚特征值的关系。

## **Kai**

### (1)

$$
\boxed{\left.\frac{dx}{dt}\right|_{t=t_n}
\simeq\frac{x_{n+1}-x_n}{h}}.
$$

### (2)

$$
\boxed{\left.\frac{dx}{dt}\right|_{t=t_n}
\simeq\frac{x_n-x_{n-1}}{h}}.
$$

### (3)

$$
\frac{x_{n+1}-x_n}{h}=\lambda x_n
$$

より

$$
\boxed{x_{n+1}=(1+\lambda h)x_n}.
$$

### (4)

$$
\frac{x_{n+1}-x_n}{h}=\lambda x_{n+1}
$$

より

$$
\boxed{x_{n+1}=\frac{x_n}{1-\lambda h}}.
$$

### (5) 陽的 Euler 法

$$
\gamma=1+z.
$$

したがって安定領域は

$$
\boxed{|1+z|\le1},
$$

すなわち複素平面上の中心 $-1$、半径 $1$ の閉円板である。

$h>0$ とすると、一般に

$$
|1+h\lambda|\le1
\iff
h|\lambda|^2\le-2\operatorname{Re}\lambda.
$$

よって $\operatorname{Re}\lambda<0$ のとき

$$
\boxed{0<h\le-\frac{2\operatorname{Re}\lambda}{|\lambda|^2}}.
$$

特に、実数 $\lambda<0$ では $h\le-2/\lambda$、純虚数 $\lambda=i\omega\ne0$ では正の $h$ に対して常に不安定である。

### (6) 陰的 Euler 法

$$
\gamma=\frac1{1-z}.
$$

したがって安定領域は

$$
\boxed{|1-z|\ge1},
$$

すなわち中心 $1$、半径 $1$ の開円板の外側とその境界である。$h>0$ について

$$
|1-h\lambda|\ge1
\iff
h|\lambda|^2\ge2\operatorname{Re}\lambda.
$$

したがって $\operatorname{Re}\lambda\le0$ なら任意の $h>0$ で安定である。特に実数 $\lambda<0$ と純虚数 $\lambda=i\omega$ では刻み幅に制限がない。$\operatorname{Re}\lambda>0$ では、この判定条件だけなら

$$
h\ge\frac{2\operatorname{Re}\lambda}{|\lambda|^2}
$$

で $|\gamma|\le1$ となるが、厳密解自体は増大するため、これは元の方程式の増大を再現しない数値的減衰である。
