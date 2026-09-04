---
sidebar_label: 2015年3月実施 専門科目 問題2 通信工学
tags:
  - Tohoku-University
  - Electrical-Electronic.Signal-Processing.Dirac-Comb-Fourier-Transform
  - Electrical-Electronic.Signal-Processing.Autocorrelation-and-Power-Spectral-Density
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 専門科目 問題2 通信工学

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 2 に示す搬送波抑圧両側波帯振幅変調（DSB-AM-SC）を用いた伝送系を考える。伝送路は理想的で損失はないものとする。受信機において両側電力スペクトル密度が $N_0/2$ である白色雑音 $n(t)$ が付加されるものとする。送信機と受信機中の低域通過フィルタ（LPF）は，ともに伝達関数 $H(f)$ が次式で与えられる理想低域通過フィルタとする。

$$
H(f)=\begin{cases}1,&|f|\le f_0,\\0,&|f|>f_0\end{cases}
$$

送信機の搬送波を $A_c\cos(2\pi f_ct)$，受信機の局部発振器信号を $2\cos(2\pi f_ct)$ とする。ここで，$A_c$ および $f_c$ はそれぞれ搬送波の振幅および周波数であり，$f_c\gg f_0$ である。送信機に信号 $s(t)$ として単位インパルス列信号が $T=1/f_0$ の時間周期で入力された場合を考える。以下の問に答えよ。

(1) Fig. 2 の A 点における DSB-AM-SC 変調信号 $x(t)$ を求めよ。次に，求めた $x(t)$ の概略を図示せよ。

(2) Fig. 2 の B 点における同期検波信号 $y(t)$ の信号成分の周波数スペクトル $Y_s(f)$ を求めよ。次に，求めた $Y_s(f)$ の概略を図示せよ。

(3) Fig. 2 の C 点における受信機 LPF 出力信号 $z(t)$ の信号対雑音電力比 $(S/N)$ を求めよ。

### 题目描述

发射机和接收机使用相同的理想低通滤波器

$$
H(f)=\begin{cases}1,&|f|\le f_0,\\0,&|f|>f_0.\end{cases}
$$

输入为周期 $T=1/f_0$ 的单位冲激列 $s(t)=\sum_{n\in\mathbb Z}\delta(t-nT)$。发射机先低通，再乘以载波 $A_c\cos(2\pi f_ct)$；信道理想无损，$f_c\gg f_0$。接收机输入加入双边功率谱密度为 $N_0/2$ 的白噪声，再乘以 $2\cos(2\pi f_ct)$，最后低通。

1. 求发射机输出 $x(t)$，画出信号概形。
2. 求接收机乘法器输出的信号频谱 $Y_s(f)$，画出其频谱。
3. 求接收机最终低通输出的信噪比。

## **Kai**

采用 $\mathcal F[s](f)=\int s(t)e^{-i2\pi ft}\,dt$。

### (1)

冲激列频谱为 $S(f)=f_0\sum_k\delta(f-kf_0)$。题设在截止频率处也取 $H(\pm f_0)=1$，所以发射低通输出为

$$
m(t)=f_0[1+2\cos(2\pi f_0t)].
$$

故

$$
\boxed{x(t)=A_cf_0[1+2\cos(2\pi f_0t)]\cos(2\pi f_ct)}.
$$

其有符号包络为 $\pm A_cf_0[1+2\cos(2\pi f_0t)]$；当括号内因子变负时载波相位翻转 $\pi$。

![调制信号概形](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201503_senmon_2_signal.svg)

### (2)

混频后的信号为

$$
y_s(t)=A_cm(t)[1+\cos(4\pi f_ct)].
$$

令 $D(f)=\delta(f+f_0)+\delta(f)+\delta(f-f_0)$，则

$$
\boxed{Y_s(f)=A_cf_0D(f)+\frac{A_cf_0}2[D(f-2f_c)+D(f+2f_c)]}.
$$

即在 $-f_0,0,f_0$ 处各有权重 $A_cf_0$ 的谱线，在 $\pm2f_c-f_0,\pm2f_c,\pm2f_c+f_0$ 处各有权重 $A_cf_0/2$ 的谱线。

![同步检波输出频谱](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201503_senmon_2_spectrum.svg)

### (3)

最终信号为 $z_s(t)=A_cf_0[1+2\cos(2\pi f_0t)]$，故包含直流成分的平均信号功率为

$$
P_s=A_c^2f_0^2\langle(1+2\cos(2\pi f_0t))^2\rangle=3A_c^2f_0^2.
$$

乘以 $2\cos(2\pi f_ct)$ 后，噪声双边功率谱为 $N_0$，低通输出噪声功率为 $P_n=2N_0f_0$。所以

$$
\boxed{\frac SN=\frac{3A_c^2f_0}{2N_0}}.
$$
