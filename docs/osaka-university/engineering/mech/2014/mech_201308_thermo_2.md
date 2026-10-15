---
sidebar_label: "2014年度 問題2（熱工学）"
tags:
  - Osaka-University
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
---

# 大阪大学 工学研究科 機械工学専攻 2014年度 熱工学 問題2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

圧力 $p$、体積 $v$、絶対温度 $T$ の間に次の状態方程式が成立する気体を考える。

$$
p(v-nb)=nR_0T\exp\left(-\frac{na}{vR_0T}\right).
$$

$n$ はモル数、$R_0$ は一般気体定数、$a,b$ は定数である。以下では **1モル**の気体について答えよ。

1. 気体への微小熱量を $\Delta q$、外部への仕事を $\Delta w$、内部エネルギー変化を $\Delta u$ として、熱力学第一法則を示せ。
2. 定積で微小熱量を加え、温度が $\Delta T$ 上昇した。定積モル比熱 $c_v=(\Delta q/\Delta T)_v$ を用いて $\Delta u$ を表せ。
3. 定圧で加熱したときの $(\Delta v/\Delta T)_p$、$\Delta w$、$\Delta u$ を $v,T,\Delta T,R_0,a,b,c_v$ のうち必要な量で表せ。ただし

$$
\Delta u=c_v\Delta T+\left[T\left(\frac{\Delta p}{\Delta T}\right)_v-p\right]\Delta v
$$

を用いてよい。

4. 定圧モル比熱を $c_p=(\Delta q/\Delta T)_p$ として、$c_p-c_v$ を $v,T,R_0,a,b$ で表せ。

#### 题目描述

气体状态方程为 $p(v-nb)=nR_0T\exp[-na/(vR_0T)]$，$n$ 为摩尔数，$a,b$ 为常数。以下均考虑1 mol气体。(1)写出以吸热 $\Delta q$、对外做功 $\Delta w$ 和内能变化 $\Delta u$ 表示的第一定律。(2)定容升温 $\Delta T$ 时用 $c_v$ 表示内能变化。(3)定压加热时求体积对温度的响应、做功和内能变化，可使用题给内能微分关系。(4)求 $c_p-c_v$。

## **Kai**

### (1), (2)

第一法則および定積条件から

$$
\boxed{\Delta q=\Delta u+\Delta w},\qquad
\boxed{(\Delta u)_v=c_v\Delta T}.
$$

以下は微小量の一次までを考える。

### (3)

$E=\exp[-a/(vR_0T)]$、$D=v^2R_0T-a(v-b)$ とおく。1モルの状態方程式は $p=R_0TE/(v-b)$ であり、その対数微分より

$$
\frac{dp}{p}=\left(\frac1T+\frac{a}{vR_0T^2}\right)dT
+\left(-\frac1{v-b}+\frac{a}{v^2R_0T}\right)dv.
$$

$dp=0$ とおけば

$$
\boxed{\left(\frac{\Delta v}{\Delta T}\right)_p
=\frac{v(v-b)(vR_0T+a)}{TD}}.
$$

したがって

$$
\boxed{\Delta w=p\Delta v
=\frac{R_0v(vR_0T+a)E}{D}\,\Delta T}.
$$

また、$T(\partial p/\partial T)_v-p=ap/(vR_0T)$ なので

$$
\boxed{\Delta u=\left[c_v+\frac{a(vR_0T+a)E}{TD}\right]\Delta T}.
$$

これらは $v>b$、$D\ne0$ の通常の微分可能な状態での式であり、機械的安定領域では $D>0$ である。

### (4)

定圧で $c_p\Delta T=\Delta u+\Delta w$ より

$$
\boxed{c_p-c_v=\frac{(vR_0T+a)^2}{T\{v^2R_0T-a(v-b)\}}
\exp\left(-\frac{a}{vR_0T}\right)}.
$$

$a=b=0$ では理想気体の関係 $c_p-c_v=R_0$ に戻る。
