---
sidebar_label: "2021年度 数理科学 II [5]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$(X,\mathcal A,\mu)$ は $\mu(X)=1$ を満たす測度空間で、正値可測関数列 $\xi_n$ は $\xi_n\to0$ ほとんど至る所とする。

(1) 狭義増加な自然数列 $k_m$ が存在して、任意の自然数 $m$ に対して

$$
\mu\left(\left\{x\in X:\sup_{n\ge k_m}\xi_n(x)<2^{-m}\right\}\right)>1-2^{-m}
$$

となることを示せ。

(2) $k_m$ を(1)で定めたものとし、$A_m=\{x\in X:\sup_{n\ge k_m}\xi_n(x)<2^{-m}\}$ とする。$\mu(\bigcup_{r=1}^\infty\bigcap_{m=r}^\infty A_m)=1$ を示せ。

(3) $k_m,A_m$ をそれぞれ(1)、(2)で定めたものとする。集合 $A\subset\mathbb R$ の指示関数を $1_A(x)=1$ ($x\in A$)、$1_A(x)=0$ ($x\notin A$) とする。関数 $f:(0,\infty)\to(0,\infty)$ を

$$
f(y)=\sum_{m=1}^\infty\frac1{2^mk_{m+1}}1_{[2^{-(m+1)},2^{-m})}(y)+1_{[1/2,\infty)}(y)\quad(y>0)
$$

と定める。$x\in\bigcup_r\bigcap_{m\ge r}A_m$ ならば $\sum_{n=1}^\infty f(\xi_n(x))<\infty$ を示せ。

## **Kai**

### (1)
固定した $m$ に対し $E_k=\{\sup_{n\ge k}\xi_n<2^{-m}\}$ は $k$ とともに増加し、$\xi_n\to0$ となる点を $\bigcup_kE_k$ に含む。測度の下からの連続性より $\mu(E_k)\uparrow1$。したがって $k_m>k_{m-1}$ と所定の不等式を満たすよう順次選べる。

### (2)

$$
\mu\left(\bigcup_{m\ge r}A_m^c\right)\le\sum_{m\ge r}2^{-m}=2^{1-r}\longrightarrow0.
$$

補集合をとり $r\to\infty$ とすれば結論を得る。

### (3)
ある $r$ 以降で $x\in A_m$ とする。$k_m\le n<k_{m+1}$、$m\ge r$ なら $0<\xi_n(x)<2^{-m}$。この値の属する区間の添字を $j$ とすると $j\ge m$ なので

$$
f(\xi_n(x))=\frac1{2^jk_{j+1}}\le\frac1{2^mk_{m+1}}.
$$

したがって

$$
\sum_{n=k_r}^\infty f(\xi_n(x))
\le\sum_{m=r}^\infty\frac{k_{m+1}-k_m}{2^mk_{m+1}}
\le\sum_{m=r}^\infty2^{-m}<\infty.
$$

最初の $k_r-1$ 項も有限である。
