---
sidebar_label: "2020年8月実施 流体力学 問1"
tags:
  - Hokkaido-University
  - Engineering.Fluid-Mechanics.Actuator-Disk
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 流体力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

密度 $\rho$ の非圧縮・非粘性流体が風車を通る定常一次元流れを考える。ロータ回転軸に平行な流速は、十分上流の断面a（面積 $A_1$）で $V_1$、ロータ面b（面積 $A$）で $V$、十分下流の断面c（面積 $A_2$）で $V_2$ である。ロータを通る流管を検査体積とし、側面からの流出入はない。境界面の圧力を大気圧とみなし、損失と重力を無視する。風車への力はすべてロータ面に加わるものとする。

1. 風車に加わる軸方向力を $\rho,A,V,V_1,V_2$ で表し、向きと理由を示せ。
2. ロータ直前b−、直後b＋では流速は同じ $V$ だが圧力 $P_-,P_+$ は不連続である。大小関係を説明し、圧力差 $\Delta P$ を求めよ。
3. 力が $A\Delta P$ であることから、$V=(V_1+V_2)/2$ を示せ。
4. 上流・下流を単位時間に通過する流体のエネルギー差に等しい風車出力 $\mathcal L$ を求めよ。
5. 出力を最大にする $V_2/V_1$ を求めよ。

#### 题目描述

不可压缩无黏流体通过风车，远上游、转子面和远下游截面积分别为 $A_1,A,A_2$，速度为 $V_1,V,V_2$。取通过转子的流管作控制体，侧面无质量交换，边界压强视为大气压，忽略损失和重力。求风车轴向受力与方向、转子两侧压差，证明转子速度为上下游速度平均值，求输出功率及使功率最大的下游与上游速度比。

## **Kai**

### (1)

質量流量は $\dot m=\rho A_1V_1=\rho AV=\rho A_2V_2$。流体への力は $\dot m(V_2-V_1)$ なので、その反作用として風車への力は

$$
\boxed{F=\rho AV(V_1-V_2)}.
$$

風車が流れを減速させる $V_2<V_1$ の場合、風車は下流向きの力を受ける。

### (2)

大気圧を $P_0$ とし、ロータの前後で別々にベルヌーイの式を適用する。

$$
P_0+\frac12\rho V_1^2=P_-+\frac12\rho V^2,
\qquad P_++\frac12\rho V^2=P_0+\frac12\rho V_2^2.
$$

したがって

$$
\boxed{\Delta P=P_--P_+=\frac12\rho(V_1^2-V_2^2)>0}.
$$

ロータでエネルギーが取り出され、同じ速度でも直後の圧力が低くなる。

### (3)

$F=A\Delta P$ から $\rho AV(V_1-V_2)=\rho A(V_1^2-V_2^2)/2$。仕事を取り出す $V_1\ne V_2$ の場合、

$$
\boxed{V=\frac{V_1+V_2}{2}}.
$$

### (4), (5)

遠方の圧力は等しいので、出力は運動エネルギー流量差に等しい。

$$
\boxed{\mathcal L=\frac12\dot m(V_1^2-V_2^2)
=\frac14\rho A(V_1+V_2)(V_1^2-V_2^2)}.
$$

$r=V_2/V_1$ とおくと $\mathcal L=(\rho AV_1^3/4)(1+r)^2(1-r)$。$0<r<1$ での微分は定数倍を除き $(1+r)(1-3r)$ なので

$$
\boxed{\frac{V_2}{V_1}=\frac13},\qquad
\mathcal L_{\max}=\frac{16}{27}\frac12\rho AV_1^3.
$$

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 8ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
