---
sidebar_label: "2021年8月実施 A日程 基礎数学 I"
tags:
  - Future-University-Hakodate
  - Mathematics.Linear-Algebra.Matrix-Rank
  - Mathematics.Linear-Algebra.Kernel-and-Image
---

# 公立はこだて未来大学 システム情報科学研究科 2021年8月実施 A日程 基礎数学 I

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2022%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B.html) refined with GPT 6 Astra)

## **Description**

行列

$$
A=\begin{pmatrix}1&1&a\\1&0&-1\\a&-1&-1\end{pmatrix}
$$

に対し，線形写像 $f:\mathbb{R}^3\to\mathbb{R}^3$ を $f(x)=Ax$（$x\in\mathbb{R}^3$）により定める。ただし，$a$ は実数とする。以下の問いに答えよ。（配点 25 点）

**問1** 行列 $A$ の階数を求めよ。

**問2** 線形写像 $f$ の核 $\operatorname{Ker}(f)$ を求めよ。

**問3** 線形写像 $f$ の像 $\operatorname{Im}(f)$ の基底を求めよ。

### 题目描述

对于矩阵

$$
A=\begin{pmatrix}1&1&a\\1&0&-1\\a&-1&-1\end{pmatrix},
$$

用 $f(x)=Ax$（$x\in\mathbb{R}^3$）定义线性映射 $f:\mathbb{R}^3\to\mathbb{R}^3$，其中 $a$ 为实数。回答以下问题。（25 分）

**问1** 求矩阵 $A$ 的秩。

**问2** 求线性映射 $f$ 的核 $\operatorname{Ker}(f)$。

**问3** 求线性映射 $f$ 的像 $\operatorname{Im}(f)$ 的一组基。

## **Kai**

### 問1

$$
\det A=-2a.
$$

$a=0$ のとき、左上の $2\times2$ 小行列式は $-1\ne0$ である。したがって、

$$
\boxed{\operatorname{rank}A=\begin{cases}3&(a\ne0),\\2&(a=0).\end{cases}}
$$

### 問2

$a\ne0$ なら $A$ は正則である。$a=0$ なら $Ax=0$ は $x_1+x_2=0$、$x_1-x_3=0$ に帰着するので、

$$
\boxed{\operatorname{Ker}(f)=\begin{cases}
\{0\}&(a\ne0),\\
\operatorname{span}\{(1,-1,1)^{\mathsf T}\}&(a=0).
\end{cases}}
$$

### 問3

$a\ne0$ なら $\operatorname{Im}(f)=\mathbb R^3$ であり、$A$ の三つの列は基底をなす。$a=0$ なら最初の二列が一次独立で像を張る。求める基底の一例は

$$
\boxed{\begin{cases}
\{(1,1,a)^{\mathsf T},\ (1,0,-1)^{\mathsf T},\ (a,-1,-1)^{\mathsf T}\}&(a\ne0),\\
\{(1,1,0)^{\mathsf T},\ (1,0,-1)^{\mathsf T}\}&(a=0).
\end{cases}}
$$

## **Reference**

- [大学公式問題（PDF 2ページ、冊子1ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R03.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2022%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B.html)
