---
sidebar_label: "2021年8月実施 推進工学（午後）"
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2021年8月実施 推進工学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)

推進工学（午後）

図1の模式図および図2の $T$-$S$ 線図で表される理想的な熱サイクル $\mathrm{O\to A\to B\to C\to D\to E\to F\to G\to O}$（中間冷却ガスタービンサイクル）を考える。作動流体は、理想気体の状態方程式に従うものとし、作動流体の圧力を $P$、絶対温度を $T$、単位質量あたりのエントロピーを $S$ と表す。また、定圧比熱 $C_P$、定積比熱 $C_V$ を共に定数とし、比熱比を $\kappa=C_P/C_V$ と定義する。全ての状態変化は準静的であるとする。

![原題の図1](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_propulsion_original_figure_1.png)

作動流体の $P$ と $T$ は、

- 状態 O $(P_O,T_O)$ から、断熱圧縮過程を経て、状態 A $(P_A,T_A)$ へ、
- 状態 A $(P_A,T_A)$ から、定圧冷却過程を経て、状態 B $(P_B,T_B)$ へ、
- 状態 B $(P_B,T_B)$ から、断熱圧縮過程を経て、状態 C $(P_C,T_C)$ へ、
- 状態 C $(P_C,T_C)$ から、定圧冷却過程を経て、状態 D $(P_D,T_D)$ へ、
- 状態 D $(P_D,T_D)$ から、断熱圧縮過程を経て、状態 E $(P_E,T_E)$ へ、
- 状態 E $(P_E,T_E)$ から、定圧加熱過程を経て、状態 F $(P_F,T_F)$ へ、
- 状態 F $(P_F,T_F)$ から、断熱膨張過程を経て、状態 G $(P_G,T_G)$ へ、
- 状態 G $(P_G,T_G)$ から、定圧冷却過程を経て、状態 O $(P_O,T_O)$ へ変化する。

ただし、$P_F=P_E\ge P_D=P_C\ge P_B=P_A\ge P_O=P_G$ である。また、行程 $\mathrm{A\to B}$ と行程 $\mathrm{C\to D}$（中間冷却過程）では理想的な熱交換が行われるとして $T_O=T_B=T_D$ とする。サイクル最高最低温度比を $\theta=T_F/T_O$、全体圧力比を $\pi=P_E/P_O$、行程 $\mathrm{O\to A}$ と行程 $\mathrm{B\to C}$ における温度比をそれぞれ $\alpha=T_A/T_O$、$\beta=T_C/T_B$ とする。以下の問いに答えよ。

![原題の図2](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/engineering/aero/2022/aero_202108_pm_propulsion_original_figure_2.png)

**第1問** $P_A$ を、$P_O,\kappa,\alpha$ を用いて表せ。

**第2問** $T_E$ を、$T_O,\kappa,\alpha,\beta,\pi$ を用いて表せ。

**第3問** $T_G$ を、$T_O,\kappa,\theta,\pi$ を用いて表せ。

このサイクルの、比出力（単位質量の作動流体が1サイクルあたりにする仕事）を $W$、熱効率を $\eta$ と表す。

**第4問** $W$ を、$C_P,T_O,\kappa,\theta,\alpha,\beta,\pi$ を用いて表せ。

**第5問** $T_O$ と $\theta$ を固定したとき、$W$ を最大にする $\alpha,\beta,\pi$ を求め、$\alpha,\beta,\pi$ を $\kappa$ と $\theta$ を用いてそれぞれ表せ。また、その時の $W$ を、$C_P,T_O,\theta$ を用いて表せ。

**第6問** $W$ が最大となるときの $\eta$ を $\theta$ を用いて表せ。

#### 题目描述

推进工学（下午）

考虑图1装置示意图、图2温熵图所表示的理想热力循环 $\mathrm{O\to A\to B\to C\to D\to E\to F\to G\to O}$，即带中间冷却的燃气轮机循环。工质服从理想气体状态方程，压力、绝对温度、单位质量熵分别记为 $P,T,S$。定压比热 $C_P$、定容比热 $C_V$ 均为常数，比热比 $\kappa=C_P/C_V$。所有状态变化均为准静态。

工质的压力与温度按下列过程变化：

