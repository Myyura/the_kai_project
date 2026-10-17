---
sidebar_label: 2018年8月実施 専門科目 問題1 電気工学
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Steady-State-Error
---
# 東北大学 工学研究科 電気・情報系 2018年8月実施 専門科目 問題1 電気工学

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

Fig. 1(a)のような電気回路がある．同図において，$e(t),v(t)$ は電圧の瞬時値，$i(t)$ は電流の瞬時値である．以下の問に答えよ．

![Fig. 1(a)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2019/ecei_201808_senmon_1_figure_1.png)

(a) $e(t)$ を入力信号，$v(t)$ を出力信号とする伝達関数 $G_1(s)$ を考える．$R,C$ を使って $G_1(s)$ を表わせ．

(b) 周波数伝達関数 $G_1(j\omega)$ から，ナイキスト線図を描け．同図には，$\omega=0\,[\mathrm{rad/s}],1\,[\mathrm{rad/s}]$，および $\infty$ の $G_1(j\omega)$ の点を示すこと．ただし，$-\infty\le\omega\le\infty,\ R=1\,[\Omega],\ C=1\,[\mathrm F]$ とする．

### (2)

Fig. 1(b)のような電気回路がある．同図において，$e(t),v(t)$ は電圧の瞬時値，$i(t)$ は電流の瞬時値である．以下の問に答えよ．

![Fig. 1(b)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2019/ecei_201808_senmon_1_figure_2.png)

(a) $e(t)$ を入力信号，$v(t)$ を出力信号とする伝達関数 $G_2(s)$ を考える．$R,L,C$ を使って $G_2(s)$ を表わせ．

(b) 周波数伝達関数 $G_2(j\omega)$ から，ゲインと位相をそれぞれ求めよ．ただし，$R=1\,[\Omega],\ L=1\,[\mathrm H],\ C=1\,[\mathrm F]$ とする．

(c) Fig. 1(c)は Fig. 1(b)の電気回路に直流電圧源 $E$ とスイッチ S を追加した電気回路である．スイッチ S を閉じてから十分な時間が経過し，回路は定常状態に達した．$v(t)$ の定常状態における電圧 $v_0$ を求めよ．

![Fig. 1(c)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2019/ecei_201808_senmon_1_figure_3.png)

### (3)

Fig. 1(d)のような制御系がある．同図において，$r(t),e(t),y(t)$ はそれぞれ目標値，偏差，制御量を表す．次の問に答えよ．ただし，$K$ は定数 $(K>0)$ である．

![Fig. 1(d)](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2019/ecei_201808_senmon_1_figure_4.png)

(a) この制御系が安定であるための $K$ の値の範囲を求めよ．

(b) この制御系が安定で，かつ定常位置偏差が $0.1$ 以下であるための $K$ の値の範囲を求めよ．

#### 题目描述

**(1)** 有上方 Fig. 1(a) 所示的电路。图中 $e(t),v(t)$ 为电压瞬时值，$i(t)$ 为电流瞬时值。回答下列问题。

(a) 考虑以 $e(t)$ 为输入、$v(t)$ 为输出的传递函数 $G_1(s)$，用 $R,C$ 表示 $G_1(s)$。

(b) 根据频率传递函数 $G_1(j\omega)$ 画出奈奎斯特图，并在图上标出 $\omega=0\,[\mathrm{rad/s}],1\,[\mathrm{rad/s}]$ 和 $\infty$ 时的 $G_1(j\omega)$ 所对应的点。设 $-\infty\le\omega\le\infty,\ R=1\,[\Omega],\ C=1\,[\mathrm F]$。

**(2)** 有上方 Fig. 1(b) 所示的电路。图中 $e(t),v(t)$ 为电压瞬时值，$i(t)$ 为电流瞬时值。回答下列问题。

(a) 考虑以 $e(t)$ 为输入、$v(t)$ 为输出的传递函数 $G_2(s)$，用 $R,L,C$ 表示 $G_2(s)$。

(b) 根据频率传递函数 $G_2(j\omega)$，分别求增益和相位。设 $R=1\,[\Omega],\ L=1\,[\mathrm H],\ C=1\,[\mathrm F]$。

(c) 上方 Fig. 1(c) 为在 Fig. 1(b) 的电路中加入直流电压源 $E$ 和开关 S 后的电路。开关 S 闭合后经过足够长时间，电路达到稳态。求 $v(t)$ 的稳态电压 $v_0$。

**(3)** 有上方 Fig. 1(d) 所示的控制系统。图中 $r(t),e(t),y(t)$ 分别表示目标值、偏差和被控量。设 $K$ 为常数且 $K>0$，回答下列问题。

(a) 求使该控制系统稳定的 $K$ 的取值范围。

(b) 求使该控制系统稳定、且稳态位置误差不超过 $0.1$ 的 $K$ 的取值范围。

## **Kai**

### (1)

#### (a)

由阻抗分压，

$$
\boxed{G_1(s)=\frac1{1+RCs}}.
$$

#### (b)

$R=C=1$ 时，$G_1(j\omega)=(1-j\omega)/(1+\omega^2)$。设实部为 $x$、虚部为 $y$，则

$$
\left(x-\frac12\right)^2+y^2=\frac14.
$$

全频率轨迹为圆心 $(1/2,0)$、半径 $1/2$ 的圆，原点为 $|\omega|\to\infty$ 的极限。$\omega$ 从 $-\infty$ 增至 $0$ 时沿上半圆从原点到 $(1,0)$，再沿下半圆返回原点；$\omega=1$ 对应 $(1/2,-1/2)$。

![RC 电路的 Nyquist 曲线](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tohoku-university/engineering/ecei/2019/ecei_201808_nyquist.svg)

### (2)

#### (a)

串联 RLC 电路满足 $e=Ri+L\dot i+v$、$i=C\dot v$，故

$$
\boxed{G_2(s)=\frac1{LCs^2+RCs+1}}.
$$

#### (b)

$R=L=C=1$ 时，

$$
\begin{gathered}\boxed{|G_2(j\omega)|=\frac1{\sqrt{(1-\omega^2)^2+\omega^2}}},\\
\boxed{\arg G_2(j\omega)=-\operatorname{atan2}(\omega,1-\omega^2)}.\end{gathered}
$$

对 $\omega\ge0$，相位从 $0$ 连续下降，经 $\omega=1$ 时的 $-\pi/2$ 趋近 $-\pi$；使用普通 $\arctan$ 时须补上象限。

#### (c)

稳态电容断路，电流为零，电阻、电感压降均为零，故 $\boxed{v_0=E}$。

### (3)

#### (a)

闭环特征多项式为

$$
p(s)=(s+1)(s^2+3s+1)+K=s^3+4s^2+4s+1+K.
$$

Routh 表为

$$
\begin{array}{c|cc}
s^3&1&4\\s^2&4&1+K\\s^1&(15-K)/4&0\\s^0&1+K&0
\end{array}
$$

首列全部为正且 $K>0$，得到 $\boxed{0<K<15}$。

#### (b)

单位阶跃输入对应的位置误差为

$$
e_{\mathrm{ss}}=\frac1{1+\lim_{s\to0}KP(s)}=\frac1{1+K}.
$$

由 $e_{\mathrm{ss}}\le0.1$ 得 $K\ge9$，与稳定条件取交集：

$$
\boxed{9\le K<15}.
$$

## **Reference**

- [公式問題（PDF）](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201808senmon.pdf#page=1)
