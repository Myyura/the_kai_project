---
sidebar_label: "2019年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Bounded-Linear-Operator
  - Mathematics.Functional-Analysis.Uniform-Convergence
---

# 東北大学 理学研究科 数学専攻 2019年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

$(X,\|\cdot\|_X)$ と $(Y,\|\cdot\|_Y)$ をバナッハ空間とする。$X,Y$ はノルムが定める位相により位相空間となす。$X$ から $Y$ への有界線形作用素全体からなる空間 $\mathcal L(X,Y)$ 上のノルム $\|\cdot\|$ を次のように定める。

$$
\|F\|=\sup_{\substack{u\in X,\ \|u\|_X=1}}\|F(u)\|_Y\qquad(F\in\mathcal L(X,Y)).
$$

また、次の二条件を満たす $\mathcal L(X,Y)$ の元の列 $\{F_n\}_{n=1}^\infty$ を固定する。

- 任意の $u\in X$ に対し $\{F_n(u)\}_{n=1}^\infty$ は $Y$ で収束する。
- $\displaystyle\sup_{n\ge1}\|F_n\|<\infty$。

作用素 $F:X\to Y$ を各 $u\in X$ に対し $F(u)=\lim_{n\to\infty}F_n(u)$ により定義する。以下の問いに答えよ。

(1) $F$ は $\mathcal L(X,Y)$ に属し、次を満たすことを示せ。

$$
\|F\|\le\liminf_{n\to\infty}\|F_n\|<\infty.
$$

(2) バナッハ空間 $(X,\|\cdot\|_X)$ のコンパクト集合 $K$ に対し、次が成り立つことを示せ。

$$
\lim_{n\to\infty}\sup_{u\in K}\|F_n(u)-F(u)\|_Y=0.
$$

(3) $X=Y=L^1(\mathbb R)$ とし、$F_n:X\to Y$ が次で与えられるときを考える。

$$
F_n(u)(x)=u\left(x+\frac1n\right)\qquad(u\in X,\ x\in\mathbb R).
$$

このとき $\limsup_{n\to\infty}\|F_n-F\|=0$ が成り立つかどうか、理由とともに答えよ。

### 题目描述

设 $(X,\|\cdot\|_X)$ 和 $(Y,\|\cdot\|_Y)$ 为巴拿赫空间，均赋予范数诱导的拓扑。记从 $X$ 到 $Y$ 的所有有界线性算子组成的空间为 $\mathcal L(X,Y)$，定义其上的范数

$$
\|F\|=\sup_{\substack{u\in X,\ \|u\|_X=1}}\|F(u)\|_Y\qquad(F\in\mathcal L(X,Y)).
$$

固定满足以下两个条件的序列 $\{F_n\}_{n=1}^\infty\subset\mathcal L(X,Y)$：

- 对每个 $u\in X$，序列 $\{F_n(u)\}_{n=1}^\infty$ 在 $Y$ 中收敛。
- $\displaystyle\sup_{n\ge1}\|F_n\|<\infty$。

对每个 $u\in X$，以 $F(u)=\lim_{n\to\infty}F_n(u)$ 定义算子 $F:X\to Y$。回答下列问题。

(1) 证明 $F\in\mathcal L(X,Y)$，且

$$
\|F\|\le\liminf_{n\to\infty}\|F_n\|<\infty.
$$

(2) 对 $(X,\|\cdot\|_X)$ 的紧子集 $K$，证明

$$
\lim_{n\to\infty}\sup_{u\in K}\|F_n(u)-F(u)\|_Y=0.
$$

(3) 令 $X=Y=L^1(\mathbb R)$，并定义

$$
F_n(u)(x)=u\left(x+\frac1n\right)\qquad(u\in X,\ x\in\mathbb R).
$$

判断 $\limsup_{n\to\infty}\|F_n-F\|=0$ 是否成立，并说明理由。

## **Kai**

### (1)

各点での極限をとれば $F(\alpha u+\beta v)=\alpha F(u)+\beta F(v)$ となるので $F$ は線形である。$M=\sup_n\|F_n\|<\infty$ とおくと、各 $u\in X$ について

$$
\|Fu\|_Y=\lim_n\|F_nu\|_Y
\le\bigl(\liminf_n\|F_n\|\bigr)\|u\|_X.
$$

従って $F\in\mathcal L(X,Y)$ であり、$\|F\|\le\liminf_n\|F_n\|\le M<\infty$ である。

### (2)

$\varepsilon>0$ をとり、$\delta=\varepsilon/(3(M+1))$ とおく。コンパクト性により $K$ の有限 $\delta$ 網 $u_1,\ldots,u_m$ をとれる。各点収束から、十分大きい $n$ では全ての $j$ に対し $\|F_nu_j-Fu_j\|_Y<\varepsilon/3$ である。$u\in K$ に対して $\|u-u_j\|_X<\delta$ となる $j$ を選べば

$$
\begin{aligned}
\|F_nu-Fu\|_Y
&\le\|F_n\|\,\|u-u_j\|_X
+\|F_nu_j-Fu_j\|_Y+\|F\|\,\|u-u_j\|_X\\
&<2M\delta+\varepsilon/3<\varepsilon.
\end{aligned}
$$

よって $K$ 上で一様収束する。

### (3)

平行移動は $L^1$ ノルムを保存するので $\|F_n\|=1$ である。$C_c(\mathbb R)$ の関数に対しては一様連続性から $\|F_nu-u\|_1\to0$ となる。$C_c(\mathbb R)$ が $L^1(\mathbb R)$ に稠密であり、$\|F_n\|=1$ なので、任意の $u\in L^1$ についても同じ極限が成立する。従って強極限は恒等作用素 $I$ である。

一方、$u_n=n\chi_{[0,1/n]}$ とおくと $\|u_n\|_1=1$ であり、$u_n$ と $F_nu_n$ の台は零集合を除いて交わらない。従って

$$
\|(F_n-I)u_n\|_1=\|F_nu_n\|_1+\|u_n\|_1=2.
$$

また $\|F_n-I\|\le\|F_n\|+\|I\|=2$ なので、全ての $n$ で $\|F_n-I\|=2$ となる。よって作用素ノルムでは $I$ に収束しない。

## **Reference**

- [東北大学 2020年度・選択問題の公開保存資料（sentaku2020(R2).pdf、PDF 5ページ）](https://drive.google.com/drive/folders/1h6735zwB7l5DMvI8p_sLohpgKj4WZyZg)
- [L^2：2020年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#cb09153b-4137-418e-ad87-404370d1aeb3)
