---
sidebar_label: "2023年度 材料基礎学B 問題1"
tags:
  - Kyoto-University
  - Physics.Quantum-Mechanics.One-Dimensional-Infinite-Square-Well
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
  - Physics.Quantum-Mechanics.Heisenberg-Uncertainty-and-Minimum-Uncertainty-Gaussian
---

# 京都大学 工学研究科 材料工学専攻 2023年度 材料基礎学B 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%9D%90%E6%96%99%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E6%9D%90%E6%96%99%E5%9F%BA%E7%A4%8E%E5%AD%A6B_1.html) refined with GPT 6 Astra)

## **Description**

障壁が無限に高い井戸型ポテンシャル下での電子状態を考察した以下の文章を読み、問に答えよ。

1次元運動する電子の時間に依存しない波動関数 $\psi(x)$ は、運動量演算子 $\hat p=-i\hbar\,d/dx$、ポテンシャルを $V(x)$、電子の質量を $m$ とすると、次の Schrödinger 方程式で記述される。

$$
\left\{\boxed{\text{あ}}\right\}\psi(x)=E\psi(x).\tag{1}
$$

$E$ はエネルギー固有値、$x$ は位置、$i$ は虚数単位、$\hbar=h/(2\pi)$ で $h$ はプランク定数である。$\alpha>0$ として、幅 $2\alpha$ の井戸型ポテンシャル

$$
V(x)=
\begin{cases}
\infty &(x<-\alpha\ \text{または}\ x>\alpha),\\
0 &(-\alpha\le x\le\alpha)
\end{cases}\tag{2}
$$

を考える。井戸の外側では電子は存在できず $\psi(x)=0$ なので、以下は井戸の内側のみを考える。式 (1) の一般解は、$A,B$ を任意定数として

$$
\psi(x)=A\exp\left(\boxed{\text{い}}\right)
+B\exp\left(\boxed{\text{う}}\right).\tag{3}
$$

波動関数の連続性に基づく境界条件は

$$
\psi(\alpha)=\psi(-\alpha)=\boxed{\text{え}}.\tag{4}
$$

$A,B$ が同時にはゼロでないという条件から、エネルギー固有値は正整数 $N$ を用いて

$$
E=\boxed{\text{お}}.\tag{5}
$$

規格化条件 $\int_{-\infty}^{\infty}|\psi(x)|^2\,dx=1$ を満たす $N=1$ の最低エネルギー状態 $E=E_1$ の波動関数は

$$
\psi(x)=\boxed{\text{か}}.\tag{7}
$$

この状態について位置 $x$ と運動量 $p$ の不確定性関係 $\Delta x\,\Delta p\ge\hbar/2$ を確認する。物理量 $M$ の測定誤差と平均値は

$$
\Delta M=\sqrt{\langle M^2\rangle-\langle M\rangle^2},\tag{9}
$$

$$
\langle M\rangle=\int_{-\infty}^{\infty}\psi^*(x)\hat M\psi(x)\,dx\tag{10}
$$

で与えられる。$\hat M$ は $M$ に対応する演算子、$\psi^*$ は $\psi$ の複素共役である。したがって

$$
\langle x\rangle=\boxed{\text{き}},\qquad
\langle x^2\rangle=\boxed{\text{く}},\tag{11}
$$

$$
\langle p\rangle=\boxed{\text{け}},\qquad
\langle p^2\rangle=\boxed{\text{こ}},\tag{12}
$$

$$
\Delta x\,\Delta p=\boxed{\text{さ}}\,\hbar>\frac{\hbar}{2}.\tag{13}
$$

また、エネルギーと運動量の関係 $E=p^2/(2m)$ に基づいてエネルギーの測定誤差 $\Delta E$ が決まるとすると、$\Delta E$ は最低エネルギー $E_1$ の $\boxed{\text{し}}$ 倍になっている。

問1　空欄「あ」を $\hat p,m,V(x)$ の中から必要なものを用いて埋めよ。

問2　空欄「い」「う」を $m,E,\hbar,x$ の中から必要なものを用いて埋めよ。

問3　空欄「え」〜「か」を数値、または $N,\hbar,m,\alpha,x$ の中から必要なものを用いて埋めよ。

問4　空欄「き」〜「さ」を数値、または $\hbar,m,\alpha$ の中から必要なものを用いて埋めよ。

問5　空欄「し」を適当な数値で埋めよ。

必要に応じて次の積分を用いてよい。

$$
\int_{-\pi/2}^{\pi/2}\cos^2x\,dx=\frac\pi2,\qquad
\int_{-\pi/2}^{\pi/2}x^2\cos^2x\,dx
=\frac\pi{24}(\pi^2-6).
$$

#### 题目描述

质量为 $m$ 的电子在一维无限深方势阱中运动。势阱区间为 $[-\alpha,\alpha]$，$\alpha>0$；阱内 $V=0$，阱外 $V=\infty$ 且波函数为零。动量算符为 $\hat p=-i\hbar\,d/dx$，$\hbar=h/(2\pi)$。

问1：填写定态薛定谔方程 $\{\boxed{\text{あ}}\}\psi=E\psi$ 中的哈密顿算符。

问2：将阱内一般解写成 $\psi=Ae^{\boxed{\text{い}}}+Be^{\boxed{\text{う}}}$，填写两个指数。

