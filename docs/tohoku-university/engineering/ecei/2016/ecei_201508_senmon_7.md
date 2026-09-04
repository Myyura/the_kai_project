---
sidebar_label: 2015年8月実施 専門科目 問題7 物理専門2
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Convolution
  - Mathematics.Fourier-Analysis.Fourier-Transform-Differentiation-and-Time-Multiplication
---

# 東北大学 工学研究科 電気・情報系 2015年8月実施 専門科目 問題7 物理専門2

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

区間 $-\infty<x<+\infty$ における実変数 $x$ の関数
$$
f(x)=\exp\left(-\frac{x^2}{\alpha}\right)
$$
とそのフーリエ変換
$$
F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)\exp(-i\omega x)\,dx
$$
を考える。ここで，$i$ は虚数単位，$\alpha$ は正の実数である。以下の問に答えよ。

必要に応じて $\int_{-\infty}^{\infty}\exp(-ax^2)dx=\sqrt{\pi/a}$ を用いよ。ここで，$a$ は正の実数である。

(1) $xf(x)$ と $x^2f(x)$ が，それぞれ，区間 $-\infty<x<+\infty$ で絶対積分可能であることを示せ。

(2) $x^2f(x)$ のフーリエ変換を求めよ。

(3) $\frac d{d\omega}F(\omega)=C(\omega)F(\omega)$ を満たす関数 $C(\omega)$ を求めよ。

(4) $F(\omega)$ を求めよ。

(5) $2$ つの関数 $g(x)$ と $h(x)$ の畳み込み積分は $f(x)=\int_{-\infty}^{\infty}g(y)h(x-y)dy$ と定義され，$f(x),g(x),h(x)$ のフーリエ変換をそれぞれ $F(\omega),G(\omega),H(\omega)$ としたとき，$F(\omega)=\sqrt{2\pi}G(\omega)H(\omega)$ と表せる。

積分方程式
$$
\int_{-\infty}^{\infty}g(y)\exp\left(-\frac{(x-y)^2}{2}\right)dy=\exp\left(-\frac{x^2}{8}\right)
$$
の解 $g(x)$ を求めよ。

### 题目描述

令 $\alpha>0$，$f(x)=e^{-x^2/\alpha}$，采用傅里叶变换

$$
F(\omega)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{\infty}f(x)e^{-i\omega x}\,dx.
$$

可用 $\int_{-\infty}^{\infty}e^{-ax^2}dx=\sqrt{\pi/a}$（$a>0$）。

1. 证明 $xf(x)$ 和 $x^2f(x)$ 绝对可积。
2. 求 $x^2f(x)$ 的傅里叶变换。
3. 求满足 $F'(\omega)=C(\omega)F(\omega)$ 的 $C(\omega)$。
4. 求 $F(\omega)$。
5. 已知该规范下卷积满足 $\mathcal F[g*h]=\sqrt{2\pi}GH$，求积分方程
   

$$
\int_{-\infty}^{\infty}g(y)e^{-(x-y)^2/2}\,dy=e^{-x^2/8}
$$

   的解 $g(x)$。

## **Kai**

### (1)

直接积分及分部积分得

$$
\int_{\mathbb R}|x|e^{-x^2/\alpha}dx=\alpha<\infty,\qquad
\int_{\mathbb R}x^2e^{-x^2/\alpha}dx=\frac{\sqrt\pi\alpha^{3/2}}2<\infty.
$$

### (2)

由 (1) 可在积分号下求导两次，因此

$$
\boxed{\mathcal F[x^2f](\omega)=-F''(\omega).}
$$

### (3)–(4)

由 $f'=-2xf/\alpha$，且分部积分无边界项，

$$
i\omega F=\mathcal F[f']=-\frac2\alpha\mathcal F[xf]=-\frac{2i}\alpha F'.
$$

故 $C(\omega)=-\alpha\omega/2$。又 $F(0)=\sqrt{\alpha/2}$，解得

$$
\boxed{F(\omega)=\sqrt{\frac\alpha2}e^{-\alpha\omega^2/4}.}
$$

所以 (2) 亦可写成

$$
\boxed{\mathcal F[x^2f](\omega)=\left(\frac\alpha2-\frac{\alpha^2\omega^2}4\right)\sqrt{\frac\alpha2}e^{-\alpha\omega^2/4}.}
$$

### (5)

右边变换为 $2e^{-2\omega^2}$，核的变换为 $e^{-\omega^2/2}$，所以

$$
G(\omega)=\sqrt{\frac2\pi}e^{-3\omega^2/2}.
$$

与 $\mathcal F[e^{-x^2/6}]=\sqrt3e^{-3\omega^2/2}$ 比较，得

$$
\boxed{g(x)=\sqrt{\frac{2}{3\pi}}e^{-x^2/6}.}
$$
