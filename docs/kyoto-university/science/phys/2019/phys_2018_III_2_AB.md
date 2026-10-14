---
sidebar_label: "2019年度 III-2-AB（電磁気学・統計力学）"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Thermodynamics.Canonical-Partition-Function
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年度 問題III-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A

SI 単位系を用い、真空の誘電率を $\varepsilon_0$ とする。

1. 半径 $a$ の球の内部に総電荷 $e$ が一様に分布する。中心からの距離 $r$ における電場を求めよ。
2. 球の静電エネルギー $U_0$ を求めよ。
3. 荷電 $\pi$ 中間子と中性 $\pi$ 中間子のエネルギー差を二つの模型で比較する。模型 I：半径 $a$ の球で、荷電粒子の内部は総電荷 $e$ で一様に帯電、中性粒子は無帯電。模型 II：距離 $b$ の点電荷対で、荷電粒子は $(e/3,2e/3)$、中性粒子は $(e/3,-e/3)$ と $(2e/3,-2e/3)$ の二状態の重ね合わせであり、静電エネルギーは両状態の算術平均とする。$b\to\infty$ では両者の静電エネルギー差をゼロとする。模型 I と II のエネルギー差が等しいとき、$a/b$ を求めよ。

### III-2B

$N$ 個の要素からなる鎖状分子を考える。各要素は独立に $\sigma_i=\pm1$ を取り、長さ $l+\sigma_i a$、エネルギー $\epsilon+\sigma_i\Delta$ を持つ。一定の外力 $f$ による全エネルギーと全長は

$$
E=\sum_{i=1}^N(\epsilon+\sigma_i\Delta)-fL,\qquad
L=\sum_{i=1}^N(l+\sigma_i a).
$$

温度 $T$ の正準分布を用い、期待値を上線で表す。

1. $\sigma_i=1$ の確率を求めよ。
2. $\overline{\sigma_i}$ と $\overline{(\sigma_i-\overline{\sigma_i})^2}$ を求めよ。
3. 温度一定で $f\mapsto f+\delta f$ とすると $\delta\overline L\simeq k\delta f$ となる。$k$ を求めよ。
4. より一般に $E=E_0(\{\sigma_i\})-fL$、$E_0$ は $f$ に依存しない場合、$k$ を全長のゆらぎで表せ。

#### 题目描述

A：(1) 求半径 $a$、总电荷 $e$ 的均匀带电实心球的内外电场；(2) 求其静电能；(3) 比较两种模型中荷电与中性 $\pi$ 介子的静电能差。模型 I 用带电球与无电球，模型 II 用间距 $b$ 的电荷对：荷电为 $(e/3,2e/3)$，中性为 $(e/3,-e/3)$ 和 $(2e/3,-2e/3)$ 的能量平均。两能差相等时求 $a/b$。

B：由 $N$ 个独立二态单元构成的分子链，每个单元长度 $l+\sigma_i a$、能量 $\epsilon+\sigma_i\Delta$，受恒力 $f$ 后总能量减去 $fL$。求正则分布下 (1) 正态概率；(2) 平均与方差；(3) 定温长度对力的线性响应；(4) 一般能量 $E_0-fL$ 下响应系数和总长涨落的关系。

## **Kai**

### III-2A

(1) ガウスの法則から

$$
\boxed{\boldsymbol E(r)=\frac e{4\pi\varepsilon_0}
\begin{cases}(r/a^3)\boldsymbol e_r &(r\leq a),\\r^{-2}\boldsymbol e_r &(r\geq a).
\end{cases}}
$$

(2) 内外の場のエネルギーを積分して

$$
U_0=\frac{\varepsilon_0}2\int E^2d^3r
=\frac{e^2}{8\pi\varepsilon_0}\left(\frac1{5a}+\frac1a\right)
=\boxed{\frac{3e^2}{20\pi\varepsilon_0a}}.
$$

(3) 模型 II の差は

$$
\Delta U_{\mathrm{II}}=\frac{e^2}{4\pi\varepsilon_0b}
\left[\frac29-\frac12\left(-\frac19-\frac49\right)\right]
=\frac{e^2}{8\pi\varepsilon_0b}.
$$

$\Delta U_{\mathrm I}=U_0$ と等置して $\boxed{a/b=6/5}$。

### III-2B

$\beta_T=1/(k_BT)$、$h=fa-\Delta$ とおく。一要素の分配関数は $z=2e^{-\beta_T(\epsilon-fl)}\cosh(\beta_T h)$。

(1) $\boxed{P(\sigma_i=1)=e^{\beta_T h}/[2\cosh(\beta_T h)]=1/(1+e^{-2\beta_T h})}$。

(2) $\sigma_i^2=1$ より

$$
\boxed{\overline{\sigma_i}=\tanh(\beta_T h),\qquad
\operatorname{Var}(\sigma_i)=\operatorname{sech}^2(\beta_T h).}
$$

(3) $\overline L=Nl+Na\tanh(\beta_T h)$ を微分して

$$
\boxed{k=\left(\frac{\partial\overline L}{\partial f}\right)_T
=\frac{Na^2}{k_BT}\operatorname{sech}^2\frac{fa-\Delta}{k_BT}.}
$$

(4) 一般の分配関数 $Z=\sum e^{-\beta_T(E_0-fL)}$ から、$\partial_f\log Z=\beta_T\overline L$。さらに微分すると

$$
\boxed{k=\beta_T\left(\overline{L^2}-\overline L^{,2}\right)
=\frac{\overline{(L-\overline L)^2}}{k_BT}.}
$$

この導出は要素間の独立性を必要としない。

## **Reference**

- [京都大学公式原題（2019年度、PDF 18–19ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