问3：利用波函数的连续性，填写边界值 $\psi(\pm\alpha)=\boxed{\text{え}}$、以正整数 $N$ 表示的能量本征值 $E=\boxed{\text{お}}$，以及 $N=1$ 时归一化的基态波函数 $\psi=\boxed{\text{か}}$。

问4：对基态计算 $\langle x\rangle,\langle x^2\rangle,\langle p\rangle,\langle p^2\rangle$，依次填入「き」至「こ」；求 $\Delta x\,\Delta p/\hbar$ 填入「さ」，确认它大于 $1/2$。题中定义 $\Delta M=\sqrt{\langle M^2\rangle-\langle M\rangle^2}$，平均值由 $\int\psi^*\hat M\psi\,dx$ 求得。

问5：题干称按照 $E=p^2/(2m)$ 确定能量测量误差 $\Delta E$，求 $\Delta E/E_1$，填入「し」。可使用日文题面所列的两个定积分。

## **Kai**

### 問1

運動エネルギーとポテンシャルエネルギーの和より

$$
\boxed{\text{あ}:\ \frac{\hat p^{\,2}}{2m}+V(x)}.
$$

### 問2

井戸内では $-\hbar^2\psi''/(2m)=E\psi$。$k=\sqrt{2mE}/\hbar$ とおくと、$\psi=Ae^{ikx}+Be^{-ikx}$ なので

$$
\boxed{\text{い}:\ i\frac{\sqrt{2mE}}{\hbar}x},\qquad
\boxed{\text{う}:\ -i\frac{\sqrt{2mE}}{\hbar}x}.
$$

二つの空欄を交換してもよい。

### 問3

井戸外では $\psi=0$ なので、連続性より $\boxed{\text{え}:\ 0}$。

二つの境界条件に非自明な解が存在するには

$$
\det\begin{pmatrix}e^{ik\alpha}&e^{-ik\alpha}\\
e^{-ik\alpha}&e^{ik\alpha}\end{pmatrix}
=2i\sin(2k\alpha)=0.
$$

$E=0$ では境界条件を満たす解はゼロ関数のみなので、$2k\alpha=N\pi$、$N=1,2,\ldots$ として

$$
\boxed{\text{お}:\ \frac{N^2\pi^2\hbar^2}{8m\alpha^2}}.
$$

$N=1$ では $\psi(x)=C\cos[\pi x/(2\alpha)]$ であり、

$$
1=|C|^2\int_{-\alpha}^{\alpha}\cos^2\frac{\pi x}{2\alpha}\,dx
=|C|^2\alpha.
$$

全体の位相を選び $C>0$ とすると

$$
\boxed{\text{か}:\ \frac1{\sqrt\alpha}\cos\frac{\pi x}{2\alpha}}
\qquad(-\alpha\le x\le\alpha).
$$

### 問4

$|\psi|^2$ は偶関数なので

$$
\boxed{\text{き}:\ \langle x\rangle=0}.
$$

$u=\pi x/(2\alpha)$ と置換して与えられた積分を用いると

$$
\langle x^2\rangle
=\frac1\alpha\left(\frac{2\alpha}{\pi}\right)^3
\int_{-\pi/2}^{\pi/2}u^2\cos^2u\,du
=\boxed{\frac{\alpha^2(\pi^2-6)}{3\pi^2}}\quad(\text{く}).
$$

$\psi$ は実関数で境界でゼロになるため

$$
\langle p\rangle=-i\hbar\int_{-\alpha}^{\alpha}\psi\psi'\,dx
=-\frac{i\hbar}{2}[\psi^2]_{-\alpha}^{\alpha}=0,
\qquad\boxed{\text{け}:\ 0}.
$$

また、$-\hbar^2\psi''=[\pi^2\hbar^2/(4\alpha^2)]\psi$ より

$$
\boxed{\text{こ}:\ \langle p^2\rangle=\frac{\pi^2\hbar^2}{4\alpha^2}}.
$$

したがって

$$
\Delta x\,\Delta p
=\frac{\hbar}{2}\sqrt{\frac{\pi^2-6}{3}},\qquad
\boxed{\text{さ}:\ \frac12\sqrt{\frac{\pi^2-6}{3}}}.
$$

$\pi^2>9$ なので、この積は $\hbar/2$ より大きい。

### 問5

$E=p^2/(2m)$ に運動量の広がり $\Delta p$ を代入したエネルギー尺度として解釈すると

$$
\frac{(\Delta p)^2}{2m}
=\frac{\pi^2\hbar^2}{8m\alpha^2}=E_1
$$

となり、この解釈での空欄は $\boxed{\text{し}:\ 1}$ である。

ただし、これは式 (9) で定義されたエネルギー測定値の標準偏差とは異なる。基底状態は $\hat H\psi=E_1\psi$ を満たすため、式 (9) をエネルギーに適用すれば

$$
\Delta E=\sqrt{\langle\hat H^2\rangle-\langle\hat H\rangle^2}
=\sqrt{E_1^2-E_1^2}=0.
$$

したがって、式 (9) の定義を厳密に採用した場合の比 $\Delta E/E_1$ は $\boxed{0}$ である。

## **Reference**

- [京都大学公式問題：2023年度材料工学専攻、材料基礎学B問題1（PDF 9–11ページ）](https://www.mtl.kyoto-u.ac.jp/exam/master2023.pdf)
- [Miyake：2023年度材料基礎学B問題1](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%9D%90%E6%96%99%E5%B7%A5%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E6%9D%90%E6%96%99%E5%9F%BA%E7%A4%8E%E5%AD%A6B_1.html)
