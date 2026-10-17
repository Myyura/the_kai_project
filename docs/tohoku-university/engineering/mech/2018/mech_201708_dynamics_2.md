---
sidebar_label: "2017年8月実施 機械力学 第2問"
tags:
  - Tohoku-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Forced-Vibration
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 機械力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2. 図2に示すような，3つの台車および5つのばねからなる振動系を考える。質量 $m_1$ の台車1は水平面上におかれ，ばね定数 $k_1$ のばねで壁と連結されている。質量 $m_2$ の台車2は台車1上におかれ，ばね定数 $k_2$ の2つのばねで台車1と連結されている。また，質量 $m_3$ の台車3は台車2上におかれ，ばね定数 $k_3$ の2つのばねで台車2と連結されるとともに，強制力 $F(t)=P\sin\omega t$ で水平方向に加振されている。ここで，$P$ は強制力の振幅，$\omega$ は角振動数，$t$ は時間である。3つの台車は摩擦なく水平方向にのみ移動する。台車1，2および3の静的釣り合い位置 O からの絶対変位をそれぞれ $x_1,x_2$ および $x_3$ とする。ばねの質量は無視できるものとする。振動系が定常状態にあるとき，以下の問いに答えよ。

**(1)** それぞれの台車に対する運動方程式を導け。

**(2)** $m_1=m_2=2m,\ m_3=m,\ k_1=k,\ k_2=k_3=k/2$ のとき，系のすべての固有角振動数を求めよ。

**(3)** 問(2)の条件下で，$x_3$ が0となる $\omega$ を求めよ。また，そのときの $x_2$ に対する $x_1$ の振幅比を求めよ。

![図2 3台車と5ばねからなる振動系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_dynamics_2_original_figure_1.png)

#### 题目描述

2. 考虑图2所示由三辆小车和五根弹簧组成的振动系统。质量为 $m_1$ 的小车1放置在水平面上，通过弹簧常数为 $k_1$ 的弹簧与墙壁连接。质量为 $m_2$ 的小车2放置在小车1上，通过两根弹簧常数均为 $k_2$ 的弹簧与小车1连接。质量为 $m_3$ 的小车3放置在小车2上，通过两根弹簧常数均为 $k_3$ 的弹簧与小车2连接，同时受到水平方向的激振力 $F(t)=P\sin\omega t$。其中 $P$ 为激振力振幅，$\omega$ 为角频率，$t$ 为时间。三辆小车均无摩擦地仅沿水平方向运动。小车1、2、3相对静态平衡位置 O 的绝对位移分别为 $x_1,x_2,x_3$。忽略弹簧质量。当振动系统处于稳态时，回答下列问题。

**(1)** 推导各辆小车的运动方程。

**(2)** 当 $m_1=m_2=2m,\ m_3=m,\ k_1=k,\ k_2=k_3=k/2$ 时，求系统的全部固有角频率。

**(3)** 在第(2)问的条件下，求使 $x_3$ 为0的 $\omega$，并求此时 $x_1$ 相对 $x_2$ 的振幅比。

图2给出了三辆小车的连接、受力及绝对位移方向。

## **Kai**

### (1)

左右の二本のばねはどちらも相対変位を元に戻すので、$2k_2,2k_3$ の並列ばねに相当する。

$$
\boxed{\begin{aligned}
m_1\ddot x_1+(k_1+2k_2)x_1-2k_2x_2&=0,\\
m_2\ddot x_2-2k_2x_1+(2k_2+2k_3)x_2-2k_3x_3&=0,\\
m_3\ddot x_3-2k_3x_2+2k_3x_3&=P\sin\omega t.
\end{aligned}}
$$

### (2)

指定の条件では

$$
M=m\operatorname{diag}(2,2,1),\qquad
K=k\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}.
$$

$\lambda=\omega^2$ として

$$
\det(K-\lambda M)=(k-m\lambda)\{4(k-m\lambda)^2-3k^2\}=0.
$$

従って

$$
\boxed{\omega_1=\frac{\sqrt3-1}{2}\sqrt{\frac km},\quad
\omega_2=\sqrt{\frac km},\quad
\omega_3=\frac{\sqrt3+1}{2}\sqrt{\frac km}}.
$$

### (3)

$x_i=X_i\sin\omega t$ として $X_3=0$ を代入すると

$$
\begin{gathered}
(2k-2m\omega^2)X_1-kX_2=0,\\
-kX_1+(2k-2m\omega^2)X_2=0,\\
-kX_2=P.
\end{gathered}
$$

$X_2\ne0$ より前二式の行列式がゼロとなり、$(2k-2m\omega^2)^2=k^2$。したがって

$$
\boxed{\omega=\sqrt{\frac{k}{2m}},\quad X_1/X_2=1\ \text{（同位相）}},
$$

$$
\boxed{\omega=\sqrt{\frac{3k}{2m}},\quad X_1/X_2=-1\ \text{（逆位相）}}.
$$

振幅の大きさの比はいずれも1。$X_2=-P/k$ なので、台車3に及ぼすばね力 $kX_2\sin\omega t=-P\sin\omega t$ が外力を打ち消す。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 18ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
