---
sidebar_label: 2011年8月実施 専門科目 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Complex-Analysis.Maximum-Modulus-Principle
  - Mathematics.Geometry.Complex-Plane-Geometry
---
# 京都大学 情報学研究科 システム科学専攻 2011年8月実施 専門科目 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $(1+i)^2$ の絶対値と偏角を求めよ。

(2) 領域 $\operatorname{Re}(z^2)\le1$ を複素平面に図示せよ。

(3) 逆正弦関数 $\sin^{-1}z$ を対数関数で表せ。

### 問題2
$f(z)=(1-e^{iz})/z^2$ とする。

(1) $z=0$ のまわりでローラン展開せよ。

(2) $C_r$ は $|z|=r$ の上半円を $z=-r$ から $z=r$ まで進む経路である（$r>0$）。$\lim_{r\to0}\int_{C_r}f(z)dz$ を求めよ。

(3) 複素積分を用いて $\int_0^\infty(1-\cos x)/x^2\,dx$ を求めよ。

### 問題3
$a>0$、$D=\{z:|z|\le a\}$ とする。$f$ は $D$ を含む領域で正則とする。

(1) $\overline{f(z)}$ も $D$ で $z$ の関数として正則なら、$f$ は定数であることを示せ。

(2) $|f(z)|$ が $D$ で定数なら、$f$ 自身も定数であることを (1) を用いて示せ。

(3) $C\ge0$、円周 $|z|=a$ 上で $|f(z)|=C$ とし、$f$ は $D$ で定数でないとする。$C\ne0$ を示せ。

(4) (3) と同じ条件のもとで、$f$ は $D$ 内に零点をもつことを示せ。

#### 题目描述

**问题1** (1) 求 $(1+i)^2$ 的模与辐角。(2) 画出 $\operatorname{Re}(z^2)\le1$ 的区域。(3) 用对数表示复反正弦 $\sin^{-1}z$。

**问题2** 设 $f(z)=(1-e^{iz})/z^2$。(1) 在原点作 Laurent 展开。(2) $C_r$ 沿 $|z|=r$ 的上半圆从 $-r$ 走向 $r$，求 $r\to0$ 时 $\int_{C_r}f(z)dz$ 的极限。(3) 用复积分求 $\int_0^\infty(1-\cos x)/x^2dx$。

**问题3** 设 $a>0$，$D=\{|z|\le a\}$，$f$ 在包含 $D$ 的区域全纯。(1) 若 $\overline{f(z)}$ 也全纯，证明 $f$ 为常数。(2) 利用 (1) 证明：若 $|f|$ 在 $D$ 为常数，则 $f$ 也为常数。(3) 设边界上 $|f|=C\ge0$，且 $f$ 非常数，证明 $C\ne0$。(4) 在同样条件下证明 $f$ 在 $D$ 内有零点。

## **Kai**

### 問題1
(1) $(1+i)^2=2i$ なので絶対値は $\boxed2$、偏角は $\boxed{\pi/2+2\pi k\ (k\in\mathbb Z)}$。

(2) $z=x+iy$ とすると $\operatorname{Re}z^2=x^2-y^2$。従って領域は双曲線の間の部分

$$
\boxed{-\sqrt{1+y^2}\le x\le\sqrt{1+y^2}}
$$

であり、境界を含む。

![双曲線領域と原点を避ける上半平面の積分経路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2012/sys_201108_engineering_math_region_contour.svg)

(3) $\sin w=z$、$u=e^{iw}$ とおくと $u^2-2izu-1=0$。従って多価の対数および平方根を用いて

$$
\boxed{\sin^{-1}z=-i\log\left(iz\pm\sqrt{1-z^2}\right)}.
$$

### 問題2
(1) 指数関数の級数から

$$
\boxed{f(z)=-\frac iz+\frac12+\frac{iz}6-\frac{z^2}{24}+\cdots}.
$$

(2) $z=re^{i\theta}$、$\theta:\pi\to0$ とすると、$(-i/z)dz=d\theta$。正則部分の積分は $O(r)$ なので $\boxed{\lim_{r\to0}\int_{C_r}f(z)dz=-\pi}$。

(3) 上半平面で半径 $R$ の大半円と $C_r$ からなる、原点を避ける閉経路を用いる。内部には極がない。大円弧上で $|e^{iz}|\le1$ より積分は $O(R^{-1})$。よって (2) から

$$
\lim_{r\to0,R\to\infty}\left(\int_{-R}^{-r}f(x)dx+\int_r^Rf(x)dx\right)=\pi.
$$

実部は偶関数なので $\boxed{\int_0^\infty\frac{1-\cos x}{x^2}dx=\frac\pi2}$。

### 問題3
(1) $f=u+iv$ とする。$f$ の正則性から $u_x=v_y,u_y=-v_x$、$\overline f$ の正則性から $u_x=-v_y,u_y=v_x$。従ってすべての一階偏導関数が零となり、$f$ は定数。

(2) $|f|=c$ とする。$c=0$ なら明らか。$c>0$ なら $\overline f=c^2/f$ は正則なので (1) を適用できる。

(3) $C=0$ なら最大絶対値の原理から $f\equiv0$ となり、非定数性に反する。従って $\boxed{C>0}$。

(4) 零点がないと仮定すれば $1/f$ も $D$ で正則。最大絶対値の原理を $f,1/f$ に適用すると $|f|\le C$ かつ $1/|f|\le1/C$。従って $|f|=C$ となり、(2) より $f$ は定数となる。矛盾だから円板内部に零点がある。

