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

次の状態変化を行うガスサイクルAがある。1→2は断熱圧縮過程，2→3は等積加熱過程，3→4は断熱膨張過程，4→5は等積放熱過程，5→1は等圧放熱過程で，全ての状態変化は可逆過程である。状態1，2，3，4における作動ガスの比体積を $v_1,v_2,v_3,v_4$ とするとき，$v_1/v_2=\varepsilon_C$，$v_4/v_3=\varepsilon_E$，$\varepsilon_C<\varepsilon_E$ とする。状態1および状態3における作動ガスの温度は，それぞれ $T_1,T_3$ である。作動ガスは温度によらず比熱が一定の理想気体とし，その定積比熱を $c_v$，比熱比を $\kappa$ とする。以下の問いに答えよ。（60点）

**(1)** 状態2，状態4，状態5における作動ガスの温度 $T_2,T_4,T_5$ を，$T_1,T_3,\varepsilon_C,\varepsilon_E,\kappa$ を用いて表せ。

**(2)** 作動ガスの比エントロピーを $s$ とし，1→2，2→3，3→4，4→5，5→1の各過程における作動ガスの比エントロピー変化量 $\Delta s_{12},\Delta s_{23},\Delta s_{34},\Delta s_{45},\Delta s_{51}$ を $T_1,T_3,\varepsilon_C,\varepsilon_E,c_v,\kappa$ を用いて表せ。

**(3)** サイクルAの状態3からの断熱膨張過程を作動ガスの比体積が $v_1$ となる状態4Bで止め，その状態4Bから状態1に等積放熱過程により戻るサイクルBを考える。サイクルA，Bの $T$–$s$ 線図を同じ線図上に描き，サイクルAとBの熱効率のうち，どちらの方が大きいかを示し，その理由を説明せよ。

**(4)** 状態1，状態2は，サイクルBと同一であるが，状態2から等圧加熱過程で状態3Cとなり，さらに状態3Cから断熱膨張過程で状態4Cとなり，状態4Cから等積放熱過程により状態1に戻るサイクルCがある。ただし，2→3Cでの加熱量は，サイクルBでの加熱量と同一である。このサイクルCの $T$–$s$ 線図を問(3)と同じ線図上に描き，サイクルBとCの熱効率のうち，どちらの方が大きいかを示し，その理由を説明せよ。

![原題のT–s線図解答座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-1-original.png)

### 题目描述

气体循环A由以下过程构成：1→2绝热压缩，2→3等容加热，3→4绝热膨胀，4→5等容放热，5→1等压放热；所有状态变化均可逆。状态1、2、3、4的比体积分别为 $v_1,v_2,v_3,v_4$，满足 $v_1/v_2=\varepsilon_C$、$v_4/v_3=\varepsilon_E$、$\varepsilon_C<\varepsilon_E$。状态1、3的温度分别为 $T_1,T_3$。工质为比热不随温度变化的理想气体，定容比热为 $c_v$，比热比为 $\kappa$。回答下列问题。（60分）

**(1)** 用 $T_1,T_3,\varepsilon_C,\varepsilon_E,\kappa$ 表示状态2、4、5的温度 $T_2,T_4,T_5$。

**(2)** 以 $s$ 表示工质的比熵，用 $T_1,T_3,\varepsilon_C,\varepsilon_E,c_v,\kappa$ 表示1→2、2→3、3→4、4→5、5→1各过程的比熵变化量 $\Delta s_{12},\Delta s_{23},\Delta s_{34},\Delta s_{45},\Delta s_{51}$。

**(3)** 将循环A从状态3开始的绝热膨胀在比体积达到 $v_1$ 的状态4B停止，再由4B等容放热回到状态1，构成循环B。在同一张 $T$–$s$ 图中画出A、B，指出哪一个循环热效率较高并解释原因。

**(4)** 循环C的状态1、2与B相同，但从状态2等压加热到状态3C，再从3C绝热膨胀到状态4C，最后由4C等容放热返回状态1。2→3C的加热量与循环B的加热量相同。在(3)的同一张 $T$–$s$ 图中画出C，指出B、C中哪一个热效率较高并解释原因。

## **Kai**

### (1)

断熱過程では $Tv^{\kappa-1}$ が一定、$5\to1$ では $T/v$ が一定なので

$$
\boxed{\begin{gathered}
T_2=T_1\varepsilon_C^{\kappa-1},\\
T_4=T_3\varepsilon_E^{1-\kappa},\\
T_5=T_1\frac{\varepsilon_E}{\varepsilon_C}.
\end{gathered}}
$$

### (2)

可逆断熱では $ds=0$、等積では $ds=c_vdT/T$、等圧では $ds=\kappa c_vdT/T$。したがって

$$
\boxed{\Delta s_{12}=\Delta s_{34}=0,}
$$

$$
\boxed{\begin{gathered}
\Delta s_{23}=c_v\ln\frac{T_3}{T_1\varepsilon_C^{\kappa-1}},\\
\Delta s_{45}=c_v\ln\frac{T_1\varepsilon_E^\kappa}{T_3\varepsilon_C},
\end{gathered}}
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
\begin{gathered}
\frac{q_{\mathrm{out},B}-q_{\mathrm{out},A}}{c_vT_1}\\
=t(1-r^{1-\kappa})-(\kappa-1)(r-1)\\
\ge r^\kappa-\kappa r+\kappa-1>0.
\end{gathered}
$$

最後の不等式は $r^\kappa$ の凸性による。等しい加熱量に対して A の放熱が小さいので $\boxed{\eta_A>\eta_B}$。

### (4)

等加熱量の条件から

$$
\begin{gathered}
\kappa c_v(T_{3C}-T_2)=c_v(T_3-T_2),\\
T_{3C}=T_2+\frac{T_3-T_2}{\kappa}.
\end{gathered}
$$

$a=T_3/T_2>1$、$b=T_{3C}/T_2=1+(a-1)/\kappa$ とする。等圧加熱では $v_{3C}/v_2=b$ だから

$$
T_{4C}=T_2\frac{b^\kappa}{\varepsilon_C^{\kappa-1}},\qquad
T_{4B}=T_2\frac a{\varepsilon_C^{\kappa-1}}.
$$

凸性により $b^\kappa>1+\kappa(b-1)=a$ なので $T_{4C}>T_{4B}$。C の等積放熱量の方が大きく、同じ加熱量に対して $\boxed{\eta_B>\eta_C}$ となる。
