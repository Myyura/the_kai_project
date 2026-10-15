---
sidebar_label: "2018年度 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Brayton-Cycle
  - Physics.Thermodynamics.Steady-Flow-Energy-Equation
---

# 九州大学 工学府 機械系専攻 2018年度 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のガスタービンは開いた系の流動式熱機関であり、理論サイクルは断熱圧縮 $1\to2$、等圧加熱 $2\to3$、断熱膨張 $3\to4$、等圧冷却 $4\to1$ からなる Brayton サイクルである。状態を添字で表し、作動流体を理想気体、定圧比熱 $c_p$ と比熱比 $\kappa$ を一定とする。（55 点）

![ガスタービンと h–s 線図の解答欄（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/thermo-1-original.png)

1. $h$–$s$（比エンタルピー–比エントロピー）線図を描け。$T_1$、圧力比 $\gamma=p_2/p_1$、サイクル最高低温度比 $\tau=T_3/T_1$、$c_p,\kappa$ を用いて単位質量流量当たりの圧縮機仕事 $l_{C0}$、タービン仕事 $l_{T0}$、加熱量 $q_0$ を求めよ。
2. 理論熱効率 $\eta_0$ は圧力比 $\gamma$ のみに依存することを示せ。
3. 実際には流れの摩擦損失がある。圧縮機とタービンの断熱効率を $\eta_C,\eta_T$（ともに 1 以下）として、新しい状態にダッシュを付け、(1) の線図に変化を書き込め。このときの $l_C,l_T,q$ を $T_1,\gamma,\tau,c_p,\kappa,\eta_C,\eta_T$ で表せ。
4. 実際の熱効率 $\eta$ が $\tau$ にも依存することを示せ。$\eta_C=\eta_T=0.9$ で $\tau$ を 5 から 6 に変えると、$\eta$ は何 % 上昇するか。$\gamma^{(\kappa-1)/\kappa}=2.5$（$\gamma=25,\kappa=1.4$ に相当）とする。

#### 题目描述

理想气体 Brayton 循环由等熵压缩、等压加热、等熵膨胀、等压冷却构成，$c_p,\kappa$ 恒定，压比 $\gamma=p_2/p_1$，最高与最低温度比 $\tau=T_3/T_1$。画 $h$–$s$ 图，求理想压缩功、涡轮功、加热量及效率。再考虑压缩机和涡轮绝热效率 $\eta_C,\eta_T$，画实际过程并求相应功、热量、效率。当两效率均为 0.9、$\gamma^{(\kappa-1)/\kappa}=2.5$ 时，计算 $\tau$ 从 5 增至 6 所带来的效率增长。

## **Kai**

圧縮機の入力仕事、タービンの出力仕事をそれぞれ正とする。$\chi=\gamma^{(\kappa-1)/\kappa}$ とおく。

### (1)

理想断熱過程は等エントロピーなので

$$
T_2=\chi T_1,\qquad T_3=\tau T_1,\qquad
T_4=\frac{\tau T_1}{\chi}.
$$

定常流のエネルギー式より

$$
\boxed{l_{C0}=c_pT_1(\chi-1),\qquad
l_{T0}=c_pT_1\tau\left(1-\frac1\chi\right),\qquad
q_0=c_pT_1(\tau-\chi).}
$$

線図では $1\to2$ と $3\to4$ が鉛直線、$2\to3$ と $4\to1$ が等圧線となる。

![理想・実際の Brayton サイクルの h–s 線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2018/thermo-1-brayton.svg)

### (2)

$$
\boxed{\eta_0=\frac{l_{T0}-l_{C0}}{q_0}
=1-\frac1\chi=1-\gamma^{-(\kappa-1)/\kappa}.}
$$

$\kappa$ が一定なら $\gamma$ のみで決まる。

### (3)

断熱効率の定義は

$$
\eta_C=\frac{T_2-T_1}{T_{2'}-T_1},\qquad
\eta_T=\frac{T_3-T_{4'}}{T_3-T_4}.
$$

したがって

$$
T_{2'}=T_1\left[1+\frac{\chi-1}{\eta_C}\right],\qquad
T_{4'}=\tau T_1\left[1-\eta_T\left(1-\frac1\chi\right)\right].
$$

線図では $2'$ は 2 と同じ高圧等圧線上で 2 より右上、$4'$ は 4 と同じ低圧等圧線上で 4 より右上に位置する。よって

$$
\boxed{l_C=c_pT_1\frac{\chi-1}{\eta_C},\qquad
l_T=c_pT_1\tau\eta_T\left(1-\frac1\chi\right),}
$$

$$
\boxed{q=c_pT_1\left[\tau-1-\frac{\chi-1}{\eta_C}\right].}
$$

### (4)

$$
\boxed{\eta(\tau)=
\frac{\tau\eta_T(1-1/\chi)-(\chi-1)/\eta_C}
{\tau-1-(\chi-1)/\eta_C}.}
$$

実際のサイクルでは一般に $\tau$ に依存する。指定値を代入すると

$$
\eta(5)=\frac{31}{70}\simeq0.44286,\qquad
\eta(6)=\frac{59}{125}=0.472.
$$

したがって熱効率は $44.29\%$ から $47.20\%$ へ、$\boxed{2.91\text{ ポイント}}$ 上昇する。元の効率に対する相対上昇率で表せば

$$
\boxed{\frac{\eta(6)-\eta(5)}{\eta(5)}\times100\simeq6.58\%.}
$$
