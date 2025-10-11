---
sidebar_label: "2017年8月実施 専門科目 確率統計"
tags:
  - Kyoto-University
  - Probability-And-Statistics
---
# 京都大学 情報学研究科 システム科学専攻 2017年8月実施 専門科目 確率統計

## **Author**
[uogxtc](https://zhuanlan.zhihu.com/p/697551899), 祭音Myyura

## **Description**
### 問題1
確率変数 $X_1, \ldots, X_n, Y_1, \ldots, Y_m$ は独立に正規分布に従い、 $X_i \sim N(a\theta, \sigma^2)$, $Y_j \sim N(b\theta, \sigma^2)$, $i = 1, \ldots, n$, $j = 1, \ldots, m$ とする。
ただし、 $N(\mu, \sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表す。
ここで $n, m$ は正の整数、 $a, b$ は正の定数で既知とし、 $\theta, \sigma^2$ は未知パラメータである。このとき以下の設問に答えなさい。

(1) $\theta, \sigma^2$ について、 $X_1, \ldots, X_n, Y_1, \ldots, Y_m$ をすべて用いた最尤推定量を求めなさい。

(2) 定数 $\alpha, \beta$ を用いて $\tilde{\theta} = \alpha \bar{X} + \beta \bar{Y}$ と定義する。ただし $\bar{X} = (X_1 + \cdots + X_n)/n$, $\bar{Y} = (Y_1 + \cdots + Y_m)/m$ である。
$\tilde{\theta}$ の期待値 $E(\tilde{\theta})$ と分散 $V(\tilde{\theta})$ を求めなさい。

(3) $\tilde{\theta}$ が $\theta$ の不偏推定量となるために $\alpha, \beta$ が満たす条件を求めなさい。
また、不偏推定量となる $\tilde{\theta}$ が $V(\tilde{\theta})$ を最小にするときの $\alpha, \beta$ の値を求めなさい。

### 問題2
あるコインを投げると、確率 $p \ (0 < p < 1)$ で表、確率 $q \ (= 1 - p)$ で裏が出る。
このコインを表が出るまで連続して投げ続ける。
ただし、毎回のコイン投げは独立な試行である。
初めて表が出るまでに投げた回数（表が出た試行を含む）を確率変数 $T$ で表す。
以下の設問に答えなさい。

(1) $T = n$ ($n = 1, 2, \ldots$) となる確率 $P(T = n)$ を求めなさい。ただし、 $P(\cdot)$ は確率を表す。

(2) 確率変数 $T$ の期待値（平均）と分散を求めなさい。

あるスロットマシン（窓は一つとする）を引くと、 $m$ 種類（$m = 1, 2, \ldots$）の異なる図柄が等確率で出る。
便宜上、 $m$ 種類の図柄のそれぞれに $\{1, 2, \ldots, m\}$ の異なる番号を付ける。
このスロットマシンを連続して引くことを考え、 $n$ 回目（$n = 1, 2, \ldots$）に引いた際に出た図柄の番号を確率変数 $X_n$ $\in \{1, 2, \ldots, m\}$ で表す。
ただし、スロットマシンを引く試行は独立である。この時、 $m$ 種類の図柄のうち異なる図柄が初めて $i$ 種類（$i = 1, 2, \ldots, m$）になるまでスロットマシンを引いた回数を $T_{m,i}$ と表すと、

$$
T_{m,i} = \begin{cases} 
1 & (i = 1) \\ 
\min \{ n > T_{m,i-1} \mid X_n \neq X_j; j = 1, \ldots, n-1 \} & (i = 2, \ldots, m) 
\end{cases}
$$

と再帰的に定義できる。以下の設問に答えなさい。

(3) 確率変数 $U_{m,i}$ ($i = 2, \ldots, m$) として、

$$
U_{m,i} \equiv T_{m,i} - T_{m,i-1}
$$

とする。
$U_{m,i} = k$ ($k = 1, 2, \ldots$) となる確率 $P(U_{m,i} = k)$ を求めなさい。

(4) すべての図柄が初めて出るまでスロットマシンを引いた回数 $T_{m,m}$ に対し、その期待値（平均）が以下の式で与えられることを示しなさい。

$$
1 + m \sum_{j=1}^{m-1} \frac{1}{j}
$$

## **Kai**
### 問題 1
#### (1)
The likelihood function is

$$
\begin{aligned}
L(\theta,\sigma^{2})&=\prod_{i=1}^nf_X(X_i)\prod_{i=1}^mf_Y(Y_i)\\
&=\prod_{i=1}^n\frac1{\sqrt{2\pi}\sigma}e^{-\frac{(x-a\theta)^2}{2\sigma^2}}\prod_{i=1}^m\frac1{\sqrt{2\pi}\sigma}e^{-\frac{(x-b\theta)^2}{2\sigma^2}},
\end{aligned}
$$

from which we know that the log-likelihood is:

$$
\begin{aligned}
\log L&=-(n+m)\log \sigma-(n+m)\log\sqrt{2\pi}\\
&-\bigg\{\sum_{i=1}^{n}\frac{(a\theta-X_{i})^{2}}{2\sigma^{2}}+\sum_{j=1}^{m}\frac{(b\theta-Y_{j})^{2}}{2\sigma^{2}}\bigg\}.
\end{aligned}
$$

Set $\frac{\partial\log L}{\partial\sigma}=0$ , we will find

$$
\begin{aligned}
\frac{\partial\log L}{\partial\sigma}& =-\frac{n+m}{\sigma}-\left \{ \sum_{i=1}^{n}(a\theta-X_{i})^{2} +\sum_{j=1}^m(b\theta-Y_j)^2\right\}\cdot\frac12\cdot(-2)\frac1{\sigma^3} \\
&=0 \\
\Rightarrow\quad\hat{\sigma}^2=& \frac{1}{n+m}\bigg\{\sum_{i=1}^{n}{(a\theta-X_{i})^{2}}+\sum_{j=1}^{m}{(b\theta-Y_{j})^{2}}\bigg\} 
\end{aligned}
$$

The MLE of $\theta$ is obtained in a similar way.

$$
\begin{aligned}
\frac{\partial\log L}{\partial\theta}&=-\frac{1}{2\sigma^{2}}\bigg\{\sum_{i=1}^{n}2(a\theta-X_{i})a+\sum_{j=1}^{m}2(b\theta-Y_{j})b\bigg\}=0\\
&\Rightarrow\quad\hat{\theta}=\frac{a\sum_{i=1}^{n}X_{i}+b\sum_{j=1}^{m}Y_{j}}{na^{2}+mb^{2}}.
\end{aligned}
$$

#### (2)

$$
\mathbb{E}[\bar{X}]=\mathbb{E}\left[\dfrac{X_1+\cdots+X_n}{n}\right]\overbrace{=}^{i.i.d.}\dfrac{1}{n}\cdot n\cdot\mathbb{E}[X_i]=a\theta.
$$

Similarly,

$$
\mathbb{E}[\bar{Y}]=b\theta.
$$

Then

$$
\mathbb{E}[\tilde{\theta}]=\alpha a\theta+\beta b\theta.
$$

For variance we have

$$
\mathrm{Var}(\bar{X})=\frac{1}{n}\mathrm{Var}(X_{i})=\frac{\sigma^{2}}{n},\quad\mathrm{Var}(\bar{Y})=\frac{\sigma^{2}}{m},
$$

$$
\mathrm{Var}(\alpha\bar{X}+\beta\bar{Y})=(\frac{\alpha^2}{n}+\frac{\beta^2}{m})\sigma^2.
$$

#### (3)
When $\tilde{\theta}$ is an unbiased estimate of $\theta$,

$$
\mathbb{E}[\tilde\theta]=\alpha a\theta+\beta b\theta=\theta,
$$

which is equivalent to

$$
\beta=\frac{1-\alpha a}{b}.
$$

The variance of $\tilde{\theta}$ will be written as

$$
\begin{aligned}\mathrm{Var}(\tilde{\theta})&=\frac{\sigma^{2}}{n}\left(\alpha^{2}+\frac{1+a^{2}\alpha^{2}-2a\alpha}{b^{2}}\right)\\
&=\frac{\sigma^{2}}{n}\bigg\{(1+\frac{a^{2}}{b^{2}})\alpha^{2}-\frac{2a}{b}\alpha+\frac{1}{b^{2}}\bigg\}.
\end{aligned}
$$

The minima of $\text{Var}(\tilde{\theta})$ is at

$$
\alpha=\frac{\frac{2a}{b^2}}{2(1+\frac{a^2}{b^2})}=\frac{a}{a^2+b^2},
$$

and

$$
\beta=\frac{1-\frac{a^2}{a^2+b^2}}b=\frac b{a^2+b^2}.
$$


### 問題2
(For this question, readers may refer to geometric distribution, 幾何分布.)

#### (1)

$$
\begin{aligned}\Pr(T=n)&=\Pr(t_{1}=tail) \times \Pr(t_{2}=tail) \times \cdots \times P(t_{n}=head)\\&=q^{n-1}p,\end{aligned}
$$

where $t_i$ is the result of the $i$-th coin toss

#### (2)

$$
\mathbb{E}[T]=\sum_{k=1}^n(pk)q^{k-1}=\sum_{k=0}^{n-1}p(k+1)q^k, \tag{i}
$$

This is a commonly seen series. We consider

$$
q\mathbb{E}[T]=\sum_{k=1}^n(pk)q^k. \tag{ii}
$$

Eq. (i) subtracted by Eq. (ii) is

$$
(1-q)\mathbb{E}[T]=p-pn\cdot q^n+\sum_{k=1}^{n-1}p\cdot q^k.
$$

Then

$$
\begin{aligned}
\mathbb{E}[T]&=\left(\frac{pq}{1-q}+p\right)/(1-q)\\
&=\frac{p}{(1-q)^{2}}=\frac{1}{p}.
\end{aligned}
$$

Now consider the second moment.

$$
\mathbb{E}[T^2]=\sum_{k=1}^\infty k^2q^{k-1}p=\sum_{k=0}^\infty(k+1)^2q^kp.
$$

$$
q\mathbb{E}[T^2]=\sum_{k=1}^\infty k^2q^kp,
$$

$$
\begin{aligned}(1-q)\mathbb{E}[T^{2}]&=p+\sum_{k=1}^{\infty}(2k+1)q^{k}p\\
&=\frac{2q}p+\frac{pq}{1-q}+p\\
&=\frac{2-p}p,
\end{aligned}
$$

Thus

$$
\mathbb{E}[T^2]=\frac{2-p}{p^2},
$$

and

$$
\mathrm{Var}(T)=\frac{2-p}{p^2}-\frac{1}{p^2}=\frac{1-p}{p^2}.
$$

#### (3)
The most tricky part is to understand the question (at least for me the formulation of $T_{m,i}$ is not obvious).
A quick explanation: $T_{m,i}$ is the number of trials (slot machine draws) that you have done when the $i$-th unique pattern (図柄) first appears.
For example, when you draw for the first time, you definitely get a new pattern. The first pattern comes from one draw, so $T_{m,1}=1.$
Then you do another 3 draws and they are all the same as the 1-st pattern, while the 5-th draw you get a new pattern!
Then $T_{m,2}=1+3+1=5.$ And similar procedures will tell you $T_m,3,\ldots,T_{m,m}.$

Then we will notice that $T_{m,i}-T_{m,i-1}$ is exactly the number of your keeping drawing from the already got $(i-1)$ types of patterns, plus one which you draw one new pattern from the $(m-i+1)$ types.

Then $U_m,i$ follows a geometric distribution, thus

$$
\Pr(U_{m,i}=k)=\left(\frac{i-1}{m}\right)^{k-1}\left(\frac{m-i+1}{m}\right).
$$

#### (4)
We first find $\mathbb{E}[U_m,i]$, which has already been done in 問題2 の (2). 

i.e.,

$$
\mathbb{E}[U_{m,i}]=\frac{1}{\frac{m-i+1}{m}}=\frac{m}{m-i+1}.
$$

Therefore,

$$
\begin{aligned}
T_{m,m}&=1+U_{m,2}+U_{m,3}+\ldots+U_{m,m}\\
\mathbb{E}[T_{m,m}]&=1+\sum_{i=2}^m\mathbb{E}[U_{m,i}]\\
&=1+\sum_{i=2}^m\frac m{m-i+1}=1+m\sum_{i=2}^m\frac1{m-i+1}\\
&=1+m\sum_{i=2}^m\frac1{m-i+1}=1+m\sum_{j=2}^m\frac1{j-1}.
\end{aligned}
$$
