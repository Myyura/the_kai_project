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
h[n]=\left(\frac16\right)^{n-1}-\left(\frac12\right)^{n-1},
\qquad n=1,2,\ldots
\tag{1.1}
$$

で表される因果性をもつ線形時不変システムを考える。ただし，$h[0]=0$ とする。

(1) このシステムが有限入力有限出力安定であるか否か，理由とともに答えよ。

(2) $z$ 変換を行い，このシステムの伝達関数 $H(z)$ を求めよ。

(3) このシステムに，入力信号として次式で表される因果性信号を印加することを考える。

$$
u[n]=\left(\frac16\right)^n,\qquad n=0,1,2,\ldots
\tag{1.2}
$$

このときの対応する出力信号 $y[n]$ を $z$ 変換した $Y(z)$ を求めよ。

(4) (3)の結果を逆 $z$ 変換することで出力信号 $y[n]$ を求めよ。

### 問2

次で表される連続時間信号をサンプリング周期 $T=1/8\,[\mathrm{sec}]$ で計測することを考える。

$$
x(t)=\cos\left(4\pi t+\frac\pi2\right).
\tag{2.1}
$$

(1) サンプリング周波数 $[\mathrm{Hz}]$ を求めよ。

(2) (2.1)式で表される信号の連続時間における周期 $[\mathrm{sec}]$ を求めよ。

(3) (2.1)式で表される信号をサンプリングした離散時間信号の周期と正規化角周波数を求めよ。

(4) (3)で求めた離散時間信号の周期を $N$ とおく。さらに $x[n]=x(nT)$ と表記する。このとき離散時間信号の一周期における各々の値 $x[n],n=0,1,\ldots,N-1$ を求めよ。

(5) 離散時間信号 $x[n]$ に対する離散時間フーリエ級数 $X[k],k=0,1,\ldots,N-1$ を求めよ。

#### 题目描述

### 第1题

考虑冲激响应为式(1.1)的因果线性时不变系统：

$$
h[n]=\left(\frac16\right)^{n-1}-\left(\frac12\right)^{n-1},
\qquad n=1,2,\ldots
$$

并规定 $h[0]=0$。

(1) 判断该系统是否有界输入有界输出稳定，并说明理由。

(2) 进行 $z$ 变换，求系统的传递函数 $H(z)$。

(3) 考虑向该系统施加式(1.2)所示因果输入信号：

$$
u[n]=\left(\frac16\right)^n,\qquad n=0,1,2,\ldots
$$

求对应输出信号 $y[n]$ 的 $z$ 变换 $Y(z)$。

(4) 对第(3)问的结果作逆 $z$ 变换，求输出信号 $y[n]$。

### 第2题

考虑以采样周期 $T=1/8\,[\mathrm{sec}]$ 测量式(2.1)的连续时间信号：

$$
x(t)=\cos\left(4\pi t+\frac\pi2\right).
$$

(1) 求采样频率 $[\mathrm{Hz}]$。

(2) 求式(2.1)所示信号在连续时间中的周期 $[\mathrm{sec}]$。

(3) 求对式(2.1)信号采样所得离散时间信号的周期及归一化角频率。

(4) 将第(3)问求得的离散时间信号周期记为 $N$，并记 $x[n]=x(nT)$。求该信号一个周期内的各值 $x[n],n=0,1,\ldots,N-1$。

(5) 求离散时间信号 $x[n]$ 的离散时间傅里叶级数 $X[k],k=0,1,\ldots,N-1$。

## **Kai**

### 問1 (1), (2)

$n\ge1$ では $h[n]\le0$ だから

$$
\begin{gathered}
\sum_{n=0}^\infty|h[n]|=\sum_{n=1}^\infty
\left[\left(\frac12\right)^{n-1}-\left(\frac16\right)^{n-1}\right]\\
=2-\frac65\\
=\frac45<\infty.
\end{gathered}
$$

したがってBIBO安定である。また

$$
\boxed{\begin{gathered}
H(z)=\frac1{z-1/6}-\frac1{z-1/2}
=-\frac{1}{3(z-1/6)(z-1/2)},\\
|z|>\frac12
\end{gathered}}.
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
\boxed{\begin{gathered}
y[n]=3\left(\frac16\right)^n-3\left(\frac12\right)^n
+n\left(\frac16\right)^{n-1}\\
(n\ge0)
\end{gathered}}.
$$

因果性より $n<0$ では0。$y[0]=y[1]=0,y[2]=-1/3$ は直接畳み込みとも一致する。

### 問2 (1)–(4)

$$
\begin{gathered}
\boxed{f_s=1/T=8\ \mathrm{Hz}},\\
\boxed{T_0=2\pi/(4\pi)=0.5\ \mathrm s}.
\end{gathered}
$$

標本値は $x[n]=\cos(\pi n/2+\pi/2)=-\sin(\pi n/2)$。したがって

$$
\begin{gathered}
\boxed{N=4,\quad\Omega=\frac\pi2\ \mathrm{rad/sample}},\\
\boxed{(x[0],x[1],x[2],x[3])=(0,-1,0,1)}.
\end{gathered}
$$

### 問2 (5)

フーリエ級数の正逆変換を

$$
\begin{gathered}
X[k]=\frac1N\sum_{n=0}^{N-1}x[n]e^{-2\pi i kn/N},\\
x[n]=\sum_{k=0}^{N-1}X[k]e^{2\pi i kn/N}
\end{gathered}
$$

と定義する。$N=4$ を代入すると

$$
\boxed{(X[0],X[1],X[2],X[3])=(0,i/2,0,-i/2)}.
$$

原題に規格化の指定はない。順変換に $1/N$ を付けず、逆変換に $1/N$ を付ける定義なら、対応する係数は $\boxed{(0,2i,0,-2i)}$ となる。どちらも正逆変換を同じ定義で使えば、上記の標本値を再構成する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 14ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