- 从状态 O $(P_O,T_O)$ 经绝热压缩到状态 A $(P_A,T_A)$；
- 从状态 A $(P_A,T_A)$ 经等压冷却到状态 B $(P_B,T_B)$；
- 从状态 B $(P_B,T_B)$ 经绝热压缩到状态 C $(P_C,T_C)$；
- 从状态 C $(P_C,T_C)$ 经等压冷却到状态 D $(P_D,T_D)$；
- 从状态 D $(P_D,T_D)$ 经绝热压缩到状态 E $(P_E,T_E)$；
- 从状态 E $(P_E,T_E)$ 经等压加热到状态 F $(P_F,T_F)$；
- 从状态 F $(P_F,T_F)$ 经绝热膨胀到状态 G $(P_G,T_G)$；
- 从状态 G $(P_G,T_G)$ 经等压冷却回到状态 O $(P_O,T_O)$。

各状态压力满足

$$
P_F=P_E\ge P_D=P_C\ge P_B=P_A\ge P_O=P_G.
$$

中间冷却过程 $\mathrm{A\to B}$、$\mathrm{C\to D}$ 进行理想换热，满足 $T_O=T_B=T_D$。定义循环最高温度与最低温度之比 $\theta=T_F/T_O$，总压比 $\pi=P_E/P_O$，前两级压缩温度比分别为 $\alpha=T_A/T_O$、$\beta=T_C/T_B$。回答下列问题。

**第1问** 用 $P_O,\kappa,\alpha$ 表示 $P_A$。

**第2问** 用 $T_O,\kappa,\alpha,\beta,\pi$ 表示 $T_E$。

**第3问** 用 $T_O,\kappa,\theta,\pi$ 表示 $T_G$。

将循环的比输出，即单位质量工质每一循环所做的功，记为 $W$，热效率记为 $\eta$。

**第4问** 用 $C_P,T_O,\kappa,\theta,\alpha,\beta,\pi$ 表示 $W$。

**第5问** 固定 $T_O,\theta$，求使 $W$ 最大的 $\alpha,\beta,\pi$，分别用 $\kappa,\theta$ 表示；再用 $C_P,T_O,\theta$ 表示此时的 $W$。

**第6问** 用 $\theta$ 表示 $W$ 最大时的热效率 $\eta$。

## **Kai**

### 第1～3問

$m=(\kappa-1)/\kappa$ とおく。準静的断熱変化では $T/P^m$ が一定なので

$$
\boxed{P_A=P_O\alpha^{1/m}=P_O\alpha^{\kappa/(\kappa-1)}}.
$$

前2段の圧力比はそれぞれ $\alpha^{1/m},\beta^{1/m}$。第3段の温度比は $\pi^m/(\alpha\beta)$ だから

$$
\boxed{T_E=T_O\frac{\pi^m}{\alpha\beta}}.
$$

膨張過程では全圧力比 $\pi$ で減圧されるため

$$
\boxed{T_G=\theta T_O\pi^{-m}}.
$$

### 第4問

タービン仕事から3台の圧縮機仕事を差し引く。

$$
W=C_P[(T_F-T_G)-(T_A-T_O)-(T_C-T_B)-(T_E-T_D)].
$$

したがって

$$
\boxed{W=C_PT_O\left[\theta+3-\theta\pi^{-m}-\alpha-\beta-\frac{\pi^m}{\alpha\beta}\right]}.
$$

### 第5問

$x=\pi^m$ とおく。相加相乗平均より

$$
\alpha+\beta+\frac{x}{\alpha\beta}\ge3x^{1/3},
$$

等号は $\alpha=\beta=x^{1/3}$。さらに

$$
\frac\theta x+3x^{1/3}\ge4\theta^{1/4},
$$

等号は $\theta/x=x^{1/3}$。よって

$$
\boxed{\alpha=\beta=\theta^{1/4},\qquad
\pi=\theta^{3\kappa/[4(\kappa-1)]}},
$$

$$
\boxed{W_{\max}=C_PT_O(\theta-4\theta^{1/4}+3)}.
$$

この条件では3段すべての圧縮温度比が等しく、$\theta>1$ なら各圧縮・加熱・冷却の向きも題意に合う。

### 第6問

熱入力は $Q_{\rm in}=C_P(T_F-T_E)$。最適状態では $T_E=T_O\theta^{1/4}$ なので

$$
\eta=\frac{\theta-4\theta^{1/4}+3}{\theta-\theta^{1/4}}.
$$

$q=\theta^{1/4}$ とおき因数分解すると

$$
\boxed{\eta=1-\frac3{q+q^2+q^3}
=1-\frac3{\theta^{1/4}+\theta^{1/2}+\theta^{3/4}}}\qquad(\theta>1).
$$

$\theta=1$ ではサイクルが退化して熱入力・仕事ともゼロとなり、上式の極限は $0$ である。
