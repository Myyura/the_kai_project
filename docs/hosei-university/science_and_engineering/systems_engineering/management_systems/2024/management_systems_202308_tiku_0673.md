---
sidebar_label: "2023年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Covariance
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2023年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数X, Y, Zは

$$
X = U,
$$

$$
Y = \alpha X + \epsilon_1,
$$

$$
Z = \beta X + \gamma Y + \epsilon_2
$$

という構造を持つ。ただし、 $E[U] = 0, Var[U] = 1, E[\epsilon_i] = 0, Var[\epsilon_i] = 1 (i = 1,2)$ で、これらは互いに独立である。 $\alpha, \beta, \gamma$ を既知として、以下の問いに答えよ。

(1) $E[XY] = \alpha$ が成り立つことを示せ。

(2) XとYの相関係数を $\alpha$ を用いて表せ。

(3) (2)で求めた相関係数の絶対値が $1/2$ 以上となる $\alpha$ の範囲を求めよ。

(4) $\alpha, \beta, \gamma$ を用いてYとZの共分散を示せ。

(5) XとYの相関係数の絶対値がちょうど $1/2$ のときにYとZが正の相関を持つ場合、 $\beta$ と $\gamma$ の絶対値の大小関係を示せ。また、同様に負の相関を持つ場合についても結論を述べよ。

### 题目描述

随机变量 $X,Y,Z$ 具有如下结构：

$$
X=U,
$$

$$
Y=\alpha X+\epsilon_1,
$$

$$
Z=\beta X+\gamma Y+\epsilon_2.
$$

其中

$$
E[U]=0,\quad \operatorname{Var}(U)=1,\quad
E[\epsilon_i]=0,\quad \operatorname{Var}(\epsilon_i)=1\quad(i=1,2),
$$

且 $U,\epsilon_1,\epsilon_2$ 相互独立。已知 $\alpha,\beta,\gamma$，回答下列问题。

（1）证明 $E[XY]=\alpha$。

（2）用 $\alpha$ 表示 $X$ 与 $Y$ 的相关系数。

（3）求使（2）所得相关系数的绝对值不小于 $\frac12$ 的 $\alpha$ 的范围。

（4）用 $\alpha,\beta,\gamma$ 表示 $Y$ 与 $Z$ 的协方差。

（5）当 $X$ 与 $Y$ 的相关系数绝对值恰为 $\frac12$ 时，讨论 $Y$ 与 $Z$ 正相关和负相关两种情形下，能否确定 $|\beta|$ 与 $|\gamma|$ 的大小关系。

## **Kai**

(1)  $E[XY] = E[X(\alpha X + \epsilon_1)] = E[\alpha X^2 + X\epsilon_1] = \alpha E[X^2] + E[X]E[\epsilon_1] = \alpha E[U^2] + 0 = \alpha(Var[U] + (E[U])^2) = \alpha(1 + 0) = \alpha$

(2)  $Corr(X, Y) = \frac{Cov(X, Y)}{\sqrt{Var(X)Var(Y)}} = \frac{E[XY] - E[X]E[Y]}{\sqrt{Var(X)Var(Y)}} = \frac{\alpha - 0}{\sqrt{1(\alpha^2Var(X) + Var(\epsilon_1))}} = \frac{\alpha}{\sqrt{\alpha^2 + 1}}$

(3) $|Corr(X,Y)| = |\frac{\alpha}{\sqrt{\alpha^2 + 1}}| \geq \frac{1}{2}$
$\frac{\alpha^2}{\alpha^2 + 1} \geq \frac{1}{4}$
$4\alpha^2 \geq \alpha^2 + 1$
$3\alpha^2 \geq 1$
$\alpha^2 \geq \frac{1}{3}$
$|\alpha| \geq \frac{1}{\sqrt{3}}$
Therefore, $\alpha \leq -\frac{1}{\sqrt{3}}$ or $\alpha \geq \frac{1}{\sqrt{3}}$

(4) $Z=(\beta+\alpha\gamma)X+\gamma\epsilon_1+\epsilon_2$ である。また、各変数の平均は0で、 $X,\epsilon_1,\epsilon_2$ は互いに独立なので、

$$
\begin{aligned}
\operatorname{Cov}(Y,Z)
&=E[(\alpha X+\epsilon_1)\{(\beta+\alpha\gamma)X+\gamma\epsilon_1+\epsilon_2\}]\\
&=\alpha(\beta+\alpha\gamma)E[X^2]+\gamma E[\epsilon_1^2]\\
&=\alpha\beta+\gamma(\alpha^2+1).
\end{aligned}
$$

(5)

$$
\left|\frac{\alpha}{\sqrt{\alpha^2+1}}\right|=\frac12
\quad\Longleftrightarrow\quad
\alpha=\frac{s}{\sqrt3}\quad(s\in\{1,-1\}).
$$

このとき、

$$
\operatorname{Cov}(Y,Z)
=\frac{s\beta}{\sqrt3}+\frac43\gamma
=\frac{s\sqrt3\,\beta+4\gamma}{3}.
$$

$\operatorname{Var}(Y)>0$ かつ $\operatorname{Var}(Z)>0$ なので、 $Y$ と $Z$ が正の相関を持つための必要十分条件は

$$
s\sqrt3\,\beta+4\gamma>0
$$

であり、負の相関を持つための必要十分条件は

$$
s\sqrt3\,\beta+4\gamma<0
$$

である。

ただし、問題文の条件だけから $|\beta|$ と $|\gamma|$ の一意な大小関係は導けない。例えば $\alpha=1/\sqrt3$ のとき、正の相関について $(\beta,\gamma)=(0,1)$ なら $|\beta|<|\gamma|$ である一方、 $(2,0)$ なら $|\beta|>|\gamma|$ である。負の相関についても $(0,-1)$ と $(-2,0)$ がそれぞれ逆の大小関係を与える。したがって、絶対値の大小を特定するには $\beta,\gamma$ の符号などの追加条件が必要である。
