---
sidebar_label: 2021年7月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Contour-Integration
  - Mathematics.Vector-Calculus.Green-Theorem
---
# 京都大学 情報学研究科 システム科学専攻 2021年7月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$\mathbb C,\mathbb R$ は複素数・実数全体とする。$\overline z,\operatorname{Im}z$ は共役複素数と虚部を表す。

### 問題1
(1-1) 偏角が $\pi/4$ である複素数の例を一つ挙げよ。

(1-2) $2\tan^{-1}(1/3)+\tan^{-1}(1/7)$ の値を求めよ。

(2) $a>0$ とする。留数定理を用いて $\int_{-\infty}^\infty|a+ix|^{-2}\,dx$ を求めよ。

### 問題2
(1) $\omega_1,\omega_2\in\mathbb C$ について、$\omega_1\omega_2\ne0$ かつ $\operatorname{Im}(\omega_2/\omega_1)\ne0$ が、$\omega_1,\omega_2$ が $\mathbb R$ 上線形独立であるための必要十分条件であることを示せ。

(2) $\mathbb C$ 上の関数 $f$ に対し $f(z+\omega)=f(z)$ がすべての $z$ で成り立つとき、$\omega$ を周期と呼ぶ。$\mathbb C$ 上の有理型関数 $f$ が、$\mathbb R$ 上線形独立な二つの周期 $\omega_1,\omega_2$ を持つ。$c\in\mathbb C$ を、平行四辺形

$$
\Lambda=\{c+s\omega_1+t\omega_2:s\in[0,1],\ t\in[0,1]\}
$$

の辺上に $f$ の極がないように選ぶ。$\Lambda$ 内のすべての極に関する留数の和を求めよ。

### 問題3
$C_r$ は原点を中心とする半径 $r$ の円を正の向きに一周する経路とする。

(1) $\int_{C_r}\overline z\,dz$ を求めよ。

(2) $S$ を有界で区分的 $C^1$ 級の境界を持つ $\mathbb C$ の領域とし、$\partial S$ を $S$ が左側になる向きにとる。面積 $|S|$ について

$$
|S|=\frac1{2i}\int_{\partial S}\overline z\,dz
$$

を示せ。必要なら Green の定理

$$
\iint_D(Q_x-P_y)\,dx\,dy=\int_{\partial D}(P\,dx+Q\,dy)
$$

を用いてよい。ここで $D\subset\mathbb R^2$ は同様の境界を持つ有界領域、$P,Q$ は $\overline D$ 上 $C^1$ 級とする。

(3) $f(z)=z^2/(z-1)$ による $C_r$ の像を $\gamma_r$ とする。$r>2$ のとき $\gamma_r$ は滑らかな閉曲線である。この曲線が囲む図形の面積を求めよ。

#### 题目描述

$i$ 为虚数单位，$\mathbb C,\mathbb R$ 为复数、实数集，$\overline z,\operatorname{Im}z$ 分别表示共轭与虚部。

问题 1：（1-1）举一个辐角为 $\pi/4$ 的复数。（1-2）求 $2\arctan(1/3)+\arctan(1/7)$。（2）对 $a>0$，用留数定理计算 $\int_{-\infty}^\infty|a+ix|^{-2}\,dx$。

问题 2：（1）证明 $\omega_1,\omega_2\in\mathbb C$ 在实数域上线性无关，当且仅当 $\omega_1\omega_2\ne0$ 且 $\operatorname{Im}(\omega_2/\omega_1)\ne0$。

（2）若处处有 $f(z+\omega)=f(z)$，称 $\omega$ 为周期。复平面上的亚纯函数 $f$ 有两个实线性无关的周期 $\omega_1,\omega_2$。取 $c$ 使平行四边形 $\Lambda=\{c+s\omega_1+t\omega_2:0\le s,t\le1\}$ 的边界上没有极点，求 $\Lambda$ 内全部极点的留数之和。

问题 3：$C_r$ 为以原点为圆心、半径 $r$ 的圆，取正向。

（1）求 $\int_{C_r}\overline z\,dz$。

（2）$S$ 是具有分段 $C^1$ 边界的有界平面区域，边界定向使区域在左侧，证明面积公式 $|S|=(2i)^{-1}\int_{\partial S}\overline z\,dz$。可以使用 Green 定理 $\iint_D(Q_x-P_y)\,dx\,dy=\int_{\partial D}(P\,dx+Q\,dy)$，其中 $P,Q$ 在闭区域上为 $C^1$ 函数。

（3）记 $f(z)=z^2/(z-1)$ 将 $C_r$ 映出的曲线为 $\gamma_r$。$r>2$ 时它是光滑闭曲线，求其围成的面积。

## **Kai**

### 問題1
(1-1) 例えば $\boxed{1+i}$。

(1-2) $\alpha=\arctan(1/3),\beta=\arctan(1/7)$ とすると $\tan2\alpha=3/4$、$\tan(2\alpha+\beta)=1$。また $0<2\alpha+\beta<\pi/2$ だから $\boxed{\pi/4}$。

(2) $|a+ix|^2=a^2+x^2$ である。上半円閉路に $1/(z^2+a^2)$ を適用すると、円弧積分は $R\to\infty$ で零となり、内部の単純極 $ia$ の留数は $1/(2ia)$。従って $\boxed{\int_{-\infty}^\infty dx/(a^2+x^2)=\pi/a}$。

### 問題2
(1) 零でない $\omega_1$ に対して実線形従属は $\omega_2=t\omega_1$ ($t\in\mathbb R$) と同値である。従って比の虚部が非零という条件が必要十分である。いずれかが零なら明らかに従属する。

(2) 向かい合う辺の積分は周期性と逆向きのため相殺する。よって $\oint_{\partial\Lambda}f(z)\,dz=0$。留数定理から $\boxed{\sum_{a\in\Lambda}\operatorname{Res}(f,a)=0}$。

### 問題3
(1) $z=re^{it}$ とすれば $\overline z\,dz=ir^2dt$ だから $\boxed{2\pi ir^2}$。

(2) $z=x+iy$ とおくと

$$
\overline z\,dz=(x\,dx+y\,dy)+i(x\,dy-y\,dx).
$$

実部の閉曲線積分は完全微分なので零。Green の定理より虚部は $2i\iint_Sdx\,dy$ となり、所望の式を得る。

(3) $|z|=r$ 上では $\overline z=r^2/z$ なので

$$
\overline{f(z)}=\frac{r^4}{z(r^2-z)},\qquad
f'(z)=\frac{z(z-2)}{(z-1)^2}.
$$

従って

$$
|S|=\frac1{2i}\oint_{|z|=r}\frac{r^4(z-2)}{(r^2-z)(z-1)^2}\,dz.
$$

$z=r^2$ は円外であり、内部は $z=1$ の二位の極のみ。その留数は

$$
\left.\frac d{dz}\frac{r^4(z-2)}{r^2-z}\right|_{z=1}
=\frac{r^4(r^2-2)}{(r^2-1)^2}.
$$

よって

$$
\boxed{|S|=\pi\frac{r^4(r^2-2)}{(r^2-1)^2}}.
$$

ここで $f(z)=f(w)$、$z\ne w$ なら $w=z/(z-1)$。$|z|=r>2$ では $|w|\le r/(r-1)<r$ なので円周上の像は自己交差せず、上の面積積分が適用できる。
