---
sidebar_label: 2015年3月実施 専門科目 問題1 電気工学（制御数学）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Lead-Compensation
  - Electrical-Electronic.Control-Theory.Bode-Plot-and-Stability-Margins
---

# 東北大学 工学研究科 電気・情報系 2015年3月実施 専門科目 問題1 電気工学（制御数学）

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 1(a)のような制御系がある。制御対象 $P(s)$ および補償器 $C(s)$ は，それぞれ

$$
P(s)=\frac K{s(1+sT)^2},\qquad C(s)=A\frac{1+saB}{1+sB}
$$

で与えられる。ここで，$K,T$ [s]，$A,B$ [s]，$a$ は正である。$P(s)$ および $C(s)P(s)$ のボード線図を描くと Fig. 1(b)のようになる。同図のように，$P(s)$ は安定限界にある。次の問に答えよ。

(1) $P(s)$ の位相特性から判断して，$T$ [s] の値を求めよ。

(2) $P(s)$ が安定限界となっていることを利用して，$K$ の値を求めよ。

(3) $C(s)$ による補償を施した後の制御系の位相余裕 $PM$ [degree] の値を求めよ。

(4) $C(s)$ の位相の最大値 $\phi_m$ [rad] とそれを与える周波数 $\omega_m$ [rad/s] は，それぞれ，

$$
\phi_m=\sin^{-1}\frac{a-1}{a+1},\qquad\omega_m=\frac1{B\sqrt a}
$$

と表される。$\omega_m$ はゲイン交差周波数 $\omega_c$ [rad/s] に等しく選ばれている。このとき，$a,B$ [s]，および $A$ の値を求めよ。

(5) 補償前に対する補償後の定常速度偏差の比を求めよ。

### 题目描述

单位负反馈系统的被控对象与补偿器为

$$
P(s)=\frac K{s(1+sT)^2},\qquad C(s)=A\frac{1+saB}{1+sB},\qquad K,T,A,a,B>0.
$$

原 Bode 图中，$P$ 在 $\omega=1\,\mathrm{rad/s}$ 处相位为 $-180^\circ$；未补偿闭环位于稳定边界。补偿后仍在 $\omega_c=1\,\mathrm{rad/s}$ 处增益交越，该处相位为 $-150^\circ$。

1. 由 $P$ 的相位求 $T$。
2. 由稳定边界条件求 $K$。
3. 求补偿后相位裕度。
4. 已知补偿器最大超前相位和对应频率为

$$
\phi_m=\sin^{-1}\frac{a-1}{a+1},\qquad\omega_m=\frac1{B\sqrt a},
$$

并选取 $\omega_m=\omega_c$，求 $a,B,A$。
5. 求补偿后与补偿前的稳态速度误差之比。

## **Kai**

### (1)、(2)

$$
\arg P(j\omega)=-90^\circ-2\arctan(\omega T).
$$

由 $\omega=1$ 时相位为 $-180^\circ$，得 $\boxed{T=1\,\mathrm s}$。稳定边界要求 $|P(j)|=1$，即 $K/2=1$，故 $\boxed{K=2}$。

### (3)

$$
\boxed{PM=180^\circ-150^\circ=30^\circ}.
$$

### (4)

在交越频率处补偿器提供 $30^\circ$ 超前，故

$$
\frac{a-1}{a+1}=\sin30^\circ=\frac12,\qquad\boxed{a=3}.
$$

由 $\omega_m=1$ 得 $\boxed{B=1/\sqrt3\,\mathrm s}$。此处 $|C(j)|=A\sqrt a$，而 $|P(j)|=1$，故

$$
\boxed{A=1/\sqrt3}.
$$

### (5)

按速度误差常数定义，

$$
K_{v,\rm before}=\lim_{s\to0}sP(s)=K,\qquad
K_{v,\rm after}=\lim_{s\to0}sC(s)P(s)=AK.
$$

因此常规误差常数的比较结果为

$$
\boxed{\frac{1/K_{v,\rm after}}{1/K_{v,\rm before}}=\frac1A=\sqrt3}.
$$

严格而言，未补偿闭环的特征多项式为

$$
s(1+s)^2+2=(s+2)(s^2+1),
$$

存在极点 $\pm i$，单位斜坡误差含不衰减振荡，实际稳态误差极限不存在。因此 $\sqrt3$ 是误差常数的形式比值；补偿后的实际稳态速度误差为 $\sqrt3/2$。
