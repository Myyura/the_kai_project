---
sidebar_label: "2022年度 基礎科目 [1]"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
---

# 京都大学 理学研究科 数学・数理解析専攻 2022年度 基礎科目 問題1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

次の広義積分が収束するような実数 $a$ の範囲を求めよ。

$$
\iint_D\frac{y}{(1+\sqrt{x^2+y^2}-x)^2(x^2+y^2)^a}\,dx\,dy.
$$

ただし、$D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0,\ x^2+y^2\ge1\}$ とする。

#### 题目描述

求使下列反常积分收敛的实数 $a$ 的范围：

$$
\iint_D\frac{y}{(1+\sqrt{x^2+y^2}-x)^2(x^2+y^2)^a}\,dx\,dy,
\qquad D=\{(x,y)\in\mathbb R^2\mid x\ge0,\ y\ge0,\ x^2+y^2\ge1\}.
$$

## **Kai**

被積分関数は非負である。極座標 $x=r\cos\theta$, $y=r\sin\theta$ を用いると、積分は

$$
\int_1^\infty r^{2-2a}\left(\int_0^{\pi/2}
\frac{\sin\theta}{(1+r-r\cos\theta)^2}\,d\theta\right)dr
$$

となる。内側で $u=1+r-r\cos\theta$ とおけば

$$
\int_0^{\pi/2}\frac{\sin\theta}{(1+r-r\cos\theta)^2}\,d\theta
=\frac1r\int_1^{1+r}u^{-2}\,du=\frac1{1+r}.
$$

したがって、収束条件は $\int_1^\infty r^{2-2a}/(1+r)\,dr<\infty$ である。$r\ge1$ で

$$
\frac12r^{1-2a}\le\frac{r^{2-2a}}{1+r}\le r^{1-2a}
$$

だから、求める範囲は

$$
\boxed{a>1}.
$$

## **Reference**

- [京都大学公式問題（2022年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2021math_kiso_for2022_honshi.pdf)
- [照合用参考解答（R4-basic.pdf、PDF 1ページ）](https://drive.google.com/file/d/1wvo88HT16YKnB_J202zUhdYmK_hCK1pn/view)
