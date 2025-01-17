---
comments: false
title: 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-2
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-2

## **Author**
[Isidore](https://github.com/heacsing)

## **Description**
### 設問1
$x_1, x_2, \ldots, x_n$ が互いに独立に正規分布 $N(\mu, 4^2)$ に従う時、帰無仮説  
$H_0 : \mu = \mu_0$、対立仮説 $H_1 : \mu > \mu_0$。
有意水準 $\alpha = 0.05$ の片側検定を考える。
確率変数 $X$ が標準正規分布に従う時、確率 $\Pr[X \leq 1.645] = 0.95$ であることを用いてよい。

(1) $\mu - \mu_0 = 1.2, n = 16$ のときの検出力を考える。検出力は、確率変数 $Z$ が標準正規分布に従う時、確率 $\Pr[Z \geq z]$ として表すことができる。そのときの $u$ の値を求めよ。

(2) $\mu - \mu_0 = 1.2$ のとき検出力を $95\%$ 以上にする $n$ の最小値を求めよ。

### 設問2
製造法 $A$ と $B$ があり、製造法 $A$ では製品の不良率は $p$ である。

(1) $p = 0.5$ のとき製造法 $A$ で $8$ 個製造した。不良品が $1$ 個以下になる確率を求めよ。

(2) $p = 1/4000$ のとき製造法 $A$ で $10,000$ 個製造した。不良品が発生しない確率を求めよ。また、ポアソン分布 $\Pr[X = r] = \lambda^r \exp(-\lambda)/r!$ を用いた近似により得られる確率を求めよ。

(3) 製造法 $B$ で $100$ 個製造したところ不良品が $60$ 個であった。製造法 $A$ の不良率が $p = 0.5$ のとき、製造法 $B$ の不良率が製造法 $A$ と異なるかを有意水準 $\alpha = 0.05$ で両側検定せよ。確率変数 $X$ が標準正規分布に従う時、確率 $\Pr[X \leq 1.96] = 0.975$ であることを用いてよい。

### 設問3
2つの確率変数 $X$ と $Y$ に関して、期待値と分散が次のようになっている。

$$
E[X] = 3.0, \  E[Y] = 4.0, \  E[XY] = 12.3, \  V[X] = 1.0, \  V[Y] = 1.0
$$

(1) $X$ と $Y$ のそれぞれの二乗の期待値 $E[X^2], E[Y^2]$ と $X$ と $Y$ の共分散 $\text{Cov}[X, Y]$ を答えよ。

(3) $X$ と $Y$ にそれぞれ次の一次変換を施して新しい確率変数 $U$ と $V$ を作った。

$$
   U = 5X - 3, \  V = -3Y + 2
$$

$U$ と $V$ の共分散 $\text{Cov}[U, V]$ と相関係数 $r[U, V]$ を答えよ。


## **Kai**
### 設問1

#### (1)

According to the rule of Power analysis, we have the Statistical Power: 

$$
\begin{aligned}
    1-\beta &= 1 - \Pr[\textrm{accept } H_0|H_0 \textrm{  is false}] \\
    &= 1-\Pr[\frac{\bar{X}-\mu_0}{\sigma/\sqrt{n}} \leq Z_{\alpha}] \\
    &= 1-\Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \leq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}] \\
    &= \Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \geq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}]
\end{aligned}
$$

and $u = Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}$. Hence we have

$$
u = Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}} = 1.645 - \frac{1.2}{4/\sqrt{16}} = 0.445
$$

#### (2)

By **(1)**, we have

$$
\begin{aligned}
    1-\beta &= 
    Pr[\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \geq Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}}]
\end{aligned}
$$

To make sure the power larger than $95\%$, we have

$$
Z_{\alpha} - \frac{\mu-\mu_0}{\sigma/\sqrt{n}} \leq Z_{0.95} = -Z_{0.05} = -1.645
$$

$$
\sqrt{n} \geq \frac{Z_{\alpha} + Z_{0.05}}{\mu-\mu_0}\sigma \approx 10.967 \\
n \geq 10.967^2 = 120.27
$$

Hence the minimum value of $n$ is $121$.

### 設問2
#### (1)

$$
\Pr = \textrm{C}^0_8(p)^0(1-p)^8+\textrm{C}^1_8(p)^1(1-p)^7 = \frac{9}{256}
$$

#### (2)

$$
\Pr = \textrm{C}^0_{10000}(p)^0(1-p)^{10000}
$$

The approximation PMF is $\Pr[X=r] = (\frac{5}{2})^r\frac{e^{-\frac{5}{2}}}{r!}$. So the answer is

$$
\Pr[X=0] = e^{-\frac{5}{2}}
$$

#### (3)

Let $p_0$ denote the defective rate of $B$.
We design a test where the null hypothesis $H_0$ is $p_0 = p$ and the alternative hypothesis $H_1$ is $p_0 \neq p$.

The statistic $Z = \frac{\bar{p} - p}{\sqrt{p(1-p)/n}}$ follow the standard normal distribution. By using the significance level $\alpha = 0.05$, the rejection region is 

$$
Z \geq Z_{\frac{\alpha}{2}} \textrm{   or   } Z \leq -Z_{\frac{\alpha}{2}}
$$

which is

$$
Z = 2 > Z_{0.025} = 1.96
$$

So we reject $H_0$ and accept $H_1$, i.e., the defect rate of $B$ is not the same as $A$.

### 設問3
#### (1)

$$
\begin{aligned}
    &E[X^2] = V[X] + E^2[X] = 10 \\
    &E[Y^2] = V[Y] + E^2[Y] = 17 \\
    &\text{Cov}(X,Y) = E[XY] - E[X]E[Y] = 0.3 
\end{aligned}
$$

#### (2)

$$
\begin{aligned}
\text{Cov}[U,V] &= \text{Cov}[5X-3, -3Y+2] \\
&= -15\text{Cov}[X, Y] + 10\text{Cov}[X, 1] + 9\text{Cov}[1, Y] - 6\text{Cov}[1, 1] \\[0.7em]
&= -15\text{Cov}[X, Y] = -15\cdot 0.3 = -4.5
\end{aligned}
$$

$$
r[U, V] = \frac{\text{Cov}[U,V]}{\sqrt{V[U]}\sqrt{V[V]}}
= \frac{-4.5}{5.0\cdot 3.0} = -0.3
$$