---
sidebar_label: "2022年8月実施 A日程 基礎数学 I"
tags:
  - Future-University-Hakodate
  - Mathematics.Linear-Algebra.Subspace-Sum-and-Intersection-Dimension
---

# 公立はこだて未来大学 システム情報科学研究科 2022年8月実施 A日程 基礎数学 I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2023%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B.html) refined with GPT 6 Astra)

## **Description**

$\mathbb R^4$ の部分空間 $V,W$ を次のように定める。

$$
\begin{aligned}
V&=\{(x,y,z,w)^{\mathsf T}\in\mathbb R^4\mid x+2y+z+3w=0,\ x+3y+2z=0\},\\
W&=\{(x,y,z,w)^{\mathsf T}\in\mathbb R^4\mid2x+y-z-4w=0,\ x+y-3w=0\}.
\end{aligned}
$$

$V,W,V+W,V\cap W$ の基底をそれぞれ求めよ。

#### 题目描述

在 $\mathbb R^4$ 中，子空间 $V$ 与 $W$ 分别由上述两组齐次线性方程定义。分别求 $V$、$W$、和空间 $V+W$ 以及交空间 $V\cap W$ 的一组基。

## **Kai**

### $V$ と $W$

各連立方程式を解くと、次の基底を得る。

$$
\boxed{\mathcal B_V=\{v_1,v_2\}},\qquad
v_1=\begin{pmatrix}-9\\3\\0\\1\end{pmatrix},\quad
v_2=\begin{pmatrix}-6\\0\\3\\1\end{pmatrix},
$$

$$
\boxed{\mathcal B_W=\{w_1,w_2\}},\qquad
w_1=\begin{pmatrix}-1\\1\\-1\\0\end{pmatrix},\quad
w_2=\begin{pmatrix}3\\0\\2\\1\end{pmatrix}.
$$

例えば $V$ の一般元は $\frac y3v_1+\frac z3v_2$、$W$ の一般元は $yw_1+ww_2$ と表される。

### $V+W$

$v_1=3w_1+v_2$ であるから $V+W=\operatorname{span}\{w_1,w_2,v_2\}$。この三ベクトルは一次独立である。実際、$\alpha w_1+\beta w_2+\gamma v_2=0$ の第2・第4・第1成分から順に $\alpha=0$、$\beta=-\gamma$、$-9\gamma=0$ を得る。よって、

$$
\boxed{\mathcal B_{V+W}=\{w_1,w_2,v_2\}}.
$$

### $V\cap W$

$$
\dim(V\cap W)=\dim V+\dim W-\dim(V+W)=2+2-3=1.
$$

$w_1=(v_1-v_2)/3\in V\cap W$ は非零だから、

$$
\boxed{\mathcal B_{V\cap W}=\{w_1\}}.
$$

## **Reference**

- [大学公式問題（PDF 2ページ、冊子1ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R04.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2023%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B.html)
