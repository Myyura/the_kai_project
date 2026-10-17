---
sidebar_label: "2013年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2013年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図aのように，水を満たした十分大きな水槽2つが配置されており，その水面差は $H$ となっている。下側の水槽から上側の水槽までは，全長 $L_1$ の円管で接続されており，この円管には2箇所曲がり部がある。管路の入口すぐの位置には圧力上昇 $\Delta p$ のポンプが設置されており，このポンプにより水は下側の水槽から上側の水槽へくみ上げられている。円管の内径を $D$ とし，円管の入口損失係数を $\zeta_{in}$，2箇所の曲がり部の損失係数をともに $\zeta_e$，円管の管摩擦係数を $\lambda$ として，以下の問いに答えよ。ただし，重力加速度を $g$，水の密度を $\rho$ とする。また $D$ は $L_1$ よりも十分小さく，一連の過程において容器中の水位は一定とみなすことができ，さらにポンプの圧力上昇は流量にかかわらず一定と近似できるものとする。（50点）

**(1)** 円管を流れる水の体積流量 $Q_1$ を求めよ。

**(2)** 図bのように，上側の水槽と円管の接続部の形状を変更し，円管の一部を上側の水槽の水面より $h$ だけ高い位置に，また円管出口を上側の水槽内の水中に配置する。円管の全長は $L_2\ (\gg D)$ であり，曲がり部は3箇所である。また最後の曲がり部から管出口までの長さは $l$ である。円管の管摩擦係数，入口損失係数および曲がり部の損失係数は前問と同じくそれぞれ $\lambda,\zeta_{in}$ および $\zeta_e$ である。円管内の圧力が局所的に飽和蒸気圧より低くなると水柱分離の発生が懸念される。水柱分離の発生を防ぐため，ポンプの圧力上昇 $\Delta p$ が満たすべき条件を求めよ。ただし大気圧を $p_a$，水の飽和蒸気圧を $p_s$ とし，$p_s<p_a$ とする。

![原題の図a・b：ポンプによる揚水と管路形状](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids-2-original.png)

#### 题目描述

如图a所示，放置两个盛满水且足够大的水槽，其水面高度差为 $H$。上下两槽由一根总长为 $L_1$、具有两处弯曲段的圆管连接。管道入口之后紧接着装有压升为 $\Delta p$ 的泵，用于将水从下槽抽至上槽。圆管内径为 $D$，入口损失系数为 $\zeta_{in}$，两处弯曲段的损失系数均为 $\zeta_e$，管摩擦系数为 $\lambda$。设重力加速度为 $g$、水的密度为 $\rho$，回答下列问题。$D$ 远小于 $L_1$，整个过程中槽内水位可视为不变，泵的压升可近似视为不随流量变化的常量。（50分）

**(1)** 求流过圆管的水的体积流量 $Q_1$。

**(2)** 如图b所示，改变圆管与上槽连接处的形状，将一段圆管放置在高于上槽水面 $h$ 的位置，并使圆管出口位于上槽水中。圆管总长为 $L_2\ (\gg D)$，具有三处弯曲段，最后一处弯曲段至管出口的长度为 $l$。管摩擦系数、入口损失系数和弯曲段损失系数与上一问相同，分别为 $\lambda,\zeta_{in},\zeta_e$。若圆管内的局部压力低于饱和蒸气压，就可能发生水柱分离。为防止水柱分离，求泵的压升 $\Delta p$ 应满足的条件。设大气压为 $p_a$，水的饱和蒸气压为 $p_s$，且 $p_s<p_a$。

## **Kai**

### (1)

$A=\pi D^2/4$ とする。自由表面間のエネルギー式には大水槽への出口損失係数1も含めるので

$$
\frac{\Delta p}{\rho g}-H
=\left(1+\zeta_{\rm in}+2\zeta_e+\frac{\lambda L_1}{D}\right)
\frac{(Q_1/A)^2}{2g}.
$$

したがって、くみ上げが生じる $\Delta p>\rho gH$ のもとで

$$
\boxed{Q_1=A\sqrt{\frac{2(\Delta p/\rho-gH)}
{1+\zeta_{\rm in}+2\zeta_e+\lambda L_1/D}}}.
$$

### (2)

図bについて

$$
\begin{gathered}
K=1+\zeta_{\rm in}+3\zeta_e+\frac{\lambda L_2}{D},\\
v^2=\frac{2(\Delta p-\rho gH)}{\rho K}.
\end{gathered}
$$

最後の曲がり部を通過した直後の頂部断面をCとする。Cから上槽自由表面までのエネルギー式では、残る長さ $l$ の摩擦と出口損失を計上する。

$$
\frac{p_C-p_a}{\rho g}+h+\frac{v^2}{2g}
=\left(1+\frac{\lambda l}{D}\right)\frac{v^2}{2g}.
$$

よって

$$
\begin{gathered}
p_C=p_a-\rho gh+\frac{\lambda l}{D}\frac{\rho v^2}{2}\\
=p_a-\rho gh+\frac{\lambda l}{DK}(\Delta p-\rho gH).
\end{gathered}
$$

頂部の曲がり部の直前を採ると、その後に起こる $\zeta_e\rho v^2/2$ の圧力低下を見落とす。Cの圧力と出口の圧力を比較すれば、出口は上槽の水中にあるため $p_a$ より高く、下降直管内の圧力は両端を結ぶ一次分布である。したがって、この高所管段での水柱分離を防ぐ条件は $p_C\ge p_s$、すなわち $\lambda l>0$ なら

$$
\boxed{\begin{gathered}
\Delta p\ge\rho gH+
\frac{DK}{\lambda l}\bigl(p_s-p_a+\rho gh\bigr),\\
\Delta p>\rho gH
\end{gathered}}.
$$

$p_s-p_a+\rho gh\le0$ のときは、くみ上げ条件だけで頂部条件も満たす。$\lambda l=0$ の極限では頂部圧力は $p_a-\rho gh$ となり、条件は $h\le(p_a-p_s)/(\rho g)$ である。

厳密に管内全域で圧力を確認するには、ポンプ直前の吸込み側も調べる必要がある。下槽水面から吸込み管軸までの深さを $d_s$ とすれば、入口すぐのポンプ直前では

$$
p_{\rm suction}=p_a+\rho gd_s
-(1+\zeta_{\rm in})\frac{\Delta p-\rho gH}{K}\ge p_s.
$$

題図には $d_s$ の数値・寸法が与えられていないため、この吸込み側の上限条件を既知量だけの一意な数式にはできない。上の枠内は、寸法が与えられた高所管段に対する条件である。
