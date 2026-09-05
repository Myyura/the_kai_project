---
sidebar_label: "2018年8月実施 複素関数論"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年8月実施 複素関数論

## **Author**
Zero, 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://web.archive.org/web/20190715211433id_/http://www.isee.kyushu-u.ac.jp:80/script/wordpress/wp-content/uploads/H31infait.pdf#page=6)。
解析関数 $f(z) = u + iv$ を考える．ただし， $z = x + iy$ は複素数， $x$ と $y$ は実数， $u$ と $v$ は実数値関数， $i = \sqrt{-1}$ である．x と y が極形式 $x = r\cos\theta$ と $y = r\sin\theta$ で表されるとき，極形
式のコーシー・リーマンの方程式は以下の式で書けることを示せ．

$$
\frac{\partial u}{\partial r} = \frac{1}{r}\frac{\partial v}{\partial \theta},\frac{\partial v}{\partial r} = -\frac{1}{r}\frac{\partial u}{\partial \theta}
$$

### 题目描述

设 $f(z)=u+iv$ 为解析函数，其中

$$
z=x+iy,\qquad i=\sqrt{-1},
$$

$x,y$ 为实变量，$u,v$ 为实值函数。若把 $x,y$ 表示为极坐标

$$
x=r\cos\theta,\qquad y=r\sin\theta,
$$

证明在 $r>0$ 处，直角坐标下的柯西–黎曼方程等价于

$$
\frac{\partial u}{\partial r}
=\frac1r\frac{\partial v}{\partial\theta},
\qquad
\frac{\partial v}{\partial r}
=-\frac1r\frac{\partial u}{\partial\theta}.
$$

## **Kai**
連鎖律より

$$
\begin{aligned}
u_r&=u_x\cos\theta+u_y\sin\theta,\\
u_\theta&=-ru_x\sin\theta+ru_y\cos\theta,\\
v_r&=v_x\cos\theta+v_y\sin\theta,\\
v_\theta&=-rv_x\sin\theta+rv_y\cos\theta.
\end{aligned}
$$

コーシー・リーマンの方程式 $u_x=v_y,\ u_y=-v_x$ を用いると、$r>0$ で

$$
\begin{aligned}
u_r
&=v_y\cos\theta-v_x\sin\theta
=\frac1r v_\theta,\\
v_r
&=-u_y\cos\theta+u_x\sin\theta
=-\frac1r u_\theta.
\end{aligned}
$$
