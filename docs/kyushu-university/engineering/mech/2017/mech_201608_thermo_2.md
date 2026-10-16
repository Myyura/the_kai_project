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

ヒータに接する厚さ $L$ の平板は、熱伝導率 $k$、密度 $\rho$、比熱 $c$ が温度によらず一定で、最初は一様温度 $T_i$ にある。$t=0$ で $x=0$ 面から一定熱流束 $q$ により加熱を始め、同時に $x=L$ 面を温度 $T_f>T_i$ の流体に曝す。熱伝達率は $h$ とする。（50 点）

![ヒータと平板（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-system.png)

1. $T(x,t)$ を求める熱伝導方程式、初期条件一つ、境界条件二つを書け。
2. 定常状態における $T_0=T(0),T_w=T(L)$ を $L,k,h,T_f,q$ で表せ。
3. 図 2 の ① は初期分布、② は少し経過した時刻の分布である。定常分布 ③ を描き、② と ③ の間の時刻における適切な分布を (a)–(d) から選んで理由を説明せよ。

![温度分布の候補（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-choices.png)

4. $x=0$ の平板温度を熱電対で測る。図 3 の設置方法 (i)–(iv) から最も適切なものを選び、理由を述べよ。熱電対、ヒータ、平板は密着している。

![熱電対の設置方法（公式原図）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_thermo-2-sensors.png)

#### 题目描述

初温 $T_i$ 的平板厚 $L$，导热率 $k$、密度 $\rho$、比热 $c$ 恒定。开始时左侧输入恒定热流 $q$，右侧与温度更高的流体 $T_f$ 对流换热，系数 $h$。写瞬态方程及初边值条件，求稳态两表面温度，画稳态温度并判断中间时刻曲线；从原图选择能准确测左表面温度的热电偶布置并解释。

## **Kai**

### (1)

$$
\boxed{\rho c\frac{\partial T}{\partial t}=k\frac{\partial^2T}{\partial x^2},
\qquad T(x,0)=T_i,}
$$

$$
\boxed{-kT_x(0,t)=q,\qquad
-kT_x(L,t)=h[T(L,t)-T_f].}
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
