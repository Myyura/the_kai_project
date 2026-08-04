---
sidebar_label: "2018年8月実施 複素関数論"
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Cauchy-Riemann-Equations
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年8月実施 複素関数論

## **Author**
Zero

## **Description**
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
コーシー・リーマンの方程式は以下の式表せる。

$$
\left \{
\begin{aligned}
&\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}
  && \qquad\text{(\textcircled{1})} \\
&\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
  && \qquad\text{(\textcircled{2})} \\
\end{aligned}
\right.
$$

$$
\begin{aligned}
&\frac{\partial x}{\partial r} = \cos\theta ,\frac{\partial y}{\partial r} = \sin\theta \notag \\
&\frac{\partial x}{\partial \theta} = -r\sin\theta, \notag \\
&\frac{\partial y}{\partial \theta} = r\cos\theta \Leftrightarrow \cos\theta = \frac{1}{r}\frac{\partial y}{\partial \theta} \tag{\textcircled{3}}
\end{aligned}
$$

① の両辺に $\frac{\partial x}{\partial r} = \cos\theta$ をかける

$$
\begin{aligned}
&\frac{\partial u}{\partial x} \cdot \frac{\partial x}{\partial r} = \frac{\partial v}{\partial y} \cdot \cos\theta \\
&\frac{\partial u}{\partial r} = \frac{\partial v}{\partial y} \cdot \cos\theta \\
&\frac{\partial u}{\partial r} = \frac{\partial v}{\partial y} \cdot \frac{1}{r}\frac{\partial v}{\partial \theta} \\
\therefore &\frac{\partial u}{\partial r} = \frac{1}{r} \cdot \frac{\partial v}{\partial \theta}
\end{aligned}
$$

② の両辺に $-\frac{\partial x}{\partial r} = -\cos\theta$ をかける

$$
\begin{aligned}
&\frac{\partial u}{\partial y} \cdot (-\cos\theta) = \frac{\partial v}{\partial x} \cdot \frac{\partial x}{\partial r} \\
&-\frac{\partial u}{\partial y} \cdot \cos\theta = \frac{\partial v}{\partial r} \\
&\frac{\partial v}{\partial r} = -\frac{\partial u}{\partial y} \cdot \cos\theta \\
&\frac{\partial v}{\partial r} = -\frac{\partial u}{\partial y} \cdot \frac{1}{r} \frac{\partial u}{\partial \theta} \\
\therefore &\frac{\partial v}{\partial r} = -\frac{1}{r} \cdot \frac{\partial u}{\partial \theta}
\end{aligned}
$$
