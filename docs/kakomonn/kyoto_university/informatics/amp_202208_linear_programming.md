---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2022年8月実施 専門科目 Linear Programming
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2022年8月実施 専門科目 Linear Programming

## **Author**
Casablanca

## **Description**
### 日本語版
//
### English Version
//



## **Kai**
### (i)
Lagrangian: $$L(x,\mu) = c^\top x + \mu^\top(b-Ax)$$
Lagrange dual function:
$$
\begin{aligned}
g(\mu)=& \inf_{x} \{ (c^\top - \mu^\top A )x + \mu^\top b \} \\
=&b^\top \mu, c + A\mu \succeq \mathbf{0}
\end{aligned}
$$
dual problem
$$
\begin{aligned}
D:&\text{Maximize} & b^\top \mu  \\
&\text{subject to} & c - A\mu \succeq \mathbf{0}
\end{aligned}
$$
thus $$b^\top r \geq b^\top r^*, Ay = b$$
since $$c^\top y \leq  b^\top r + \epsilon$$
and from duality we know $$c^\top y \geq b^\top r^*$$
thus $$b^\top r^* < b^\top r + \epsilon$$
then $$b^\top r^* - \epsilon < b^\top r \leq b^\top r^*$$


### (ii)
#### (a)
$$c^\top d^* = - \frac{c^\top Y^2 (c-A^\top p)}{2||Y(c- A^\top p)||}$$

$$
\begin{aligned}
(Y(c- A^\top p))^\top (Y(c-A^\top p)) =& (c^\top - p^\top A)YY(c-A^\top p)  \\
=& c^\top Y^2 c - c^\top Y^2 A^\top p - p^\top AY^2 c + p^\top A Y^2 A^\top p \\
= & c^\top Y^2 c - c^\top Y^2 A^\top p - p^\top AY^2 c + p^\top AY^2 c \\
= & c^\top Y^2 (c - A^\top p) \\
\end{aligned}
$$
thus $c^\top d^* = -\frac{c^\top Y^2(c-A^\top p)}{2||Y(c- A^\top p)||} = \frac{(Y(c-A^\top p)) ^ 2}{-2||Y(c-A^\top p)||} = - \frac{||Y(c-A^\top p)||}{2}$

#### (b)
write Q as : 
$$
\begin{aligned}
Q:&\text{Minimize} & c^\top d \\
&\text{subject to} & Ad & = \mathbf{0} \\
&\text{ } &d^\top (Y^{-1})^2d - \frac 14 & \leq 0
\end{aligned}
$$

Lagrangian : $$L(d,\lambda, \mu) = c^\top d + \lambda (d^\top (Y^{-1})^2 d - \frac 14) + \mu (Ad)$$

we get KKT_conditions:
$$
\text{ } \left\{
\begin{aligned}
\lambda (Y^{-1})^2 \widehat{d} + c + A \mu & = & 0 \\
\lambda   & \geq &0 \\
A \widehat{d} =  0, \widehat{d}^\top (Y^{-1})^2 \widehat{d} & \leq &\frac  14
\end{aligned}
\right.
$$

$(1) Ad^* = - \frac{AY^2c - AY^2A^\top p}{constant} = - \frac{AY^2C - AY^2C}{constant} = 0$
$(2) ||Y^{-1}d|| = || \frac{Y(c - A^\top p)}{2 ||Y(c-A^\top p) ||} || = \frac 12$
$(3) \lambda ^* (- \frac{c - A^\top p}{2 ||Y(c-A^\top p)||}) + c^\top + A \mu^* = 0$
$d^*, \lambda^* , \mu ^*$ satisfies KKT-conditions for $\lambda ^* = 2||Y(c-A^\top p)||, \mu^* = -p$

#### (c)
$$ A(y+d^*) = b$$
$$d^* = - \frac Y2 \frac{Y(c-A^\top p)}{ ||Y(c-A^\top p)||}$$
$$d^* = -\frac 12 Y \vec{n}, |d_i| < \frac 12 y_i$$
and easy to see: $$-\mathbf{1}^\top \frac Y2 \leq d^* \leq \mathbf{1}^\top \frac Y2$$
thus $$y + d^* \succeq \mathbf{0}$$
thus $\widetilde{x}$ is feasible, and we get:
$$c^\top \widetilde{x} = c^\top y + c^\top d^* = c^\top y - \frac{||Y(c-A^\top p)||}{2} < c^\top y$$

