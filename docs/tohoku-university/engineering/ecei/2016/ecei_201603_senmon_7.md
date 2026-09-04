---
sidebar_label: 2016年3月実施 専門科目 問題7 物理専門2
tags:
  - Tohoku-University
  - Mathematics.Complex-Analysis.Laurent-Series
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題7 物理専門2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

複素変数 $z$ の関数 $f(z)=1/(z^2-4z-1)$ を考える。

$C$ を $z=e^{i\theta}$（$0\le\theta\le2\pi$）により表される円周上を正の向きに回る積分路とするとき，以下の問に答えよ。ただし，$i$ は虚数単位である。

(1) 関数 $f(z)$ のすべての孤立特異点とその留数を求めよ。

(2) 関数 $f(z)$ の領域 $0<|z-2+\sqrt5|<2\sqrt5$ における $z=2-\sqrt5$ まわりのローラン級数を求めよ。

(3) 複素積分 $\int_Cf(z)\,dz$ を求めよ。

(4) 複素積分 $\int_Cf(-z)\,dz$ を求めよ。

(5) 実変数 $x$ の関数 $g(x)=1/(2i+\sin x)$ のフーリエ級数を求めよ。

### 题目描述

令 $f(z)=1/(z^2-4z-1)$，$C$ 为单位圆 $z=e^{i\theta}$（$0\le\theta\le2\pi$）的正向路径。

1. 求全部孤立奇点及其留数。
2. 求在 $0<|z-2+\sqrt5|<2\sqrt5$ 内、以 $z=2-\sqrt5$ 为中心的洛朗级数。
3. 求 $\oint_Cf(z)\,dz$。
4. 求 $\oint_Cf(-z)\,dz$。
5. 求 $g(x)=1/(2i+\sin x)$ 的傅里叶级数。

## **Kai**

### (1)

记 $a=2-\sqrt5,b=2+\sqrt5$。两奇点均为一阶极点，且

$$
\boxed{\operatorname{Res}(f,a)=-\frac1{2\sqrt5},\qquad\operatorname{Res}(f,b)=\frac1{2\sqrt5}.}
$$

### (2)

令 $w=z-a$，则 $f=1/[w(w-2\sqrt5)]$，所以

$$
\boxed{f(z)=-\sum_{n=0}^{\infty}\frac{(z-a)^{n-1}}{(2\sqrt5)^{n+1}},\qquad0<|z-a|<2\sqrt5.}
$$

### (3)–(4)

单位圆内只有 $a$，故

$$
\boxed{\oint_Cf(z)dz=-\frac{\pi i}{\sqrt5}.}
$$

而 $f(-z)$ 在圆内的极点为 $-a$，留数为 $-\operatorname{Res}(f,a)=1/(2\sqrt5)$，所以

$$
\boxed{\oint_Cf(-z)dz=\frac{\pi i}{\sqrt5}.}
$$

### (5)

令 $q=\sqrt5-2\in(0,1)$、$z=e^{ix}$。有

$$
g(x)=\frac{2iz}{z^2-4z-1},\qquad a=-q,\quad b=q^{-1}.
$$

在 $|a|<|z|<b$ 中分别展开两极点的部分分式，得到

$$
\boxed{g(x)=-\frac{i}{\sqrt5}\left[1+\sum_{n=1}^{\infty}q^n\{e^{inx}+(-1)^ne^{-inx}\}\right].}
$$

等价的实三角形式为

$$
\boxed{g(x)=-\frac{i}{\sqrt5}
-\frac{2i}{\sqrt5}\sum_{k=1}^{\infty}q^{2k}\cos(2kx)
+\frac2{\sqrt5}\sum_{k=0}^{\infty}q^{2k+1}\sin((2k+1)x).}
$$

因 $0<q<1$，级数对所有实 $x$ 绝对且一致收敛。
