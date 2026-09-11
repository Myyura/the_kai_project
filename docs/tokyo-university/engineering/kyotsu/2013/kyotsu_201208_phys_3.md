---
sidebar_label: '2012年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Maxwell-Relations
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Otto-Diesel-and-Dual-Cycles
---

# 東京大学 工学系研究科 2012年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

1 モルの気体が van der Waals の状態方程式

$$
\left(p+\frac a{V^2}\right)(V-b)=RT
$$

に従う。$p,V,T$ は液化しない範囲にあり、$V$ は $b$ より十分大きいとする。$R$ は気体定数、$a,b$ は分子間力・分子体積に関する正の定数である。内部エネルギーを $U$、エントロピーを $S$ とし、可逆変化では

$$
dU=T\,dS-p\,dV
$$

が成立する。定容比熱 $C_V$ は一定とする。

### I

マクスウェルの関係式

$$
\left(\frac{\partial S}{\partial V}\right)_T
=\left(\frac{\partial p}{\partial T}\right)_V
$$

を導出せよ。必要ならヘルムホルツ自由エネルギー $A=U-TS$ を用いてよい。

### II

等温過程で

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial p}{\partial T}\right)_V-p
$$

が成り立つことを示せ。

### III

この気体を作動流体とするカルノーサイクル A→B→C→D→A を考える。A→B は温度 $T_2$ の等温膨張、B→C は断熱膨張、C→D は温度 $T_1$ の等温圧縮、D→A は断熱圧縮である。各状態の体積を $V_A,V_B,V_C,V_D$ とする。A→B、C→D で気体が受け取る熱量を、それぞれ $V_A,V_B,T_2$ および $V_C,V_D,T_1$ を用いて表せ。

### IV

III の温度比 $T_1/T_2$ を $V_B,V_C$ を用いて表せ。

### V

III の熱効率を求め、理想気体を作動流体にした場合と比較せよ。

### VI

この気体で、断熱圧縮 E→F、定容加熱 F→G、断熱膨張 G→H、定容冷却 H→E の可逆サイクルを作る。E、F の温度を $T_E,T_F$、体積を $V_E,V_F$ とする。

図 3.2 のサイクルは、図 3.3 のような微小カルノーサイクル K→L→M→J→K の和で近似できる。すべての微小サイクルの熱効率が等しいことを示せ。$V_E/V_F=\epsilon$ とするとき、サイクル全体の熱効率を $\epsilon,V_F$ を用いて求めよ。

![カルノーサイクル、定容加熱サイクルと微小サイクルの T–S 図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2013/kyotsu_201208_phys_3_cycles_audited.svg)

#### 题目描述

1 摩尔气体满足范德瓦耳斯方程

$$
\left(p+\frac a{V^2}\right)(V-b)=RT,
\qquad dU=T\,dS-p\,dV.
$$

$R$ 为气体常数，$a,b>0$ 分别与分子间吸引和分子体积有关。气体不液化，且 $V\gg b$；定容热容 $C_V$ 为常数，$U,S$ 分别为内能和熵。

I. 推导麦克斯韦关系 $(\partial S/\partial V)_T=(\partial p/\partial T)_V$，可使用 $A=U-TS$。

II. 证明 $(\partial U/\partial V)_T=T(\partial p/\partial T)_V-p$。

III. 该气体经历可逆卡诺循环：A→B 为温度 $T_2$ 的等温膨胀，B→C 为绝热膨胀，C→D 为温度 $T_1$ 的等温压缩，D→A 为绝热压缩。各状态体积分别为 $V_A,V_B,V_C,V_D$。求 A→B 和 C→D 时气体吸收的热量，分别用 $V_A,V_B,T_2$ 和 $V_C,V_D,T_1$ 表示。

IV. 用 $V_B,V_C$ 表示 $T_1/T_2$。

V. 求该卡诺循环效率，并与使用理想气体的情形比较。

VI. 同一气体经历可逆循环 E→F→G→H→E：依次为绝热压缩、定容加热、绝热膨胀、定容冷却。E、F 的温度为 $T_E,T_F$，体积为 $V_E,V_F$。图示的 $T$–$S$ 区域可分解为无限小卡诺循环 K→L→M→J→K。证明所有小循环的效率相等。设压缩比 $\epsilon=V_E/V_F$，求以 $\epsilon,V_F$ 表示的总效率。

## **Kai**

### I

$A=U-TS$ の全微分は

$$
dA=-S\,dT-p\,dV.
$$

混合偏微分が等しいことから

$$
\boxed{\left(\frac{\partial S}{\partial V}\right)_T
=\left(\frac{\partial p}{\partial T}\right)_V}.
$$

### II

第一法則を温度一定で $V$ に関して微分し、I を用いれば

$$
\boxed{\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial S}{\partial V}\right)_T-p
=T\left(\frac{\partial p}{\partial T}\right)_V-p}.
$$

この気体では $p=RT/(V-b)-a/V^2$ なので $(\partial U/\partial V)_T=a/V^2$。したがって

$$
dU=C_V\,dT+\frac a{V^2}\,dV,
\qquad
\boxed{dS=\frac{C_V}{T}\,dT+\frac R{V-b}\,dV}.
$$

### III

等温過程では $\delta Q=T\,dS=RT\,dV/(V-b)$ なので、

$$
\boxed{Q_{AB}=RT_2\log\frac{V_B-b}{V_A-b}},
\qquad
\boxed{Q_{CD}=RT_1\log\frac{V_D-b}{V_C-b}}.
$$

$Q_{AB}>0$、$Q_{CD}<0$ である。

### IV

可逆断熱過程では $dS=0$ である。積分すると

$$
C_V\log T+R\log(V-b)=\text{一定},
\qquad T(V-b)^{R/C_V}=\text{一定}.
$$

よって B→C について

$$
\boxed{\frac{T_1}{T_2}=\left(\frac{V_B-b}{V_C-b}\right)^{R/C_V}}.
$$

### V

二つの断熱過程から

$$
\frac{V_B-b}{V_A-b}=\frac{V_C-b}{V_D-b}.
$$

したがって

$$
\boxed{\eta_C=1+\frac{Q_{CD}}{Q_{AB}}=1-\frac{T_1}{T_2}}.
$$

同じ高温・低温熱源のもとでは、理想気体を用いる場合と効率は等しい。

### VI

エントロピーを積分すると

$$
S=C_V\log T+R\log(V-b)+S_0.
$$

等しい $S$ における上側の定容曲線 $V=V_F$ と下側の曲線 $V=V_E$ の温度比は

$$
\frac{T_{\rm low}(S)}{T_{\rm high}(S)}
=\left(\frac{V_F-b}{V_E-b}\right)^{R/C_V}=q_0
$$

であり、$S$ によらない。すべての微小カルノーサイクルの効率は $1-q_0$ となる。

全体でも $Q_{\rm out}=q_0Q_{\rm in}$ なので、$V_E=\epsilon V_F$ を代入して

$$
\boxed{\eta=1-\left(\frac{V_F-b}{\epsilon V_F-b}\right)^{R/C_V}}.
$$

