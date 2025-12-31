---
sidebar_label: "2022年8月実施 専門科目 確率統計"
tags:
  - Kyoto-University
  - Probability-And-Statistics
---
# 京都大学 情報学研究科 システム科学専攻 2022年8月実施 専門科目 確率統計

## **Author**
[AKIRA (小红书:94184092292)](https://www.xiaohongshu.com/explore/68844c9f000000001d00cc46?xsec_token=ABJ6e6OUxI1XWfgsOiU5PPpD1dju1zjonhKby9ek9Hnc4=)

## **Description**
以下の問題において，$\log x$ は $x$ の自然対数を表し，$P(A)$ は事象 $A$ の確率を表す。
また，$N(\mu,\sigma^2)$ は平均 $\mu$、分散 $\sigma^2$ の正規分布を表し，$X \sim N(0,1)$ の累積分布関数 $P(X \le x)$ を $\Phi(x)$ で表す。
正規分布に関する次の性質を解答に用いてよい。
確率変数 $Z_1,\dots,Z_n$ が独立に正規分布 $Z_i \sim N(\mu_i,\sigma_i^2), i=1,\dots,n$ にしたがうとき，$Z_1 + \dots + Z_n$ は正規分布にしたがう。また，定数 $a,b$ に対して，$a Z_1 + b$ は正規分布にしたがう。

### 問題1
確率変数 $X_1, \dots, X_m, Y_1, \dots, Y_n$ は独立に正規分布にしたがい，
$X_i \sim N(\mu,1),\ i = 1,\dots,m$,
$Y_j \sim N(\eta,1),\ j = 1,\dots,n$ とする。
実数 $\mu,\eta$ は未知のパラメータである。
$X_1, \dots, X_m$ の標本平均を $\overline{X}$,
$Y_1, \dots, Y_n$ の標本平均を $\overline{Y}$ とおく。
このとき、以下の設問に答えよ。ただし、$\Phi(x)$ および $p = \Phi(x)$ の逆関数を $x = \Phi^{-1}(p)$ とする。

(1) $\overline{X}$ のしたがう確率分布を求めよ。

(2) 帰無仮説 $H_0: \mu = 0$、対立仮説 $H_1: \mu = \mu_1, \mu_1 > 0$ の仮説検定を有意水準 $\alpha$ ($0<\alpha<1$) で行いたい。そのために定数 $c$ を定めておき、$\overline{X} > c$ のとき $H_0$ を棄却する。定数 $c$ を $m, \alpha$ を用いて表せ。

(3) 設問 (2) における検出力 $\beta$ を求め、$\mu_1, m, \alpha$ を用いて表せ。ここで検出力とは、対立仮説のもとで帰無仮説を棄却する確率である。

(4) 帰無仮説 $H_0: \mu = \eta = 0$、対立仮説 $H_1: \mu = \mu_1, \eta = \eta_1, \mu_1 > 0, \eta_1 > 0$ の仮説検定を有意水準 $\alpha$ ($0<\alpha<1$) で行いたい。定数 $d$ を定めておき、検定統計量 $T = (\sqrt{m}\cos\theta)\overline{X} + (\sqrt{n}\sin\theta) \overline{Y}$ が $T > d$ のとき $H_0$ を棄却する。ただし、$\theta \in [0,\pi/2]$ は事前に定めておく定数とする。定数 $d$ を求めよ。

(5) 設問 (4) における検出力 $\beta$ を求め、$\mu_1, \eta_1, m, n, \alpha, \theta$ を用いて表せ。また、$\beta$ を最大にするように $\theta$ を定めたい。$\beta$ の最大値と、そのときの $\cos\theta$ を求めよ。

### 問題2
以下の設問に答えよ。

(1) 任意の確率変数 $X, Y$ に対する累積分布関数 $F_{X,Y}(x,y) = P(X \le x, Y \le y)$ は、$x_1 < x_2, y_1 < y_2$ を満たす任意の $x_1, x_2, y_1, y_2$ に対して

$$
F_{X,Y}(x_2,y_2) + F_{X,Y}(x_1,y_1) - F_{X,Y}(x_1,y_2) - F_{X,Y}(x_2,y_1) \geq 0
$$

を満たす。その理由を述べよ。

(2) $X_1$ と $X_2$ を $(0,1)$ 上の一様分布にしたがう独立な確率変数とする。

$$
Y_1 = \sqrt{-2 \log X1} \cos(2\pi X_2), \quad Y_2 = \sqrt{-2 \log X_1} \sin (2\pi X_2)
$$

によって定義される確率変数 $Y_1, Y_2$ の確率密度関数 $f_{Y_1,Y_2}(y_1,y_2)$ を求めよ。

(3) $Y$ は $0,1$ を値にとる確率変数で、$P(Y=0) = P(Y=1) = 1/2$ とする。
また、$X$ を $Y=1$ のとき $N(0,1)$、$Y=0$ のとき $N(\mu,1)$ にしたがう確率変数とする。
$f_{X|Y}(x|y)$ を $Y=y$ で条件付けられた $X$ の条件付き確率密度関数、
$f_X(x)$ を $X$ の確率密度関数とする。

(3-1) $f_{X|Y}(x|y)$ および $f_X(x)$ を求めよ。

(3-2) $Y$ は観測できず、$f_X$ からの独立な確率変数 $X_1,\dots,X_n$ のみが観測されるとする。
このとき、$\mu$ の最尤推定量 $\hat{\mu}$ の満たすべき方程式（$\mu$ の陰関数表示）を次の形

$$
\hat{\mu} = \sum_{i=1}^n X_i p_i(\hat{\mu}, \mathbf{X})
$$

で表現したときの $p_i(\hat{\mu},X)$ を求めよ。
ただし $\mathbf{X} = (X_1,\dots,X_n)$ であり、また $\sum_{i=1}^n p_i(\hat{\mu},X) = 1$, $p_i(\hat{\mu},X) \ge 0$ を満たすものとする。

(3-3) $n=1$ のとき、設問 (3-2) の $\hat{\mu}$ を求めよ。また、この $\hat{\mu}$ が $\mu$ の不偏推定量であるか否かを理由を付して答えよ。ただし $\mu \ne 0$ とする。

## **Kai**
### 問題1
#### (1)

$$
\overline{X} \sim N(\mu, \frac{1}{m})
$$

#### (2)
$P(\overline{X} > c \mid H_0) = \alpha$, $S \sim N(0,1)$ とおくと、

$$
P(\overline{X} > c \mid H_0) = P(\frac{1}{\sqrt{m}}S > c) = P(S > \sqrt{m}c) = 1 - \Phi(\sqrt{m}c) = \alpha
$$

$$
\Rightarrow \sqrt{m}c = \Phi^{-1}(1-\alpha) \Rightarrow c = \frac{1}{\sqrt{m}} \Phi^{-1}(1-\alpha)
$$

#### (3)

$$
\begin{aligned}
    \beta &= P(\overline{X} > c \mid H_1) = P(\mu_1 + \frac{1}{\sqrt{m}}S > c) \\
    &= P(S > \Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m}) \\
    &= 1 - \Phi(\Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m})
