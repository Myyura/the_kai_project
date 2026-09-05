---
sidebar_label: "2019年8月実施 確率統計"
tags:
  - Saitama-University
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年8月実施 確率統計

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

3. 以下の問に答えよ。 [Solve the following problems.]

(a) 確率変数 $X$ が以下の確率密度関数をもつとする ( $C$ は定数). [A random variable $X$ has the following probability density function ( $C$ is a constant.)]

$$
f(x) = \begin{cases} Cx(x+1) & 0 \leq x \leq 4, \\ 0 & \text{otherwise.} \end{cases}
$$

(1) 定数 $C$ の値を求めよ. [Find the constant $C$ .]

(2) $X$ の累積分布関数 $F(x) = Pr(X \leq x)$ を求めよ. [Find the cumulative distribution function $F(x) = Pr(X \leq x)$ .]

(3) 確率 $Pr(1 \leq X \leq 2)$ を計算せよ。 [Calculate the probability $Pr(1 \leq X \leq 2)$ .]

(4) 確率変数 $Y$ を $Y = \sqrt{X}$ とする. $Y$ の確率密度関数を求めよ. [Let $Y$ be a random variable defined by $Y = \sqrt{X}$ . Find the probability density function of $Y$ .]

(b) 確率変数 $X$ は非負値をとるものとする。 $X$ の期待値を $E[X]$ とする。このとき任意の実数 $a > 0$ に対して以下が成り立つ. [Let $X$ be a random variable that takes only nonnegative values. $E[X]$ is the expectation value of $X$ . Then, the following inequality holds for any real value $a > 0$ .]

$$
Pr(X \geq a) \leq \frac{E[X]}{a}
$$

(1) 確率変数 $Y$ が平均 $\mu$ 、分散 $\sigma^2$ をもつとする。任意の実数 $b > 0$ に対して以下が成り立つことを示せ. [Let $Y$ be a random variable with mean $\mu$ and variance $\sigma^2$ . Show that the following inequality holds for any real value $b > 0$ .]

$$
Pr(|Y - \mu| \geq b) \leq \frac{\sigma^2}{b^2}
$$

