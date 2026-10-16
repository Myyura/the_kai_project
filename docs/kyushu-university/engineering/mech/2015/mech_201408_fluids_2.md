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

大気に開放された十分に大きい二つの水槽が、内径 $D$ の細い水平円管でつながっている。途中に二本の分岐管があり、各分岐管の全長は $2L$、分岐管の左側と右側の直管の長さはそれぞれ $L$ である。管摩擦係数 $\lambda$ は流量によらず一定である。下側の分岐管には長さを無視できる弁があり、全開時の損失係数は $\zeta_v$ とする。

左・右の水槽の水面高さはそれぞれ $H_1,H_2$（$H_1>H_2$）、重力加速度は $g$ である。管入口、分岐、合流、曲がり部での損失を無視できるものとして、次に答えよ。（50点）

1. 弁が完全に閉じた場合、右水槽へ流れ込む体積流量 $Q_a$ を求めよ。
2. 弁が全開の場合、(i) 上側と下側の分岐管の体積流量の比 $Q_u/Q_d$、(ii) 右水槽へ流れ込む体積流量 $Q_b$ を求めよ。

![原題の図（九州大学 2015年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2015/mech_201408_fluids-2-original.png)

#### 题目描述

两个大开口水槽由内径 $D$ 的管路连接，中间有两条各长 $2L$ 的并联支管，并联段前后各有长 $L$ 的共用直管。下支管装有全开损失系数 $\zeta_v$ 的阀门，摩擦系数 $\lambda$ 恒定，两槽水位差为 $H_1-H_2>0$。忽略入口、分支、汇合及弯曲损失，求关阀时总流量，以及全开时上下支管流量比与总流量。出口进入大水槽的损失需要计入。

## **Kai**

管断面積を $A=\pi D^2/4$、水位差を $\Delta H=H_1-H_2$、各分岐管の摩擦係数を $b=2\lambda L/D$ とおく。

### (1)

弁を閉じると、水は全長 $4L$ の一本の経路を流れる。大水槽への出口損失を含めて

$$
\Delta H=(1+2b)\frac{(Q_a/A)^2}{2g},\qquad
\boxed{Q_a=A\sqrt{\frac{2g\Delta H}{1+4\lambda L/D}}}.
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
Q_u=\frac{r}{1+r}Q_b=\alpha Q_b,\qquad
\alpha=\frac{1}{1+\sqrt{b/(b+\zeta_v)}}.
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
