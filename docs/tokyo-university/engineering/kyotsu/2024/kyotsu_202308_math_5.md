---
sidebar_label: '2023年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Fourier-Analysis.Fourier-Transform-Scaling-and-Frequency-Shift
  - Mathematics.Linear-Algebra.Unitary-Discrete-Fourier-Transform-Matrix
---

# 東京大学 工学系研究科 2023年8月実施 数学 第5問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 実変数 $t$ の連続な絶対可積分関数 $f(t)$ に対し、フーリエ変換を

$$
F(\omega)=\mathcal F[f](\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt
$$

と定義する。ただし $\omega\in\mathbb R$ とする。

1. $a>0$, $g(t)=f(at)$ とするとき、$G=\mathcal F[g]$ を $F$ を用いて表せ。
2. $f(t)=e^{-t^2}$ かつ $a=2$ のとき、$F$ と $G$ の概形を、違いが分かるように図示せよ。
3. $b>0$, $h(t)=f(t)e^{-ibt}$ とするとき、$H=\mathcal F[h]$ を $F$ を用いて表せ。
4. $f(t)=e^{-t^2}$ かつ $b=2$ のとき、$F$ と $H$ の概形を、違いが分かるように図示せよ。

II. 正整数 $N$ と複素数列 $c_1,\ldots,c_N$ に対し、離散フーリエ変換を

$$
D_m=\frac1{\sqrt N}\sum_{n=1}^Nc_n\exp\left(-\frac{2\pi i nm}{N}\right),\qquad1\le m\le N
$$

と定義する。

1. $1\le n,n'\le N$ に対し、次を求めよ。

$$
S(n,n')=\frac1N\sum_{m=1}^N\exp\left(\frac{2\pi i(n-n')m}{N}\right).
$$

2. $D_m=\sum_{n=1}^NU_{mn}c_n$ と書くとき、$U=[U_{mn}]$ がユニタリ行列であることを示せ。
3. $D_1,\ldots,D_N$ から $c_n$ を求める離散逆フーリエ変換の式を導け。
4. $c_{N+1}=c_1$ とする。次の $Q$ を $D_m,\overline{D_m}$ で表せ。

$$
Q=\sum_{n=1}^N\left(\overline{c_n}c_{n+1}+\overline{c_{n+1}}c_n\right).
$$

#### 题目描述

I. 设连续函数 $f(t)$ 绝对可积，其傅里叶变换为

$$
F(\omega)=\mathcal F[f](\omega)=\int_{-\infty}^{\infty}f(t)e^{-i\omega t}\,dt,
$$

其中 $\omega\in\mathbb R$。

1. 设 $a>0$、$g(t)=f(at)$，用 $F$ 表示 $G=\mathcal F[g]$。
2. 当 $f(t)=e^{-t^2},a=2$ 时，在同图上画出 $F,G$，使两者的区别明确。
3. 设 $b>0$、$h(t)=f(t)e^{-ibt}$，用 $F$ 表示 $H=\mathcal F[h]$。
4. 当 $f(t)=e^{-t^2},b=2$ 时，在同图上画出 $F,H$，使两者的区别明确。

II. 对正整数 $N$ 和复数列 $c_1,\ldots,c_N$，定义离散傅里叶变换

$$
D_m=\frac1{\sqrt N}\sum_{n=1}^Nc_n\exp\left(-\frac{2\pi i nm}{N}\right),\qquad1\le m\le N.
$$

1. 对 $1\le n,n'\le N$，计算

$$
S(n,n')=\frac1N\sum_{m=1}^N\exp\left(\frac{2\pi i(n-n')m}{N}\right).
$$

2. 若 $D_m=\sum_{n=1}^NU_{mn}c_n$，证明 $U=[U_{mn}]$ 为酉矩阵。
3. 推导从 $D_1,\ldots,D_N$ 求 $c_n$ 的逆变换公式。
4. 设 $c_{N+1}=c_1$，用 $D_m,\overline{D_m}$ 表示

$$
Q=\sum_{n=1}^N\left(\overline{c_n}c_{n+1}+\overline{c_{n+1}}c_n\right).
$$

## **Kai**

### I

$s=at$ と変数変換すると、

$$
\boxed{G(\omega)=\frac1aF\left(\frac\omega a\right)}.
$$

$f(t)=e^{-t^2},a=2$ のとき、

$$
\boxed{F(\omega)=\sqrt\pi e^{-\omega^2/4},\qquad G(\omega)=\frac{\sqrt\pi}{2}e^{-\omega^2/16}}.
$$

ともに中心は $0$ で、$G$ の最大値は $F$ の半分、横方向の尺度は2倍である。

指数関数をまとめると、

$$
H(\omega)=\int_{-\infty}^{\infty}f(t)e^{-i(\omega+b)t}\,dt=\boxed{F(\omega+b)}.
$$

$f(t)=e^{-t^2},b=2$ のとき、

$$
\boxed{H(\omega)=\sqrt\pi e^{-(\omega+2)^2/4}}.
$$

形と高さは $F$ と同じであり、中心が $0$ から $-2$ に移動する。

![フーリエ変換の伸縮と周波数移動](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/math5-fourier-transforms.svg)

### II.1、II.2

$n=n'$ なら各項は $1$ である。$n\ne n'$ なら、公比は $1$ でなく、その $N$ 乗が $1$ なので、等比数列の和より

$$
\boxed{S(n,n')=\delta_{nn'}}.
$$

また

$$
U_{mn}=N^{-1/2}e^{-2\pi inm/N},
$$

よって

$$
(U^*U)_{nn'}=\frac1N\sum_{m=1}^Ne^{2\pi i(n-n')m/N}=\delta_{nn'}.
$$

したがって $U^*U=I$ であり、$U$ はユニタリ行列である。

### II.3

$D=Uc$、$U^{-1}=U^*$ より、

$$
\boxed{c_n=\frac1{\sqrt N}\sum_{m=1}^ND_me^{2\pi inm/N}}.
$$

### II.4

逆変換を代入して II.1 の直交関係を用いると、

$$
\sum_{n=1}^N\overline{c_n}c_{n+1}=\sum_{m=1}^N\overline{D_m}D_m e^{2\pi im/N}.
$$

複素共役の式を加えると、

$$
\boxed{Q=2\sum_{m=1}^N\cos\frac{2\pi m}{N}\,D_m\overline{D_m}}.
$$

