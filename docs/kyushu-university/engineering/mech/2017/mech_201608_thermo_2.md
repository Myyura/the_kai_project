---
sidebar_label: "2016年8月実施 問2（熱工学）"
tags:
  - Kyushu-University
  - Engineering.Heat-Transfer.Transient-Conduction
  - Engineering.Heat-Transfer.Heat-Exchangers-and-Thermal-Resistance
---

# 九州大学 工学府 機械系専攻 2016年8月実施 熱工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図1のように，ヒータと平板（厚さ $L\,(\mathrm m)$）が接している。平板の熱伝導率は $k\,(\mathrm{W/(m\cdot K)})$，密度は $\rho\,(\mathrm{kg/m^3})$，比熱は $c\,(\mathrm{J/(kg\cdot K)})$ であり，これらは温度に関わらず一定である。ヒータの電源は切られていて，平板は一様な初期温度 $T_i\,(^\circ\mathrm C)$ である。以下の問いに答えよ。（50点）

![原題の図1：ヒータと平板](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-system.png)

**(1)** 時刻 $t=0$ で，ヒータにより平板を熱流束 $q\,(\mathrm{W/m^2})$ で加熱開始すると同時に，$x=L$ の面で温度 $T_f\,(^\circ\mathrm C)$ の流体に曝した（ただし，$T_f>T_i$）。平板と流体の間の熱伝達率を $h\,(\mathrm{W/(m^2\cdot K)})$ とする。加熱開始後の時刻 $t$ における平板内の温度分布 $T(x,t)\,(^\circ\mathrm C)$ を求める熱伝導方程式を書け。また，これを解くための初期条件1つと境界条件2つを示せ。

**(2)** 十分に時間が経過して定常状態になったとき，$x=0$ における平板温度 $T_0\,(^\circ\mathrm C)$ と $x=L$ における平板温度 $T_w\,(^\circ\mathrm C)$ をそれぞれ求めよ。ただし，$L,k,h,T_f,q$ 以外の記号を用いてはならない。導出過程も示すこと。

**(3)** 図2の①は $t=0$ における平板と流体の温度分布を，②は少し時間が経過した後の温度分布を示している。これにならって，十分に時間が経過して定常状態になったときの温度分布③を図示せよ。また，②と③の間の時刻における温度分布として最も適切なものを図中の(a)～(d)から選び，選んだ理由を文章で説明せよ。

![原題の図2：温度分布の候補](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-choices.png)

**(4)** $x=0$ における平板の温度を熱電対で計測することにした。熱電対の設置方法として最も適切なものを図3の(i)～(iv)から選べ。また，その理由を文章で説明せよ。ただし，熱電対とヒータ，平板は密着しているものとする。

![原題の図3：熱電対の設置方法](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-sensors.png)

#### 题目描述

如图1，加热器与厚度为 $L\,(\mathrm m)$ 的平板相接。平板的导热系数为 $k\,(\mathrm{W/(m\cdot K)})$、密度为 $\rho\,(\mathrm{kg/m^3})$、比热为 $c\,(\mathrm{J/(kg\cdot K)})$，三者均不随温度变化。加热器尚未通电，平板初始温度均匀，为 $T_i\,(^\circ\mathrm C)$。回答下列问题。（50分）

**(1)** 在 $t=0$ 时，加热器开始以热流密度 $q\,(\mathrm{W/m^2})$ 加热平板，同时使 $x=L$ 的表面暴露于温度为 $T_f\,(^\circ\mathrm C)$ 的流体，且 $T_f>T_i$。板与流体之间的换热系数为 $h\,(\mathrm{W/(m^2\cdot K)})$。写出求加热开始后时刻 $t$ 的板内温度分布 $T(x,t)\,(^\circ\mathrm C)$ 所用的导热方程，以及求解所需的1个初始条件和2个边界条件。

**(2)** 经过足够长时间达到稳态后，分别求 $x=0$ 的板温 $T_0\,(^\circ\mathrm C)$ 和 $x=L$ 的板温 $T_w\,(^\circ\mathrm C)$。不得使用 $L,k,h,T_f,q$ 以外的符号，并须给出推导过程。

**(3)** 图2中①表示 $t=0$ 时平板与流体的温度分布，②表示稍后时刻的分布。仿照该图画出经过足够长时间达到稳态后的温度分布③。另外，从图中(a)～(d)中选出最适合表示②与③之间某时刻温度分布的曲线，并用文字解释选择理由。

**(4)** 用热电偶测量 $x=0$ 处的平板温度。从图3的(i)～(iv)中选出最合适的安装方式，并用文字解释理由。热电偶与加热器、平板均紧密接触。

## **Kai**

### (1)

$$
\boxed{\rho c\frac{\partial T}{\partial t}=k\frac{\partial^2T}{\partial x^2},
\qquad T(x,0)=T_i,}
$$

$$
\boxed{\begin{gathered}
-kT_x(0,t)=q,\\
-kT_x(L,t)=h[T(L,t)-T_f].
\end{gathered}}
$$

過渡状態では平板に熱が蓄えられるため、$x=L$ からの放熱流束が常に $q$ になるとは限らない。

### (2)

定常では $T''=0$。左端の条件から傾きは $-q/k$、右端では $q=h(T_w-T_f)$ なので

$$
\boxed{T_w=T_f+\frac qh,\qquad
T_0=T_f+\frac qh+\frac{qL}{k}.}
$$

全分布は $T(x)=T_f+q/h+q(L-x)/k$ である。

### (3)

定常時の平板内温度は、$T_0$ から $T_w$ へ直線的に下がり、流体側で $T_f$ に近づく。

![定常温度分布の模式図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-steady.svg)

中間時刻の候補は $\boxed{\mathrm{(c)}}$。左面の傾きは常に $-q/k<0$ であり、初期温度から加熱される過程では $T_t>0$、したがって $T_{xx}=(\rho c/k)T_t>0$ で下に凸となる。また、右壁温度がまだ $T_f$ より低い図示の段階では、右面の傾きは正でなければならない。

### (4)

$\boxed{\mathrm{(iv)}}$ を選ぶ。熱電対線を測定面に沿う等温面内に配線すると、接点から線を通じて熱が逃げる影響を小さくできる。ヒータ内部や平板内部の異なる温度領域へ直接引き出す配置では、線に沿う熱伝導による誤差が生じやすい。
