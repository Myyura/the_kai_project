---
comments: false
description: 京都大学 大学院 理学研究科 化学専攻 2023年度 物理学 基礎
keywords: Kyoto-University, 2023
---

## **Source**
京都大学 大学院 理学研究科 化学専攻 2023年度 物理学 基礎

By: Miyake

## **Description**

## **Kai**
### 問 A
$-V/d$

### 問 B
$\vec{v} \times \vec{B} = (v_yB, -v_xB, 0)$ なので、 $x,y$ 成分の運動方程式は

$$
\begin{aligned}
\frac{d}{dt} v_x
&= \frac{-e}{m} \left( - \frac{V}{d} + v_yB \right)
\\
&= \omega A - \omega v_y
\\
\frac{d}{dt} v_y
&= \frac{-e}{m} \left( - v_xB \right)
\\
&= \omega v_x
\end{aligned}
$$

となる。

### 問 C
虚数単位を $i$ とすると、問 B の運動方程式から、

$$
\begin{aligned}
\frac{d}{dt} (v_x + iv_y)
&= \omega A - \omega v_y + i \omega v_x
\\
&= i \omega (v_x + i v_y - iA)
\end{aligned}
$$

が得られるので、 $\xi = v_x + iv_y - iA$ とおくと、

$$
\begin{aligned}
\frac{d}{dt} \xi &= i \omega \xi
\end{aligned}
$$

となるので、これを積分すると、

$$
\begin{aligned}
\xi &= c e^{i \omega t}
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 } )
\end{aligned}
$$

を得る。
$t=0$ のとき $v_x=0, v_y=0$ であり $\xi=-iA$ であるから、 $c=-iA$ であり、

$$
\begin{aligned}
\xi &= -iA e^{i \omega t}
\\
\therefore \ \ 
v_x + iv_y - iA &= -iA \left( \cos \omega t + i \sin \omega t \right)
\\
\therefore \ \ 
v_x + iv_y &= A \sin \omega t + iA \left( 1 - \cos \omega t \right)
\end{aligned}
$$

となって、式 (6), (7) が得られる。

### 問 D
式 (6) を積分すると、

$$
\begin{aligned}
x = - \frac{A}{\omega} \cos \omega t + c
\ \ \ \ \ \ \ \ ( c \text{ は積分定数 })
\end{aligned}
$$

となるが、 $t=0$ のとき $x=0$ であるから、 $c=A/\omega$ であり、

$$
\begin{aligned}
x = \frac{A}{\omega} (1 - \cos \omega t)
\end{aligned}
$$

を得る。

### 問 E
（あ）

### 問 F
#### (a)
式 (8) によると $x$ の最大値は $2A/\omega$ であるから、求める $B_c$ は

$$
\begin{aligned}
\frac{2A}{\omega} = d
\end{aligned}
$$

が成り立つときの $B$ であり、

$$
\begin{aligned}
B_c = \frac{1}{d} \sqrt{\frac{2mV}{e}}
\end{aligned}
$$

がわかる。

#### (b)
定常運動のとき、式 (10) は次のようになる：

$$
\begin{aligned}
0 &= \omega A - \omega v_y - \frac{1}{\tau} v_x
\\
0 &= \omega v_x - \frac{1}{\tau} v_y
\end{aligned}
$$

電子の速度方向とx軸とのなす角が45°になるということは $v_x=v_y$ ということであり、
2番目の式から、 $\tau = 1 / \omega$ を得る。