---
sidebar_label: "2019年度 複素関数論"
sidebar_position: 20
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2019年度 複素関数論


## **Author**
Zero

## **Description**
解析関数 $f(z) = u + iv$ を考える．ただし，$z = x + iy$ は複素数，$x$ と $y$ は実数，$u$ と $v$ は実数値関数，$i = \sqrt{-1}$ である．x と y が極形式 $x = r\cos\theta$ と $y = r\sin\theta$ で表されるとき，極形
式のコーシー・リーマンの方程式は以下の式で書けることを示せ．

$$
\frac{\partial u}{\partial r} = \frac{1}{r}\frac{\partial v}{\partial \theta},\frac{\partial v}{\partial r} = -\frac{1}{r}\frac{\partial u}{\partial \theta}
$$

## **Kai** 
コーシー・リーマンの方程式は以下の式表せる。

$$
\left \{
\begin{align}
&\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \tag{①} \\
&\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \tag{②} \\
\end{align}
\right.
$$

$$
\begin{align}
&\frac{\partial x}{\partial r} = \cos\theta ,\frac{\partial y}{\partial r} = \sin\theta \notag \\
&\frac{\partial x}{\partial \theta} = -r\sin\theta, \notag \\
&\frac{\partial y}{\partial \theta} = r\cos\theta \Leftrightarrow \cos\theta = \frac{1}{r}\frac{\partial y}{\partial \theta} \tag{③}
\end{align}
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
