---
sidebar_label: "2018年8月実施 III-2-AB（電磁気学・統計力学）"
tags:
  - Kyoto-University
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Thermodynamics.Canonical-Partition-Function
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2018年8月実施 問題III-2-AB

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

### III-2A（電磁気学）

真空の誘電率を $\varepsilon_0$ として以下の問いに答えよ。なお、解答には SI 単位系を用いよ。

(1) 総電荷が $e$ に等しく、内部が一様に帯電した半径 $a$ の球があるとする。球の中心を原点として、原点からの距離 $r$ を用いて、この球がつくる電場を表せ。

(2) 小問 (1) の球がもつ静電エネルギー $U_0$ を求めよ。

$\pi$ 中間子には、中性のものと、素電荷 $e$ を持つものがあり、荷電 $\pi$ 中間子は中性 $\pi$ 中間子よりわずかにエネルギーが高い（すなわち、質量がわずかに大きい）。このエネルギー差を静電エネルギーの差で説明できるとする。ここで、以下の 2 つのモデルを比較する。

**モデル I：** $\pi$ 中間子は半径 $a$ の球である。荷電 $\pi$ 中間子は内部が一様に帯電しているのに対し、中性 $\pi$ 中間子はまったく帯電していない。

**モデル II：** $\pi$ 中間子は、いずれも同じ距離 $b$ 離れた 2 つの点電荷の対からなる。荷電 $\pi$ 中間子は電荷 $\frac13e$ と $\frac23e$ を持つ点電荷対からなる。一方、中性 $\pi$ 中間子は、電荷 $\frac13e$ と $-\frac13e$ を持つ点電荷対からなる状態 A と、電荷 $\frac23e$ と $-\frac23e$ を持つ点電荷対からなる状態 B の重ね合わせで表される。中性 $\pi$ 中間子の静電エネルギーは、各状態 A, B の静電エネルギーの相加平均で与えられる。なお、仮想的に $b$ を無限大とした場合、荷電および中性 $\pi$ 中間子の静電エネルギーに差はないものとする。

(3) 荷電 $\pi$ 中間子と中性 $\pi$ 中間子の静電エネルギーの差がモデル I とモデル II で等しいとしたとき、比 $a/b$ の値を求めよ。

### III-2B（統計力学）

$N$ 個の要素が直線状に連なった鎖状分子がある。各要素 $i$ はそれぞれ独立に $\sigma_i=+1$ または $-1$ のいずれかの状態を取ることができ、長さ $l+\sigma_i a$、エネルギー $\epsilon+\sigma_i\Delta$ をもつものとする。ただし、$l,a,\epsilon,\Delta$ は定数である。この鎖状分子を一定の外力 $f$ で引っ張るときの全系のエネルギーは

$$
E(\{\sigma_i\})=\sum_{i=1}^N(\epsilon+\sigma_i\Delta)-fL \tag{A}
$$

で与えられる。ただし、

$$
L=\sum_{i=1}^N(l+\sigma_i a)
$$

は鎖状分子全体の長さである。以下の設問において、$\overline A$ は物理量 $A$ の温度 $T$ のカノニカル分布での期待値を表す。ボルツマン定数は $k_B$ とする。

(1) 温度 $T$ におけるカノニカル分布で $\sigma_i=1$ である確率を求めよ。

(2) $\sigma_i$ の期待値 $\overline{\sigma_i}$ とゆらぎの大きさ $\overline{(\sigma_i-\overline{\sigma_i})^2}$ を計算せよ。

(3) 温度一定で外力を $f$ から $f+\delta f$ に変化させると、分子の長さの期待値は $\overline L$ から $\overline L+\delta\overline L$ に変化した。このとき、$\delta f$ が小さければ、近似的に

$$
\delta\overline L\simeq k\delta f \tag{B}
$$

と表される。この係数 $k$ を求めよ。

(4) 式 (A) を一般化して、全系のエネルギーが

