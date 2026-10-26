---
sidebar_label: "2020年8月実施 選択問題5 制御工学"
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Control-Theory.State-Space-Representation
  - Electrical-Electronic.Control-Theory.Controllability-and-Observability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題5 制御工学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問1と問2を答えよ。問題は複数ページにまたがるので注意せよ。また，ある時間信号 $g(t)$ に対するラプラス変換は $G(s)$ と表し，$s$ はラプラス演算子とする。

### 問1

つぎのシステム(a)が与えられたとする。

$$
\frac{d^2}{dt^2}y(t)-\frac{d}{dt}y(t)+2y(t)=u(t).
\tag{a}
$$

(1) (a)式に対して

$$
\boldsymbol x(t)=\begin{bmatrix}y(t)\\\dfrac{d}{dt}y(t)\end{bmatrix},
\qquad z(t)=y(t)+\frac{d}{dt}y(t)
\tag{b}
$$

を定める。このとき，状態変数 $\boldsymbol x(t)$ と制御出力 $z(t)$ を有する状態方程式

$$
\frac{d}{dt}\boldsymbol x(t)=A\boldsymbol x(t)+Bu(t),
\qquad z(t)=C\boldsymbol x(t)
\tag{c}
$$

の係数行列 $A,B,C$ を求めよ。

(2) 以下の状態フィードバック制御(d)をシステム(c)に適用したとする。

$$
u(t)=\begin{bmatrix}f_1&f_2\end{bmatrix}\boldsymbol x(t)+r(t).
\tag{d}
$$

このとき，入力 $r(t)$ から制御出力 $z(t)$ までの閉ループシステムの極が $-1$ と $-3$ になる状態フィードバックゲイン $f_1$ と $f_2$ を求めよ。

(3) (2)式で求めた閉ループシステムの入力 $r(t)$ としてインパルス信号が印加されたときの制御出力 $z(t)$ の時間応答を求めよ。ただし，初期値は $\boldsymbol x(0)=0$ とする。

(4) (2)式で求めた閉ループシステムを考える。初期値 $\boldsymbol x(0)$ と入力 $r(t)$ が

$$
\boldsymbol x(0)=\begin{bmatrix}0\\1\end{bmatrix},
\qquad r(t)=\begin{cases}0&t<0,\\1&t\ge0\end{cases}
\tag{e}
$$

であるときの制御出力 $z(t)$ の時間応答を求めよ。

### 問2

図1に示すフィードバックシステムを考える。ただし，$C_1$ と $C_2$ は定数ゲインである。

![図1 フィードバックシステム](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_5_fig1.png)

(1) 入力 $R(s)$ から出力 $Y(s)$ までの伝達関数を求めよ。

(2) 図1のフィードバックシステムに対して

$$
C_2=1,\qquad R(s)=\frac1{s^2}
\tag{f}
$$

を考える。このとき，入力 $R(s)$ に対する出力 $Y(s)$ の偏差を

$$
E(s)=R(s)-Y(s)
\tag{g}
$$

とするとき，定常偏差が $0$ になるゲイン $C_1$ の値を最終値の定理に基づき求めよ。

### 题目描述

回答下列第1题与第2题。注意原题跨越多页。时间信号 $g(t)$ 的拉普拉斯变换记为 $G(s)$，$s$ 为拉普拉斯算子。

#### 第1题

给定系统(a)：

$$
\frac{d^2}{dt^2}y(t)-\frac{d}{dt}y(t)+2y(t)=u(t).
$$

(1) 对式(a)，定义式(b)中的量：

$$
\boldsymbol x(t)=\begin{bmatrix}y(t)\\\dfrac{d}{dt}y(t)\end{bmatrix},
\qquad z(t)=y(t)+\frac{d}{dt}y(t).
$$

求以 $\boldsymbol x(t)$ 为状态变量、$z(t)$ 为控制输出的状态方程(c)

$$
\frac{d}{dt}\boldsymbol x(t)=A\boldsymbol x(t)+Bu(t),
\qquad z(t)=C\boldsymbol x(t)
$$

中的系数矩阵 $A,B,C$。

(2) 将状态反馈控制(d)

$$
u(t)=\begin{bmatrix}f_1&f_2\end{bmatrix}\boldsymbol x(t)+r(t)
$$

