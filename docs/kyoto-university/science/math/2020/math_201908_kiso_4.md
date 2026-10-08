---
sidebar_label: "2020年度 基礎科目 問題4"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
---

# 京都大学 理学研究科 数学・数理解析専攻 2020年度 基礎科目 問題4

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

開区間 $(0,\infty)$ 上の実数値連続関数 $f$ が広義単調減少、つまり $0<x\le y$ ならば $f(x)\ge f(y)$ とする。さらに、広義積分 $\displaystyle\int_0^\infty f(x)\,dx$ が収束するとする。

1. 任意の $x\in(0,\infty)$ に対して $f(x)\ge0$ となることを示せ。
2. $\displaystyle\lim_{x\to+0}xf(x)=\lim_{x\to\infty}xf(x)=0$ を示せ。

#### 题目描述

设连续函数 $f:(0,\infty)\to\mathbb R$ 单调不增，且反常积分 $\int_0^\infty f(x)\,dx$ 收敛。

1. 证明对所有 $x>0$ 都有 $f(x)\ge0$。
2. 证明 $\lim_{x\to0+}xf(x)=\lim_{x\to\infty}xf(x)=0$。

## **Kai**

### (1)

ある $a>0$ で $f(a)<0$ とすると、単調性より $x\ge a$ で $f(x)\le f(a)<0$ となる。したがって

$$
\int_a^b f(x)\,dx\le(b-a)f(a)\longrightarrow-\infty\qquad(b\to\infty),
$$

これは広義積分の収束に反する。よって $f(x)\ge0$ である。

### (2)

単調性と (1) より

$$
0\le xf(x)\le\int_0^x f(t)\,dt.
$$

積分が $0$ の近傍で収束するため右辺は $x\to0+$ で $0$ に収束し、$xf(x)\to0$ を得る。

同様に

$$
0\le\frac{x}{2}f(x)\le\int_{x/2}^{x}f(t)\,dt
\le\int_{x/2}^{\infty}f(t)\,dt\longrightarrow0\qquad(x\to\infty).
$$

よって両方の極限は $0$ である。

## **Reference**

- [京都大学公式問題（2020年度・基礎科目、PDF 2ページ）](https://www.math.kyoto-u.ac.jp/files/master_exams/2019math_kiso_for2020.pdf)
- [照合用参考解答（R2-basic.pdf、PDF 4ページ）](https://drive.google.com/file/d/12Ok4g9koHUXlcNBVN2XlaIIBAhTuR546/view)
