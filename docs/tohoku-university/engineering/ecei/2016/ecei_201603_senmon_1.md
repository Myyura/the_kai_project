---
sidebar_label: 2016年3月実施 専門科目 問題1 電気工学（制御）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---

# 東北大学 工学研究科 電気・情報系 2016年3月実施 専門科目 問題1 電気工学（制御）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

Fig. 1 のようなフィードバック制御系がある。$r(t)$ は目標値，$y(t)$ は制御量である。

(1) $G_c(s)=K/s$ とする。定数 $K$ が正のとき，次の問に答えよ。

- (a) このフィードバック制御系の開ループ伝達関数 $G(s)$ を求めよ。
- (b) このフィードバック制御系の特性方程式を求めよ。
- (c) このフィードバック制御系が安定となる $K$ の範囲を求めよ。
- (d) このフィードバック制御系の根軌跡の概形を描け。また，根軌跡と $s$ 平面上の虚軸の交点を求めよ。

(2) $G_c(s)=K/(s+3)$ とする。$K=19.2$ のとき，次の問に答えよ。

- (a) このフィードバック制御系の開ループ周波数伝達関数 $G(j\omega)$ のゲイン $|G(j\omega)|$ と，位相 $\angle G(j\omega)$ を求めよ。
- (b) このフィードバック制御系のナイキスト線図の概形を描け。また，位相交差周波数 $\omega_c$ を求めよ。
- (c) このフィードバック制御系のゲイン余裕 GM を求めよ。

### 题目描述

单位负反馈系统的前向通路为控制器 $G_c(s)$ 与对象 $1/[(s+1)(s+5)]$ 串联。

1. 当 $G_c(s)=K/s$、$K>0$ 时：(a) 求开环传递函数；(b) 求闭环特征方程；(c) 求稳定范围；(d) 画根轨迹并求其与虚轴的交点。
2. 当 $G_c(s)=K/(s+3)$、$K=19.2$ 时：(a) 求开环频率响应的增益和相位；(b) 画奈奎斯特图，求相位交越频率；(c) 求增益裕度。

## **Kai**

### (1)

$$
\boxed{G(s)=\frac{K}{s(s+1)(s+5)},\qquad s^3+6s^2+5s+K=0.}
$$

Routh 第一列为 $1,6,(30-K)/6,K$，所以

$$
\boxed{0<K<30.}
$$

根轨迹起点为 $0,-1,-5$，没有有限零点。实轴段为 $(-\infty,-5)$ 与 $(-1,0)$；渐近线重心为 $-2$，方向为 $60^\circ,180^\circ,300^\circ$。

分离点由 $d[-s(s+1)(s+5)]/ds=0$ 得到，取根轨迹上的解

$$
s_b=-2+\frac{\sqrt{21}}3.
$$

令 $s=i\omega$，分离实虚部得 $K=6\omega^2$、$\omega(5-\omega^2)=0$。故 $K>0$ 时虚轴交点为

$$
\boxed{s=\pm i\sqrt5\quad(K=30).}
$$

![根轨迹](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201603_senmon_1_root_locus.svg)

### (2)

$$
G(i\omega)=\frac{19.2}{(1+i\omega)(3+i\omega)(5+i\omega)},
$$

$$
\boxed{|G(i\omega)|=\frac{19.2}{\sqrt{(1+\omega^2)(9+\omega^2)(25+\omega^2)}},\quad
\arg G=-\arctan\omega-\arctan\frac\omega3-\arctan\frac\omega5.}
$$

分母为 $15-9\omega^2+i\omega(23-\omega^2)$。因此正频率曲线从 $G(0)=1.28$ 出发，先位于下半平面，在 $\omega=\sqrt{23}$ 处经过负实轴上的 $-0.1$，再从上半平面趋于原点；负频率支为其共轭。

![奈奎斯特曲线](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201603_senmon_1_nyquist.svg)

$$
\boxed{\omega_{pc}=\sqrt{23},\qquad GM=\frac1{0.1}=10\quad(20\ \mathrm{dB}).}
$$
