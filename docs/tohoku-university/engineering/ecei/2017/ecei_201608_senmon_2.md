---
sidebar_label: 2016年8月実施 専門科目 問題2 通信工学（半波整流のフーリエ解析）
tags:
  - Tohoku-University
  - Mathematics.Fourier-Analysis.Fourier-Series
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 専門科目 問題2 通信工学（半波整流のフーリエ解析）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

変調信号 $s(t)$ および搬送波 $\cos(2\pi f_ct)$ を用いた振幅変調を考える。これらにより生成される振幅変調波を $g_{\mathrm{AM}}(t)=\{1+m\cdot s(t)\}\cos(2\pi f_ct)$ とする。Fig. 2 はこの変調波 $g_{\mathrm{AM}}(t)$ を復調する整流検波器である。ただし LPF は低域通過フィルタを表し，$0<m\le1$ であるとする。このとき，以下の問に答えよ。

(2) Fig. 2 の節点 X における波形 $\hat g_{\mathrm{AM}}(t)$ は次式で与えられる。
$$
\hat g_{\mathrm{AM}}(t)=\{1+m\cdot s(t)\}q(t),\qquad
q(t)=\begin{cases}\cos(2\pi f_ct)&(n-1/4)/f_c\le t\le(n+1/4)/f_c\text{ のとき}\\0&\text{その他}\end{cases}
$$

- (a) $s(t)=\cos(2\pi f_mt)$（$0<f_m\ll f_c$）であるとき，$\hat g_{\mathrm{AM}}(t)$ の概形を図示せよ。
- (b) $q(t)$ をフーリエ級数に展開し，$q(t)=\frac1\pi-\frac2\pi\sum_{n=1}^{\infty}\frac{(-1)^n}{4n^2-1}\cos(4\pi nf_ct)$ となることを示せ。

(3) 変調信号 $s(t)$ が周波数帯域 $[-f_m,f_m]$ に帯域制限されており，LPF の帯域幅が $B$（$f_m\ll B\ll f_c$）であるとき，LPF の出力 $\bar g_{\mathrm{AM}}(t)$ を求めよ。

(4) Fig. 2 の節点 Y における出力 $v_o(t)$ を求めよ。

#### 題意の要約

(1) AM 検波器の信号経路は、素子 A、低域通過フィルタ、素子 B の順に接続されている。A の直後の節点 X と B の直後の節点 Y は、それぞれ抵抗を介して接地されている。A と B に用いる素子を答える。図と原文は[大学公開の原題、3–4 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201608senmon.pdf#page=3)を参照。

### 题目描述

消息 $s(t)$ 对载波进行调幅：

$$
g_{AM}(t)=[1+ms(t)]\cos(2\pi f_ct),\qquad0<m\le1.
$$

半波整流后的信号为 $\hat g_{AM}(t)=[1+ms(t)]q(t)$，其中

$$
q(t)=\begin{cases}\cos(2\pi f_ct),&(n-1/4)/f_c\le t\le(n+1/4)/f_c,\quad n\in\mathbb Z,\\0,&\text{其他}.
\end{cases}
$$

2. (a) 当 $s(t)=\cos(2\pi f_mt)$、$0<f_m\ll f_c$ 时画出 $\hat g_{AM}(t)$；(b) 求 $q(t)$ 的傅里叶级数。原题给出的求证目标为
   

$$
q(t)=\frac1\pi-\frac2\pi\sum_{n=1}^{\infty}\frac{(-1)^n}{4n^2-1}\cos(4\pi nf_ct).
$$

3. 若 $s(t)$ 的频带为 $[-f_m,f_m]$，经过带宽 $B$ 满足 $f_m\ll B\ll f_c$ 的理想低通，求输出 $\bar g_{AM}(t)$。
4. 再经直流隔离后，求输出 $v_o(t)$。

## **Kai**

### (1)

A 为二极管，正向从输入指向节点 X，以保留载波的正半周；B 为串联隔直电容，与输出电阻构成高通，去除包络的直流分量。理想恢复消息时，其截止频率应远低于需要保留的消息频率。

### (2)(a)

$$
\hat g_{AM}(t)=[1+m\cos(2\pi f_mt)]\max\{\cos(2\pi f_ct),0\}.
$$

正半周保留，负半周为零，各正峰位于包络 $1+m\cos(2\pi f_mt)$ 下。

![半波整流信号（示例 m=0.7）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201608_senmon_2_rectified.svg)

### (2)(b)

令 $u=2\pi f_ct$，写成 $q=a_0/2+\sum_{k\ge1}a_k\cos ku$。偶对称性给出所有正弦系数为零，且

$$
a_k=\frac2\pi\int_0^{\pi/2}\cos u\cos ku\,du.
$$

于是

$$
a_0=\frac2\pi,\quad a_1=\frac12,\quad
a_{2n}=-\frac{2(-1)^n}{\pi(4n^2-1)},\quad a_{2n+1}=0\ (n\ge1).
$$

因此，傅里叶级数为

$$
\boxed{q(t)=\frac1\pi+\frac12\cos(2\pi f_ct)-\frac2\pi\sum_{n=1}^{\infty}\frac{(-1)^n}{4n^2-1}\cos(4\pi nf_ct).}
$$

### (3)

除常数项 $1/\pi$ 外，其余谐波及边带均在低通带外，故

$$
\boxed{\bar g_{AM}(t)=\frac{1+ms(t)}\pi.}
$$

### (4)

直流隔离去掉常数项。若消息为零均值，则

$$
\boxed{v_o(t)=\frac m\pi s(t).}
$$

一般情形为 $v_o(t)=m[s(t)-\overline s]/\pi$，其中 $\overline s$ 为消息的直流分量。
