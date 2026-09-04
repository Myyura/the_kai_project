---
sidebar_label: "2021年9月実施 専門基礎科目 第3問"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Estimation-and-Hypothesis-Testing.Hypothesis-Testing
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報工学PG 2021年9月実施 専門基礎科目 第3問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ。

(a) $\lambda$ を正の定数とする。連続確率変数 $X$ が以下の確率密度関数をもつとする。

$$
f_\lambda(x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & x < 0 \end{cases}
$$

(1) $X$ の期待値 $\mathbb{E}[X]$ を求めよ。

(2) $X$ の分散 $\text{Var}[X]$ を求めよ。

(3) 確率 $\text{Pr}(X \geq a)$ を計算せよ。 $a>0$ とする。

(4) 条件付き確率 $\text{Pr}(X \geq a+b \mid X \geq a)$ を計算せよ。 $a,b > 0$ とする。

(5) 連続確率変数 $A$ と $B$ が独立でそれぞれ確率密度関数 $f_A(a)$ と $f_B(b)$ に従うとする $(\lambda_A, \lambda_B > 0$ かつ $\lambda_A \neq \lambda_B)$ . $C=A+B$ の確率密度関数を求めよ。

(b) ある会社がホームページのデザインとしてA案とB案を作成した。8人の閲覧者にA案とB案を比べてもらったら、8人中7人がA案のほうが良いと答えた。A案はB案よりも統計的に良いデザインであるといえるだろうか? A案がB案よりも良いと答える割合が50\%であることを帰無仮説として5\%有意水準で検定せよ。

### 题目描述

回答下列问题。

(a) 设 $\lambda$ 为正常数，连续随机变量 $X$ 的概率密度函数为

$$
f_\lambda(x)=
\begin{cases}
\lambda e^{-\lambda x},&x\geq0,\\
0,&x<0.
\end{cases}
$$

(1) 求 $X$ 的期望 $\mathbb{E}[X]$。

(2) 求 $X$ 的方差 $\operatorname{Var}[X]$。

(3) 对 $a>0$，计算

$$
\Pr(X\geq a).
$$

(4) 对 $a,b>0$，计算条件概率

$$
\Pr(X\geq a+b\mid X\geq a).
$$

(5) 设连续随机变量 $A,B$ 相互独立，并分别服从上述形式中参数为 $\lambda_A,\lambda_B$ 的概率密度函数 $f_A,f_B$，其中

$$
\lambda_A>0,\qquad
\lambda_B>0,\qquad
\lambda_A\neq\lambda_B.
$$

令

$$
C=A+B.
$$

求 $C$ 的概率密度函数。

(b) 某公司为网站设计了方案 A 与方案 B。让 $8$ 名浏览者比较两个方案后，其中 $7$ 人认为方案 A 更好。方案 A 是否可以认为在统计上优于方案 B？以“认为方案 A 优于方案 B 的比例为 $50\%$”作为原假设，在 $5\%$ 显著性水平下进行检验。

## **Kai**

(a)
(1) $\mathbb{E}[X] = \int_{-\infty}^{\infty} x f(x) dx = \int_0^{\infty} x \lambda e^{-\lambda x} dx$
Using integration by parts, let $u = x$ and $dv = \lambda e^{-\lambda x} dx$ . Then $du = dx$ and $v = -e^{-\lambda x}$ .
$\mathbb{E}[X] = [-xe^{-\lambda x}]_0^{\infty} + \int_0^{\infty} e^{-\lambda x} dx = 0 + [-\frac{1}{\lambda} e^{-\lambda x}]_0^{\infty} = \frac{1}{\lambda}$

(2) $\mathbb{E}[X^2] = \int_0^{\infty} x^2 \lambda e^{-\lambda x} dx$
Using integration by parts twice, we get $\mathbb{E}[X^2] = \frac{2}{\lambda^2}$ .
$\text{Var}[X] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \frac{2}{\lambda^2} - (\frac{1}{\lambda})^2 = \frac{1}{\lambda^2}$

(3) $\text{Pr}(X \geq a) = \int_a^{\infty} \lambda e^{-\lambda x} dx = [-e^{-\lambda x}]_a^{\infty} = e^{-\lambda a}$

(4) $\text{Pr}(X \geq a+b \mid X \geq a) = \frac{\text{Pr}(X \geq a+b \cap X \geq a)}{\text{Pr}(X \geq a)} = \frac{\text{Pr}(X \geq a+b)}{\text{Pr}(X \geq a)} = \frac{e^{-\lambda (a+b)}}{e^{-\lambda a}} = e^{-\lambda b}$

(5) The pdf of $C = A + B$ is given by the convolution of $f_A(a)$ and $f_B(b)$ :
$f_C(c) = \int_{-\infty}^{\infty} f_A(a) f_B(c-a) da$
Since $A$ and $B$ are only defined for $a \geq 0$ and $b \geq 0$ , we have:
$f_C(c) = \int_0^c \lambda_A e^{-\lambda_A a} \lambda_B e^{-\lambda_B (c-a)} da = \lambda_A \lambda_B e^{-\lambda_B c} \int_0^c e^{(\lambda_B - \lambda_A)a} da$
$f_C(c) = \lambda_A \lambda_B e^{-\lambda_B c} \left[ \frac{e^{(\lambda_B - \lambda_A)a}}{\lambda_B - \lambda_A} \right]_0^c = \frac{\lambda_A \lambda_B}{\lambda_B - \lambda_A} (e^{-\lambda_A c} - e^{-\lambda_B c})$ for $c \geq 0$ , and $0$ otherwise.

(b) Let $p$ be the true proportion of people who prefer design A. We want to test the hypothesis:
$H_0: p = 0.5$ (null hypothesis)
$H_1: p > 0.5$ (alternative hypothesis)
The test statistic is based on the binomial distribution. Let $X$ be the number of people who prefer design A. Under $H_0$ , $X \sim \text{Binomial}(n=8, p=0.5)$ .
The observed value is $x = 7$ .
The p-value is the probability of observing 7 or more successes under the null hypothesis:
$p-\text{value} = P(X \geq 7 | p=0.5) = P(X=7) + P(X=8) = \binom{8}{7} (0.5)^7 (0.5)^1 + \binom{8}{8} (0.5)^8 (0.5)^0 = 8 (0.5)^8 + 1 (0.5)^8 = 9 (0.5)^8 = \frac{9}{256} \approx 0.03515625$
Since the p-value ( $0.03515625$ ) is less than the significance level of 5% (0.05), we reject the null hypothesis. Therefore, we conclude that design A is statistically better than design B at the 5% significance level.
