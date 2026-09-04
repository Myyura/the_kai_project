---
sidebar_label: "2022年度 数理科学 II [5]"
tags:
  - Osaka-University
  - Mathematics.Topology
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 II \[5\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X=(-1,1)$、$d(x,y)=|x-y|$ とする。

(1) $a_n=1-2^{-n}$ は $(X,d)$ でコーシー列だが収束列ではないことを示せ。

(2) $f(x)=\tan(\pi x/2)$、$d_f(x,y)=|f(x)-f(y)|$ とする。$d_f$ が距離であることと $(X,d_f)$ の完備性を示せ。

(3) $r>0,x\in X$ に対し $B_f(x;r)=\{y\in X\mid d_f(x,y)<r\}$ は $(X,d)$ の開集合であることを示せ。実数の完備性は用いてよい。

## **Kai**

### (1)
$m,n\ge N$ なら $|a_n-a_m|\le2^{-N}$ なのでコーシー列である。実数としての極限は $1$ であり、$1\notin X$ だから $X$ 内には収束しない。

### (2)
$f:X\to\mathbb R$ は全単射である。$\mathbb R$ の距離の非負性、対称性、三角不等式が $d_f$ に引き継がれ、単射性より $d_f(x,y)=0\iff x=y$。よって距離である。

$d_f$ に関してコーシーな列 $x_n$ について $f(x_n)$ は実数のコーシー列なので、ある $a\in\mathbb R$ に収束する。$x=(2/\pi)\arctan a\in X$ とすれば $d_f(x_n,x)=|f(x_n)-a|\to0$。ゆえに完備である。

### (3)

$$
B_f(x;r)=f^{-1}((f(x)-r,f(x)+r)).
$$

$f$ は通常の距離 $d$ に関して連続なので、開集合の逆像である $B_f(x;r)$ は開集合。
