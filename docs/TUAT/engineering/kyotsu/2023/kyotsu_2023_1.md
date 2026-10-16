---
sidebar_label: "2023年度 [1]"
tags:
  - Tokyo-University-of-Agriculture-and-Technology
  - Mathematics.Calculus.Local-Extrema
---

# 東京農工大学 工学府 2023年度 共通数学 [1]

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

条件 $4x^2+y^2=4$、$x>0$ のもとで、関数

$$
f(x,y)=\frac{x^2y+1}{x^3}
$$

の極値を求めよ。

#### 题目描述

在约束 $4x^2+y^2=4$、$x>0$ 下，求 $f(x,y)=(x^2y+1)/x^3$ 的极值。

## **Kai**

$x=\cos\theta$、$y=2\sin\theta$、$-\pi/2<\theta<\pi/2$ とおくと、

$$
g(\theta)=f(x,y)=2\tan\theta+\frac1{\cos^3\theta}.
$$

微分して、

$$
g'(\theta)=\frac{2\cos^2\theta+3\sin\theta}{\cos^4\theta}
=\frac{(2-\sin\theta)(2\sin\theta+1)}{\cos^4\theta}.
$$

この区間で $2-\sin\theta>0$ なので、$g'$ は $\theta=-\pi/6$ の前で負、後で正となる。よって唯一の極値は

$$
\boxed{f\left(\frac{\sqrt3}{2},-1\right)=\frac{2}{3\sqrt3}\quad\text{（極小値）}}.
$$

両端で $g\to+\infty$ となるため、これは最小値でもあり、極大値は存在しない。

## **Reference**

- [大学公式問題（1ページ）](https://web.tuat.ac.jp/~tkakomon/r5/1.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E8%BE%B2%E5%B7%A5%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E5%BA%9C/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html)
