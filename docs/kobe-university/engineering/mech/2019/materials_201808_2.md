---
sidebar_label: "2018年8月実施 材料力学 第2問"
tags:
  - Kobe-University
  - Engineering.Mechanics-of-Materials.Beam-Deflection
  - Engineering.Mechanics-of-Materials.Deformation-Compatibility
---

# 神戸大学 工学研究科 機械工学専攻 2018年8月実施 材料力学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

曲げ剛性 $EI$、全長 $2L$ のはりABをAで固定する。中点CまでのAC間に、Aで $q_0$、Cで0となる三角形分布荷重が鉛直下向きに作用する。AからBへ座標 $x$ を取る。Aの反力 $R_A$ は上向き、支持モーメント $M_A$ は時計回りを正とする。

![三角形荷重、ばね支持、および先端集中荷重](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kobe-university/engineering/mech/2019/kobe201808_materials2.svg)

1. AC間の分布荷重 $q(x)$ を求めよ。
2. $R_A,M_A$ を図の正方向に従って求めよ。
3. AC、CB間のせん断力と曲げモーメントを求めよ。
4. AC間のたわみ角 $\theta_{AC}$、たわみ $v_{AC}$ を求めよ。
5. Cのたわみ $v_C$ とたわみ角 $\theta_C$ を求めよ。
6. CB間のたわみ角 $\theta_{CB}$、たわみ $v_{CB}$ を求めよ。
7. Bのたわみ $v_{B1}$ を求めよ。

次にBの上下に各ばね定数 $k$ のばねを取り付け、同じ分布荷重を加える。Bの鉛直下向き変位を $\delta_B$ とする。

8. 2本のばねによる上向き支持力 $P$ を求めよ。
9. 分布荷重を除き、Bに上向き集中力 $P$ だけが作用するときのたわみ $v_{B2}$ を求めよ。
10. 重ね合わせにより $\delta_B$ を求めよ。

#### 题目描述

长 $2L$、弯曲刚度 $EI$ 的悬臂梁 A 固定，C 为中点。AC 上向下三角分布载荷由 A 的 $q_0$ 线性减至 C 的零。（1）求载荷函数；（2）求反力和支承力矩（上向、顺时针为正）；（3）求两段剪力和弯矩；（4）求AC转角与挠度；（5）求C的转角与挠度；（6）求CB转角与挠度；（7）求B挠度。再于B上下各装一根刚度 $k$ 的弹簧：（8）以向下位移 $\delta_B$ 表示上向弹簧合力；（9）求仅受B端上向力 $P$ 时的挠度；（10）求弹簧支承时的 $\delta_B$。

## **Kai**

たわみ $v$ は下向き、たわみ角は $v'$、曲げモーメントは下面引張を正、せん断力は $F=M'$ とする。この規約では $EI v''=-M$。

### (1), (2)


$$
\boxed{q(x)=q_0\left(1-\frac xL\right)\quad(0\le x\le L)}.
$$


荷重の合力 $q_0L/2$ はAから $L/3$ に作用する。従って


$$
\boxed{R_A=\frac{q_0L}{2},\qquad M_A=-\frac{q_0L^2}{6}}.
$$


実際の支持モーメントは反時計回りである。

### (3)

断面の右側の荷重を積分して


$$
\boxed{F_{AC}=\int_x^Lq(\xi)d\xi=\frac{q_0(L-x)^2}{2L}},
$$



$$
\boxed{M_{AC}=-\int_x^Lq(\xi)(\xi-x)d\xi=-\frac{q_0(L-x)^3}{6L}}.
$$


CBでは $\boxed{F_{CB}=M_{CB}=0}$。

### (4)

$EI v''=q_0(L-x)^3/(6L)$ を $v(0)=v'(0)=0$ で積分して


$$
\boxed{\theta_{AC}=\frac{q_0}{24EIL}[L^4-(L-x)^4]},
$$



$$
\boxed{v_{AC}=\frac{q_0}{120EIL}[(L-x)^5+5L^4x-L^5]}.
$$


### (5)


$$
\boxed{v_C=\frac{q_0L^4}{30EI},\qquad\theta_C=\frac{q_0L^3}{24EI}}.
$$


### (6)

CBでは $v''=0$。Cでの連続条件より


$$
\boxed{\theta_{CB}=\frac{q_0L^3}{24EI},\qquad
v_{CB}=\frac{q_0L^4}{30EI}+\frac{q_0L^3}{24EI}(x-L)}\quad(L\le x\le2L).
$$


### (7)


$$
\boxed{v_{B1}=v_C+L\theta_C=\frac{3q_0L^4}{40EI}}.
$$


### (8)

下向き変位に対し上のばねは伸び、下のばねは縮み、いずれも上向きに復元力を及ぼす。従って $\boxed{P=2k\delta_B}$。

### (9)

長さ $2L$ の片持ちはりの先端荷重によるたわみは、下向きを正として


$$
\boxed{v_{B2}=-\frac{P(2L)^3}{3EI}=-\frac{8PL^3}{3EI}}.
$$


### (10)


$$
\delta_B=v_{B1}+v_{B2}=\frac{3q_0L^4}{40EI}-\frac{16kL^3}{3EI}\delta_B.
$$


よって


$$
\boxed{\delta_B=\frac{9q_0L^4}{40(3EI+16kL^3)}}.
$$


## **Reference**

- [神戸大学公式問題の保存版：平成31年度 材料力学、PDF 2ページ](https://web.archive.org/web/20220524073520id_/http://www.mech.kobe-u.ac.jp/wp-content/uploads/2017/06/2_H31_Materials.pdf)
