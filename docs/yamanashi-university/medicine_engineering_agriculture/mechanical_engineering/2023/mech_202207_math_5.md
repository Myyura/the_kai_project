---
sidebar_label: "2022年7月実施 前期募集 数学 問5"
tags:
  - Yamanashi-University
  - Mathematics.Differential-Equations
---

# 山梨大学 医工農学総合教育部 工学専攻 機械工学コース 2022年7月実施 前期募集 数学 問5

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%BC%8F.html) refined with GPT 6 Astra)

## **Description**

問5　以下の2つの問いに答えよ。

Problem 5　Answer the following two questions.

(1) 以下に示す微分方程式の一般解を求めよ。

Find the general solution of the differential equation shown below.

$$
(2x-3y)\,dx+\left(\frac1{y^2}-3x\right)dy=0
$$

(2) 以下に示す微分方程式の特殊解を求めよ。なお、$D$ は微分演算子である。

Find the special solution of the differential equation shown below. Note that $D$ is a differential operator.

$$
(D^2+D+3)y=3x^2+8x
$$

### 题目描述

问5　回答下列两个问题。

(1) 求下列微分方程的通解。

$$
(2x-3y)\,dx+\left(\frac1{y^2}-3x\right)dy=0
$$

(2) 求下列微分方程的一个特解。其中，$D$ 为微分算子。

$$
(D^2+D+3)y=3x^2+8x
$$

## **Kai**

### (1)

$y\ne0$ において

$$
\frac{\partial}{\partial y}(2x-3y)
=\frac{\partial}{\partial x}(y^{-2}-3x)=-3
$$

なので完全微分方程式である。実際、

$$
d\left(x^2-3xy-\frac1y\right)
=(2x-3y)\,dx+\left(\frac1{y^2}-3x\right)\,dy.
$$

したがって一般解は

$$
\boxed{x^2-3xy-\frac1y=C\quad(y\ne0)}
$$

である。

### (2)

$y_p=ax^2+bx+c$ とおくと

$$
y_p''+y_p'+3y_p
=3ax^2+(2a+3b)x+(2a+b+3c).
$$

係数比較により $a=1,\ b=2,\ c=-4/3$ となる。よって

$$
\boxed{y_p=x^2+2x-\frac43}.
$$

## **Reference**

- [山梨大学公式問題（PDF 4頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05M1_1TM.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%B1%B1%E6%A2%A8%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E3%82%B3%E3%83%BC%E3%82%B9/2023%E5%B9%B4%E5%BA%A6_%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%BC%8F.html)
- [山梨大学募集要項（試験日：25頁）](https://www.yamanashi.ac.jp/wp-content/uploads/2016/01/R05_mt_yoko_j.pdf)