$$
E(\{\sigma_i\})=E_0(\{\sigma_i\})-fL
$$

の形に与えられるとき、式 (B) で定義される $k$ を分子の長さのゆらぎ $\overline{(L-\overline L)^2}$ を用いて表せ。なお、$E_0(\{\sigma_i\})$ は $f$ に依存しないものとする。

#### 题目描述

**III-2A（电磁学）**

设真空介电常数为 $\varepsilon_0$，回答下列问题。答案使用 SI 单位制。

(1) 一个半径为 $a$ 的球内部均匀带电，总电荷为 $e$。以球心为原点，用到原点的距离 $r$ 表示该球产生的电场。

(2) 求小问 (1) 中球的静电能 $U_0$。

$\pi$ 介子有中性和带有元电荷 $e$ 的两种，带电 $\pi$ 介子的能量略高于中性 $\pi$ 介子（即质量略大）。假定这一能量差可由静电能之差解释，比较以下两种模型。

**模型 I：** $\pi$ 介子为半径 $a$ 的球。带电 $\pi$ 介子内部均匀带电，中性 $\pi$ 介子则完全不带电。

**模型 II：** 两类 $\pi$ 介子均由相距同一距离 $b$ 的两个点电荷组成。带电 $\pi$ 介子的点电荷为 $\frac13e$ 和 $\frac23e$；中性 $\pi$ 介子由状态 A 与状态 B 叠加表示，状态 A 的点电荷为 $\frac13e$ 和 $-\frac13e$，状态 B 的点电荷为 $\frac23e$ 和 $-\frac23e$。中性 $\pi$ 介子的静电能是状态 A、B 静电能的算术平均。另假设在虚拟的 $b\to\infty$ 情况下，带电与中性 $\pi$ 介子的静电能无差别。

(3) 若模型 I 与模型 II 给出的带电与中性 $\pi$ 介子的静电能之差相等，求比值 $a/b$。

**III-2B（统计力学）**

一个链状分子由 $N$ 个单元沿直线连接而成。各单元 $i$ 独立地取 $\sigma_i=+1$ 或 $-1$ 状态，其长度为 $l+\sigma_i a$，能量为 $\epsilon+\sigma_i\Delta$，其中 $l,a,\epsilon,\Delta$ 为常数。用恒定外力 $f$ 拉伸该分子时，整个系统的能量为

$$
E(\{\sigma_i\})=\sum_{i=1}^N(\epsilon+\sigma_i\Delta)-fL. \tag{A}
$$

这里

$$
L=\sum_{i=1}^N(l+\sigma_i a)
$$

是分子的总长度。以下 $\overline A$ 表示物理量 $A$ 在温度 $T$ 的正则分布下的期望值，玻尔兹曼常数为 $k_B$。

(1) 求温度 $T$ 的正则分布下 $\sigma_i=1$ 的概率。

(2) 计算 $\sigma_i$ 的期望值 $\overline{\sigma_i}$ 和涨落大小 $\overline{(\sigma_i-\overline{\sigma_i})^2}$。

(3) 保持温度不变，将外力从 $f$ 改为 $f+\delta f$，分子长度的期望值从 $\overline L$ 变为 $\overline L+\delta\overline L$。当 $\delta f$ 足够小时，近似有

$$
\delta\overline L\simeq k\delta f. \tag{B}
$$

求系数 $k$。

(4) 将式 (A) 推广为

$$
E(\{\sigma_i\})=E_0(\{\sigma_i\})-fL,
$$

用分子长度的涨落 $\overline{(L-\overline L)^2}$ 表示式 (B) 定义的 $k$。假定 $E_0(\{\sigma_i\})$ 不依赖 $f$。

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
\boxed{k=\beta_T\left(\overline{L^2}-\overline L^{\,2}\right)
=\frac{\overline{(L-\overline L)^2}}{k_BT}.}
$$

この導出は要素間の独立性を必要としない。

## **Reference**

- [京都大学公式原題（2019年度、PDF 18–19ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
