---
sidebar_label: "2020年8月実施 材料力学 問1"
tags:
  - Hokkaido-University
  - Engineering.Mechanics-of-Materials.Torsion
  - Engineering.Mechanics-of-Materials.Stress-Transformation
---

# 北海道大学 工学院 機械・宇宙航空工学系 2020年8月実施 材料力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

長さ $L$、外径 $d_1$、内径 $d_2$ の一様な円管の両端A、Bを剛体壁に固定する。Aから距離 $e<L/2$ にある断面Cに軸まわりのねじりモーメント $T$ を作用させ、さらに全体の温度を $t$ だけ上げる。縦弾性係数を $E$、横弾性係数を $G$、線膨張係数を $\alpha$ とする。半径方向の熱ひずみに対する拘束を無視し、部材の質量も無視する。

1. 断面二次極モーメントを求めよ。
2. 断面Cのねじれ角を求めよ。
3. 円管に生じる最大せん断応力の大きさと、その方向が中心軸となす角を求めよ。

#### 题目描述

均匀圆管长 $L$，外径 $d_1$、内径 $d_2$，两端固定。距A端 $e<L/2$ 的C截面承受轴向扭矩 $T$，同时整体升温 $t$。杨氏模量、剪切模量和线膨胀系数分别为 $E,G,\alpha$。忽略径向热应变的约束和质量。求极惯性矩、C截面的转角，以及最大剪应力及其方向与轴线的夹角。

## **Kai**

### (1)

$$
\boxed{I_p=\int_{d_2/2}^{d_1/2}r^2(2\pi r)\,dr
=\frac\pi{32}(d_1^4-d_2^4)}.
$$

### (2)

両壁の反力トルクの大きさを $T_A,T_B$ とする。つり合いと回転変位の適合条件は

$$
T_A+T_B=T,\qquad T_Ae=T_B(L-e).
$$

したがって $T_A=T(L-e)/L,T_B=Te/L$ であり、Cは $T$ の方向へ

$$
\boxed{\phi_C=\frac{Te(L-e)}{GI_pL}
=\frac{32Te(L-e)}{\pi GL(d_1^4-d_2^4)}}
$$

だけ回転する。

### (3)

$e<L/2$ よりAC側の外表面でねじりせん断応力が最大となり、その大きさは

$$
\tau_0=\frac{T_A(d_1/2)}{I_p}
=\frac{16T(L-e)d_1}{\pi L(d_1^4-d_2^4)}.
$$

軸方向ひずみが拘束されるので $0=\sigma_x/E+\alpha t$、すなわち $\sigma_x=-E\alpha t$。周方向の垂直応力はゼロである。$q=E\alpha t$ と書くと、面内主応力は

$$
\sigma_{1,2}=-\frac q2\pm\sqrt{\frac{q^2}{4}+\tau_0^2}.
$$

第三主応力0は両者の間にあるため、三次元の最大せん断応力も

$$
\boxed{\tau_{\max}=\sqrt{\left(\frac{E\alpha t}{2}\right)^2+
\left[\frac{16T(L-e)d_1}{\pi L(d_1^4-d_2^4)}\right]^2}}.
$$

局所的な周方向を $\tau_{x\theta}=\tau_0>0$ となるように取る。軸から角 $\phi$ の法線をもつ面のせん断応力は $\tau(\phi)=(q/2)\sin2\phi+\tau_0\cos2\phi$。その極大条件から

$$
\boxed{\phi=\frac12\tan^{-1}\frac{E\alpha t}{2\tau_0}}
\quad(0\le\phi\le\pi/4).
$$

最大せん断応力の二つの直交する方向は、軸から $\phi$ と $\phi+\pi/2$ の方向である。トルクの向きを逆転すれば傾く側も逆になる。

## **Reference**

- [北海道大学公式原題の保存版：令和3年度、令和2年8月25日実施、PDF 2ページ](https://web.archive.org/web/20220302172425id_/https://www.eng.hokudai.ac.jp/commonfile/files/graduate/examinfo/gr03/exam2021c1.pdf)
