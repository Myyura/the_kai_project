---
sidebar_label: "2024年8月実施 概率统计"
tags:
  - Hosei-University
  - Probability-Statistics.Probability-Basics.Joint-Distribution
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Probability-Basics.Expectation-and-Variance
  - Probability-Statistics.Probability-Distributions-and-Asymptotics.Cumulative-Distribution-Function-and-Probability-Density-Function
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2024年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

確率変数 $(X, Y)$ の同時確率密度関数 $f_{X,Y}(x, y)$ が

$$
f_{X,Y}(x, y) = \frac{c}{xy} \quad (1 < y < x < e)
$$

で与えられている。このとき、以下の問いに答えよ。

(1) 定数 $c$ の値を求めよ。なお、以降の問題はここで求めた $c$ の値を使用して解答すること。

(2) $X$ と $Y$ が独立か否か示せ。

(3) $E[Y | X = x]$ を $x$ を用いた式で表せ。

### 题目描述

随机变量 $(X,Y)$ 的联合概率密度函数在区域 $1<y<x<e$ 上为

$$
f_{X,Y}(x,y)=\frac{c}{xy},
$$

在该区域外为 $0$。回答下列问题。

（1）求常数 $c$。后续各问均使用本问求得的 $c$ 作答。

（2）判断并说明 $X$ 与 $Y$ 是否相互独立。

（3）用 $x$ 表示条件期望

$$
E[Y\mid X=x].
$$

## **Kai**

(1) まず、同時確率密度関数の積分が1になることを利用して、 $c$ の値を求めます。

$$
\int_{1}^{e} \int_{1}^{x} f_{X,Y}(x, y) dy dx = 1
$$

$$
\int_{1}^{e} \int_{1}^{x} \frac{c}{xy} dy dx = 1
$$

$$
\int_{1}^{e} \frac{c}{x} \left[ \ln y \right]_{1}^{x} dx = 1
$$

$$
\int_{1}^{e} \frac{c}{x} (\ln x - \ln 1) dx = 1
$$

$$
\int_{1}^{e} \frac{c}{x} \ln x dx = 1
$$

$$
\left[ \frac{c}{2} (\ln x)^2 \right]_{1}^{e} = 1
$$

$$
\frac{c}{2} ((\ln e)^2 - (\ln 1)^2) = 1
$$

$$
\frac{c}{2} (1 - 0) = 1
$$

$$
c = 2
$$

(2) $X$ と $Y$ が独立であるためには、 $f_{X,Y}(x, y) = f_X(x) f_Y(y)$ が成立する必要があります。まず、 $f_X(x)$ と $f_Y(y)$ を求めます。

$$
f_X(x) = \int_{1}^{x} f_{X,Y}(x, y) dy = \int_{1}^{x} \frac{2}{xy} dy = \frac{2}{x} [\ln y]_1^x = \frac{2 \ln x}{x} \quad (1 < x < e)
$$

$$
f_Y(y) = \int_{y}^{e} f_{X,Y}(x, y) dx = \int_{y}^{e} \frac{2}{xy} dx = \frac{2}{y} [\ln x]_y^e = \frac{2}{y} (\ln e - \ln y) = \frac{2(1 - \ln y)}{y} \quad (1 < y < e)
$$

ここで、 $f_X(x)f_Y(y) = \frac{2 \ln x}{x} \cdot \frac{2(1 - \ln y)}{y} = \frac{4 \ln x (1 - \ln y)}{xy}$ 。
$f_{X,Y}(x, y) = \frac{2}{xy}$ なので、 $f_{X,Y}(x, y) \neq f_X(x)f_Y(y)$ 。したがって、 $X$ と $Y$ は独立ではありません。

(3) $E[Y | X = x]$ を求めます。

$$
E[Y | X = x] = \int_{1}^{x} y f_{Y|X}(y|x) dy
$$

ここで、 $f_{Y|X}(y|x) = \frac{f_{X,Y}(x, y)}{f_X(x)} = \frac{\frac{2}{xy}}{\frac{2 \ln x}{x}} = \frac{1}{y \ln x}$ 。

$$
E[Y | X = x] = \int_{1}^{x} y \frac{1}{y \ln x} dy = \int_{1}^{x} \frac{1}{\ln x} dy = \frac{1}{\ln x} \int_{1}^{x} dy = \frac{1}{\ln x} [y]_1^x = \frac{x - 1}{\ln x}
$$
