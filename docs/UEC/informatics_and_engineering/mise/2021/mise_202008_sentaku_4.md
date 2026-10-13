---
sidebar_label: "2020年8月実施 選択問題4 流体力学"
tags:
  - University-of-Electro-Communications
  - Engineering.Fluid-Mechanics.Viscosity-and-Reynolds-Number
  - Engineering.Fluid-Mechanics.Vorticity-and-Streamfunction
  - Engineering.Fluid-Mechanics.Hagen-Poiseuille-Flow
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題4 流体力学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### 問1

(1) 次の空欄①〜⑧を埋めよ。

- ニュートン流体では、せん断応力と速度勾配が粘性係数 $\mu$ を介して①関係にある。$\mu$ のSI単位は②。
- レイノルズ数は③力と④力の比を表す無次元数である。幾何学的に同じ流れにおいて、レイノルズ数が同じならば流れは⑤となる。
- 一定の圧力勾配で駆動される完全発達した直円管内層流の速度分布は⑥分布である。管直径 $D$、速度 $U$、密度 $\rho$、粘性係数 $\mu$ を用いると $\mathrm{Re}=$ ⑦。壁面せん断応力 $\tau_w$ を用いると壁面摩擦係数 $C_f=$ ⑧。

(2) 流線、流脈線、流跡線をそれぞれ50字程度で説明せよ。

(3) ラグランジュの方法とオイラーの方法をそれぞれ50字程度で説明せよ。

### 問2

二次元デカルト座標で速度成分が $u=x^2-y^2,\ v=-2xy$ と表される。

1. 非圧縮流であることを示せ。
2. $x,y$ 方向の加速度を求めよ。
3. 渦度を求めよ。

### 問3

静止した同軸二重円筒の半径を外側 $a$、内側 $a/e$ とする。$a>0$、$e$ は自然対数の底である。両円筒間を満たす流体が、一定圧力勾配 $-\partial P/\partial z=K>0$ で軸方向 $z$ に駆動される。円筒は十分長く、完全発達した定常非圧縮層流とする。

1. 次の円筒座標のNavier–Stokes方程式を、$K$ を用いて簡略化せよ。

$$
\rho\left(\frac{\partial u_z}{\partial t}
+\frac1r\frac\partial{\partial r}(ru_ru_z)
+\frac1r\frac\partial{\partial\theta}(u_\theta u_z)
+\frac\partial{\partial z}(u_zu_z)\right)
=-\frac{\partial P}{\partial z}
+\mu\left[\frac1r\frac\partial{\partial r}\left(r\frac{\partial u_z}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2u_z}{\partial\theta^2}
+\frac{\partial^2u_z}{\partial z^2}\right].
$$

2. $z$ 方向速度 $u_z(r)$ を求めよ。

#### 题目描述

问1：填空说明牛顿流体的应力与速度梯度关系、黏度单位、雷诺数的力比含义与动力相似、充分发展圆管层流速度分布、$\mathrm{Re}$ 和壁面摩擦系数公式；各约50日文字解释流线、流脉线、流迹线及拉格朗日、欧拉描述。问2：给定 $u=x^2-y^2,v=-2xy$，证明不可压缩，求两方向加速度和涡量。问3：内、外半径 $a/e,a$ 的静止同轴圆筒间由 $-\partial P/\partial z=K>0$ 驱动充分发展的定常不可压缩层流，简化题给轴向Navier–Stokes方程并求速度分布；两壁满足无滑移条件。

## **Kai**

### 問1

(1) 各空欄は

| 空欄 | 解答 |
| --- | --- |
| ① | 比例 |
| ② | $\mathrm{Pa\cdot s}=\mathrm{kg/(m\cdot s)}$ |
| ③ | 慣性 |
| ④ | 粘性 |
| ⑤ | 力学的に相似 |
| ⑥ | 放物線 |
| ⑦ | $\rho UD/\mu$ |
| ⑧ | $\tau_w/(\tfrac12\rho U^2)$ |

(2) 流線は、ある瞬間の各点で、その接線方向がその点の速度ベクトル方向と一致する曲線である。流脈線は、過去に空間の一定点を通過した流体粒子を、ある瞬間に連ねた曲線である。流跡線は、一つの流体粒子の位置を時間とともに追跡して得られる軌跡である。

(3) ラグランジュの方法では、個々の流体粒子を識別し、その位置や速度の時間変化を追う。オイラーの方法では、空間に固定した位置で、速度や圧力を位置と時間の関数として記述する。

### 問2

$$
\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}=2x-2x=0
$$

なので、非圧縮流の連続の式を満たす。定常流でも対流加速度は存在し、

$$
\boxed{a_x=u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}
=2x(x^2+y^2)},
$$

$$
\boxed{a_y=u\frac{\partial v}{\partial x}+v\frac{\partial v}{\partial y}
=2y(x^2+y^2)}.
$$

渦度は $\boxed{\omega_z=\partial v/\partial x-\partial u/\partial y=0}$ である。

### 問3

十分発達した軸対称な一方向流なので、$u_r=u_\theta=0,u_z=u_z(r)$。時間、角度、軸方向の速度微分が消え、

$$
\boxed{0=K+\frac\mu r\frac d{dr}\left(r\frac{du_z}{dr}\right)}.
$$

2回積分すると $u_z=-Kr^2/(4\mu)+C_1\ln r+C_2$。静止壁の無滑り条件 $u_z(a)=u_z(a/e)=0$ を使い、$\ln a-\ln(a/e)=1$ に注意すれば

$$
\boxed{u_z(r)=\frac K{4\mu}\left[a^2-r^2+a^2(1-e^{-2})\ln\frac ra\right],
\qquad\frac ae\le r\le a}.
$$

両端の速度0と微分方程式を直接代入して確認できる。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 9ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