(2) ある工場で1週間に作られる製品の数は平均500, 分散100である。このとき「今週の生産量が400より大きく600より小さい確率は少なくともcである」と言える。cの値を求めよ. [Suppose that the number of items produced in a factory during a week has mean 500 and variance 100. Then, we can say that the probability with which this week's production will be greater than 400 and less than 600 is at least c. Find the value of c.]

### 题目描述

3. 回答下列问题。

(a) 设随机变量 $X$ 的概率密度函数如下，其中 $C$ 为常数：

$$
f(x)=
\begin{cases}
Cx(x+1),&0\leq x\leq4,\\
0,&\text{其他情形}.
\end{cases}
$$

(1) 求常数 $C$。

(2) 求 $X$ 的累积分布函数

$$
F(x)=\Pr(X\leq x).
$$

(3) 计算

$$
\Pr(1\leq X\leq2).
$$

(4) 定义随机变量

$$
Y=\sqrt{X}.
$$

求 $Y$ 的概率密度函数。

(b) 设随机变量 $X$ 只取非负值，其期望为 $E[X]$。已知对任意实数 $a>0$，都有

$$
\Pr(X\geq a)\leq\frac{E[X]}a.
$$

(1) 设随机变量 $Y$ 的均值为 $\mu$、方差为 $\sigma^2$。证明对任意实数 $b>0$，都有

$$
\Pr(|Y-\mu|\geq b)\leq\frac{\sigma^2}{b^2}.
$$

(2) 某工厂每周生产的产品数量均值为 $500$、方差为 $100$。由此可断言“本周产量大于 $400$ 且小于 $600$ 的概率至少为 $c$”。求 $c$。

## **Kai**

(a) (1) Since $\int_{-\infty}^{\infty} f(x) dx = 1$ , we have

$$
\int_0^4 Cx(x+1) dx = 1
$$

$$
\int_0^4 (Cx^2 + Cx) dx = 1
$$

$$
C \int_0^4 (x^2 + x) dx = 1
$$

$$
C \left[ \frac{x^3}{3} + \frac{x^2}{2} \right]_0^4 = 1
$$

$$
C \left( \frac{64}{3} + \frac{16}{2} \right) = 1
$$

$$
C \left( \frac{64}{3} + 8 \right) = 1
$$

$$
C \left( \frac{64 + 24}{3} \right) = 1
$$

$$
C \left( \frac{88}{3} \right) = 1
$$

$$
C = \frac{3}{88}
$$

(2) The cumulative distribution function is given by

$$
F(x) = \int_{-\infty}^x f(t) dt
$$

For $0 \leq x \leq 4$ ,

$$
F(x) = \int_0^x \frac{3}{88}t(t+1) dt = \frac{3}{88} \int_0^x (t^2 + t) dt = \frac{3}{88} \left[ \frac{t^3}{3} + \frac{t^2}{2} \right]_0^x = \frac{3}{88} \left( \frac{x^3}{3} + \frac{x^2}{2} \right) = \frac{3}{88} \left( \frac{2x^3 + 3x^2}{6} \right) = \frac{2x^3 + 3x^2}{176}
$$

Therefore,

$$
F(x) = \begin{cases} 0 & x < 0 \\ \frac{2x^3 + 3x^2}{176} & 0 \leq x \leq 4 \\ 1 & x > 4 \end{cases}
$$

(3) $Pr(1 \leq X \leq 2) = F(2) - F(1)$

$$
F(2) = \frac{2(2^3) + 3(2^2)}{176} = \frac{16 + 12}{176} = \frac{28}{176} = \frac{7}{44}
$$

$$
F(1) = \frac{2(1^3) + 3(1^2)}{176} = \frac{2 + 3}{176} = \frac{5}{176}
$$

$$
Pr(1 \leq X \leq 2) = \frac{7}{44} - \frac{5}{176} = \frac{28 - 5}{176} = \frac{23}{176}
$$

(4) Let $Y = \sqrt{X}$ , so $X = Y^2$ .  Then $f_Y(y) = f_X(y^2) |\frac{dx}{dy}|$ .

$\frac{dx}{dy} = 2y$ .  Also, if $0 \leq x \leq 4$ , then $0 \leq y \leq 2$ .

$$
f_Y(y) = \frac{3}{88} (y^2)(y^2 + 1)(2y) = \frac{3}{44} y^3(y^2+1) \quad 0 \leq y \leq 2
$$

$$
f_Y(y) = \frac{3}{44} (y^5 + y^3)
$$

$$
f_Y(y) = \begin{cases} \frac{3}{44}(y^5 + y^3) & 0 \leq y \leq 2 \\ 0 & \text{otherwise} \end{cases}
$$

(b) (1) 非負確率変数 $X=(Y-\mu)^2$ と $a=b^2$ に問題文の不等式を適用すると、

$$
\Pr(|Y-\mu|\geq b)
=\Pr((Y-\mu)^2\geq b^2)
\leq\frac{E[(Y-\mu)^2]}{b^2}
=\frac{\sigma^2}{b^2}.
$$

(2) Let $Y$ be the number of items produced in a week.  $E[Y] = 500$ , $Var(Y) = 100$ . We want to find $c$ such that $Pr(400 < Y < 600) \geq c$ . We have

$Pr(400 < Y < 600) = Pr(-100 < Y - 500 < 100) = Pr(|Y - 500| < 100) = 1 - Pr(|Y - 500| \geq 100)$

Using Chebyshev's Inequality, $Pr(|Y - 500| \geq 100) \leq \frac{Var(Y)}{100^2} = \frac{100}{100^2} = \frac{1}{100}$ .

Thus, $Pr(|Y - 500| < 100) = 1 - Pr(|Y - 500| \geq 100) \geq 1 - \frac{1}{100} = \frac{99}{100} = 0.99$ . Therefore, $c = 0.99$ .
