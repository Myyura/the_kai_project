---
sidebar_label: '2021年8月実施 数学3'
tags:
  - Tokyo-University
  - Mathematics.Complex-Analysis.Argument-Principle-and-Winding-Number
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Probability-Statistics.Bayesian-Statistics.Beta-Bernoulli-Model
---

# 東京大学 工学系研究科 2021年8月実施 数学3

## **Author**
[Miyake](https://miyake.github.io/exams/index.html), 祭音Myyura

## **Description**

[公式原題](https://www.t.u-tokyo.ac.jp/hubfs/graduate/2022/kakomon/2022_M_3.pdf)

### I.
1. $f(z)=z/[(z-i)(z-1)]$ を、$1$ の周囲を反時計回りに一周し、$i$ の周囲を時計回りに一周する図の閉路 $C$ で積分する。

![Equivalent contour with the original winding directions](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2022/kyotsu_202108_math_3_contour.svg)

図は原図と同じ巻き数をもつ模式図である。

2. $I_2=\int_0^{2\pi}d\theta/(10+8\cos\theta)$ について、(2.1) 単位円の反時計回り積分 $\oint G(z)dz$ に直して $G$ を求め、(2.2) 全特異点を求め、(2.3) 留数定理で $I_2$ を計算する。

### II.
$N\ge1$ 個の製品を順に観測する。各製品は互いに独立に確率 $\phi\in[0,1]$ で欠陥品となる。欠陥なら $v_i=1$、そうでなければ $v_i=0$ とし、$\boldsymbol v=(v_1,\ldots,v_N)$ の1の個数を $N_d(\boldsymbol v)$ と書く。

1. $\phi$ のもとで、この特定の列 $\boldsymbol v$ が生じる確率を求める。
2. $\phi$ の事前分布を $\operatorname{Beta}_{a,b}$（$a,b>1$）とし、列の条件付き確率を $Q(\boldsymbol v\mid\phi)$、周辺確率を $Q_{a,b}(\boldsymbol v)$ とする。観測後の $\phi$ の密度を表す。
3. 1.の尤度と $a=2,b=50$ を使い、$Q_{2,50}(\boldsymbol v)$ を求める。
4. その事後分布がベータ分布となることを示し、パラメータ $a',b'$ を求める。
5. 事後密度を最大にする $\phi$ を求める。

ここで $\operatorname{Beta}_{a,b}(x)=x^{a-1}(1-x)^{b-1}/B(a,b)$（$0\le x\le1$）、$B(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}dt$。ベイズの公式 $\pi(\phi\mid\boldsymbol v)=\pi(\phi)Q(\boldsymbol v\mid\phi)/Q_{a,b}(\boldsymbol v)$ を利用する。

#### 题目描述

I. (1) 计算 $f(z)=z/[(z-i)(z-1)]$ 沿闭路 $C$ 的积分，其中 $C$ 逆时针绕 $1$ 一周、顺时针绕 $i$ 一周。
(2) 对 $I_2=\int_0^{2\pi}d\theta/(10+8\cos\theta)$，将它化为单位圆的逆时针积分 $\oint G(z)dz$ 并求 $G$；求全部奇点；用留数计算 $I_2$。

II. 独立观察 $N\ge1$ 件产品，每件以概率 $\phi\in[0,1]$ 为次品。次品记 $v_i=1$，否则记 $0$，$N_d(\boldsymbol v)$ 为指定序列中 $1$ 的个数。
(1) 求这一指定序列的概率。
(2) 先验密度为 $\operatorname{Beta}_{a,b}(\phi)$（$a,b>1$），用似然 $Q(\boldsymbol v\mid\phi)$ 与边缘概率 $Q_{a,b}(\boldsymbol v)$ 表示后验密度。
(3) 使用(1)的似然及 $a=2,b=50$ 求 $Q_{2,50}(\boldsymbol v)$。
(4) 证明此时后验仍为 Beta 分布，求参数 $a',b'$。
(5) 求后验密度的最大值点。
这里 $\operatorname{Beta}_{a,b}(x)=x^{a-1}(1-x)^{b-1}/B(a,b)$、$B(a,b)=\int_0^1t^{a-1}(1-t)^{b-1}\,dt$，可用 Bayes 公式。

## **Kai**

### I

#### 1

二つの極はともに一位で、留数はそれぞれ

$$
R_1=\frac1{1-i}=\frac{1+i}2,\qquad
R_i=\frac i{i-1}=\frac{1-i}2.
$$

経路の $1$ に対する巻き数は $1$、$i$ に対する巻き数は $-1$ なので、

$$
\boxed{I_1=2\pi i(R_1-R_i)=-2\pi}.
$$

#### 2.1–2.3

$z=e^{i\theta}$ とおくと $d\theta=dz/(iz)$、$2\cos\theta=z+z^{-1}$ だから、

$$
I_2=\oint_{|z|=1}\frac{-i}{4z^2+10z+4}\,dz,
\qquad
\boxed{G(z)=\frac{-i}{2(z+2)(2z+1)}}.
$$

特異点は $\boxed{-2,-1/2}$ で、いずれも一位の極である。単位円内は $-1/2$ のみで、その留数は $-i/6$ なので、

$$
\boxed{I_2=2\pi i\left(-\frac i6\right)=\frac\pi3}.
$$

### II

#### 1–2

$k=N_d(\boldsymbol v)$ とおく。各観測は独立だから、この特定の列の確率は

$$
\boxed{Q(\boldsymbol v\mid\phi)=\phi^k(1-\phi)^{N-k}}.
$$

Bayes の公式より、

$$
\boxed{\pi(\phi\mid\boldsymbol v)
=\frac{\operatorname{Beta}_{a,b}(\phi)Q(\boldsymbol v\mid\phi)}{Q_{a,b}(\boldsymbol v)}},
\qquad
Q_{a,b}(\boldsymbol v)=\int_0^1\operatorname{Beta}_{a,b}(\phi)Q(\boldsymbol v\mid\phi)\,d\phi.
$$

#### 3–4

$a=2,b=50$ と尤度を代入すると、

$$
\boxed{Q_{2,50}(\boldsymbol v)
=\frac{B(k+2,N-k+50)}{B(2,50)}
=\frac{50\cdot51\,(k+1)!(N-k+49)!}{(N+51)!}}.
$$

従って事後密度は

$$
\frac{\phi^{k+1}(1-\phi)^{N-k+49}}{B(k+2,N-k+50)},
$$

すなわち $\boxed{\operatorname{Beta}(a',b'),\quad a'=k+2,\ b'=N-k+50}$ である。

#### 5

事後密度の対数を微分すると、

$$
\frac{k+1}{\phi}-\frac{N-k+49}{1-\phi}=0
\quad\Longrightarrow\quad
\boxed{\phi_{\rm MAP}=\frac{k+1}{N+50}}.
$$

対数密度の二階導関数は常に負で、両端では密度が零になるため、これは唯一の最大点である。
