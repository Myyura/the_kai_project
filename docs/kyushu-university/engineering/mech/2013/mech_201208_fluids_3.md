---
sidebar_label: "2012年8月実施 問3（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Cylindrical-Couette-Flow
---

# 九州大学 工学府 機械系専攻 2012年8月実施 流体工学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

十分に長い同心二重円筒の間に粘性係数 $\mu$ の非圧縮性流体が満たされており，外円筒は静止しているが，内円筒が一定角速度 $\omega$ で回転している。この二重円筒の軸は鉛直方向と一致しており，その内半径 $R_1$ は既知であるが，外半径 $R_2$ は未知である。また，内円筒を回転するのに要する軸動力が円筒の単位長さ当たり $L$ である。流れは定常であるとともに，周方向の速度成分 $V_\theta$ のみを有する十分に発達した軸対称の層流であるとして，以下の問いに答えよ。（50点）

**(1)** 流体の微小部分に対する周方向の力のつり合い式が次式で表せることを示せ。

$$
\frac{d\tau}{dr}+2\frac\tau r=0
$$

ここに，$\tau$ はせん断応力，$r$ は中心軸からの半径である。

**(2)** せん断応力 $\tau$ の半径方向分布を，$r,\omega$ および $L$ を用いて表せ。

**(3)** 二重円筒の外半径 $R_2$ を，$R_1,\omega,L$ および $\mu$ を用いて表せ。ただし，次の関係に留意すること。

$$
\tau=\mu r\frac d{dr}\left(\frac{V_\theta}{r}\right)
$$

#### 题目描述

在足够长的同轴双圆筒之间充满动力黏度为 $\mu$ 的不可压缩流体。外圆筒静止，内圆筒以恒定角速度 $\omega$ 转动。双圆筒轴线沿竖直方向，内半径 $R_1$ 已知，外半径 $R_2$ 未知。驱动内圆筒转动所需的轴功率，按圆筒单位长度计为 $L$。假设流动为定常、充分发展且轴对称的层流，仅具有周向速度分量 $V_\theta$。回答下列问题。（50分）

**(1)** 证明流体微元的周向力平衡方程可表示为

$$
\frac{d\tau}{dr}+2\frac\tau r=0.
$$

其中，$\tau$ 为剪应力，$r$ 为距中心轴的半径。

**(2)** 用 $r,\omega,L$ 表示剪应力 $\tau$ 的径向分布。

**(3)** 用 $R_1,\omega,L,\mu$ 表示双圆筒的外半径 $R_2$。注意以下关系：

$$
\tau=\mu r\frac d{dr}\left(\frac{V_\theta}{r}\right).
$$

## **Kai**

### (1)

半径 $r$ と $r+dr$ の同心円筒面を考える。角運動量流束はなく、単位長さ当たりの粘性トルクが半径によらず一定なので

$$
\frac{d}{dr}(2\pi r^2\tau)=0,
\qquad \boxed{\frac{d\tau}{dr}+\frac{2\tau}{r}=0}.
$$

### (2)

$\omega>0$ の方向を周方向の正とする。外円筒が静止するため、角速度 $V_\theta/r$ は外向きに減少し、問題の定義では $\tau<0$ である。内円筒が受ける抵抗トルクは $2\pi R_1^2\tau(R_1)$ だから

$$
\begin{gathered}
L=-2\pi R_1^2\tau(R_1)\omega,\\
\boxed{\tau(r)=-\frac{L}{2\pi\omega r^2}}.
\end{gathered}
$$

応力の大きさだけなら $|\tau|=L/(2\pi\omega r^2)$ である。

### (3)

与えられた関係に (2) を代入して

$$
\frac{d}{dr}\left(\frac{V_\theta}{r}\right)
=-\frac{L}{2\pi\mu\omega r^3}.
$$

無滑り条件 $V_\theta(R_1)=\omega R_1$、$V_\theta(R_2)=0$ の間で積分すると

$$
-\omega=\frac{L}{4\pi\mu\omega}
\left(\frac1{R_2^2}-\frac1{R_1^2}\right).
$$

したがって

$$
\boxed{R_2=R_1\sqrt{\frac{L}{L-4\pi\mu\omega^2R_1^2}}}.
$$

有限の $R_2>R_1$ を持つための条件は $L>4\pi\mu\omega^2R_1^2$ である。等号では $R_2\to\infty$、それより小さい動力ではこの定常層流モデルを満たす外半径は存在しない。
