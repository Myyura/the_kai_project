---
comments: false
title: 京都大学 情報学研究科 システム科学専攻 2018年8月実施 専門科目 確率統計
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 システム科学専攻 2018年8月実施 専門科目 確率統計

## **Author**
uogxtc

## **Description**
### 問題1
確率変数 $Z_i = (X_i, Y_i), i = 1, \ldots, n$ は独立に次のように定義される確率分布に従う。
各 $X_i, Y_i$ は $0$ または $1$ を値にとり、 $P(X_i = 1) = \alpha$, $P(Y_i = 1 | X_i) = \beta X_i$ とする（一般に $X_i$ と $Y_i$ は独立ではない）。
ただし $n$ は正の整数、 $0 < \alpha < 1$, $0 < \beta < 1$ は未知パラメータである。
このとき以下の設問に答えなさい。

(1) 同時確率 $P(X_i = x, Y_i = y)$ を $(x, y)$ の取りうるすべての値について求めなさい。ただし $\alpha, \beta$ を用いること。

(2) $Z_i, i = 1, \ldots, n$ をすべて用いて、 $\alpha, \beta$ の最尤推定量 $\hat{\alpha}_n, \hat{\beta}_n$ を求めなさい。

(3) 制約条件 $\alpha + \beta = 1$ を仮定する。このとき、 $Z_i, i = 1, \ldots, n$ をすべて用いて、 $\alpha$ の最尤推定量 $\hat{\alpha}_n$ を求めなさい。

(4) 設問 (3) の $\hat{\alpha}_n$ は極限 $n \to \infty$ においてある値に確率収束する。その値を求めなさい。

### 問題2
袋の中に $N$ ($N = 1, 2, \ldots$) 個のボールがあり、そのうち $m$ ($m \in \{0, 1, \ldots, N\}$) 個は赤色、残りは白色である。
袋から、ランダムかつ同時に $n$ ($n \in \{1, \ldots, N\}$) 個取り出した際にその中で赤色であるボールの個数を確率変数 $X$ ($X \in \{0, 1, \ldots, n\}$) で表すことにする。以下の設問 (1), (2) に答えなさい。

(1) $X = k$ ($k = 0, 1, \ldots, n$) となる確率 $P(X = k)$ を求めなさい。

(2) 確率変数 $X$ の期待値を求めなさい。

袋の中に白いボールが多数入っている。
その個数が分からないので未知パラメータ $N$ とおき、これを以下の手続きで見積もることにした。まず、袋の中からランダムかつ同時に $m$ 個を取り出し赤く塗った。それらを袋に戻しよくかき混ぜた。
その後、今度は袋の中からランダムかつ同時に $n$ 個のボールを取り出したところ、そのうち $k$ ($k \in \{0, 1, \ldots, n\}$) 個が赤く塗られていた。
$N, m, n$ は正の整数である。以下の設問 (3) ~ (5) に答えなさい。

(3) $N$ に関する尤度 $L(N)$ を求めなさい。

(4) 設問 (3) の $L(N)$ について、 $L(N)/L(N-1)$（ただし $N = 2, 3, \ldots$）を計算しなさい。

(5) $N$ の最尤推定値を求めなさい。ただし $k \geq 1$ とする。


## **Kai**
### 問題1
#### (1)
The posterior is given by

$$
\Pr(X_i=x,Y_i=y)=\Pr(Y_i=y\mid X_i=x)\Pr(X_i=x),
$$

and we easily obtain that

$$
\begin{aligned}
&\mathrm{Pr}(X_{i}=1,Y_{i}=1)=\beta\alpha,\\
&\mathrm{Pr}(X_{i}=1,Y_{i}=0)=(1-\beta)\alpha,\\
&\mathrm{Pr}(X_{i}=0,Y_{i}=1)=0,\\
&\mathrm{Pr}(X_{i}=0,Y_{i}=0)=1-\alpha,
\end{aligned}
$$

which is exactly

$$
\begin{aligned}
\Pr(X_{i}=x,Y_{i}=y)=(\beta\alpha)^{xy}\left[(1-\beta)\alpha\right]^{x(1-y)}0^{(x-1)y}(1-\alpha)^{(1-x)(1-y)}
\end{aligned}
$$

#### (2)
The likelihood is

$$
L=\prod_{i=1}^n\Pr(Z_i),
$$

and the log-likelihood is

$$
\log L=\sum_{i=1}^{n} \Big\{ X_{i}Y_{i}\log(\alpha\beta)+X_{i}(1-Y_{i})\log[(1-\beta)\alpha]
+(X_{i}-1)Y_{i}\log0+(1-X_{i})(1-Y_{i})\log(1-\alpha) \Big\}
$$

Let $\frac{\partial\log L}{\partial\alpha}=0$ and we get

$$
(1-\alpha)\sum_{i=1}^nX_i-\alpha\sum_{i=1}^n(1-X_i)(1-Y_i)=0,
$$

