---
sidebar_label: 2024年8月実施 選択問題 応用数学
tags:
  - University-of-Electro-Communications
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Residue-Theorem
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2024年8月実施 選択問題 応用数学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

1. $e^{i\pi}$ を計算せよ。
2. 実数 $\theta\geq0$ に対して $|e^{i\theta}|$ を計算せよ。
3. $(1+i)^i$ を計算せよ。
4. $z=\sin w$ の逆関数が

$$
\sin^{-1}z=-i\log\left(iz+\sqrt{1-z^2}\right)
$$

と表せることを示せ。

### 問2

複素微分の定義から積の微分公式を示し、$z^2\log z$ と $e^{iz}$ を微分せよ。

### 問3

反時計回りの円 $C:|z|=1/2$ に対し、Laurent 展開と留数を用いて

$$
\oint_C\frac{1}{z^2(1-z)}\,dz
$$

を求めよ。

### 题目描述

计算复指数和复幂，推导复反正弦的对数表示；从定义证明复函数乘积求导法则并完成两项求导；最后用 Laurent 展开与留数计算围道积分。

## **Kai**

### 問1

#### (1)

Euler の公式より

$$
\boxed{e^{i\pi}=-1}.
$$

#### (2)

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

より

$$
\boxed{|e^{i\theta}|=1}.
$$

#### (3)

$1+i=\sqrt2e^{i(\pi/4+2\pi k)}$ より

$$
(1+i)^i
=e^{-(\pi/4+2\pi k)}e^{i\log\sqrt2}\qquad(k\in\mathbb Z).
$$

したがって主値は

$$
\boxed{e^{-\pi/4}
\left(\cos\frac{\log2}{2}+i\sin\frac{\log2}{2}\right)}.
$$

#### (4)

$u=e^{iw}$ とおくと

$$
z=\sin w=\frac{u-u^{-1}}{2i}
$$

であるから

$$
u^2-2izu-1=0,\qquad
u=iz+\sqrt{1-z^2}.
$$

よって枝を整合的に選べば

$$
\boxed{w=-i\log\left(iz+\sqrt{1-z^2}\right)}.
$$

### 問2

#### (1)

$\Delta f=f(z+\Delta z)-f(z)$、$\Delta g=g(z+\Delta z)-g(z)$ とすると

$$
\frac{\Delta(fg)}{\Delta z}
=g(z)\frac{\Delta f}{\Delta z}
+f(z)\frac{\Delta g}{\Delta z}
+\Delta f\frac{\Delta g}{\Delta z}.
$$

$\Delta z\to0$ とすれば $\Delta f\to0$ であるから

$$
\boxed{(fg)'=f'g+fg'}.
$$

#### (2)

一つの正則な対数の枝上で

$$
\boxed{\frac{d}{dz}(z^2\log z)=2z\log z+z}.
$$

#### (3)

$$
\boxed{\frac{d}{dz}e^{iz}=ie^{iz}}.
$$

### 問3

$|z|<1$ において

$$
\frac1{z^2(1-z)}
=\frac1{z^2}\sum_{n=0}^{\infty}z^n
=z^{-2}+z^{-1}+1+z+\cdots.
$$

したがって $z=0$ における留数は $1$ であり、

$$
\boxed{\displaystyle
\oint_C\frac{1}{z^2(1-z)}\,dz=2\pi i}.
$$
