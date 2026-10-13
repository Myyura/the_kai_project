---
sidebar_label: "2020年8月実施 選択問題3 熱力学"
tags:
  - University-of-Electro-Communications
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Heat-Pump-and-Refrigeration
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題3 熱力学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問1

狭義の理想気体の定圧・定積比熱を $c_p,c_v$、気体定数を $R$ とする。水平に動くピストン内の気体の圧力は $P$、体積は $V$、質量は $M$。外部仕事に損失はない。温度が $\Delta T$ 変化した場合を考える。

1. 定圧変化で得る熱量 $Q_1$ と定積変化で得る熱量 $Q_2$ を求めよ。
2. 定圧変化で体積が $\Delta V$ 変わるときの仕事 $L_1$、および定積変化の仕事 $L_2$ を求めよ。
3. 「内部エネルギーの総和 $E$」を、定圧変化 $E_1$ と定積変化 $E_2$ の場合について求めよ。
4. 温度による物性変化を無視して $c_p=c_v+R$ を証明せよ。
5. 比熱比 $\kappa=c_p/c_v$ と $R$ で $c_p,c_v$ を表せ。

### 問2

逆カルノーサイクルで冷暖房を行い、室温を一定に保つ。

1. 夏、外気320 K、室温300 K、外部から室内への侵入熱3 kWのとき、必要最小動力を求めよ。
2. 冬、外気270 K、室温300 K、室内から外部への熱損失5 kWのとき、必要最小動力を求めよ。

### 問3

発熱量 $50\times10^6\ \mathrm{J/kg}$ の燃料を用いるエンジンが、熱効率50%、出力30 kWで一定運転している。

1. 1時間当たりの燃料消費量 $M$ [kg/h] を求めよ。
2. 同じ出力で熱効率を60%に改善した場合、1時間当たりの燃料節約量 $\Delta M$ [kg/h] を求めよ。

#### 题目描述

问1：水平活塞内质量 $M$、压力 $P$、体积 $V$ 的定比热理想气体温度改变 $\Delta T$，分别求等压和等容过程的吸热、对外做功及内能变化；由第一定律证明迈耶关系，并用比热比 $\kappa$ 和气体常数 $R$ 表示两比热。原题内能“总和”的措辞按本次过程的变化量解释。问2：逆卡诺空调保持室温300 K；夏季外温320 K、入热3 kW，冬季外温270 K、散热5 kW，分别求最小功率。问3：燃料热值 $50\times10^6$ J/kg、发动机输出30 kW，求效率50%时每小时耗油量和提高到60%后的每小时节省量。

## **Kai**

### 問1

熱の流入、気体が外部にする仕事を正とする。

$$
\boxed{Q_1=Mc_p\Delta T,\qquad Q_2=Mc_v\Delta T},
$$

$$
\boxed{L_1=P\Delta V=MR\Delta T,\qquad L_2=0}.
$$

理想気体の内部エネルギーは温度だけの関数であり、変化量は両過程とも

$$
\boxed{E_1=E_2=Mc_v\Delta T}.
$$

ここでは原題(3)の $E$ を内部エネルギーの**変化量**と解する。絶対値には初期温度と基準エネルギーが必要であり、$\Delta T$ だけでは求まらない。

定圧変化の第一法則 $Q_1=E_1+L_1$ に代入すると、$Mc_p\Delta T=Mc_v\Delta T+MR\Delta T$。したがって $\boxed{c_p-c_v=R}$。これと $\kappa=c_p/c_v$ より

$$
\boxed{c_v=\frac{R}{\kappa-1},\qquad c_p=\frac{\kappa R}{\kappa-1}}.
$$

### 問2

冷房の成績係数は $\mathrm{COP}_R=T_L/(T_H-T_L)=300/20=15$。よって $\boxed{\dot W_{\min}=3/15=0.200\ \mathrm{kW}}$。

暖房では $\mathrm{COP}_H=T_H/(T_H-T_L)=300/30=10$。よって $\boxed{\dot W_{\min}=5/10=0.500\ \mathrm{kW}}$。

### 問3

燃料消費量は出力を熱効率と発熱量で割れば得られる。

$$
\boxed{M=\frac{30\times10^3\times3600}{0.50\times50\times10^6}=4.32\ \mathrm{kg/h}}.
$$

効率60%では $M'=3.60\ \mathrm{kg/h}$。したがって $\boxed{\Delta M=0.72\ \mathrm{kg/h}}$。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 8ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