$$
\hat{\alpha}_n=\frac{\sum_{i=1}^nX_i}{\sum_{i=1}^n(1-Y_i+X_iY_i)}.$$

Similarly, $\frac{\partial\log L}{\partial\beta}=0$ gives

$$
(1-\beta)\sum_{i=1}^nX_iY_i-\beta\sum_{i=1}^nX_i(1-Y_i)=0,
$$

$$
\hat{\beta}_n=\frac{\sum_{i=1}^nX_iY_i}{\sum_{i=1}^nX_i}.
$$

#### (3)
Substitute $\beta$ by $1- \alpha$ in the log-likelihood and we have

$$
\log L=\sum_{i=1}^{n} \Big\{ X_{i}Y_{i}\log(\alpha(1-\alpha))+X_{i}(1-Y_{i})\log(\alpha^{2})\\+(X_{i}-1)Y_{i}\log 0+(1-X_{i})(1-Y_{i})\log(1-\alpha) \Big\}.
$$

Let $\frac{\partial\log L}{\partial\alpha}=0$ and then we get

$$
\hat{\alpha}_n=\frac{2\sum X_i-\sum X_iY_i}{n+\sum X_i-\sum Y_i-\sum X_iY_i}.
$$

#### (4)
When $n \to \infty$,

$$
\begin{aligned}
&\sum X_{i}\to n\mathbb{E}[X_i=1]=\alpha n\\
&\sum Y_{i}\to n\mathbb{E}[Y_i=1]=\alpha\beta n\\
&\sum X_{i}Y_{i}\to n\mathbb{E}[X_i=1,Y_i=1]=\alpha \beta n
\end{aligned}
$$

Since $\hat{\alpha}_{n}$ converges, it converges to

$$
\lim\limits_{n\to\infty}\hat{\alpha}_n=\frac{2\alpha n-\alpha\beta n}{n+\alpha n-2\alpha\beta n}=\frac{2\alpha-\alpha\beta}{1+\alpha-2\alpha\beta}.
$$

### 問題2
#### (1)
(Readers may refer to hypergeometric distribution, 超几何分布，超幾何分布.)

$$
\Pr(X=k)=\frac{\binom{m}{k}\binom{N-m}{n-k}}{\binom{N}{n}}.
$$

#### (2)

$$
\mathbb{E}[X]=\sum_{i=1}^n\Pr(X=k)\cdot k
$$

Note that

$$
\begin{aligned}
k\binom{m}{k}&=\frac{m!}{(k-1)!(m-k)!}\\
&=\frac{(m-1)!m}{(k-1)!(m-k)!}\\
&=m\binom{m-1}{k-1}.
\end{aligned}
$$

Then

$$
k \cdot \Pr(X=k)=\frac{m\binom{m-1}{k-1}\binom{N-m}{n-k}}{\binom{N}{n}}=\frac{m\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\frac{N}{n}\binom{N-1}{n-1}}.
$$

The expectation becomes

$$
\begin{aligned}
\mathbb{E}[X]& =\sum_{k=1}^n\frac{mn}{N}\bigg[\frac{\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\binom{N-1}{n-1}}\bigg] \\
&=\frac{mn}N\underbrace{\sum_{k=1}^n\left[\frac{\binom{m-1}{k-1}\binom{(N-1)-(m-1)}{(n-1)-(k-1)}}{\binom{N-1}{n-1}}\right]}_{=1,\text{ as all probabilities sum to 1.}} \\
&=\frac{mn}{N}.
\end{aligned}
$$

#### (3)
(For (3) and (4), readers may refer to Mark-recapture method, 標識再捕法.)

The likelihood is

$$
L(N)=\underbrace{\Pr(X=k)}_{\text{ function of } n,k \text{ and parameterized by }N}=\frac{\binom{m}{k}\binom{N-m}{n-k}}{\binom{N}{n}}.
$$

#### (4)

$$
\begin{aligned}
\frac{L(N)}{L(N-1)}& =\frac{\binom{N-m}{n-k}}{\binom{N-m-1}{n-k}}\cdot\frac{\binom{N-1}{n}}{\binom{N}{n}} \\
&=\frac{N-m}{N-m-n+k}\cdot\frac{N-n}{N}.
\end{aligned}
$$

#### (5)
$L(N)$ is positive.

When $L(N)/L(N-1) \leq 1$,

$$
\begin{aligned}
&\frac{N-m}{N-m-n+k} \cdot \frac{N-n}{N}\leq1,\\
&\Rightarrow\quad N \geq \frac{mn}{k},
\end{aligned}
$$

$L(N)$ monotonely decreases.

When $L(N)/L(N-1) \geq 1$, i.e.,

$$
N \leq \frac{mn}{k},
$$

$L(N)$ monotonely increases.

So the maximum likelihood estimate of $N$ would be $\hat{N}=\lfloor mn/k\rfloor$ , floored as $N$ is a positive integer.
