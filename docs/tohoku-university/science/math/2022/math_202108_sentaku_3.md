---
sidebar_label: "2021年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#15c65317-4b1b-432d-b916-59e51131d3bf) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。

ユークリッド空間 $\mathbb R^5$ において、

$$
\begin{aligned}
T&=\{(u,v,x,y,z)\in\mathbb R^5\mid u^2+v^2=1,\ x^2+y^2+z^2=1\},\\
D_1&=\{(1,0,x,y,z)\in\mathbb R^5\mid x^2+y^2+z^2\le1\},\\
D_2&=\{(-1,0,x,y,z)\in\mathbb R^5\mid x^2+y^2+z^2\le1\}
\end{aligned}
$$

とおく。$\mathbb R^5$ の部分位相空間

$$
\begin{aligned}
X&=(T\cap\{(u,v,x,y,z)\in\mathbb R^5\mid v\ge0\})\cup D_1,\\
Y&=(T\cap\{(u,v,x,y,z)\in\mathbb R^5\mid v\le0\})\cup D_2,\\
Z&=X\cup Y
\end{aligned}
$$

を考える。

(1) $X$ が $3$ 次元閉球体 $B^3=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2\le1\}$ とホモトピー同値であることを示せ。

(2) 非負整数 $q$ に対し、$Z$ の整係数ホモロジー群 $H_q(Z)$ を求めよ。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。

在欧氏空间 $\mathbb R^5$ 中，令

$$
\begin{aligned}
T&=\{(u,v,x,y,z)\in\mathbb R^5\mid u^2+v^2=1,\ x^2+y^2+z^2=1\},\\
D_1&=\{(1,0,x,y,z)\in\mathbb R^5\mid x^2+y^2+z^2\le1\},\\
D_2&=\{(-1,0,x,y,z)\in\mathbb R^5\mid x^2+y^2+z^2\le1\}.
\end{aligned}
$$

考虑 $\mathbb R^5$ 的子拓扑空间

$$
\begin{aligned}
X&=(T\cap\{(u,v,x,y,z)\in\mathbb R^5\mid v\ge0\})\cup D_1,\\
Y&=(T\cap\{(u,v,x,y,z)\in\mathbb R^5\mid v\le0\})\cup D_2,\\
Z&=X\cup Y.
\end{aligned}
$$

(1) 证明 $X$ 与三维闭球体 $B^3=\{(x,y,z)\in\mathbb R^3\mid x^2+y^2+z^2\le1\}$ 同伦等价。

(2) 对非负整数 $q$，求 $Z$ 的整数系数同调群 $H_q(Z)$。

## **Kai**

### (1)

$w=(x,y,z)$ と略記する。上半円を $(u,v)=(\cos\theta,\sin\theta)$, $0\le\theta\le\pi$ と表示し、$X$ 上のホモトピーを

$$
H((\cos\theta,\sin\theta,w),s)
=\bigl(\cos((1-s)\theta),\sin((1-s)\theta),w\bigr)
\quad(|w|=1)
$$

および $D_1$ 上では $H(a,s)=a$ と定める。両定義は共通部分 $\theta=0,\ |w|=1$ 上で一致するので、$H$ は連続である。

$H(\cdot,0)=\operatorname{id}_X$ であり、$H(\cdot,1)$ は $X$ を $D_1$ へ写し、すべての時刻で $D_1$ を固定する。よって $D_1$ は $X$ の強変形レトラクトであり、$D_1\cong B^3$ なので $X\simeq B^3$ である。

### (2)

下半円を $(-\cos\theta,-\sin\theta)$, $0\le\theta\le\pi$ と表せば、(1) と同様に $Y$ は $D_2$ へ強変形レトラクトする。したがって $X,Y$ はともに可縮である。また

$$
X\cap Y=
\bigl(\{(1,0)\}\times S^2\bigr)
\sqcup\bigl(\{(-1,0)\}\times S^2\bigr).
$$

円周を上下二本の辺に分けた CW 分解と $S^2$ の CW 分解を用い、$D_1,D_2$ を各端の球面に付加すれば、$X,Y,X\cap Y$ を部分複体とする CW 分解が得られる。この分解に対する Mayer–Vietoris 完全列を用いる。

$X,Y$ が可縮で、$H_2(X\cap Y)\cong\mathbb Z^2$ であることから

$$
H_3(Z)\cong\mathbb Z^2,\qquad H_2(Z)=0,\qquad H_q(Z)=0\quad(q\ge4).
$$

低次の部分は

$$
0\longrightarrow H_1(Z)\longrightarrow\mathbb Z^2
\xrightarrow{\phi}\mathbb Z^2\longrightarrow H_0(Z)\longrightarrow0,
\qquad\phi(a,b)=(a+b,-a-b).
$$

したがって $\ker\phi\cong\mathbb Z$, $\operatorname{coker}\phi\cong\mathbb Z$ であり、

$$
\boxed{H_q(Z)\cong
\begin{cases}
\mathbb Z &(q=0,1),\\
\mathbb Z^2 &(q=3),\\
0 &(q=2\text{ または }q\ge4).
\end{cases}}
$$

## **Reference**

- [東北大学原問題の公開ミラー（2022年度・選択問題、PDF 3ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/f337b6d1a47d494cd8f448bb4f7c860024fc67959f11c7353e1dbfc786484c24.pdf)
- [L^2：2022年度の対応する解答](https://note.com/normalmath/n/n89152917de11#15c65317-4b1b-432d-b916-59e51131d3bf)
