---
comments: false
description: 東京大学 大学院 理学系研究科 天文学専攻 2023年度 天文学
keywords: Tokyo-University, 2023
---

## Source
東京大学 大学院 理学系研究科 天文学専攻 2023年度 天文学

## Description

## Kai
### 問 1.
#### (a)
$t'$ 秒間に検出される光子イベント数の平均は $nt'$ であるから、
式 (1) より、

$$
\begin{align}
p(t')
&= \frac{(nt')^0}{0!} e^{-nt'}
\\
&= e^{-nt'}
\end{align}
$$

がわかる。

#### (b)
式 (2) の両辺を $t'$ で微分すると、

$$
\begin{align}
\frac{dp(t')}{dt'} = - g(t')
\end{align}
$$

となるので、

$$
\begin{align}
g(t) 
&= - \frac{dp(t)}{dt}
\\
&= ne^{-nt}
\ \ \ \ \ \ \ \ ( \because \text{ (a) } )
\end{align}
$$

を得る。

#### (c)

$$
\begin{align}
\int_0^\infty t g(t) dt
&= n \int_0^\infty t e^{-nt} dt
\\
&= - \left[ t e^{-nt} \right]_0^\infty + \int_0^\infty e^{-nt} dt
\\
&= - \frac{1}{n} \left[ e^{-nt} \right]_0^\infty
\\
&= \frac{1}{n}
\end{align}
$$

### 問 2.
問 1. (b) の確率変数 $t$ の確率密度関数 $g(t)$ について、
$0 \leq t \leq T$ の確率が $1/2$ となるような $T$ を求める：

$$
\begin{align}
\frac{1}{2}
&= \int_0^T g(t) dt
\\
&= n \int_0^T e^{-nt} dt
\\
&= - \left[ e^{-nt} \right]_0^T
\\
&= 1 - e^{-nT}
\\
\therefore \ \ 
T
&= \frac{1}{n} \ln (2)
\end{align}
$$

これに $n=1/50$ \[回/年\] を代入すると、

$$
\begin{align}
T
&= 50 \times 0.693
\\
&= 34.65
\ \ \text{[年]}
\end{align}
$$

を得る。 $1987+34.65=2021.65$ であるから、求める $Y$ は $2021$ であろう。

### 問 3.
#### (a)
$X_s$ は期待値 $mt$ 分散 $mt$ の正規分布に従うとしてよい。
$X_s$ と $X_r$ が独立であるとすると、
与えられた性質 (正規分布の再生性) より、
$X_m$ は期待値 $mt$ 分散 $\sigma_r^2$ に従うことがわかるので、

$$
\begin{align}
h(X_m)
&= \frac{1}{\sqrt{2 \pi (mt + \sigma_r^2)}}
\exp \left( - \frac{(X_m-mt)^2}{2(mt+\sigma_r^2)} \right)
\end{align}
$$

#### (b)
$X_m$ の期待値と標準偏差はそれぞれ

$$
\begin{align}
mt &= 40t
\\
\sqrt{mt+\sigma_r^2} &= \sqrt{40t+400}
\end{align}
$$

であり、

$$
\begin{align}
\frac{40t}{\sqrt{40t+400}} = 30
\end{align}
$$

となる $t \ (\gt 0)$ を求めると $t=30$ を得る。これが求める露光時間であろう。

### 問 4.
$\alpha \ (=1,2,\cdots,k)$ 番目のセットの
$i \ (=1,2,\cdots,j)$ 番目の乱数 $q_i^{(\alpha)}$ とする。(5)式を考慮して、

$$
\begin{align}
z^{(\alpha)}
&= \frac{1}{\sqrt{\frac{1}{12}} \cdot \sqrt{j}}
\left( \sum_{i=1}^j q_j^{(\alpha)} - j \cdot \frac{1}{2} \right)
\\
&= 2 \sqrt{\frac{3}{j}} \sum_{i=1}^j q_j^{(\alpha)} - \sqrt{3j}
\end{align}
$$

とおくと、与えられた性質 (中心極限定理) より、これは標準正規分布に従う。
よって、さらに

$$
\begin{align}
w_\alpha
&= \sqrt{mt+\sigma_r^2} z^{(\alpha)} + mt
\end{align}
$$

とおくと、与えられた性質 (標準正規分布の線形変換) により、
これの期待値は $mt$ で分散は $mt+\sigma_r^2$ であることがわかる。
このようにして $w_1, w_2, \cdots, w_k$ を生成すればよい。