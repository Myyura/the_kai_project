---
sidebar_label: "2014年8月実施 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Pipe-Networks
  - Engineering.Fluid-Mechanics.Pipe-Friction
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2014年8月実施 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示すように，大気に開放された状態で水を貯めている十分大きな2つの水槽が水平な地面の上に置かれており，途中に2本の分岐管を含む内径 $D$ の細い水平な円管でつながれている。2本の分岐管の全長はともに $2L$ であり，分岐管の左側と右側にある直管の長さはともに $L$ である。管摩擦係数は流量によらず一定で，$\lambda$ であるとする。下側の分岐管には長さの無視できる弁が付いているが，その全開時の損失係数は $\zeta_v$ である。左側の水槽の液面高さを $H_1$，右側の水槽の液面高さを $H_2\ (H_1>H_2)$ として，以下の問いに答えよ。ただし，重力加速度の大きさは $g$ であり，管入口での損失，分岐ならびに合流に伴う損失，および曲がり部での損失は無視できるものとする。（50点）

**(1)** 弁が完全に閉まっている場合について，右側の水槽に流れ込む水の体積流量 $Q_a$ を求めよ。

**(2)** 弁が全開の場合を考える。

- **(i)** 上側の分岐管を流れる水の体積流量 $Q_u$ と下側の分岐管を流れる水の体積流量 $Q_d$ の比として，$Q_u/Q_d$ を求めよ。
- **(ii)** 右側の水槽に流れ込む水の体積流量 $Q_b$ を求めよ。

![原題の図：二水槽間の並列管路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_fluids-2-original.png)

### 题目描述

如图所示，两个足够大的水槽放在水平地面上，均向大气开放并储有水，二者由内径为 $D$ 的细水平圆管连接，管路中间包含两条并联支管。两条支管的总长均为 $2L$，支管左、右两侧直管的长度均为 $L$。管摩擦系数为常量 $\lambda$，与流量无关。下方支管安装一个长度可忽略的阀门，其全开时的损失系数为 $\zeta_v$。左侧水槽液面高度为 $H_1$，右侧水槽液面高度为 $H_2$，且 $H_1>H_2$。回答下列问题。重力加速度大小为 $g$；管入口损失、分流和汇流损失以及弯管损失均可忽略。（50分）

**(1)** 阀门完全关闭时，求流入右侧水槽的水的体积流量 $Q_a$。

**(2)** 考虑阀门全开的情况。

- **(i)** 上、下两条支管的水的体积流量分别为 $Q_u,Q_d$，求比值 $Q_u/Q_d$。
- **(ii)** 求流入右侧水槽的水的体积流量 $Q_b$。

## **Kai**

管断面積を $A=\pi D^2/4$、水位差を $\Delta H=H_1-H_2$、各分岐管の摩擦係数を $b=2\lambda L/D$ とおく。

### (1)

弁を閉じると、水は全長 $4L$ の一本の経路を流れる。大水槽への出口損失を含めて

$$
\begin{gathered}
\Delta H=(1+2b)\frac{(Q_a/A)^2}{2g},\\
\boxed{Q_a=A\sqrt{\frac{2g\Delta H}{1+4\lambda L/D}}}.
\end{gathered}
$$

### (2)(i)

分岐点から合流点までの水頭損失は両経路で等しいから

$$
b\left(\frac{Q_u}{A}\right)^2=(b+\zeta_v)\left(\frac{Q_d}{A}\right)^2.
$$

したがって

$$
\boxed{\frac{Q_u}{Q_d}=r=\sqrt{1+\frac{\zeta_v}{b}}}.
$$

### (2)(ii)

$Q_b=Q_u+Q_d$ より、上側分岐管の流量は

$$
\begin{gathered}
Q_u=\frac{r}{1+r}Q_b=\alpha Q_b,\\
\alpha=\frac{1}{1+\sqrt{b/(b+\zeta_v)}}.
\end{gathered}
$$

共通管の摩擦損失と出口損失には $Q_b$、上側分岐管の摩擦損失には $Q_u$ を用いる。

$$
\Delta H=(1+b)\frac{(Q_b/A)^2}{2g}
+b\frac{(Q_u/A)^2}{2g}.
$$

よって

$$
\boxed{Q_b=A\sqrt{\frac{2g\Delta H}{1+b+b\alpha^2}}}.
$$

$\zeta_v=0$ では $\alpha=1/2$、$\zeta_v\to\infty$ では $\alpha\to1$ となり、後者で (1) に一致する。
