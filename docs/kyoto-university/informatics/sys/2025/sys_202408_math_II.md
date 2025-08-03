---
sidebar_label: "2024年8月実施 数学【II】"
tags:
  - Kyoto-University
  - Calculus
---
# 京都大学 情報学研究科 システム科学専攻 2024年8月実施 数学【II】

## **Author**
[AKIRA, 小红书:94184092292](https://www.xiaohongshu.com/discovery/item/688803a6000000002203ec0d?source=webshare&xhsshare=pc_web&xsec_token=ABtHY7I1RxAUjhEZPeviabm9avt5zS3kxeB1R-bm8HRVc=)

## **Description**
$e$ をネイピア数（自然対数の底）、$\mathbb{R}$ を実数全体からなる集合とする。また、ベクトル $\boldsymbol{x}$ の転置を $\boldsymbol{x}^\mathrm{T}$ で表す。

### 問題1
以下の設問に答えよ。

(1) 実数 $x > 0$ に対して $f(x) = x \log x$ とする。
- (i) $y = f(x)$ のグラフの概形を、極値をとる点を含めて $xy$ 平面上に描け。また、$f(x) = y$ となる $x > 0$ が一意に定まるような実数 $y$ の範囲を求めよ。
- (ii) $\int f(x) \, dx$ を求めよ。
- (iii) 設問 (i) で求めた範囲の $y$ について、$f(x) = y$ となる $x$ を $f^{-1}(y)$ で表す。$\int f^{-1}(y) \, dy$ を $y$ および関数 $f^{-1}$ を用いて表せ。

----------------------------

(2) $n$ を正の整数とする。実数 $c$ に対して数列 $a_1, a_2, \ldots$ が以下を満たすものとする。

$$
\begin{aligned}
a_1 &= c \\
a_{n+1} &= a_n + 1 - e^{a_n}, \quad n = 1, 2, \ldots
\end{aligned}
$$

- (i) $a_2 < a_1$ となるための $c$ の必要十分条件を求めよ。
- (ii) $c = 1/2$ とする。極限 $\displaystyle \lim_{n \to \infty} a_n$ を求めよ。極限が存在しない場合は、そのことを示せ。ただし $\sqrt{e} = 1.648\ldots$ を用いてもよい。

### 問題2
以下の設問に答えよ。

(i) $a, b$ を $b > a > 0$ を満たす定数とし、$2$ 次元ユークリッド空間内の楕円

$$
\left\{ (x, y) \in \mathbb{R}^2 \ \middle| \ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \right\}
$$

を考える。点 $P$ がこの楕円上を動くとき、点 $P$ と点 $(a, 0)$ の距離の最大値を求めよ。

-----------------------------------

(ii) $\boldsymbol{c} = (c_1, \ldots, c_n)^\mathrm{T} \neq \boldsymbol{0}$ を $n$ 次元ユークリッド空間の定数ベクトル、$d$ を定数とし、

$n$ 次元ユークリッド空間内の超平面

$$
\left\{ \boldsymbol{x} = (x_1, \ldots, x_n)^\mathrm{T} \in \mathbb{R}^n \ \middle| \ \boldsymbol{c}^\mathrm{T} \boldsymbol{x} = d \right\}
$$

を考える。原点からこの超平面までの距離を求めよ。ただし、

$$
\boldsymbol{0} = (0, \ldots, 0)^\mathrm{T} \in \mathbb{R}^n
$$

とする。

-------------------------------

(iii) 実数 $p, q$ に対して，

$$
V = \iint_D \left( 2 - e^{p} x^2 - e^{q} y^2 \right) dx dy
$$

を求めよ。ただし，

$$
D = \left\{ (x, y) \in \mathbb{R}^2 \ \middle| \ e^{p} x^2 - e^{q} y^2 \leq 2 \right\}
$$

とする。

## **Kai**
### 問題1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_math_II_p1.jpg" width="700" alt=""/>
</figure>

### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202408_math_II_p2.jpg" width="700" alt=""/>
</figure>