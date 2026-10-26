---
sidebar_label: "2016年8月実施 問2（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 九州大学 工学府 機械系専攻 2016年8月実施 材料力学 問2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

弾性体のはり AB とはり CD は、剛体棒を介して下図の様に繋がれている。剛体棒 JG とはり AB、はり CD は、それぞれ固定されている。なお、剛体棒 JG の直径は、はり AB とはり CD の長さに比べて充分に小さいものとする。点 A、点 C、点 F における支点反力をそれぞれ $R_A,R_C,R_F$、剛体棒 JG にかかる力を $Q$ とし、次の問いに答えよ。（35点）

**(1)** $R_A,R_F,Q$ の関係を示せ。

**(2)** $Q$ を用いて点 J の変位を表せ。

**(3)** $Q$ を求めよ。

図中、$E$ はヤング率、$I$ は断面二次モーメントである。AF、FG、GH、HB、CJ、JD、JG の長さはいずれも $\ell$。J に下向きの荷重 $P$ が作用し、各支点は図示のとおりである。

![原題の剛体棒で接続された二本のはりと支承](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2017/mech_201608_material-2-original.png)

### 题目描述

弹性梁 AB 与 CD 通过刚杆连接，如图所示。刚杆 JG 与梁 AB、CD 分别为固定连接。刚杆 JG 的直径相对于两根梁的长度充分小。设 A、C、F 点的支承反力分别为 $R_A,R_C,R_F$，刚杆 JG 中的力为 $Q$，回答下列问题。（35分）

**(1)** 给出 $R_A,R_F,Q$ 之间的关系。

**(2)** 用 $Q$ 表示 J 点的位移。

**(3)** 求 $Q$。

图中 $E$ 为杨氏模量，$I$ 为截面二次矩。AF、FG、GH、HB、CJ、JD、JG 的长度均为 $\ell$。J 点承受向下的载荷 $P$，各支承形式如图。

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
