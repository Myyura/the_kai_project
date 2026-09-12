---
sidebar_label: 2014年8月実施 専門科目 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Fresnel-Integral-by-Contour-Rotation
  - Mathematics.Complex-Analysis.Mobius-Transformation
---
# 京都大学 情報学研究科 システム科学専攻 2014年8月実施 専門科目 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
$z$ を複素変数とする。

(1) 次の複素関数の極、および対応する位数と留数を求めよ。

$$
\frac{2+z^4-2\cosh z^2}{z^9}.
$$

(2) 多価関数 $z^{3i}$ の $z=1-\sqrt3i$ における値をすべて求めよ。

(3) $z=x+iy$ とし、$C_0$ を $x^2-xy+y^2+x+y=0$ を反時計回りに一周する経路とする。次を求めよ。

$$
\oint_{C_0}\frac{dz}{1+z^4}.
$$

### 問題2
$C$ は原点を中心とし、正の実軸と接した半径 $r$、中心角 $\pi/4$ の扇形の周囲を反時計回りに一周する経路である。

![積分経路 C0 と扇形経路 C](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2015/sys_201408_engineering_math_contours.svg)

$C$ に沿って $e^{-z^2}$ を積分し、$r\to\infty$ の極限をとることにより、$\int_0^\infty\sin x^2\,dx$ を求めよ。ただし、以下を証明せず用いてよい。

$$
\int_0^\infty e^{-x^2}\,dx=\frac{\sqrt\pi}{2},\qquad
\int_0^{\pi/2}e^{-x\sin\theta}\,d\theta<\frac\pi{2x}\quad(x>0).
$$

### 問題3

$$
f(z)=\frac{z+z^{-1}}2,\qquad w=g(z)=\frac{z-1}{z+1}
$$

とおく。

(1) $f\circ f\circ g^{-1}(w)$ を求めよ。

(2) $f^n\circ g^{-1}(w)$ を求めよ。$f^n$ は $f$ の $n$ 回合成、$n$ は非負整数である。

(3) 右半面 $\{z\in\mathbb C:\operatorname{Re}z>0\}$ の $g$ による像を求めよ。

(4) $z$ は純虚数でないものとする。数列 $z,f(z),f^2(z),\ldots$ が収束する $z$ の範囲と、その極限を求めよ。

#### 题目描述

**问题1** 设 $z$ 为复变量。(1) 求 $(2+z^4-2\cosh z^2)/z^9$ 的极点、阶数和留数。(2) 求多值函数 $z^{3i}$ 在 $z=1-\sqrt3i$ 的全部值。(3) 设 $z=x+iy$，$C_0$ 为椭圆 $x^2-xy+y^2+x+y=0$ 的逆时针闭合路径，求 $\oint_{C_0}(1+z^4)^{-1}dz$。

**问题2** $C$ 是以原点为圆心、半径为 $r$、位于正实轴与辐角 $\pi/4$ 射线之间的扇形边界，方向为逆时针（见图）。沿 $C$ 积分 $e^{-z^2}$ 并令 $r\to\infty$，求 $\int_0^\infty\sin x^2\,dx$。可直接使用

$$
\int_0^\infty e^{-x^2}dx=\frac{\sqrt\pi}2,\qquad
\int_0^{\pi/2}e^{-x\sin\theta}d\theta<\frac\pi{2x}\quad(x>0).
$$

**问题3** 令 $f(z)=(z+z^{-1})/2$、$g(z)=(z-1)/(z+1)$。(1) 求 $f\circ f\circ g^{-1}(w)$。(2) 求 $f^n\circ g^{-1}(w)$，$f^n$ 表示 $n$ 次复合，$n$ 为非负整数。(3) 求右半平面在 $g$ 下的像。(4) 设 $z$ 非纯虚数，求迭代序列 $z,f(z),f^2(z),\ldots$ 收敛的 $z$ 范围与相应极限。

## **Kai**

### 問題1
#### (1)

$$
\cosh z^2=1+\frac{z^4}{2}+\frac{z^8}{24}+O(z^{12}),\qquad
\frac{2+z^4-2\cosh z^2}{z^9}=-\frac1{12z}+O(z^3).
$$

従って唯一の極は $\boxed{z=0}$、位数は $\boxed1$、留数は $\boxed{-1/12}$。

#### (2)
$\log z=\log2+i(-\pi/3+2\pi k)$ より、求める値は

$$
\boxed{\exp(\pi-6\pi k)\exp(3i\log2),\qquad k\in\mathbb Z}.
$$

#### (3)
$1+z^4=0$ の解は $z_k=e^{(2k+1)\pi i/4}$ である。楕円内部は $x^2-xy+y^2+x+y<0$ であり、四つの解のうち内部にあるのは $a=e^{5\pi i/4}$ のみである。従って

$$
\oint_{C_0}\frac{dz}{1+z^4}
=2\pi i\frac1{4a^3}
=\boxed{\frac{\sqrt2\pi}{4}(-1+i)}.
$$

### 問題2
円弧を $\Gamma_r$ とすると、コーシーの積分定理より

$$
0=\int_0^r e^{-x^2}dx+\int_{\Gamma_r}e^{-z^2}dz
-e^{i\pi/4}\int_0^r e^{-it^2}dt.
$$

与えられた評価を用いて

$$
\left|\int_{\Gamma_r}e^{-z^2}dz\right|
\le r\int_0^{\pi/4}e^{-r^2\cos2\theta}d\theta
=\frac r2\int_0^{\pi/2}e^{-r^2\sin u}du
<\frac\pi{4r}\longrightarrow0.
$$

従って

$$
\int_0^\infty e^{-it^2}dt=e^{-i\pi/4}\frac{\sqrt\pi}2
=\frac{\sqrt{2\pi}}4(1-i).
$$

虚部を比較すると $\boxed{\int_0^\infty\sin x^2dx=\sqrt{2\pi}/4}$。

### 問題3
#### (1), (2)
$g^{-1}(w)=(1+w)/(1-w)$ であり、

$$
f\left(\frac{1+w}{1-w}\right)=\frac{1+w^2}{1-w^2}.
$$

帰納法により、各合成が定義される範囲で

$$
\boxed{f\circ f\circ g^{-1}(w)=\frac{1+w^4}{1-w^4}},\qquad
\boxed{f^n\circ g^{-1}(w)=\frac{1+w^{2^n}}{1-w^{2^n}}}.
$$

#### (3)

$$
\operatorname{Re}g^{-1}(w)=\frac{1-|w|^2}{|1-w|^2}
$$

より、像は $\boxed{\{w\in\mathbb C:|w|<1\}}$。

#### (4)
$\operatorname{Re}z>0$ なら $|g(z)|<1$、$\operatorname{Re}z<0$ かつ $z\ne-1$ なら $|g(z)|>1$ である。(2) によりそれぞれ極限は $1,-1$ となる。$z=-1$ も固定点である。従って純虚数でないすべての $z$ で収束し、

$$
\boxed{\lim_{n\to\infty}f^n(z)=\begin{cases}1,&\operatorname{Re}z>0,\\-1,&\operatorname{Re}z<0.\end{cases}}
$$

