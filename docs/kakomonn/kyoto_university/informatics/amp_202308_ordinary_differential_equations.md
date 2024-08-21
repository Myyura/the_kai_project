---
comments: false
title: 京都大学 情報学研究科 数理工学専攻 2023年8月実施 専門科目 ODE
tags:
  - Kyoto-University
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 専門科目 ODE

## **Author**
Casablanca

## **Description**
### 日本語版
//

### English Version
//

## **Kai**
### (i)
if $k\geq 2$, plug  $x = t^k$ in,
$$ k(k-1)t^{k-2} + kt^{k-1}a(t) + t^kb(t) = 0 $$
thus $$k(k-1) + kta(t)+t^2b(t) = 0$$
since $a(t)$, $b(t)$ are both polynomials of t, $kta(t)+t^2b(t)$ is without a constant term.
thus $k(k-1)=0$,which is in conflict with $k \geq 2$
therefor $k=1$

### (ii)
$a(t) = -tb(t)$

### (iii)
let $x(t) = t u(t)$, we have $$x'(t) = u(t) + tu'(t), x''(t) = 2u'(t) + tu''(t)$$
and obtain:
$$tu''(t) + (2-t^2b(t))u'(t) = 0$$
let $v(t) = u'(t)$
$$t\frac{dv(t)}{dt} + (2-t^2b(t))v(t) = 0$$
for $x(t)$ is a rational function, we can easily see that $u(t)$ is a rational function and $v(t)$ is a rational function.
let $v(t) = \frac{p(t)}{q(t)}$, 
$$t(p'(t)q(t) - p(t)q'(t)) + (2-t^2b(t))p(t)q(t) = 0$$
if $p(t)q(t) \neq 0$, the times of $(2-t^2b(t))p(t)q(t)$ is greater than the times of $t(p'(t)q(t) - p(t)q'(t))$
thus $p(t)q(t) \equiv 0$,$v(t) = 0$, $v(t) = C$, $x(t) = Ct$ is the only ration function solution.
  