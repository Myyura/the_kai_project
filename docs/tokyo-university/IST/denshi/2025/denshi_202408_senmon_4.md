---
sidebar_label: 2024年8月実施 専門 第4問
tags:
  - Tokyo-University
  - Data-Science-Artificial-Intelligence.Machine-Learning
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Least-Squares-Method
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Weighted-Least-Squares
  - Probability-Statistics.Statistical-Modeling-and-Experimental-Design.Multicollinearity
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2024年8月実施 専門 第4問 

## **Author**
祭音Myyura (assisted by GPT-5)

## **Description**
$D$ 次元ベクトルを入力としスカラー値を出力するモデルを学習する問題を考える。
以下，$\top$ はベクトルおよび行列の転置，$\mathbb{R}$ は実数全体の集合，$\mathbb{R}^D$ は $D$ 次元実数の列ベクトル全体の集合，$\mathbb{R}^{D\times D}$ は $D$ 次の実数正方行列全体の集合を表す。

訓練データとして，$N$ 個の $D$ 次元ベクトル $x_1,\ldots,x_N$ と，それぞれ対応する出力 $y_1,\ldots,y_N$ が与えられる。ここで $x_i\in\mathbb{R}^D$ および $y_i\in\mathbb{R}$ である $(1\leq i\leq N)$。各入力ベクトルを行として縦に並べて構成した行列を

$$
X=\begin{bmatrix}x_1, \dots, x_N\end{bmatrix}^\top
$$

と書く。さらに，出力をまとめて

$$
y=\begin{bmatrix}y_1, \dots, y_N\end{bmatrix}^\top
$$

と書く。これらをもとに $D$ 次元のパラメータ $\beta\in\mathbb{R}^D$ を学習する。任意の入力データ $x\in\mathbb{R}^D$ が与えられたとき，その出力を

$$
\hat{y}=\beta^\top x
$$

と推定する。このとき，以下の設問に答えよ。

(1) $i$ 番目の訓練データの入力 $x_i$ に対し，学習した $\beta$ による推定結果を

$$
\hat{y}_i=\beta^\top x_i \qquad (1\le i\le N)
$$

とする。真の出力 $y_i$ と推定結果の誤差を

$$
e_i=y_i-\hat y_i
$$

と書く。このとき，誤差 $e_i$ の二乗和

$$
E=\sum_{i=1}^N e_i^2
$$

を $\beta,X,y$ を用いて表せ。

---

(2) $E$ を最小化するパラメータ $\beta$ が**一意に**求まる必要十分条件を求めよ。また，その際に得られる $\beta$ を書け。
なお，変数 $a\in\mathbb{R}^D$，定数 $b\in\mathbb{R}^D$，定数行列 $C\in\mathbb{R}^{D\times D}$ に対し，次を用いてよい：

$$
\frac{\partial}{\partial a}(b^\top a)=b,\qquad
\frac{\partial}{\partial a}(a^\top C a)=(C+C^\top)a.
$$

---

(3) $E$ を最小化するパラメータ $\beta$ が一意に求まらない場合，入力データ $X$ がどのような特性を持つか，**定性的に**述べよ。

---

(4) $i$ 番目の訓練データに対し重み $w_i>0$ が与えられるとする $(1\le i\le N)$。この重要度を考慮した誤差二乗和を

$$
E_w=\sum_{i=1}^N w_i e_i^2
$$

とする。$E_w$ を最小化する $\beta$ が**一意に**求まる必要十分条件を求めよ。また，その際に得られる $\beta$ を書け（必要に応じて新たな変数を定義してよい）。

---

(5) 変数が下記の値をとるとき，$E_w$ を最小化する $\beta$ を求めよ。

$$
\begin{aligned}
x_1&=[1,0,1]^\top, & y_1&=2, & w_1&=1,\\
x_2&=[0,1,1]^\top, & y_2&=3, & w_2&=1,\\
x_3&=[2,0,1]^\top, & y_3&=3, & w_3&=2,\\
x_4&=[1,1,0]^\top, & y_4&=1, & w_4&=1.
\end{aligned}
$$

 
### 题目描述

考虑学习一个以 $D$ 维向量为输入、标量为输出的模型。符号 $\top$ 表示向量或矩阵转置，$\mathbb R$ 为实数集，$\mathbb R^D$ 为 $D$ 维实列向量集合，$\mathbb R^{D\times D}$ 为 $D$ 阶实方阵集合。

训练数据为 $N$ 个输入向量 $x_1,\ldots,x_N$ 及对应输出 $y_1,\ldots,y_N$，其中

$$
x_i\in\mathbb R^D,\qquad y_i\in\mathbb R\qquad(1\le i\le N).
$$

把输入逐行排列、输出组成列向量：

$$
X=\begin{bmatrix}x_1,\dots,x_N\end{bmatrix}^{\top},\qquad
y=\begin{bmatrix}y_1,\dots,y_N\end{bmatrix}^{\top}.
$$

学习参数 $\beta\in\mathbb R^D$，并对任意 $x\in\mathbb R^D$ 以

$$
\hat y=\beta^\top x
$$

估计输出。回答下列问题。

(1) 对第 $i$ 个训练样本，令

$$
\hat y_i=\beta^\top x_i,\qquad e_i=y_i-\hat y_i.
$$

用 $\beta,X,y$ 表示误差平方和

