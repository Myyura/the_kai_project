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

図aのように水面差 $H$ の二つの十分大きな水槽が、全長 $L_1$ の円管でつながっている。管路には二つの曲がり部があり、入口すぐに圧力上昇 $\Delta p$ のポンプが置かれ、下側から上側へ水をくみ上げる。内径は $D$、入口損失係数は $\zeta_{\rm in}$、各曲がり部の損失係数は $\zeta_e$、管摩擦係数は $\lambda$ である。

重力加速度を $g$、水の密度を $\rho$ とする。$D\ll L_1$、水位は一定で、ポンプの圧力上昇は流量によらず一定とする。（50点）

1. 管内の体積流量 $Q_1$ を求めよ。
2. 図bのように上槽との接続を変え、管の一部を上槽の水面より $h$ 高く、出口を上槽の水中に置く。全長は $L_2\gg D$、曲がり部は三つ、最後の曲がり部から出口までの長さは $l$ で、各損失係数は前問と同じである。管内圧力が飽和蒸気圧を下回ることによる水柱分離を防ぐため、$\Delta p$ が満たす条件を求めよ。大気圧を $p_a$、飽和蒸気圧を $p_s<p_a$ とする。

![原題の図（九州大学 2014年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2014/mech_201308_fluids-2-original.png)

#### 题目描述

水面高差为 $H$ 的两大水槽以长 $L_1$、直径 $D$ 的管连接，管路含两个弯头，入口紧后设恒定压升 $\Delta p$ 的泵。入口、各弯头损失系数为 $\zeta_{\rm in},\zeta_e$，摩擦系数为 $\lambda$，求流量。再改成跨越上槽水面高度 $h$ 的倒U管，管总长 $L_2$、三个弯头，最后弯头至淹没出口长 $l$；求管内不低于饱和蒸气压、避免水柱分离所需的泵压升条件。

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
K=1+\zeta_{\rm in}+3\zeta_e+\frac{\lambda L_2}{D},\qquad
v^2=\frac{2(\Delta p-\rho gH)}{\rho K}.
$$

最後の曲がり部を通過した直後の頂部断面をCとする。Cから上槽自由表面までのエネルギー式では、残る長さ $l$ の摩擦と出口損失を計上する。

$$
\frac{p_C-p_a}{\rho g}+h+\frac{v^2}{2g}
=\left(1+\frac{\lambda l}{D}\right)\frac{v^2}{2g}.
$$

よって

$$
p_C=p_a-\rho gh+\frac{\lambda l}{D}\frac{\rho v^2}{2}
=p_a-\rho gh+\frac{\lambda l}{DK}(\Delta p-\rho gH).
$$

頂部の曲がり部の直前を採ると、その後に起こる $\zeta_e\rho v^2/2$ の圧力低下を見落とす。Cの圧力と出口の圧力を比較すれば、出口は上槽の水中にあるため $p_a$ より高く、下降直管内の圧力は両端を結ぶ一次分布である。したがって、この高所管段での水柱分離を防ぐ条件は $p_C\ge p_s$、すなわち $\lambda l>0$ なら

$$
\boxed{\Delta p\ge\rho gH+
\frac{DK}{\lambda l}\bigl(p_s-p_a+\rho gh\bigr),
\qquad \Delta p>\rho gH}.
$$

$p_s-p_a+\rho gh\le0$ のときは、くみ上げ条件だけで頂部条件も満たす。$\lambda l=0$ の極限では頂部圧力は $p_a-\rho gh$ となり、条件は $h\le(p_a-p_s)/(\rho g)$ である。

厳密に管内全域で圧力を確認するには、ポンプ直前の吸込み側も調べる必要がある。下槽水面から吸込み管軸までの深さを $d_s$ とすれば、入口すぐのポンプ直前では

$$
p_{\rm suction}=p_a+\rho gd_s
-(1+\zeta_{\rm in})\frac{\Delta p-\rho gH}{K}\ge p_s.
$$

題図には $d_s$ の数値・寸法が与えられていないため、この吸込み側の上限条件を既知量だけの一意な数式にはできない。上の枠内は、寸法が与えられた高所管段に対する条件である。
