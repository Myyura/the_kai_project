---
sidebar_label: "2017年8月実施 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Brayton-Cycle
  - Physics.Thermodynamics.Steady-Flow-Energy-Equation
---

# 九州大学 工学府 機械系専攻 2017年8月実施 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

次の各問に答えよ。（55点）

ガスタービンの性能は，熱効率により評価される。ガスタービンは，図に示すように開いた系の流動式熱機関であり，その理論サイクルは，断熱圧縮（状態1→2），等圧加熱（状態2→3），断熱膨張（状態3→4）および等圧冷却（状態4→1）の各準静的過程により構成されるブレイトンサイクルである。以下に示す圧力 $p$ および温度 $T$ の添え字は各状態を表す。作動流体は理想気体とし，定圧比熱 $c_p$ および比熱比 $\kappa$ はそれぞれ一定のガスサイクルとして，以下の問いに答えよ。

![原題のガスタービンの構成](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_thermo_1_figure_1.png)

**(1)** ブレイトンサイクルの $h$–$s$（比エンタルピー–比エントロピー）線図を描け。また，$T_1$，圧力比 $\gamma\,(=p_2/p_1)$，サイクル最高最低温度比 $\tau\,(=T_3/T_1)$，$c_p$ および $\kappa$ を用いて，単位質量流量当たりの圧縮機仕事 $l_{C0}$，タービン仕事 $l_{T0}$ および加熱量 $q_0$ をそれぞれ求めよ。

![原題の(1)・(3)のh–s線図解答欄](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_thermo_1_figure_2.png)

**(2)** ブレイトンサイクルでは，熱効率 $\eta_0$ は $\gamma$ のみに依存することを示せ。

**(3)** 実際のガスタービンでは，必ず作動流体の流れの摩擦に伴う損失が発生する。圧縮機とタービンの断熱効率がそれぞれ $\eta_C$ と $\eta_T$（ただし，$\eta_C\le1,\eta_T\le1$）であるガスタービンサイクルでは，(1)で描いた $h$–$s$ 線図がどのように変化するか，新たな状態に′（ダッシュ）を付けるなどして，図中に書き加えよ。また，$T_1,\gamma,\tau,c_p,\kappa,\eta_C$ および $\eta_T$ のいずれかを用いて，このときの単位質量流量当たりの圧縮機仕事 $l_C$，タービン仕事 $l_T$ および加熱量 $q$ をそれぞれ求めよ。

**(4)** 実際のガスタービンサイクルの熱効率 $\eta$ は，タービン入口温度（$T_3$）に依存することが知られている。圧縮機とタービンの断熱効率がそれぞれ $\eta_C$ と $\eta_T$（ただし，$\eta_C\le1,\eta_T\le1$）であるガスタービンサイクルの $\eta$ は $\tau$ に依存することを示せ。また，$\eta_C$ と $\eta_T$ がそれぞれ0.9の場合，$\tau$ を5から6に変化させたとき，$\eta$ は何%上昇するか求めよ。ただし，$\gamma^{(\kappa-1)/\kappa}=2.5$（$\gamma=25,\kappa=1.4$ に相当）とする。

#### 题目描述

回答下列问题。（55分）

燃气轮机的性能用热效率评价。燃气轮机是图示开口系统中的流动式热机，其理论循环为布雷顿循环，由绝热压缩（状态1→2）、等压加热（2→3）、绝热膨胀（3→4）、等压冷却（4→1）各准静态过程组成。以下压力 $p$ 和温度 $T$ 的下标表示对应状态。工质为理想气体，定压比热 $c_p$ 和比热比 $\kappa$ 分别为常数。

**(1)** 画出布雷顿循环的 $h$–$s$（比焓—比熵）图。用 $T_1$、压力比 $\gamma=p_2/p_1$、循环最高与最低温度之比 $\tau=T_3/T_1$、$c_p,\kappa$，分别求单位质量流量的压缩机功 $l_{C0}$、涡轮功 $l_{T0}$ 和加热量 $q_0$。

**(2)** 证明布雷顿循环的热效率 $\eta_0$ 只依赖于 $\gamma$。

**(3)** 实际燃气轮机必然存在工质流动摩擦导致的损失。压缩机和涡轮的绝热效率分别为 $\eta_C,\eta_T$，其中 $\eta_C\le1,\eta_T\le1$。说明此时(1)的 $h$–$s$ 图如何变化，通过给新状态加′等方式补画在图中。用 $T_1,\gamma,\tau,c_p,\kappa,\eta_C,\eta_T$ 中必要的量，分别求单位质量流量的压缩机功 $l_C$、涡轮功 $l_T$ 和加热量 $q$。

**(4)** 已知实际燃气轮机循环的热效率 $\eta$ 依赖涡轮入口温度 $T_3$。对压缩机、涡轮绝热效率分别为 $\eta_C,\eta_T$（均不超过1）的循环，证明 $\eta$ 依赖于 $\tau$。若两种绝热效率均为0.9，将 $\tau$ 从5增至6，求 $\eta$ 上升百分之几。设 $\gamma^{(\kappa-1)/\kappa}=2.5$，对应 $\gamma=25,\kappa=1.4$。

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
\boxed{\begin{gathered}
l_{C0}=c_pT_1(\chi-1),\\
l_{T0}=c_pT_1\tau\left(1-\frac1\chi\right),\\
q_0=c_pT_1(\tau-\chi).
\end{gathered}}
$$

線図では $1\to2$ と $3\to4$ が鉛直線、$2\to3$ と $4\to1$ が等圧線となる。

![理想・実際の Brayton サイクルの h–s 線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2018/mech_201708_thermo-1-brayton.svg)

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
\begin{gathered}
T_{2'}=T_1\left[1+\frac{\chi-1}{\eta_C}\right],\\
T_{4'}=\tau T_1\left[1-\eta_T\left(1-\frac1\chi\right)\right].
\end{gathered}
$$

線図では $2'$ は 2 と同じ高圧等圧線上で 2 より右上、$4'$ は 4 と同じ低圧等圧線上で 4 より右上に位置する。よって

$$
\boxed{\begin{gathered}
l_C=c_pT_1\frac{\chi-1}{\eta_C},\\
l_T=c_pT_1\tau\eta_T\left(1-\frac1\chi\right),
\end{gathered}}
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
\begin{gathered}
\eta(5)=\frac{31}{70}\simeq0.44286,\\
\eta(6)=\frac{59}{125}=0.472.
\end{gathered}
$$

したがって熱効率は $44.29\%$ から $47.20\%$ へ、$\boxed{2.91\text{ ポイント}}$ 上昇する。元の効率に対する相対上昇率で表せば

$$
\boxed{\frac{\eta(6)-\eta(5)}{\eta(5)}\times100\simeq6.58\%.}
$$
