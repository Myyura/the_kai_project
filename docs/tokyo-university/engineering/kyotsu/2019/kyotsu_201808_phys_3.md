---
sidebar_label: '2018年8月実施 物理学 第3問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Carnot-Cycle-and-Heat-Engine-Efficiency
  - Physics.Thermodynamics.Helmholtz-Free-Energy-Differential
---

# 東京大学 工学系研究科 2018年8月実施 物理学 第3問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

$n$ mol の理想気体について、第一法則を $d'Q+d'W=dU$ と書く。$d'Q$ は気体が受け取る熱、$d'W$ は気体に加えられる仕事である。圧力、体積、温度を $P,V,T$、気体定数を $R$、一定のモル定積比熱を $C_V=(1/n)(\partial U/\partial T)_V$ とする。

1. 可逆断熱過程について $nC_VdT+P\,dV=0$ を示せ。
2. 一定のモル定圧比熱を $C_P$、$\gamma=C_P/C_V$ とし、$C_P-C_V=R$ を用いて $TV^{\gamma-1}=\text{一定}$ を導け。

### II

断面積 $Z$ のシリンダーとピストンに囲まれた $n$ mol の理想気体が、A→B 等温膨張、B→C 断熱膨張、C→D 等温圧縮、D→A 断熱圧縮のサイクルを行う。各状態の体積は $V_1,V_2,V_3,V_4$、等温枝の温度はそれぞれ $T_1>T_2$ である。

C→D だけで一定の大きさ $f$ の摩擦力がピストンに働き、摩擦で発生する熱はすべて気体に入る。他の過程に摩擦はない。

1. A→B で外界から吸収する熱量 $Q_1$ を求めよ。
2. C→D で外界から受け取る熱量 $Q_2$ を求めよ。放熱の場合は負とする。
3. サイクルの効率 $\eta=(Q_1+Q_2)/Q_1$ を $n,R,f,Z,T_1,T_2,V_3,V_4$ で表せ。

![摩擦を伴うピストンと熱サイクル](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2019/kyotsu_201808_phys_3_diagram_audited.svg)

### III

可逆的に放電する電池を考える。体積変化は無視し、放電電気量が $dq$ 増す間に起電力 $E$ の電池がする仕事を $E\,dq$ とする。第一法則は $dU=T\,dS-E\,dq$、ヘルムホルツ自由エネルギーは $F=U-TS$ である。

1. $F$ の全微分から $E=-(\partial F/\partial q)_T$、$S=-(\partial F/\partial T)_q$ を示せ。
2. $(\partial U/\partial q)_T=-E+T(\partial E/\partial T)_q$ を示せ。
3. 起電力が $E=0.49+0.0002T\,\mathrm V$ の電池を、$T=300\,\mathrm K$ に保って $200\,\mathrm{mA}$ で $10\,\mathrm s$ 放電させる。この間に電池が吸収する熱量を求めよ。放電電気量は $dq=It$ とし、この間の温度・起電力の変化を無視する。

#### 题目描述

I. 对 $n$ mol 理想气体，第一定律写为 $d'Q+d'W=dU$，热量和外界对气体做功均以输入为正。压强、体积、温度为 $P,V,T$，气体常数为 $R$，摩尔定容热容 $C_V=(1/n)(\partial U/\partial T)_V$ 为常数。

1. 证明可逆绝热过程中 $nC_VdT+P\,dV=0$。
2. 摩尔定压热容 $C_P$ 也恒定，令 $\gamma=C_P/C_V$，利用 $C_P-C_V=R$ 推导 $TV^{\gamma-1}$ 为常量。

II. 横截面积为 $Z$ 的气缸内有 $n$ mol 理想气体。依次经历 A→B 等温膨胀、B→C 绝热膨胀、C→D 等温压缩、D→A 绝热压缩；各状态体积为 $V_1,V_2,V_3,V_4$，两条等温线温度为 $T_1>T_2$。只有 C→D 存在大小恒为 $f$ 的活塞摩擦力，摩擦热全部进入气体，其余过程无摩擦。

1. 求 A→B 从外界吸收的热量 $Q_1$。
2. 求 C→D 从外界吸收的热量 $Q_2$，放热取负。
3. 用 $n,R,f,Z,T_1,T_2,V_3,V_4$ 表示循环效率 $\eta=(Q_1+Q_2)/Q_1$。

III. 电池可逆放电，忽略体积变化。放出电量增加 $dq$ 时，电动势为 $E$ 的电池对外做功 $E\,dq$，第一定律为 $dU=T\,dS-E\,dq$，亥姆霍兹自由能 $F=U-TS$。

1. 从 $dF$ 证明 $E=-(\partial F/\partial q)_T$、$S=-(\partial F/\partial T)_q$。
2. 证明 $(\partial U/\partial q)_T=-E+T(\partial E/\partial T)_q$。
3. 电动势为 $E=0.49+0.0002T\,\mathrm V$。在 $300\,\mathrm K$ 下以 $200\,\mathrm{mA}$ 放电 $10\,\mathrm s$，求电池吸收的热量。放出电量为 $dq=It$，忽略这段时间内温度和电动势的变化。

## **Kai**

### I

可逆断熱では $d'Q=0$、$d'W=-P\,dV$、$dU=nC_VdT$。よって

$$
\boxed{nC_VdT+P\,dV=0}.
$$

$P=nRT/V$ を代入して積分すると

$$
\frac{dT}{T}+\frac R{C_V}\frac{dV}{V}=0,
\qquad \boxed{TV^{\gamma-1}=\text{一定}}.
$$

### II

#### II.1

等温では $\Delta U=0$ だから

$$
\boxed{Q_1=\int_{V_1}^{V_2}\frac{nRT_1}{V}\,dV
=nRT_1\log\frac{V_2}{V_1}}.
$$

#### II.2

C→D のピストン移動距離は $(V_3-V_4)/Z$ で、摩擦による入熱は $f(V_3-V_4)/Z$。気体の第一法則は

$$
0=Q_2+\frac{f(V_3-V_4)}Z-\int_{V_3}^{V_4}P\,dV.
$$

したがって

$$
\boxed{Q_2=nRT_2\log\frac{V_4}{V_3}-\frac{f(V_3-V_4)}Z}.
$$

#### II.3

二つの断熱枝から $V_2/V_1=V_3/V_4$。外部への正味仕事は $Q_1+Q_2$ なので

$$
\boxed{\eta=1+\frac{Q_2}{Q_1}
=1-\frac{T_2}{T_1}-\frac{f(V_3-V_4)}{ZnRT_1\log(V_3/V_4)}}.
$$

摩擦がない場合のカルノー効率から、摩擦損失に対応する項だけ低下する。

### III

#### III.1

$dU=T\,dS-E\,dq$ より

$$
\boxed{dF=-S\,dT-E\,dq},\qquad
\boxed{S=-\left(\frac{\partial F}{\partial T}\right)_q},\qquad
\boxed{E=-\left(\frac{\partial F}{\partial q}\right)_T}.
$$

#### III.2

混合偏微分の交換から $(\partial S/\partial q)_T=(\partial E/\partial T)_q$。したがって

$$
\boxed{\left(\frac{\partial U}{\partial q}\right)_T
=-E+T\left(\frac{\partial E}{\partial T}\right)_q}.
$$

#### III.3

$\Delta q=0.200\times10=2.00\,\mathrm C$。可逆・等温放電の吸熱量は

$$
\boxed{Q=T\Delta S
=T\left(\frac{\partial E}{\partial T}\right)_q\Delta q
=300\times0.0002\times2.00=0.12\,\mathrm J}.
$$

