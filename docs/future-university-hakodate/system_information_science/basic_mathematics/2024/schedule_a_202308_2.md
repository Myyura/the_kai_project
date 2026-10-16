---
sidebar_label: "2023年8月実施 A日程 基礎数学 II"
tags:
  - Future-University-Hakodate
  - Mathematics.Calculus.Logarithmic-Differentiation
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 公立はこだて未来大学 システム情報科学研究科 2023年8月実施 A日程 基礎数学 II

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2024%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html) refined with GPT 6 Astra)

## **Description**

**問1** 正の実数 $x$ に対して $f(x)=x^{\sin x}$ を微分せよ。

**問2** $t=\tan(x/2)$ と変数変換し、定積分 $\int_0^{\pi/2}\frac{dx}{1+\sin x}$ を求めよ。

#### 题目描述

1. 对 $x>0$，求 $f(x)=x^{\sin x}$ 的导数。
2. 使用代换 $t=\tan(x/2)$ 计算 $\int_0^{\pi/2}(1+\sin x)^{-1}\,dx$。

## **Kai**

### 問1

$\log f(x)=\sin x\log x$ を微分すると、

$$
\frac{f'(x)}{f(x)}=\cos x\log x+\frac{\sin x}{x}.
$$

よって、

$$
\boxed{f'(x)=x^{\sin x}\left(\cos x\log x+\frac{\sin x}{x}\right)}.
$$

### 問2

$t=\tan(x/2)$ により、$\sin x=2t/(1+t^2)$、$dx=2\,dt/(1+t^2)$ となり、積分区間は $0\le t\le1$ に移る。

$$
\int_0^{\pi/2}\frac{dx}{1+\sin x}
=2\int_0^1\frac{dt}{(1+t)^2}
=\left[-\frac2{1+t}\right]_0^1
=\boxed1.
$$

## **Reference**

- [大学公式問題（PDF 2ページ、冊子1ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R05.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2024%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html)
