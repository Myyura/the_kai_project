---
sidebar_label: "2015年度 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2015年度 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

長さ $l$、質量を無視できる剛体棒の左端から $a$（$0\le a\le l$）の位置に質点 $m$ を取り付ける。左端をばね定数 $3k$、右端を $k$ のばねで支持する。平衡時は棒が水平であり、平衡からの微小振動では重力の影響を考えなくてよい。**ニュートンの第二法則によって**運動方程式を求め、以下に答えよ。（50 点）

![問題の装置（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2015/dynamics-2-original.png)

1. 質点の鉛直上向き変位を $y$、棒の反時計回り角変位を $\theta$ とする。$a=l/2$ のとき、固有角振動数と自由振動時の $y,\theta$ の関係を求めよ。
2. 固有角振動数を最大にする $a$ とその最大値、およびそのときの $y,\theta$ の関係を求めよ。
3. 質量 $m$ を $m/2$ ずつ棒の両端に分けて取り付けた図2の系について、固有角振動数と固有モードを求めよ。この場合は棒の中心 G の上向き変位を $y$、反時計回り角変位を $\theta$ とする。

#### 题目描述

无质量刚杆长 $l$，距左端 $a$ 处装质量 $m$，左、右两端分别用刚度 $3k,k$ 的弹簧支撑，静平衡时杆水平。位移均相对静平衡，采用牛顿第二定律。以质点向上位移 $y$ 和杆逆时针转角 $\theta$ 为坐标，求 $a=l/2$ 时的固有频率及位移关系，再求使频率最大的 $a$ 和相应关系。最后把质量等分为两端各 $m/2$，改用杆中心的 $y$ 与转角 $\theta$，求频率及模态。

## **Kai**

### (1)

両端の上向き変位は $y_L=y-a\theta$、$y_R=y+(l-a)\theta$。質点の並進運動と質点まわりのモーメントの式は

$$
m\ddot y=-3ky_L-ky_R=-4ky+k(4a-l)\theta,
$$

$$
0=3ka\,y_L-k(l-a)y_R
=k(4a-l)y-k\{3a^2+(l-a)^2\}\theta.
$$

第2式の左辺がゼロなのは、棒に質量がなく、質点まわりの慣性モーメントもゼロだからである。$a=l/2$ では第2式から $\theta=y/l$、第1式から $m\ddot y+3ky=0$。したがって

$$
\boxed{\omega=\sqrt{\frac{3k}{m}},\qquad y=l\theta.}
$$

### (2)

$D(a)=3a^2+(l-a)^2$ とおくと

$$
\theta=\frac{4a-l}{D(a)}y,\qquad
m\ddot y+\frac{3kl^2}{D(a)}y=0,
$$

$$
D(a)=4\left(a-\frac l4\right)^2+\frac{3l^2}{4}.
$$

よって

$$
\boxed{a=\frac l4,\qquad\omega_{\max}=2\sqrt{\frac{k}{m}},\qquad\theta=0.}
$$

このとき棒は水平のまま並進する。

### (3)

重心まわりの慣性モーメントは $I_G=ml^2/4$。ニュートンの並進・回転の式をまとめると

$$
\begin{pmatrix}m&0\\0&ml^2/4\end{pmatrix}
\begin{pmatrix}\ddot y\\\ddot\theta\end{pmatrix}
+\begin{pmatrix}4k&-kl\\-kl&kl^2\end{pmatrix}
\begin{pmatrix}y\\\theta\end{pmatrix}=\boldsymbol0.
$$

特性方程式は

$$
(4k-m\omega^2)^2-4k^2=0.
$$

したがって、任意の非零定数倍を許して

$$
\boxed{\omega_1=\sqrt{\frac{2k}{m}},\quad
\boldsymbol\phi_1=\begin{pmatrix}1\\2/l\end{pmatrix},\qquad
\omega_2=\sqrt{\frac{6k}{m}},\quad
\boldsymbol\phi_2=\begin{pmatrix}1\\-2/l\end{pmatrix}.}
$$

第1モードでは左端が、第2モードでは右端が静止する。
