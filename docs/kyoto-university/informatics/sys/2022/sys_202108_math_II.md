---
sidebar_label: "2021年8月実施 数学【II】"
tags:
  - Kyoto-University
  - Calculus
---
# 京都大学 情報学研究科 システム科学専攻 2021年8月実施 数学【II】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/68804b1d00000000220332c4?xsec_token=ABD2nmTyzV9BsHCYcB91Nc8sv7PkkHrxsq6neCoP3jUIM=)

## **Description**
### 問1

$\mathbb{R}$ を実数全体からなる集合とし、$e$ をネイピア数（自然対数の底）とする。実数 $M > 0$ に対して $xy$-平面上の領域 $D(M)$ を

$$
D(M) = \{ (x,y) \in \mathbb{R}^2 : y > 0, \; Mx > y^2 \}
$$

とし、以下の積分を考える。ただし $\alpha, \beta$ は実数とする。

$$
I_{\alpha,\beta}(M) = \iint_{D(M)} \left(1 + \frac{y^2}{x} \right)^{-\alpha} \left( 1 + \frac{x}{y^2} \right)^{-1/2} e^{-\beta(x+y^2) - \sqrt{x+y^2} + y} \, dxdy
$$

この積分を求めるために、以下の写像によって変数 $(x,y)$ を $(z,w)$ に変換することを考える。

$$
z = x + y^2, \quad w = \frac{y^2}{x + y^2}
$$

以下の設問に答えよ。なお、以降では自然数 $n \geq 1$ について次式が成り立つことを用いて良い。

$$
\int_0^{\infty} t^{n-1}e^{-t}dt = (n-1)!
$$

(i) 上記の写像による領域 $D(M)$ の $zw$-平面上の像 $E(M)$ を求めよ。

(ii) 以下の空欄に入る式を $z, w, \alpha, \beta$ を用いて表せ。

$$
I_{\alpha,\beta}(M) = \iint_{E(M)} \; \boxed{\quad \quad} \; dzdw
$$

(iii) $I_{0,0}(1/3) = \frac{1}{2} \int_0^{1/4} \int_{0}^{\infty} e^{-(1-\sqrt{w})\sqrt{z}} \sqrt{z} \, dzdw$ の値を求めよ。

(iv) 任意の $\beta > 0$ に対して

$$
\lim_{M \to \infty} \frac{\log I_{-1,\beta}(M)}{\log \log M} = 1
$$

が成立つことを示せ。

### 問2

$x,y,z$ を直交座標系とする3次元ユークリッド空間における2つの楕円体

$$
E : \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,
$$

$$
E' : \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 3
$$

を考える。ただし、$a,b,c$ は正の定数とする。以下の設問に答えよ。

(i) $E$ 上の点 $P(p,q,r)$ における $E$ の接平面の方程式を求めよ。

(ii) $E$ の外部の $1$ 点 $Q(l,m,n)$ を考える。$Q$ を通る $E$ の接平面すべてを考え、それらの接点の集合を $W$ とする。$W$ は、ある平面 $S$ に含まれる（図1）。平面 $S$ の方程式を求めよ。

設問(ii)で求めた $S$ によるの切断面は楕円となる。以下ではこの楕円を $R$ とする。

(iii) 設問(ii)の点 $Q$ が楕円体 $E'$ 上にあるとき、$R$ の中心座標 $T(x_0,y_0,z_0)$ を求めよ。

(iv) 設問(ii)の点 $Q$ が楕円体 $E'$ 上を動くとき、設問(iii)で示した $R$ の中心座標について、各成分の積

$$
J = x_0 y_0 z_0
$$

が最大となる点 $Q(l,m,n)$ とそのときの $J$ の値を求めよ。


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1.png" width="300" alt=""/>
</figure>


## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1_s_1.jpg" width="700" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1_s_2.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p2_s.jpg" width="700" alt=""/>
</figure>