---
sidebar_label: "2014年度 問題1（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
---

# 大阪大学 工学研究科 機械工学専攻 2014年度 熱工学 問題1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$n$ モルの理想気体に次の準静的な循環過程を行わせる。状態1の温度は $T_L$、圧力は $P_H$ である。

- (a) 圧力 $P_L\,(<P_H)$ まで断熱膨張させ、状態2とする。
- (b) 圧力を一定に保ち、温度 $T_H\,(>T_L)$ まで加熱・膨張させ、状態3とする。
- (c) 温度を一定に保ち、圧力 $P_H$ まで圧縮して状態4とする。
- (d) 圧力を一定に保ち、温度 $T_L$ まで冷却・圧縮して状態1に戻す。

一般気体定数を $R_0$、比熱比を $\kappa$ とし、定積・定圧モル比熱は一定とする。気体が外部にする仕事と気体への流入熱を正とする。必要な量を $n,T_L,T_H,P_L,P_H,R_0,\kappa$ で表せ。

1. 状態2の体積を求めよ。
2. 過程(a)～(d)それぞれの仕事を求めよ。
3. 過程(a)～(d)それぞれの熱量を求めよ。
4. 状態1のエントロピーを $S_1$、循環中の最大値を $S_{\max}$ とするとき、$S_{\max}-S_1$ を求めよ。

#### 题目描述

$n$ mol 理想气体从状态1的 $T_L,P_H$ 出发，依次经历：(a)绝热膨胀至 $P_L<P_H$；(b)等压加热膨胀至 $T_H>T_L$；(c)等温压缩至 $P_H$；(d)等压冷却压缩回到状态1。各过程准静态，摩尔比热恒定，气体常数为 $R_0$，比热比为 $\kappa$。气体对外做功及吸热为正。用给定参数求：(1)状态2体积；(2)各过程功；(3)各过程热量；(4)循环中最大熵与状态1熵之差。

## **Kai**

### (1)

$c_v=R_0/(\kappa-1)$、$c_p=\kappa R_0/(\kappa-1)$ とおく。断熱関係から

$$
T_2=T_L\left(\frac{P_L}{P_H}\right)^{(\kappa-1)/\kappa},\qquad
\boxed{V_2=\frac{nR_0T_L}{P_H}\left(\frac{P_H}{P_L}\right)^{1/\kappa}}.
$$

以下の $T_2$ はこの式で定義する。

### (2)

$W=\int P\,dV$ および断熱過程での $W=-\Delta U$ より

$$
\boxed{\begin{aligned}
W_a&=\frac{nR_0}{\kappa-1}(T_L-T_2),\\
W_b&=nR_0(T_H-T_2),\\
W_c&=nR_0T_H\log\frac{P_L}{P_H},\\
W_d&=nR_0(T_L-T_H).
\end{aligned}}
$$

### (3)

第一法則 $Q=\Delta U+W$ を各過程に適用すると

$$
\boxed{\begin{aligned}
Q_a&=0,\\
Q_b&=\frac{n\kappa R_0}{\kappa-1}(T_H-T_2),\\
Q_c&=nR_0T_H\log\frac{P_L}{P_H},\\
Q_d&=\frac{n\kappa R_0}{\kappa-1}(T_L-T_H).
\end{aligned}}
$$

### (4)

(a)ではエントロピーは一定、(b)では増加し、(c),(d)では減少する。したがって最大となるのは状態3である。

$$
\boxed{S_{\max}-S_1=nc_p\log\frac{T_H}{T_2}
=\frac{n\kappa R_0}{\kappa-1}\log\frac{T_H}{T_L}
+nR_0\log\frac{P_H}{P_L}}.
$$