\end{aligned}
$$

#### (4)
$\overline{Y} \sim N(\eta, \frac{1}{n})$、再生性より、

$$
T \sim N(\mu \sqrt{m} \cos \theta + \eta \sqrt{n} \sin \theta, \cos^2 \theta + \sin^2 \theta) = N(\mu \sqrt{m} \cos \theta + \eta \sqrt{n} \sin \theta, 1)
$$

$\mu = \eta = 0$ のとき、

$$
T \sim N(0, 1)
$$

よって、

$$
P(T > d \mid H_0) = P(S > d) = 1 - \Phi(d) = \alpha \Rightarrow d = \Phi^{-1}(1-\alpha)
$$

#### (5)

$$
\begin{aligned}
    \beta &= P(T > d \mid H_1) = P(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta + S > \Phi^{-1}(1-\alpha)) \\
    &= P(S > \Phi^{-1}(1-\alpha) - \mu_1 \sqrt{m} \cos \theta - \eta_1 \sqrt{n} \sin \theta) \\
    &= \Phi(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta - \Phi^{-1}(1-\alpha))
\end{aligned}
$$

$$
\frac{\partial \beta}{\partial \theta} = \phi(\mu_1 \sqrt{m} \cos \theta + \eta_1 \sqrt{n} \sin \theta - \Phi^{-1}(1-\alpha))(-\mu_1 \sqrt{m} \sin \theta + \eta_1 \sqrt{n} \cos \theta)
$$

$$
\frac{\partial \beta}{\partial \theta} = 0 \Rightarrow \tan \theta = \frac{\eta_1 \sqrt{n}}{\mu_1 \sqrt{m}}
$$

$\theta \in [0, \frac{\pi}{2}]$ より、

$$
\sin \theta = \frac{\eta_1 \sqrt{n}}{\sqrt{n \eta_1^2 + m \mu_1^2}}, \cos \theta = \frac{\mu_1 \sqrt{m}}{\sqrt{n \eta_1^2 + m \mu_1^2}}
$$

$$
\beta_{\max} = \Phi(\sqrt{n \eta_1^2 + m \mu_1^2} - \Phi^{-1} (1-\alpha))
$$


### 問題2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202208_prob_stat_p2.jpg" width="700" alt=""/>
</figure>
