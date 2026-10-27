---
sidebar_label: "2023年8月実施 共通問題 問題4（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Infinite-Series
  - Mathematics.Calculus.Sequence-Convergence
  - Mathematics.Calculus.Improper-Integral
---

# 東北大学 大学院理学研究科 数学専攻 2023年8月実施 共通問題 問題4

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

問題は4題ある．全問に解答すること．

実数からなる数列 $\{a_n\}_{n=1}^{\infty}$ において，$a_1>0$ とし，さらに任意の正の整数 $n$ に対して $|a_{n+1}|<|a_n|$ および $a_na_{n+1}<0$ が成り立つとする．また数列 $\{S_m\}_{m=1}^{\infty}$ を

$$
S_m=\sum_{n=1}^{2m}a_n\qquad(m\in\mathbb{Z}_{>0})
$$

と定める．以下の問いに答えよ．ただし，$\mathbb{Z}_{>0}$ は正の整数全体のなす集合を表す．

(1) 数列 $\{S_m\}_{m=1}^{\infty}$ は狭義単調増加であることを示せ．

(2) 極限 $\displaystyle\lim_{m\to\infty}S_m$ が存在することを示せ．

(3) 関数 $g:[0,\infty)\to\mathbb{R}$ を

$$
g(x)=\begin{cases}
1&(x\in[2j-2,2j-1)),\\
-1&(x\in[2j-1,2j))
\end{cases}\qquad(j\in\mathbb{Z}_{>0})
$$

と定める．このとき，数列 $\{T_m\}_{m=1}^{\infty}$ を

$$
T_m=\int_0^{2m}\frac{g(x)}{\log(e+x)}\,dx
\qquad(m\in\mathbb{Z}_{>0})
$$

と定めると，極限 $T=\displaystyle\lim_{m\to\infty}T_m$ が存在して

$$
0<T<\int_0^1\frac1{\log(e+x)}\,dx
$$

を満たすことを示せ．

### 题目描述

本卷共有4题，全部作答。

实数列 $\{a_n\}_{n=1}^{\infty}$ 满足 $a_1>0$，且对每个正整数 $n$ 都有 $|a_{n+1}|<|a_n|$ 和 $a_na_{n+1}<0$。定义

$$
S_m=\sum_{n=1}^{2m}a_n\qquad(m\in\mathbb{Z}_{>0}),
$$

其中 $\mathbb{Z}_{>0}$ 表示正整数集合。回答下列问题。

(1) 证明 $\{S_m\}_{m=1}^{\infty}$ 严格单调递增。

(2) 证明极限 $\displaystyle\lim_{m\to\infty}S_m$ 存在。

(3) 定义函数 $g:[0,\infty)\to\mathbb{R}$ 为

$$
g(x)=\begin{cases}
1&(x\in[2j-2,2j-1)),\\
-1&(x\in[2j-1,2j))
\end{cases}\qquad(j\in\mathbb{Z}_{>0}).
$$

令

$$
T_m=\int_0^{2m}\frac{g(x)}{\log(e+x)}\,dx
\qquad(m\in\mathbb{Z}_{>0}).
$$

证明极限 $T=\displaystyle\lim_{m\to\infty}T_m$ 存在，并满足

$$
0<T<\int_0^1\frac1{\log(e+x)}\,dx.
$$

## **Kai**

### (1)

仮定から $a_{2j-1}>0$，$a_{2j}<0$ であり，絶対値は狭義単調減少する．よって

$$
S_{m+1}-S_m=a_{2m+1}+a_{2m+2}
=|a_{2m+1}|-|a_{2m+2}|>0.
$$

### (2)

正負の項を次のように組み合わせると

$$
S_m=a_1+\sum_{j=1}^{m-1}(a_{2j}+a_{2j+1})+a_{2m}<a_1.
$$

したがって $\{S_m\}$ は上に有界な単調増加列であり，有限の極限をもつ．

### (3)

$$
a_n=(-1)^{n+1}\int_{n-1}^{n}\frac{dx}{\log(e+x)}
$$

とおく．$x\mapsto1/\log(e+x)$ は正かつ狭義単調減少なので，$a_1>0$，$a_na_{n+1}<0$，$|a_{n+1}|<|a_n|$ を満たす．また $T_m=\sum_{n=1}^{2m}a_n$．(1), (2) より $T=\lim_mT_m$ が存在する．

下限については $T\ge T_1=a_1+a_2>0$．上限について，$m\ge2$ ならば

$$
T_m=a_1+(a_2+a_3)+\sum_{j=2}^{m-1}(a_{2j}+a_{2j+1})+a_{2m}
<a_1+a_2+a_3.
$$

よって

$$
0<T\le a_1+a_2+a_3<a_1
=\int_0^1\frac{dx}{\log(e+x)}.
$$

## **Reference**

- [東北大学公式問題（2024年度・共通問題，第3ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_kyotsu.pdf)
- [L^2：2024年度 共通問題・微積分 2](https://note.com/normalmath/n/n89152917de11#82423c15-9ab1-4083-a4d8-dc33d771c63b)
