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

質量流速 $0.0400\ \mathrm{kg/s}$ の空気が，定置されているコンプレッサーによって，圧力 $200\ \mathrm{kPa}$，温度 $320\ \mathrm K$ の入口状態から，圧力 $800\ \mathrm{kPa}$，温度 $500\ \mathrm K$ の出口状態まで，定常的に圧縮される。この圧縮過程で，$1.00\ \mathrm{kW}$ の熱がコンプレッサーから周囲環境へ伝わっている。空気の運動エネルギーおよび位置エネルギーの変化は無視できるものとする。また，空気は理想気体とみなすことができ，定圧比熱を $1.007\ \mathrm{kJ/(kg\cdot K)}$，定積比熱を $0.720\ \mathrm{kJ/(kg\cdot K)}$，気体定数を $0.287\ \mathrm{kJ/(kg\cdot K)}$ とする。以下の問いに答えなさい。ただし，周囲環境の圧力と温度を，それぞれ $100\ \mathrm{kPa}$，$300\ \mathrm K$ とする。なお，有効数字3桁（4桁まで計算して3桁で記載）で答えなさい。

(1) コンプレッサーがする単位時間あたりの仕事 $[\mathrm{kW}]$ を求めなさい。

(2) 空気（閉じた系）の単位時間あたりのエクセルギー（有効エネルギー）の増加量 $[\mathrm{kW}]$ を求めなさい。

(3) 空気を上記の入口状態から出口状態まで圧縮する時，熱力学第一法則と熱力学第二法則から，エントロピー生成が理論的に取り得る値の範囲を考慮して，コンプレッサーの単位時間あたりの理論最小仕事の式を導出しなさい。

(4) コンプレッサーの単位時間あたりの理論最小仕事 $[\mathrm{kW}]$ を求めなさい。

(5) (1) の単位時間あたりの仕事と (4) の単位時間あたりの理論最小仕事で，値に差が出る熱力学的な理由を答えなさい。

#### 题目描述

质量流量为 $0.0400\ \mathrm{kg/s}$ 的空气，经固定安装的压缩机，从入口压力 $200\ \mathrm{kPa}$、温度 $320\ \mathrm K$ 的状态，定常压缩至出口压力 $800\ \mathrm{kPa}$、温度 $500\ \mathrm K$ 的状态。在压缩过程中，压缩机以 $1.00\ \mathrm{kW}$ 向周围环境散热。忽略空气动能和势能的变化，将空气视为理想气体，其定压比热为 $1.007\ \mathrm{kJ/(kg\cdot K)}$，定容比热为 $0.720\ \mathrm{kJ/(kg\cdot K)}$，气体常数为 $0.287\ \mathrm{kJ/(kg\cdot K)}$。回答下列问题。环境压力、温度分别为 $100\ \mathrm{kPa}$、$300\ \mathrm K$。答案保留3位有效数字，先计算到4位，再以3位记载。

(1) 求压缩机每单位时间所做的功 $[\mathrm{kW}]$。

(2) 求空气作为闭口系统时，每单位时间的火用（有效能）增加量 $[\mathrm{kW}]$。

(3) 将空气从上述入口状态压缩至出口状态时，根据热力学第一、第二定律，并考虑熵生成理论上允许的取值范围，推导压缩机每单位时间理论最小功的表达式。

(4) 求压缩机每单位时间的理论最小功 $[\mathrm{kW}]$。

(5) 说明 (1) 中每单位时间实际功与 (4) 中每单位时间理论最小功数值不同的热力学原因。

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
\begin{gathered}
\dot m\Delta\phi=\dot m[c_v(T_2-T_1)+p_0(v_2-v_1)-T_0\Delta s]\\
=3.446164\ldots\,\mathrm{kW},
\end{gathered}
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
