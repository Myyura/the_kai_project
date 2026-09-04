---
sidebar_label: "2021年度 数理科学 II [6]"
tags:
  - Osaka-University
  - Probability-Statistics.Probability-Basics
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[6\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

独立な確率変数 $X_n$ は有限集合 $S_n=\{x_{n1},\ldots,x_{nm_n}\}\subset\mathbb R$ に値をとり、$P(X_n=x_{nj})=p_{nj}>0$、$\sum_jp_{nj}=1$ とする。$\mu_n=E[X_n]$ とおき、

$$
u_n=E[\max(X_1,\ldots,X_n)],\quad v_1=\mu_1,\quad v_n=E[\max(X_n,v_{n-1})]\ (n\ge2),\quad
w_n=\max(\mu_1,\ldots,\mu_n)
$$

と定める。

(1) すべての $n$ に対して $v_n\ge w_n$ を示せ。

(2) $n\ge2,x\in S_n$ に対し、$E[\max(X_1,\ldots,X_n)\mid X_n=x]=E[\max(X_1,\ldots,X_{n-1},x)]$ を示せ。

(3) $n\ge2$ に対して $u_n\ge E[\max(X_n,u_{n-1})]$ を示せ。

(4) すべての $n$ に対して $u_n\ge v_n$ を示せ。

## **Kai**

### (1)
$v_n\ge E[X_n]=\mu_n$ かつ $v_n\ge v_{n-1}$。$v_1=\mu_1$ から帰納法で $v_n\ge\max_{j\le n}\mu_j$。

### (2)
独立性から、$X_n=x$ を条件としても $(X_1,\ldots,X_{n-1})$ の同時分布は変化しない。よって両辺とも

$$
\sum_{j_1,\ldots,j_{n-1}}\max(x_{1j_1},\ldots,x_{n-1,j_{n-1}},x)\prod_{k=1}^{n-1}p_{kj_k}
$$

に等しい。

### (3)
$M_{n-1}=\max(X_1,\ldots,X_{n-1})$ とする。凸関数 $t\mapsto\max(t,x)$ への Jensen の不等式から

$$
E[\max(M_{n-1},x)]\ge\max(E[M_{n-1}],x)=\max(u_{n-1},x).
$$

(2) を用いて $X_n$ について平均すればよい。

### (4)
$u_1=v_1$。$u_{n-1}\ge v_{n-1}$ ならば (3) と最大値の単調性より

$$
u_n\ge E[\max(X_n,u_{n-1})]\ge E[\max(X_n,v_{n-1})]=v_n.
$$

帰納法から成立する。
