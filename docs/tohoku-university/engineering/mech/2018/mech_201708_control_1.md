---
sidebar_label: "2017年秋季 制御工学 第1問"
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 制御工学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

下図の単位負帰還系について答えよ。$k$ は正の定数であり、前向き伝達関数は $G(s)=k/\{s(2s+1)(s+4)\}$ である。

![単位負帰還系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku-university/engineering/mech/2018/tohoku2017_control1_setup.svg)

1. 一巡伝達関数を求め、そのベクトル軌跡の概形を描け。
2. 位相交差周波数を求めよ。
3. 安定限界となる $k$ を求めよ。
4. 閉ループ伝達関数を求め、フルビッツの安定判別法により安定条件を求めよ。
5. 定常速度偏差を $0.4$ 以下にする $k$ の範囲を求めよ。

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

单位负反馈系统的前向传递函数为 $k/[s(2s+1)(s+4)]$，其中 $k>0$。（1）求开环传递函数并画奈奎斯特曲线；（2）求相位交越频率；（3）求临界稳定增益；（4）求闭环传递函数并用赫尔维茨判据确定稳定条件；（5）求使稳态速度误差不超过 $0.4$ 的增益范围。

## **Kai**

### (1)

一巡伝達関数は $L(s)=G(s)$。$s=j\omega$ とすると、$D(\omega)=81\omega^2+(4-2\omega^2)^2$ を用いて

$$
L(j\omega)=\frac{k}{-9\omega^2+j\omega(4-2\omega^2)},\qquad
\operatorname{Re}L=-\frac{9k}{D},\quad
\operatorname{Im}L=-\frac{k(4-2\omega^2)}{\omega D}.
$$

$\omega\to0^+$ では実部は $-9k/16$、虚部は $-\infty$。$\omega=\sqrt2$ で負の実軸を横切り、$\omega\to\infty$ では第2象限から原点に近づく。負の周波数側は実軸に関する鏡像である。

![正の周波数に対するベクトル軌跡](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku-university/engineering/mech/2018/tohoku2017_control1_nyquist.svg)

### (2)

$\operatorname{Im}L=0$ より

$$\boxed{\omega_{\mathrm{pc}}=\sqrt2\ \mathrm{rad/s}},\qquad L(j\sqrt2)=-\frac{k}{18}.$$

### (3)

軌跡が $-1$ を通る条件から $\boxed{k=18}$。

### (4)

$$T(s)=\frac{L(s)}{1+L(s)}=\boxed{\frac{k}{2s^3+9s^2+4s+k}}.$$

特性多項式のフルビッツ条件は、係数が正で $9\cdot4>2k$。従って

$$\boxed{0<k<18}.$$

### (5)

安定な系について、単位ランプ入力に対する速度定数は $K_v=\lim_{s\to0}sL(s)=k/4$、定常速度偏差は $e_v=1/K_v=4/k$。

$$\frac4k\le0.4\iff k\ge10.$$

安定条件も合わせて $\boxed{10\le k<18}$。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 19ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
