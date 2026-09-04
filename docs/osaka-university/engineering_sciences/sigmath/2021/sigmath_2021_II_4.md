---
sidebar_label: "2021年度 数理科学 II [4]"
tags:
  - Osaka-University
  - Mathematics.Functional-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[4\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$X$ を有界な実数列全体とし、$x=(x_k),y=(y_k)\in X$ に対して $d(x,y)=\sup_{k\in\mathbb N}|x_k-y_k|$ と定める。

(1) $d$ は $X$ 上の距離であることを示せ。

(2) $(X,d)$ は完備であることを示せ。実数の性質は証明なしに用いてよい。

## **Kai**

### (1)
$x,y$ が有界なので $d(x,y)<\infty$。非負性、対称性、$d(x,y)=0\iff x=y$ は明らかである。また各 $k$ に対し

$$
|x_k-z_k|\le|x_k-y_k|+|y_k-z_k|\le d(x,y)+d(y,z).
$$

上限をとれば三角不等式を得る。

### (2)
$x^{(j)}=(x_k^{(j)})$ をコーシー列とする。各 $k$ について $|x_k^{(j)}-x_k^{(\ell)}|\le d(x^{(j)},x^{(\ell)})$ なので、実数の完備性から極限 $x_k$ が存在する。

$\varepsilon>0$ に対し、$j,\ell\ge N$ なら全 $k$ で $|x_k^{(j)}-x_k^{(\ell)}|<\varepsilon$ とできる。$\ell\to\infty$ とすると $|x_k^{(j)}-x_k|\le\varepsilon$。特に $x$ は有界で、上限をとると $d(x^{(j)},x)\le\varepsilon$。よって $x^{(j)}\to x\in X$。
