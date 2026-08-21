---
sidebar_label: "2021年8月実施 概率统计"
tags:
  - Waseda-University
  - Probability-Statistics.Probability-Basics.Independence-of-Random-Variables
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Simple-Linear-Regression
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 概率统计

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の2変数のデータに基づき各設問に解答せよ。

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
No & 1 & 2 & 3 & 4 & 5 \\
\hline
x & 1 & 2 & 2 & 2 & 3 \\
\hline
y & 4 & 4 & 2 & 0 & 0 \\
\hline
\end{array}
$$

(1) 相関係数 (correlation coefficient) を求めよ。なお、計算結果に根号を残してもよい。

(2) yを目的変数 (dependent variable), xを説明変数 (independent variable) として、単回帰分析 (single regression analysis) を行って直線をあてはめる。最小2乗法 (least squares method) による直線の推定式 (estimated equation) を求めよ。

### 题目描述

根据以下两变量数据回答问题：

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
\mathrm{No.}&1&2&3&4&5\\
\hline
x&1&2&2&2&3\\
\hline
y&4&4&2&0&0\\
\hline
\end{array}
$$

1. 求相关系数，结果中可以保留根号。
2. 以 $y$ 为因变量、$x$ 为自变量作简单线性回归，求最小二乘法拟合直线的估计方程。

## **Kai**

(1) Let's calculate the correlation coefficient $r$ .

First, calculate the means of $x$ and $y$ :

$$
\bar{x} = \frac{1+2+2+2+3}{5} = \frac{10}{5} = 2
$$

$$
\bar{y} = \frac{4+4+2+0+0}{5} = \frac{10}{5} = 2
$$

Next, calculate the standard deviations of $x$ and $y$ :

$$
s_x = \sqrt{\frac{(1-2)^2 + (2-2)^2 + (2-2)^2 + (2-2)^2 + (3-2)^2}{5-1}} = \sqrt{\frac{1+0+0+0+1}{4}} = \sqrt{\frac{2}{4}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}}
$$

$$
s_y = \sqrt{\frac{(4-2)^2 + (4-2)^2 + (2-2)^2 + (0-2)^2 + (0-2)^2}{5-1}} = \sqrt{\frac{4+4+0+4+4}{4}} = \sqrt{\frac{16}{4}} = \sqrt{4} = 2
$$

Now, calculate the covariance of $x$ and $y$ :

$$
cov(x, y) = \frac{\sum_{i=1}^5 (x_i - \bar{x})(y_i - \bar{y})}{5-1} = \frac{(1-2)(4-2) + (2-2)(4-2) + (2-2)(2-2) + (2-2)(0-2) + (3-2)(0-2)}{4} = \frac{(-1)(2) + (0)(2) + (0)(0) + (0)(-2) + (1)(-2)}{4} = \frac{-2 + 0 + 0 + 0 - 2}{4} = \frac{-4}{4} = -1
$$

Finally, calculate the correlation coefficient:

$$
r = \frac{cov(x, y)}{s_x s_y} = \frac{-1}{\frac{1}{\sqrt{2}} \cdot 2} = \frac{-1}{\frac{2}{\sqrt{2}}} = \frac{-\sqrt{2}}{2} = -\frac{\sqrt{2}}{2}
$$

(2) To find the estimated equation $\hat{y} = a + bx$ using the least squares method, we need to calculate $a$ and $b$ .

The formula for $b$ is:

$$
b = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}
$$

We already calculated the numerator in part (1) as $cov(x, y) \times (n-1)$ , so $\sum_{i=1}^5 (x_i - \bar{x})(y_i - \bar{y}) = -4$ .

Now, let's calculate the denominator:

$$
\sum_{i=1}^5 (x_i - \bar{x})^2 = (1-2)^2 + (2-2)^2 + (2-2)^2 + (2-2)^2 + (3-2)^2 = 1 + 0 + 0 + 0 + 1 = 2
$$

So, $b = \frac{-4}{2} = -2$ .

The formula for $a$ is:

$$
a = \bar{y} - b\bar{x}
$$

We have $\bar{x} = 2$ , $\bar{y} = 2$ , and $b = -2$ , so

$$
a = 2 - (-2)(2) = 2 + 4 = 6
$$

Therefore, the estimated equation is:

$$
\hat{y} = 6 - 2x
$$
