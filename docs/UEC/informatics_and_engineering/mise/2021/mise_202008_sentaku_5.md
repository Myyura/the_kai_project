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

### 問1

システム $\ddot y-\dot y+2y=u$ を考える。

1. $x=[y,\dot y]^{\mathsf T},z=y+\dot y$ としたとき、状態方程式 $\dot x=Ax+Bu,z=Cx$ の $A,B,C$ を求めよ。
2. 状態フィードバック $u=[f_1\ f_2]x+r$ を適用する。「入力 $r(t)$ から制御出力 $z(t)$ までの閉ループシステムの極が $-1$ と $-3$」となるゲイン $f_1,f_2$ を求めよ。
3. (2)の系にインパルス入力 $r(t)$ を加えたときの $z(t)$ を求めよ。初期値は $x(0)=0$。
4. (2)の系に対して $x(0)=[0,1]^{\mathsf T}$、$r(t)=0\ (t<0),\ r(t)=1\ (t\ge0)$ とした場合の $z(t)$ を求めよ。

### 問2

前置ゲイン $C_1$ の後に加算点があり、そこに出力から $C_2$ を介した負帰還を加える。加算点出力を $U(s)$、その後の直列要素を $(s+3)/s$ と $1/s$、系の入力と出力を $R(s),Y(s)$ とする。すなわち

$$
U=C_1R-C_2Y,\qquad Y=\frac{s+3}{s^2}U.
$$

1. $R$ から $Y$ への伝達関数を求めよ。
2. $C_2=1,R(s)=1/s^2$ とし、偏差を $E(s)=R(s)-Y(s)$ と定義する。最終値の定理に基づき、定常偏差が0になる $C_1$ を求めよ。

#### 题目描述

问1：系统 $\ddot y-\dot y+2y=u$ 取状态 $[y,\dot y]^{\mathsf T}$、输出 $z=y+\dot y$，求状态空间矩阵；施加 $u=f_1y+f_2\dot y+r$ 后按原题要求将闭环极配置为 $-1,-3$，求增益、零初态下脉冲响应，以及初态 $[0,1]^{\mathsf T}$ 加单位阶跃的响应。问2：前向通道 $(s+3)/s^2$，输入前置增益 $C_1$、输出负反馈增益 $C_2$；求闭环传递函数，并在 $C_2=1$、单位斜坡输入时求使稳态误差为0的 $C_1$。

## **Kai**

### 問1 (1), (2)

状態の定義から

$$
\boxed{A=\begin{pmatrix}0&1\\-2&1\end{pmatrix},\quad
B=\begin{pmatrix}0\\1\end{pmatrix},\quad C=\begin{pmatrix}1&1\end{pmatrix}}.
$$

閉ループ状態行列は $A_c=A+B[f_1\ f_2]$、特性多項式は

$$
\det(sI-A_c)=s^2-(1+f_2)s+2-f_1.
$$

これを $(s+1)(s+3)=s^2+4s+3$ と比較すると

$$
\boxed{f_1=-1,\qquad f_2=-5},\qquad
A_c=\begin{pmatrix}0&1\\-3&-4\end{pmatrix}.
$$

原題(2)は閉ループ**状態行列の固有値**を指定する通常の極配置問題として解した。このゲインでは次に示すように $-1$ のモードが不可観測となり、約分後の $r\to z$ 伝達関数の極は $-3$ だけである。したがって「伝達関数が実際に二つの極を持つ」という字義どおりの解釈とは区別が必要である。

### 問1 (3), (4)

$$
\frac{Z(s)}{R(s)}=C(sI-A_c)^{-1}B
=\frac{s+1}{(s+1)(s+3)}=\frac1{s+3}.
$$

よって零初期値のインパルス応答は $\boxed{z(t)=e^{-3t}\ (t\ge0)}$。

初期値が $x(0)=[0,1]^{\mathsf T}=B$、入力が単位ステップなら

$$
Z(s)=C(sI-A_c)^{-1}x(0)+\frac1{s+3}\frac1s
=\frac1{3s}+\frac{2}{3(s+3)}.
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
\lim_{t\to\infty}e(t)=\lim_{s\to0}\frac{s}{s^2+s+3}=0,
\qquad\boxed{C_1=1}.
$$

$C_1\ne1$ では出力と入力の漸近的な傾きが異なり、$e(t)\sim(1-C_1)t$。符号に応じて $+\infty$ または $-\infty$ に発散する。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 10–11ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
