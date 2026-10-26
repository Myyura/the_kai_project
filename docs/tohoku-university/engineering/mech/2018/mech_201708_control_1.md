---
sidebar_label: "2017年8月実施 制御工学 第1問"
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---

# 東北大学 工学研究科 機械・知能系 2017年8月実施 制御工学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1. 図1に示すフィードバック制御系を考える。ここで，

$$
G(s)=\frac{k}{s(2s+1)(s+4)}
$$

であり，$k$ は正の定数とする。以下の問いに答えよ。

**(1)** このシステムの一巡伝達関数を求め，そのベクトル軌跡の概形を描け。

**(2)** 一巡伝達関数の位相が $-180^\circ$ となるときの角周波数を位相交差周波数という。このシステムの位相交差周波数を求めよ。

**(3)** このシステムが安定限界となる $k$ の値を求めよ。

**(4)** このシステムの入力 $U(s)$ から出力 $Y(s)$ への伝達関数を示し，安定となる $k$ の条件を求めよ。

**(5)** このシステムにおける定常速度偏差 $e_v$ が $e_v\le0.4$ となる $k$ の条件を求めよ。

![図1 フィードバック制御系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/mech_201708_control_1_original_figure_1.png)

### 题目描述

1. 考虑图1所示的反馈控制系统，其中

$$
G(s)=\frac{k}{s(2s+1)(s+4)},
$$

$k$ 为正常数。回答下列问题。

**(1)** 求该系统的开环传递函数，并画出其幅相轨迹的大致形状。

**(2)** 开环传递函数的相位等于 $-180^\circ$ 时的角频率称为相位穿越频率。求该系统的相位穿越频率。

**(3)** 求使该系统处于稳定边界的 $k$ 值。

**(4)** 写出该系统从输入 $U(s)$ 到输出 $Y(s)$ 的传递函数，并求系统稳定时 $k$ 应满足的条件。

**(5)** 求使该系统的稳态速度误差 $e_v$ 满足 $e_v\le0.4$ 的 $k$ 的条件。

图1中输出以单位负反馈接回输入端。

## **Kai**

### (1)

一巡伝達関数は $L(s)=G(s)$。$s=j\omega$ とすると、$D(\omega)=81\omega^2+(4-2\omega^2)^2$ を用いて

$$
\begin{gathered}
L(j\omega)=\frac{k}{-9\omega^2+j\omega(4-2\omega^2)},\\
\operatorname{Re}L=-\frac{9k}{D},\\
\operatorname{Im}L=-\frac{k(4-2\omega^2)}{\omega D}.
\end{gathered}
$$

$\omega\to0^+$ では実部は $-9k/16$、虚部は $-\infty$。$\omega=\sqrt2$ で負の実軸を横切り、$\omega\to\infty$ では第2象限から原点に近づく。負の周波数側は実軸に関する鏡像である。

![正の周波数に対するベクトル軌跡](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/mech/2018/tohoku201708_control1_nyquist.svg)

### (2)

$\operatorname{Im}L=0$ より

$$
\boxed{\omega_{\mathrm{pc}}=\sqrt2\ \mathrm{rad/s}},\qquad L(j\sqrt2)=-\frac{k}{18}.
$$

### (3)

軌跡が $-1$ を通る条件から $\boxed{k=18}$。

### (4)

$$
T(s)=\frac{L(s)}{1+L(s)}=\boxed{\frac{k}{2s^3+9s^2+4s+k}}.
$$

特性多項式のフルビッツ条件は、係数が正で $9\cdot4>2k$。従って

$$
\boxed{0<k<18}.
$$

### (5)

安定な系について、単位ランプ入力に対する速度定数は $K_v=\lim_{s\to0}sL(s)=k/4$、定常速度偏差は $e_v=1/K_v=4/k$。

$$
\frac4k\le0.4\iff k\ge10.
$$

安定条件も合わせて $\boxed{10\le k<18}$。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 19ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
