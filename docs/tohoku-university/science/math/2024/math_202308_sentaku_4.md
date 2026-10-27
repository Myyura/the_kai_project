---
sidebar_label: "2023年8月実施 選択問題 [4]"
tags:
  - Tohoku-University
  - Mathematics.Topology.Simplicial-and-Cellular-Homology
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 選択問題 \[4\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11#5e758bbc-afd5-4927-9b59-682e57b1dbea) refined with GPT 6 Astra)

## **Description**

問題は $8$ 題ある。$3$ 題を選択して解答すること。

$3$ 次元ユークリッド空間 $\mathbb R^3$ において、

$$
X=\left\{(x,y,z)\in\mathbb R^3\ \middle|\ x^2+\frac{y^2}{4}+\frac{3z^2}{4}=1\right\}
$$

および

$$
Y=\left\{(x,y,z)\in\mathbb R^3\ \middle|\ x^2+\frac{3y^2}{4}+\frac{z^2}{4}=1\right\}
$$

とおく。以下の問いに答えよ。

(1) すべての非負の整数 $q$ に対して、$X$ の $q$ 次の整係数ホモロジー群 $H_q(X)$ を求めよ。

(2) すべての非負の整数 $q$ に対して、$X\cap Y$ の $q$ 次の整係数ホモロジー群 $H_q(X\cap Y)$ を求めよ。

(3) すべての非負の整数 $q$ に対して、$X\cup Y$ の $q$ 次の整係数ホモロジー群 $H_q(X\cup Y)$ を求めよ。

### 题目描述

本卷共 $8$ 道题，请选择其中 $3$ 道作答。

在三维欧氏空间 $\mathbb R^3$ 中，令

$$
X=\left\{(x,y,z)\in\mathbb R^3\ \middle|\ x^2+\frac{y^2}{4}+\frac{3z^2}{4}=1\right\},
$$

以及

$$
Y=\left\{(x,y,z)\in\mathbb R^3\ \middle|\ x^2+\frac{3y^2}{4}+\frac{z^2}{4}=1\right\}.
$$

回答下列问题。

(1) 对所有非负整数 $q$，求 $X$ 的 $q$ 次整数系数同调群 $H_q(X)$。

(2) 对所有非负整数 $q$，求 $X\cap Y$ 的 $q$ 次整数系数同调群 $H_q(X\cap Y)$。

(3) 对所有非负整数 $q$，求 $X\cup Y$ 的 $q$ 次整数系数同调群 $H_q(X\cup Y)$。

## **Kai**

### (1)

線形写像 $(x,y,z)\mapsto(x,y/2,\sqrt3z/2)$ は $X$ を $S^2$ に同相に写す。したがって

$$
\boxed{H_q(X)\cong
\begin{cases}
\mathbb Z &(q=0,2),\\
0 &(q=1\text{ または }q\ge3).
\end{cases}}
$$

### (2)

二つの方程式の差から $y^2=z^2$ となるので

$$
X\cap Y=\Gamma_+\cup\Gamma_-,\qquad
\Gamma_\pm=\{(x,y,z)\mid x^2+z^2=1,\ y=\pm z\}.
$$

$\Gamma_+$ と $\Gamma_-$ はそれぞれ円周と同相であり、その共通部分は $(1,0,0),(-1,0,0)$ の二点である。よって $X\cap Y$ は頂点が二つ、両頂点を結ぶ辺が四つの連結グラフである。

各辺を同じ向きにとると、境界写像 $\partial_1:\mathbb Z^4\to\mathbb Z^2$ の四つの列はすべて $(-1,1)^T$ である。ゆえに $\ker\partial_1\cong\mathbb Z^3$ であり、

$$
\boxed{H_q(X\cap Y)\cong
\begin{cases}
\mathbb Z &(q=0),\\
\mathbb Z^3 &(q=1),\\
0 &(q\ge2).
\end{cases}}
$$

### (3)

$Y$ も $S^2$ と同相である。交わりのグラフを共通部分複体とするように $X,Y$ を三角形分割すれば、Mayer–Vietoris 完全列を適用できる。その一部は

$$
0\longrightarrow\mathbb Z^2\longrightarrow H_2(X\cup Y)
\longrightarrow\mathbb Z^3\longrightarrow0
$$

となる。右端の $\mathbb Z^3$ は自由アーベル群なのでこの完全列は分裂し、$H_2(X\cup Y)\cong\mathbb Z^5$ である。

さらに

$$
0\longrightarrow H_1(X\cup Y)\longrightarrow\mathbb Z
\xrightarrow{\ n\mapsto(n,-n)\ }\mathbb Z^2
\longrightarrow H_0(X\cup Y)\longrightarrow0.
$$

中央の写像は単射であるから $H_1(X\cup Y)=0$。また $X\cup Y$ は連結であり、$2$ 次元複体なので

$$
\boxed{H_q(X\cup Y)\cong
\begin{cases}
\mathbb Z &(q=0),\\
\mathbb Z^5 &(q=2),\\
0 &(q=1\text{ または }q\ge3).
\end{cases}}
$$

## **Reference**

- [東北大学公式問題（2024年度・選択問題、PDF 3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_sentaku.pdf)
- [L^2：2024年度の対応する解答](https://note.com/normalmath/n/n89152917de11#5e758bbc-afd5-4927-9b59-682e57b1dbea)
