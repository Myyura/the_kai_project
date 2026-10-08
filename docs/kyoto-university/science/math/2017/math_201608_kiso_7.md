---
sidebar_label: "2016年8月実施 基礎科目 [7]"
tags:
  - Kyoto-University
  - Mathematics.Real-Analysis.Distance-to-a-Set-and-Lipschitz-Continuity
---

# 京都大学 理学研究科 数学・数理解析専攻 2016年8月実施 基礎科目 [7]

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$n$ を正の整数とし、$\mathbb R^n$ の二点 $x=(x_1,\ldots,x_n)$、$y=(y_1,\ldots,y_n)$ の距離を

$$
d(x,y)=\sqrt{(x_1-y_1)^2+\cdots+(x_n-y_n)^2}
$$

と定める。$\mathbb R^n$ の空でない部分集合 $A$ に対し、関数 $f:\mathbb R^n\to\mathbb R$ を

$$
f(x)=\inf_{z\in A}d(x,z)
$$

で定めるとき、$\mathbb R^n$ の任意の二点 $x,y$ に対して $|f(x)-f(y)|\le d(x,y)$ が成り立つことを示せ。

#### 题目描述

在 $\mathbb R^n$ 中取欧氏距离

$$
d(x,y)=\sqrt{\sum_{j=1}^n(x_j-y_j)^2}.
$$

对任意非空集合 $A\subset\mathbb R^n$，定义 $f(x)=\inf_{z\in A}d(x,z)$。证明任意 $x,y\in\mathbb R^n$ 都满足

$$
|f(x)-f(y)|\le d(x,y).
$$

## **Kai**

$A\ne\varnothing$ より $z_0\in A$ を一つ取れる。$0\le f(x)\le d(x,z_0)<\infty$ なので、$f$ は有限の実数値を取る。

任意の $z\in A$ に対して、三角不等式から

$$
f(x)\le d(x,z)\le d(x,y)+d(y,z).
$$

右辺について $z\in A$ の下限を取ると、

$$
f(x)\le d(x,y)+f(y).
$$

$x,y$ を入れ換えれば $f(y)\le d(x,y)+f(x)$ も得られる。以上より

$$
-d(x,y)\le f(x)-f(y)\le d(x,y),
$$

すなわち $\boxed{|f(x)-f(y)|\le d(x,y)}$ である。

## **Reference**

- [京都大学公式問題（2017年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2016math_kiso.pdf)
- [照合用参考解答（H29-basic.pdf、PDF 9ページ）](https://drive.google.com/file/d/1RJ3cPCMYxorlM3itSeJSplPrldEYm1k3/view?usp=sharing)
