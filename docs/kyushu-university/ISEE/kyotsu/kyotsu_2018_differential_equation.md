---
sidebar_label: "2018年度 微分方程式"
sidebar_position: 24
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年度 微分方程式

## **Author**
Zero

## **Description**
次の微分方程式の一般解を求めよ．なお，$y'$ は関数 $y(x)$ の $x$ に関する $1$ 階導関数を表している．

(1) $y' = \frac{9(y^2 + 1)}{x^3 - 3x + 2}$ 

(2) $y'' - 3y' + 2y = e^{2x}$

## **Kai** 
### (1)

$$
\begin{aligned}
\frac{dy}{dx} &= \frac{9(y^2 + 1)}{x^3 - 3x + 2} \\
\frac{dy}{y^2 + 1} &= \frac{9}{x^3 - 3x + 2}dx
\end{aligned}
$$

両辺を積分すると、

$$
\begin{align}
&\int\frac{dy}{y^2 + 1} \tag{i}\\
\quad = \quad& \int\frac{9}{x^3 - 3x + 2}dx \tag{ii}   
\end{align}
$$

$$
(\text{i}) = \tan^{-1} y
$$

$$
\int\frac{9}{x^3 - 3x + 2}dx = \int\frac{9}{(x - 1)^2(x + 2)}dx
$$

$$
\begin{aligned}
(\text{ii}) &= \int\bigg[\frac{3}{(x - 1)^2} + \frac{-1}{x - 1} + \frac{1}{x + 2}\bigg]dx \\
&= \int 3(x - 1)^{-2}dx - \int \frac{1}{x - 1}dx + \int \frac{1}{x + 2}dx \\
&= -3(x - 1)^{-1} - \log|x - 1| + \log|x + 2| \\
&= -\frac{3}{x - 1} + \log\bigg|\frac{x + 2}{x - 1}\bigg|
\end{aligned}
$$

以上から、

$$
\tan^{-1}y = -\frac{3}{x - 1} + \log\bigg|\frac{x + 2}{x - 1}\bigg| + C
$$

$$
y = \tan\bigg[-\frac{3}{x - 1} + \log\bigg|\frac{x + 2}{x - 1}\bigg| + C\bigg]
$$

### (2)

$$
\begin{align}
y'' - 3y' + 2y = e^{2x} \tag{*}
\end{align}
$$

$y'' - 3y' + 2y = 0$ について、特性方程式から、

$$
\lambda^2 - 3\lambda + 2 = 0
$$

$$
\lambda = 1,2
$$

$y$ の一般解は

$$
y = Ae^x + Be^{2x}
$$

特殊解を求める。$y = Cxe^{2x}$ とする。

$$
\begin{aligned}
y' &= C(e^{2x} + 2xe^{2x}) \\
&= C(1 + 2x)e^{2x} \\
y'' &= c[2e^{2x} + 2(1 + 2x)e^{2x}] \\
&= C \cdot (4 + 4x)e^{2x}
\end{aligned}
$$

$(*)$ に代入

$$
C(4 + 4x) - 3C(1 + 2x) + 2Cx = 1
$$

$$
C = 1
$$

$(*)$ の一般解は

$$
y = Ae^x + Be^{2x} + xe^{2x}
$$