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

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)。図の条件は以下に文章で明記する。

シリンダー内で静止していた熱量的完全気体を、右向きに一定速度 $u_p$ で動くピストンで圧縮すると、右向きに一定速度 $u_s$ の垂直衝撃波が生じた。$u_p,u_s$ は実験室系での速度である。衝撃波の上流側（右側）を状態1、下流側（ピストンとの間）を状態2とする。比熱比を $\gamma$、圧力・密度・音速を $p,\rho,a$ とする。

**第1問** 衝撃波静止系における流速を $u_1,u_2$ とすると、

$$
\rho_1u_1=\rho_2u_2,\qquad
p_1+\rho_1u_1^2=p_2+\rho_2u_2^2,\qquad
\frac{a_1^2}{\gamma-1}+\frac{u_1^2}2=\frac{a_2^2}{\gamma-1}+\frac{u_2^2}2.
$$

この系の $u_1,u_2$ を $u_p,u_s$ で表せ。

**第2問** $\rho_2/\rho_1$ を $p_2/p_1,\gamma$ で表せ。

**第3問** 衝撃波マッハ数 $M_s=u_s/a_1$ をピストンマッハ数 $M_p=u_p/a_1$ と $\gamma$ で表せ。また $M_p$ を $p_2/p_1,\gamma$ で表せ。

**第4問** 衝撃波が右側の固定壁で反射し、実験室系で左向きに速度 $u_r$ で進む。この反射衝撃波の静止系で見た上流・下流速度を $u_p,u_r$ で表せ。

**第5問** 反射衝撃波と壁との間の圧力を $p_3$ とするとき、$p_3/p_2$ を $p_2/p_1,\gamma$ で表せ。

#### 题目描述

初始静止的量热完全气体置于气缸中，活塞以恒速 $u_p$ 向右推进，产生以恒速 $u_s$ 向右传播的正激波。二者均为实验室系速度。激波右侧未受扰动的气体为状态1，激波与活塞之间为状态2。比热比为 $\gamma$，压力、密度、声速分别为 $p,\rho,a$。

1. 已知激波静止系中的质量、动量、能量守恒式如日文题面，用 $u_p,u_s$ 表示两侧速度 $u_1,u_2$。
2. 用 $p_2/p_1,\gamma$ 表示密度比。
3. 定义 $M_s=u_s/a_1,M_p=u_p/a_1$，用 $M_p,\gamma$ 表示 $M_s$，再用压力比和 $\gamma$ 表示 $M_p$。
4. 激波在右侧固定壁反射后以速度 $u_r$ 向左传播。求其静止系中的上下游气体速度。
5. 反射激波与壁之间的压力为 $p_3$，用 $p_2/p_1,\gamma$ 表示 $p_3/p_2$。

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
