---
sidebar_label: "2019年度 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Conduction-with-Heat-Generation
  - Engineering.Heat-Transfer.External-Forced-Convection
  - Engineering.Heat-Transfer.Biot-Number
---

# 九州大学 工学府 機械系専攻 2019年度 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

A 君は、水平に置いた長さ $L$、半径 $r_w$、一定熱伝導率 $k$ の細い円柱に流体を直交して流し、円柱を一様に通電加熱する定常実験を行った。電圧・電流から電気抵抗を求め、その温度依存性により円柱の平均温度 $T_m$ を測定した。発熱量 $\dot Q$ から正しく求めた表面熱流束 $q_w$ と温度差 $T_m-T_f$ を使って熱伝達率を計算したところ、B 君に誤りを指摘された。

$T_f$ は流体温度である。熱伝達率は一様、円柱は十分長いものとして、次に答えよ。（60 点）

1. 単位体積・単位時間当たりの発熱量 $\dot q_v$ と表面熱流束 $q_w$ を求めよ。
2. A 君の求めた熱伝達率 $h_A$ を表せ。
3. B 君の指摘の理由を述べ、$h_A$ が正しい値 $h$ より高いか低いか答えよ。
4. 次の熱伝導方程式を解く際の中心の境界条件を示せ。

$$
\frac1r\frac{d}{dr}\left(kr\frac{dT}{dr}\right)+\dot q_v=0.
$$

5. 表面温度を $T_w$ として半径方向温度分布を求めよ。
6. 円柱の平均温度 $T_m$ と表面温度 $T_w$ の差を求めよ。
7. 測定値 $T_m,\dot Q$ を用いて正しい $h$ を表せ。
8. $h_A$ が正しい $h$ と 10% 以内の差で一致するには、測定温度上昇 $T_m-T_f$ がいくら以上となるよう加熱すればよいか。
9. 内部の温度分布の大きさと表面・流体間の温度差との比を判断する無次元数の名称・定義を示せ。代表寸法は $r_w$ としてよい。その値がどうなら A 君の方法でもほぼ正しいか。

#### 题目描述

长 $L$、半径 $r_w$、导热率 $k$ 的圆柱均匀电加热，总功率 $\dot Q$，外部温度 $T_f$ 的流体横向流过。由电阻测到的是圆柱平均温度 $T_m$，A 却用它代替表面温度计算换热系数。求体积发热率、表面热流、A 的估计值及偏差方向、中心边界条件、温度分布、平均与表面温差、正确的换热系数、10% 相对误差条件，以及控制内部温差影响的无量纲数。稳态、导热率和换热系数恒定，忽略端部影响。

## **Kai**

### (1)

$$
\boxed{\dot q_v=\frac{\dot Q}{\pi r_w^2L},\qquad
q_w=\frac{\dot Q}{2\pi r_wL}=\frac{\dot q_vr_w}{2}.}
$$

### (2)

$$
\boxed{h_A=\frac{q_w}{T_m-T_f}
=\frac{\dot Q}{2\pi r_wL(T_m-T_f)}.}
$$

### (3)

対流の駆動温度差は $T_w-T_f$ である。内部発熱のため $T_m>T_w$ であり、$T_m-T_f$ を使うと分母を過大評価する。したがって $\boxed{h_A<h}$。

### (4)

中心の対称性と温度の有限性から

$$
\boxed{T'(0)=0.}
$$

### (5)

方程式を積分し、中心条件および $T(r_w)=T_w$ を使うと

$$
krT'=-\frac{\dot q_vr^2}{2},
\qquad\boxed{T(r)=T_w+\frac{\dot q_v}{4k}(r_w^2-r^2).}
$$

### (6)

円柱の体積平均は半径に比例する重みをもつので

$$
T_m-T_w=\frac{2}{r_w^2}\int_0^{r_w}[T(r)-T_w]r\,dr
=\frac{\dot q_vr_w^2}{8k}
=\boxed{\frac{\dot Q}{8\pi kL}}.
$$

### (7)

$\delta=\dot Q/(8\pi kL)$ とおけば $T_w=T_m-\delta$ であり、

$$
\boxed{h=\frac{\dot Q}{2\pi r_wL\left(T_m-T_f-\dfrac{\dot Q}{8\pi kL}\right)}.}
$$

加熱時には分母の温度差が正でなければならない。

### (8)

正しい $h$ を基準に相対誤差をとると

$$
\frac{h-h_A}{h}=\frac{\delta}{T_m-T_f}\le0.10.
$$

したがって

$$
\boxed{T_m-T_f\ge10\delta=\frac{5\dot Q}{4\pi kL}.}
$$

なお、$h,k$ を一定とするこのモデルでは $\dot Q$ と $T_m-T_f$ が比例するため、加熱量だけを増やして相対誤差を減らせるわけではない。

### (9)

円柱自身の熱伝導率で定義する **Biot 数**

$$
\boxed{\mathrm{Bi}=\frac{hr_w}{k}}
$$

を用いる。実際に

$$
\frac{T_m-T_w}{T_w-T_f}=\frac{\mathrm{Bi}}4,
\qquad \frac{h-h_A}{h}=\frac{\mathrm{Bi}}{4+\mathrm{Bi}}.
$$

したがって $\mathrm{Bi}\ll1$ なら内部温度差は小さく、A の方法はよい近似となる。
