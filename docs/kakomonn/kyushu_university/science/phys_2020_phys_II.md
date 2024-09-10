---
comments: false
title: 九州大学 理学府 物理学専攻 2020年度 物理学 [II]
tags:
  - Kyushu-University
---
# 九州大学 理学府 物理学専攻 2020年度 物理学 \[II\]

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### \[A-I\]
#### (1)

$$
  \begin{aligned}
  \Phi_0 = \frac{q}{4 \pi \varepsilon_0 r}
  \end{aligned}
$$

#### (2)

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0
  \sqrt{r^2 \sin^2 \theta + (r \cos \theta - d)^2}}
  \\
  &= \frac{q}{4 \pi \varepsilon_0 \sqrt{r^2 - 2dr \cos \theta + d^2}}
  \end{aligned}
$$

#### (3)
(2) より、 $d/r$ の1次までで

$$
  \begin{aligned}
  \Phi_1
  &= \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 - \frac{2d \cos \theta}{r} + \frac{d^2}{r^2} \right)^{-1/2}
  \\
  &\simeq \frac{q}{4 \pi \varepsilon_0 r}
  \left(1 + \frac{d \cos \theta}{r} \right)
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \Phi_d
  &= \frac{qd \cos \theta}{4 \pi \varepsilon_0 r^2}
  \end{aligned}
$$

である。

#### (4)

$$
  \begin{aligned}
  E_r
  &= \left( - \boldsymbol{\nabla} \Phi_d \right) \cdot \boldsymbol{e}_r
  \\
  &= - \frac{\partial \Phi_d}{\partial r}
  \\
  &= \frac{p \cos \theta}{2 \pi \varepsilon_0 r^3}
  \end{aligned}
$$

### \[A-II\]
#### (1)
$\boldsymbol{\nabla} \Phi_u = - \boldsymbol{E}_0 = - E_0 \boldsymbol{e}_z$
から、適当な定数 $c$ を使って、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z + c
  \end{aligned}
$$

と書けることがわかるが、原点で $\Phi_u = 0$ であることから $c=0$ がわかり、

$$
  \begin{aligned}
  \Phi_u
  &= - E_0 z
  \\
  &= - E_0 r \cos \theta
  \end{aligned}
$$

を得る。

#### (2)
\[A-II\] (2) と \[A-I\] (3) から

$$
\begin{aligned}
\Phi
&= \Phi_u + \Phi_d
\\
&= - E_0 r \cos \theta + \frac{p \cos \theta}{4 \pi \varepsilon_0 r^2}
\\
&= \frac{- 4 \pi \varepsilon_0 E_0 r^3 + p}{4 \pi \varepsilon_0 r^2}
\cos \theta
\end{aligned}
$$

がわかるが、$r=a$ でこれが $\theta$ によらない定数になることから、

$$
\begin{aligned}
p = 4 \pi \varepsilon_0 E_0 a^3
\end{aligned}
$$

を得る。

#### (3)
$r \geq a$ において、(2) より

$$
\begin{aligned}
\Phi
&= \left( -r + \frac{a^3}{r^2} \right) E_0 \cos \theta
\end{aligned}
$$

なので、 $r$ 方向の電場 $E_r = E_r(r, \theta)$ について

$$
\begin{aligned}
E_r (r, \theta)
&= - \frac{\partial \Phi}{\partial r}
\\
&= \left( 1 + \frac{2a^3}{r^3} \right) E_0 \cos \theta
\\
\therefore \ \ 
E_r (a, \theta) &= 3 E_0 \cos \theta
\end{aligned}
$$

がわかる。
そこで、電場に関するガウスの法則を導体表面に適用して、

$$
\begin{aligned}
\sigma
&= \varepsilon_0 E_r(a, \theta)
\\
&= 3 \varepsilon_0 E_0 \cos \theta
\end{aligned}
$$

を得る。

### \[B-I\]
例えば、 $a \gt 0, b \gt 0$ として、
4点 $(0,0,b), (a,0,b), (a,0,-b), (0,0,-b)$ を頂点とする長方形を考える。
この長方形を貫く電流は $(0, a j_y, 0)$ であるから、
この長方形に関してアンペールの法則を適用すると、

$$
\begin{aligned}
a H_x^{II}(z=b) + \int_b^0 dz \ H_z^{II}
+ \int_0^{-b} dz \ H_z^I - a H_x^I(z=-b)
+ \int_{-b}^0 dz \ H_z^I + \int_0^b dz \ H_z^{II}
&= a j_y
\\
\therefore \ \ 
H_x^{II}(z=b) - H_x^I(z=-b)
+ \frac{1}{a} \int_b^0 dz \ H_z^{II} + \frac{1}{a} \int_0^{-b} dz \ H_z^I
+ \frac{1}{a} \int_{-b}^0 dz \ H_z^I + \frac{1}{a} \int_0^b dz \ H_z^{II}
&= j_y
\end{aligned}
$$

となるが、ここで $b \to +0$ とすると、題意の式を得る。

### \[B-II\]