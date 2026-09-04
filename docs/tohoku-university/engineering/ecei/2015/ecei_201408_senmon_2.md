---
sidebar_label: 2014年8月実施 専門科目 問題2 通信工学
tags:
  - Tohoku-University
  - Electrical-Electronic.Signal-Processing.Continuous-Time-Fourier-Transform
  - Electrical-Electronic.Signal-Processing.Autocorrelation-and-Power-Spectral-Density
---

# 東北大学 工学研究科 電気・情報系 2014年8月実施 専門科目 問題2 通信工学

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

搬送波抑圧両側波帯振幅変調（DSB-SC）を用いた Fig. 2 (a)に示す伝送系を考える。伝送路は理想的で損失はないものとする。受信機中の帯域通過フィルタ（BPF）は，次式で与えられるインパルス応答 $h(t)$ を持つ。

$$
h(t)=\exp\{-(t/T)^2\}\cos(2\pi f'_mt)\qquad(-\infty<t<\infty)
$$

ただし $T$ は定数，$f'_m$ は BPF の中心周波数である。送信機には，Fig. 2 (b)に示すようなスペクトル成分（$\delta(f+f_m)$ と $\delta(f-f_m)$）を有する信号 $s(t)$ が入力されている。送信機の搬送波を $A_c\cos(2\pi f_ct)$，受信機の局部発振信号を $\cos(2\pi f_ct)$ とする。ここで，$A_c$ および $f_c$ は搬送波の振幅および周波数をそれぞれ表しており，$1/T\ll f'_m\simeq f_m\ll f_c$ である。以下の問に答えよ。

(1) Fig. 2 (a)の A 点における DSB-SC 変調信号 $x(t)$ を求めよ。

(2) BPF の伝達関数 $H(f)$ を求め，そのスペクトルを描け。必要ならば，$\int_{-\infty}^{\infty}\exp(-t^2)\,dt=\sqrt\pi$ を用いてよい。

(3) Fig. 2 (a)の B 点における受信機 BPF 出力 $y(t)$ の信号成分を求めよ。必要ならば，$\int_{-\infty}^{\infty}\exp(-j2\pi ft)\,df=\delta(t)$，$\exp(-t^2)\simeq0$（$|t|\gg1$）を用いてよい。

(4) 受信機 BPF 出力 $y(t)$ の信号対雑音電力比 $(S/N)$ を求めよ。ただし，受信機に入力される白色雑音 $n(t)$ の両側電力スペクトル密度は $N_0/2$ であるものとする。

### 题目描述

DSB-SC 系统的发射信号频谱为 $S(f)=\delta(f-f_m)+\delta(f+f_m)$，载波为 $A_c\cos(2\pi f_ct)$。理想无损信道在接收机输入加入白噪声 $n(t)$。接收机先乘以 $\cos(2\pi f_ct)$，再经过带通滤波器

$$
h(t)=e^{-(t/T)^2}\cos(2\pi f'_mt),\qquad T>0,\quad 1/T\ll f'_m\simeq f_m\ll f_c.
$$

1. 求发射机输出 $x(t)$。
2. 求滤波器频率响应 $H(f)$ 并画出频谱。可用 $\int_{-\infty}^\infty e^{-t^2}\,dt=\sqrt\pi$。
3. 求滤波器输出的信号成分 $y_s(t)$，可忽略指数极小项。
4. 接收机输入白噪声的双边功率谱密度为 $N_0/2$，求输出信噪比。

## **Kai**

采用 $\mathcal F[h](f)=\int h(t)e^{-i2\pi ft}\,dt$。

### (1)

$s(t)=2\cos(2\pi f_mt)$，故

$$
\boxed{x(t)=2A_c\cos(2\pi f_mt)\cos(2\pi f_ct)
=A_c\{\cos[2\pi(f_c+f_m)t]+\cos[2\pi(f_c-f_m)t]\}}.
$$

### (2)

$$
\boxed{H(f)=\frac{T\sqrt\pi}{2}\left[e^{-\pi^2T^2(f-f'_m)^2}+e^{-\pi^2T^2(f+f'_m)^2}\right]}.
$$

频谱是以 $\pm f'_m$ 为中心的两个高斯峰，每峰宽度约 $1/(\pi T)$、峰高约 $T\sqrt\pi/2$。

![高斯带通频谱](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201408_senmon_2.svg)

### (3)

混频后的信号为

$$
A_c\cos(2\pi f_mt)+\frac{A_c}{2}\sum_{\pm}\cos[2\pi(2f_c\pm f_m)t].
$$

滤波器在 $2f_c\pm f_m$ 附近响应可忽略，因此令 $\Delta=f_m-f'_m$，得

$$
\boxed{y_s(t)\simeq\frac{A_cT\sqrt\pi}{2}e^{-\pi^2T^2\Delta^2}\cos(2\pi f_mt)}.
$$

### (4)

白噪声乘以单位振幅余弦后，平均功率谱密度为

$$
S_{n,\mathrm{mix}}(f)=\frac14\left(\frac{N_0}2+\frac{N_0}2\right)=\frac{N_0}4.
$$

由 Parseval 等式，忽略两高斯峰重叠的指数极小项，

$$
P_n=\frac{N_0}4\int_{-\infty}^\infty h(t)^2\,dt
\simeq\frac{N_0T\sqrt{2\pi}}{16},
$$

$$
P_s\simeq\frac{A_c^2\pi T^2}{8}e^{-2\pi^2T^2\Delta^2}.
$$

故

$$
\boxed{\frac SN\simeq\frac{A_c^2T\sqrt{2\pi}}{N_0}e^{-2\pi^2T^2(f_m-f'_m)^2}}.
$$