应用于系统(c)。求使从输入 $r(t)$ 到控制输出 $z(t)$ 的闭环系统极点为 $-1,-3$ 的状态反馈增益 $f_1,f_2$。

(3) 对第(2)问求得的闭环系统，若输入 $r(t)$ 为冲激信号，求控制输出 $z(t)$ 的时间响应。初始值为 $\boldsymbol x(0)=0$。

(4) 考虑第(2)问求得的闭环系统，若初始值与输入如式(e)：

$$
\boldsymbol x(0)=\begin{bmatrix}0\\1\end{bmatrix},
\qquad r(t)=\begin{cases}0&t<0,\\1&t\ge0,\end{cases}
$$

求控制输出 $z(t)$ 的时间响应。

#### 第2题

考虑图1的反馈系统，其中 $C_1,C_2$ 为常数增益。

(1) 求从输入 $R(s)$ 到输出 $Y(s)$ 的传递函数。

(2) 对图1的反馈系统，考虑式(f)所给 $C_2=1$、$R(s)=1/s^2$。定义输入 $R(s)$ 与输出 $Y(s)$ 之间的偏差为式(g)：

$$
E(s)=R(s)-Y(s).
$$

根据终值定理，求使稳态误差为 $0$ 的增益 $C_1$。

## **Kai**

### 問1 (1), (2)

状態の定義から

$$
\boxed{\begin{gathered}
A=\begin{pmatrix}0&1\\-2&1\end{pmatrix},\\
B=\begin{pmatrix}0\\1\end{pmatrix},\\
C=\begin{pmatrix}1&1\end{pmatrix}
\end{gathered}}.
$$

閉ループ状態行列は $A_c=A+B[f_1\ f_2]$、特性多項式は

$$
\det(sI-A_c)=s^2-(1+f_2)s+2-f_1.
$$

これを $(s+1)(s+3)=s^2+4s+3$ と比較すると

$$
\begin{gathered}
\boxed{f_1=-1,\qquad f_2=-5},\\
A_c=\begin{pmatrix}0&1\\-3&-4\end{pmatrix}.
\end{gathered}
$$

原題(2)は閉ループ**状態行列の固有値**を指定する通常の極配置問題として解した。このゲインでは次に示すように $-1$ のモードが不可観測となり、約分後の $r\to z$ 伝達関数の極は $-3$ だけである。したがって「伝達関数が実際に二つの極を持つ」という字義どおりの解釈とは区別が必要である。

### 問1 (3), (4)

$$
\begin{gathered}
\frac{Z(s)}{R(s)}=C(sI-A_c)^{-1}B\\
=\frac{s+1}{(s+1)(s+3)}\\
=\frac1{s+3}.
\end{gathered}
$$

よって零初期値のインパルス応答は $\boxed{z(t)=e^{-3t}\ (t\ge0)}$。

初期値が $x(0)=[0,1]^{\mathsf T}=B$、入力が単位ステップなら

$$
\begin{gathered}
Z(s)=C(sI-A_c)^{-1}x(0)+\frac1{s+3}\frac1s\\
=\frac1{3s}+\frac{2}{3(s+3)}.
\end{gathered}
$$

したがって $\boxed{z(t)=\tfrac13+\tfrac23e^{-3t}\ (t\ge0)}$。

### 問2

$Y=(s+3)(C_1R-C_2Y)/s^2$ を整理して

$$
\boxed{\frac{Y}{R}=\frac{C_1(s+3)}{s^2+C_2s+3C_2}}.
$$

$C_2=1$ のとき特性多項式 $s^2+s+3$ は安定である。単位ランプ入力に対して

$$
E(s)=\frac1{s^2}\frac{s^2+(1-C_1)s+3(1-C_1)}{s^2+s+3}.
$$

有限な定常偏差には分子の定数項が0であることが必要なので $C_1=1$。このとき $sE(s)=s/(s^2+s+3)$ の極は左半平面にあり、最終値の定理から

$$
\begin{gathered}
\lim_{t\to\infty}e(t)=\lim_{s\to0}\frac{s}{s^2+s+3}=0,\\
\boxed{C_1=1}.
\end{gathered}
$$

$C_1\ne1$ では出力と入力の漸近的な傾きが異なり、$e(t)\sim(1-C_1)t$。符号に応じて $+\infty$ または $-\infty$ に発散する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 10–11ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
