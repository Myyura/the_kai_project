---
sidebar_label: "2016年8月実施 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Otto-Cycle
  - Physics.Thermodynamics.Diesel-Cycle
  - Physics.Thermodynamics.Entropy
---

# 九州大学 工学府 機械系専攻 2016年8月実施 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

理想気体の可逆ガスサイクル A は、断熱圧縮 $1\to2$、等積加熱 $2\to3$、断熱膨張 $3\to4$、等積放熱 $4\to5$、等圧放熱 $5\to1$ からなる。各状態の比体積を $v_i$ とし、$v_1/v_2=\varepsilon_C$、$v_4/v_3=\varepsilon_E$、$\varepsilon_C<\varepsilon_E$ とする。温度 $T_1,T_3$、一定の定積比熱 $c_v$、比熱比 $\kappa$ を用いて答えよ。（60 点）

1. $T_2,T_4,T_5$ を求めよ。
2. 各過程の比エントロピー変化 $\Delta s_{12},\Delta s_{23},\Delta s_{34},\Delta s_{45},\Delta s_{51}$ を求めよ。
3. A の断熱膨張を $v=v_1$ の状態 4B で止め、等積放熱で 1 に戻るサイクル B を考える。A、B の $T$–$s$ 線図を同じ図に描き、熱効率を比較して理由を述べよ。
4. 1、2 は B と同じだが、$2\to3\mathrm C$ を等圧加熱、$3\mathrm C\to4\mathrm C$ を断熱膨張、$4\mathrm C\to1$ を等積放熱とする C を考える。C の加熱量は B と同じである。同じ $T$–$s$ 図に C を描き、B と C の効率を比較して理由を述べよ。

![T–s 線図の解答座標（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-1-original.png)

#### 题目描述

理想气体循环 A 包含等熵压缩、定容加热、等熵膨胀、定容放热、定压放热，压缩比 $\varepsilon_C$ 小于膨胀比 $\varepsilon_E$。给定 $T_1,T_3,c_v,\kappa$，求其余温度及各段熵变。将膨胀提前结束在初始体积、再定容放热得到 B；将 B 的定容加热改为等热量定压加热得到 C。画三者的 $T$–$s$ 图，比较 A 与 B、B 与 C 的效率。

## **Kai**

### (1)

断熱過程では $Tv^{\kappa-1}$ が一定、$5\to1$ では $T/v$ が一定なので

$$
\boxed{T_2=T_1\varepsilon_C^{\kappa-1},\qquad
T_4=T_3\varepsilon_E^{1-\kappa},\qquad
T_5=T_1\frac{\varepsilon_E}{\varepsilon_C}.}
$$

### (2)

可逆断熱では $ds=0$、等積では $ds=c_vdT/T$、等圧では $ds=\kappa c_vdT/T$。したがって

$$
\boxed{\Delta s_{12}=\Delta s_{34}=0,}
$$

$$
\boxed{\Delta s_{23}=c_v\ln\frac{T_3}{T_1\varepsilon_C^{\kappa-1}},\qquad
\Delta s_{45}=c_v\ln\frac{T_1\varepsilon_E^\kappa}{T_3\varepsilon_C},}
$$

$$
\boxed{\Delta s_{51}=\kappa c_v\ln\frac{\varepsilon_C}{\varepsilon_E}.}
$$

全過程の和はゼロとなる。

### (3)

![三つのサイクルの T–s 線図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-1-cycles.svg)

A と B の加熱量はともに $q_{\mathrm{in}}=c_v(T_3-T_2)$ である。B の膨張終点は $T_{4B}=T_3\varepsilon_C^{1-\kappa}$。放熱量の差は

$$
q_{\mathrm{out},B}-q_{\mathrm{out},A}
=c_v\left[T_{4B}-T_4-(\kappa-1)(T_5-T_1)\right].
$$

$r=\varepsilon_E/\varepsilon_C>1$、$t=T_{4B}/T_1$ とおく。A の $4\to5$ が放熱である条件 $T_4\ge T_5$ から $t\ge r^\kappa$。よって

$$
\frac{q_{\mathrm{out},B}-q_{\mathrm{out},A}}{c_vT_1}
=t(1-r^{1-\kappa})-(\kappa-1)(r-1)
\ge r^\kappa-\kappa r+\kappa-1>0.
$$

最後の不等式は $r^\kappa$ の凸性による。等しい加熱量に対して A の放熱が小さいので $\boxed{\eta_A>\eta_B}$。

### (4)

等加熱量の条件から

$$
\kappa c_v(T_{3C}-T_2)=c_v(T_3-T_2),\qquad
T_{3C}=T_2+\frac{T_3-T_2}{\kappa}.
$$

$a=T_3/T_2>1$、$b=T_{3C}/T_2=1+(a-1)/\kappa$ とする。等圧加熱では $v_{3C}/v_2=b$ だから

$$
T_{4C}=T_2\frac{b^\kappa}{\varepsilon_C^{\kappa-1}},\qquad
T_{4B}=T_2\frac a{\varepsilon_C^{\kappa-1}}.
$$

凸性により $b^\kappa>1+\kappa(b-1)=a$ なので $T_{4C}>T_{4B}$。C の等積放熱量の方が大きく、同じ加熱量に対して $\boxed{\eta_B>\eta_C}$ となる。
