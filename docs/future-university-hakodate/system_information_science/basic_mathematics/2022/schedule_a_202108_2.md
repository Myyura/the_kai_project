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

以下の問いに答えよ。（配点 25 点）

**問1** $f(x)=\sin x$，$g(x)=e^{-2x}$ とする。以下の式をみたす 8 つの定数 $a_i$ および $b_i$（$i=0,1,2,3$）をすべて求めよ。

$$
\begin{aligned}
f(x)&=a_0+a_1x+a_2x^2+a_3x^3+o(x^3)\quad(x\to0),\\
g(x)&=b_0+b_1x+b_2x^2+b_3x^3+o(x^3)\quad(x\to0).
\end{aligned}
$$

ただし，記号 $o$ はランダウのスモールオーである。さらに，その結果を用いて極限

$$
\lim_{x\to0}\left(\frac{1}{2\sin x}+\frac{1}{e^{-2x}-1}\right)
$$

を求めよ。

**問2** $a$ は実数とする。広義積分 $\displaystyle\int_0^1x^a\log x\,dx$ が収束するような $a$ の値の範囲を求め，そのときの広義積分の値を $a$ を用いて表せ。

### 题目描述

回答以下问题。（25 分）

**问1** 设 $f(x)=\sin x$、$g(x)=e^{-2x}$。求满足下式的全部八个常数 $a_i$、$b_i$（$i=0,1,2,3$）：

$$
\begin{aligned}
f(x)&=a_0+a_1x+a_2x^2+a_3x^3+o(x^3)\quad(x\to0),\\
g(x)&=b_0+b_1x+b_2x^2+b_3x^3+o(x^3)\quad(x\to0).
\end{aligned}
$$

其中 $o$ 为兰道小 $o$ 记号。再利用所得结果求极限

$$
\lim_{x\to0}\left(\frac{1}{2\sin x}+\frac{1}{e^{-2x}-1}\right).
$$

**问2** 设 $a$ 为实数。求使广义积分 $\displaystyle\int_0^1x^a\log x\,dx$ 收敛的 $a$ 的取值范围，并用 $a$ 表示此时的积分值。

## **Kai**

### 問1

Taylor 展開により、

$$
\begin{gathered}
\sin x=x-\frac{x^3}{6}+o(x^3),\\
e^{-2x}=1-2x+2x^2-\frac43x^3+o(x^3).
\end{gathered}
$$

よって、

$$
\boxed{\begin{gathered}
(a_0,a_1,a_2,a_3)=(0,1,0,-1/6),\\
(b_0,b_1,b_2,b_3)=(1,-2,2,-4/3)
\end{gathered}}.
$$

さらに

$$
\begin{gathered}
\frac1{2\sin x}=\frac1{2x}+O(x),\\
\frac1{e^{-2x}-1}=-\frac1{2x}-\frac12+O(x)
\end{gathered}
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
\boxed{\begin{gathered}
a>-1,\\
\int_0^1x^a\log x\,dx=-\frac1{(a+1)^2}
\end{gathered}}.
$$

## **Reference**

- [大学公式問題（PDF 2ページ、冊子1ページ）](https://www.fun.ac.jp/wp/wp-content/uploads/R03.8.pdf)
- [Miyake：対応する解答](https://miyake.github.io/exams/%E5%85%AC%E7%AB%8B%E3%81%AF%E3%81%93%E3%81%A0%E3%81%A6%E6%9C%AA%E6%9D%A5%E5%A4%A7%E5%AD%A6/%E5%9F%BA%E7%A4%8E%E6%95%B0%E5%AD%A6/2022%E5%B9%B4%E5%BA%A6_A%E6%97%A5%E7%A8%8B_2.html)
