---
sidebar_label: "2024年8月実施 常微分方程式"
tags:
  - Kyoto-University
  - Mathematics.Differential-Equations.Second-Order-Linear-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Riccati-Equation
---
# 京都大学 情報学研究科 数理工学専攻 2024年8月実施 常微分方程式

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

r(t) を $t$ のある関数として次の微分方程式を考える.

$$
\frac{d^2x}{dt^2} = r(t)x \qquad (1)
$$

$\omega(t)$ を $t$ のある関数として、

$$
\phi(t) = \exp\left(\int \omega(t) dt\right)
$$

としたとき, $x = \phi(t)$ は $r(t)$ の定義域上で式(1)の解になるものとする。以下の問いに答えよ。ただし、関数 $r(t), \omega(t), \phi(t)$ は $\mathbb{C}$ から高々有限個の点を除いた集合を定義域とし、定義域上で少なくとも連続であるとする.

(i) $\omega(t)$ が満たす1階微分方程式を求めよ.

(ii) $\phi(t)$ が $t$ の有理関数となるとき, $\omega(t)$ と $r(t)$ も $t$ の有理関数であることを示せ.

以下では、 $\phi(t)$ は $t$ の有理関数であり, $r(t)$ は恒等的には零ではないものと仮定する.

(iii) $\lim_{t \to \infty} \omega(t) = 0$ であることを示せ.

(iv) $r_1$ と $r_2$ を、それぞれ、 $r(t)$ の分子と分母の次数とする。 $r_2 > r_1 + 1$ であることを示せ.

### 题目描述

设 $r(t)$ 是 $t$ 的函数，考虑微分方程

$$
\frac{d^2x}{dt^2}=r(t)x.
\tag{1}
$$

再设 $\omega(t)$ 是 $t$ 的函数，并定义

$$
\phi(t)
=
\exp\!\left(\int\omega(t)\,dt\right).
$$

假设 $x=\phi(t)$ 在 $r(t)$ 的定义域上是方程 (1) 的解。函数
$r(t)$、$\omega(t)$、$\phi(t)$ 的定义域均为复平面
$\mathbb{C}$ 去掉至多有限个点后的集合，并且它们在定义域上至少连续。回答：

1. 求 $\omega(t)$ 所满足的一阶微分方程。
2. 证明：若 $\phi(t)$ 是 $t$ 的有理函数，则
   $\omega(t)$ 和 $r(t)$ 也都是 $t$ 的有理函数。

以下再假设 $\phi(t)$ 是 $t$ 的有理函数，并且 $r(t)$ 不恒等于零。

3. 证明

$$
\lim_{t\to\infty}\omega(t)=0.
$$

4. 分别以 $r_1$、$r_2$ 表示有理函数 $r(t)$ 的分子次数和分母次数。证明

$$
r_2>r_1+1.
$$

## **Kai**

(i) $x = \phi(t)$ は $\frac{d^2x}{dt^2} = r(t)x$ の解であるから、 $\phi''(t) = r(t)\phi(t)$ が成り立つ。

$\phi(t) = \exp\left(\int \omega(t) dt\right)$ より、

$\phi'(t) = \omega(t) \phi(t)$

$\phi''(t) = \omega'(t) \phi(t) + \omega(t) \phi'(t) = \omega'(t) \phi(t) + \omega(t)^2 \phi(t) = (\omega'(t) + \omega(t)^2)\phi(t)$

したがって、 $\omega'(t) + \omega(t)^2 = r(t)$ が成り立つ。

(ii) $\phi(t)$ が $t$ の有理関数であるとする。このとき、 $\phi(t) = \exp\left(\int \omega(t) dt\right)$ より、 $\ln(\phi(t)) = \int \omega(t) dt$ が成り立つ。 $\phi(t)$ が有理関数であるから、 $\ln(\phi(t))$ の微分も有理関数である。したがって、 $\omega(t) = \frac{d}{dt} \ln(\phi(t)) = \frac{\phi'(t)}{\phi(t)}$ は $t$ の有理関数である。

$\omega'(t) = r(t) - \omega(t)^2$ より、 $r(t) = \omega'(t) + \omega(t)^2$ である。 $\omega(t)$ が有理関数であるから、 $\omega'(t)$ も有理関数であり、 $\omega(t)^2$ も有理関数である。したがって、 $r(t)$ も $t$ の有理関数である。

(iii) $\phi(t)=P(t)/Q(t)$ とし、 $P,Q$ を零でない多項式とする。 $m=\deg P-\deg Q$ とおけば、ある零でない定数 $c$ に対して

$$
\phi(t)=ct^m\left(1+O(t^{-1})\right)\qquad(t\to\infty)
$$

と書ける。(ii) より $\omega=\phi'/\phi$ なので、この式を対数微分して

$$
\omega(t)=\frac{m}{t}+O(t^{-2})
$$

を得る。特に $m=0$ のときは $\omega(t)=O(t^{-2})$ である。いずれの場合も

$$
\boxed{\lim_{t\to\infty}\omega(t)=0}
$$

が成り立つ。

(iv) 上の漸近式から

$$
\omega'(t)=O(t^{-2}),\qquad \omega(t)^2=O(t^{-2})
$$

である。したがって、(i) の関係式より

$$
r(t)=\omega'(t)+\omega(t)^2=O(t^{-2})\qquad(t\to\infty)
$$

となる。 $r$ は恒等的には零でないと仮定されているので、既約な形で $r(t)=R(t)/S(t)$ と書き、 $r_1=\deg R$ 、 $r_2=\deg S$ とすれば、この評価から

$$
r_2-r_1\ge 2
$$

でなければならない。次数は整数なので、これは

$$
\boxed{r_2>r_1+1}
$$

と同値である。
