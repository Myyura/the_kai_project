---
sidebar_label: '2013年8月実施 物理学3'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Maxwell-Relations
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
  - Physics.Thermodynamics.Intercooled-Brayton-Cycle
---

# 東京大学 工学系研究科 2013年8月実施 物理学3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

気体を作動流体とする熱過程を考える。圧力を $P$、1 モルあたりの体積を $V$、絶対温度を $T$、気体定数を $R$、モル内部エネルギーを $U$、モルエントロピーを $S$ とする。モルエンタルピー $H=U+PV$、定積比熱 $C_V=(\partial U/\partial T)_V$、定圧比熱 $C_P=(\partial H/\partial T)_P$、比熱比 $\kappa=C_P/C_V$ を定義する。全状態変化は準静的で、$dU=T\,dS-P\,dV$ が成り立つとしてよい。

### I

状態方程式によらず、次の各関係式を導け。

$$
C_V=T\left(\frac{\partial S}{\partial T}\right)_V, \tag{1}
$$

$$
C_P=T\left(\frac{\partial S}{\partial T}\right)_P, \tag{2}
$$

$$
C_P-C_V=T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P, \tag{3}
$$

$$
\left(\frac{\partial P}{\partial V}\right)_S=\kappa\left(\frac{\partial P}{\partial V}\right)_T. \tag{4}
$$

必要なら、マクスウェル関係式と連鎖律

$$
\left(\frac{\partial S}{\partial V}\right)_T=\left(\frac{\partial P}{\partial T}\right)_V, \tag{5}
$$

$$
\left(\frac{\partial S}{\partial T}\right)_V
\left(\frac{\partial T}{\partial V}\right)_S
\left(\frac{\partial V}{\partial S}\right)_T=-1, \tag{6}
$$

$$
\left(\frac{\partial S}{\partial T}\right)_P
\left(\frac{\partial T}{\partial P}\right)_S
\left(\frac{\partial P}{\partial S}\right)_T=-1 \tag{7}
$$

を用いてよい。

### II

理想気体の状態方程式 $PV=RT$ に従い、$R,C_P$ がともに定数である場合を考える。

1. 式 (3) から $\kappa$ が定数であることを示せ。
2. 式 (4) から断熱過程では $PV^\kappa=\text{一定}$ となることを示せ。

### III

図の $T$–$S$ 線図に示す理想的な中間冷却ガスタービンサイクル O→A→B→C→D→E→O を考える。作動流体は II の理想気体である。各過程は、O$(P_0,T_0)$→A$(P_A,T_A)$ が断熱圧縮、A→B$(P_B,T_B)$ が定圧冷却、B→C$(P_C,T_C)$ が断熱圧縮、C→D$(P_D,T_D)$ が定圧加熱、D→E$(P_E,T_E)$ が断熱膨張、E→O が定圧冷却である。

$$
P_D=P_C\ge P_B=P_A\ge P_0=P_E,
\qquad T_B=T_0.
$$

最高最低温度比を $\tau=T_D/T_0$、全体圧力比を $r=P_C/P_0$、O→A の圧力比を $r_{OA}=P_A/P_0$、1 モルの流体が 1 サイクルにする仕事を $W$ とする。

1. $T_C$ を $T_0,\kappa,r,r_{OA}$ で表せ。
2. $T_E$ を $T_0,\kappa,\tau,r$ で表せ。
3. 次の式を用いて、$W$ を $C_P,T_0,\kappa,\tau,r,r_{OA}$ で表せ。

$$
W=-C_P\{(T_A-T_0)+(T_C-T_B)+(T_E-T_D)\}. \tag{10}
$$

4. $T_0,\tau,r$ を固定したとき、$W$ を最大にする $r_{OA}$ を $r$ で表し、そのときの $W$ を $C_P,T_0,\kappa,\tau,r$ で表せ。

![中間冷却ガスタービンサイクルの温度エントロピー線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_phys_3_cycle_audited.svg)

#### 题目描述

考虑以气体为工作流体的热过程。压力为 $P$，每摩尔体积为 $V$，绝对温度为 $T$，气体常数为 $R$，摩尔内能为 $U$，摩尔熵为 $S$。定义摩尔焓 $H=U+PV$、定容热容 $C_V=(\partial U/\partial T)_V$、定压热容 $C_P=(\partial H/\partial T)_P$、热容比 $\kappa=C_P/C_V$。全部状态变化均为准静态，可假设 $dU=T\,dS-P\,dV$ 成立。

### I

不依赖具体状态方程，分别推导

$$
C_V=T\left(\frac{\partial S}{\partial T}\right)_V,
\qquad C_P=T\left(\frac{\partial S}{\partial T}\right)_P,
$$

$$
C_P-C_V=T\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P,
\qquad
\left(\frac{\partial P}{\partial V}\right)_S=\kappa\left(\frac{\partial P}{\partial V}\right)_T.
$$

必要时可使用麦克斯韦关系及偏导连锁关系

$$
\left(\frac{\partial S}{\partial V}\right)_T=\left(\frac{\partial P}{\partial T}\right)_V,
$$

$$
\left(\frac{\partial S}{\partial T}\right)_V
\left(\frac{\partial T}{\partial V}\right)_S
\left(\frac{\partial V}{\partial S}\right)_T=-1,
$$

