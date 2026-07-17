---
sidebar_label: '2025年8月実施 数学 第6問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-and-Statistics-Basics.Hypergeometric-Distribution
  - Probability-Statistics.Probability-and-Statistics-Basics.Conditional-Probability
  - Computer-Science.Information-Theory.Entropy
---

# 東京大学 工学系研究科 2025年8月実施 数学 第6問

## **Author**
GPT-5.6 Sol

## **Description**

壺 $A$ に赤玉が $R$ 個、緑玉が $G$ 個入っている。ここから同時に $n$ 個を取り出し、その中の赤玉の個数を確率変数 $X$ とする。ただし

$$
n\ge1,\qquad R\ge n,\qquad G\ge n
$$

とする。

1. $n=2,R=3,G=6$ のとき、$X$ の期待値と分散を求めよ。
2. $\Pr(X=k)$ を $R,G,n,k$ で表せ。
3. Entropy を
   $$
   H(X)=-\sum_{x=0}^{n}\Pr(X=x)\log\Pr(X=x)
   $$
   とする。$n=2,R+G=7$ のとき、$H(X)$ を最大にする $R$ と最大値を求めよ。
4. 取り出した赤玉を白く塗って壺 $B$ に、取り出した緑玉を白く塗って壺 $C$ に入れる。壺 $A$ に残った赤玉は $B$ に、緑玉は $C$ に移す。その後、$B$ から $X$ 個、$C$ から $n-X$ 個を取り出し、すべて白玉なら $Y=1$、そうでなければ $Y=0$ とする。$\Pr(X=k\mid Y=1)$ と $\Pr(X=k\mid Y=0)$ を求めよ。

## **Kai**

### I

$X$ は母集団サイズ $R+G$、成功数 $R$、標本サイズ $n$ の超幾何分布に従う。したがって、

$$
\mathbb E[X]=n\frac{R}{R+G},
$$

$$
\operatorname{Var}(X)
=n\frac{R}{R+G}\frac{G}{R+G}
\frac{R+G-n}{R+G-1}.
$$

$n=2,R=3,G=6$ を代入すると、

$$
\boxed{\mathbb E[X]=\frac23,\qquad
\operatorname{Var}(X)=\frac7{18}}
$$

となる。

### II

$R$ 個の赤玉から $k$ 個、$G$ 個の緑玉から $n-k$ 個を選ぶので、

$$
\boxed{
\Pr(X=k)=
\frac{\binom Rk\binom G{n-k}}{\binom{R+G}{n}}
}\qquad(0\le k\le n)
$$

である。

### III

$R+G=7$ かつ $R,G\ge2$ より、$R=2,3,4,5$ のみを調べればよい。確率分布は次の通りである。

| $R$ | $(\Pr(X=0),\Pr(X=1),\Pr(X=2))$ | $H(X)$ |
|---:|:---:|:---:|
| $2$ | $(10/21,10/21,1/21)$ | $\log21-\dfrac{20}{21}\log10$ |
| $3$ | $(2/7,4/7,1/7)$ | $\log7-\dfrac{10}{7}\log2$ |
| $4$ | $(1/7,4/7,2/7)$ | $\log7-\dfrac{10}{7}\log2$ |
| $5$ | $(1/21,10/21,10/21)$ | $\log21-\dfrac{20}{21}\log10$ |

数値的には中央の二つが約 $0.95570$、両端の二つが約 $0.85158$ である。したがって、

$$
\boxed{R=3,4}
$$

のとき最大となり、その値は

$$
\boxed{H_{\max}=\log7-\frac{10}{7}\log2}
$$

である。

### IV.1

$X=k$ が与えられたとき、壺 $B$ には白玉 $k$ 個と赤玉 $R-k$ 個があり、そこから $k$ 個を取る。また壺 $C$ には白玉 $n-k$ 個と緑玉 $G-(n-k)$ 個があり、そこから $n-k$ 個を取る。よって、

$$
\Pr(Y=1\mid X=k)
=\frac1{\binom Rk\binom G{n-k}}.
$$

II の確率と掛けると、

$$
\Pr(X=k,Y=1)
=\frac1{\binom{R+G}{n}},
$$

これは $k$ に依存しない。$k=0,1,\ldots,n$ を足し合わせると、

$$
\Pr(Y=1)=\frac{n+1}{\binom{R+G}{n}}.
$$

したがって、

$$
\boxed{\Pr(X=k\mid Y=1)=\frac1{n+1}}
$$

である。条件 $Y=1$ のもとでは $X$ は $0,1,\ldots,n$ 上の一様分布になる。

### IV.2

$$
\begin{aligned}
\Pr(X=k,Y=0)
&=\Pr(X=k)-\Pr(X=k,Y=1)\\
&=\frac{\binom Rk\binom G{n-k}-1}{\binom{R+G}{n}},
\end{aligned}
$$

また、

$$
\Pr(Y=0)=1-\frac{n+1}{\binom{R+G}{n}}
=\frac{\binom{R+G}{n}-(n+1)}{\binom{R+G}{n}}.
$$

ゆえに、

$$
\boxed{
\Pr(X=k\mid Y=0)
=\frac{\binom Rk\binom G{n-k}-1}
{\binom{R+G}{n}-(n+1)}
}
$$

となる。

## **Reference**

- [東京大学大学院工学系研究科 2026年度大学院入学試験問題 数学](https://www.t.u-tokyo.ac.jp/hubfs/admission/2026/M_J_E_2026.pdf)
