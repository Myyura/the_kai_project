---
sidebar_label: 2019年3月実施 専門科目 問題2 通信工学
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Transform
  - Electrical-Electronic.Signal-Processing.Fourier-Conjugate-Symmetry-and-Modulation
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 専門科目 問題2 通信工学

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

変調信号を $s(t)$ とし、搬送波 $A_c\cos(2\pi f_ct)$ により生成される角度変調波

$$
g(t)=A_c\cos\{\theta(t)\}
$$

を考える。ただし、$s(t)$ の最大周波数を $f_s$ とすると $0<f_s<f_c$ であり、$|s(t)|\le1$ であるものとする。以下の問に答えよ。

(1) 搬送波を位相変調する。ただし、最大位相偏移を $\Delta\theta$ とする（$0<\Delta\theta\ll1$）。

(a) 位相変調波 $g_{\mathrm{PM}}(t)$ の式を書け。

(b) $s(t)=\sin(2\pi f_st)$ とする。$g_{\mathrm{PM}}(t)$ をフーリエ変換し、その振幅スペクトルを図示せよ。

(2) 搬送波を周波数変調する。ただし、最大周波数偏移を $\Delta f$ とする（$0<\Delta f\ll f_c$）。

(a) 瞬時周波数 $f_i(t)$ を求め、周波数変調波 $g_{\mathrm{FM}}(t)$ を導け。

(b) $g_{\mathrm{FM}}(t)$ の式を用い、微分を用いた周波数変調波の復調原理を説明せよ。

### 题目描述

角度调制波 $g(t)=A_c\cos\theta(t)$ 由 $s(t)$ 调制载波 $A_c\cos(2\pi f_ct)$，其中 $|s(t)|\le1$，$s$ 的最高频率 $0<f_s<f_c$。

(1) 相位调制的最大相位偏移为 $\Delta\theta$，$0<\Delta\theta\ll1$。(a) 写出 $g_{PM}(t)$；(b) 若 $s(t)=\sin(2\pi f_st)$，求 Fourier 变换并画振幅谱。

(2) 频率调制的最大频偏为 $\Delta f$，$0<\Delta f\ll f_c$。(a) 求瞬时频率 $f_i(t)$ 并导出 $g_{FM}(t)$；(b) 利用微分说明调频波的解调原理。

## **Kai**

### (1)

(a)

$$
\boxed{g_{PM}(t)=A_c\cos[2\pi f_ct+\Delta\theta\,s(t)]}.
$$

(b) 令 $\beta=\Delta\theta$。保留 $\beta$ 的一次项：

$$
g_{PM}(t)=A_c\cos2\pi f_ct+\frac{A_c\beta}2\left[\cos2\pi(f_c+f_s)t-\cos2\pi(f_c-f_s)t\right]+O(\beta^2).
$$

取变换核 $e^{-i2\pi ft}$，记 $D_a(f)=\delta(f-a)+\delta(f+a)$，则

$$
\boxed{G_{PM}(f)=\frac{A_c}2D_{f_c}(f)+\frac{A_c\beta}4\left[D_{f_c+f_s}(f)-D_{f_c-f_s}(f)\right]+O(\beta^2)}.
$$

一阶近似振幅谱在 $\pm f_c$ 的权重为 $A_c/2$，在 $\pm(f_c-f_s),\pm(f_c+f_s)$ 的权重均为 $A_c\beta/4$；下边带的有符号系数为负。

![小相位调制的双边振幅谱](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201903_senmon_2_spectrum.svg)

若不作小角度近似，利用第一类 Bessel 函数 $J_n$，精确式为

$$
G_{PM}(f)=\frac{A_c}2\sum_{n\in\mathbb Z}J_n(\beta)\left[\delta(f-f_c-nf_s)+\delta(f+f_c+nf_s)\right].
$$

### (2)

(a)

$$
\boxed{f_i(t)=f_c+\Delta f\,s(t)}.
$$

由 $\dot\theta=2\pi f_i$，

$$
\boxed{g_{FM}(t)=A_c\cos\left[2\pi f_ct+2\pi\Delta f\int_0^t s(\tau)\,d\tau+\theta_0\right]}.
$$

(b) 微分后

$$
\frac{dg_{FM}}{dt}=-2\pi A_c[f_c+\Delta f\,s(t)]\sin\theta(t).
$$

因 $\Delta f<f_c$，振幅包络为 $2\pi A_c[f_c+\Delta f\,s(t)]$。用包络检波取出包络，去除载频对应的常量 $2\pi A_cf_c$，再除以 $2\pi A_c\Delta f$ 即得到 $s(t)$。