$$
\left(\frac{\partial S}{\partial T}\right)_P
\left(\frac{\partial T}{\partial P}\right)_S
\left(\frac{\partial P}{\partial S}\right)_T=-1.
$$

### II

对于满足 $PV=RT$ 的理想气体，设 $R,C_P$ 均为常数。

1. 用 I 的热容差公式证明 $\kappa$ 为常数。
2. 用 I 的等熵与等温压力偏导关系证明绝热过程中 $PV^\kappa$ 不变。

### III

考虑图示的理想中间冷却燃气轮机循环 O→A→B→C→D→E→O，工作流体为 II 的理想气体。各过程为：O$(P_0,T_0)$→A$(P_A,T_A)$ 绝热压缩，A→B$(P_B,T_B)$ 等压冷却，B→C$(P_C,T_C)$ 绝热压缩，C→D$(P_D,T_D)$ 等压加热，D→E$(P_E,T_E)$ 绝热膨胀，E→O 等压冷却。已知

$$
P_D=P_C\ge P_B=P_A\ge P_0=P_E,
\qquad T_B=T_0.
$$

定义最高与最低温度比 $\tau=T_D/T_0$、总压比 $r=P_C/P_0$、O→A 压比 $r_{OA}=P_A/P_0$，以及每摩尔流体在一个循环内对外做功 $W$。

1. 用 $T_0,\kappa,r,r_{OA}$ 表示 $T_C$。
2. 用 $T_0,\kappa,\tau,r$ 表示 $T_E$。
3. 利用下式，用 $C_P,T_0,\kappa,\tau,r,r_{OA}$ 表示 $W$。

$$
W=-C_P\{(T_A-T_0)+(T_C-T_B)+(T_E-T_D)\}.
$$

4. 固定 $T_0,\tau,r$，求使 $W$ 最大的 $r_{OA}$，并用 $C_P,T_0,\kappa,\tau,r$ 表示最大功。

## **Kai**

### I

**式 (1)、(2).** $dV=0$ のとき $dU=T\,dS$ である。また、

$$
dH=d(U+PV)=T\,dS+V\,dP.
$$

したがって、

$$
\boxed{C_V=T\left(\frac{\partial S}{\partial T}\right)_V,\qquad
C_P=T\left(\frac{\partial S}{\partial T}\right)_P.}
$$

**式 (3).** $S=S(T,V)$ の合成関数の微分と式 (5) より、

$$
\frac{C_P}{T}
=\left(\frac{\partial S}{\partial T}\right)_V
+\left(\frac{\partial S}{\partial V}\right)_T\left(\frac{\partial V}{\partial T}\right)_P
=\frac{C_V}{T}
+\left(\frac{\partial P}{\partial T}\right)_V\left(\frac{\partial V}{\partial T}\right)_P.
$$

両辺に $T$ を掛ければ式 (3) を得る。

**式 (4).** 簡単のため $P_T=(\partial P/\partial T)_V$、$P_V=(\partial P/\partial V)_T$ と書く。$dS=(C_V/T)dT+P_TdV$ より、

$$
\left(\frac{\partial T}{\partial V}\right)_S=-\frac{TP_T}{C_V},\qquad
\left(\frac{\partial P}{\partial V}\right)_S
=P_V-\frac{TP_T^2}{C_V}.
$$

一方、定圧条件から $(\partial V/\partial T)_P=-P_T/P_V$ なので、式 (3) は $C_P-C_V=-TP_T^2/P_V$。よって、

$$
\boxed{\left(\frac{\partial P}{\partial V}\right)_S
=P_V\left(1+\frac{C_P-C_V}{C_V}\right)=\kappa P_V.}
$$

### II

**1.** 式 (3) に理想気体の偏導関数を代入すると、

$$
C_P-C_V=T\frac RV\frac RP=R,\qquad
\boxed{\kappa=\frac{C_P}{C_P-R}=\text{一定}.}
$$

**2.** 準静的断熱過程では $dS=0$。式 (4) より $dP/dV=-\kappa P/V$ だから、

$$
\frac{dP}{P}+\kappa\frac{dV}{V}=0
\quad\Longrightarrow\quad
\boxed{PV^\kappa=\text{一定}.}
$$

### III

**1–2.** $s=(\kappa-1)/\kappa$ とおく。断熱関係は $TP^{-s}=\text{一定}$ なので、

$$
T_A=T_0r_{OA}^s,\qquad
\boxed{T_C=T_0\left(\frac r{r_{OA}}\right)^s,\qquad T_E=\tau T_0r^{-s}.}
$$

**3.** 式 (10) に代入して、

$$
\boxed{W=C_PT_0\left[\tau(1-r^{-s})-r_{OA}^s-\left(\frac r{r_{OA}}\right)^s+2\right].}
$$

**4.** 相加相乗平均より、

$$
r_{OA}^s+\left(\frac r{r_{OA}}\right)^s\ge2r^{s/2}.
$$

等号は二段の圧力比が等しいときに成立する。したがって、

$$
\boxed{r_{OA}=\sqrt r,\qquad
W_{\max}=C_PT_0\left[\tau\left(1-r^{-(\kappa-1)/\kappa}\right)
-2r^{(\kappa-1)/(2\kappa)}+2\right].}
$$

