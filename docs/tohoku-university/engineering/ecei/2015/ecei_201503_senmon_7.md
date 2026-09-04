---
sidebar_label: 2015年3月実施 専門科目 問題7 物理専門2
tags:
  - Tohoku-University
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 専門科目 問題7 物理専門2

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

複素変数 $z$ の関数

$$
f(z)=\frac{z^{a-1}}{z+1}
$$

を考える。ただし，$a$ は，$0<a<1$ を満たす実定数である。また，$C_1,C_2,C_3,C_4$ は，以下のように定義された積分路である。

$$
\begin{aligned}
C_1&:z=t&&(r\le t\le R),\\
C_2&:z=Re^{it}&&(0\le t\le2\pi),\\
C_3&:z=(R+r-t)e^{2\pi i}&&(r\le t\le R),\\
C_4&:z=re^{i(2\pi-t)}&&(0\le t\le2\pi).
\end{aligned}
$$

ただし，$t$ は媒介変数であり，$i$ は虚数単位である。また，$r$ と $R$ はそれぞれ $0<r<1$ と $1<R$ を満たす実数である。以下の問に答えよ。

(1) 複素積分 $\int_{C_1+C_2+C_3+C_4}f(z)\,dz$ の値を求めよ。

(2) 複素積分 $\lim_{R\to+\infty}\int_{C_2}f(z)\,dz$，および $\lim_{r\to+0}\int_{C_4}f(z)\,dz$ の値を求めよ。

(3) 複素積分 $\int_{C_1}f(z)\,dz$ と $\int_{C_3}f(z)\,dz$ との間に成り立つ関係式を求めよ。

(4) 任意の実数 $x$ に対して，等式

$$
I=\int_0^{+\infty}\frac{x^{a-1}}{x+1}\,dx=\frac\pi{\sin(\pi a)}\qquad(0<a<1)
$$

が成り立つことを示せ。

### 题目描述

设 $0<a<1$，$f(z)=z^{a-1}/(z+1)$。取 $0<r<1<R$，围道为

$$
\begin{aligned}
C_1&:z=t&&(r\le t\le R),\\
C_2&:z=Re^{it}&&(0\le t\le2\pi),\\
C_3&:z=(R+r-t)e^{2\pi i}&&(r\le t\le R),\\
C_4&:z=re^{i(2\pi-t)}&&(0\le t\le2\pi).
\end{aligned}
$$

即沿正实轴上岸向右、大圆逆时针、正实轴下岸向左、小圆顺时针的钥匙孔围道。

1. 求 $\int_{C_1+C_2+C_3+C_4}f(z)\,dz$。
2. 求 $R\to\infty$ 时 $C_2$ 上的积分极限，及 $r\to0$ 时 $C_4$ 上的积分极限。
3. 求 $C_1,C_3$ 上积分之间的关系。
4. 证明 $\int_0^\infty x^{a-1}/(x+1)\,dx=\pi/\sin(\pi a)$。

## **Kai**

取支路 $z^{a-1}=e^{(a-1)(\log|z|+i\arg z)}$，$0<\arg z<2\pi$。

### (1)

围道内唯一极点为 $z=-1$，其辐角为 $\pi$，故

$$
\operatorname{Res}_{z=-1}f(z)=e^{i\pi(a-1)},
$$

$$
\boxed{\int_{C_1+C_2+C_3+C_4}f(z)\,dz=2\pi i e^{i\pi(a-1)}}.
$$

### (2)

$$
\left|\int_{C_2}f(z)\,dz\right|\le\frac{2\pi R^a}{R-1}\longrightarrow0\quad(a<1),
$$

$$
\left|\int_{C_4}f(z)\,dz\right|\le\frac{2\pi r^a}{1-r}\longrightarrow0\quad(a>0).
$$

两极限均为 $\boxed0$。

### (3)

下岸辐角为 $2\pi$，方向与上岸相反，故

$$
\boxed{\int_{C_3}f(z)\,dz=-e^{2\pi ia}\int_{C_1}f(z)\,dz}.
$$

### (4)

令 $I=\int_0^\infty x^{a-1}/(1+x)\,dx$。由前三问

$$
(1-e^{2\pi ia})I=2\pi i e^{i\pi(a-1)}.
$$

利用 $1-e^{2\pi ia}=-2ie^{i\pi a}\sin\pi a$，得

$$
\boxed{I=\frac\pi{\sin\pi a}}.
$$