$$
E=\sum_{i=1}^{N}e_i^2.
$$

(2) 求使 $E$ 最小的参数 $\beta$ 能够唯一确定的充要条件，并写出此时的 $\beta$。可以使用：对变量 $a\in\mathbb R^D$、常向量 $b\in\mathbb R^D$、常矩阵 $C\in\mathbb R^{D\times D}$，

$$
\frac{\partial}{\partial a}(b^\top a)=b,\qquad
\frac{\partial}{\partial a}(a^\top Ca)=(C+C^\top)a.
$$

(3) 当使 $E$ 最小的 $\beta$ 不能唯一确定时，定性说明输入数据矩阵 $X$ 具有怎样的特性。

(4) 对第 $i$ 个训练样本给定权重 $w_i>0$，定义

$$
E_w=\sum_{i=1}^{N}w_i e_i^2.
$$

求使 $E_w$ 最小的 $\beta$ 能够唯一确定的充要条件，并写出此时的 $\beta$；可按需定义新变量。

(5) 对下列数据，求使 $E_w$ 最小的 $\beta$：

$$
\begin{aligned}
x_1&=[1,0,1]^\top, &y_1&=2, &w_1&=1,\\
x_2&=[0,1,1]^\top, &y_2&=3, &w_2&=1,\\
x_3&=[2,0,1]^\top, &y_3&=3, &w_3&=2,\\
x_4&=[1,1,0]^\top, &y_4&=1, &w_4&=1.
\end{aligned}
$$

#### 考点

- 普通最小二乘：要求把残差平方和写成矩阵二次型，推导正规方程以及解唯一所需的满列秩条件。
- 加权最小二乘：要求用正权对角矩阵建立加权正规方程，并在给定样本上计算参数。
- 多重共线性：要求从 $X^\top X$ 奇异解释特征列线性相关为何导致参数不可辨识。

## **Kai**
### (1)
誤差 $e_i = y_i - \hat{y}_i = y_i - \beta^\top x_i$

誤差ベクトル $e \in \mathbb{R}^N$ をまとめると：

$$
e = y - X\beta
$$

したがって、誤差二乗和 $E$ は

$$
E = \sum_{i=1}^N e_i^2 = e^\top e = (y - X\beta)^\top (y - X\beta)
$$

### (2)
まず $E$ を $\beta$ で偏微分する。

$$
E = (y - X\beta)^\top (y - X\beta)
= y^\top y - 2\beta^\top X^\top y + \beta^\top X^\top X \beta
$$

よって，

$$
\frac{\partial E}{\partial \beta}
= -2X^\top y + 2X^\top X\beta
$$

極値条件（$\frac{\partial E}{\partial \beta}=0$）より：

$$
X^\top X \beta = X^\top y
$$

これが **正規方程式 (Normal Equation)** である。

- $X^\top X$ が **正則** であれば，一意な解が存在する。

すなわち：

$$
\boxed{ \det(X^\top X) \ne 0 }
$$

このとき最小二乗解は：

$$
\boxed{ \beta = (X^\top X)^{-1} X^\top y }
$$

### (3)
一意に解が求まらない場合は，

$$
\det(X^\top X) = 0
$$

すなわち $X^\top X$ が**非可逆**である。これは：

- 入力データ (X) の**列ベクトルが線形従属**している場合（多重共線性）

ことを意味する。

### (4)
重み付き誤差：

$$
E_w = \sum_{i=1}^N w_i e_i^2
$$

行列表記に直すと：

$$
E_w = (y - X\beta)^\top W (y - X\beta)
$$

ただし，

$$
W = \operatorname{diag}(w_1, w_2, \ldots, w_N)
$$

偏微分して $0$ におく：

$$
\frac{\partial E_w}{\partial \beta}
= -2 X^\top W y + 2 X^\top W X \beta = 0
$$

したがって：

$$
X^\top W X \beta = X^\top W y
$$

一意解の条件

$$
\boxed{ \det(X^\top W X) \ne 0 }
$$

すなわち，$X$ の列が線形独立であり，各 $w_i>0$ のとき，一意な最小値を持つ。

解

$$
\boxed{ \beta = (X^\top W X)^{-1} X^\top W y }
$$

### (5)

$$
\begin{aligned}
x_1&=[1,0,1]^\top, & y_1&=2, & w_1&=1,\\
x_2&=[0,1,1]^\top, & y_2&=3, & w_2&=1,\\
x_3&=[2,0,1]^\top, & y_3&=3, & w_3&=2,\\
x_4&=[1,1,0]^\top, & y_4&=1, & w_4&=1.
\end{aligned}
$$

$$
X=
\begin{bmatrix}
1&0&1\\
0&1&1\\
2&0&1\\
1&1&0
\end{bmatrix},
\quad
y=\begin{bmatrix}2\\3\\3\\1\end{bmatrix},
\quad
W=\operatorname{diag}(1,1,2,1)
$$

$$
X^\top W X=
\begin{bmatrix}
10&1&5\\
1&2&1\\
5&1&4
\end{bmatrix},
\quad
X^\top W y=
\begin{bmatrix}
15\\
4\\
11
\end{bmatrix}.
$$

よって

$$
\beta=(X^\top W X)^{-1} X^\top W y
=\begin{bmatrix}
5/13 \\
10/13 \\
27/13 \\
\end{bmatrix}
$$
