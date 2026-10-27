---
sidebar_label: "2024年8月実施 選択問題 [3]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2024年8月実施 選択問題 \[3\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#9cc9b799-7966-42e6-9b8c-a76aad692b8f) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。

$2$ 次元ユークリッド空間 $\mathbb R^2$ の部分空間 $M$ と $N$ を

$$
M=\{(x,y)\in\mathbb R^2\mid x^2+y^2=1\},\qquad
N=\{(x,y)\in\mathbb R^2\mid x^2+y^2\le1\}
$$

とする。以下の問いに答えよ。

(1) 非負整数 $q$ について、直積空間 $L=M\times M$ の整係数ホモロジー群 $H_q(L)$ を求めよ。

(2) $L$ と $N$ の非交和 $N\sqcup L$ において、$N$ の境界 $\partial N$ の各点 $p\in\partial N=M$ と $(p,p)\in L=M\times M$ とを同一視してできる商空間を $X$ とおく。非負整数 $q$ について、$X$ の整係数ホモロジー群 $H_q(X)$ を求めよ。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。

令二维欧氏空间 $\mathbb R^2$ 的子空间 $M,N$ 为

$$
M=\{(x,y)\in\mathbb R^2\mid x^2+y^2=1\},\qquad
N=\{(x,y)\in\mathbb R^2\mid x^2+y^2\le1\}.
$$

回答下列问题。

(1) 对非负整数 $q$，求直积空间 $L=M\times M$ 的整数系数同调群 $H_q(L)$。

(2) 在 $N$ 与 $L$ 的不交并 $N\sqcup L$ 中，将边界 $\partial N$ 的每个点 $p\in\partial N=M$ 与 $(p,p)\in L=M\times M$ 视为同一点，得到商空间 $X$。对非负整数 $q$，求 $X$ 的整数系数同调群 $H_q(X)$。

## **Kai**

### (1)

$L=S^1\times S^1$ は $2$ 次元トーラスである。トーラスの標準的な CW 分解では、$0$ 胞体が一つ、$1$ 胞体が二つ、$2$ 胞体が一つあり、胞体境界写像はすべて零である。したがって

$$
\boxed{H_q(L)\cong
\begin{cases}
\mathbb Z &(q=0,2),\\
\mathbb Z^2 &(q=1),\\
0 &(q\ge3).
\end{cases}}
$$

### (2)

$X$ はトーラス $L$ に、対角線写像 $\delta:S^1\to L$, $\delta(p)=(p,p)$ に沿って $2$ 胞体を一つ付加した空間である。

$H_1(L)=\mathbb Za\oplus\mathbb Zb$ の基底を二つの因子の円周とすると、各射影との合成が恒等写像になるので

$$
\delta_*(1)=a+b.
$$

対 $(X,L)$ の相対ホモロジーは

$$
H_q(X,L)\cong
\begin{cases}
\mathbb Z &(q=2),\\
0 &(q\ne2).
\end{cases}
$$

よって対の完全列の該当部分は

$$
0\longrightarrow\mathbb Z\longrightarrow H_2(X)
\longrightarrow\mathbb Z
\xrightarrow{\ 1\mapsto(1,1)\ }\mathbb Z^2
\longrightarrow H_1(X)\longrightarrow0.
$$

中央の写像は単射なので、$H_2(X)\cong\mathbb Z$ である。また

$$
H_1(X)\cong\mathbb Z^2/\mathbb Z(1,1)\cong\mathbb Z,
$$

最後の同型は $(m,n)\mapsto m-n$ によって与えられる。$X$ は弧状連結で、$2$ 次元 CW 複体であるから

$$
\boxed{H_q(X)\cong
\begin{cases}
\mathbb Z &(q=0,1,2),\\
0 &(q\ge3).
\end{cases}}
$$

## **Reference**

- [東北大学公式問題（2025年度・選択問題、PDF 4ページ）](https://www.math.tohoku.ac.jp/exam/questions/2025_R7_sentaku.pdf)
- [L^2：2025年度の対応する解答](https://note.com/normalmath/n/n89152917de11#9cc9b799-7966-42e6-9b8c-a76aad692b8f)
