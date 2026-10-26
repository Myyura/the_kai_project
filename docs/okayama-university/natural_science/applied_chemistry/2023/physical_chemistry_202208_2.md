---
sidebar_label: "2022年8月実施 物理化学 問題2"
tags:
  - Okayama-University
  - Physics.Thermodynamics.First-Law
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Maxwell-Relations
---

# 岡山大学 自然科学研究科 応用化学専攻 2022年8月実施 物理化学 問題2

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%BF%9C%E7%94%A8%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

次の問1～問3に答えよ。

### 問1

1) 常に $1\times10^5\,\mathrm{Pa}$ の圧力がかかる可動式のふたをもつ容器に $1\,\mathrm{mol}$ の理想気体を入れ、$100\,\mathrm W\ (=\mathrm{J/s})$ のヒーターで $15\,\mathrm s$ 加熱した。この気体の定圧モル熱容量 $\overline C_P=30\,\mathrm{J\,K^{-1}\,mol^{-1}}$ であるとき、内部の温度が何 $^\circ\mathrm C$ 上昇するか答えよ。ただし、ヒーターから発生したエネルギーはすべて気体に移り、$\overline C_P$ は温度変化の範囲では変わらないものとする。

2) この加熱によって気体の体積が $4\,\mathrm L$ 増加した。このときの内部エネルギー変化を求めよ。

3) この容器のふたを動かないように固定し、1) と同じ条件で加熱した場合、この気体の温度の上昇は、1) と比べてどうなるか。理由とともに答えよ。

### 問2

理想気体 $1\,\mathrm{mol}$ のエントロピー変化について以下の問いに答えよ。

1) 一定圧力 $P_1$ で温度を $T_1$ から $T_2$ に変化させるときのエントロピー変化 $\Delta S_P$ を求めよ。

2) 一定体積で温度を $T_1$ から $T_2$ に変化させ、圧力が $P_1$ から $P_2$ になるときのエントロピー変化 $\Delta S_V$ は、定積モル熱容量を $\overline C_V$ とすると、$\Delta S_V=\overline C_V\ln(T_2/T_1)$ である。ここで、$(T_1,P_1)\to(T_2,P_1)$ のエントロピー変化が $\Delta S_P$、$(T_1,P_1)\to(T_2,P_2)$ のエントロピー変化が $\Delta S_V$ であることから、温度 $T_2$ 一定で圧力を変化させた場合、すなわち $(T_2,P_1)\to(T_2,P_2)$ でのエントロピー変化は、$\Delta S_V-\Delta S_P$ で与えられる。これと理想気体の状態方程式、および $\overline C_P$ と $\overline C_V$ の関係を用いて、定温でのエントロピー変化の圧力依存性を表す (1) 式を導出せよ。

$$
\Delta S=R\ln\frac{P_1}{P_2}\tag{1}
$$

### 問3

内部エネルギー $U$ は圧力 $P$、体積 $V$、温度 $T$ に対して、以下の関係がある。

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P\tag{2}
$$

この式について、以下の問いに答えよ。

1) 熱力学の第一法則より、定圧・可逆の条件のもとで次式を導出せよ。

$$
dU=T\,dS-P\,dV\tag{3}
$$

2) (3) 式と Maxwell の関係式 $\left(\dfrac{\partial S}{\partial V}\right)_T=\left(\dfrac{\partial P}{\partial T}\right)_V$ を用いて、(2) 式を導出せよ。

3) (2) 式を用いて、理想気体の内部エネルギーは温度のみの関数であり、体積には依存しないことを示せ。

### 题目描述

回答问1～问3。

**问1**

1) 将 $1\,\mathrm{mol}$ 理想气体装入具有可动盖子的容器，盖子始终承受 $1\times10^5\,\mathrm{Pa}$ 的压力。用 $100\,\mathrm W\ (=\mathrm{J/s})$ 的加热器加热 $15\,\mathrm s$。若该气体的定压摩尔热容为 $\overline C_P=30\,\mathrm{J\,K^{-1}\,mol^{-1}}$，求内部温度上升多少摄氏度。假设加热器产生的全部能量均传给气体，且 $\overline C_P$ 在此温度变化范围内不变。

2) 此次加热使气体体积增加了 $4\,\mathrm L$。求气体的内能变化。

3) 将容器盖子固定，以与 1) 相同的条件加热，气体的温升与 1) 相比如何变化？说明理由。

**问2** 回答下列关于 $1\,\mathrm{mol}$ 理想气体熵变的问题。

1) 在恒定压强 $P_1$ 下，将温度从 $T_1$ 变为 $T_2$，求熵变 $\Delta S_P$。

