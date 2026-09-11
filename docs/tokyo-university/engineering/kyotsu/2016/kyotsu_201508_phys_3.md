---
sidebar_label: '2015年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
---

# 東京大学 工学系研究科 2015年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

理想気体（気体定数 $R$）を作動流体とする熱過程を考える。モル定積比熱 $C_V$ とモル定圧比熱 $C_P$ は一定とする。すべての状態変化は準静的として、計算過程も示せ。

### I

1 mol の気体の圧力、絶対温度、体積、内部エネルギー、エントロピーを $P,T,V,U,S$ とする。

1. $dU=C_VdT$ を示せ。
2. 温度と圧力が $dT,dP$ だけ変化するときの $dS$ を求めよ。
3. 温度 $T_0$、圧力 $P_0$ でのエントロピーを $S_0$ とするとき、$T,P$ での $S$ を求めよ。

### II

断熱壁で囲まれた容器内の気体を隔膜で二つに分けた平衡状態を a とする。各部分（気体 1、気体 2）の体積、圧力、モル数は $V_1,V_2$、$P_1,P_2$、$n_1,n_2$ で、$P_1\ne P_2$、温度は共通に $T_a$ である。隔膜が破れると、二つの気体は反応せずに混ざり、別の平衡状態 b に至る。

1. 最終圧力 $P_b$ を $P_1,P_2,n_1,n_2$ で表せ。
2. 状態 a から b へのエントロピー変化を求め、この過程が不可逆であることを示せ。

### III

図のカルノーサイクルを考える。A→B は断熱圧縮、B→C は温度 $T_1$ の等温膨張、C→D は断熱膨張、D→A は温度 $T_2<T_1$ の等温圧縮である。

1. B→C でエントロピーが増加するか減少するか、理由とともに答えよ。
2. $T$–$S$ 線図を示せ。
3. その線図から効率を導け。

![隔膜で区切られた容器とカルノーサイクル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2016/kyotsu_201508_phys_3_diagram_audited.svg)

#### 题目描述

考虑以理想气体为工质的热过程，气体常数为 $R$，摩尔定容、定压热容 $C_V,C_P$ 均为常数。题面总述要求将状态变化视为准静态，并写出计算过程。

I. 对 1 mol 气体，以 $P,T,V,U,S$ 表示压强、绝对温度、体积、内能和熵。

1. 证明 $dU=C_VdT$。
2. 求温度、压强改变 $dT,dP$ 时的熵变 $dS$。
3. 已知 $T_0,P_0$ 时熵为 $S_0$，求 $T,P$ 时的熵。

II. 刚性绝热容器内有一隔膜。初态 a 中两侧气体的体积、压强、物质的量分别为 $V_1,V_2$、$P_1,P_2$、$n_1,n_2$，压强不同，温度同为 $T_a$。隔膜破裂后两侧气体混合且不发生反应，最终达到平衡态 b。

1. 用 $P_1,P_2,n_1,n_2$ 表示最终压强 $P_b$。
2. 求总熵变，证明该过程不可逆。

III. 图示卡诺循环依次为 A→B 绝热压缩、B→C 在 $T_1$ 等温膨胀、C→D 绝热膨胀、D→A 在 $T_2<T_1$ 等温压缩。

1. 说明 B→C 的熵增减及原因。
2. 画出 $T$–$S$ 图。
3. 利用该图推导效率。

## **Kai**

### I

熱力学の恒等式と $PV=RT$ より

$$
\left(\frac{\partial U}{\partial V}\right)_T
=T\left(\frac{\partial P}{\partial T}\right)_V-P=0,
\qquad \boxed{dU=C_VdT}.
$$

$T dS=dU+P dV$、$dV/V=dT/T-dP/P$、$C_P=C_V+R$ を用いると

$$
\boxed{dS=C_P\frac{dT}{T}-R\frac{dP}{P}},\qquad
\boxed{S=S_0+C_P\log\frac{T}{T_0}-R\log\frac{P}{P_0}}.
$$

### II

#### II.1

容器全体で熱と仕事の授受がないので内部エネルギーが保存され、$T_b=T_a$。したがって

$$
P_b(V_1+V_2)=(n_1+n_2)RT_a,\qquad
\boxed{P_b=\frac{n_1+n_2}{n_1/P_1+n_2/P_2}}.
$$

#### II.2

異なる種類の気体が混合する場合、各成分の最終占有体積は $V=V_1+V_2$ である。エントロピーは状態量なので、同じ始終状態を結ぶ可逆等温膨張で計算して

$$
\boxed{\Delta S=R\left(n_1\log\frac{V}{V_1}+n_2\log\frac{V}{V_2}\right)>0}.
$$

同種の気体である場合は、混合による寄与を含めず

$$
\boxed{\Delta S=R\left(n_1\log\frac{P_1}{P_b}+n_2\log\frac{P_2}{P_b}\right)>0}.
$$

後者の正値性は、重み $n_i/(n_1+n_2)$ に対する幾何平均が調和平均 $P_b$ より大きいことによる（$P_1\ne P_2$）。いずれも断熱系の全エントロピーが増加するため不可逆である。

### III

B→C は吸熱を伴う可逆等温膨張なので、

$$
\boxed{S_C-S_B=\frac{Q_{\mathrm{in}}}{T_1}>0}.
$$

断熱枝では $S_A=S_B$、$S_C=S_D$ である。図の $T$–$S$ 平面で、A→B→C→D は時計回りの長方形となる。$\Delta S=S_C-S_B$ とおけば

$$
Q_{\mathrm{in}}=T_1\Delta S,\qquad
Q_{\mathrm{out}}=T_2\Delta S,\qquad
\boxed{\eta=\frac{(T_1-T_2)\Delta S}{T_1\Delta S}=1-\frac{T_2}{T_1}}.
$$

