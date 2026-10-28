---
sidebar_label: "2016年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Extrema
  - Mathematics.Linear-Algebra.Vector-Norm
  - Operations-Research.Convex-Optimization.Jensen-Inequality
---

# 東北大学 大学院理学研究科 数学専攻 2016年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$p>2$ とする．$D=\{(x,y,z)\in\mathbb{R}^3\mid x,y,z\ge0\}$ 上の関数

$$
F(x,y,z)=\frac{x^p+y^p+z^p}{p}-\frac{x^2+y^2+z^2}{2}
$$

に対し，以下の問いに答えよ．

(1) $D^\circ=\{(x,y,z)\in D\mid x,y,z>0\}$ における $F$ の極値をすべて求めよ．

(2) $S=\{(x,y,z)\in D\mid x^2+y^2+z^2=1\}$ 上で，$F$ の最大値，最小値とそれらを与える点を求めよ．

(3) すべての $(x,y,z)\in D$ に対して次の不等式が成り立つような $m$ の最大の値と $M$ の最小の値を求めよ．

$$
m\sqrt{x^2+y^2+z^2}\le(x^p+y^p+z^p)^{1/p}\le M\sqrt{x^2+y^2+z^2}.
$$

### 题目描述

设 $p>2$。在 $D=\{(x,y,z)\in\mathbb{R}^3\mid x,y,z\ge0\}$ 上定义

$$
F(x,y,z)=\frac{x^p+y^p+z^p}{p}-\frac{x^2+y^2+z^2}{2}.
$$

回答下列问题。

(1) 求 $F$ 在 $D^\circ=\{(x,y,z)\in D\mid x,y,z>0\}$ 上的全部局部极值。

(2) 求 $F$ 在 $S=\{(x,y,z)\in D\mid x^2+y^2+z^2=1\}$ 上的最大值、最小值，以及取得这些值的点。

(3) 求使下列不等式对所有 $(x,y,z)\in D$ 成立的 $m$ 的最大值和 $M$ 的最小值：

$$
m\sqrt{x^2+y^2+z^2}\le(x^p+y^p+z^p)^{1/p}\le M\sqrt{x^2+y^2+z^2}.
$$

## **Kai**

### (1)

$$
F_x=x^{p-1}-x=x(x^{p-2}-1),
$$

$F_y,F_z$ も同様である．$D^\circ$ の各座標は正なので，臨界点は $(1,1,1)$ のみである．この点のヘッセ行列は $(p-2)I_3$ で正定値だから，**$(1,1,1)$ で極小値 $3/p-3/2$ をとる．極大値は存在しない**．

### (2)

$a=x^2$，$b=y^2$，$c=z^2$，$q=p/2>1$ とおく．$S$ 上では $a,b,c\ge0$，$a+b+c=1$ である．関数 $t\mapsto t^q$ の狭義凸性とイェンセンの不等式から

$$
a^q+b^q+c^q\ge3\left(\frac{a+b+c}{3}\right)^q=3^{1-q},
$$

等号は $a=b=c=1/3$ のときのみ成立する．また，$0\le a,b,c\le1$ より

$$
a^q+b^q+c^q\le a+b+c=1,
$$

等号は $(a,b,c)$ が $(1,0,0)$ のいずれかの置換であるときのみ成立する．したがって

$$
\min_S F=\frac{3^{1-p/2}}p-\frac12
$$

で，これを与える点は $(1/\sqrt3,1/\sqrt3,1/\sqrt3)$ のみである．また

$$
\max_S F=\frac1p-\frac12
$$

で，これを与える点は $(1,0,0),(0,1,0),(0,0,1)$ である．

### (3)

$(x,y,z)\ne(0,0,0)$ に対し $r=\sqrt{x^2+y^2+z^2}>0$ とおく．$(x/r,y/r,z/r)\in S$ なので，(2) で得た評価に $1/p$ 乗を施すと

$$
3^{1/p-1/2}\le\frac{(x^p+y^p+z^p)^{1/p}}r\le1.
$$

原点でも元の不等式は成立する．左端は $x=y=z>0$，右端は一つの座標のみが正のときに達成されるので，最良定数は

$$
\boxed{\max m=3^{1/p-1/2},\qquad\min M=1}.
$$

## **Reference**

- [東北大学公式問題の保存版（2017年度・共通問題，kyotsu2017(H29).pdf 第3ページ）](https://drive.google.com/drive/folders/1ZVC00--LtSS7K_cucsHlwU-xPMbgosLX)
- [L^2：2017年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#80afc113-37ee-426d-a17b-ac9fa0959428)
