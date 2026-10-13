---
sidebar_label: "2020年8月実施 選択問題7 ディジタル信号処理"
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Signal-Processing.Z-Transform
  - Electrical-Electronic.Signal-Processing.Discrete-Time-Transfer-Function-and-Impulse-Response
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題7 ディジタル信号処理

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問1

インパルス応答が

$$
h[n]=\left(\frac16\right)^{n-1}-\left(\frac12\right)^{n-1}\quad(n=1,2,\ldots),
\qquad h[0]=0
$$

である因果的な線形時不変システムを考える。

1. 有限入力有限出力安定であるか、理由とともに答えよ。
2. $z$ 変換により伝達関数 $H(z)$ を求めよ。
3. 因果入力 $u[n]=(1/6)^n\ (n=0,1,\ldots)$ に対する出力の $z$ 変換 $Y(z)$ を求めよ。
4. 逆 $z$ 変換により出力 $y[n]$ を求めよ。

### 問2

連続時間信号 $x(t)=\cos(4\pi t+\pi/2)$ を、標本化周期 $T=1/8$ sで標本化する。

1. 標本化周波数 [Hz] を求めよ。
2. 連続時間信号の周期 [s] を求めよ。
3. 離散時間信号の周期と正規化角周波数を求めよ。
4. 離散時間信号の周期を $N$、$x[n]=x(nT)$ とし、1周期の各値 $x[n]\ (n=0,\ldots,N-1)$ を求めよ。
5. 離散時間フーリエ級数 $X[k]\ (k=0,\ldots,N-1)$ を求めよ。

#### 题目描述

问1：因果LTI系统的脉冲响应为 $h[n]=(1/6)^{n-1}-(1/2)^{n-1}$（$n\ge1$），$h[0]=0$。判断BIBO稳定性，求传递函数，并对因果输入 $(1/6)^n$ 求输出的 $z$ 变换和时域表达式。问2：以周期 $T=1/8$ s采样 $\cos(4\pi t+\pi/2)$，求采样频率、连续信号周期、离散信号周期和归一化角频率、一个周期的样本以及离散时间傅里叶级数系数。原题未指定傅里叶级数归一化，解答中明确采用的正反变换。

## **Kai**

### 問1 (1), (2)

$n\ge1$ では $h[n]\le0$ だから

$$
\sum_{n=0}^\infty|h[n]|=\sum_{n=1}^\infty
\left[\left(\frac12\right)^{n-1}-\left(\frac16\right)^{n-1}\right]
=2-\frac65=\frac45<\infty.
$$

したがってBIBO安定である。また

$$
\boxed{H(z)=\frac1{z-1/6}-\frac1{z-1/2}
=-\frac{1}{3(z-1/6)(z-1/2)},\quad |z|>\frac12}.
$$

### 問1 (3), (4)

$U(z)=z/(z-1/6)$ なので

$$
\boxed{Y(z)=-\frac{z}{3(z-1/6)^2(z-1/2)}}.
$$

部分分数分解すると

$$
Y(z)=-3\frac z{z-1/2}+3\frac z{z-1/6}
+\frac z{(z-1/6)^2}.
$$

$z/(z-a)\leftrightarrow a^n$、$z/(z-a)^2\leftrightarrow na^{n-1}$ より

$$
\boxed{y[n]=3\left(\frac16\right)^n-3\left(\frac12\right)^n
+n\left(\frac16\right)^{n-1}\quad(n\ge0)}.
$$

因果性より $n<0$ では0。$y[0]=y[1]=0,y[2]=-1/3$ は直接畳み込みとも一致する。

### 問2 (1)–(4)

$$
\boxed{f_s=1/T=8\ \mathrm{Hz}},\qquad
\boxed{T_0=2\pi/(4\pi)=0.5\ \mathrm s}.
$$

標本値は $x[n]=\cos(\pi n/2+\pi/2)=-\sin(\pi n/2)$。したがって

$$
\boxed{N=4,\quad\Omega=\frac\pi2\ \mathrm{rad/sample}},\qquad
\boxed{(x[0],x[1],x[2],x[3])=(0,-1,0,1)}.
$$

### 問2 (5)

フーリエ級数の正逆変換を

$$
X[k]=\frac1N\sum_{n=0}^{N-1}x[n]e^{-2\pi i kn/N},\qquad
x[n]=\sum_{k=0}^{N-1}X[k]e^{2\pi i kn/N}
$$

と定義する。$N=4$ を代入すると

$$
\boxed{(X[0],X[1],X[2],X[3])=(0,i/2,0,-i/2)}.
$$

原題に規格化の指定はない。順変換に $1/N$ を付けず、逆変換に $1/N$ を付ける定義なら、対応する係数は $\boxed{(0,2i,0,-2i)}$ となる。どちらも正逆変換を同じ定義で使えば、上記の標本値を再構成する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 14ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
