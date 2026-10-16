---
sidebar_label: "2020年8月実施 熱力学 問2"
tags:
  - Hokkaido-University
  - Physics.Thermodynamics.Exergy-and-Maximum-Useful-Work
  - Physics.Thermodynamics.Steady-Flow-Energy-Equation
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 熱力学 問2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

定置されたコンプレッサーが、空気を質量流量 $\dot m=0.0400\,\mathrm{kg/s}$ で、入口 $p_1=200\,\mathrm{kPa},T_1=320\,\mathrm K$ から出口 $p_2=800\,\mathrm{kPa},T_2=500\,\mathrm K$ へ定常的に圧縮する。周囲への放熱は $\dot Q_{\rm out}=1.00\,\mathrm{kW}$。運動・位置エネルギー変化を無視する。空気は理想気体で、$c_p=1.007,c_v=0.720,R=0.287\,\mathrm{kJ/(kg\cdot K)}$。周囲は $p_0=100\,\mathrm{kPa},T_0=300\,\mathrm K$ とする。

1. コンプレッサーが空気にする単位時間当たりの仕事を求めよ。
2. 空気（閉じた系）の単位時間当たりのエクセルギー増加量を求めよ。
3. 同じ入口・出口状態の間で圧縮する際の理論最小仕事の式を、第一・第二法則とエントロピー生成の取り得る範囲から導け。
4. 理論最小仕事の数値を求めよ。
5. (1) と (4) の値に差が生じる熱力学的理由を答えよ。

4桁まで計算し、結果は有効数字3桁で記せ。

#### 题目描述

固定压缩机以 $0.0400\,\mathrm{kg/s}$ 的流量将空气从 $200\,\mathrm{kPa},320\,\mathrm K$ 压缩到 $800\,\mathrm{kPa},500\,\mathrm K$，向环境放热 $1.00\,\mathrm{kW}$。空气为理想气体，$c_p=1.007,c_v=0.720,R=0.287\,\mathrm{kJ/(kg\cdot K)}$；环境 $100\,\mathrm{kPa},300\,\mathrm K$，忽略动能和势能变化。求实际输入功率、题目指定的闭口系统空气㶲增量率；由第一、第二定律推导同样入口出口状态下的理论最小功率，计算其数值并解释与实际值的差异。中间保留4位、结果3位有效数字。

## **Kai**

### (1)

空気への入力仕事を正とする。定常流の第一法則より

$$
\dot W_{\rm in}=\dot mc_p(T_2-T_1)+\dot Q_{\rm out}
=0.0400\times1.007\times180+1.00,
$$

$$
\boxed{\dot W_{\rm in}=8.25\,\mathrm{kW}}.
$$

### (2)

比エントロピーと比体積の変化は

$$
\Delta s=c_p\ln\frac{T_2}{T_1}-R\ln\frac{p_2}{p_1}
=0.0515446\ldots\,\mathrm{kJ/(kg\cdot K)},
$$

$$
v_1=\frac{RT_1}{p_1}=0.4592\,\mathrm{m^3/kg},\qquad
v_2=\frac{RT_2}{p_2}=0.179375\,\mathrm{m^3/kg}.
$$

指定された閉じた系の比エクセルギーは $\phi=(u-u_0)+p_0(v-v_0)-T_0(s-s_0)$ なので

$$
\dot m\Delta\phi=\dot m[c_v(T_2-T_1)+p_0(v_2-v_1)-T_0\Delta s]
=3.446164\ldots\,\mathrm{kW},
$$

$$
\boxed{\dot m\Delta\phi=3.45\,\mathrm{kW}}.
$$

ここでは通過する一定質量の空気を閉じた系として追跡した変化を流量倍している。流動仕事を含む流れのエクセルギー $\psi=h-h_0-T_0(s-s_0)$ とは異なる。

### (3)

熱交換を周囲温度 $T_0$ まで含めた系について、第一・第二法則は

$$
\dot W_{\rm in}=\dot m\Delta h+\dot Q_{\rm out},\qquad
\dot S_{\rm gen}=\dot m\Delta s+\frac{\dot Q_{\rm out}}{T_0}\ge0.
$$

放熱を消去すると

$$
\dot W_{\rm in}=\dot m(\Delta h-T_0\Delta s)+T_0\dot S_{\rm gen}
\ge\dot m(\Delta h-T_0\Delta s).
$$

等号は可逆極限である。したがって、入口・出口状態を固定し熱交換過程を変えられる理論限界は

$$
\boxed{\dot W_{\min}=\dot m\left[c_p(T_2-T_1)-T_0
\left(c_p\ln\frac{T_2}{T_1}-R\ln\frac{p_2}{p_1}\right)\right]}.
$$

この比較で実際の放熱量1.00 kWまで固定するわけではない。可逆極限では $\dot Q_{\rm out}=-T_0\dot m\Delta s<0$ となり、周囲から吸熱する。

### (4), (5)

$$
\dot W_{\min}=6.631864\ldots\,\mathrm{kW},\qquad
\boxed{\dot W_{\min}=6.63\,\mathrm{kW}}.
$$

実際には内部摩擦や有限温度差の熱伝達などによりエントロピーが生成される。

$$
\dot S_{\rm gen}=0.0400\Delta s+\frac{1.00}{300}
=0.00539512\ldots\,\mathrm{kW/K},
$$

$$
\boxed{\dot W_{\rm in}-\dot W_{\min}=T_0\dot S_{\rm gen}
=1.62\,\mathrm{kW}}.
$$

この差は不可逆性によるエクセルギー破壊、すなわち利用可能な仕事の損失であり、エネルギー自体が消えることではない。

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 13ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