2) 在恒定体积下，将温度从 $T_1$ 变为 $T_2$，压强从 $P_1$ 变为 $P_2$。若定容摩尔热容为 $\overline C_V$，则熵变为 $\Delta S_V=\overline C_V\ln(T_2/T_1)$。由于 $(T_1,P_1)\to(T_2,P_1)$ 的熵变为 $\Delta S_P$，而 $(T_1,P_1)\to(T_2,P_2)$ 的熵变为 $\Delta S_V$，在恒温 $T_2$ 下改变压强，即过程 $(T_2,P_1)\to(T_2,P_2)$ 的熵变为 $\Delta S_V-\Delta S_P$。利用这一关系、理想气体状态方程，以及 $\overline C_P$ 与 $\overline C_V$ 的关系，推导表示恒温熵变对压强依赖关系的式 (1)。

$$
\Delta S=R\ln\frac{P_1}{P_2}.\tag{1}
$$

**问3** 内能 $U$ 与压强 $P$、体积 $V$、温度 $T$ 之间存在以下关系：

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P.\tag{2}
$$

对于此式，回答以下问题。

1) 在定压、可逆条件下，由热力学第一定律推导

$$
dU=T\,dS-P\,dV.\tag{3}
$$

2) 利用式 (3) 及 Maxwell 关系 $\left(\dfrac{\partial S}{\partial V}\right)_T=\left(\dfrac{\partial P}{\partial T}\right)_V$，推导式 (2)。

3) 利用式 (2)，证明理想气体的内能只依赖温度，不依赖体积。

## **Kai**

### 問1

1. 加えた熱は $Q=100\times15=1500\ \mathrm J$ である。定圧では $Q=n\overline C_P\Delta T$ なので、

$$
\boxed{\Delta T=\frac{1500}{1\times30}=50\ \mathrm K}
$$

となる。温度差は摂氏でも同じであり、$\boxed{50\ ^\circ\mathrm C\text{ 上昇}}$ する。

2. 気体が外部にする仕事は、与えられた体積変化 $4\ \mathrm L=4\times10^{-3}\ \mathrm{m^3}$ を用いて

$$
W=P\Delta V=10^5\times4\times10^{-3}=400\ \mathrm J.
$$

熱力学第一法則 $\Delta U=Q-W$ より

$$
\boxed{\Delta U=1500-400=1100\ \mathrm J}.
$$

3. ふたを固定すると体積変化がなく、膨張仕事は $0$ である。同じ熱量のすべてが内部エネルギーの増加に使われる。理想気体では $\overline C_P-\overline C_V=R>0$ なので、

$$
\Delta T_V=\frac{Q}{n\overline C_V}
=\frac{1500}{30-R}>\frac{1500}{30}=50\ \mathrm K.
$$

したがって $\boxed{\text{ふたを固定した方が温度上昇は大きい}}$。

### 問2

1. 可逆な定圧経路をとれば $dS=\delta Q_{\mathrm{rev}}/T=\overline C_P\,dT/T$ である。題意の一定のモル熱容量を用いて

$$
\boxed{\Delta S_P=\overline C_P\ln\frac{T_2}{T_1}}.
$$

2. エントロピーは状態関数なので、指定された等温過程の変化は

$$
\begin{aligned}
\Delta S&=\Delta S_V-\Delta S_P\\
&=(\overline C_V-\overline C_P)\ln\frac{T_2}{T_1}
=-R\ln\frac{T_2}{T_1}.
\end{aligned}
$$

定積経路では $P_1V=RT_1$、$P_2V=RT_2$ だから $T_2/T_1=P_2/P_1$ であり、

$$
\boxed{\Delta S=-R\ln\frac{P_2}{P_1}=R\ln\frac{P_1}{P_2}}.
$$

### 問3

1. 系が受け取る熱を $\delta Q$、系が外部にする仕事を $\delta W$ とすると、第一法則は $dU=\delta Q-\delta W$ である。可逆過程では $\delta Q=T\,dS$、体積仕事は $\delta W=P\,dV$ なので、

$$
\boxed{dU=T\,dS-P\,dV}.
$$

2. 温度を固定して体積方向に微分すると、式(3)より

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial S}{\partial V}\right)_T-P.
$$

Maxwell の関係式を代入すれば

$$
\boxed{\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P}.
$$

3. 物質量 $n$ を固定した理想気体では $P=nRT/V$ なので、

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\frac{nR}{V}-\frac{nRT}{V}=0.
$$

よって $U(T,V)$ は一定温度で体積に依存せず、$\boxed{U=U(T)}$ と書ける。

## **Reference**

- [大学公式問題（2022年8月実施、PDF 4–5ページ）](https://www.gnst.okayama-u.ac.jp/ja/wp-content/uploads/2022/11/06ko_oyo_butsuri_202208.pdf)
- [miyake：対応する解答](https://miyake.github.io/exams/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%BF%9C%E7%94%A8%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html)
