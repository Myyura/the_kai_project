---
sidebar_label: "2021年8月実施 流体力学（午後）"
tags:
  - Tokyo-University
  - Engineering.Fluid-Mechanics.Compressible-Flow
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 流体力学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)

流体力学（午後）

図1のように、はじめシリンダー内で静止していた熱量的完全気体があり、等速 $u_p$ でピストンを押して圧縮したところ、気体内に等速 $u_s$ で右に進む垂直衝撃波が発生した。ここで速度 $u_p$ および $u_s$ は実験室系から見た値であり、また気体の比熱比を $\gamma$ として以下の問いに答えよ。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_fluids_original_figure_1.png)

**第1問** 衝撃波静止系では一般に以下の3つの式が成り立つ。

$$
\rho_1u_1=\rho_2u_2
$$

$$
p_1+\rho_1u_1^2=p_2+\rho_2u_2^2
$$

$$
\frac{a_1^2}{\gamma-1}+\frac{u_1^2}{2}
=\frac{a_2^2}{\gamma-1}+\frac{u_2^2}{2}
$$

ただし、$p_1,\rho_1,a_1,u_1$ はそれぞれ衝撃波静止系で見たときの上流側の気体の圧力、密度、音速、速度であり、下流での対応する物理量は添字2で表す。図1の系において、$u_1$ と $u_2$ をそれぞれ $u_p$ と $u_s$ を用いて表せ。

**第2問** $\rho_2/\rho_1$ を $p_2/p_1$ と $\gamma$ のみを用いて表せ。

**第3問** 衝撃波マッハ数を $M_s=u_s/a_1$、ピストンマッハ数を $M_p=u_p/a_1$ とするとき、$M_s$ を $M_p$ と $\gamma$ のみを用いて表せ。また、$M_p$ を $p_2/p_1$ と $\gamma$ のみを用いて表せ。

**第4問** 衝撃波は右側の壁で反射した後、実験室系から見て左向きに等速 $u_r$ で進んだ。この時、衝撃波静止系から見た上流と下流の気体の速度をそれぞれ $u_p$ と $u_r$ を用いて表せ。

**第5問** 反射した衝撃波と右側の壁の間の気体の圧力を $p_3$ とするとき、$p_3/p_2$ を $p_2/p_1$ と $\gamma$ のみを用いて表せ。

### 题目描述

流体力学（下午）

如图1，气缸内有初始静止的量热完全气体。以恒定速度 $u_p$ 推动活塞压缩气体，气体内产生以恒定速度 $u_s$ 向右传播的正激波。$u_p,u_s$ 均在实验室坐标系中测量，气体比热比为 $\gamma$。回答下列问题。

**第1问** 在激波静止系中，一般满足以下三式：

$$
\rho_1u_1=\rho_2u_2,
$$

$$
p_1+\rho_1u_1^2=p_2+\rho_2u_2^2,
$$

$$
\frac{a_1^2}{\gamma-1}+\frac{u_1^2}{2}
=\frac{a_2^2}{\gamma-1}+\frac{u_2^2}{2}.
$$

其中 $p_1,\rho_1,a_1,u_1$ 分别为在激波静止系中观察的上游气体压力、密度、声速和速度，下游对应物理量以下标2表示。对图1系统，分别用 $u_p,u_s$ 表示 $u_1,u_2$。

**第2问** 仅用 $p_2/p_1$ 和 $\gamma$ 表示 $\rho_2/\rho_1$。

**第3问** 定义激波马赫数 $M_s=u_s/a_1$ 和活塞马赫数 $M_p=u_p/a_1$。仅用 $M_p,\gamma$ 表示 $M_s$；再仅用 $p_2/p_1,\gamma$ 表示 $M_p$。

**第4问** 激波在右壁反射后，以实验室系中向左的恒定速度 $u_r$ 传播。分别用 $u_p,u_r$ 表示在反射激波静止系中观察的上游、下游气体速度。

**第5问** 设反射激波与右壁之间的气体压力为 $p_3$，仅用 $p_2/p_1,\gamma$ 表示 $p_3/p_2$。

## **Kai**

### 第1問

入射衝撃波の静止系では気体は左へ流れる。その速さは

$$
\boxed{u_1=u_s,\qquad u_2=u_s-u_p}.
$$

### 第2問

$P=p_2/p_1,\ q=\rho_2/\rho_1$ とおく。質量保存から $u_2=u_1/q$、運動量保存から

$$
\frac{\rho_1u_1^2}{p_1}=\frac{P-1}{1-1/q}.
$$

$a_i^2=\gamma p_i/\rho_i$ をエネルギー式に用いると

$$
\frac{\gamma}{\gamma-1}\left(\frac Pq-1\right)
=\frac12(P-1)\left(1+\frac1q\right).
$$

整理して

$$
\boxed{q=\frac{(\gamma+1)P+\gamma-1}{(\gamma-1)P+\gamma+1}}.
$$

### 第3問

前問と運動量式より $M_s^2=[(\gamma+1)P+\gamma-1]/(2\gamma)$。また

$$
M_p=M_s\left(1-\frac1q\right)=\frac{2(M_s^2-1)}{(\gamma+1)M_s}.
$$

正の根を選んで

$$
\boxed{M_s=\frac{\gamma+1}{4}M_p+\sqrt{1+\left(\frac{\gamma+1}{4}M_p\right)^2}}.
$$

圧力比による表示は

$$
\boxed{M_p=(P-1)\sqrt{\frac{2}{\gamma[(\gamma+1)P+\gamma-1]}}}.
$$

### 第4問

反射前の状態2は実験室系で右向きに $u_p$、壁側の状態3は静止している。左向きに動く反射衝撃波から見ると両者とも右向きで、

$$
\boxed{u_{\rm upstream}=u_p+u_r,\qquad u_{\rm downstream}=u_r}.
$$

### 第5問

$Q=p_3/p_2$ とする。反射波の前後の速度差も $u_p$ であるから、第3問を状態2の音速 $a_2$ で用いて

$$
\left(\frac{u_p}{a_2}\right)^2
=\frac{2(Q-1)^2}{\gamma[(\gamma+1)Q+\gamma-1]}.
$$

一方、$a_2^2/a_1^2=P/q$ なので

$$
\frac{(Q-1)^2}{(\gamma+1)Q+\gamma-1}
=\frac{(P-1)^2}{P[(\gamma-1)P+\gamma+1]}.
$$

この二次方程式の根は $Q=1/P$ と

$$
\boxed{\frac{p_3}{p_2}=\frac{(3\gamma-1)P-(\gamma-1)}{(\gamma-1)P+\gamma+1}}.
$$

反射衝撃波は圧縮波なので $P>1,Q>1$ となる後者を選ぶ。
