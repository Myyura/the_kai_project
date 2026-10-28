---
sidebar_label: "2021年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Bounded-Linear-Operator
  - Mathematics.Functional-Analysis.Banach-Space
---

# 東北大学 理学研究科 数学専攻 2021年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

実ヒルベルト空間 $(H,(\cdot,\cdot))$ 上で定義された線形作用素 $A:H\to H$ が

$$
(Ax,x)\ge0\qquad(x\in H)
$$

を満たすとする。以下の問いに答えよ。

(1) $x,f\in H$ が

$$
(f-Ay,x-y)\ge0\qquad(y\in H)
$$

を満たすとき、$f=Ax$ が成り立つことを示せ。

(2) $A$ は閉作用素であることを示せ。すなわち $A$ のグラフ $G(A)=\{[x,Ax]\in H\times H\mid x\in H\}$ が $H\times H$ のノルム $\|\cdot\|_{H\times H}$ によって定まる強位相に関して閉集合となることを示せ。ただし $H\times H$ のノルム $\|\cdot\|_{H\times H}$ は $\|[x,y]\|_{H\times H}=\|x\|_H+\|y\|_H$（$[x,y]\in H\times H$）によって定まるものとし、また $\|x\|_H=\sqrt{(x,x)}$（$x\in H$）とする。

(3) $I+A$ は全単射であることを示せ。ただし $I:H\to H$ は恒等作用素を表す。すなわち $Ix=x$（$x\in H$）が成り立つ。

### 题目描述

设 $(H,(\cdot,\cdot))$ 为实希尔伯特空间，定义在整个 $H$ 上的线性算子 $A:H\to H$ 满足

$$
(Ax,x)\ge0\qquad(x\in H).
$$

(1) 若 $x,f\in H$ 满足对每个 $y\in H$ 都有 $(f-Ay,x-y)\ge0$，证明 $f=Ax$。

(2) 证明 $A$ 是闭算子，即图像

$$
G(A)=\{[x,Ax]\in H\times H\mid x\in H\}
$$

在 $H\times H$ 的范数所诱导的强拓扑下是闭集。其中

$$
\|[x,y]\|_{H\times H}=\|x\|_H+\|y\|_H,
\qquad\|x\|_H=\sqrt{(x,x)}.
$$

(3) 证明 $I+A$ 是双射，其中 $I:H\to H$ 为恒等算子，即 $Ix=x$。

## **Kai**

### (1)

$x,f$ を固定し、任意の $h\in H$ と $t>0$ に対し $y=x-th$ とおく。仮定より

$$
0\le(f-A(x-th),th)
=t(f-Ax,h)+t^2(Ah,h).
$$

$t$ で割って $t\downarrow0$ とすると $(f-Ax,h)\ge0$ となる。$-h$ にも同じ議論を適用すれば $(f-Ax,h)=0$ である。特に $h=f-Ax$ とすれば $f=Ax$ を得る。

### (2)

$x_n\to x$, $Ax_n\to f$ とする。任意の $y\in H$ に対し

$$
(Ax_n-Ay,x_n-y)=(A(x_n-y),x_n-y)\ge0.
$$

内積の連続性より極限をとって $(f-Ay,x-y)\ge0$ を得る。(1) から $f=Ax$ なので $A$ のグラフは閉じている。

### (3)

$B=I+A$ とおく。仮定と Cauchy–Schwarz の不等式より

$$
\|Bu\|\,\|u\|\ge(Bu,u)=\|u\|^2+(Au,u)\ge\|u\|^2.
$$

従って $\|Bu\|\ge\|u\|$ であり、$B$ は単射である。

値域の列 $Bx_n\to f$ をとると、$\|x_n-x_m\|\le\|Bx_n-Bx_m\|$ なので $x_n$ は Cauchy 列である。完備性より $x_n\to x$ となり、$Ax_n=Bx_n-x_n\to f-x$ である。(2) から $Ax=f-x$、すなわち $Bx=f$ となるので値域は閉じている。

さらに $z\perp\operatorname{Ran}B$ ならば、特に $0=(Bz,z)\ge\|z\|^2$ なので $z=0$ である。従って値域は稠密でもあり、$\operatorname{Ran}B=H$ となる。以上より $I+A$ は全単射である。

## **Reference**

- [東北大学入学試験問題（2022年度・選択問題、PDF 5ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/f337b6d1a47d494cd8f448bb4f7c860024fc67959f11c7353e1dbfc786484c24.pdf)
- [L^2：2022年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#2ae09353-7df9-48cf-80a4-cf0de1b288c6)
