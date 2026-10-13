---
sidebar_label: "推進工学（午後）"
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
---

# 東京大学 工学系研究科 航空宇宙工学専攻 2022年度 推進工学（午後）

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

[原題：2022年度専門科目（午後）](https://www.aerospace.t.u-tokyo.ac.jp/g_education/pdf/pastpaper2022pm.pdf)。図の条件は以下に文章で明記する。

理想気体を用いる3段圧縮・2回中間冷却の理想ガスタービンサイクル $\mathrm O\to\mathrm A\to\mathrm B\to\mathrm C\to\mathrm D\to\mathrm E\to\mathrm F\to\mathrm G\to\mathrm O$ を考える。圧力・絶対温度・単位質量当たりのエントロピーを $P,T,S$ とし、比熱 $C_P,C_V$ は一定、$\kappa=C_P/C_V$ とする。すべての状態変化は準静的である。

| 過程 | 状態変化 |
|---|---|
| $\mathrm O\to\mathrm A$ | 断熱圧縮 |
| $\mathrm A\to\mathrm B$ | 定圧冷却 |
| $\mathrm B\to\mathrm C$ | 断熱圧縮 |
| $\mathrm C\to\mathrm D$ | 定圧冷却 |
| $\mathrm D\to\mathrm E$ | 断熱圧縮 |
| $\mathrm E\to\mathrm F$ | 定圧加熱 |
| $\mathrm F\to\mathrm G$ | 断熱膨張 |
| $\mathrm G\to\mathrm O$ | 定圧冷却 |

圧力は $P_F=P_E\ge P_D=P_C\ge P_B=P_A\ge P_O=P_G$。中間冷却は理想的で $T_O=T_B=T_D$ とする。最高・最低温度比、全体圧力比、前2段の圧縮温度比を

$$
\theta=\frac{T_F}{T_O},\qquad\pi=\frac{P_E}{P_O},\qquad
\alpha=\frac{T_A}{T_O},\qquad\beta=\frac{T_C}{T_B}
$$

と定義する。

**第1問** $P_A$ を $P_O,\kappa,\alpha$ で表せ。

**第2問** $T_E$ を $T_O,\kappa,\alpha,\beta,\pi$ で表せ。

**第3問** $T_G$ を $T_O,\kappa,\theta,\pi$ で表せ。

**第4問** 単位質量の作動流体が1サイクルに行う仕事（比出力）$W$ を $C_P,T_O,\kappa,\theta,\alpha,\beta,\pi$ で表せ。

**第5問** $T_O,\theta$ を固定して $W$ を最大にする $\alpha,\beta,\pi$ を求め、$\kappa,\theta$ で表せ。また最大の $W$ を $C_P,T_O,\theta$ で表せ。

**第6問** $W$ が最大となるときの熱効率 $\eta$ を $\theta$ で表せ。

#### 题目描述

考虑理想气体的三级压缩、两次中间冷却燃气轮机循环：$\mathrm O\to\mathrm A$、$\mathrm B\to\mathrm C$、$\mathrm D\to\mathrm E$ 为绝热压缩，$\mathrm A\to\mathrm B$、$\mathrm C\to\mathrm D$ 为等压中间冷却，$\mathrm E\to\mathrm F$ 等压加热，$\mathrm F\to\mathrm G$ 绝热膨胀，$\mathrm G\to\mathrm O$ 等压冷却。过程均准静态，比热恒定，$\kappa=C_P/C_V$。

压力满足 $P_F=P_E\ge P_D=P_C\ge P_B=P_A\ge P_O=P_G$，理想中冷使 $T_O=T_B=T_D$。定义 $\theta=T_F/T_O$、$\pi=P_E/P_O$、$\alpha=T_A/T_O$、$\beta=T_C/T_B$。

1. 用 $P_O,\kappa,\alpha$ 表示 $P_A$。
2. 用 $T_O,\kappa,\alpha,\beta,\pi$ 表示 $T_E$。
3. 用 $T_O,\kappa,\theta,\pi$ 表示 $T_G$。
4. 求每单位质量工质每循环的净功 $W$。
5. 固定 $T_O,\theta$，求使 $W$ 最大的 $\alpha,\beta,\pi$，及此时的最大净功。
6. 求净功最大时的热效率。

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
