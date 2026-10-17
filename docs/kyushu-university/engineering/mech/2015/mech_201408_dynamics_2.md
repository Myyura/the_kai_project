---
sidebar_label: "2014年8月実施 問2（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
---

# 九州大学 工学府 機械系専攻 2014年8月実施 機械力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1に示すように、質量の無視できる長さ $l$ の棒があり、左端から $a\;(0\le a\le l)$ の位置に質量 $m$ の質点が取り付けられている。棒の左端はばね定数 $3k$、右端は $k$ のばねでそれぞれ支持されており、平衡状態で棒は水平である（したがって、重力の影響は考えなくてよい）。質点の変位、棒の角変位は微小として以下の問いに答えよ。ただし、運動方程式はニュートンの第二法則に則って求めよ。（50点）

![原題の図1・図2：質点配置を変えた二つの系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_dynamics-2-original.png)

**(1)** 平衡状態からの質点の鉛直上向き変位、棒の反時計方向の回転角変位をそれぞれ $y,\theta$ とする。$a=l/2$ のとき系の固有角振動数を求めよ。また、自由振動では $y,\theta$ はどのような関係となるか。

**(2)** 系の固有角振動数を最大にする $a$ とそのときの固有角振動数を求めよ。自由振動では $y,\theta$ はどのような関係となるか。

**(3)** 図2に示すように、質量 $m$ を $m/2$ ずつに分けて棒の両端に取り付けた。このときの系の固有角振動数と固有モードを求めよ。平衡状態からの重心 G（棒の中心）の鉛直上向き変位、棒の反時計方向の回転角変位をそれぞれ $y,\theta$ として解答せよ。

#### 题目描述

如图1，一根长度为 $l$、质量可忽略的杆，在距左端 $a\;(0\le a\le l)$ 处装有质量为 $m$ 的质点。杆的左端由弹簧常数为 $3k$ 的弹簧支承，右端由弹簧常数为 $k$ 的弹簧支承，平衡时杆水平，因此不必考虑重力影响。质点位移和杆转角均为微小量。回答下列问题，运动方程必须根据牛顿第二定律求得。（50分）

**(1)** 将质点相对平衡位置竖直向上的位移记为 $y$，杆逆时针转角记为 $\theta$。当 $a=l/2$ 时，求系统固有角频率；自由振动时 $y,\theta$ 满足怎样的关系？

**(2)** 求使系统固有角频率最大的 $a$，以及此时的固有角频率。自由振动时 $y,\theta$ 满足怎样的关系？

**(3)** 如图2，将质量 $m$ 均分为两个 $m/2$，分别装在杆的两端。求此时的固有角频率和固有振型。以重心 G（杆中心）相对平衡位置竖直向上的位移和杆逆时针转角分别为 $y,\theta$ 作答。

## **Kai**

### (1)

両端の上向き変位は $y_L=y-a\theta$、$y_R=y+(l-a)\theta$。質点の並進運動と質点まわりのモーメントの式は

$$
\begin{gathered}
m\ddot y=-3ky_L-ky_R\\
=-4ky+k(4a-l)\theta,
\end{gathered}
$$

$$
\begin{gathered}
0=3ka\,y_L-k(l-a)y_R\\
=k(4a-l)y-k\{3a^2+(l-a)^2\}\theta.
\end{gathered}
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
\boxed{\begin{gathered}
\omega_1=\sqrt{\frac{2k}{m}},\\
\boldsymbol\phi_1=\begin{pmatrix}1\\2/l\end{pmatrix},\\
\omega_2=\sqrt{\frac{6k}{m}},\\
\boldsymbol\phi_2=\begin{pmatrix}1\\-2/l\end{pmatrix}.
\end{gathered}}
$$

第1モードでは左端が、第2モードでは右端が静止する。
