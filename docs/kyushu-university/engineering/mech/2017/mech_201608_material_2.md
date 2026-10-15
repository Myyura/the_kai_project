---
sidebar_label: "2017年度 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2017年度 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

弾性はり AB と CD は、図の剛体棒 JG によって接合されている。JG は両はりと固定接合され、その直径ははりの長さに比べて十分小さい。両はりの曲げ剛性は $EI$ で、AF $=$ FG $=$ GH $=$ HB $=\ell$、CJ $=$ JD $=\ell$、JG $=\ell$ である。J に下向き荷重 $P$ を加える。A、C、F における支点反力をそれぞれ $R_A,R_C,R_F$、剛体棒 JG にかかる力を $Q$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2017/material-2-original.png)

1. $R_A,R_F,Q$ の関係を示せ。
2. $Q$ を用いて J の変位を表せ。
3. $Q$ を求めよ。

#### 题目描述

弯曲刚度均为 $EI$ 的梁 AB、CD 由刚杆 JG 固接。下梁 A、F、H、B 处设支承，上梁 C、D 处设支承；AF、FG、GH、HB、CJ、JD、JG 长度均为 $\ell$。在 J 向下施加力 $P$。求 A、F 支反力与刚杆传力 $Q$ 的关系，用 $Q$ 表示 J 的位移，并求 $Q$。

## **Kai**

反力の正方向を上向きとし、$Q>0$ を JG が圧縮を受け、下梁 G に下向きの力 $Q$ が作用する場合と定義する。左右対称性から、B の反力は $R_A$、H の反力は $R_F$、D の反力は $R_C$ に等しい。

### (1)

下梁の鉛直方向のつり合いより

$$
\boxed{2R_A+2R_F=Q}.
$$

この符号規約では、A と B の反力は負となる。

### (2)

上梁 CD の中央には合力 $P-Q$ が下向きに作用する。対称軸 J では回転角がゼロなので、剛体棒との接合部に伝達モーメントは生じない。長さ $2\ell$ の単純支持ばりの中央たわみから

$$
\boxed{\delta_J=\frac{(P-Q)(2\ell)^3}{48EI}
=\frac{(P-Q)\ell^3}{6EI}}
$$

を得る。下向きを正とした。

### (3)

下梁の左半分 AFG で、A からの距離を $x$、下向きたわみを $v(x)$ とする。Macaulay 括弧 $\langle x-\ell\rangle=\max(x-\ell,0)$ を用いれば

$$
EI v(x)=-\frac{R_Ax^3}{6}
-\frac{R_F\langle x-\ell\rangle^3}{6}+C_1x.
$$

$v(\ell)=0$ と対称条件 $v'(2\ell)=0$ より

$$
C_1=\frac{R_A\ell^2}{6},\qquad
11R_A+3R_F=0.
$$

(1) と合わせて

$$
R_A=-\frac{3Q}{16},\qquad R_F=\frac{11Q}{16}.
$$

したがって

$$
\delta_G=v(2\ell)=\frac{7Q\ell^3}{96EI}.
$$

JG は剛体であり $\delta_J=\delta_G$ なので

$$
\frac{P-Q}{6}=\frac{7Q}{96},\qquad
\boxed{Q=\frac{16P}{23}}.
$$

なお $\delta_J=\delta_G=7P\ell^3/(138EI)$ となる。
