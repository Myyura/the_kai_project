---
sidebar_label: "2023年8月実施 専門科目 S-2"
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2023年8月実施 専門科目 S-2

## **Author**
[Isidore](https://github.com/heacsing), 祭音Myyura

## **Description**
### 設問1
$X_1, X_2, \cdots, X_n$ を平均 $\mu$ の母集団からの大きさ $n$ の無作為標本とする。
$X_i$ の加重和 $\sum_{i=1}^n w_i X_i$ が $\mu$ の不偏推定量であるための必要十分条件を示せ。

### 設問2
$X_1, X_2, \cdots, X_n$ を平均 $\mu$, 分散 $\sigma^2$ の正規母集団からの大きさ $n$ の無作為標本とする。

(1) $\mu$ と $\sigma^2$ の対数尤度関数 $L(\mu, \sigma^2)$ を導出せよ。

(2) $L(\mu, \sigma^2)$ を用いて、$\mu$ と $\sigma^2$ の最尤推定量を求めよ。

### 設問3
確率変数 $X$ と $Y$ の平均がいずれも $1$、分散がいずれも $2$ であるとする。
$S = X + 2Y$, $T = X - 2Y$ のとき、 $S$ と $T$ の共分散を求めよ。

### 設問4
薬 A と薬 B の効果に差がないという帰無仮説のもとで、以下の分割表についてフィッシャーの正確検定を行うことを考える。

|       | 効果あり | 効果なし | 計  |
|-------|----------|----------|----|
| 薬 A  |    3     |    1     | 4  |
| 薬 B  |    2     |    3     | 5  |
| 計    |    5     |    4     | 9  |

(1) 帰無仮説のもとでこの表が得られる確率は、計 9 人から無作為に 5 人を「効果あり」として選んだときに、そのうち薬 A 群が 3 人、薬 B 群が 2 人となる確率として計算できる。この確率を求めよ。

(2) フィッシャーの正確検定の $p$ 値（両側検定）は、周辺度数を固定したときに、観察された分割表と同じか低い確率をもつ表の合計確率として定義される。上の表が観察されたときの $p$ 値を求めよ。


## **Kai**
### 設問1

$$
E[\sum^{n}_{i=1}w_iX_i - \mu] = 0 \implies  \mu = \sum^n_{i=1}w_iE[X_i] = \sum^n_{i=1}w_i\mu \implies \sum^n_{i=1}w_i = 1
$$

### 設問2
#### (1)

$$
\begin{aligned}

L(\mu,\sigma^{2}) &= L(x_1,\dots,x_n;\mu,\sigma^2)
\\ &= \sum_{i=1}^n \log\left( \frac1{\sigma\sqrt{2\pi}} e^{-(x_i-\mu)^2/2\sigma^2} \right)
\\ &= -n \log \left( \sigma\sqrt{2\pi} \right) - \frac1{2\sigma^2}\sum_{i=1}^n {(x_i-\mu)^2}
\\ &= -\frac{n}{2}\ln 2\pi\sigma^{2}-\frac{\sum_{i=1}^{n}(x_{i}^{2}-\mu)^{2}}{2\sigma^{2}}
\end{aligned}
$$

#### (2)

We find the partial derivatives over $\mu$ and $\sigma^2$ of $L$ and setting them zero.

$$
0 = {\partial L\over \partial \mu} = -\frac1{\sigma^2} \sum_{i=1}^n (x_i-\mu) \implies \boxed{\hat{\mu} = \frac{1}{n}\sum_{i=1}^{n}x_{i}}
$$
and (here we view $\sigma^2$ as a variable) 
$$
0 = {\partial L\over \partial \sigma^2} = -\frac n{2\sigma^2} + \frac{\sum_{i=1}^{n}(x_{i}^{2}-\mu)^{2}}{2\sigma^{4}}
\implies \boxed{\hat{\sigma}^{2} = \frac{1}{n}\sum_{i=1}^{n}(x_{i}-\mu)^{2}}.
$$

### 設問3

$$
\begin{aligned}
\text{Cov}[S,T]
&= \text{Cov}[X+2Y,X-2Y]\\[0.7em]
&= \text{Cov}[X,X]+2\text{Cov}[X,Y]-2\text{Cov}[X,Y]+4\text{Cov}[Y,Y]\\[0.7em]
&= 2+4-4-8 = -6
\end{aligned}
$$

### 設問4
#### (1)
与えられた表が得られる確率は，計 $9$ 人から無作為に $5$ 人を「効果あり」として選んだときに，そのうち薬 $A$ 群が $4$ 人中 $3$ 人，薬 $B$ 群が $5$ 人中 $2$ 人となる確率である。

$$
\frac{C^3_4 C^2_5}{C^5_9} = \frac{20}{63}
$$

#### (2)

If the 2 properties are independent, we have

$$
Pr[\text{Observing the given table} | H_0] = Pr[X=3]
$$

in which $X$ follows hypergeometric distribution with $N, K, n = (9, 5, 4)$. Calculate it and we have

$$
Pr[X=3] = \frac{C_K^XC_{N-K}^{n-X}}{C_N^K} = \frac{C_5^3C_4^1}{C_9^5} = \frac{10×4}{126} = \frac{40}{126}
$$

By the definition of Fisher's exact test, we sequentially calculate other probabilities of observed tables. As $X \in \{0, 1, 2, 3, 4\}$

$$
Pr[X=0] = \frac{C_5^0C_4^4}{C_9^5} = \frac{1}{126}
$$

$$
Pr[X=1] = \frac{C_5^1C_4^3}{C_9^5} = \frac{20}{126}
$$

$$
Pr[X=2] = \frac{C_5^2C_4^2}{C_9^5} = \frac{60}{126}
$$

$$
Pr[X=3] = \frac{40}{126}
$$

$$
Pr[X=4] = \frac{C_5^4C_4^0}{C_9^5} = \frac{5}{126}
$$

Thus, the p-value for Fisher's exact test is 

$$
p = \frac{1+20+40+5}{126} = 0.5238
$$
