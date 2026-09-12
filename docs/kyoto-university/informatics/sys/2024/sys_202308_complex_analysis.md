---
sidebar_label: 2023年8月実施 複素関数論
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Cauchy-Integral-Formula
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Rouche-Theorem
---
# 京都大学 情報学研究科 システム科学専攻 2023年8月実施 複素関数論

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$\pi$ は円周率、$e$ は自然対数の底とする。

### 問題1
(1) 方程式 $\sum_{n=1}^5z^n=-1$ のすべての解を $a+bi$ ($a,b\in\mathbb R$) の形で求めよ。

(2) $f$ は領域 $D$ で正則であり、$D$ 内の単一閉曲線 $C$ とその内部の点 $a$ に対して

$$
f(a)=\frac1{2\pi i}\int_C\frac{f(z)}{z-a}\,dz
$$

が成り立つとする。$f'(a)=\frac1{2\pi i}\int_C f(z)/(z-a)^2\,dz$ が成り立つか。成り立てば複素微分の定義に基づいて証明し、成り立たなければ反例を示せ。

### 問題2
$f(z)=e^z/(z-1)$ とする。

(1) $|z-1|>0$ における $z=1$ 中心の Laurent 展開

$$
f(z)=\sum_{n=0}^\infty a_n(z-1)^n+\sum_{n=1}^\infty b_n(z-1)^{-n}
$$

の係数と $z=1$ における留数を求めよ。

(2) $|z|>1$ における $z=0$ 中心の Laurent 展開

$$
f(z)=\sum_{k=0}^\infty c_kz^k+\sum_{k=1}^\infty d_kz^{-k}
$$

について $d_1$ を求めよ。

(3) $|z|<1$ における同じ形の展開について、$d_k=0$ ($k\ge1$) の理由を述べ、(1) の係数との次の関係を証明せよ。

$$
c_k=\frac1{k!}\left\{\sum_{n=k}^\infty a_n(-1)^{n-k}\frac{n!}{(n-k)!}
+\sum_{n=1}^\infty b_n(-1)^n\frac{(n+k-1)!}{(n-1)!}\right\},\quad k=0,1,\ldots.
$$

### 問題3
曲線 $\partial D$ は区分的に滑らかな Jordan 曲線で、$\overline D=D\cup\partial D$ の近傍で $f,g$ が正則とする。$\partial D$ 上で $|f(z)|>|g(z)|$ なら、$f$ と $f+g$ は $D$ 内に重複度込みで同じ個数の零点を持つ（Rouché の定理）。これを踏まえて答えよ。

(1) $8z^3-6z^2+z$ の零点のうち $|z|<1$ にあるものの個数を求めよ。

(2) $z^6-10z^2+z+1$ の零点のうち $1\le|z|<2$ にあるものの個数を求めよ。

#### 题目描述

$i$ 为虚数单位，$\pi$ 为圆周率，$e$ 为自然对数的底。

问题 1：（1）以 $a+bi$（$a,b\in\mathbb R$）的形式列出 $\sum_{n=1}^5z^n=-1$ 的全部解。

（2）$f$ 在区域 $D$ 内全纯，对 $D$ 内的简单闭曲线 $C$ 及内部点 $a$，有 $f(a)=(2\pi i)^{-1}\int_C f(z)/(z-a)\,dz$。判断 $f'(a)=(2\pi i)^{-1}\int_C f(z)/(z-a)^2\,dz$ 是否成立；成立则依据复导数定义证明，否则给出反例。

问题 2：令 $f(z)=e^z/(z-1)$。

（1）求 $0<|z-1|$ 上的 Laurent 展开 $\sum_{n=0}^\infty a_n(z-1)^n+\sum_{n=1}^\infty b_n(z-1)^{-n}$ 的系数及 $z=1$ 处的留数。

（2）在 $|z|>1$ 上写成 $f(z)=\sum_{k=0}^\infty c_kz^k+\sum_{k=1}^\infty d_kz^{-k}$，求 $d_1$。

（3）考虑 $|z|<1$ 内相同形式的展开，说明为什么所有 $d_k=0$，并证明对 $k\ge0$：

$$
c_k=\frac1{k!}\left\{\sum_{n=k}^\infty a_n(-1)^{n-k}\frac{n!}{(n-k)!}
+\sum_{n=1}^\infty b_n(-1)^n\frac{(n+k-1)!}{(n-1)!}\right\}.
$$

问题 3：允许使用 Rouché 定理：若 $\partial D$ 是分段光滑 Jordan 曲线，$f,g$ 在闭区域附近全纯，且边界上 $|f|>|g|$，则 $f$ 和 $f+g$ 在 $D$ 内的零点数（计重数）相同。

（1）求 $8z^3-6z^2+z$ 在 $|z|<1$ 内的零点数。

（2）求 $z^6-10z^2+z+1$ 在 $1\le|z|<2$ 内的零点数。

## **Kai**

### 問題1
(1) $z=1$ は解でない。等比数列の和より $z^6=1$ かつ $z\ne1$。従って

$$
\boxed{z=-1,\quad\frac12\pm\frac{\sqrt3}2i,\quad-\frac12\pm\frac{\sqrt3}2i}.
$$

(2) 成り立つ。$|h|$ を十分小さくとると

$$
\frac{f(a+h)-f(a)}h=\frac1{2\pi i}\int_C\frac{f(z)}{(z-a-h)(z-a)}\,dz.
$$

$\delta=\min_{z\in C}|z-a|>0$ であり、$|h|<\delta/2$ のとき右辺の核は $h\to0$ で $(z-a)^{-2}$ に一様収束する。よって積分と極限を交換して所望の公式を得る。

### 問題2
(1) $w=z-1$ とすれば $f=e\,e^w/w$ だから

$$
\boxed{a_n=\frac e{(n+1)!},\quad b_1=e,\quad b_n=0\ (n\ge2),\quad\operatorname{Res}(f,1)=e}.
$$

(2) $|z|>1$ で $1/(z-1)=\sum_{j\ge1}z^{-j}$。$e^z$ の級数との積の $z^{-1}$ 係数は $\sum_{m\ge0}1/m!=e$ なので $\boxed{d_1=e}$。

(3) $f$ は単位円内で正則だから Taylor 展開を持ち、負の次数の係数はすべて零である。$z=1$ 中心の級数を $k$ 回微分して $z=0$ を代入し、$c_k=f^{(k)}(0)/k!$ とすれば

$$
\frac{d^k}{dz^k}(z-1)^n\Big|_{z=0}=(-1)^{n-k}\frac{n!}{(n-k)!},
$$

$$
\frac{d^k}{dz^k}(z-1)^{-n}\Big|_{z=0}=(-1)^n\frac{(n+k-1)!}{(n-1)!}
$$

より所望の関係式を得る。なお、この場合は $c_k=-\sum_{j=0}^k1/j!$ とも書ける。

### 問題3
(1) $|z|=1$ で $|-6z^2+z|\le7<8=|8z^3|$。Rouché の定理より零点数は $\boxed3$。

(2) $|z|=2$ では $|-10z^2+z+1|\le43<64=|z^6|$ なので内部に $6$ 個。$|z|=1$ では $|z^6+z+1|\le3<10=|-10z^2|$ なので内部に $2$ 個。境界に零点はないため、求める数は $\boxed{6-2=4}$。
