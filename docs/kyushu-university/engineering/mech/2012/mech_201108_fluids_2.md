---
sidebar_label: "2012年度 問2（流体工学）"
tags:
  - Kyushu-University
  - Engineering.Fluid-Mechanics.Control-Volume-Momentum
  - Engineering.Fluid-Mechanics.Minor-Losses
---

# 九州大学 工学府 機械系専攻 2012年度 流体工学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

幅 $A$ の二次元ダクト（主管）の側面に、幅 $A/2$ の二次元ダクト（枝管）が直角に取り付けられている。分岐前の水の流速は $V$、分岐後の主管と枝管の体積流量の比は $4:1$ である。壁面摩擦を無視し、各管の十分上流・下流では流れは一様とする。（50点）

1. 主管流れを考える際、枝管へ流出する水は主管軸方向の速度成分 $V$ を保ったまま流出すると仮定する。主管を流れる水の分岐損失係数 $\zeta_1$ を求めよ。
2. 枝管では入口で一旦はく離した後、再付着して下流で一様になる。有効流路幅が最小値 $cA/2$（$c$ は縮流係数）となった位置から再付着までの拡大損失のみが生じるとする。主管から枝管へ流れる水の分岐損失係数 $\zeta_2$ を求めよ。

![原題の図（九州大学 2012年度 流体工学 問2）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2012/fluids-2-original.png)

#### 题目描述

宽度 $A$ 的二维主管上垂直接出宽度 $A/2$ 的支管，分流前速度为 $V$，分流后主管与支管流量比为 $4:1$。忽略壁面摩擦。求主管分流损失系数，其中进入支管的流体在离开主管控制体时仍保留轴向速度 $V$；再求支管由宽 $cA/2$ 的缩流区重新附着扩张产生的损失系数。

## **Kai**

単位奥行き当たりの流量を用いる。連続の式より、主管下流と枝管下流の速度は

$$
V_1=\frac45V,\qquad V_2=\frac25V.
$$

以下、損失係数の基準を主管上流速度 $V$ とし、$h_L=\zeta V^2/(2g)$ と定義する。

### (1)

主管上流・下流の圧力を $p,p_1$ とする。主管軸方向の運動量式は、枝管へ出る流量 $AV/5$ が速度成分 $V$ を持つことから

$$
(p-p_1)A=\rho\left[\frac{4AV}{5}\frac{4V}{5}
+\frac{AV}{5}V-AV^2\right]
=-\frac4{25}\rho AV^2.
$$

したがって、全圧の減少より

$$
\zeta_1=\frac{2(p-p_1)}{\rho V^2}+1-\left(\frac{V_1}{V}\right)^2
=-\frac8{25}+1-\frac{16}{25}
=\boxed{\frac1{25}}.
$$

### (2)

縮流部の速度は $V_c=V_2/c=2V/(5c)$ である。拡大損失は運動量式とエネルギー式から

$$
h_L=\frac{(V_c-V_2)^2}{2g}.
$$

よって、主管上流速度を基準にすれば

$$
\boxed{\zeta_2=\frac4{25}\left(\frac1c-1\right)^2}.
$$

基準速度を変える場合の同じ損失の表現は

$$
h_L=\underbrace{\left(\frac1c-1\right)^2}_{V_2\text{ 基準}}\frac{V_2^2}{2g}
=\underbrace{(1-c)^2}_{V_c\text{ 基準}}\frac{V_c^2}{2g}.
$$

係数だけを比べず、対応する速度水頭と併せて用いる。
