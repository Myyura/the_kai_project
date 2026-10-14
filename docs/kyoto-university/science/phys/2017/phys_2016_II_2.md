---
sidebar_label: "2017年度 II-2（統計熱力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Van-der-Waals-Gas
  - Physics.Thermodynamics.Canonical-Partition-Function
  - Physics.Thermodynamics.Phase-Equilibrium
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2017年度 問題II-2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

温度 $T$ の熱浴に接する体積 $V$ の箱に、質量 $m$ のファンデルワールス分子が $N$ 個ある。各分子の占有体積を $b$ とし、分子は有効体積 $V_f=V-Nb$ 内で熱運動する。引力ポテンシャルを $-aN^2/V$（$a>0$）で近似し、

$$
H_N=\sum_{i=1}^N\frac{\mathbf p_i^2}{2m}-\frac{aN^2}{V}
$$

とする。ボルツマン定数を $k$ とする。

1. (a) この系の分配関数を求めよ。(b) そこから圧力 $P$ の状態方程式を求めよ。
2. 臨界温度 $T_c$ 以下では状態方程式の一部が熱平衡を表さない。これを修正し、$T<T_c$ の熱平衡等温線を横軸 $V$、縦軸 $P$ で描け。
3. $T=T_c$ で圧縮率が無限大となる臨界点の圧力 $P_c$、温度 $T_c$、体積 $V_c$ を求めよ。
4. $T_c$ よりやや低い温度で、気液共存できる最大体積 $V_g$ と最小体積 $V_\ell$ が

   $$
   \frac{V_g-V_\ell}{V_c}\simeq\text{const.}\left(1-\frac T{T_c}\right)^\beta
   $$

   を満たす。臨界指数 $\beta$ を求めよ。

#### 题目描述

体积 $V$ 中有 $N$ 个质量为 $m$ 的范德华分子，与温度 $T$ 的热浴接触。每个分子占有体积 $b$，可用体积为 $V-Nb$；平均吸引势为 $-aN^2/V$，$a>0$，哈密顿量如上，玻尔兹曼常数为 $k$。

1. 求经典正则分配函数，再求状态方程。
2. 对 $T<T_c$ 时不能描述稳定平衡的等温线作修正，画出 $P$–$V$ 平衡曲线。
3. 求临界点 $P_c,T_c,V_c$。
4. 在临界温度下方，用共存体积差的标度关系求临界指数 $\beta$。

## **Kai**

### (1)

#### (a)

$h$ を位相空間の規格化に用いるプランク定数とすると

$$
\boxed{Z_N=\frac{(V-Nb)^N}{N!h^{3N}}(2\pi mkT)^{3N/2}
\exp\!\left(\frac{aN^2}{VkT}\right).}
$$

#### (b)

$F=-kT\ln Z_N$、$P=-(\partial F/\partial V)_{T,N}$ より

$$
\boxed{P=\frac{NkT}{V-Nb}-\frac{aN^2}{V^2},\qquad
\left(P+\frac{aN^2}{V^2}\right)(V-Nb)=NkT.}
$$

### (2)

安定な単相では $\kappa_T=-V^{-1}(\partial V/\partial P)_T>0$ が必要である。気液共存区間 $[V_\ell,V_g]$ は一定圧力 $P_s$ の水平線に置き換える。両相の化学ポテンシャルが等しいことから

$$
F(V_g)-F(V_\ell)=-P_s(V_g-V_\ell),
$$

したがってマクスウェルの等面積条件

$$
\boxed{\int_{V_\ell}^{V_g}[P(V,T)-P_s],dV=0,\qquad
P(V_\ell,T)=P(V_g,T)=P_s}
$$

を満たすように水平線を引く。

![気液共存を含むファンデルワールス等温線](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2017-II-2-maxwell-isotherm.svg)

### (3)

臨界点では等温線の二つの極値が合体し、$P_V=P_{VV}=0$ となる。

$$
-\frac{NkT_c}{(V_c-Nb)^2}+\frac{2aN^2}{V_c^3}=0,\qquad
\frac{2NkT_c}{(V_c-Nb)^3}-\frac{6aN^2}{V_c^4}=0.
$$

この二式と状態方程式より

$$
\boxed{V_c=3Nb,\qquad T_c=\frac{8a}{27kb},\qquad P_c=\frac{a}{27b^2}.}
$$

### (4)

$t=(T-T_c)/T_c$、$v=(V-V_c)/V_c$、$p=(P-P_c)/P_c$ とすると

$$
p=\frac{8(1+t)}{2+3v}-\frac3{(1+v)^2}-1
=4t-6tv-\frac32v^3+O(tv^2,v^4).
$$

$t<0$ において等面積条件と両端の圧力一致から、主要項では $p_s=4t$、$v_g=-v_\ell$ となる。したがって

$$
-6tv_g-\frac32v_g^3=0,\qquad v_g=2\sqrt{-t},\quad v_\ell=-2\sqrt{-t}.
$$

ゆえに

$$
\frac{V_g-V_\ell}{V_c}\simeq4\sqrt{1-\frac T{T_c}},\qquad
\boxed{\beta=\frac12.}
$$

## **Reference**

- [京都大学公式問題（2017年度、PDF 11ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H29.pdf)
