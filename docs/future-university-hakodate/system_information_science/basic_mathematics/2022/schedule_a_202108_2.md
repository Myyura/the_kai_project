---
sidebar_label: "2021年8月実施 A日程 基礎数学 II"
tags:
  - Future-University-Hakodate
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Improper-Integral
---

# 公立はこだて未来大学 システム情報科学研究科 2021年8月実施 A日程 基礎数学 II

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2022%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html) refined with GPT 6 Astra)

## **Description**

**問1** $f(x)=\sin x$、$g(x)=e^{-2x}$ とする。次を満たす八つの定数 $a_i,b_i$（$i=0,1,2,3$）をすべて求めよ。

$$
\begin{aligned}
f(x)&=a_0+a_1x+a_2x^2+a_3x^3+o(x^3),\\
g(x)&=b_0+b_1x+b_2x^2+b_3x^3+o(x^3)\qquad(x\to0).
\end{aligned}
$$

$o$ は Landau のスモールオーである。その結果を用いて、次の極限を求めよ。

$$
\lim_{x\to0}\left(\frac1{2\sin x}+\frac1{e^{-2x}-1}\right).
$$

**問2** 実数 $a$ に対して広義積分 $\int_0^1 x^a\log x\,dx$ が収束する $a$ の範囲を求め、そのときの積分値を $a$ を用いて表せ。

#### 题目描述

1. 求 $\sin x$ 和 $e^{-2x}$ 在 $x=0$ 处至三次项、余项为 $o(x^3)$ 的展开系数 $a_0,\ldots,a_3,b_0,\ldots,b_3$，并据此计算上述两个分式之和的极限。
2. 求使 $\int_0^1x^a\log x\,dx$ 收敛的实数 $a$ 的范围及积分值。

## **Kai**

### 問1

Taylor 展開により、

$$
\sin x=x-\frac{x^3}{6}+o(x^3),\qquad
e^{-2x}=1-2x+2x^2-\frac43x^3+o(x^3).
$$

よって、

$$
\boxed{(a_0,a_1,a_2,a_3)=(0,1,0,-1/6),\quad
(b_0,b_1,b_2,b_3)=(1,-2,2,-4/3)}.
$$

さらに

$$
\frac1{2\sin x}=\frac1{2x}+O(x),\qquad
\frac1{e^{-2x}-1}=-\frac1{2x}-\frac12+O(x)
$$

より、求める極限は $\boxed{-1/2}$。

### 問2

$a\ne-1$ のとき、

$$
\int x^a\log x\,dx
=x^{a+1}\left(\frac{\log x}{a+1}-\frac1{(a+1)^2}\right)+C.
$$

$x\to0+$ で下端の項が $0$ となるのは $a>-1$ のときである。$a=-1$ では原始関数が $(\log x)^2/2$ となり、$a<-1$ の場合も積分は $-\infty$ に発散する。したがって、

$$
\boxed{a>-1,\qquad\int_0^1x^a\log x\,dx=-\frac1{(a+1)^2}}.
$$

## **Reference**

- [大学公式問題（PDF 2ページ、冊子1ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R03.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2022%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html)
