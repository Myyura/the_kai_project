---
sidebar_label: '2013年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Argument-Principle-and-Winding-Number
  - Mathematics.Complex-Analysis.Mobius-Transformation
---

# 東京大学 工学系研究科 2013年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 留数定理を用いて $\displaystyle\int_0^\pi\frac{\cos4\theta}{1+\cos^2\theta}\,d\theta$ を求めよ。

II. $\displaystyle\frac1{2\pi i}\oint_C\frac{e^z}{z^2(1-z^2)}\,dz$ を求めよ。
閉路 $C$ の $-1,0,1$ に対する巻き数は、それぞれ $1,2,-1$ である。

III. (1) $w=(z+1)/(z-1)$ による領域 $|z|<1$ と $\operatorname{Re}z<0$ の像をそれぞれ求めよ。

(2) 正の実数 $\alpha,\beta$ に対し、$w=(z-\alpha)/(\alpha z-1)$ は円環 $\beta<|z|<1$ を
$|w-1/4|>1/4,\ |w|<1$ に写す。$\alpha,\beta$ を求めよ。

![図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_math_3_contour.svg)

#### 题目描述

I. 用留数定理求 $\displaystyle\int_0^\pi\frac{\cos4\theta}{1+\cos^2\theta}\,d\theta$。

II. 求 $\displaystyle\frac1{2\pi i}\oint_C\frac{e^z}{z^2(1-z^2)}\,dz$。闭路 $C$ 对 $-1,0,1$ 的绕数分别为 $1,2,-1$，方向见图。

III. (1) 求 $w=(z+1)/(z-1)$ 下区域 $|z|<1$ 和 $\operatorname{Re}z<0$ 的像。

(2) 正实数 $\alpha,\beta$ 使 $w=(z-\alpha)/(\alpha z-1)$ 把圆环 $\beta<|z|<1$ 映为
$|w-1/4|>1/4,\ |w|<1$。求 $\alpha,\beta$。

## **Kai**

### I

$\phi=2\theta$ とおくと、元の積分は
$\int_0^{2\pi}\cos2\phi/(3+\cos\phi)\,d\phi$。
$J_j=\int_0^{2\pi}e^{ij\phi}/(3+\cos\phi)\,d\phi$（$j=0,2$）とおく。
$z=e^{i\phi}$ と変換すると、

$$
J_j=\frac2i\oint_{|z|=1}\frac{z^j}{z^2+6z+1}\,dz.
$$

円内の極は $\rho=-3+2\sqrt2$ のみで、もう一つの根は $-3-2\sqrt2$ だから、
$J_j=\pi\rho^j/\sqrt2$。$j=2$ の実部を取れば、

$$
\boxed{I=\frac\pi{\sqrt2}(17-12\sqrt2)}.
$$

### II

被積分関数の $-1,0,1$ における留数はそれぞれ $e^{-1}/2,1,-e/2$。巻き数を掛けて加えると、

$$
\boxed{\frac1{2\pi i}\oint_C\frac{e^z}{z^2(1-z^2)}\,dz
=\frac{e^{-1}}2+2+\frac e2=2+\cosh1}.
$$

### III

#### 1

逆変換も $z=(w+1)/(w-1)$ であるから、

$$
|z|<1\iff|w+1|<|w-1|\iff\operatorname{Re}w<0.
$$

また $\operatorname{Re}z=(|w|^2-1)/|w-1|^2$ なので、

$$
\boxed{\{|z|<1\}\mapsto\{\operatorname{Re}w<0\},\qquad
\{\operatorname{Re}z<0\}\mapsto\{|w|<1\}}.
$$

#### 2

この変換は単位円を保ち、

$$
|w|^2-1=\frac{(1-\alpha^2)(|z|^2-1)}{|\alpha z-1|^2}.
$$

円内の円環を単位円内に写すためには $0<\alpha<1$ が必要である。
$|z|=\beta$ のとき $|w-1/4|=1/4$ となる条件は

$$
|(4-\alpha)z+1-4\alpha|^2=|\alpha z-1|^2.
$$

$\operatorname{Re}z$ の係数と定数項を比較すると、
$\alpha^2-4\alpha+1=0$、$(2-\alpha)\beta^2+2\alpha^2-\alpha=0$。
従って、

$$
\boxed{\alpha=\beta=2-\sqrt3}.
$$

代入すると両辺の二乗の差は $8(2-\alpha)(|z|^2-\beta^2)$ となり、円環内では確かに $|w-1/4|>1/4$ である。
