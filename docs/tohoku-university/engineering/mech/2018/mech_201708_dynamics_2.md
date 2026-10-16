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

2017年10月・2018年4月入学対象、2017年8月実施。

水平面上の質量 $m_1$ の台車1を、ばね $k_1$ で壁に結ぶ。その上に質量 $m_2$ の台車2を置き、左右の2本のばね $k_2$ で台車1に結ぶ。さらに台車2の上に質量 $m_3$ の台車3を置き、左右の2本のばね $k_3$ で台車2に結ぶ。台車3に $F(t)=P\sin\omega t$ を右向きに加える。各台車は摩擦なく水平に動き、ばねの質量を無視する。静的平衡からの絶対変位を $x_1,x_2,x_3$ とする。

1. 各台車の運動方程式を導け。
2. $m_1=m_2=2m,m_3=m,k_1=k,k_2=k_3=k/2$ のとき、すべての固有角振動数を求めよ。
3. (2) の条件で、定常振動の $x_3$ がゼロとなる $\omega$ と、$x_2$ に対する $x_1$ の振幅比を求めよ。

![三台車の等価なばね結合。左右二本のばねを並列にまとめた表示](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_dynamics2.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

水平面上的台车1质量为 $m_1$，由弹簧 $k_1$ 连墙。车2质量 $m_2$，在车1上，左右各由一根 $k_2$ 弹簧连到车1。车3质量 $m_3$，在车2上，左右各由一根 $k_3$ 弹簧连到车2，并承受向右外力 $P\sin\omega t$。无摩擦，忽略弹簧质量；$x_i$ 为相对平衡位置的绝对位移。（1）列方程。（2）取 $m_1=m_2=2m,m_3=m,k_1=k,k_2=k_3=k/2$，求全部固有角频率。（3）求稳态中车3静止时的激励角频率以及车1对车2的振幅比。

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
(2k-2m\omega^2)X_1-kX_2=0,\quad
-kX_1+(2k-2m\omega^2)X_2=0,\quad -kX_2=P.
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
