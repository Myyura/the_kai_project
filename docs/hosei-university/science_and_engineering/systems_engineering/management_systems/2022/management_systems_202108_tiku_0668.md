---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Conditional-Probability
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[1] 確率変数 $(X, Y)$ の同時確率密度関数 $f_{X,Y}(x, y)$ が

$$
f_{X,Y}(x, y) = \begin{cases} cx \exp[-(x+y)] & (0 < x < y < 5x) \\ 0 & (otherwise) \end{cases}
$$

で与えられている。このとき、以下の問いに答えよ。なお、指数関数の値は計算しなくて良い。

(1) 定数 $c$ の値を求めよ。なお, (2)からはここで求めた値を使用して解答すること。

(2) $X$ と $Y$ が独立か否か示せ。

(3) $Pr\{X < 3/5 | Y = 1\}$ を求めよ。

### 题目描述

【1】随机变量 $(X,Y)$ 的联合概率密度函数为

$$
f_{X,Y}(x,y)=
\begin{cases}
cx\exp[-(x+y)],&0<x<y<5x,\\
0,&\text{其他}.
\end{cases}
$$

回答下列问题，指数函数的值无需计算为小数。

（1）求常数 $c$。从（2）起，使用本问求得的 $c$ 作答。

（2）判断并说明 $X$ 与 $Y$ 是否相互独立。

（3）求条件概率

$$
\Pr\left\{X<\frac35\,\middle|\,Y=1\right\}.
$$

## **Kai**

(1)
$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X, Y}(x, y) dx dy = 1$

$\int_{0}^{\infty} \int_{x}^{5x} cx \exp[-(x+y)] dy dx = 1$

$c \int_{0}^{\infty} x e^{-x} \int_{x}^{5x} e^{-y} dy dx = 1$

$c \int_{0}^{\infty} x e^{-x} [-e^{-y}]_{x}^{5x} dx = 1$

$c \int_{0}^{\infty} x e^{-x} (-e^{-5x} + e^{-x}) dx = 1$

$c \int_{0}^{\infty} (x e^{-2x} - x e^{-6x}) dx = 1$

$c (\int_{0}^{\infty} x e^{-2x} dx - \int_{0}^{\infty} x e^{-6x} dx) = 1$

$\int_{0}^{\infty} x e^{-ax} dx = [x \frac{e^{-ax}}{-a}]_{0}^{\infty} - \int_{0}^{\infty} \frac{e^{-ax}}{-a} dx = 0 + \frac{1}{a} \int_{0}^{\infty} e^{-ax} dx = \frac{1}{a} [\frac{e^{-ax}}{-a}]_{0}^{\infty} = \frac{1}{a^2}$

$c (\frac{1}{2^2} - \frac{1}{6^2}) = 1$

$c (\frac{1}{4} - \frac{1}{36}) = 1$

$c (\frac{9}{36} - \frac{1}{36}) = 1$

$c (\frac{8}{36}) = 1$

$c = \frac{36}{8} = \frac{9}{2}$

(2)
$f_X(x) = \int_{-\infty}^{\infty} f_{X, Y}(x, y) dy$

$f_X(x) = \int_{x}^{5x} \frac{9}{2} x e^{-(x+y)} dy = \frac{9}{2} x e^{-x} \int_{x}^{5x} e^{-y} dy = \frac{9}{2} x e^{-x} [-e^{-y}]_{x}^{5x} = \frac{9}{2} x e^{-x} (-e^{-5x} + e^{-x}) = \frac{9}{2} x (e^{-2x} - e^{-6x})$

$f_Y(y) = \int_{-\infty}^{\infty} f_{X, Y}(x, y) dx$

$0 < x < y < 5x \implies \frac{y}{5} < x < y$

$f_Y(y) = \int_{\frac{y}{5}}^{y} \frac{9}{2} x e^{-(x+y)} dx = \frac{9}{2} e^{-y} \int_{\frac{y}{5}}^{y} x e^{-x} dx$

Since $f_{X,Y}(x,y) \neq f_X(x)f_Y(y)$ , $X$ and $Y$ are not independent.

(3) 条件付き密度は $f_{X\mid Y}(x\mid 1)=f_{X,Y}(x,1)/f_Y(1)$ なので、

$$
P(X<3/5\mid Y=1)=\int_{1/5}^{3/5}f_{X\mid Y}(x\mid 1)\,dx
$$

$\frac{y}{5} < x < y \implies \frac{1}{5} < x < 1$

$f_Y(1) = \frac{9}{2} e^{-1} \int_{\frac{1}{5}}^{1} x e^{-x} dx = \frac{9}{2} e^{-1} [-xe^{-x} - e^{-x}]_{\frac{1}{5}}^{1} = \frac{9}{2} e^{-1} [(-e^{-1} - e^{-1}) - (-\frac{1}{5}e^{-\frac{1}{5}} - e^{-\frac{1}{5}})] = \frac{9}{2} e^{-1} [-2e^{-1} + \frac{6}{5}e^{-\frac{1}{5}}]$

$f_{X,Y}(x, 1) = \frac{9}{2} xe^{-(x+1)} = \frac{9}{2} e^{-1} x e^{-x}$

$P(X < 3/5 | Y = 1) = \frac{\int_{\frac{1}{5}}^{\frac{3}{5}} \frac{9}{2} e^{-1} xe^{-x} dx}{\frac{9}{2} e^{-1} \int_{\frac{1}{5}}^{1} xe^{-x} dx} = \frac{\int_{\frac{1}{5}}^{\frac{3}{5}} xe^{-x} dx}{\int_{\frac{1}{5}}^{1} xe^{-x} dx}$

$ \int xe^{-x} dx = -xe^{-x} - e^{-x}$

$\int_{\frac{1}{5}}^{\frac{3}{5}} xe^{-x} dx = [-xe^{-x} - e^{-x}]_{\frac{1}{5}}^{\frac{3}{5}} = [-\frac{3}{5}e^{-\frac{3}{5}} - e^{-\frac{3}{5}}] - [-\frac{1}{5}e^{-\frac{1}{5}} - e^{-\frac{1}{5}}] = -\frac{8}{5}e^{-\frac{3}{5}} + \frac{6}{5}e^{-\frac{1}{5}}$

$\int_{\frac{1}{5}}^{1} xe^{-x} dx = [-xe^{-x} - e^{-x}]_{\frac{1}{5}}^{1} = [-e^{-1} - e^{-1}] - [-\frac{1}{5}e^{-\frac{1}{5}} - e^{-\frac{1}{5}}] = -2e^{-1} + \frac{6}{5}e^{-\frac{1}{5}}$

$P(X < 3/5 | Y = 1) = \frac{-\frac{8}{5}e^{-\frac{3}{5}} + \frac{6}{5}e^{-\frac{1}{5}}}{-2e^{-1} + \frac{6}{5}e^{-\frac{1}{5}}}$
