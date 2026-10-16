---
sidebar_label: "2023年度 物理化学 問題2"
tags:
  - Okayama-University
  - Physics.Thermodynamics.First-Law
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Maxwell-Relations
---

# 岡山大学 自然科学研究科 応用化学専攻 2023年度 物理化学 問題2

## **Author**

祭音Myyura (Based on [miyake's answer](https://miyake.github.io/exams/%E5%B2%A1%E5%B1%B1%E5%A4%A7%E5%AD%A6/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E5%BF%9C%E7%94%A8%E5%8C%96%E5%AD%A6%E5%B0%82%E6%94%BB/2023%E5%B9%B4%E5%BA%A6_%E7%89%A9%E7%90%86%E5%8C%96%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

### 問1

1. 常に $1\times10^5\ \mathrm{Pa}$ の圧力がかかる可動式のふたをもつ容器に $1\ \mathrm{mol}$ の理想気体を入れ、$100\ \mathrm W\ (=\mathrm{J/s})$ のヒーターで $15\ \mathrm s$ 加熱した。気体の定圧モル熱容量は $\overline C_P=30\ \mathrm{J\,K^{-1}\,mol^{-1}}$ である。内部の温度が何 $^\circ\mathrm C$ 上昇するか答えよ。ヒーターのエネルギーはすべて気体に移り、$\overline C_P$ はこの温度範囲では変わらないとする。
2. この加熱によって体積が $4\ \mathrm L$ 増加した。このときの内部エネルギー変化を求めよ。
3. 容器のふたを動かないように固定し、1. と同じ条件で加熱した場合、温度上昇は1.と比べてどうなるか。理由とともに答えよ。

### 問2

理想気体 $1\ \mathrm{mol}$ のエントロピー変化について答えよ。

1. 一定圧力 $P_1$ で温度を $T_1$ から $T_2$ に変化させるときのエントロピー変化 $\Delta S_P$ を求めよ。
2. 一定体積で温度を $T_1$ から $T_2$ に変化させ、圧力が $P_1$ から $P_2$ になるとき、定積モル熱容量 $\overline C_V$ を用いて $\Delta S_V=\overline C_V\ln(T_2/T_1)$ と書ける。$(T_1,P_1)\to(T_2,P_1)$ と $(T_1,P_1)\to(T_2,P_2)$ の変化を比較すると、温度 $T_2$ 一定で $(T_2,P_1)\to(T_2,P_2)$ と変化する際のエントロピー変化は $\Delta S_V-\Delta S_P$ となる。これと理想気体の状態方程式、$\overline C_P$ と $\overline C_V$ の関係を用いて、次式を導出せよ。

$$
\Delta S=R\ln\frac{P_1}{P_2}.\tag{1}
$$

### 問3

内部エネルギー $U$、圧力 $P$、体積 $V$、温度 $T$ の間には

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P\tag{2}
$$

の関係がある。以下に答えよ。

1. 熱力学の第一法則より、定圧・可逆の条件のもとで次式を導出せよ。

$$
dU=T\,dS-P\,dV.\tag{3}
$$

2. 式(3)と Maxwell の関係式 $(\partial S/\partial V)_T=(\partial P/\partial T)_V$ を用い、式(2)を導出せよ。
3. 式(2)を用いて、理想気体の内部エネルギーは温度のみの関数であり、体積に依存しないことを示せ。

#### 题目描述

问1：可动盖容器内装有 $1\ \mathrm{mol}$ 理想气体，承受恒压 $10^5\ \mathrm{Pa}$。用 $100\ \mathrm W$ 加热器加热 $15\ \mathrm s$，全部能量传给气体，定压摩尔热容在此温区恒为 $30\ \mathrm{J\,K^{-1}\,mol^{-1}}$。求升温多少摄氏度；若体积增加 $4\ \mathrm L$，求内能变化；若固定盖子，以相同条件加热，比较温升并说明理由。

问2：对 $1\ \mathrm{mol}$ 理想气体，先求定压 $P_1$ 下温度由 $T_1$ 升至 $T_2$ 的熵变 $\Delta S_P$。已知定容变温、变压过程的熵变为 $\Delta S_V=\overline C_V\ln(T_2/T_1)$，利用状态函数性质、理想气体状态方程及摩尔热容关系，推导等温变压熵变 $\Delta S=R\ln(P_1/P_2)$。

问3：由热力学第一定律在定压、可逆条件下推导 $dU=T\,dS-P\,dV$；再利用所给 Maxwell 关系推导 $(\partial U/\partial V)_T=T(\partial P/\partial T)_V-P$；最后证明理想气体的内能仅依赖温度而不依赖体积。

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
