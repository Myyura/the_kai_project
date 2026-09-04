---
sidebar_label: "2022年度 数理科学 I [3]"
tags:
  - Osaka-University
  - Mathematics.Complex-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 I \[3\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$D=\{z\in\mathbb C\mid|z|>1\}$ において

$$
f(z)=-\frac1z+\frac2{z^2}-\frac3{z^3}+\cdots+(-1)^n\frac n{z^n}+\cdots
$$

とし、$U=\mathbb C\setminus\{-1\}$ とおく。

(1) $(1+z)^2f(z)$ が $D$ 上で $z$ の多項式に等しいことを示せ。

(2) $f$ が $U$ 上の関数 $F$ に解析接続されることを示せ。すなわち、(a) $F$ は $U$ 上で定義されて正則であり、(b) $D$ 上で $F(z)=f(z)$ が成り立つような $F$ の存在を示せ。

(3) $F$ の原点を中心とするべき級数展開を求めよ。

## **Kai**

### (1)
$|w|<1$ で $\sum_{n\ge1}nw^n=w/(1-w)^2$。$w=-1/z$ とすれば

$$
f(z)=-\frac z{(z+1)^2},\qquad\boxed{(1+z)^2f(z)=-z}.
$$

### (2)

$$
\boxed{F(z)=-\frac z{(1+z)^2}\quad(z\in U)}
$$

は $U$ 上正則で、(1) より $D$ 上 $F=f$ だから解析接続を与える。

### (3)
$(1+z)^{-2}=\sum_{k=0}^\infty(-1)^k(k+1)z^k$ より

$$
\boxed{F(z)=\sum_{n=1}^\infty(-1)^nnz^n=-z+2z^2-3z^3+\cdots,\quad|z|<1}.
$$
