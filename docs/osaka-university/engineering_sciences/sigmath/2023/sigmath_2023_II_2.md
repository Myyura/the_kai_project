---
sidebar_label: "2023年度 数理科学 II [2]"
tags:
  - Osaka-University
  - Mathematics.Topology
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 II \[2\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X,Y$ は空でない集合とする。$\delta(a,b)=0$ ($a=b$)、$\delta(a,b)=1$ ($a\ne b$) と定め、$d$ は $Y$ 上の距離とする。

(1) $\delta$ は $X$ 上の距離であることを示せ。

(2) 各 $a\in X$ に対し $\{a\}$ は $(X,\delta)$ の開集合であることを示せ。

(3) 任意の写像 $f:X\to Y$ は $(X,\delta)$ から $(Y,d)$ への連続写像であることを示せ。

(4) $(Y,d)$ がコンパクトで $g:Y\to X$ が連続なら、$g(Y)$ は有限集合であることを示せ。

## **Kai**

### (1)
非負性、対称性、$\delta(a,b)=0\iff a=b$ は定義から従う。$a\ne c$ なら $a\ne b$ または $b\ne c$ なので $\delta(a,b)+\delta(b,c)\ge1=\delta(a,c)$。$a=c$ なら三角不等式は自明。

### (2)
半径 $1/2$ の開球は $B_\delta(a;1/2)=\{a\}$ である。

### (3)
任意の $a\in X,\varepsilon>0$ に対して $\eta=1/2$ と選ぶ。$\delta(a,b)<\eta$ なら $a=b$ なので $d(f(a),f(b))=0<\varepsilon$。よって各点で連続。

### (4)
連続像 $g(Y)$ はコンパクトである。単点集合からなる開被覆 $\{\{a\}:a\in g(Y)\}$ は有限部分被覆をもつので $g(Y)$ は有限集合である。
